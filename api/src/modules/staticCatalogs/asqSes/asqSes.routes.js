import { Router } from 'express'
import * as asqSesController from './asqSes.controller'
// * import validators
// * import middleware

const router = new Router()

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/asqSes
 ** @params    queryString, page, limit
 */
router.get('/asqSes/all', asqSesController.getAllAsqSes)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/asqSes/id
 ** @params    id
 */
router.get('/asqSes/:id', asqSesController.getOneAsqSe)

export default router
