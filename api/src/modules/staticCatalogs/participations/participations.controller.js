import HttpStatus from 'http-status-codes'
import * as participationService from './participation.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'
/**
 ** @desc   Controller method to get all participations available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllParticipations = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await participationService.getAllParticipations(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all participations fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single participation available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneParticipation = async (req, res, next) => {
  try {
    const doc = await participationService.getParticipation(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'participation fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
