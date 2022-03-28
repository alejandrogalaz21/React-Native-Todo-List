import { Router } from 'express'
import * as levelEstudiesController from './levelEstudies.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/levelEstudies
 ** @params    queryString, page, limit
 */
router.get('/levelEstudies/all', authMiddleware, levelEstudiesController.getAllLevelEstudies)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/levelEstudies/id
 ** @params    id
 */
router.get('/levelEstudies/:id', authMiddleware, levelEstudiesController.getOneLevelEstudy)

export default router
