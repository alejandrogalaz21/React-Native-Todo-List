import { Router } from 'express'
import * as economicalsController from './economicals.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/economicals
 ** @params    queryString, page, limit
 */
router.get('/economicals/all', authMiddleware, economicalsController.getAllEconomicals)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/economicals/id
 ** @params    id
 */
router.get('/economicals/:id', authMiddleware, economicalsController.getOneEconomical)

export default router
