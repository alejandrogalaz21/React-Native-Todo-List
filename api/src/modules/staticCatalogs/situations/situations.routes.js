import { Router } from 'express'
import * as situationsController from './situations.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/situations
 ** @params    queryString, page, limit
 */
router.get('/situations/all', authMiddleware, situationsController.getAllSituations)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/situations/id
 ** @params    id
 */
router.get('/situations/:id', authMiddleware, situationsController.getOneSituation)

export default router
