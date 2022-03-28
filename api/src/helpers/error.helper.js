import mongoose from 'mongoose'

export class ErrorHandler extends Error {
  constructor({ status = 500, message, error, description, fields = {} }) {
    super()
    this.status = status
    this.message = message || 'Error del servidor'
    this.description = description
    this.error = error
    this.fields = fields
  }
}

export function errorHandler(error) {
  if (error instanceof ErrorHandler) return error

  if (error.name === 'MongoError' && error.code === 11000)
    return new ErrorHandler({ status: 400, message: 'Registro ya existente', error })

  if (error instanceof mongoose.Error.ValidationError) {
    const fields = Object.keys(error.errors).reduce((pre, key) => {
      pre[key] = error.errors[key].message
      return pre
    }, {})
    return new ErrorHandler({ status: 400, error: 'MongoValidationError', fields })
  }

  return new ErrorHandler({ error: String(error) })
}
