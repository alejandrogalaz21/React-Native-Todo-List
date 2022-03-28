import { Router } from 'express'
import * as interpersonalsController from './interpersonals.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/interpersonals
 ** @params    queryString, page, limit
 */
router.get(
  '/interpersonals/all',
  authMiddleware,
  interpersonalsController.getAllInterpersonals
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/interpersonals/id
 ** @params    id
 */
router.get('/interpersonals/:id', authMiddleware, interpersonalsController.getOneInterpersonal)

export default router
