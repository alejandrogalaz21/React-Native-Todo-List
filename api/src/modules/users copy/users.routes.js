import * as user from './users.controller'
import authMiddleware from '../../middleware/auth.middleware'
import { Router } from 'express'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()
/**
 * @access    Private
 * @route     POST api/users/
 * @desc      create a user
 * @params    {payload}
 */
router.post('/users/', authMiddleware, aclMiddleware, user.create)

/**
 * @desc      get all the records
 * @access    Public
 * @route     GET api/users 
 * @params    queryString
 */
router.get('/users/', authMiddleware, aclMiddleware, user.readMany)

/**
 * @desc      export data
 * @access    Private
 * @route     POST api/users/export
 * @params    
 */
router.post('/users/export', authMiddleware, aclMiddleware, user.exportMany)

router.get('/users/admin', authMiddleware, aclMiddleware, user.getAdminPagination)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/users/id
 * @params    id, {payload}.
 */
router.get('/users/edit/:_id', authMiddleware, aclMiddleware, user.edit)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/users/id
 * @params    id
 */
router.get('/users/:_id', authMiddleware, aclMiddleware, user.readOne)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/users/id
 * @params    id
 */
router.put('/users/:_id', authMiddleware, aclMiddleware, user.update)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/users/id
 * @params    id
 */
router.delete('/users/:_id', authMiddleware, aclMiddleware, user.remove)

export default router
