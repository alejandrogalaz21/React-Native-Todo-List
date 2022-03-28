import { Router } from 'express'
import * as cyclesController from './cycles.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/cycles
 ** @params    query, page, limit
 */
router.get('/cycles', authMiddleware, aclMiddleware, cyclesController.getAllCyclesPagination)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/cycles
 ** @params    queryString, page, limit
 */
router.get('/cycles/all', authMiddleware, aclMiddleware, cyclesController.getAllCycles)

/**
 ** @access    Private
 ** @route     POST api/cycles
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/cycles', authMiddleware, aclMiddleware, cyclesController.createCycle)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/cycles/id
 ** @params    id
 */
router.get('/cycles/:id', authMiddleware, aclMiddleware, cyclesController.getOneCycle)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/cycles/id
 ** @params    id, {payload}.
 */
router.put('/cycles/:id', authMiddleware, aclMiddleware, cyclesController.updateCycle)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/cycles/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/cycles/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  cyclesController.deactivateCycle
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/cycles/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/cycles/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  cyclesController.reactivateCycle
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/cycles/id
 ** @params    id
 */
router.delete('/cycles/:id', authMiddleware, aclMiddleware, cyclesController.deleteCycle)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /cycles/export/cvs
 ** @params    {rows}
 */
router.post('/cycles/export/cvs', (req, res) => {
  const rows = req.body
  console.log('cycles exort to cvs')
  console.log({ rows })
  return
})

export default router
