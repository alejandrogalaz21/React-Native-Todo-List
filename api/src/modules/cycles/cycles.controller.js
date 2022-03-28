import HttpStatus from 'http-status-codes'
import * as cycleService from './cycle.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as cycleDto from './cycles.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all cycles results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllCyclesPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await cycleService.getCyclesPagination(query, page, limit)
    const result = cycleDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all cycles fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all cycles available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllCycles = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await cycleService.getAllCycles(query)
    const result = cycleDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all cycles fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new cycle
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createCycle = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await cycleService.createCycle(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'cycle created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'ciclo escolar',
      doc,
      notificationModules.cycle
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single cycle available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneCycle = async (req, res, next) => {
  try {
    const doc = await cycleService.getCycle(req.params.id)
    const result = cycleDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'cycle fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single cycle
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateCycle = async (req, res, next) => {
  try {
    const doc = await cycleService.updateCycle(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'cycle updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'ciclo escolar',
      doc,
      notificationModules.cycle
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a cycle
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteCycle = async (req, res, next) => {
  try {
    const doc = await cycleService.deleteCycle(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'cycle deleted successfully'
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

export const deactivateCycle = async (req, res, next) => {
  try {
    const doc = await cycleService.deactivateCycle(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'cycle deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'ciclo escolar',
      doc,
      notificationModules.cycle
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

export const reactivateCycle = async (req, res, next) => {
  try {
    const doc = await cycleService.reactivateCycle(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'cycle reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'ciclo escolar',
      doc,
      notificationModules.cycle
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
