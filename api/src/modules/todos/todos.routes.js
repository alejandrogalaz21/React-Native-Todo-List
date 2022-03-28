import { Router } from 'express'
import * as todosController from './todos.controller'
// * import validators
// * import middleware

const router = new Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Todos:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of Todos
 *        title:
 *          type: string
 *          description: the Todos title
 *        description:
 *          type: string
 *          description: the Todos description
 * tags:
 *  name: Todos
 *  description: Todos endpoint
 */

/**
 * @swagger
 * /api/todos:
 *  get:
 *    summary: Get all Todos
 *    tags: [Todos]
 */
router.get('/todos', todosController.getAllTodosPagination)

/**
 * @swagger
 * /api/todos:
 *  post:
 *    summary: save a new Todos
 *    tags: [Todos]
 */
router.post('/todos', todosController.createTodo)

/**
 * @swagger
 * /api/todos/{id}:
 *  get:
 *    summary: Get Todos by Id
 *    tags: [Todos]
 */
router.get('/todos/:id', todosController.getOneTodo)

/**
 * @swagger
 * /api/todos/{id}:
 *  delete:
 *    summary: delete a Todos by Id
 *    tags: [Todos]
 */
router.delete('/todos/:id', todosController.deleteTodo)

/**
 * @swagger
 * /api/todos/{id}:
 *  put:
 *    summary: update a Todos by Id
 *    tags: [Todos]
 */
router.put('/todos/:id', todosController.updateTodo)

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
