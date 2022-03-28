import Historical from './../historicals/historical.model'
import Percentage from './percentage.model'

/**
 ** @desc      get all percentage document's.
 ** @params    query.
 */
export const getAllPercentages = async (query = {}) => {
  try {
    const data = await Percentage.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all percentage document's paginated.
 ** @params    query, page, limit.
 */
export const getPercentagesPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: { path: 'historical', populate: { path: 'createdBy' } }
    }
    const querySearch = {}

    if (query.endDateFilter && query.startDateFilter) {
      querySearch.updatedAt = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.updatedAt = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.updatedAt = { $gte: query.startDateFilter }
    }
    if (query.percentage) query.search = query.percentage

    // const regex = { $regex: new RegExp('.*' + query?.search + '.*', 'i') }
    const data = await Percentage.paginate(
      query?.search ? { percentage: query?.percentage } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new percentage.
 ** @params    body.
 */
export const createPercentage = async body => {
  try {
    const data = await Percentage.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single percentage document.
 ** @params    id.
 */
export const getPercentage = async id => {
  try {
    const data = await Percentage.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single percentage document.
 ** @params    id, body.
 */
export const updatePercentage = async (id, body, user) => {
  try {
    const data = await Percentage.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'percentage',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Percentage.findByIdAndUpdate(
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
 ** @desc      delete single percentage document.
 ** @params    id.
 */
export const deletePercentage = async id => {
  try {
    const data = await Percentage.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single percentage document.
 ** @params    id, body.
 */
export const deactivatePercentage = async (id, body, user) => {
  try {
    const record = await Percentage.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'percentage',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Percentage.findByIdAndUpdate(
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
 ** @desc      reactivates a single percentage document.
 ** @params    id, body.
 */
export const reactivatePercentage = async (id, body, user) => {
  try {
    const record = await Percentage.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'percentage',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Percentage.findByIdAndUpdate(
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
