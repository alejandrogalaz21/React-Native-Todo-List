import bcrypt from 'bcryptjs'
import User from '../users/user.model'
import { blue } from './../../helpers/chalk.helper'
import { createJWT, generatePassword } from './auth.helper'
import { ErrorHandler } from '../../helpers/error.helper'
import { settings, env, getConfig } from '../../keys'
import { generateMailer } from '../../mailer'

  export async function login(req, res, next) {
    try {
      blue('auths > controller > login')
      const { email, password } = req.body
      const user = await User.findOne({ email })
        .populate({ path: 'permissions', populate: 'module' })
        .populate({ path: 'thumbnail', select: 'path' })
        .lean()

      if (!user) {
        throw new ErrorHandler({
          status: 400,
          message: 'Credenciales incorrectas',
          description: 'Intenta nuevamente'
        })
      } else if (user) {
        const correctCredentials = bcrypt.compareSync(password, user.password)
        if (!correctCredentials) {
          throw new ErrorHandler({
            status: 400,
            message: 'Credenciales incorrectas',
            description: 'Intenta nuevamente'
          })
        } else if (user.active !== true) {
          throw new ErrorHandler({
            status: 400,
            message: 'Verifica con el administrador tu acceso'
          })
        }
      }

      const token = await createJWT(user, settings.secret, settings.expiresIn)

      return res.status(200).json(token)
    } catch (error) {
      next(error)
    }
  }

  export async function logout(req, res, next) {
    try {
      const query = { _id: req.params.id }
      const user = await User.findOneAndUpdate(query, { login: false }, { new: true })
      return res.status(200).json(user)
    } catch (error) {
      next(error)
    }
  }

  export async function requestRecoverPassword(req, res, next) {
    try {
      const config = await getConfig()
      const { email } = req.body

      // Find the user with the associated email
      const doc = await User.findOne({ email })

      if (!doc) {
        throw new ErrorHandler({
          status: 400,
          message: 'Verifica con el administrador tu acceso',
          fields: { email: 'Usuario no válido' }
        })
      }

      // Generate a 20 characters' recover token
      const recoverPasswordToken = generatePassword(20)
      const recoverPasswordExpires = Date.now() + 3600000 // 1 hour to expire

      // Hash the token to store it in DB
      const salt = bcrypt.genSaltSync(10)
      const hashToken = bcrypt.hashSync(recoverPasswordToken, salt)

      // Add the hashed recovery token to the user document
      const user = await User.findOneAndUpdate(
        { email },
        { recoverPasswordToken: hashToken, recoverPasswordExpires }
      )

      // Structure the url to change its password
      const hostname = env === 'development' ? 'localhost:3000' : req.headers.host
      const pathname = 'recover-password'
      const queries = `email=${email}&token=${recoverPasswordToken}`
      const url = `https://${hostname}/${pathname}?${queries}`
      const logo = `https://${req.hostname}${config.settings.logo.path}`

      const mailer = await generateMailer()
      await mailer.send({
        template: 'recover-password',
        message: { to: user.email },
        locals: { url, name: user.name, logo }
      })

      return res.status(200).json({ message: 'Se envió un link de recuperación' })
    } catch (error) {
      next(error)
    }
  }

  export async function recoverPassword(req, res, next) {
    try {
      const { email, token, password } = req.body
      // Find the user with the given email and check if its token hasn't expired
      const user = await User.findOne({
        email,
        recoverPasswordExpires: { $gt: Date.now() }
      })

      // ? Does the recovery token match with the given?
      const isMatch = bcrypt.compareSync(token, user.recoverPasswordToken)

      //* User's recovery token is correct
      if (isMatch && token) {
        // Hash the new password to store in DB
        const salt = bcrypt.genSaltSync(10)
        const hash = bcrypt.hashSync(password, salt)

        // Update the password
        // Set the recovery password token and its expiring time to null
        const doc = await User.findByIdAndUpdate(user._id, {
          password: hash,
          recoverPasswordToken: null,
          recoverPasswordExpires: null
        })

        return res.status(200).json(doc)
      }
      // User not found or its recovery token is not correct
      throw new ErrorHandler({ status: 401, message: 'No autorizado' })
    } catch (error) {
      next(error)
    }
  }

  export async function resetPassword(req, res, next) {
    try {
      const { password, newPassword } = req.body
      // Generate a random salt
      const salt = bcrypt.genSaltSync(10)
      // Find the user which request the reset
      const user = await User.findById(req.user._id)
      const isMatch = bcrypt.compareSync(password, user.password)

      //* User's password matches
      if (isMatch) {
        const hash = bcrypt.hashSync(newPassword, salt)
        // Change the password (hashed)
        const doc = await User.findByIdAndUpdate(req.user._id, {
          password: hash,
          changePassword: false
        })

        return res.status(200).json(doc)
      }
      // User password is not correct
      throw new ErrorHandler({ status: 400, message: 'Contraseña incorrecta' })
    } catch (error) {
      next(error)
    }
  }
