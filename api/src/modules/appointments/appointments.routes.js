import { Router } from 'express'
import * as appointmentsController from './appointments.controller'
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/appointments
 ** @params    query, page, limit
 */
router.get(
  '/appointments',
  authMiddleware,
  aclMiddleware,
  appointmentsController.getAllAppointmentsPagination
)

/**
 * @desc      get single record
 * @access    Public
 * @route     GET api/appointments/infants
 * @params    id
 */
 router.get(
  '/appointments/infants',
  authMiddleware,
  aclMiddleware,
  appointmentsController.getInfants
)

/**
 * @desc      get single record
 * @access    Public
 * @route     GET api/appointments/psychologists
 * @params    id
 */
router.get(
  '/appointments/psychologists',
  authMiddleware,
  aclMiddleware,
  appointmentsController.getPsychologists
)
/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/appointments
 ** @params    queryString, page, limit
 */
router.get(
  '/appointments/all',
  authMiddleware,
  aclMiddleware,
  appointmentsController.getAllAppointments
)

/**
 ** @access    Private
 ** @route     POST api/appointments
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/appointments',
  authMiddleware,
  aclMiddleware,
  appointmentsController.createAppointment
)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/appointments/id
 * @params    id
 */
router.get('/appointments/:id', authMiddleware, appointmentsController.getOneAppointment)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/appointments/id
 * @params    id, {payload}.
 */
router.put(
  '/appointments/:id',
  authMiddleware,
  aclMiddleware,
  appointmentsController.updateAppointment
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/appointments/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/appointments/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  appointmentsController.deactivateAppointment
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/appointments/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/appointments/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  appointmentsController.reactivateAppointment
)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/appointments/id
 * @params    id
 */
router.delete(
  '/appointments/:id',
  authMiddleware,
  aclMiddleware,
  appointmentsController.deleteAppointment
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 * @desc      export to cvs the selected rows
 * @access    Private
 * @route     POST /appointments/export/cvs
 * @params    {rows}
 */
router.post('/appointments/export/cvs', (req, res) => {
  const rows = req.body
  console.log('appointments exort to cvs')
  console.log({ rows })
  return
})

export default router
