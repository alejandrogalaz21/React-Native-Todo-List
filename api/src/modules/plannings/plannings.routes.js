import { Router } from 'express'
import * as planningsController from './plannings.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/plannings
 ** @params    query, page, limit
 */
router.get(
  '/plannings',
  authMiddleware,
  aclMiddleware,
  planningsController.getAllPlanningsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/plannings
 ** @params    queryString, page, limit
 */
router.get(
  '/plannings/all',
  authMiddleware,
  aclMiddleware,
  planningsController.getAllPlannings
)

/**
 ** @access    Private
 ** @route     POST api/plannings
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/plannings', authMiddleware, aclMiddleware, planningsController.createPlanning)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/plannings/id
 ** @params    id
 */
router.get('/plannings/:id', authMiddleware, aclMiddleware, planningsController.getOnePlanning)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/plannings/id
 ** @params    id, {payload}.
 */
router.put('/plannings/:id', authMiddleware, aclMiddleware, planningsController.updatePlanning)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/plannings/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/plannings/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  planningsController.deactivatePlanning
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/plannings/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/plannings/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  planningsController.reactivatePlanning
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/plannings/id
 ** @params    id
 */
router.delete(
  '/plannings/:id',
  authMiddleware,
  aclMiddleware,
  planningsController.deletePlanning
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /plannings/export/cvs
 ** @params    {rows}
 */
router.post('/plannings/export/cvs', (req, res) => {
  const rows = req.body
  console.log('plannings exort to cvs')
  console.log({ rows })
  return
})

export default router
