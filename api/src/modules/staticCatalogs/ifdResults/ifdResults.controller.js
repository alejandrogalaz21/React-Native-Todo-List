import HttpStatus from 'http-status-codes'
import * as ifdResultService from './ifdResult.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all ifdResults available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllIfdResults = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await ifdResultService.getAllIfdResults(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all ifdResults fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single ifdResult available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneIfdResult = async (req, res, next) => {
  try {
    const doc = await ifdResultService.getIfdResult(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'ifdResult fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
