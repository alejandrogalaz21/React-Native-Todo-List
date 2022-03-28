import Historical from './../historicals/historical.model'
import Scholarship from './scholarship.model'

/**
 ** @desc      get all scholarship document's.
 ** @params    query.
 */
export const getAllScholarships = async (query = {}) => {
  try {
    const data = await Scholarship.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all scholarship document's paginated.
 ** @params    query, page, limit.
 */
export const getScholarshipsPagination = async (query = {}, page = 0, limit = 10) => {
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
    if (query.name) query.search = query.name

    const regex = { $regex: new RegExp('.*' + query?.search + '.*', 'i') }
    const data = await Scholarship.paginate(
      query?.search ? { name: regex } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new scholarship.
 ** @params    body.
 */
export const createScholarship = async body => {
  try {
    const data = await Scholarship.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single scholarship document.
 ** @params    id.
 */
export const getScholarship = async id => {
  try {
    const data = await Scholarship.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single scholarship document.
 ** @params    id, body.
 */
export const updateScholarship = async (id, body, user) => {
  try {
    const data = await Scholarship.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'scholarship',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Scholarship.findByIdAndUpdate(
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
 ** @desc      delete single scholarship document.
 ** @params    id.
 */
export const deleteScholarship = async id => {
  try {
    const data = await Scholarship.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single scholarship document.
 ** @params    id, body.
 */
export const deactivateScholarship = async (id, body, user) => {
  try {
    const record = await Scholarship.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'scholarship',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Scholarship.findByIdAndUpdate(
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
 ** @desc      reactivates a single scholarship document.
 ** @params    id, body.
 */
export const reactivateScholarship = async (id, body, user) => {
  try {
    const record = await Scholarship.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'scholarship',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Scholarship.findByIdAndUpdate(
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
