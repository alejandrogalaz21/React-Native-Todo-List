import { Router } from 'express'
import * as statusEvaluationsController from './statusEvaluations.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/statusEvaluations
 ** @params    queryString, page, limit
 */
router.get(
  '/statusEvaluations/all',
  authMiddleware,
  statusEvaluationsController.getAllStatusEvaluations
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/statusEvaluations/id
 ** @params    id
 */
router.get(
  '/statusEvaluations/:id',
  authMiddleware,
  statusEvaluationsController.getOneStatusEvaluation
)

export default router
