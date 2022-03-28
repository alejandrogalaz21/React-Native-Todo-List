import { Router } from 'express'
import * as dropoutsController from './dropouts.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/dropouts
 ** @params    query, page, limit
 */
router.get(
  '/dropouts',
  authMiddleware,
  aclMiddleware,
  dropoutsController.getAllDropoutsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/dropouts
 ** @params    queryString, page, limit
 */
router.get('/dropouts/all', authMiddleware, aclMiddleware, dropoutsController.getAllDropouts)

/**
 ** @access    Private
 ** @route     POST api/dropouts
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/dropouts', authMiddleware, aclMiddleware, dropoutsController.createDropout)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/dropouts/id
 ** @params    id
 */
router.get('/dropouts/:id', authMiddleware, aclMiddleware, dropoutsController.getOneDropout)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/dropouts/id
 ** @params    id, {payload}.
 */
router.put('/dropouts/:id', authMiddleware, aclMiddleware, dropoutsController.updateDropout)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/dropouts/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/dropouts/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  dropoutsController.deactivateDropout
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/dropouts/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/dropouts/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  dropoutsController.reactivateDropout
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/dropouts/id
 ** @params    id
 */
router.delete('/dropouts/:id', authMiddleware, aclMiddleware, dropoutsController.deleteDropout)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /dropouts/export/cvs
 ** @params    {rows}
 */
router.post('/dropouts/export/cvs', (req, res) => {
  const rows = req.body
  console.log('dropouts exort to cvs')
  console.log({ rows })
  return
})

export default router
