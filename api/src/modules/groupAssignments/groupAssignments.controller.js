import HttpStatus from 'http-status-codes'
import * as groupAssignmentService from './groupAssignment.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as groupAssignmentDto from './groupAssignments.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all groupAssignments results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllGroupAssignmentsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await groupAssignmentService.getGroupAssignmentsPagination(
      query,
      page,
      limit
    )
    const result = groupAssignmentDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all groupAssignments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all groupAssignments available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllGroupAssignments = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await groupAssignmentService.getAllGroupAssignments(query)
    const result = groupAssignmentDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all groupAssignments fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new groupAssignment
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createGroupAssignment = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await groupAssignmentService.createGroupAssignment(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'groupAssignment created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'asignación de grupo',
      doc,
      notificationModules.groupAssignment
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single groupAssignment available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneGroupAssignment = async (req, res, next) => {
  try {
    const doc = await groupAssignmentService.getGroupAssignment(req.params.id)
    const result = groupAssignmentDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'groupAssignment fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single groupAssignment
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateGroupAssignment = async (req, res, next) => {
  try {
    const doc = await groupAssignmentService.updateGroupAssignment(
      req.params.id,
      req.body,
      req.user
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'groupAssignment updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'asignación de grupo',
      doc,
      notificationModules.groupAssignment
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a groupAssignment
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteGroupAssignment = async (req, res, next) => {
  try {
    const doc = await groupAssignmentService.deleteGroupAssignment(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'groupAssignment deleted successfully'
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

export const deactivateGroupAssignment = async (req, res, next) => {
  try {
    const doc = await groupAssignmentService.deactivateGroupAssignment(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'groupAssignment deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'asignación de grupo',
      doc,
      notificationModules.groupAssignment
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

export const reactivateGroupAssignment = async (req, res, next) => {
  try {
    const doc = await groupAssignmentService.reactivateGroupAssignment(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'groupAssignment reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'asignación de grupo',
      doc,
      notificationModules.groupAssignment
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
