import HttpStatus from 'http-status-codes'
import * as evaluationService from './evaluation.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all evaluations available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllEvaluations = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await evaluationService.getAllEvaluations(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all evaluations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single evaluation available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneEvaluation = async (req, res, next) => {
  try {
    const doc = await evaluationService.getEvaluation(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'evaluation fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
