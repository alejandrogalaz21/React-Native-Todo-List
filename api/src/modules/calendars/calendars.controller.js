import HttpStatus from 'http-status-codes'
import * as appointmentService from './../appointments/appointment.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as appointmentDto from './../appointments/appointments.dto'
import * as infantsService from './../infants/infant.service'
import * as usersService from './../users/user.service'


/**
 * @desc   Controller method to get all calendars results paginated
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllCalendarsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await appointmentService.getAppointmentsPagination(query, page, limit)
    const result = appointmentDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all calendars fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all calendars available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllCalendars = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    query.psychologist = req.user._id
    const documents = await appointmentService.getAllAppointments(query)
    const result = appointmentDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all calendars fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to create new calendar
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const createCalendar = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const calendar = req.body
    if ( await appointmentService.validateAppointmentSlot(calendar)) {
    const doc = await appointmentService.createAppointment(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'calendar created successfully'
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
 * @desc   Controller method to get single calendar available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getOneCalendar = async (req, res, next) => {
  try {
    const doc = await appointmentService.getAppointment(req.params.id)
    const result = appointmentDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'calendar fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to update single calendar
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const updateCalendar = async (req, res, next) => {
  try {
    const doc = await appointmentService.updateAppointment(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'calendar updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to delete a calendar
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const deleteCalendar = async (req, res, next) => {
  try {
    const doc = await appointmentService.deleteAppointment(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'calendar deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an calendar
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateCalendar = async (req, res, next) => {
  try {
    const doc = await appointmentService.deactivateAppointment(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'Calendar deactivated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an calendar
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateCalendar = async (req, res, next) => {
  try {
    const doc = await appointmentService.reactivateAppointment(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'calendar reactivated successfully'
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
    console.log(req.user)
    const doc = await infantsService.getInfantsByName(req.query,1,10, req.user)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'calendar fetched successfully'
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
    const doc = await usersService.getPsychologistsByNamePagination(req.query,1,10)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'calendar fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    console.log('error')
    next(error)
  }
}