import { Router } from 'express'
import * as todosController from './todos.controller'
// * import validators
// * import middleware 


const router = new Router()

//* C.R.U.D ROUTES *//

/**
 * @desc      get all the records paginated
 * @access    Public
 * @route     GET api/todos
 * @params    query, page, limit
 */
router.get('/todos', todosController.getAllTodosPagination)

/**
 * @desc      get all the records
 * @access    Public
 * @route     GET api/todos
 * @params    queryString, page, limit
 */
router.get('/todos/all', todosController.getAllTodos)

/**
 * @access    Private
 * @route     POST api/todos
 * @desc      create a record
 * @params    {payload}
 */
router.post('/todos', todosController.createTodo)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/todos/id
 * @params    id
 */
router.get('/todos/:id', todosController.getOneTodo)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/todos/id
 * @params    id, {payload}.
 */
router.put('/todos/:id', todosController.updateTodo)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/todos/id
 * @params    id
 */
router.delete('/todos/:id', todosController.deleteTodo)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 * @desc      export to cvs the selected rows
 * @access    Private
 * @route     POST /todos/export/cvs
 * @params    {rows}
 */
router.post('/todos/export/cvs', (req, res) => {
  const rows = req.body
  console.log('todos exort to cvs')
  console.log({ rows })
  return
})

export default router
