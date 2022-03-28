import HttpStatus from 'http-status-codes'
import * as dreamService from './dream.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all dreams available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllDreams = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await dreamService.getAllDreams(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all dreams fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single dream available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneDream = async (req, res, next) => {
  try {
    const doc = await dreamService.getDream(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'dream fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
