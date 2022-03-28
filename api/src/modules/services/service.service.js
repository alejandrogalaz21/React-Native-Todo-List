import Historical from './../historicals/historical.model'
import Service from './service.model'

/**
 ** @desc      get all service document's.
 ** @params    query.
 */
export const getAllServices = async (range = {}) => {
  try {
    const query = {}
      range.end && !range.start
        ? (query.createdAt = { $lte: range.end })
        : range.end
        ? (query.createdAt = { $gte: range.start, $lte: range.end })
        : (query.createdAt = { $gte: range.start })
  
      if (range.start) query.createdAt = { $gte: range.start }
      if (range.name) query.name = range.name
    const data = await Service.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all service document's paginated.
 ** @params    query, page, limit.
 */
export const getServicesPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: { path: 'historical', populate: { path: 'createdBy' } }
    }
    const querySearch = {}
    if (query.endDateFilter &&  query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.createdAt = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter }
    }
    if (query.name) querySearch.name = query.name
    const regex = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    const data = await Service.paginate(
      query?.name ? { $or: [{ name: regex }, { description: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new service.
 ** @params    body.
 */
export const createService = async body => {
  try {
    const data = await Service.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single service document.
 ** @params    id.
 */
export const getService = async id => {
  try {
    const data = await Service.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single service document.
 ** @params    id, body.
 */
export const updateService = async (id, body, user) => {
  try {
    const data = await Service.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'service',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Service.findByIdAndUpdate(
      id,
      { ...body.payload, $push: { historical } },
      {
        new: true
      }
    )
    return result
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      delete single service document.
 ** @params    id.
 */
export const deleteService = async id => {
  try {
    const data = await Service.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single service document.
 ** @params    id, body.
 */
export const deactivateService = async (id, body, user) => {
  try {
    const record = await Service.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'service',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Service.findByIdAndUpdate(
      id,
      { active: false, record, $push: { historical } },
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
 ** @desc      reactivates a single service document.
 ** @params    id, body.
 */
export const reactivateService = async (id, body, user) => {
  try {
    const record = await Service.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'service',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Service.findByIdAndUpdate(
      id,
      { active: true, record, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
