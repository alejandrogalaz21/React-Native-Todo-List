import { Router } from 'express'
import * as collection from './collection.controller'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Private
 ** @route     GET api/collection
 ** @params    query, page, limit
 */
router.get('/collection', collection.readManyPagination)

/**
 ** @desc      create record
 ** @access    Private
 ** @route     POST api/collection/:id
 ** @params    id
 */
router.post('/collection/:id', collection.create)

/**
 ** @desc      get all the records
 ** @access    Private
 ** @route     GET api/collection/all
 */
router.get('/collection/all', collection.readMany)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/collection/:id
 ** @params    id
 */
router.get('/collection/:id', collection.readOne)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/collection/:id
 ** @params    id, {payload}.
 */
router.put('/collection/:id', collection.update)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/collection/:id
 ** @params    id
 */
router.delete('/collection/:id', collection.remove)

/**
 ** @desc      get registration information
 ** @access    Private
 ** @route     GET api/collection/authorization/:id
 ** @params    id
 */
router.get('/collection/authorization/:id', collection.reareadAuthorization)

/**
 ** @desc      get child payments
 ** @access    Private
 ** @route     GET api/collection/payments/:id
 ** @params    id
 */
router.get('/collection/payments/:id', collection.readAllChildPayments)

/**
 ** @desc      get all the records paginated
 ** @access    Private
 ** @route     GET api/collection/inscriptions
 ** @params    query, page, limit
 */
router.get('/collection/inscriptions/active', collection.readManyInscriptionsPagination)

/**
 ** @desc      get all the records paginated
 ** @access    Private
 ** @route     GET api/collection/inscriptions
 ** @params    query, page, limit
 */
router.get('/collection/balances/info', collection.readBalances)

export default router
