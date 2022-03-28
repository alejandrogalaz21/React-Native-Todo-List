import HttpStatus from 'http-status-codes'
import * as planningService from './planning.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as planningDto from './plannings.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all plannings results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllPlanningsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await planningService.getPlanningsPagination(query, page, limit)
    const result = planningDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all plannings fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all plannings available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllPlannings = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await planningService.getAllPlannings(query)
    const result = planningDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all plannings fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new planning
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createPlanning = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await planningService.createPlanning(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'planning created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'planeación',
      doc,
      notificationModules.planning
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single planning available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOnePlanning = async (req, res, next) => {
  try {
    const doc = await planningService.getPlanning(req.params.id)
    const result = planningDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'planning fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single planning
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updatePlanning = async (req, res, next) => {
  try {
    const doc = await planningService.updatePlanning(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'planning updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'planeación',
      doc,
      notificationModules.planning
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a planning
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deletePlanning = async (req, res, next) => {
  try {
    const doc = await planningService.deletePlanning(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'planning deleted successfully'
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

export const deactivatePlanning = async (req, res, next) => {
  try {
    const doc = await planningService.deactivatePlanning(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'planning deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivo',
      'planeación',
      doc,
      notificationModules.planning
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

export const reactivatePlanning = async (req, res, next) => {
  try {
    const doc = await planningService.reactivatePlanning(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'planning reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'activo',
      'planeación',
      doc,
      notificationModules.planning
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
