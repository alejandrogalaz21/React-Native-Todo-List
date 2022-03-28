import { Router } from 'express'
import * as paymentsController from './payments.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/payments
 ** @params    query, page, limit
 */
router.get(
  '/payments',
  authMiddleware,
  aclMiddleware,
  paymentsController.getAllPaymentsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/payments
 ** @params    queryString, page, limit
 */
router.get('/payments/all', authMiddleware, aclMiddleware, paymentsController.getAllPayments)

/**
 ** @access    Private
 ** @route     POST api/payments
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/payments', authMiddleware, aclMiddleware, paymentsController.createPayment)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/payments/id
 ** @params    id
 */
router.get('/payments/:id', authMiddleware, aclMiddleware, paymentsController.getOnePayment)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/payments/id
 ** @params    id, {payload}.
 */
router.put('/payments/:id', authMiddleware, aclMiddleware, paymentsController.updatePayment)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/payments/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/payments/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  paymentsController.deactivatePayment
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/payments/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/payments/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  paymentsController.reactivatePayment
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/payments/id
 ** @params    id
 */
router.delete('/payments/:id', authMiddleware, aclMiddleware, paymentsController.deletePayment)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /payments/export/cvs
 ** @params    {rows}
 */
router.post('/payments/export/cvs', (req, res) => {
  const rows = req.body
  console.log('payments exort to cvs')
  console.log({ rows })
  return
})

export default router
