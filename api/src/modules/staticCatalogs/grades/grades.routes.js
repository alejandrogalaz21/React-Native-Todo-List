import { Router } from 'express'
import * as gradesController from './grades.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/grades
 ** @params    queryString, page, limit
 */
router.get('/grades/all', authMiddleware, gradesController.getAllGrades)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/grades/id
 ** @params    id
 */
router.get('/grades/:id', authMiddleware, gradesController.getOneGrade)

export default router
