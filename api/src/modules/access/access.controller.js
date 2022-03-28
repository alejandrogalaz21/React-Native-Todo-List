import HttpStatus from 'http-status-codes'
import * as accessService from './access.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as accessDto from './access.dto'
import * as infantsService from './../infants/infant.service'
import * as usersService from './../users/user.service'
import { notificationModules } from './../notifications/notification.model'

/**
 * @desc   Controller method to get all access results paginated
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllAccessPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await accessService.getAccessPagination(query, page, limit)
    const result = accessDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all access fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all access available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllAccess = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await accessService.getAllAccess(query)
    const result = accessDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all access fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to create new access
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const createAccess = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
     const doc = await accessService.createAccess(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'access created successfully'
    )
    req.app.emit('notification', req.user, 'creó', 'cita', doc, notificationModules.access)
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get single access available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getOneAccess = async (req, res, next) => {
  try {
    const doc = await accessService.getAccess(req.params.id)
    const result = accessDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'access fetched successfully'
    )
    // console.log(doc)
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to update single access
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const updateAccess = async (req, res, next) => {
  try {
    const doc = await accessService.updateAccess(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'access updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'cita',
      doc,
      notificationModules.access
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to delete a access
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const deleteAccess = async (req, res, next) => {
  try {
    const doc = await accessService.deleteAccess(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'access deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an access
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateAccess = async (req, res, next) => {
  try {
    const doc = await accessService.deactivateAccess(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'Access deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'cita',
      doc,
      notificationModules.access
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an access
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateAccess = async (req, res, next) => {
  try {
    const doc = await accessService.reactivateAccess(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'access reactivated successfully'
    )
    req.app.emit('notification', req.user, 'reactivó', 'cita', doc, notificationModules.access)
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get a list of infants by their name
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getInfants = async (req, res, next) => {
  try {
    const doc = await infantsService.getInfantsByName(req.query, 1, 10, req.user)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'access fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    console.log('error')
    next(error)
  }
}

/**
 * @desc   ConController method to get a list of psychologists by their name
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getPsychologists = async (req, res, next) => {
  try {
    const doc = await usersService.getPsychologistsByNamePagination(req.query, 1, 10)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'access fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    console.log('error')
    next(error)
  }
}
