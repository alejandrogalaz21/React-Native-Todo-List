import Historical from './../historicals/historical.model'
import Cycle from './cycle.model'

/**
 ** @desc      get all cycle document's.
 ** @params    query.
 */
export const getAllCycles = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.dateStart = { $lte: range.end })
      : range.end
      ? (query.dateStart = { $gte: range.start, $lte: range.end })
      : (query.dateStart = { $gte: range.start })

    if (range.start) query.dateStart = { $gte: range.start }
    if (range.name) query.name = range.name
    const data = await Cycle.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all cycle document's paginated.
 ** @params    query, page, limit.
 */
export const getCyclesPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: { path: 'historical', populate: { path: 'createdBy' } }
    }
    const querySearch = {}
    if (query.endDateFilter &&  query.startDateFilter) {
      querySearch.dateStart = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.dateStart = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.dateStart = { $gte: query.startDateFilter }
    }
    if (query.name) querySearch.name = query.name
    const regex = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    const data = await Cycle.paginate(
      query?.name ? { $or: [{ name: regex }, { description: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new cycle.
 ** @params    body.
 */
export const createCycle = async body => {
  try {
    const data = await Cycle.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single cycle document.
 ** @params    id.
 */
export const getCycle = async id => {
  try {
    const data = await Cycle.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single cycle document.
 ** @params    id, body.
 */
export const updateCycle = async (id, body, user) => {
  try {
    const data = await Cycle.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'cycle',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Cycle.findByIdAndUpdate(
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
 ** @desc      delete single cycle document.
 ** @params    id.
 */
export const deleteCycle = async id => {
  try {
    const data = await Cycle.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single cycle document.
 ** @params    id, body.
 */
export const deactivateCycle = async (id, body, user) => {
  try {
    const record = await Cycle.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'cycle',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Cycle.findByIdAndUpdate(
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
 ** @desc      reactivates a single cycle document.
 ** @params    id, body.
 */
export const reactivateCycle = async (id, body, user) => {
  try {
    const record = await Cycle.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'cycle',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Cycle.findByIdAndUpdate(
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
