import { Router } from 'express'
import * as doctorsController from './doctors.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/doctors
 ** @params    queryString, page, limit
 */
router.get('/doctors/all', authMiddleware, doctorsController.getAllDoctors)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/doctors/id
 ** @params    id
 */
router.get('/doctors/:id', authMiddleware, doctorsController.getOneDoctor)

export default router
