import Historical from './../historicals/historical.model'
import Cost from './cost.model'

/**
 ** @desc      get all cost document's.
 ** @params    query.
 */
export const getAllCosts = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.createdAt = { $lte: range.end })
      : range.end
      ? (query.createdAt = { $gte: range.start, $lte: range.end })
      : (query.createdAt = { $gte: range.start })

    if (range.start) query.createdAt = { $gte: range.start }
    if (range.name) query.name = range.name
    if (range.center) query.center = range.center
    const data = await Cost.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all cost document's paginated.
 ** @params    query, page, limit.
 */
export const getCostsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: 'center service modality payment'
    }
    const querySearch = {}
    const regexName = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }

    if (query.endDateFilter &&  query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.createdAt = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter }
    }
    if (query.name) querySearch.$or = [{ name: regexName }]
    if (query.center) querySearch.center = query.center
    const regex = { $regex: new RegExp('.*' + query?.search + '.*', 'i') }
    const data = await Cost.paginate(query?.search ? { name: regex } : querySearch, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new cost.
 ** @params    body.
 */
export const createCost = async body => {
  try {
    const data = await Cost.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single cost document.
 ** @params    id.
 */
export const getCost = async id => {
  try {
    const data = await Cost.findById(id).populate('center service modality payment')
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single cost document.
 ** @params    id, body.
 */
export const updateCost = async (id, body, user) => {
  try {
    const cost = await Cost.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'cost',
      title: cost.name,
      createdBy: user,
      document: cost._id
    })
    const data = await Cost.findByIdAndUpdate(
      id,
      {
        ...body.payload,
        $push: { historical }
      },
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
 ** @desc      delete single cost document.
 ** @params    id.
 */
export const deleteCost = async id => {
  try {
    const data = await Cost.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single cost document.
 ** @params    id, body.
 */
export const deactivateCost = async (id, body, user) => {
  try {
    const cost = await Cost.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'cost',
      title: cost.name,
      createdBy: user,
      document: cost._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Cost.findByIdAndUpdate(
      id,
      { active: false, cost, $push: { historical } },
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
 ** @desc      reactivates a single cost document.
 ** @params    id, body.
 */
export const reactivateCost = async (id, body, user) => {
  try {
    const cost = await Cost.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'cost',
      title: cost.name,
      createdBy: user,
      document: cost._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Cost.findByIdAndUpdate(
      id,
      { active: true, cost, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
