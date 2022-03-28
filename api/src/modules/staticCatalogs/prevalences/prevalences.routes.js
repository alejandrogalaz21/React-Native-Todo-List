import { Router } from 'express'
import * as prevalencesController from './prevalences.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/prevalences
 ** @params    queryString, page, limit
 */
router.get('/prevalences/all', authMiddleware, prevalencesController.getAllPrevalences)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/prevalences/id
 ** @params    id
 */
router.get('/prevalences/:id', authMiddleware, prevalencesController.getOnePrevalence)

export default router
