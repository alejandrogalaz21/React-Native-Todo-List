import { Router } from 'express'
import * as lesionsController from './lesions.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/lesions
 ** @params    queryString, page, limit
 */
router.get('/lesions/all', authMiddleware, lesionsController.getAllLesions)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/lesions/id
 ** @params    id
 */
router.get('/lesions/:id', authMiddleware, lesionsController.getOneLesion)

export default router
