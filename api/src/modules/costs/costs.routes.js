import { Router } from 'express'
import * as costsController from './costs.controller'
// * import validators
// * import middleware
import aclMiddleware from '../../middleware/aclMiddleware'
import authMiddleware from '../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/costs
 ** @params    query, page, limit
 */
router.get('/costs', authMiddleware, aclMiddleware, costsController.getAllCostsPagination)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/costs
 ** @params    queryString, page, limit
 */
router.get('/costs/all', authMiddleware, aclMiddleware, costsController.getAllCosts)

/**
 ** @access    Private
 ** @route     POST api/costs
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/costs', authMiddleware, aclMiddleware, costsController.createCost)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/costs/id
 ** @params    id
 */
router.get('/costs/:id', authMiddleware, aclMiddleware, costsController.getOneCost)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/costs/id
 ** @params    id, {payload}.
 */
router.put('/costs/:id', authMiddleware, aclMiddleware, costsController.updateCost)


/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/costs/deactivate/id
 * @params    id, {payload}.
 */
 router.put(
  '/costs/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  costsController.deactivateCost
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/costs/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/costs/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  costsController.reactivateCost
)


/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/costs/id
 ** @params    id
 */
router.delete('/costs/:id', authMiddleware, aclMiddleware, costsController.deleteCost)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /costs/export/cvs
 ** @params    {rows}
 */
router.post('/costs/export/cvs', (req, res) => {
  const rows = req.body
  console.log('costs exort to cvs')
  console.log({ rows })
  return
})

export default router
