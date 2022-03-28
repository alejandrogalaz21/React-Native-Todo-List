import HttpStatus from 'http-status-codes'
import * as permissionService from './permission.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import { getPermissionDto } from './permission.dto'

/**
 * @desc   Controller method to get all permissions results paginated
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllPermissionsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await permissionService.getPermissionsPagination(
      query,
      page,
      limit
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all permissions by pagination fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all permissions available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllPermissions = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await permissionService.getAllPermissions(query)
    console.log("Pemr")
    const permissionDto = getPermissionDto(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      permissionDto,
      'all permissions fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to create new permission
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const createPermission = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await permissionService.createListOfPermission(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'permission created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get single permission available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getOnePermission = async (req, res, next) => {
  try {
    const doc = await permissionService.getPermission(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'permission fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to update single permission
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const updatePermission = async (req, res, next) => {
  try {
    const doc = await permissionService.updatePermission(
      req.params.id,
      req.body
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'permission updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to delete a permission
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const deletePermission = async (req, res, next) => {
  try {
    const doc = await permissionService.deletePermission(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'permission deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
