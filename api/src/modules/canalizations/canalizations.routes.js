import { Router } from 'express'
import * as canalizationsController from './canalizations.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/canalizations
 ** @params    query, page, limit
 */
router.get(
  '/canalizations',
  authMiddleware,
  aclMiddleware,
  canalizationsController.getAllCanalizationsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/canalizations
 ** @params    queryString, page, limit
 */
router.get(
  '/canalizations/all',
  authMiddleware,
  aclMiddleware,
  canalizationsController.getAllCanalizations
)

/**
 ** @access    Private
 ** @route     POST api/canalizations
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/canalizations',
  authMiddleware,
  aclMiddleware,
  canalizationsController.createCanalization
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/canalizations/id
 ** @params    id
 */
router.get(
  '/canalizations/:id',
  authMiddleware,
  aclMiddleware,
  canalizationsController.getOneCanalization
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/canalizations/id
 ** @params    id, {payload}.
 */
router.put(
  '/canalizations/:id',
  authMiddleware,
  aclMiddleware,
  canalizationsController.updateCanalization
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/canalizations/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/canalizations/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  canalizationsController.deactivateCanalization
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/canalizations/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/canalizations/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  canalizationsController.reactivateCanalization
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/canalizations/id
 ** @params    id
 */
router.delete(
  '/canalizations/:id',
  authMiddleware,
  aclMiddleware,
  canalizationsController.deleteCanalization
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /canalizations/export/cvs
 ** @params    {rows}
 */
router.post('/canalizations/export/cvs', (req, res) => {
  const rows = req.body
  console.log('canalizations exort to cvs')
  console.log({ rows })
  return
})

export default router
