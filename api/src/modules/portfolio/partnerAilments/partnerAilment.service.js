import PartnerAilment from './partnerAilment.model'
import Infant from './../../infants/infant.model'

export const getAllPartnerAilments = async (query = {}) => {
  try {
    const data = await PartnerAilment.find(query)
      .populate('groupAssignment')
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getPartnerAilmentsPagination = async (
  query = {},
  page = 1,
  limit = 10,
  infantId
) => {
  try {
    const populate = [{ path: 'groupAssignment' }]
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate
    }
    const querySearch = {}
    const regexTime = { $regex: new RegExp('.*' + query?.time + '.*', 'i') }
    const regexDiagnosis = { $regex: new RegExp('.*' + query?.diagnosis + '.*', 'i') }
    const regexSuspension = { $regex: new RegExp('.*' + query?.suspension + '.*', 'i') }
    const regexClassroomName = {
      $regex: new RegExp('.*' + query?.groupAssignment + '.*', 'i')
    }

    if (query.endDateFilter && query.startDateFilter) {
      querySearch.createdAt = {
        $gte: new Date(query.date),
        $lte: new Date(query.endDateFilter)
      }
    } else if (query.endDateFilter) {
      querySearch.createdAt = { $lte: new Date(query.endDateFilter) }
    } else if (query.startDateFilter) {
      querySearch.createdAt = { $gte: new Date(query.startDateFilter) }
    } else if (query.date) {
      querySearch.date = { $gte: new Date(query.date) }
    }
    const infant = await Infant.findOne({ _id: infantId })
    const aggregate = PartnerAilment.aggregate([
      { $match: { infant: infant._id } },
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
          from: 'groupassignments',
          localField: 'groupAssignment',
          foreignField: '_id',
          as: 'groupAssignment'
        }
      },
      { $unwind: '$groupAssignment' },
      {
        $project: {
          _id: 1,
          groupAssignment: 1,
          infant: '$infant._id',
          symptom: 1,
          action: 1,
          time: 1,
          medialRequest: 1,
          diagnosis: 1,
          accident: 1,
          suffering: 1,
          suspension: 1,
          isSuspension: { $toString: '$suspension' },
          classroomName: { $toString: '$groupAssignment._id' },
          active: 1,
          createdAt: 1,
          date: 1
        }
      },
      {
        $match: querySearch
      },
      query?.diagnosis
        ? { $match: { diagnosis: regexDiagnosis } }
        : query?.suspension
        ? { $match: { isSuspension: regexSuspension } }
        : query?.groupAssignment
        ? { $match: { classroomName: regexClassroomName } }
        : query?.time
        ? { $match: { time: regexTime } }
        : { $match: {} }
    ])

    const data = await PartnerAilment.aggregatePaginate(aggregate, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const createPartnerAilment = async body => {
  try {
    const infant = await Infant.findOne({ _id: body.infant })
    const data = { ...body, infant: infant }
    const result = await PartnerAilment.create(data).then(doc => {
      return Infant.updateMany({ _id: { $in: body.infant } }, { ailment: doc.id })
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const getPartnerAilment = async id => {
  try {
    const data = await PartnerAilment.findById(id).populate('groupAssignment')
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const updatePartnerAilment = async (id, body) => {
  try {
    const data = await PartnerAilment.findByIdAndUpdate(id, body, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const deletePartnerAilment = async id => {
  try {
    const data = await PartnerAilment.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
