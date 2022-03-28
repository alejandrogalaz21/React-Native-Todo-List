import { Router } from 'express'
import * as centersController from './centers.controller'
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/centers
 ** @params    query, page, limit
 */
router.get(
  '/centers',
  authMiddleware,
  aclMiddleware,
  centersController.getAllCentersPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/centers
 ** @params    queryString, page, limit
 */
router.get('/centers/all', authMiddleware, aclMiddleware, centersController.getAllCenters)

/**
 ** @access    Private
 ** @route     POST api/centers
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/centers', authMiddleware, aclMiddleware, centersController.createCenter)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/centers/id
 ** @params    id
 */
router.get('/centers/:id', authMiddleware, aclMiddleware, centersController.getOneCenter)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/centers/id
 ** @params    id, {payload}.
 */
router.put('/centers/:id', authMiddleware, aclMiddleware, centersController.updateCenter)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/centers/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/centers/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  centersController.deactivateCenter
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/centers/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/centers/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  centersController.reactivateCenter
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/centers/id
 ** @params    id
 */
router.delete('/centers/:id', authMiddleware, aclMiddleware, centersController.deleteCenter)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /centers/export/cvs
 ** @params    {rows}
 */
router.post('/centers/export/cvs', (req, res) => {
  const rows = req.body
  console.log('centers exort to cvs')
  console.log({ rows })
  return
})

export default router
