import HttpStatus from 'http-status-codes'
import * as statusEvaluationService from './statusEvaluation.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all statusEvaluations available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllStatusEvaluations = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await statusEvaluationService.getAllStatusEvaluations(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all statusEvaluations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single statusEvaluation available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneStatusEvaluation = async (req, res, next) => {
  try {
    const doc = await statusEvaluationService.getStatusEvaluation(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'statusEvaluation fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
