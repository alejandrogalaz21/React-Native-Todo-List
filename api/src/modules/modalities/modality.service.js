import Historical from './../historicals/historical.model'
import Modality from './modality.model'

/**
 ** @desc      get all modality document's.
 ** @params    query.
 */
export const getAllModalities = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.createdAt = { $lte: range.end })
      : range.end
      ? (query.createdAt = { $gte: range.start, $lte: range.end })
      : (query.createdAt = { $gte: range.start })

    if (range.start) query.createdAt = { $gte: range.start }
    if (range.name) query.name = range.name
    const data = await Modality.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all modality document's paginated.
 ** @params    query, page, limit.
 */
export const getModalitiesPagination = async (query = {}, page = 0, limit = 10) => {
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
    const data = await Modality.paginate(
      query?.name ? { $or: [{ name: regex }, { description: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new modality.
 ** @params    body.
 */
export const createModality = async body => {
  try {
    const data = await Modality.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single modality document.
 ** @params    id.
 */
export const getModality = async id => {
  try {
    const data = await Modality.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single modality document.
 ** @params    id, body.
 */
export const updateModality = async (id, body, user) => {
  try {
    const data = await Modality.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'modality',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Modality.findByIdAndUpdate(
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
 ** @desc      delete single modality document.
 ** @params    id.
 */
export const deleteModality = async id => {
  try {
    const data = await Modality.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single modality document.
 ** @params    id, body.
 */
export const deactivateModality = async (id, body, user) => {
  try {
    const record = await Modality.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'modality',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Modality.findByIdAndUpdate(
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
 ** @desc      reactivates a single modality document.
 ** @params    id, body.
 */
export const reactivateModality = async (id, body, user) => {
  try {
    const record = await Modality.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'modality',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Modality.findByIdAndUpdate(
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
