import Access from './access.model'
import Historical from './../historicals/historical.model'

/**
 * @desc      get all access document's.
 * @params    query.
 */
export const getAllAccess = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.hour = { $lte: range.end })
      : range.end
      ? (query.hour = { $gte: range.start, $lte: range.end })
      : (query.hour = { $gte: range.start })

    if (range.start) query.hour = { $gte: range.start }
    if (range.psychologist) query.psychologist = range.psychologist
    const data = await Access.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get all access document's paginated.
 * @params    query, page, limit.
 */
export const getAccessPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: {
        path: 'infant',
        select: 'name lastName',
        populate: {
          path: 'infant parent',
          select: 'infant parent',
          populate: { path: 'general', select: 'name lastName motherLastName folio' }
        }
      }
    }
    
    const querySearch = {}
 
    if (query.endDateFilter &&  query.startDateFilter) {
      querySearch.hour = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.hour = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.hour = { $gte: query.startDateFilter }
    }
   
    if (query.infant) querySearch.infant = query.infant
    const regex = { $regex: new RegExp('.*' + query?.search + '.*', 'i') }
    const data = await Access.paginate(
      query?.search ? { $or: [{ name: regex }, { description: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      create new access.
 * @params    body.
 */
export const createAccess = async ({
  infant,
  hour,
  observations,
  parent,
  accessType
}) => {
  try {
    const data = await Access.create({
      infant,
      hour,
      observations,
      parent,
      accessType
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get single access document.
 * @params    id.
 */
export const getAccess = async id => {
  try {
    const data = await Access.findById(id).populate({
      path: 'infant parent',
      select: 'name lastName',
      populate: {
        path: 'infant',
        select: 'infant',
        populate: { path: 'general', select: 'name lastName motherLastName' }
      }
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      update single access document.
 * @params    id, body.
 */

export const updateAccess = async (id, body, user) => {
  try {
    const data = await Access.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'access',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Access.findByIdAndUpdate(
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
 * @desc      delete single access document.
 * @params    id.
 */
export const deleteAccess = async id => {
  try {
    const data = await Access.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      deactivates a single access document.
 * @params    id, body.
 */
export const deactivateAccess = async (id, body, user) => {
  try {
    const access = await Access.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'access',
      title: access.name,
      createdBy: user,
      document: access._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Access.findByIdAndUpdate(
      id,
      { active: false, access, $push: { historical } },
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
 * @desc      reactivates a single access document.
 * @params    id, body.
 */
export const reactivateAccess = async (id, body, user) => {
  try {
    const access = await Access.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'access',
      title: access.name,
      createdBy: user,
      document: access._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Access.findByIdAndUpdate(
      id,
      { active: true, access, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
