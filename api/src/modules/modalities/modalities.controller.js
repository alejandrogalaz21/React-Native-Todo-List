import HttpStatus from 'http-status-codes'
import * as modalityService from './modality.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as modalityDto from './modalities.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all modalities results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllModalitiesPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await modalityService.getModalitiesPagination(query, page, limit)
    const result = modalityDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all modalities fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all modalities available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllModalities = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await modalityService.getAllModalities(query)
    const result = modalityDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all modalities fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new modality
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createModality = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await modalityService.createModality(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'modality created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'modalidad',
      doc,
      notificationModules.modality
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single modality available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneModality = async (req, res, next) => {
  try {
    const doc = await modalityService.getModality(req.params.id)
    const result = modalityDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'modality fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single modality
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateModality = async (req, res, next) => {
  try {
    const doc = await modalityService.updateModality(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'modality updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'modalidad',
      doc,
      notificationModules.modality
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a modality
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteModality = async (req, res, next) => {
  try {
    const doc = await modalityService.deleteModality(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'modality deleted successfully'
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

export const deactivateModality = async (req, res, next) => {
  try {
    const doc = await modalityService.deactivateModality(req.params.id, req.body, req.user._id)
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'modality deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'modalidad',
      doc,
      notificationModules.modality
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

export const reactivateModality = async (req, res, next) => {
  try {
    const doc = await modalityService.reactivateModality(req.params.id, req.body, req.user._id)
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'modality reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'modalidad',
      doc,
      notificationModules.modality
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
