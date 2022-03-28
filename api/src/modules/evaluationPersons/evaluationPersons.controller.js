import HttpStatus from 'http-status-codes'
import * as evaluationPersonService from './evaluationPerson.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as evaluationPersonDto from './evaluationPersons.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all evaluationPersons results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllEvaluationPersonsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await evaluationPersonService.getEvaluationPersonsPagination(
      query,
      page,
      limit
    )
    const result = evaluationPersonDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all evaluationPersons fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all evaluationPersons available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllEvaluationPersons = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await evaluationPersonService.getAllEvaluationPersons(query)
    const result = evaluationPersonDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all evaluationPersons fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new evaluationPerson
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createEvaluationPerson = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await evaluationPersonService.createEvaluationPerson(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'evaluationPerson created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'aplicante de cuestionario',
      doc,
      notificationModules.evaluationPerson
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single evaluationPerson available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneEvaluationPerson = async (req, res, next) => {
  try {
    const doc = await evaluationPersonService.getEvaluationPerson(req.params.id)
    const result = evaluationPersonDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'evaluationPerson fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single evaluationPerson
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateEvaluationPerson = async (req, res, next) => {
  try {
    const doc = await evaluationPersonService.updateEvaluationPerson(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'evaluationPerson updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'aplicante de cuestionario',
      doc,
      notificationModules.evaluationPerson
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a evaluationPerson
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteEvaluationPerson = async (req, res, next) => {
  try {
    const doc = await evaluationPersonService.deleteEvaluationPerson(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'evaluationPerson deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

export const deactivateEvaluationPerson = async (req, res, next) => {
  try {
    const doc = await evaluationPersonService.deactivateEvaluationPerson(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'evaluationPerson deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'aplicante de cuestionario',
      doc,
      notificationModules.evaluationPerson
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

export const reactivateEvaluationPerson = async (req, res, next) => {
  try {
    const doc = await evaluationPersonService.reactivateEvaluationPerson(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'evaluationPerson reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'aplicante de cuestionario',
      doc,
      notificationModules.evaluationPerson
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
