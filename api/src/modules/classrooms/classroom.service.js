import Historical from './../historicals/historical.model'
import Classroom from './classroom.model'

/**
 ** @desc      get all classroom document's.
 ** @params    query.
 */
export const getAllClassrooms = async (query = {}) => {
  try {
    const data = await Classroom.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all classroom document's paginated.
 ** @params    query, page, limit.
 */
export const getClassroomsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: { path: 'historical', populate: 'createdBy' }
    }
    const querySearch = {}

    const regexName = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    const regexClassroom = { $regex: new RegExp('.*' + query?.classroom + '.*', 'i') }
    if (query.endDateFilter && query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.createdAt = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter }
    }
    if (query.cant) querySearch.cant = query.cant
    if (query.name) querySearch.$or = [{ name: regexName }]
    if (query.classroom) querySearch.$or = [{ classroom: regexClassroom }]

    const data = await Classroom.paginate(querySearch, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new classroom.
 ** @params    body.
 */
export const createClassroom = async body => {
  try {
    const data = await Classroom.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single classroom document.
 ** @params    id.
 */
export const getClassroom = async id => {
  try {
    const data = await Classroom.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single classroom document.
 ** @params    id, body.
 */
export const updateClassroom = async (id, body, user) => {
  try {
    const data = await Classroom.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'classroom',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Classroom.findByIdAndUpdate(
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
 ** @desc      delete single classroom document.
 ** @params    id.
 */
export const deleteClassroom = async id => {
  try {
    const data = await Classroom.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single classroom document.
 ** @params    id, body.
 */
export const deactivateClassroom = async (id, body, user) => {
  try {
    const classRoom = await Classroom.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'classRoom',
      title: classRoom.name,
      createdBy: user,
      document: classRoom._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Classroom.findByIdAndUpdate(
      id,
      { active: false, classRoom, $push: { historical } },
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
 ** @desc      reactivates a single classroom document.
 ** @params    id, body.
 */
export const reactivateClassroom = async (id, body, user) => {
  try {
    const classRoom = await Classroom.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'classRoom',
      title: classRoom.name,
      createdBy: user,
      document: classRoom._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Classroom.findByIdAndUpdate(
      id,
      { active: true, classRoom, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
