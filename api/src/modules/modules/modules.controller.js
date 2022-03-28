import HttpStatus from 'http-status-codes'
import * as moduleService from './module.service'
import * as ctrlHelpers from './../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all modules available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllModules = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await moduleService.getAllModules(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all modules fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single module available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneModule = async (req, res, next) => {
  try {
    const doc = await moduleService.getModule(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'module fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
