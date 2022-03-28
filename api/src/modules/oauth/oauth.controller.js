import { settings } from '../../keys'
import { createJWT } from '../auth/auth.helper'
import { isEmpty } from './../../helpers'
import { ErrorHandler } from '../../helpers/error.helper'

  export async function check(req, res, next) {
    try {
      const { user } = req
      if (!isEmpty(user)) {
        // Generate a JWT and Remove session used by oauth
        const { token } = await createJWT(user)
        req.logout()
        if (user.active !== true)
          throw new ErrorHandler({
            status: 400,
            message: 'Verifica con el administrador tu acceso'
          })
        return res.status(200).json({ success: true, user, token })
      }
      return res.status(200).json({ success: false })
    } catch (error) {
      next(error)
    }
  }

  export async function failed(req, res) {
    return res.status(401).json({ success: false })
  }

  export async function logout(req, res, next) {
    try {
      req.logout()
      return res.redirect(settings.clientURL)
    } catch (error) {
      next(error)
    }
  }
