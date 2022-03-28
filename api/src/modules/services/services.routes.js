import { Router } from 'express'
import * as servicesController from './services.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/services
 ** @params    query, page, limit
 */
router.get(
  '/services',
  authMiddleware,
  aclMiddleware,
  servicesController.getAllServicesPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/services
 ** @params    queryString, page, limit
 */
router.get('/services/all', authMiddleware, aclMiddleware, servicesController.getAllServices)

/**
 ** @access    Private
 ** @route     POST api/services
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/services', authMiddleware, aclMiddleware, servicesController.createService)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/services/id
 ** @params    id
 */
router.get('/services/:id', authMiddleware, aclMiddleware, servicesController.getOneService)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/services/id
 ** @params    id, {payload}.
 */
router.put('/services/:id', authMiddleware, aclMiddleware, servicesController.updateService)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/services/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/services/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  servicesController.deactivateService
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/services/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/services/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  servicesController.reactivateService
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/services/id
 ** @params    id
 */
router.delete('/services/:id', authMiddleware, aclMiddleware, servicesController.deleteService)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /services/export/cvs
 ** @params    {rows}
 */
router.post('/services/export/cvs', (req, res) => {
  const rows = req.body
  console.log('services exort to cvs')
  console.log({ rows })
  return
})

export default router
