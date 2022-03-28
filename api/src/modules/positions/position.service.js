import Position from './position.model'
import Historical from './../historicals/historical.model'
/**
 ** @desc      get all position document's.
 ** @params    query.
 */
export const getAllPositions = async (query = {}) => {
  try {
    const data = await Position.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all position document's paginated.
 ** @params    query, page, limit.
 */
export const getPositionsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: 'historical'
    }
    const querySearch = {}

    const regexName = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    const regexDescription = { $regex: new RegExp('.*' + query?.description + '.*', 'i') }
    if (query.endDateFilter && query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.createdAt = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter }
    }
    if (query.name) querySearch.$or = [{ name: regexName }]
    if (query.description) querySearch.$or = [{ description: regexDescription }]

    const data = await Position.paginate(
      querySearch, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new position.
 ** @params    body.
 */
export const createPosition = async body => {
  try {
    const data = await Position.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single position document.
 ** @params    id.
 */
export const getPosition = async id => {
  try {
    const data = await Position.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single position document.
 ** @params    id, body.
 */

export const updatePosition = async (id, body, user) => {
  try {
    const data = await Position.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'position',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Position.findByIdAndUpdate(
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
 ** @desc      delete single position document.
 ** @params    id.
 */
export const deletePosition = async id => {
  try {
    const data = await Position.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single position document.
 ** @params    id, body.
 */
export const deactivatePosition = async (id, body, user) => {
  try {
    const position = await Position.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'position',
      title: position.name,
      createdBy: user,
      document: position._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Position.findByIdAndUpdate(
      id,
      { active: false, position, $push: { historical } },
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
 ** @desc      reactivates a single position document.
 ** @params    id, body.
 */
export const reactivatePosition = async (id, body, user) => {
  try {
    const position = await Position.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'position',
      title: position.name,
      createdBy: user,
      document: position._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Position.findByIdAndUpdate(
      id,
      { active: true, position, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
