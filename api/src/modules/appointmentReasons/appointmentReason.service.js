import AppointmentReason from './appointmentReason.model'
import Historical from './../historicals/historical.model'
/**
 * @desc      get all appointmentReason document's.
 * @params    query.
 */
export const getAllAppointmentReasons = async (query = {}) => {
  try {
    const data = await AppointmentReason.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get all appointmentReason document's paginated.
 * @params    query, page, limit.
 */
export const getAppointmentReasonsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: 'historical'
    }
    const querySearch = {}

    if (query.endDateFilter && query.startDateFilter) {
      querySearch.updatedAt = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.updatedAt = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.updatedAt = { $gte: query.startDateFilter }
    }
    if (query.name) query.search = query.name
    if (query.description) query.search = query.description

    const regex = { $regex: new RegExp('.*' + query?.search + '.*', 'i') }
    const data = await AppointmentReason.paginate(
      query?.search ? { $or: [{ name: regex }, { description: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      create new appointmentReason.
 * @params    body.
 */
export const createAppointmentReason = async ({ name, description }) => {
  try {
    const data = await AppointmentReason.create({
      name,
      description
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get single appointmentReason document.
 * @params    id.
 */
export const getAppointmentReason = async id => {
  try {
    const data = await AppointmentReason.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      update single appointmentReason document.
 * @params    id, body.
 */

export const updateAppointmentReason = async (id, body, user) => {
  try {
    const data = await AppointmentReason.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'appointmentReason',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await AppointmentReason.findByIdAndUpdate(
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
 * @desc      delete single appointmentReason document.
 * @params    id.
 */
export const deleteAppointmentReason = async id => {
  try {
    const data = await AppointmentReason.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      deactivates a single appointmentReason document.
 * @params    id, body.
 */
export const deactivateAppointmentReason = async (id, body, user) => {
  try {
    const appointmentReason = await AppointmentReason.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'appointmentReason',
      title: appointmentReason.name,
      createdBy: user,
      document: appointmentReason._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await AppointmentReason.findByIdAndUpdate(
      id,
      { active: false, appointmentReason, $push: { historical } },
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
 * @desc      reactivates a single appointmentReason document.
 * @params    id, body.
 */
export const reactivateAppointmentReason = async (id, body, user) => {
  try {
    const appointmentReason = await AppointmentReason.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'appointmentReason',
      title: appointmentReason.name,
      createdBy: user,
      document: appointmentReason._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await AppointmentReason.findByIdAndUpdate(
      id,
      { active: true, appointmentReason, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
