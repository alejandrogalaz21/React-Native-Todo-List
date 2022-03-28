import { Router } from 'express'
import authMiddleware from './../../middleware/auth.middleware'

import * as permissionsController from './permissions.controller'
// * import validators
// * import middleware 


const router = new Router()

//* C.R.U.D ROUTES *//

/**
 * @desc      get all the records paginated
 * @access    Public
 * @route     GET api/permissions
 * @params    query, page, limit
 */
router.get('/permissions', authMiddleware, permissionsController.getAllPermissionsPagination)

/**
 * @desc      get all the records
 * @access    Public
 * @route     GET api/permissions
 * @params    queryString, page, limit
 */
router.get('/permissions/all', authMiddleware, permissionsController.getAllPermissions)

/**
 * @access    Private
 * @route     POST api/permissions
 * @desc      create a record
 * @params    {payload}
 */
router.post('/permissions', authMiddleware, permissionsController.createPermission)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/permissions/id
 * @params    id
 */
router.get('/permissions/:id', authMiddleware, permissionsController.getOnePermission)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/permissions/id
 * @params    id, {payload}.
 */
router.put('/permissions/:id', authMiddleware, permissionsController.updatePermission)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/permissions/id
 * @params    id
 */
router.delete('/permissions/:id', authMiddleware, permissionsController.deletePermission)


export default router
