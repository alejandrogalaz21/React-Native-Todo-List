import HttpStatus from 'http-status-codes'
import * as generalService from './general.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'
import * as generalDto from './generals.dto'
import { notificationModules } from '../../notifications/notification.model'

/**
 ** @desc   Controller method to get all generals results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllGeneralsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await generalService.getGeneralsPagination(query, page, limit)
    const result = generalDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all generals fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all generals available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllGenerals = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await generalService.getAllGenerals(query)
    const result = generalDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all generals fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new general
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createGeneral = async (req, res, next) => {
  try {
    console.log('user controller -> newGeneral()')
    const doc = await generalService.createGeneral(req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'general created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'datos generales',
      doc,
      notificationModules.inscription
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single general available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneGeneral = async (req, res, next) => {
  try {
    const doc = await generalService.getGeneral(req.params.id)
    const result = generalDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'general fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single general
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateGeneral = async (req, res, next) => {
  try {
    const doc = await generalService.updateGeneral(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'general updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'datos generales',
      doc,
      notificationModules.inscription
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a general
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteGeneral = async (req, res, next) => {
  try {
    const doc = await generalService.deleteGeneral(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'general deleted successfully'
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

export const deactivateGeneral = async (req, res, next) => {
  try {
    const doc = await generalService.deactivateGeneral(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'general deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'datos generales',
      doc,
      notificationModules.inscription
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

export const reactivateGeneral = async (req, res, next) => {
  try {
    const doc = await generalService.reactivateGeneral(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'general reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'datos generales',
      doc,
      notificationModules.inscription
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
