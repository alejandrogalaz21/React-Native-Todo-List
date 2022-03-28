import Center from './center.model'
import Historical from './../historicals/historical.model'

/**
 ** @desc      get all center document's.
 ** @params    query.
 */
export const getAllCenters = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.createdAt = { $lte: range.end })
      : range.end
      ? (query.createdAt = { $gte: range.start, $lte: range.end })
      : (query.createdAt = { $gte: range.start })

    if (range.start) query.createdAt = { $gte: range.start }
    if (range.name) query.name = range.name
    const data = await Center.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all center document's paginated.
 ** @params    query, page, limit.
 */
export const getCentersPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
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
    const data = await Center.paginate(
      query?.name ? { $or: [{ name: regex }, { description: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new center.
 ** @params    body.
 */
export const createCenter = async body => {
  try {
    const data = await Center.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single center document.
 ** @params    id.
 */
export const getCenter = async id => {
  try {
    const data = await Center.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single center document.
 ** @params    id, body.
 */
export const updateCenter = async (id, body, user) => {
  try {
    const data = await Center.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'center',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Center.findByIdAndUpdate(
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
 ** @desc      delete single center document.
 ** @params    id.
 */
export const deleteCenter = async id => {
  try {
    const data = await Center.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single center document.
 ** @params    id, body.
 */
export const deactivateCenter = async (id, body, user) => {
  try {
    const center = await Center.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'center',
      title: center.name,
      createdBy: user,
      document: center._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Center.findByIdAndUpdate(
      id,
      { active: false, center, $push: { historical } },
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
 ** @desc      reactivates a single center document.
 ** @params    id, body.
 */
export const reactivateCenter = async (id, body, user) => {
  try {
    const center = await Center.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'center',
      title: center.name,
      createdBy: user,
      document: center._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Center.findByIdAndUpdate(
      id,
      { active: true, center, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
