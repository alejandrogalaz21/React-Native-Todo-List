import Historical from './../historicals/historical.model'
import Dropout from './dropout.model'

/**
 ** @desc      get all dropout document's.
 ** @params    query.
 */
export const getAllDropouts = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.createdAt = { $lte: range.end })
      : range.end
      ? (query.createdAt = { $gte: range.start, $lte: range.end })
      : (query.createdAt = { $gte: range.start })

    if (range.start) query.createdAt = { $gte: range.start }
    if (range.name) query.name = range.name
    const data = await Dropout.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all dropout document's paginated.
 ** @params    query, page, limit.
 */
export const getDropoutsPagination = async (query = {}, page = 0, limit = 10) => {
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
    const data = await Dropout.paginate(
      query?.name ? { $or: [{ name: regex }, { description: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new dropout.
 ** @params    body.
 */
export const createDropout = async body => {
  try {
    const data = await Dropout.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single dropout document.
 ** @params    id.
 */
export const getDropout = async id => {
  try {
    const data = await Dropout.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single dropout document.
 ** @params    id, body.
 */
export const updateDropout = async (id, body, user) => {
  try {
    const data = await Dropout.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'dropout',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Dropout.findByIdAndUpdate(
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
 ** @desc      delete single dropout document.
 ** @params    id.
 */
export const deleteDropout = async id => {
  try {
    const data = await Dropout.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single dropout document.
 ** @params    id, body.
 */
export const deactivateDropout = async (id, body, user) => {
  try {
    const record = await Dropout.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'dropout',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Dropout.findByIdAndUpdate(
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
 ** @desc      reactivates a single dropout document.
 ** @params    id, body.
 */
export const reactivateDropout = async (id, body, user) => {
  try {
    const record = await Dropout.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'Dropout',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Dropout.findByIdAndUpdate(
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
