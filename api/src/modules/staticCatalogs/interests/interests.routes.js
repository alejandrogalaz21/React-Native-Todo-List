import { Router } from 'express'
import * as interestsController from './interests.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/interests
 ** @params    queryString, page, limit
 */
router.get('/interests/all', authMiddleware, interestsController.getAllInterests)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/interests/id
 ** @params    id
 */
router.get('/interests/:id', authMiddleware, interestsController.getOneInterest)

export default router
