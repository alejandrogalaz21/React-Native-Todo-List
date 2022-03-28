import HttpStatus from 'http-status-codes'
import * as notificationService from './notification.service'
import * as ctrlHelpers from './../../helpers/controllers.util'
import notificationModel, { notificationModules } from './notification.model'

/**
 ** @desc   Controller method to get all notifications not readed results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllNotificationsUnReadPagination = async (req, res, next) => {
  try {
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)

    const documents = await notificationService.getNotificationsPagination(
      { ...query },
      page,
      limit,
      '60a582c1c90edc6a77fbca03',
      false
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all notifications fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all notifications results paginated
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllNotificationsPagination = async (req, res, next) => {
  try {
    req.query.recipients = { $elemMatch: { admin: '60a582c1c90edc6a77fbca03' } }
    const { page, limit, query } = ctrlHelpers.getQueryString(req.query)

    const documents = await notificationService.getNotificationsPagination(
      { ...query },
      page,
      limit,
      '60a582c1c90edc6a77fbca03',
      null
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all notifications fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get all notifications available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getAllNotifications = async (req, res, next) => {
  try {
    const { query } = ctrlHelpers.getQueryString(req.query)
    const documents = await notificationService.getAllNotifications(query)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      documents,
      'all notifications fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to create new notification
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const createNotification = async (req, res, next) => {
  try {
    console.log('user controller -> newUser()')
    const { createdBy, document, type, module, recipients, description } = req.body
    const doc = await notificationService.createNotification(
      createdBy,
      document,
      type,
      module,
      recipients,
      description
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.CREATED,
      doc,
      'notification created successfully'
    )
    return res.status(HttpStatus.CREATED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to get single notification available
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const getOneNotification = async (req, res, next) => {
  try {
    const doc = await notificationService.getNotification(req.params.id)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.OK,
      doc,
      'notification fetched successfully'
    )
    return res.status(HttpStatus.OK).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to update single notification
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const updateNotification = async (req, res, next) => {
  try {
    const doc = await notificationService.updateNotification(req.params.id, req.body)

    req.app.emit(
      'historical',
      req.body.historical?.description || 'se creó una notificación',
      notificationModules.notifications,
      req.user,
      doc
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'notification updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to deactivate an notification
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const deactivateNotification = async (req, res, next) => {
  try {
    const doc = await notificationService.getNotification(req.params.id)
    doc.active = false

    await notificationService.updateNotification(req.params.id, doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'Notification deactivated successfully'
    )
    req.app.emit(
      'historical',
      req.body.historical?.description || 'se editó una notificación',
      notificationModules.notifications,
      req.user,
      doc
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to reactivate an notification
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const reactivateNotification = async (req, res, next) => {
  try {
    const doc = await notificationService.getNotification(req.params.id)
    doc.active = true

    await notificationService.updateNotification(req.params.id, doc)
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'notification reactivated successfully'
    )

    req.app.emit(
      'historical',
      req.body.historical?.description || 'se reactivó una notificación',
      notificationModules.notifications,
      req.user,
      doc
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 * @desc   Controller method to get notification totals
 * @params  {object} req - request object
 * @params  {object} res - response object
 * @params  {Function} next
 */

export const getTotals = async (req, res, next) => {
  try {
    const doc = {
      total: await notificationModel.countDocuments(),
      active: await notificationModel.countDocuments({ active: true }),
      innactive: await notificationModel.countDocuments({ active: false })
    }
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'notification reactivated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}

/**
 ** @desc   Controller method to set a notification as read
 ** @param  {object} req - request object
 ** @param  {object} res - response object
 ** @param  {Function} next
 */
export const setReadNotification = async (req, res, next) => {
  try {
    const doc = await notificationService.setReadNotification(
      req.params.id,
      req.user,
      req.body
    )
    const response = ctrlHelpers.responseFormat(
      HttpStatus.ACCEPTED,
      doc,
      'notification updated successfully'
    )
    return res.status(HttpStatus.ACCEPTED).json(response)
  } catch (error) {
    next(error)
  }
}
