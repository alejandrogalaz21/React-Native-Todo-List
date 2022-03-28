import Notification from './notification.model'

/**
 ** @desc      get all notification document's.
 ** @params    query.
 */
export const getAllNotifications = async (query = {}) => {
  try {
    const data = await Notification.find(query)
      .populate({
        path: 'createdBy'
      })
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all notification document's paginated.
 ** @params    query, page, limit.
 */
export const getNotificationsPagination = async (
  query = {},
  page = 0,
  limit = 5,
  adminId,
  isRead
) => {
  try {
    if (isRead === false) {
      query.recipients = {
        $elemMatch: { admin: adminId, isReading: false }
      }
    }
    const options = {
      page,
      limit,
      populate: {
        path: 'createdBy'
      },
      sort: { updatedAt: -1 }
    }
    const data = await Notification.paginate(query, options)
    for (const noti of data.docs) {
      const recipientAdm = noti.recipients.filter(recip => recip.admin == adminId)
      const hiddenId = recipientAdm.map(rec => {
        return { isReading: rec.isReading, _id: rec._id }
      })
      noti.recipients = hiddenId
    }
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      create new notification.
 * @params    createdBy,
              document,
              type,
              module,
              recipients,
              description.
 */
export const createNotification = async (
  createdBy,
  document,
  type,
  module,
  recipients,
  description
) => {
  try {
    const data = await Notification.create({
      createdBy,
      document,
      type,
      module,
      recipients,
      description
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single notification document.
 ** @params    id.
 */
export const getNotification = async id => {
  try {
    const data = await Notification.findById(id).populate({
      path: 'createdBy'
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single notification document.
 ** @params    id, body.
 */
export const updateNotification = async (id, body) => {
  try {
    const data = await Notification.findByIdAndUpdate(id, body, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      sets an notification as read.
 * @params    mail.
 */
export const setReadNotification = async (id, user) => {
  try {
    const data = await Notification.findOne({
      _id: id,
      recipients: { $elemMatch: { admin: user._id } }
    })
    for (const rec of data.recipients) {
      if (rec.admin == user._id) {
        rec.isReading = true
      }
    }
    const doc = await Notification.findByIdAndUpdate(id, data, {
      new: true
    })
    return doc
  } catch (error) {
    throw new Error(error)
  }
}
