import { Router } from 'express'
import * as statusRelationshipsController from './statusRelationships.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/statusRelationships
 ** @params    queryString, page, limit
 */
router.get(
  '/statusRelationships/all',
  authMiddleware,
  statusRelationshipsController.getAllStatusRelationships
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/statusRelationships/id
 ** @params    id
 */
router.get(
  '/statusRelationships/:id',
  authMiddleware,
  statusRelationshipsController.getOneStatusRelationship
)

export default router
