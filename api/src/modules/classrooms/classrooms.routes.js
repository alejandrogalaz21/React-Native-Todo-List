import { Router } from 'express'
import * as classroomsController from './classrooms.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/classrooms
 ** @params    query, page, limit
 */
router.get(
  '/classrooms',
  authMiddleware,
  aclMiddleware,
  classroomsController.getAllClassroomsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/classrooms
 ** @params    queryString, page, limit
 */
router.get(
  '/classrooms/all',
  authMiddleware,
  aclMiddleware,
  classroomsController.getAllClassrooms
)

/**
 ** @access    Private
 ** @route     POST api/classrooms
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/classrooms', authMiddleware, aclMiddleware, classroomsController.createClassroom)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/classrooms/id
 ** @params    id
 */
router.get(
  '/classrooms/:id',
  authMiddleware,
  aclMiddleware,
  classroomsController.getOneClassroom
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/classrooms/id
 ** @params    id, {payload}.
 */
router.put(
  '/classrooms/:id',
  authMiddleware,
  aclMiddleware,
  classroomsController.updateClassroom
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/classrooms/deactivate/id
 * @params    id, {payload}.
 */
 router.put(
  '/classrooms/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  classroomsController.deactivateClassroom
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/classrooms/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/classrooms/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  classroomsController.reactivateClassroom
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/classrooms/id
 ** @params    id
 */
router.delete(
  '/classrooms/:id',
  authMiddleware,
  aclMiddleware,
  classroomsController.deleteClassroom
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /classrooms/export/cvs
 ** @params    {rows}
 */
router.post('/classrooms/export/cvs', (req, res) => {
  const rows = req.body
  console.log('classrooms exort to cvs')
  console.log({ rows })
  return
})

export default router
