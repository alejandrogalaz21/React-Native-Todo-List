import Configuration from './configuration'
import User from '../users/user.model'
import { blue } from '../../helpers/chalk.helper'
import { generateMailer } from '../../mailer'
import { encryptionAES } from '../../helpers/encryption.helper'
import Historical from './../historicals/historical.model'
import { getConfig } from '../../keys'

  export async function edit(req, res, next) {
    try {
      blue('configuration > controller > readOne')
      const result = await Configuration.findOne({ active: true })
      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

  export async function update(req, res, next) {
    try {
      blue('configuration > controller > update')
      const config = await getConfig()

      const record = await Configuration.findOne({ active: true }).lean()
      const historical = await Historical.create({
        ...req.body.historical,
        module: 'configuration',
        createdBy: req.user._id,
        document: record._id
      })

      const { payload } = req.body
      const mailer = payload.mailer
      if (mailer) payload.mailer.auth.pass = encryptionAES(mailer.auth.pass)

      const result = await Configuration.findOneAndUpdate(
        { active: true },
        { ...payload, $push: { historical } },
        { new: true }
      ).populate('settings.logo')

      const author = `${req.user.name} ${req.user.lastName} (${req.user.email})`
      const superadmins = await User.find({ role: 0, active: true }).lean()

      const logo = `https://${req.hostname}${config.settings.logo.path}`
      const owner = result.settings.name
      const justification = historical.description
      const pageName = 'Configuración'

      for (const superadmin of superadmins) {
        const mailer = await generateMailer()
        await mailer.send({
          template: 'config',
          message: { to: superadmin.email },
          locals: { logo, author, owner, pageName, justification }
        })
      }

      return res.send(result)
    } catch (error) {
      next(error)
    }
  }

