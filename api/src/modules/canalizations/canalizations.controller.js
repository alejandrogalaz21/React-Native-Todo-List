import HttpStatus from 'http-status-codes'
import * as canalizationService from './canalization.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as canalizationDto from './canalizations.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all canalizations results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllCanalizationsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await canalizationService.getCanalizationsPagination(query, page, limit)
    const result = canalizationDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all canalizations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all canalizations available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllCanalizations = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await canalizationService.getAllCanalizations(query)
    const result = canalizationDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all canalizations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new canalization
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createCanalization = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await canalizationService.createCanalization(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'canalization created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'canalización',
      doc,
      notificationModules.canalization
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single canalization available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneCanalization = async (req, res, next) => {
  try {
    const doc = await canalizationService.getCanalization(req.params.id)
    const result = canalizationDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'canalization fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single canalization
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateCanalization = async (req, res, next) => {
  try {
    const doc = await canalizationService.updateCanalization(
      req.params.id,
      req.body,
      req.user._id
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'canalization updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'canalización',
      doc,
      notificationModules.canalization
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a canalization
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteCanalization = async (req, res, next) => {
  try {
    const doc = await canalizationService.deleteCanalization(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'canalization deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an service
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateCanalization = async (req, res, next) => {
  try {
    const doc = await canalizationService.deactivateCanalization(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'canalization deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'canalización',
      doc,
      notificationModules.canalization
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an service
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateCanalization = async (req, res, next) => {
  try {
    const doc = await canalizationService.reactivateCanalization(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'canalization reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'canalización',
      doc,
      notificationModules.canalization
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
