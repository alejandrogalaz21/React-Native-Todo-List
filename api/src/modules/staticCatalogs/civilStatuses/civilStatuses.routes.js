import { Router } from 'express'
import * as civilStatusesController from './civilStatuses.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/civilStatuses
 ** @params    queryString, page, limit
 */
router.get('/civilStatuses/all', authMiddleware, civilStatusesController.getAllCivilStatuses)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/civilStatuses/id
 ** @params    id
 */
router.get('/civilStatuses/:id', authMiddleware, civilStatusesController.getOneCivilStatus)

export default router
