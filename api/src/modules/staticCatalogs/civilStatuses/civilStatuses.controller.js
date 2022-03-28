import HttpStatus from 'http-status-codes'
import * as civilStatusService from './civilStatus.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all civilStatuses available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllCivilStatuses = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await civilStatusService.getAllCivilStatuses(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all civilStatuses fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single civilStatus available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneCivilStatus = async (req, res, next) => {
  try {
    const doc = await civilStatusService.getCivilStatus(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'civilStatus fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
