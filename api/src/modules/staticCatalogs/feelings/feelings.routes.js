import { Router } from 'express'
import * as feelingsController from './feelings.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/feelings
 ** @params    queryString, page, limit
 */
router.get('/feelings/all', authMiddleware, feelingsController.getAllFeelings)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/feelings/id
 ** @params    id
 */
router.get('/feelings/:id', authMiddleware, feelingsController.getOneFeeling)

export default router
