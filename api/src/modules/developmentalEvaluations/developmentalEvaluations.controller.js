import HttpStatus from 'http-status-codes'
import * as developmentalEvaluationService from './developmentalEvaluation.service'
import * as evaluationPersonService from './../evaluationPersons/evaluationPerson.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as developmentalEvaluationDto from './developmentalEvaluations.dto'
import { notificationModules } from '../notifications/notification.model'

/**
 ** @desc   Controller method to get all developmentalEvaluations results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllDevelopmentalEvaluationsPagination = async (req, res, next) => {
  try {
    const infantId = req.params.infantId
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await developmentalEvaluationService.getDevelopmentalEvaluationsPagination(
      query,
      page,
      limit,
      infantId
    )
    const result = developmentalEvaluationDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all developmentalEvaluations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all developmentalEvaluations results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getDevelopmentalEvaluationsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await developmentalEvaluationService.getaAllDevelopmentalEvaluationsPagination(
      query,
      page,
      limit,
      req.user
    )
    const result = developmentalEvaluationDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all developmentalEvaluations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

export const getEvaluationPerson = async (req, res, next) => {
  try {
    const doc = await evaluationPersonService.getEvaluationPersonsByName(req.query, 1, 10)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'evaluation person fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    console.log('error')
    next(error)
  }
}

/**
 ** @desc   Controller method to get all developmentalEvaluations available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllDevelopmentalEvaluations = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await developmentalEvaluationService.getAllDevelopmentalEvaluations(
      query
    )
    const result = developmentalEvaluationDto.single(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all developmentalEvaluations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new developmentalEvaluation
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createDevelopmentalEvaluation = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await developmentalEvaluationService.createDevelopmentalEvaluation(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'developmentalEvaluation created successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'creó',
      'evaluación de desarollo',
      doc,
      notificationModules.developmentalEvaluation
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single developmentalEvaluation available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneDevelopmentalEvaluation = async (req, res, next) => {
  try {
    const doc = await developmentalEvaluationService.getDevelopmentalEvaluation(req.params.id)
    const result = developmentalEvaluationDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'developmentalEvaluation fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single developmentalEvaluation
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateDevelopmentalEvaluation = async (req, res, next) => {
  try {
    const doc = await developmentalEvaluationService.updateDevelopmentalEvaluation(
      req.params.id,
      req.body
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'developmentalEvaluation updated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'actualizó',
      'evaluación de desarollo',
      doc,
      notificationModules.developmentalEvaluation
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a developmentalEvaluation
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteDevelopmentalEvaluation = async (req, res, next) => {
  try {
    const doc = await developmentalEvaluationService.deleteDevelopmentalEvaluation(
      req.params.id
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'developmentalEvaluation deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an developmentalEvaluation
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateDevelopmentalEvaluation = async (req, res, next) => {
  try {
    const doc = await developmentalEvaluationService.deactivateDevelopmentalEvaluation(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = false
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'DevelopmentalEvaluation deactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'desactivó',
      'evaluación de desarollo',
      doc,
      notificationModules.developmentalEvaluation
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an developmentalEvaluation
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateDevelopmentalEvaluation = async (req, res, next) => {
  try {
    const doc = await developmentalEvaluationService.reactivateDevelopmentalEvaluation(
      req.params.id,
      req.body,
      req.user._id
    )
    doc.active = true
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'developmentalEvaluation reactivated successfully'
    )
    req.app.emit(
      'notification',
      req.user,
      'reactivó',
      'evaluación de desarollo',
      doc,
      notificationModules.developmentalEvaluation
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
