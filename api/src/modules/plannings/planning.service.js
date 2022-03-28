import GroupAssignment from '../groupAssignments/groupAssignment.model'
import Historical from '../historicals/historical.model'
import Planning from './planning.model'

const populate = [
  {
    path: 'center',
    select: 'name'
  },
  {
    path: 'groupAssignment',
    select: 'name service classroom titular assistant',
    populate: [
      { path: 'service', select: 'name' },
      { path: 'classroom', select: 'name' },
      {
        path: 'titular assistant',
        select: 'name lastName'
      }
    ]
  }
]
/**
 ** @desc      get all planning document's.
 ** @params    query.
 */
export const getAllPlannings = async (query = {}) => {
  const data = await Planning.find(query)
    .populate({ path: 'historical', populate: 'createdBy' })
    .populate(populate)
    .sort({ updatedAt: -1 })
  return data
}

/**
 ** @desc      get all planning document's paginated.
 ** @params    query, page, limit.
 */
export const getPlanningsPagination = async (query = {}, page = 1, limit = 10) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 },
    populate: [
      { path: 'historical', populate: 'createdBy' },
      { path: 'center', select: 'name' },
      { path: ' ', select: 'name service classroom titular assistant' },
      {
        path: 'service',
        select: 'name'
      },
      {
        path: 'classroom',
        select: 'name'
      },
      {
        path: 'titular assistant',
        select: 'name lastName'
      },
      {
        path: 'groupAssignment',
        populate: [
          { path: 'service', select: 'name' },
          { path: 'classroom', select: 'name' },
          {
            path: 'titular assistant',
            select: 'name lastName'
          }
        ]
      }
    ]
  }
  const querySearch = {}

  if (query.endDateFilter && query.startDateFilter) {
    querySearch.startHour = { $gte: query.startDateFilter, $lte: query.endDateFilter }
  } else if (query.endDateFilter) {
    querySearch.startHour = { $lte: query.endDateFilter }
  } else if (query.startDateFilter) {
    querySearch.startHour = { $gte: query.startDateFilter }
  }
  if (query.groupAssignment) querySearch.groupAssignment = query.groupAssignment
  if (query.center) querySearch.center = query.center
  const regex = { $regex: new RegExp('.*' + query?.search + '.*', 'i') }

  const data = await Planning.paginate(
    query?.search ? { $or: [{ name: regex }] } : querySearch,
    options
  )
  return data
}

/**
 ** @desc      create new planning.
 ** @params    body.
 */
export const createPlanning = async body => {
  const payload = body
  const result = await Planning.create(payload).then(doc => {
    return GroupAssignment.updateMany(
      { _id: { $in: payload.groupAssignment } },
      { planningId: doc._id }
    ).then(() => doc)
  })
  return result
}

/**
 ** @desc      get single planning document.
 ** @params    id.
 */
export const getPlanning = async id => {
  const data = await Planning.findById(id).populate(populate)
  return data
}

/**
 ** @desc      update single planning document.
 ** @params    id, body.
 */
export const updatePlanning = async (id, body, user) => {
  let { payload } = body
  const record = await Planning.findById(id).lean()
  const historical = await Historical.create({
    ...body.historical,
    module: 'planning',
    title: record.name,
    createdBy: user,
    document: record._id
  })
  const result = await Planning.findByIdAndUpdate(
    id,
    { payload, $push: { historical } },
    { new: true }
  )
    .then(item => {
      return GroupAssignment.updateMany(
        { _id: { $in: item.groupAssignment } },
        { planningId: null }
      )
    })
    .then(() => {
      return Planning.findOneAndUpdate(payload)
        .populate(populate)
        .then(doc => {
          return GroupAssignment.updateMany(
            { _id: { $in: payload.groupAssignment } },
            { planningId: doc._id }
          ).then(() => doc)
        })
    })
  return result
}

/**
 ** @desc      delete single planning document.
 ** @params    id.
 */
export const deletePlanning = async id => {
  const data = await Planning.findByIdAndDelete(id)
  return data
}

/**
 ** @desc      deactivates a single planning document.
 ** @params    id, body.
 */
export const deactivatePlanning = async (id, body, user) => {
  try {
    const record = await Planning.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'planning',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Planning.findByIdAndUpdate(
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
 ** @desc      reactivates a single planning document.
 ** @params    id, body.
 */
export const reactivatePlanning = async (id, body, user) => {
  try {
    const record = await Planning.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'planning',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Planning.findByIdAndUpdate(
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
