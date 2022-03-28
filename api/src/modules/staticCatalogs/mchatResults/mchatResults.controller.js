import HttpStatus from 'http-status-codes'
import * as mchatResultService from './mchatResult.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all mchatResults available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllMchatResults = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await mchatResultService.getAllMchatResults(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all mchatResults fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single mchatResult available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneMchatResult = async (req, res, next) => {
  try {
    const doc = await mchatResultService.getMchatResult(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'mchatResult fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
