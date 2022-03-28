import { Router } from 'express'
import * as groupAssignmentsController from './groupAssignments.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'
const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/groupAssignments
 ** @params    query, page, limit
 */
router.get(
  '/groupAssignments',
  authMiddleware,
  aclMiddleware,
  groupAssignmentsController.getAllGroupAssignmentsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/groupAssignments
 ** @params    queryString, page, limit
 */
router.get(
  '/groupAssignments/all',
  authMiddleware,
  aclMiddleware,
  groupAssignmentsController.getAllGroupAssignments
)

/**
 ** @access    Private
 ** @route     POST api/groupAssignments
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/groupAssignments',
  authMiddleware,
  aclMiddleware,
  groupAssignmentsController.createGroupAssignment
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/groupAssignments/id
 ** @params    id
 */
router.get(
  '/groupAssignments/:id',
  authMiddleware,
  aclMiddleware,
  groupAssignmentsController.getOneGroupAssignment
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/groupAssignments/id
 ** @params    id, {payload}.
 */
router.put(
  '/groupAssignments/:id',
  authMiddleware,
  aclMiddleware,
  groupAssignmentsController.updateGroupAssignment
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/groupAssignments/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/groupAssignments/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  groupAssignmentsController.deactivateGroupAssignment
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/groupAssignments/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/groupAssignments/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  groupAssignmentsController.reactivateGroupAssignment
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/groupAssignments/id
 ** @params    id
 */
router.delete(
  '/groupAssignments/:id',
  authMiddleware,
  aclMiddleware,
  groupAssignmentsController.deleteGroupAssignment
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /groupAssignments/export/cvs
 ** @params    {rows}
 */
router.post('/groupAssignments/export/cvs', (req, res) => {
  const rows = req.body
  console.log('groupAssignments exort to cvs')
  console.log({ rows })
  return
})

export default router
