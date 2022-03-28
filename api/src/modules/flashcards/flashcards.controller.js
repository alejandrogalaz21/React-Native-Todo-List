import HttpStatus from 'http-status-codes'
import * as flashcardService  from './flashcard.service'
import * as ctrlHelpers from './../../utils/controllers.util'

/**
 * @desc   Controller method to get all flashcards results paginated
 * @param  {object}   req - request object
 * @param  {object}   res - response object
 * @param  {Function} next
 */
export const getAllFlashcardsPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await flashcardService.getFlashcardsPagination(query, page, limit)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all flashcards fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all flashcards available
 * @param  {object}   req - request object
 * @param  {object}   res - response object
 * @param  {Function} next
 */
export const getAllFlashcards = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await flashcardService.getAllFlashcards(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all flashcards fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to create new flashcard
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const createFlashcard = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await flashcardService.createFlashcard(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'flashcard created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get single flashcard available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getOneFlashcard = async (req, res, next) => {
  try {
    const doc = await flashcardService.getFlashcard(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'flashcard fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to update single flashcard
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const updateFlashcard = async (req, res, next) => {
  try {
    const doc = await flashcardService.updateFlashcard(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'flashcard updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to delete a flashcard
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const deleteFlashcard = async (req, res, next) => {
  try {
    const doc = await flashcardService.deleteFlashcard(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'flashcard deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
