import { Router } from 'express'
import * as calendarsController from './calendars.controller'
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/calendars
 ** @params    query, page, limit
 */
router.get(
  '/calendars',
  authMiddleware,
  aclMiddleware,
  calendarsController.getAllCalendarsPagination
)

/**
 * @desc      get single record
 * @access    Public
 * @route     GET api/calendars/infants
 * @params    id
 */
 router.get(
  '/calendars/infants',
  authMiddleware,
  aclMiddleware,
  calendarsController.getInfants
)

/**
 * @desc      get single record
 * @access    Public
 * @route     GET api/calendars/psychologists
 * @params    id
 */
router.get(
  '/calendars/psychologists',
  authMiddleware,
  aclMiddleware,
  calendarsController.getPsychologists
)
/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/calendars
 ** @params    queryString, page, limit
 */
router.get(
  '/calendars/all',
  authMiddleware,
  aclMiddleware,
  calendarsController.getAllCalendars
)

/**
 ** @access    Private
 ** @route     POST api/calendars
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/calendars',
  authMiddleware,
  aclMiddleware,
  calendarsController.createCalendar
)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/calendars/id
 * @params    id
 */
router.get('/calendars/:id', authMiddleware, calendarsController.getOneCalendar)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/calendars/id
 * @params    id, {payload}.
 */
router.put(
  '/calendars/:id',
  authMiddleware,
  aclMiddleware,
  calendarsController.updateCalendar
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/calendars/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/calendars/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  calendarsController.deactivateCalendar
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/calendars/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/calendars/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  calendarsController.reactivateCalendar
)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/calendars/id
 * @params    id
 */
router.delete(
  '/calendars/:id',
  authMiddleware,
  aclMiddleware,
  calendarsController.deleteCalendar
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 * @desc      export to cvs the selected rows
 * @access    Private
 * @route     POST /calendars/export/cvs
 * @params    {rows}
 */
router.post('/calendars/export/cvs', (req, res) => {
  const rows = req.body
  console.log('calendars exort to cvs')
  console.log({ rows })
  return
})

export default router
