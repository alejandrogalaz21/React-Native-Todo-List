import { Router } from 'express'
import * as UsersDashboardTestController from './usersDashboardTest.controller'
// * import validators
// * import middleware 


const router = new Router()

//* C.R.U.D ROUTES *//

/**
 * @desc      get all the records paginated
 * @access    Public
 * @route     GET api/UsersDashboardTest
 * @params    query, page, limit
 */
router.get('/UsersDashboardTest', UsersDashboardTestController.getAllUsersDashboardTestPagination)

/**
 * @desc      get all the records
 * @access    Public
 * @route     GET api/UsersDashboardTest
 * @params    queryString, page, limit
 */
router.get('/UsersDashboardTest/all', UsersDashboardTestController.getAllUsersDashboardTest)

/**
 * @access    Private
 * @route     POST api/UsersDashboardTest
 * @desc      create a record
 * @params    {payload}
 */
router.post('/UsersDashboardTest', UsersDashboardTestController.createUserDashboardTest)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/UsersDashboardTest/id
 * @params    id
 */
router.get('/UsersDashboardTest/:id', UsersDashboardTestController.getOneUserDashboardTest)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/UsersDashboardTest/id
 * @params    id, {payload}.
 */
router.put('/UsersDashboardTest/:id', UsersDashboardTestController.updateUserDashboardTest)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/UsersDashboardTest/id
 * @params    id
 */
router.delete('/UsersDashboardTest/:id', UsersDashboardTestController.deleteUserDashboardTest)

/**
 * @access    Private
 * @route     POST api/UsersDashboardTest/Login
 * @desc      Logs into dashboard
 * @params    {payload}
 */
 router.post('/UsersDashboardTest/Login', UsersDashboardTestController.logInDashboardUser)


// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 * @desc      export to cvs the selected rows
 * @access    Private
 * @route     POST /UsersDashboardTest/export/cvs
 * @params    {rows}
 */
router.post('/UsersDashboardTest/export/cvs', (req, res) => {
  const rows = req.body
  console.log('UsersDashboardTest exort to cvs')
  console.log({ rows })
  return
})

export default router
