import { Router } from 'express'
import * as mchatResultsController from './mchatResults.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/mchatResults
 ** @params    queryString, page, limit
 */
router.get('/mchatResults/all', authMiddleware, mchatResultsController.getAllMchatResults)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/mchatResults/id
 ** @params    id
 */
router.get('/mchatResults/:id', authMiddleware, mchatResultsController.getOneMchatResult)

export default router
