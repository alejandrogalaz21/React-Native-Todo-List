import HttpStatus from 'http-status-codes'
import * as tutorService from './tutor.service'
import * as ctrlHelpers from './../../../helpers/controllers.util'
import * as tutorDto from './tutors.dto'

/**
 ** @desc   Controller method to get all tutors results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllTutorsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await tutorService.getTutorsPagination(query, page, limit)
    const result = tutorDto.pagination(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all tutors fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all tutors available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllTutors = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await tutorService.getAllTutors(query)
    const result = tutorDto.multiple(documents)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'all tutors fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new tutor
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createTutor = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await tutorService.createTutor(req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'tutor created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single tutor available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneTutor = async (req, res, next) => {
  try {
    const doc = await tutorService.getTutor(req.params.id)
    const result = tutorDto.single(doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      result,
      'tutor fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single tutor
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateTutor = async (req, res, next) => {
  try {
    const doc = await tutorService.updateTutor(req.params.id, req.body, req.user._id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'tutor updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to delete a tutor
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const deleteTutor = async (req, res, next) => {
  try {
    const doc = await tutorService.deleteTutor(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'tutor deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
