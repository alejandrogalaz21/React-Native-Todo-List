import HttpStatus from 'http-status-codes'
import * as historicalService from './historical.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import * as historicalDto from './historicals.dto'

/**
 ** @desc   Controller method to get all historicals available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllHistoricals = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await historicalService.getAllHistoricals(query)
    const result = historicalDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all historicals fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single historical available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneHistorical = async (req, res, next) => {
  try {
    const doc = await historicalService.getHistorical(req.params.id)
    const result = historicalDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'historical fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
