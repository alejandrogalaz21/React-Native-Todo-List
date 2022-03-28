import { Router } from 'express'
import * as ifdResultsController from './ifdResults.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/ifdResults
 ** @params    queryString, page, limit
 */
router.get('/ifdResults/all', authMiddleware, ifdResultsController.getAllIfdResults)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/ifdResults/id
 ** @params    id
 */
router.get('/ifdResults/:id', authMiddleware, ifdResultsController.getOneIfdResult)

export default router
