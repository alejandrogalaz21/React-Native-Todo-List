import { Router } from 'express'
import * as religionsController from './religions.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/religions
 ** @params    queryString, page, limit
 */
router.get('/religions/all', authMiddleware, religionsController.getAllReligions)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/religions/id
 ** @params    id
 */
router.get('/religions/:id', authMiddleware, religionsController.getOneReligion)

export default router
