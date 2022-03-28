import HttpStatus from 'http-status-codes'
import * as userService from './user.service'
import * as ctrlHelpers from './../../utils/controllers.util'
import * as userDto from './user.dto'

/**
 * @desc   Controller method to get all users results paginated
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllUsersPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const docs = await userService.getUsersPagination(query, page, limit)
    const documents = userDto.pagination(docs)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all users fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all users available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllUsers = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const docs = await userService.getAllUsers(query)
    const documents = userDto.multiple(docs)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all users fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to create new user
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const createUser = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await userService.createUser(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'user created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get single user available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getOneUser = async (req, res, next) => {
  try {
    const doc = await userService.getUser(req.params.id)
    const document = userDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'user fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to update single user
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const updateUser = async (req, res, next) => {
  try {
    const doc = await userService.updateUser(req.params.id, req.body)
    const document = userDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      document,
      'user updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to delete a user
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const deleteUser = async (req, res, next) => {
  try {
    const doc = await userService.deleteUser(req.params.id)
    const document = userDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      document,
      'user deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
