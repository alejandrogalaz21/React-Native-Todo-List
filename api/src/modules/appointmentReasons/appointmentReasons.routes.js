import { Router } from 'express'
import * as appointmentReasonsController from './appointmentReasons.controller'
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 * @desc      get all the records paginated
 * @access    Public
 * @route     GET api/appointmentReasons
 * @params    query, page, limit
 */
router.get(
  '/appointmentReasons',
  authMiddleware,
  aclMiddleware,
  appointmentReasonsController.getAllAppointmentReasonsPagination
)

/**
 * @desc      get all the records
 * @access    Public
 * @route     GET api/appointmentReasons
 * @params    queryString, page, limit
 */
router.get(
  '/appointmentReasons/all',
  authMiddleware,
  aclMiddleware,
  appointmentReasonsController.getAllAppointmentReasons
)

/**
 * @access    Private
 * @route     POST api/appointmentReasons
 * @desc      create a record
 * @params    {payload}
 */
router.post('/appointmentReasons', authMiddleware, aclMiddleware, appointmentReasonsController.createAppointmentReason)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/appointmentReasons/id
 * @params    id
 */
router.get('/appointmentReasons/:id', authMiddleware, appointmentReasonsController.getOneAppointmentReason)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/appointmentReasons/id
 * @params    id, {payload}.
 */
router.put('/appointmentReasons/:id', authMiddleware, aclMiddleware, appointmentReasonsController.updateAppointmentReason)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/appointmentReasons/deactivate/id
 * @params    id, {payload}.
 */
 router.put(
  '/appointmentReasons/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  appointmentReasonsController.deactivateAppointmentReason
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/appointmentReasons/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/appointmentReasons/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  appointmentReasonsController.reactivateAppointmentReason
)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/appointmentReasons/id
 * @params    id
 */
router.delete(
  '/appointmentReasons/:id',
  authMiddleware,
  aclMiddleware,
  appointmentReasonsController.deleteAppointmentReason
)


// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 * @desc      export to cvs the selected rows
 * @access    Private
 * @route     POST /appointmentReasons/export/cvs
 * @params    {rows}
 */
router.post('/appointmentReasons/export/cvs', (req, res) => {
  const rows = req.body
  console.log('appointmentReasons exort to cvs')
  console.log({ rows })
  return
})

export default router
