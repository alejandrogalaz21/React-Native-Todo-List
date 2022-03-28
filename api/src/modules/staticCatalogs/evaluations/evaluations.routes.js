import { Router } from 'express'
import * as evaluationsController from './evaluations.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/evaluations
 ** @params    queryString, page, limit
 */
router.get('/evaluations/all', authMiddleware, evaluationsController.getAllEvaluations)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/evaluations/id
 ** @params    id
 */
router.get('/evaluations/:id', authMiddleware, evaluationsController.getOneEvaluation)

export default router
