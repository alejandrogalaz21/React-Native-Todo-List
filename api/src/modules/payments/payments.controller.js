import HttpStatus from 'http-status-codes'
import * as paymentService from './payment.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as paymentDto from './payments.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all payments results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllPaymentsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await paymentService.getPaymentsPagination(query, page, limit)
    const result = paymentDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all payments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all payments available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllPayments = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await paymentService.getAllPayments(query)
    const result = paymentDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all payments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new payment
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createPayment = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await paymentService.createPayment(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'payment created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'concepto de pago',
      doc,
      notificationModules.payment
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single payment available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOnePayment = async (req, res, next) => {
  try {
    const doc = await paymentService.getPayment(req.params.id)
    const result = paymentDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'payment fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single payment
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updatePayment = async (req, res, next) => {
  try {
    const doc = await paymentService.updatePayment(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'payment updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'concepto de pago',
      doc,
      notificationModules.payment
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a payment
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deletePayment = async (req, res, next) => {
  try {
    const doc = await paymentService.deletePayment(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'payment deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an payment
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivatePayment = async (req, res, next) => {
  try {
    const doc = await paymentService.deactivatePayment(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'Payment deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'concepto de pago',
      doc,
      notificationModules.payment
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an payment
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivatePayment = async (req, res, next) => {
  try {
    const doc = await paymentService.reactivatePayment(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'payment reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'concepto de pago',
      doc,
      notificationModules.payment
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
