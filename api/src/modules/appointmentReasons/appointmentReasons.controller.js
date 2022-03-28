import HttpStatus from 'http-status-codes'
import * as appointmentReasonService from './appointmentReason.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as appointmentReasonDto from './appointmentReasons.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 * @desc   Controller method to get all appointmentReasons results paginated
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllAppointmentReasonsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await appointmentReasonService.getAppointmentReasonsPagination(query, page, limit)
    const result = appointmentReasonDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all appointmentReasons fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all appointmentReasons available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllAppointmentReasons = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await appointmentReasonService.getAllAppointmentReasons(query)
    const result = appointmentReasonDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all appointmentReasons fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to create new appointmentReason
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const createAppointmentReason = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')

    const doc = await appointmentReasonService.createAppointmentReason(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'appointmentReason created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'puesto',
      doc,
      notificationModules.appointmentReason
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get single appointmentReason available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getOneAppointmentReason = async (req, res, next) => {
  try {
    const doc = await appointmentReasonService.getAppointmentReason(req.params.id)
    const result = appointmentReasonDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'appointmentReason fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to update single appointmentReason
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const updateAppointmentReason = async (req, res, next) => {
  try {
    const doc = await appointmentReasonService.updateAppointmentReason(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'appointmentReason updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'puesto',
      doc,
      notificationModules.appointmentReason
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to delete a appointmentReason
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const deleteAppointmentReason = async (req, res, next) => {
  try {
    const doc = await appointmentReasonService.deleteAppointmentReason(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'appointmentReason deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an appointmentReason
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateAppointmentReason = async (req, res, next) => {
  try {
    const doc = await appointmentReasonService.deactivateAppointmentReason(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'AppointmentReason deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'puesto',
      doc,
      notificationModules.appointmentReason
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an appointmentReason
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateAppointmentReason = async (req, res, next) => {
  try {
    const doc = await appointmentReasonService.reactivateAppointmentReason(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'appointmentReason reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'puesto',
      doc,
      notificationModules.appointmentReason
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
