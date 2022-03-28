import { Router } from 'express'
import * as couragesController from './courages.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/courages
 ** @params    queryString, page, limit
 */
router.get('/courages/all', authMiddleware, couragesController.getAllCourages)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/courages/id
 ** @params    id
 */
router.get('/courages/:id', authMiddleware, couragesController.getOneCourage)

export default router
