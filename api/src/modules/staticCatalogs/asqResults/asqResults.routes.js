import { Router } from 'express'
import * as asqResultsController from './asqResults.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/asqResults
 ** @params    queryString, page, limit
 */
router.get('/asqResults/all', authMiddleware, asqResultsController.getAllAsqResults)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/asqResults/id
 ** @params    id
 */
router.get('/asqResults/:id', authMiddleware, asqResultsController.getOneAsqResult)

export default router
