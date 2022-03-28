import { Router } from 'express'
import * as activitiesController from './activities.controller'
// * import validators
// * import middleware
import authMiddleware from './../../middlewares/auth.middleware'

const router = new Router()

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/activities
 ** @params    queryString, page, limit
 */
router.get('/activities/all', authMiddleware, activitiesController.getAllActivities)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/activities/id
 ** @params    id
 */
router.get('/activities/:id', authMiddleware, activitiesController.getOneActivity)

export default router
