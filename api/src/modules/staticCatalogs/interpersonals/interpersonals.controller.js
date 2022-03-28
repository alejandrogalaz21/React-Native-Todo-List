import HttpStatus from 'http-status-codes'
import * as interpersonalService from './interpersonal.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all interpersonals available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllInterpersonals = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await interpersonalService.getAllInterpersonals(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all interpersonals fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single interpersonal available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneInterpersonal = async (req, res, next) => {
  try {
    const doc = await interpersonalService.getInterpersonal(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'interpersonal fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
