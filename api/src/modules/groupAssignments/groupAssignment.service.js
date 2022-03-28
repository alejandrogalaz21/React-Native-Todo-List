import GroupAssignment from './groupAssignment.model'
import User from './../users/user.model'
import Classroom from '../classrooms/classroom.model'
import Historical from '../historicals/historical.model'

const populate = [
  {
    path: 'service',
    select: 'name'
  },
  {
    path: 'titular assistant',
    select: 'name lastName groupAssignmentId'
  },
  { path: 'classroom', select: 'name' }
]

/**
 ** @desc      get all groupAssignment document's.
 ** @params    query.
 */
export const getAllGroupAssignments = async (query = {}) => {
  const data = await GroupAssignment.find(query)
    .populate({ path: 'historical', populate: 'createdBy' })
    .populate(populate)
    .sort({ updatedAt: -1 })
  return data
}

/**
 ** @desc      get all groupAssignment document's paginated.
 ** @params    query, page, limit.
 */
export const getGroupAssignmentsPagination = async (query = {}, page = 0, limit = 10) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 },
    populate: [
      { path: 'historical', populate: 'createdBy' },
      { path: 'titular assistant' },
      { path: 'classroom' },
      { path: 'service' }
    ]
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
  if (query.titular) querySearch.titular = query.titular
  if (query.assistant) querySearch.assistant = query.assistant
  if (query.service) querySearch.service = query.service
  if (query.classroom) querySearch.classroom = query.classroom
  const regex = { $regex: new RegExp('.*' + query?.search + '.*', 'i') }
  const data = await GroupAssignment.paginate(
    query?.search ? { name: regex } : querySearch,
    options
  )
  return data
}

/**
 ** @desc      create new groupAssignment.
 ** @params    body.
 */
export const createGroupAssignment = async body => {
  const payload = body
  const result = await GroupAssignment.create(payload)
    .then(doc => {
      return User.updateMany(
        { _id: { $in: [payload.titular, payload.assistant] } },
        { groupAssignmentId: doc._id }
      ).then(() => doc)
    })
    .then(doc => {
      return Classroom.updateMany(
        { _id: { $in: payload.classroom } },
        { groupAssignmentId: doc._id }
      ).then(() => doc)
    })
  return result
}

/**
 ** @desc      get single groupAssignment document.
 ** @params    id.
 */
export const getGroupAssignment = async id => {
  const data = await GroupAssignment.findById(id).populate(populate)
  return data
}

/**
 ** @desc      update single groupAssignment document.
 ** @params    id, body.
 */
export const updateGroupAssignment = async (id, body, user) => {
  let { payload } = body
  const record = await GroupAssignment.findById(id).lean()
  const historical = await Historical.create({
    ...body.historical,
    module: 'groupAssignment',
    title: record.name,
    createdBy: user._id,
    document: record._id
  })
  const result = await GroupAssignment.findByIdAndUpdate(
    id,
    { payload, $push: { historical } },
    { new: true }
  )
    .then(item => {
      return User.updateMany(
        { _id: { $in: [item.titular, ...item.assistant] } },
        { groupAssignmentId: null }
      )
    })
    .then(() => {
      return GroupAssignment.findOneAndUpdate(payload)
        .populate(populate)
        .then(doc => {
          return User.updateMany(
            { _id: { $in: [payload.titular, payload.assistant] } },
            { groupAssignmentId: doc._id }
          ).then(() => doc)
        })
    })
    .then(item => {
      return Classroom.updateMany(
        { _id: { $in: item.classroom } },
        { groupAssignmentId: null }
      )
    })
    .then(() => {
      return GroupAssignment.findOneAndUpdate(payload)
        .populate(populate)
        .then(doc => {
          return Classroom.updateMany(
            { _id: { $in: payload.classroom } },
            { groupAssignmentId: doc._id }
          ).then(() => doc)
        })
    })
  return result
}

/**
 ** @desc      delete single groupAssignment document.
 ** @params    id.
 */
export const deleteGroupAssignment = async id => {
  const data = await GroupAssignment.findByIdAndDelete(id)
  return data
}

/**
 ** @desc      deactivates a single groupAssignment document.
 ** @params    id, body.
 */
export const deactivateGroupAssignment = async (id, body, user) => {
  try {
    const record = await GroupAssignment.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'groupAssignment',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await GroupAssignment.findByIdAndUpdate(
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
 ** @desc      reactivates a single groupAssignment document.
 ** @params    id, body.
 */
export const reactivateGroupAssignment = async (id, body, user) => {
  try {
    const record = await GroupAssignment.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'groupAssignment',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await GroupAssignment.findByIdAndUpdate(
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
