import HttpStatus from 'http-status-codes'
import * as percentageService from './percentage.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as percentageDto from './percentages.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all percentages results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllPercentagesPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await percentageService.getPercentagesPagination(query, page, limit)
    const result = percentageDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all percentages fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all percentages available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllPercentages = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await percentageService.getAllPercentages(query)
    const result = percentageDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all percentages fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new percentage
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createPercentage = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await percentageService.createPercentage(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'percentage created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'beca (porcentaje)',
      doc,
      notificationModules.percentage
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single percentage available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOnePercentage = async (req, res, next) => {
  try {
    const doc = await percentageService.getPercentage(req.params.id)
    const result = percentageDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'percentage fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single percentage
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updatePercentage = async (req, res, next) => {
  try {
    const doc = await percentageService.updatePercentage(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'percentage updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'beca (porcentaje)',
      doc,
      notificationModules.percentage
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a percentage
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deletePercentage = async (req, res, next) => {
  try {
    const doc = await percentageService.deletePercentage(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'percentage deleted successfully'
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

export const deactivatePercentage = async (req, res, next) => {
  try {
    const doc = await percentageService.deactivatePercentage(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'percentage deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'beca (porcentaje)',
      doc,
      notificationModules.percentage
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

export const reactivatePercentage = async (req, res, next) => {
  try {
    const doc = await percentageService.reactivatePercentage(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'percentage reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'beca (porcentaje)',
      doc,
      notificationModules.percentage
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
