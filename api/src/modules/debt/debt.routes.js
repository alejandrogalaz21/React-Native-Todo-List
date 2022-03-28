import { Router } from 'express'
import * as debt from './debt.controller'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Private
 ** @route     GET api/collection
 ** @params    query, page, limit
 */
router.get('/debt', debt.readManyPagination)

/**
 ** @desc      create record
 ** @access    Private
 ** @route     POST api/collection/:id
 ** @params    id
 */
router.post('/debt/:id', debt.create)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/collection/:id
 ** @params    id
 */
router.get('/debt/:id', debt.readOne)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/collection/:id
 ** @params    id, {payload}.
 */
router.put('/debt/:id', debt.update)

/**
 ** @desc      get child payments
 ** @access    Private
 ** @route     GET api/collection/payments/:id
 ** @params    id
 */
router.get('/debts/:id', debt.readAllChildDebts)

/**
 ** @desc      get child payments
 ** @access    Private
 ** @route     GET api/collection/payments/:id
 ** @params    id
 */
router.get('/debt/all/:id', debt.readMany)

/**
 ** @desc      get child payments
 ** @access    Private
 ** @route     GET api/collection/payments/:id
 ** @params    id
 */
router.get('/debt/all/debts/:id', debt.readManyFalse)

export default router
