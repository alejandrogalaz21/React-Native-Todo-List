import { Router } from 'express'
import * as notificationsController from './notifications.controller'
import authMiddleware from '../../middleware/auth.middleware'

// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/notifications
 ** @params    query, page, limit
 */
router.get(
  '/notifications',
  authMiddleware,
  notificationsController.getAllNotificationsPagination
)

/**
 ** @desc      get all the unread records paginated
 ** @access    Public
 ** @route     GET api/notifications
 ** @params    query, page, limit
 */
router.get(
  '/notifications/unread',
  authMiddleware,
  notificationsController.getAllNotificationsUnReadPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/notifications
 ** @params    queryString, page, limit
 */
router.get('/notifications/all', authMiddleware, notificationsController.getAllNotifications)

/**
 ** @access    Private
 ** @route     POST api/notifications
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/notifications', authMiddleware, notificationsController.createNotification)
// Add

/**
 * @desc      gets totals for notifications
 * @access    Private
 * @route     GET api/notifications/totals
 * @params    id, {payload}.
 */
router.get('/notifications/totals', authMiddleware, notificationsController.getTotals)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/notifications/id
 ** @params    id
 */
router.get('/notifications/:id', authMiddleware, notificationsController.getOneNotification)

/**
 ** @desc      Sets a notification as read
 ** @access    Private
 ** @route     PUT api/notifications/id
 ** @params    id, {payload}.
 */
router.put(
  '/notifications/:id/set-read',
  authMiddleware,
  notificationsController.setReadNotification
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/notifications/id
 ** @params    id, {payload}.
 */
router.put('/notifications/:id', authMiddleware, notificationsController.updateNotification)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/notifications/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/notifications/:id/deactivate',
  authMiddleware,
  notificationsController.deactivateNotification
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/notifications/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/notifications/:id/reactivate',
  authMiddleware,
  notificationsController.reactivateNotification
)

export default router
