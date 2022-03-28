import Historical from './../historicals/historical.model'
import Canalization from './canalization.model'

/**
 ** @desc      get all canalization document's.
 ** @params    query.
 */
export const getAllCanalizations = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.createdAt = { $lte: range.end })
      : range.end
      ? (query.createdAt = { $gte: range.start, $lte: range.end })
      : (query.createdAt = { $gte: range.start })

    if (range.start) query.createdAt = { $gte: range.start }
    if (range.name) query.name = range.name
    const data = await Canalization.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all canalization document's paginated.
 ** @params    query, page, limit.
 */
export const getCanalizationsPagination = async (query = {}, page = 0, limit = 10) => {
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
    const data = await Canalization.paginate(query?.name ? { name: regex } : querySearch, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new canalization.
 ** @params    body.
 */
export const createCanalization = async body => {
  try {
    const data = await Canalization.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single canalization document.
 ** @params    id.
 */
export const getCanalization = async id => {
  try {
    const data = await Canalization.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single canalization document.
 ** @params    id, body.
 */
export const updateCanalization = async (id, body, user) => {
  try {
    const data = await Canalization.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'canalization',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Canalization.findByIdAndUpdate(
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
 ** @desc      delete single canalization document.
 ** @params    id.
 */
export const deleteCanalization = async id => {
  try {
    const data = await Canalization.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single canalization document.
 ** @params    id, body.
 */
export const deactivateCanalization = async (id, body, user) => {
  try {
    const record = await Canalization.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'canalization',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Canalization.findByIdAndUpdate(
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
 ** @desc      reactivates a single canalization document.
 ** @params    id, body.
 */
export const reactivateCanalization = async (id, body, user) => {
  try {
    const record = await Canalization.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'canalization',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Canalization.findByIdAndUpdate(
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
