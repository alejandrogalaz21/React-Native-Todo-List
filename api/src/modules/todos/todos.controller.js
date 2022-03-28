import HttpStatus from 'http-status-codes'
import * as todoService  from './todo.service'
import * as ctrlHelpers from './../../utils/controllers.util'

/**
 * @desc   Controller method to get all todos results paginated
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllTodosPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)
    const documents = await todoService.getTodosPagination(query, page, limit)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all todos fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get all todos available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getAllTodos = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await todoService.getAllTodos(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all todos fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to create new todo
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const createTodo = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const doc = await todoService.createTodo(req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'todo created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get single todo available
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const getOneTodo = async (req, res, next) => {
  try {
    const doc = await todoService.getTodo(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'todo fetched successfully'
    )
   return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to update single todo
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const updateTodo = async (req, res, next) => {
  try {
    const doc = await todoService.updateTodo(req.params.id, req.body)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'todo updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to delete a todo
 * @param  {object} req - request object
 * @param  {object} res - response object
 * @param  {Function} next
 */
export const deleteTodo = async (req, res, next) => {
  try {
    console.log(req.params)
    const doc = await todoService.deleteTodo(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'todo deleted successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
