import DevelopmentalEvaluation from './developmentalEvaluation.model'
import Historical from './../historicals/historical.model'
import Infant from './../../../src/app/infants/infant.model'
import mongoose from 'mongoose'

/**
 ** @desc      get all developmentalEvaluation document's.
 ** @params    query.
 */
export const getAllDevelopmentalEvaluations = async query => {
  const getLastRecord = await DevelopmentalEvaluation.find({ infant: { $in: query.infantId } })
    .sort({ $natural: -1 })
    .limit(1)
  console.log(getLastRecord)
  console.log(query.infantId)
  const developmentalEvaluationId = getLastRecord.map(d => d._id).toString()
  if (developmentalEvaluationId) {
    const data = await DevelopmentalEvaluation.findOne({ _id: developmentalEvaluationId })
    return data
  } else {
    return getLastRecord
  }
}

/**
 ** @desc      get all developmentalEvaluation document's paginated.
 ** @params    query, page, limit.
 */
export const getDevelopmentalEvaluationsPagination = async (
  query = {},
  page = 0,
  limit = 10,
  infantId
) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 },
    populate: {
      path: 'questionnaireApplicator'
    }
  }
  const infant = await Infant.findOne({ _id: infantId })
  query = { infant: infant._id, active: true }
  const data = await DevelopmentalEvaluation.paginate(query, options)
  return data
}

/**
 ** @desc      get all developmentalEvaluation document's paginated.
 ** @params    query, page, limit.
 */
export const getaAllDevelopmentalEvaluationsPagination = async (
  query = {},
  page = 1,
  limit = 10,
  user
) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 }
  }
  const querySearch = {}

  if (query.endDateFilter && query.startDateFilter) {
    querySearch.dateOfApplication = {
      $gte: new Date(query.dateOfApplication),
      $lte: new Date(query.endDateFilter)
    }
  } else if (query.endDateFilter) {
    querySearch.dateOfApplication = { $lte: new Date(query.endDateFilter) }
  } else if (query.startDateFilter) {
    querySearch.hour = { $gte: new Date(query.startDateFilter) }
  } else if (query.dateOfApplication) {
    querySearch.dateOfApplication = { $gte: new Date(query.dateOfApplication) }
  } else if (query.dateOfResultsCapture) {
    querySearch.dateOfResultsCapture = { $gte: new Date(query.dateOfResultsCapture) }
  }
  const regexStatus = {
    $regex: new RegExp('.*' + query?.status + '.*', 'i')
  }
  const regexInfant = {
    $regex: new RegExp('.*' + query?.infantId + '.*', 'i')
  }
  const regexEvaluation = {
    $regex: new RegExp('.*' + query?.evaluationType + '.*', 'i')
  }
  const regexApplicator = {
    $regex: new RegExp('.*' + query?.questionnaireApplicator + '.*', 'i')
  }
  const centerArray = []
  for (const center of user.centers) {
    centerArray.push({ centerId: mongoose.Types.ObjectId(center) })
  }
  console.log(centerArray)

  const aggregate = DevelopmentalEvaluation.aggregate([
    {
      $lookup: {
        from: 'infants',
        localField: 'infant',
        foreignField: '_id',
        as: 'infant'
      }
    },
    { $unwind: '$infant' },
    {
      $lookup: {
        from: 'inscriptions',
        localField: 'infant.infant',
        foreignField: '_id',
        as: 'infantData'
      }
    },
    { $unwind: '$infantData' },
    {
      $lookup: {
        from: 'generals',
        localField: 'infantData.general',
        foreignField: '_id',
        as: 'general'
      }
    },
    { $unwind: '$general' },
    {
      $lookup: {
        from: 'evaluationpeople',
        localField: 'questionnaireApplicator',
        foreignField: '_id',
        as: 'questionnaireApplicator'
      }
    },
    { $unwind: '$questionnaireApplicator' },
    {
      $lookup: {
        from: 'centers',
        localField: 'general.center',
        foreignField: '_id',
        as: 'center'
      }
    },
    { $unwind: '$center' },
    {
      $project: {
        document: '$$ROOT',
        infantName: '$general.name',
        infantLastName: '$general.lastName',
        infantMotherLastName: '$general.MotherLastName',
        infantId: { $toString: '$infant._id' },
        centerId: '$general.center',
        centerName: '$center.name',
        evaluationPerson: '$questionnaireApplicator.fullName',
        applicationDate: '$dateOfApplication',
        evaluationType: 1
      }
    },
    {
      $replaceRoot: {
        newRoot: {
          $mergeObjects: [
            {
              infantName: '$infantName',
              infantLastName: '$infantLastName',
              infantMotherLastName: '$infantMotherLastName',
              infantId: '$infantId',
              evaluationPerson: '$evaluationPerson',
              applicationDate: '$applicationDate',
              centerId: '$centerId',
              centerName: '$centerName',
              evaluationType: '$evaluationType',
              lastStatus: '$document.lastStatus'
            },
            '$document'
          ]
        }
      }
    },
    {
      $match: {
        $or: centerArray
      }
    },
    {
      $match: querySearch
    },
    query?.evaluationType
      ? { $match: { evaluationType: regexEvaluation } }
      : query?.infantId
      ? { $match: { infantId: regexInfant } }
      : query?.status
      ? { $match: { lastStatus: regexStatus } }
      : query?.questionnaireApplicator
      ? { $match: { evaluationPerson: regexApplicator } }
      : { $match: {} }
  ])

  const data = await DevelopmentalEvaluation.aggregatePaginate(aggregate, options)
  return data
}

/**
 ** @desc      create new developmentalEvaluation.
 ** @params    body.
 */
export const createDevelopmentalEvaluation = async body => {
  const data = await DevelopmentalEvaluation.create(body)
  return data
}

/**
 ** @desc      get single developmentalEvaluation document.
 ** @params    id.
 */
export const getDevelopmentalEvaluation = async id => {
  const data = await DevelopmentalEvaluation.findById(id).populate('questionnaireApplicator')
  return data
}

/**
 ** @desc      update single developmentalEvaluation document.
 ** @params    id, body.
 */
export const updateDevelopmentalEvaluation = async (id, body) => {
  const data = await DevelopmentalEvaluation.findByIdAndUpdate(id, body.payload, {
    new: true
  })
  return data
}

/**
 ** @desc      delete single developmentalEvaluation document.
 ** @params    id.
 */
export const deleteDevelopmentalEvaluation = async id => {
  const data = await DevelopmentalEvaluation.findByIdAndDelete(id)
  return data
}

/**
 ** @desc      deactivates a single developmentalEvaluation document.
 ** @params    id, body.
 */
export const deactivateDevelopmentalEvaluation = async (id, body, user) => {
  try {
    const developmentalEvaluation = await DevelopmentalEvaluation.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'developmentalEvaluation',
      title: developmentalEvaluation.name,
      createdBy: user,
      document: developmentalEvaluation._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await DevelopmentalEvaluation.findByIdAndUpdate(
      id,
      { active: false, developmentalEvaluation, $push: { historical } },
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
 ** @desc      reactivates a single developmentalEvaluation document.
 ** @params    id, body.
 */
export const reactivateDevelopmentalEvaluation = async (id, body, user) => {
  try {
    const developmentalEvaluation = await DevelopmentalEvaluation.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'developmentalEvaluation',
      title: developmentalEvaluation.name,
      createdBy: user,
      document: developmentalEvaluation._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await DevelopmentalEvaluation.findByIdAndUpdate(
      id,
      { active: true, developmentalEvaluation, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
