// import { getNotifcationMail } from './helpers/mail.helper'
// import { getMailer } from './mail/mail'
import { notificationTypes } from './app/notifications/notification.model'
import * as notificationService from './app/notifications/notification.service'
// import * as historicalService from './app/historicals/historical.service'
import * as userService from './app/users/user.service'
import io, { socketNamespace } from './socket'
export class CustomEvents {
  constructor(app) {
    this.app = app
  }
  listenNotification() {
    this.app.on('notification', (user, action, module, doc, moduleName) =>
      this.manageNotification(user, action, module, doc, moduleName)
    )
  }
  listenHistorical() {
    this.app.on('historical', (description, module, cause, admin, doc, userId) =>
      this.manageHistorical(description, module, cause, admin, doc, userId)
    )
  }
  listenNotificationEmail() {
    this.app.on('emailNotification', (user, action, module, doc, moduleName) => {
      this.manageMailNotification(user, action, module, doc, moduleName)
    })
  }
  listenPushNotification() {
    this.app.on('pushNotification', (user, action, module, doc, moduleName) => {
      this.managePushNotification(user, action, module, doc, moduleName)
    })
  }

  async manageNotification(user, action, module, doc, moduleName) {
    try {
      const recipientsArray = []
      recipientsArray.push(user._id)
      const admArray = await this.getAllAdmins(user._id)
      admArray.map(adm => recipientsArray.push(adm))
      const uniq = [...new Set(recipientsArray)]
      const recipients = uniq.map(adm => {
        return { admin: adm, isReading: false }
      })
      await notificationService.createNotification(
        user._id,
        doc,
        notificationTypes.notification,
        moduleName,
        recipients,
        `Se ${action} un/a  ${module}`
      )
      socketNamespace.emit('notificationSocket', 'nuevas notificaciones')
      io.emit('newNotificationSocket', 'nuevas notificaciones')
      return true
    } catch (error) {
      return false
    }
  }
  // async manageMailNotification(user, action, module, doc, moduleName) {
  //   try {
  //     const recipientsArray = []
  //     recipientsArray.push(user._id)
  //     const uniq = [...new Set(recipientsArray)]
  //     const recipients = uniq.map(adm => {
  //       return { admin: adm, isReading: false }
  //     })
  //     const mailer = await getMailer()
  //     const mail = await getNotifcationMail(
  //       'Esto es una notificación',
  //       `Se ${action} un/a ${module}`
  //     )
  //     const admins = await userService.getAllAdmins()
  //     admins.map(admin => {
  //       mailer.send({
  //         template: 'general',
  //         message: { to: admin.email },
  //         locals: mail
  //       })
  //       mailer.transport.close()
  //     })

  //     await notificationService.createNotification(
  //       user._id,
  //       doc,
  //       notificationTypes.emailNotification,
  //       moduleName,
  //       recipients,
  //       `Se ${action} un/a  ${module}`
  //     )
  //     return true
  //   } catch (error) {
  //     return false
  //   }
  // }
  async managePushNotification(user, action, module, doc, moduleName) {
    try {
      const recipientsArray = []
      recipientsArray.push(user._id)
      const uniq = [...new Set(recipientsArray)]
      const recipients = uniq.map(adm => {
        return { admin: adm, isReading: false }
      })
      await notificationService.createNotification(
        user._id,
        doc,
        notificationTypes.pushNotification,
        moduleName,
        recipients,
        `Se ${action} un/a  ${module}`
      )
      // SEND PUSH NOTIFICATION

      return true
    } catch (error) {
      return false
    }
  }

  // async manageHistorical(description, module, cause, user, doc, userId) {
  //   try {
  //     await historicalService.createHistorical(
  //       doc._id,
  //       module,
  //       description,
  //       cause,
  //       user?._id,
  //       userId
  //     )
  //     return true
  //   } catch (error) {
  //     return false
  //   }
  // }

  async getAllAdmins(user) {
    const data = (await userService.getAllUsers()).map(user => user._id)
    return data
  }
}
