import { Router } from 'express'
import * as asqsController from './asqs.controller'
// * import validators
// * import middleware 


const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/asqs
 ** @params    queryString, page, limit
 */
router.get('/asqs/all', asqsController.getAllAsqs)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/asqs/id
 ** @params    id
 */
router.get('/asqs/:id', asqsController.getOneAsq)


export default router
