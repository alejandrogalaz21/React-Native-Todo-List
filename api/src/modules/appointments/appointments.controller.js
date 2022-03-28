import HttpStatus from 'http-status-codes'
import * as appointmentService from './appointment.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as appointmentDto from './appointments.dto'
import * as infantsService from './../infants/infant.service'
import * as usersService from './../users/user.service'
import { notificationModules } from '../notifications/notification.model'

/**
 * @desc   Controller method to get all appointments results paginated
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllAppointmentsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await appointmentService.getAppointmentsPagination(query, page, limit)
    const result = appointmentDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all appointments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all appointments available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllAppointments = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await appointmentService.getAllAppointments(query)
    const result = appointmentDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all appointments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to create new appointment
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const createAppointment = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const appointment = req.body
    if (await appointmentService.validateAppointmentSlot(appointment)) {
      const doc = await appointmentService.createAppointment(req.body)
      const response = ctrlHelpers.responseFormat(
        HttpStatus.CREATED,
        doc,
        'appointment created successfully'
      )
      req.app.emit(
        'notification',
        req.user,
        'creó',
        'cita',
        doc,
        notificationModules.appointment
      )
      return res.status(HttpStatus.CREATED).json(response)
    } else {
      const response = ctrlHelpers.responseFormat(
        HttpStatus.BAD_REQUEST,
        null,
        'El horario esta ocupado.'
      )
      return res.status(HttpStatus.BAD_REQUEST).json(response)
    }
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get single appointment available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getOneAppointment = async (req, res, next) => {
  try {
    const doc = await appointmentService.getAppointment(req.params.id)
    const result = appointmentDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'appointment fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to update single appointment
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const updateAppointment = async (req, res, next) => {
  try {
    const doc = await appointmentService.updateAppointment(
      req.params.id,
      req.body,
      req.user._id
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'appointment updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'cita',
      doc,
      notificationModules.appointment
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to delete a appointment
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const deleteAppointment = async (req, res, next) => {
  try {
    const doc = await appointmentService.deleteAppointment(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'appointment deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an appointment
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateAppointment = async (req, res, next) => {
  try {
    const doc = await appointmentService.deactivateAppointment(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'Appointment deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'cita',
      doc,
      notificationModules.appointment
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an appointment
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateAppointment = async (req, res, next) => {
  try {
    const doc = await appointmentService.reactivateAppointment(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'appointment reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'cita',
      doc,
      notificationModules.appointment
    )
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
      'appointment fetched successfully'
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
      'appointment fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    console.log('error')
    next(error)
  }
}
