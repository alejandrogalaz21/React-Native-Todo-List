import Appointment from './appointment.model'
import Historical from './../historicals/historical.model'
import { isEmpty } from '../../helpers/util'
/**
 * @desc      get all appointment document's.
 * @params    query.
 */
export const getAllAppointments = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.startHour = { $lte: range.end })
      : range.end
      ? (query.startHour = { $gte: range.start, $lte: range.end })
      : (query.startHour = { $gte: range.start })

    if (range.start) query.startHour = { $gte: range.start }
    if (range.psychologist) query.psychologist = range.psychologist
    const data = await Appointment.find(query)
      .sort({ updatedAt: -1 })
      .populate({
        path: 'psychologist infant reason',
        select: 'name lastName reason.name  ',
        populate: {
          path: 'infant',
          select: 'infant',
          populate: { path: 'general', select: 'name lastName motherLastName' }
        }
      })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get all appointment document's paginated.
 * @params    query, page, limit.
 */
export const getAppointmentsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: {
        path: 'psychologist infant reason',
        select: 'name lastName',
        populate: {
          path: 'infant',
          select: 'infant',
          populate: { path: 'general', select: 'name lastName motherLastName folio' }
        }
      }
    }

    const querySearch = {}
 
    if (query.endDateFilter &&  query.startDateFilter) {
      querySearch.startHour = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.startHour = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.startHour = { $gte: query.startDateFilter }
    }
    if (query.psychologist) querySearch.psychologist = query.psychologist
    if (query.infant) querySearch.infant = query.infant

    const regex = { $regex: new RegExp('.*' + query?.search + '.*', 'i') }
    const data = await Appointment.paginate(
      query?.search ? { $or: [{ name: regex }, { description: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      create new appointment.
 * @params    body.
 */
export const createAppointment = async ({
  infant,
  psychologist,
  startHour,
  endHour,
  reason
}) => {
  try {
    const data = await Appointment.create({
      infant,
      psychologist,
      startHour,
      endHour,
      reason
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get single appointment document.
 * @params    id.
 */
export const getAppointment = async id => {
  try {
    const data = await Appointment.findById(id).populate({
      path: 'psychologist infant reason',
      select: 'name lastName',
      populate: {
        path: 'infant',
        select: 'infant',
        populate: { path: 'general', select: 'name lastName motherLastName' }
      }
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      update single appointment document.
 * @params    id, body.
 */

export const updateAppointment = async (id, body, user) => {
  try {
    const data = await Appointment.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'appointment',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Appointment.findByIdAndUpdate(
      id,
      { ...body.payload, $push: { historical } },
      { new: true }
    )
    return result
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      delete single appointment document.
 * @params    id.
 */
export const deleteAppointment = async id => {
  try {
    const data = await Appointment.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      deactivates a single appointment document.
 * @params    id, body.
 */
export const deactivateAppointment = async (id, body, user) => {
  try {
    const appointment = await Appointment.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'appointment',
      title: appointment.name,
      createdBy: user,
      document: appointment._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Appointment.findByIdAndUpdate(
      id,
      { active: false, appointment, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      reactivates a single appointment document.
 * @params    id, body.
 */
export const reactivateAppointment = async (id, body, user) => {
  try {
    const appointment = await Appointment.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'appointment',
      title: appointment.name,
      createdBy: user,
      document: appointment._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Appointment.findByIdAndUpdate(
      id,
      { active: true, appointment, $push: { historical } },
      {
        new: true
      }
    )
    // console.log(data)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      delete single appointment document.
 * @params    id.
 */
export const validateAppointmentSlot = async appointment => {
  try {
    const query = {
      psychologist: appointment.psychologist,
      active: true,
      endHour: { $gt: appointment.startHour },
      startHour: { $lt: appointment.endHour }
    }
    const data = await Appointment.find(query)
    return isEmpty(data) ? true : false
  } catch (error) {
    throw new Error(error)
  }
}
