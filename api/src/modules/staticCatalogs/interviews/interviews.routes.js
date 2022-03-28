import { Router } from 'express'
import * as interviewsController from './interviews.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/interviews
 ** @params    queryString, page, limit
 */
router.get('/interviews/all', authMiddleware, interviewsController.getAllInterviews)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/interviews/id
 ** @params    id
 */
router.get('/interviews/:id', authMiddleware, interviewsController.getOneInterview)

export default router
