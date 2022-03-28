import * as appointmentService from './appointment.service'
import * as Yup from 'yup'

/**
 ** @desc      validate create new appointment.
 ** @params    body.
 */

export const validateCreateAppointment = async body => {
    const appointment = body


  const valid = await AppointmentValidationSchema.isValid(appointment)

  if (!valid) {
    return 'Datos incorrectos'
  }
  const duplicated = await appointmentService.validateAppointmentSlot(appointment)
  if (duplicated) {
    const response = 'registro duplicado'
    return response
  }
  return null
}

/**
 ** @desc      validate update  appointment document.
 ** @params    id, body.
 */
export const validateUpdateAppointment = async (id, body) => {
      const appointment = body

  const valid = await AppointmentValidationSchema.isValid(appointment)

  if (!valid) {
    return 'Datos incorrectos'
  }
  const oldRegister = await appointmentService.getAppointment(id)

  if (oldRegister.name !== appointment.name) {
    const duplicated = await appointmentService.validateAppointmentSlot(appointment)
    if (duplicated) {
      const response = 'Ya existe un registro con ese nombre'
      return response
    }
  }

  return null
}
const AppointmentValidationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(15, 'Too Long!')
    .required('Requerido'),
  description: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Requerido')
})
