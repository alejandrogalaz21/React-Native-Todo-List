import HttpStatus from 'http-status-codes'
import * as authorizationService from './authorization.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as authorizationDto from './authorizations.dto'

/**
 ** @desc   Controller method to get all authorizations results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllAuthorizationsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await authorizationService.getAuthorizationsPagination(
      query,
      page,
      limit
    )
    const result = authorizationDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all authorizations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all authorizations available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllAuthorizations = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await authorizationService.getAllAuthorizations(query)
    const result = authorizationDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all authorizations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new authorization
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createAuthorization = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await authorizationService.createAuthorization(req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'authorization created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single authorization available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneAuthorization = async (req, res, next) => {
  try {
    const doc = await authorizationService.getAuthorization(req.params.id)
    const result = authorizationDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'authorization fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single authorization
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateAuthorization = async (req, res, next) => {
  try {
    const doc = await authorizationService.updateAuthorization(
      req.params.id,
      req.body,
      req.user._id
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'authorization updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a authorization
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteAuthorization = async (req, res, next) => {
  try {
    const doc = await authorizationService.deleteAuthorization(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'authorization deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
