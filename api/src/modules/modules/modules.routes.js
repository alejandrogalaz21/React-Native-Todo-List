import { Router } from 'express'
import * as modulesController from './modules.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/modules
 ** @params    queryString, page, limit
 */
router.get('/modules', authMiddleware, aclMiddleware, modulesController.getAllModules)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/modules/id
 ** @params    id
 */
router.get('/modules/:id', authMiddleware, aclMiddleware, modulesController.getOneModule)

export default router
