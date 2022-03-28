import HttpStatus from 'http-status-codes'
import * as rolService from './rol.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

/**
 ** @desc   Controller method to get all rols available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllRols = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await rolService.getAllRols(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all rols fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single rol available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneRol = async (req, res, next) => {
  try {
    const doc = await rolService.getRol(req.params.id)
    const response = ctrlHelpers.responseFormat(HttpStatus.OK, doc, 'rol fetched successfully')
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
