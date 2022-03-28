import EvaluationPerson from './evaluationPerson.model'
import Historical from './../historicals/historical.model'

/**
 ** @desc      get all evaluationPerson document's.
 ** @params    query.
 */
export const getAllEvaluationPersons = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.updatedAt = { $lte: range.end })
      : range.end
      ? (query.updatedAt = { $gte: range.start, $lte: range.end })
      : (query.updatedAt = { $gte: range.start })

    if (range.start) query.updatedAt = { $gte: range.start }
    if (range.fullName) query.fullName = range.fullName

    const data = await EvaluationPerson.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getEvaluationPersonsByName = async (
  query = { name: null },
  page = null,
  limit = 10
) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
    }
    const querySearch = {}
    if (query.endDateFilter &&  query.startDateFilter) {
      querySearch.dateStart = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.dateStart = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.dateStart = { $gte: query.startDateFilter }
    }
    const regex = { $regex: new RegExp('.*' + query?.fullName + '.*', 'i') }
    const data = await EvaluationPerson.paginate(
      query?.fullName ? { $or: [{ fullName: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all evaluationPerson document's paginated.
 ** @params    query, page, limit.
 */
export const getEvaluationPersonsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
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
    const data = await EvaluationPerson.paginate(
      query?.search
        ? { $or: [{ name: regex }, { fullName: regex }, { description: regex }] }
        : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new evaluationPerson.
 ** @params    body.
 */
export const createEvaluationPerson = async body => {
  try {
    const data = await EvaluationPerson.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single evaluationPerson document.
 ** @params    id.
 */
export const getEvaluationPerson = async id => {
  try {
    const data = await EvaluationPerson.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single evaluationPerson document.
 ** @params    id, body.
 */
export const updateEvaluationPerson = async (id, body) => {
  try {
    const data = await EvaluationPerson.findByIdAndUpdate(id, body, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      delete single evaluationPerson document.
 ** @params    id.
 */
export const deleteEvaluationPerson = async id => {
  try {
    const data = await EvaluationPerson.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single evaluationPerson document.
 ** @params    id, body.
 */
export const deactivateEvaluationPerson = async (id, body, user) => {
  try {
    const record = await EvaluationPerson.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'evaluationPerson',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await EvaluationPerson.findByIdAndUpdate(
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
 ** @desc      reactivates a single evaluationPerson document.
 ** @params    id, body.
 */
export const reactivateEvaluationPerson = async (id, body, user) => {
  try {
    const record = await EvaluationPerson.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'evaluationPerson',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await EvaluationPerson.findByIdAndUpdate(
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
