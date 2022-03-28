import { Router } from 'express'
import * as idiResultsController from './idiResults.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/idiResults
 ** @params    queryString, page, limit
 */
router.get('/idiResults/all', authMiddleware, idiResultsController.getAllIdiResults)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/idiResults/id
 ** @params    id
 */
router.get('/idiResults/:id', authMiddleware, idiResultsController.getOneIdiResult)

export default router
