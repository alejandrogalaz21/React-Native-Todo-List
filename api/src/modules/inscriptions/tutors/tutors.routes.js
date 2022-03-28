import { Router } from 'express'
import * as tutorsController from './tutors.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'
import aclMiddleware from '../../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/tutors
 ** @params    query, page, limit
 */
router.get('/tutors', authMiddleware, aclMiddleware, tutorsController.getAllTutorsPagination)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/tutors
 ** @params    queryString, page, limit
 */
router.get('/tutors/all', authMiddleware, aclMiddleware, tutorsController.getAllTutors)

/**
 ** @access    Private
 ** @route     POST api/tutors
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/tutors', authMiddleware, aclMiddleware, tutorsController.createTutor)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/tutors/id
 ** @params    id
 */
router.get('/tutors/:id', authMiddleware, aclMiddleware, tutorsController.getOneTutor)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/tutors/id
 ** @params    id, {payload}.
 */
router.put('/tutors/:id', authMiddleware, aclMiddleware, tutorsController.updateTutor)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/tutors/id
 ** @params    id
 */
router.delete('/tutors/:id', authMiddleware, aclMiddleware, tutorsController.deleteTutor)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /tutors/export/cvs
 ** @params    {rows}
 */
router.post('/tutors/export/cvs', (req, res) => {
  const rows = req.body
  console.log('tutors exort to cvs')
  console.log({ rows })
  return
})

export default router
