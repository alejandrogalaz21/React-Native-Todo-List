import HttpStatus from 'http-status-codes'
import * as canalizationLocationService from './canalizationLocation.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as canalizationLocationDto from './canalizationLocations.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all canalizationLocations results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllCanalizationLocationsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await canalizationLocationService.getCanalizationLocationsPagination(
      query,
      page,
      limit
    )
    const result = canalizationLocationDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all canalizationLocations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all canalizationLocations available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllCanalizationLocations = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await canalizationLocationService.getAllCanalizationLocations(query)
    const result = canalizationLocationDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all canalizationLocations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new canalizationLocation
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createCanalizationLocation = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await canalizationLocationService.createCanalizationLocation(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'canalizationLocation created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'ubicación de canalización',
      doc,
      notificationModules.canalizationLocation
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single canalizationLocation available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneCanalizationLocation = async (req, res, next) => {
  try {
    const doc = await canalizationLocationService.getCanalizationLocation(req.params.id)
    const result = canalizationLocationDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'canalizationLocation fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single canalizationLocation
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateCanalizationLocation = async (req, res, next) => {
  try {
    const doc = await canalizationLocationService.updateCanalizationLocation(
      req.params.id,
      req.body,
      req.user._id
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'canalizationLocation updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'ubicación de canalización',
      doc,
      notificationModules.canalizationLocation
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a canalizationLocation
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteCanalizationLocation = async (req, res, next) => {
  try {
    const doc = await canalizationLocationService.deleteCanalizationLocation(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'canalizationLocation deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an canalizationLocation
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateCanalizationLocation = async (req, res, next) => {
  try {
    const doc = await canalizationLocationService.deactivateCanalizationLocation(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'CanalizationLocation deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'ubicación de canalización',
      doc,
      notificationModules.canalizationLocation
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an canalizationLocation
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateCanalizationLocation = async (req, res, next) => {
  try {
    const doc = await canalizationLocationService.reactivateCanalizationLocation(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'canalizationLocation reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'ubicación de canalización',
      doc,
      notificationModules.canalizationLocation
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
