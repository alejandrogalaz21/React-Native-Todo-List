import { Router } from 'express'
import * as rolsController from './rols.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/rols
 ** @params    queryString, page, limit
 */
router.get('/rols/all', authMiddleware, rolsController.getAllRols)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/rols/id
 ** @params    id
 */
router.get('/rols/:id', authMiddleware, rolsController.getOneRol)

export default router
