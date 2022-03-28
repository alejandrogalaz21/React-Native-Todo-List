import { Router } from 'express'
import * as relationshipsController from './relationships.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/relationships
 ** @params    queryString, page, limit
 */
router.get('/relationships/all', authMiddleware, relationshipsController.getAllRelationships)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/relationships/id
 ** @params    id
 */
router.get('/relationships/:id', authMiddleware, relationshipsController.getOneRelationship)

export default router
