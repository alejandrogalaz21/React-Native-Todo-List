import { Router } from 'express'
import * as carefulsController from './carefuls.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/carefuls
 ** @params    queryString, page, limit
 */
router.get('/carefuls/all', authMiddleware, carefulsController.getAllCarefuls)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/carefuls/id
 ** @params    id
 */
router.get('/carefuls/:id', authMiddleware, carefulsController.getOneCareful)

export default router
