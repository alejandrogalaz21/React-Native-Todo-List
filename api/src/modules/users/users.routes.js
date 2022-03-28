import { Router } from 'express'
import * as usersController from './users.controller'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 * @desc      get all the records paginated
 * @access    Public
 * @route     GET api/users
 * @params    query, page, limit
 */
router.get('/users', usersController.getAllUsersPagination)

/**
 * @desc      get all the records
 * @access    Public
 * @route     GET api/users
 * @params    queryString, page, limit
 */
router.get('/users/all', usersController.getAllUsers)

/**
 * @access    Private
 * @route     POST api/users
 * @desc      create a record
 * @params    {payload}
 */
router.post('/users', usersController.createUser)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/users/id
 * @params    id
 */
router.get('/users/:id', usersController.getOneUser)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/users/id
 * @params    id, {payload}.
 */
router.put('/users/:id', usersController.updateUser)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/users/id
 * @params    id
 */
router.delete('/users/:id', usersController.deleteUser)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 * @desc      export to cvs the selected rows
 * @access    Private
 * @route     POST /users/export/cvs
 * @params    {rows}
 */
router.post('/users/export/cvs', (req, res) => {
  const rows = req.body
  console.log('users exort to cvs')
  console.log({ rows })
  return
})

export default router
