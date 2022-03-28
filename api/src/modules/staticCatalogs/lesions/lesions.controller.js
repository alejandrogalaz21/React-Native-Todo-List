import HttpStatus from 'http-status-codes'
import * as lesionService from './lesion.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all lesions available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllLesions = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await lesionService.getAllLesions(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all lesions fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single lesion available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneLesion = async (req, res, next) => {
  try {
    const doc = await lesionService.getLesion(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'lesion fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
