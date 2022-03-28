import HttpStatus from 'http-status-codes'
import * as academicLevelService from './academicLevel.service'
import * as ctrlHelpers from '../../../helpers/controllers.util'

export const getAllAcademicLevels = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await academicLevelService.getAllAcademicLevels(query)
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

export const getOneAcademicLevel = async (req, res, next) => {
  try {
    const doc = await academicLevelService.getAcademicLevel(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'academicLevel fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}
