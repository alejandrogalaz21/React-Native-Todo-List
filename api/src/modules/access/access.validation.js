import * as accessService from './access.service'
import * as Yup from 'yup'

/**
 ** @desc      validate create new access.
 ** @params    body.
 */

export const validateCreateAccess = async body => {
    const access = body


  const valid = await AccessValidationSchema.isValid(access)

  if (!valid) {
    return 'Datos incorrectos'
  }
  const duplicated = await accessService.validateAccessSlot(access)
  if (duplicated) {
    const response = 'registro duplicado'
    return response
  }
  return null
}

/**
 ** @desc      validate update  access document.
 ** @params    id, body.
 */
export const validateUpdateAccess = async (id, body) => {
      const access = body

  const valid = await AccessValidationSchema.isValid(access)

  if (!valid) {
    return 'Datos incorrectos'
  }
  const oldRegister = await accessService.getAccess(id)

  if (oldRegister.name !== access.name) {
    const duplicated = await accessService.validateAccessSlot(access)
    if (duplicated) {
      const response = 'Ya existe un registro con ese nombre'
      return response
    }
  }

  return null
}
const AccessValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Requerido'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Requerido')
})
