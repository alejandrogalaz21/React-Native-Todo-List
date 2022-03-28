import { Router } from 'express'
import * as participationsController from './participations.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/participations
 ** @params    queryString, page, limit
 */
router.get(
  '/participations/all',
  authMiddleware,
  participationsController.getAllParticipations
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/participations/id
 ** @params    id
 */
router.get('/participations/:id', authMiddleware, participationsController.getOneParticipation)

export default router
