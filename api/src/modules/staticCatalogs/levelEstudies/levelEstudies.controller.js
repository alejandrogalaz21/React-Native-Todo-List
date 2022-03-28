import HttpStatus from 'http-status-codes'
import * as levelEstudyService from './levelEstudy.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all levelEstudies available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllLevelEstudies = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await levelEstudyService.getAllLevelEstudies(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all levelEstudies fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single levelEstudy available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneLevelEstudy = async (req, res, next) => {
  try {
    const doc = await levelEstudyService.getLevelEstudy(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'levelEstudy fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
