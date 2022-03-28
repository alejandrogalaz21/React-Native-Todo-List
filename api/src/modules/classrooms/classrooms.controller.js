import HttpStatus from 'http-status-codes'
import * as classroomService from './classroom.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as classroomDto from './classrooms.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all classrooms results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllClassroomsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await classroomService.getClassroomsPagination(query, page, limit)
    const result = classroomDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all classrooms fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all classrooms available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllClassrooms = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await classroomService.getAllClassrooms(query)
    const result = classroomDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all classrooms fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new classroom
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createClassroom = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await classroomService.createClassroom(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'classroom created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'aula',
      doc,
      notificationModules.classroom
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single classroom available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneClassroom = async (req, res, next) => {
  try {
    const doc = await classroomService.getClassroom(req.params.id)
    const result = classroomDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'classroom fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single classroom
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateClassroom = async (req, res, next) => {
  try {
    const doc = await classroomService.updateClassroom(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'classroom updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'aula',
      doc,
      notificationModules.classroom
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a classroom
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteClassroom = async (req, res, next) => {
  try {
    const doc = await classroomService.deleteClassroom(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'classroom deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an classroom
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateClassroom = async (req, res, next) => {
  try {
    const doc = await classroomService.deactivateClassroom(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'Classroom deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'aula',
      doc,
      notificationModules.classroom
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an classroom
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateClassroom = async (req, res, next) => {
  try {
    const doc = await classroomService.reactivateClassroom(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'classroom reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'aula',
      doc,
      notificationModules.classroom
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
