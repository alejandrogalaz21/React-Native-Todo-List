import HttpStatus from 'http-status-codes'
import * as centerService from './center.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as centerDto from './centers.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all centers results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllCentersPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await centerService.getCentersPagination(query, page, limit)
    const result = centerDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all centers fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all centers available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllCenters = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await centerService.getAllCenters(query)
    const result = centerDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all centers fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new center
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createCenter = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await centerService.createCenter(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'center created successfully'
    )
    req.app.emit('notification', req.user, 'creó', 'centro', doc, notificationModules.center)
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single center available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneCenter = async (req, res, next) => {
  try {
    const doc = await centerService.getCenter(req.params.id)
    const result = centerDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'center fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single center
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateCenter = async (req, res, next) => {
  try {
    const doc = await centerService.updateCenter(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'center updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'centro',
      doc,
      notificationModules.center
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a center
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteCenter = async (req, res, next) => {
  try {
    const doc = await centerService.deleteCenter(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'center deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deactivateCenter = async (req, res, next) => {
  try {
    const doc = await centerService.deactivateCenter(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'Center deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'centro',
      doc,
      notificationModules.center
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an center
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateCenter = async (req, res, next) => {
  try {
    const doc = await centerService.reactivateCenter(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'center reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'centro',
      doc,
      notificationModules.center
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
