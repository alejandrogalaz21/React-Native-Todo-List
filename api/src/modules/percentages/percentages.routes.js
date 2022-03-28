import { Router } from 'express'
import * as percentagesController from './percentages.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/percentages
 ** @params    query, page, limit
 */
router.get(
  '/percentages',
  authMiddleware,
  aclMiddleware,
  percentagesController.getAllPercentagesPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/percentages
 ** @params    queryString, page, limit
 */
router.get(
  '/percentages/all',
  authMiddleware,
  aclMiddleware,
  percentagesController.getAllPercentages
)

/**
 ** @access    Private
 ** @route     POST api/percentages
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/percentages',
  authMiddleware,
  aclMiddleware,
  percentagesController.createPercentage
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/percentages/id
 ** @params    id
 */
router.get(
  '/percentages/:id',
  authMiddleware,
  aclMiddleware,
  percentagesController.getOnePercentage
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/percentages/id
 ** @params    id, {payload}.
 */
router.put(
  '/percentages/:id',
  authMiddleware,
  aclMiddleware,
  percentagesController.updatePercentage
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/percentages/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/percentages/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  percentagesController.deactivatePercentage
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/percentages/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/percentages/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  percentagesController.reactivatePercentage
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/percentages/id
 ** @params    id
 */
router.delete(
  '/percentages/:id',
  authMiddleware,
  aclMiddleware,
  percentagesController.deletePercentage
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /percentages/export/cvs
 ** @params    {rows}
 */
router.post('/percentages/export/cvs', (req, res) => {
  const rows = req.body
  console.log('percentages exort to cvs')
  console.log({ rows })
  return
})

export default router
