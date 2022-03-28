import User from './user.model'
import bcrypt from 'bcryptjs'
import { Permission } from './../permissions/permission.model'
import Historical from './../historicals/historical.model'
import { generatePassword } from './../auth/auth.helper'
import { generateMailer } from './../../mailer'
import { isEmpty, dmy } from './../../helpers'
import { exportToXLSX } from './../../libs/exporting/excel'
import { env, getConfig } from './../../keys'
import mongoose from 'mongoose'

/**
 * @desc      create new User.
 * @params    body.
 */
export const createUser = async (
  name,
  lastName,
  gender,
  phone,
  email,
  picture,
  thumbnail,
  role,
  position,
  centers,
  service,
  login,
  permissions,
  host,
  reqHostname
) => {
  try {
    const config = await getConfig()

    const centerArray = centers.map(center => center.value)
    // Generate the salt and hash
    const password = generatePassword(10)
    const salt = await bcrypt.genSalt(10)
    const hashed = await bcrypt.hash(password, salt)

    // Store the documment on the DB, with the hashed password
    const data = {
      name,
      lastName,
      gender,
      phone,
      email,
      picture,
      thumbnail,
      role,
      position,
      centers: centerArray,
      service,
      login,
      password: '$2a$10$rgt5/rs4e.MuTRaLwctohOIXSZE1JZcc2tw3GO6XTMsZ4gfEBfe8a',
      permissions: []
    }
    const user = await User.create(data)

    if (data.role === 0 || data.role === 1) {
      const hostname = env === 'development' ? 'localhost:3000' : host
      const url = `https://${hostname}/login`
      const logo = `https://${reqHostname}${config.settings.logo.path}`

      const mailer = await generateMailer()
      await mailer.send({
        template: 'register',
        message: { to: data.email },
        locals: { url, provisional: password, name: data.name, logo }
      })
    }

    // Save permissions
    if (!isEmpty(permissions)) {
      const inserted = await createPermissions(permissions, user)

      console.log(user)
      // Update the users with the permissions
      const updated = await User.findByIdAndUpdate(
        user._id,
        { permissions: inserted },
        { new: true }
      )
        .sort({ updatedAt: -1 })
        .populate('thumbnail', 'path')
        .lean()

      return updated
    }
    return user
  } catch (error) {
    throw new Error(error)
  }
}

export async function getAllUsers(query = {}) {
  try {
    const result = await User.find({ role: 1 })
      .find(query)
      .populate({ path: 'historical', populate: 'createdBy' })
      .populate('position')
      .populate('thumbnail', 'path')
      .sort({ updatedAt: -1 })
      .select('-password')
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export async function exportManyUsers(selection) {
  try {
    const query = selection.length > 0 ? { _id: { $in: selection } } : {}

    const roles = ['Administrador', 'Usuario', 'Cuidador Titular', 'Cuidador Auxiliar']

    const payload = await User.find(query)
      .select('-password -thumbnail -historical')
      .sort({ updatedAt: -1 })

    const columns = [
      { title: 'Nombre', value: 'name' },
      { title: 'Apellidos', value: 'lastName' },
      { title: 'Email', value: 'email' },
      { title: 'Rol', value: row => roles[row.role] },
      { title: 'Activo', value: row => (row.active ? 'Sí' : 'No') },
      { title: 'Creado', value: row => dmy(row.createdAt) },
      { title: 'Modificado', value: row => dmy(row.updatedAt) }
    ]

    const users = payload.filter(user => user.role === 1)
    const admins = payload.filter(user => user.role === 0)

    const sheets = [
      { title: 'Administradores', data: admins, columns },
      { title: 'Usuarios', data: users, columns }
    ]

    const xlsx = exportToXLSX('Usuarios', sheets)
    return xlsx
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get all user document's paginated.
 * @params    query, page, limit.
 */
export const getPsychologistsByNamePagination = async (
  query = { name: null },
  page = 0,
  limit = 10
) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
    }
    const regex = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    const aggregate = User.aggregate([
      {
        $lookup: {
          from: 'positions',
          localField: 'position',
          foreignField: '_id',
          as: 'position'
        }
      },
      // { $unwind: '$position' },
      {
        $project: {
          _id: 1,
          name: 1,
          lastName: 1,
          motherLastName: 1,
          positionId: '$position._id',
          position: '$position.name',
          fullName: {
            $concat: ['name', ' ', 'lastname']
          }
        }
      },
      {
        $match: { positionId: mongoose.Types.ObjectId('6203f43debfa52951c9c542e') }
      },
      // {
      //   $match: { position: 'Psicologo' }
      // },
      query?.name
        ? {
            $match: {
              $or: [
                { name: regex },
                { lastName: regex },
                { motherLastName: regex },
                { fullName: regex },
                { email: regex }
              ]
            }
          }
        : { $match: {} }
    ])
    const result = await User.aggregatePaginate(aggregate, options)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get single user document.
 * @params    id.
 */
export async function getUser(id) {
  try {
    const result = await User.findById(id)
      .select('-password')
      .populate('thumbnail', 'path')
      .populate('centers position')
      .populate({ path: 'permissions', populate: 'module' })
      .lean()
    console.log('result')
    console.log(result)
    return result
  } catch (error) {
    throw new Error(error)
  }
}

//   export async function edit(req, res, next) {
//     try {
//       blue('users > controller > edit')
//       const result = await User.findOne(req.params)
//         .populate({ path: 'permissions', select: '-user' })
//         .lean()
//       return res.send(result)
//     } catch (error) {
//       next(error)
//     }
//   }

export async function updateUser(id, historic, userId, payload) {
  try {
    const query = { _id: id }
    const user = await User.findOne(query)

    // Old permissions to remove
    const permissionsToRemove = user.permissions.map(permission => permission._id)

    // Remove from DB user old permissions
    await Permission.deleteMany({ _id: { $in: permissionsToRemove } })
    const record = await User.findOneAndUpdate(query, { permissions: [] }, { new: true })

    const historical = await Historical.create({
      ...historic,
      module: 'user',
      title: record.fullName,
      createdBy: user._id,
      document: record._id
    })

    // Insert the user new permissions
    const inserted = await createPermissions(payload.permissions, user)
    const data = await User.findOneAndUpdate(
      query,
      { ...payload, permissions: inserted, $push: { historical } },
      { new: true }
    )
      .populate('institutions', 'name')
      .populate('thumbnail', 'path')
      .lean()

    return data
  } catch (error) {
    throw new Error(error)
  }
}

//   export async function remove(req, res, next) {
//     try {
//       blue('users > controller > remove')
//       const { _id } = req.params
//       const result = await User.findByIdAndDelete(_id)
//       return res.send(result)
//     } catch (error) {
//       next(error)
//     }
//   }

async function createPermissions(permissions = [], user) {
  const addPermissions = permissions
    .filter(p => p.create || p.read || p.update || p.delete)
    .map(p => ({ ...p, user }))
  const inserted = await Permission.insertMany(addPermissions)

  return inserted.map(item => item._id)
}

export async function getAdminPagination(query = {}, page = 1, limit = 10) {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: 'position'
    }

    const querySearch = {}

    const regexName = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    const regexLastName = { $regex: new RegExp('.*' + query?.lastName + '.*', 'i') }
    const regexEmail = { $regex: new RegExp('.*' + query?.email + '.*', 'i') }
    if (query.endDateFilter && query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.createdAt = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter }
    }
    if (query.role) querySearch.role = query.role
    if (query.position) querySearch.position = query.position
    if (query.name) querySearch.$or = [{ name: regexName }]
    if (query.lastName) querySearch.$or = [{ lastName: regexLastName }]
    if (query.email) querySearch.$or = [{ email: regexEmail }]
    if (query.center) {
      const centerArray = []
      for (const center of query.center.split(',')) {
        centerArray.push(center)
      }
      querySearch.centers = { $all: centerArray }
    }
    // 6203f7ccebfa52951c9c54e5

    const data = await User.paginate(querySearch, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
