import User from './user.model'
import { blue } from '../../helpers/chalk.helper'
import * as userService from './user.service'
import * as ctrlHelpers from './../../helpers/controllers.util'

export async function create(req, res, next) {
  try {
    blue('users > controller > create')
    console.log(req.body)
    const {
      name,
      lastName,
      gender,
      phone,
      email,
      picture,
      thumbnail,
      role,
      position,
      center,
      service,
      login,
      password,
      permissions
    } = req.body.values
    const host = req.headers.host
    const hostname = req.hostname
    const user = await userService.createUser(
      name,
      lastName,
      gender,
      phone,
      email,
      picture,
      thumbnail,
      role,
      position,
      center,
      service,
      login,
      password,
      permissions,
      host,
      hostname
    )

    return res.json(user)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all positions
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export async function readMany(req, res, next) {
  try {
    blue('users > controller > readMany')
    const { query } = ctrlHelpers.getQueryString(req.query)

    const result = userService.getAllUsers(query)
    return res.json(result)
  } catch (error) {
    next(error)
  }
}

export async function exportMany(req, res, next) {
  try {
    const selection = req.body.selection || []
    const xlsx = userService.exportManyUsers(selection)
    res.set('Content-disposition', 'attachment; filename=Usuarios.xlsx')
    return res.status(200).type('xlsx').send(xlsx)
  } catch (error) {
    next(error)
  }
}

export async function getAdminPagination(req, res, next) {
  try {
    blue('users > controller > getAdminPagination')
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)

    const result = await userService.getAdminPagination(query, page, limit)
    return res.json(result)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get single user
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export async function readOne(req, res, next) {
  try {
    blue('users > controller > readOne')
    const { _id } = req.params
    const result = await userService.getUser(_id)
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export async function edit(req, res, next) {
  try {
    blue('users > controller > edit')
    const result = await User.findOne(req.params)
      .populate({ path: 'permissions', select: '-user' })
      .lean()
    return res.send(result)
  } catch (error) {
    next(error)
  }
}

export async function update(req, res, next) {
  try {
    blue('users > controller > update')
    const data = await userService.updateUser(
      req.params._id,
      req.body.historical,
      req.user._id,
      req.body.payload
    )
    return res.send(data)
  } catch (error) {
    next(error)
  }
}

export async function remove(req, res, next) {
  try {
    blue('users > controller > remove')
    const { _id } = req.params
    const result = await User.findByIdAndDelete(_id)
    return res.send(result)
  } catch (error) {
    next(error)
  }
}
