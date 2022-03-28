import { Router } from 'express'
import * as canalizationLocationsController from './canalizationLocations.controller'
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/canalizationLocations
 ** @params    query, page, limit
 */
router.get(
  '/canalizationLocations',
  authMiddleware,
  aclMiddleware,
  canalizationLocationsController.getAllCanalizationLocationsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/canalizationLocations
 ** @params    queryString, page, limit
 */
router.get(
  '/canalizationLocations/all',
  authMiddleware,
  aclMiddleware,
  canalizationLocationsController.getAllCanalizationLocations
)

/**
 ** @access    Private
 ** @route     POST api/canalizationLocations
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/canalizationLocations',
  authMiddleware,
  aclMiddleware,
  canalizationLocationsController.createCanalizationLocation
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/canalizationLocations/id
 ** @params    id
 */
router.get(
  '/canalizationLocations/:id',
  authMiddleware,
  aclMiddleware,
  canalizationLocationsController.getOneCanalizationLocation
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/canalizationLocations/id
 ** @params    id, {payload}.
 */
router.put(
  '/canalizationLocations/:id',
  authMiddleware,
  aclMiddleware,
  canalizationLocationsController.updateCanalizationLocation
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/positions/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/canalizationLocations/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  canalizationLocationsController.deactivateCanalizationLocation
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/positions/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/canalizationLocations/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  canalizationLocationsController.reactivateCanalizationLocation
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/canalizationLocations/id
 ** @params    id
 */
router.delete(
  '/canalizationLocations/:id',
  authMiddleware,
  aclMiddleware,
  canalizationLocationsController.deleteCanalizationLocation
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /canalizationLocations/export/cvs
 ** @params    {rows}
 */
router.post('/canalizationLocations/export/cvs', (req, res) => {
  const rows = req.body
  console.log('canalizationLocations exort to cvs')
  console.log({ rows })
  return
})

export default router
