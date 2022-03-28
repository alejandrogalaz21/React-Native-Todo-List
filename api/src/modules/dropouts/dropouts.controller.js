import HttpStatus from 'http-status-codes'
import * as dropoutService from './dropout.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as dropoutDto from './dropouts.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all dropouts results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllDropoutsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await dropoutService.getDropoutsPagination(query, page, limit)
    const result = dropoutDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all dropouts fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all dropouts available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllDropouts = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await dropoutService.getAllDropouts(query)
    const result = dropoutDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all dropouts fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new dropout
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createDropout = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await dropoutService.createDropout(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'dropout created successfully'
    )
    req.app.emit('notification', req.user, 'creó', 'baja', doc, notificationModules.dropout)
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single dropout available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneDropout = async (req, res, next) => {
  try {
    const doc = await dropoutService.getDropout(req.params.id)
    const result = dropoutDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'dropout fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single dropout
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateDropout = async (req, res, next) => {
  try {
    const doc = await dropoutService.updateDropout(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'dropout updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'baja',
      doc,
      notificationModules.dropout
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a dropout
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteDropout = async (req, res, next) => {
  try {
    const doc = await dropoutService.deleteDropout(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'dropout deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an dropout
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateDropout = async (req, res, next) => {
  try {
    const doc = await dropoutService.deactivateDropout(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'Dropout deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'baja',
      doc,
      notificationModules.dropout
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an dropout
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateDropout = async (req, res, next) => {
  try {
    const doc = await dropoutService.reactivateDropout(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'dropout reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'baja',
      doc,
      notificationModules.dropout
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
