import HttpStatus from 'http-status-codes'
import * as statusRelationshipService from './statusRelationship.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all statusRelationships available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllStatusRelationships = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await statusRelationshipService.getAllStatusRelationships(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all statusRelationships fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single statusRelationship available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneStatusRelationship = async (req, res, next) => {
  try {
    const doc = await statusRelationshipService.getStatusRelationship(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'statusRelationship fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
