import CanalizationLocation from './canalizationLocation.model'
import Historical from './../historicals/historical.model'

/**
 ** @desc      get all canalizationLocation document's.
 ** @params    query.
 */
export const getAllCanalizationLocations = async (query = {}) => {
  try {
    const data = await CanalizationLocation.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all canalizationLocation document's paginated.
 ** @params    query, page, limit.
 */
export const getCanalizationLocationsPagination = async (query = {}, page = 0, limit = 10) => {
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
    if (query.location) query.search = query.location
    const regex = { $regex: new RegExp('.*' + query?.search + '.*', 'i') }
    const data = await CanalizationLocation.paginate(
      query?.search ? { location: regex } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new canalizationLocation.
 ** @params    body.
 */
export const createCanalizationLocation = async body => {
  try {
    const data = await CanalizationLocation.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single canalizationLocation document.
 ** @params    id.
 */
export const getCanalizationLocation = async id => {
  try {
    const data = await CanalizationLocation.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single canalizationLocation document.
 ** @params    id, body.
 */
export const updateCanalizationLocation = async (id, body, user) => {
  try {
    const data = await CanalizationLocation.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'canalizationLocation',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await CanalizationLocation.findByIdAndUpdate(
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
 ** @desc      delete single canalizationLocation document.
 ** @params    id.
 */
export const deleteCanalizationLocation = async id => {
  try {
    const data = await CanalizationLocation.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single canalizationLocation document.
 ** @params    id, body.
 */
export const deactivateCanalizationLocation = async (id, body, user) => {
  try {
    const canalizationLocation = await CanalizationLocation.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'canalizationLocation',
      title: canalizationLocation.name,
      createdBy: user,
      document: canalizationLocation._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await CanalizationLocation.findByIdAndUpdate(
      id,
      { active: false, canalizationLocation, $push: { historical } },
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
 ** @desc      reactivates a single canalizationLocation document.
 ** @params    id, body.
 */
export const reactivateCanalizationLocation = async (id, body, user) => {
  try {
    const canalizationLocation = await CanalizationLocation.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'canalizationLocation',
      title: canalizationLocation.name,
      createdBy: user,
      document: canalizationLocation._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await CanalizationLocation.findByIdAndUpdate(
      id,
      { active: true, canalizationLocation, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
