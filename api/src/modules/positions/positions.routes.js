import { Router } from 'express'
import * as positionsController from './positions.controller'
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/positions
 ** @params    query, page, limit
 */
router.get(
  '/positions',
  authMiddleware,
  aclMiddleware,
  positionsController.getAllPositionsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/positions
 ** @params    queryString, page, limit
 */
router.get(
  '/positions/all',
  authMiddleware,
  aclMiddleware,
  positionsController.getAllPositions
)

/**
 ** @access    Private
 ** @route     POST api/positions
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/positions', authMiddleware, aclMiddleware, positionsController.createPosition)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/positions/id
 ** @params    id
 */
router.get('/positions/:id', authMiddleware, positionsController.getOnePosition)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/positions/id
 ** @params    id, {payload}.
 */
router.put('/positions/:id', authMiddleware, aclMiddleware, positionsController.updatePosition)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/positions/deactivate/id
 * @params    id, {payload}.
 */
 router.put(
  '/positions/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  positionsController.deactivatePosition
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/positions/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/positions/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  positionsController.reactivatePosition
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/positions/id
 ** @params    id
 */
router.delete(
  '/positions/:id',
  authMiddleware,
  aclMiddleware,
  positionsController.deletePosition
)


// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /positions/export/cvs
 ** @params    {rows}
 */
router.post('/positions/export/cvs', (req, res) => {
  const rows = req.body
  console.log('positions exort to cvs')
  console.log({ rows })
  return
})

export default router
