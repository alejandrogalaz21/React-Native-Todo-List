import HttpStatus from 'http-status-codes'
import * as scholarshipService from './scholarship.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as scholarshipDto from './scholarships.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all scholarships results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllScholarshipsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await scholarshipService.getScholarshipsPagination(query, page, limit)
    const result = scholarshipDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all scholarships fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all scholarships available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllScholarships = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await scholarshipService.getAllScholarships(query)
    const result = scholarshipDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all scholarships fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new scholarship
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createScholarship = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await scholarshipService.createScholarship(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'scholarship created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'beca (concepto)',
      doc,
      notificationModules.scholarship
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single scholarship available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneScholarship = async (req, res, next) => {
  try {
    const doc = await scholarshipService.getScholarship(req.params.id)
    const result = scholarshipDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'scholarship fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single scholarship
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateScholarship = async (req, res, next) => {
  try {
    const doc = await scholarshipService.updateScholarship(
      req.params.id,
      req.body,
      req.user._id
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'scholarship updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'beca (concepto)',
      doc,
      notificationModules.scholarship
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a scholarship
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteScholarship = async (req, res, next) => {
  try {
    const doc = await scholarshipService.deleteScholarship(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'scholarship deleted successfully'
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

export const deactivateScholarship = async (req, res, next) => {
  try {
    const doc = await scholarshipService.deactivateScholarship(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'scholarship deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'beca (concepto)',
      doc,
      notificationModules.scholarship
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

export const reactivateScholarship = async (req, res, next) => {
  try {
    const doc = await scholarshipService.reactivateScholarship(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'scholarship reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'beca (concepto)',
      doc,
      notificationModules.scholarship
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
