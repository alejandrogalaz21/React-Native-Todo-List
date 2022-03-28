import HttpStatus from 'http-status-codes'
import * as positionService from './position.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as positionDto from './positions.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all positions results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllPositionsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await positionService.getPositionsPagination(query, page, limit)
    const result = positionDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all positions fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all positions available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllPositions = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await positionService.getAllPositions(query)
    const result = positionDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all positions fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new position
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createPosition = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await positionService.createPosition(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'position created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'puesto',
      doc,
      notificationModules.position
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single position available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOnePosition = async (req, res, next) => {
  try {
    const doc = await positionService.getPosition(req.params.id)
    const result = positionDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'position fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single position
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updatePosition = async (req, res, next) => {
  try {
    const doc = await positionService.updatePosition(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'position updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'puesto',
      doc,
      notificationModules.position
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a position
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deletePosition = async (req, res, next) => {
  try {
    const doc = await positionService.deletePosition(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'position deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an position
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivatePosition = async (req, res, next) => {
  try {
    const doc = await positionService.deactivatePosition(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'Position deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'puesto',
      doc,
      notificationModules.position
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an position
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivatePosition = async (req, res, next) => {
  try {
    const doc = await positionService.reactivatePosition(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'position reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'puesto',
      doc,
      notificationModules.position
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
