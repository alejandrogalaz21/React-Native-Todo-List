import { Router } from 'express'
import * as dreamsController from './dreams.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/dreams
 ** @params    queryString, page, limit
 */
router.get('/dreams/all', authMiddleware, dreamsController.getAllDreams)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/dreams/id
 ** @params    id
 */
router.get('/dreams/:id', authMiddleware, dreamsController.getOneDream)

export default router
