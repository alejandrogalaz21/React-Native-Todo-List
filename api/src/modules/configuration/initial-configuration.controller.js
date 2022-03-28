import { Router } from 'express'
import bcrypt from 'bcryptjs'
import User from '../users/user.model'
import Category from '../categories/category'
import Configuration from './configuration'
import { ErrorHandler } from '../../helpers/error.helper'
import { isEmpty } from '../../helpers/util'
import { encryptionAES } from '../../helpers/encryption.helper'
import '../modules/module.model'

export function initialConfigurationController({
  Configuration,
  User,
  Category
}) {
  const router = new Router()

  router.get('/', get)
  router.post('/', create)

  async function create(req, res, next) {
    try {
      const payload = req.body
      if (payload.productKey !== process.env.PRODUCT_KEY)
        throw new ErrorHandler({ message: 'Configuración no permitida' })

      const { user, category, ...configuration } = payload
      console.log(configuration)
      const validate = await configurationSaveValidation(payload)
      if (!validate.isValid) return res.status(400).json(validate)

      // Generate the salt to hash and create main admin
      const salt = await bcrypt.genSalt(10)
      const hashed = await bcrypt.hash(user.password, salt)
      await User.create({ ...user, role: 0, password: hashed, changePassword: false })

      // Encrypt mailer password
      if (configuration.mailer && configuration.mailer.auth)
        configuration.mailer.auth.pass = encryptionAES(configuration.mailer.auth.pass)

      const result = await Configuration.create(configuration)
      return res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  async function get(req, res, next) {
    try {
      const config = await Configuration.findOne({ active: true })
        .populate('settings.logo', 'path')
      if (!config) return res.status(200).json({ configured: false })

      const settings = {
        name: config.settings.name,
        logo: config.settings.logo.path
      }

      const result = {
        configured: true,
        settings,
        contact: config.contact
      }
      return res.status(200).json(result)
    } catch (error) {
      next(error)
    }
  }

  return router
}

const models = { Configuration, User, Category }
export const initialConfiguration = new Router().use(
  '/init',
  initialConfigurationController(models)
)

// Use a validation library
function configurationSaveValidation({ settings, contact, mailer }) {
  const errors = {}

  if (isEmpty(settings))
    return { isValid: false, errors: { ...errors, settings: 'Configuracion Vacia' } }

  if (!settings.name)
    errors.settings = { ...errors.settings, name: 'Nombre de institución requerido' }
  if (!settings.logo) errors.settings = { ...errors.settings, logo: 'Logo requerido' }

  if (isEmpty(contact))
    return { isValid: false, errors: { ...errors, contact: 'Contacto Vacio' } }
  if (!contact.address) errors.contact = { ...errors.contact, address: 'Dirección requerido' }
  if (!contact.phone) errors.contact = { ...errors.contact, phone: 'Telefono requerido' }
  if (!contact.email)
    errors.contact = { ...errors.contact, email: 'Correo electrónico requerido' }

  if (isEmpty(mailer))
    return {
      isValid: false,
      errors: { ...errors, mailer: 'Configuración envios de correos Vacio' }
    }

  if (!mailer.port) errors.mailer = { ...errors.mailer, port: 'Port requerido' }
  if (!mailer.host) errors.mailer = { ...errors.mailer, host: 'Host requerido' }

  const isValid = isEmpty(errors)
  return { isValid, errors }
}
