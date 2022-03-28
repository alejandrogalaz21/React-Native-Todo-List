import HttpStatus from 'http-status-codes'
import * as feelingService from './feeling.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all feelings available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllFeelings = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await feelingService.getAllFeelings(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all feelings fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single feeling available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneFeeling = async (req, res, next) => {
  try {
    const doc = await feelingService.getFeeling(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'feeling fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
