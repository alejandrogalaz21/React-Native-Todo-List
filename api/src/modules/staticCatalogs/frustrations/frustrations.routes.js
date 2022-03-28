import { Router } from 'express'
import * as frustrationsController from './frustrations.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/frustrations
 ** @params    queryString, page, limit
 */
router.get('/frustrations/all', authMiddleware, frustrationsController.getAllFrustrations)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/frustrations/id
 ** @params    id
 */
router.get('/frustrations/:id', authMiddleware, frustrationsController.getOneFrustration)

export default router
