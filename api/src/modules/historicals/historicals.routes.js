import { Router } from 'express'
import * as historicalsController from './historicals.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/historicals
 ** @params    queryString, page, limit
 */
router.get('/historicals/all', authMiddleware, historicalsController.getAllHistoricals)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/historicals/id
 ** @params    id
 */
router.get('/historicals/:id', authMiddleware, historicalsController.getOneHistorical)

export default router
