import Permission from './permission.model'
import Module from './../modules/module.model'
// import User from './../users/user.model'

/**
 * @desc      get all permission document's.
 * @params    query.
 */
export const getAllPermissions = async (query = {}) => {
  try {


    let data = await Permission.find(query).sort({ module: 1 }).populate('module')

    const listModules = data.map(permit => permit.module)
    console.log("permissions")
    console.log(query) 
   // const modulesForAdd = await Module.find({ _id: { $nin: listModules } })

    // Se crean los permisos que falten al usuario por cada módulo
    // if (modulesForAdd.length > 0) {
    //   modulesForAdd.map(async module => {
    //     const addPermission = await Permission.create({
    //       module: module._id,
    //       user: query.user
    //     })
    //     User.findById(addPermission.user, function (err, user) {
    //       user.permissions.push(addPermission._id)
    //     })
    //   })
    //   data = await Permission.find(query).sort({ module: 1 }).populate('module')
    // }

    let data2 = 
      (await Permission.find(query).sort({ module: 1 }).populate('module'))
      console.log("permissions2")

    return data2 || data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get all permission document's paginated.
 * @params    query, page, limit.
 */
export const getPermissionsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      populate: 'user module',
      sort: { _id: 1 }
    }
    const data = await Permission.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      create new permission.
 * @params    body.
 */
export const createPermission = async permission => {
  try {
    const data = await Permission.create(permission)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      create new permission.
 * @params    body.
 */
export const createListOfPermission = async permissionsArray => {
  try {
    const data = await Permission.insertMany(permissionsArray)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get single permission document.
 * @params    id.
 */
export const getPermission = async id => {
  try {
    const data = await Permission.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      update single permission document.
 * @params    id, body.
 */
export const updatePermission = async (id, body) => {
  try {
    const data = await Permission.findByIdAndUpdate(id, body, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      delete single permission document.
 * @params    id.
 */
export const deletePermission = async id => {
  try {
    const data = await Permission.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
