import jwt from 'jsonwebtoken'
import { settings } from './../../keys'

export function createJWT(props, secret = settings.secret, expiresIn = settings.expiresIn) {
  // prettier-ignore
  const { _id, thumbnail, permissions, role, active, changePassword, email, name, lastName, centers } = props
  try {
    return new Promise((resolve, reject) => {
      jwt.sign(
        { _id, thumbnail, permissions, role, active, changePassword, email, name, lastName, centers },
        secret,
        { expiresIn },
        (error, token) => {
          if (error) return reject(error)
          return resolve({ token, success: true })
        }
      )
    })
  } catch (error) {
    throw new Error('Oops Something Happened Trying To Create JWT')
  }
}

/**
 * Summary. Randoumsly
 * @param {number} [length = 8] Lenght of the generated password randomly
 * @return {string} Random password of "lenght" length
 */
export const generatePassword = (length = 8) => {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789'
  let password = ''
  for (let i = 0, n = charset.length; i < length; ++i) {
    password += charset.charAt(Math.floor(Math.random() * n))
  }
  return password
}
