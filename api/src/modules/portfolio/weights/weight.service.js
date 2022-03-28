import Weight from './weight.model'
import Infant from './../../infants/infant.model'
import General from './../../inscriptions/generals/general.model'
import { calculateMonth } from './../../../utils/controllers.util'
import { weightFemale } from './weightFemale'
import { weightMale } from './weightMale'

export const getAllWeights = async (range = {}) => {
  try {
    const populate = [
      { path: 'infant' }
    ]
    const query = {}
    range.end && !range.start
      ? (query.createdAt = { $lte: range.end })
      : range.end
      ? (query.createdAt = { $gte: range.start, $lte: range.end })
      : (query.createdAt = { $gte: range.start })

    if (range.start) query.createdAt = { $gte: range.start }
    if (range.status) query.status = range.status
    if (range.situation) query.situation = range.situation
    const data = await Weight.find(query).populate(populate).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getWeightsPagination = async (query = {}, page = 1, limit = 10, infantId) => {
  try {
    const populate = [
      { path: 'infant' }
    ]
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate
    }
    const querySearch = {}
    if (query.status) querySearch.status = parseInt(query.status, 10)
    if (query.situation) querySearch.situation = parseInt(query.situation, 10)
    // const regexStatus = { $regex: new RegExp('.*' + parseInt(query?.status) + '.*', 'i') }
    // const regexSituation = { $regex: new RegExp('.*' + parseInt(query.situation, 10) + '.*', 'i') }
    if (query.endDateFilter &&  query.startDateFilter) {
      querySearch.createdAt = { $gte: new Date(query.startDateFilter), $lte: new Date(query.endDateFilter) }
    } else if (query.endDateFilter) {
      querySearch.createdAt = { $lte: new Date(query.endDateFilter) }
    } else if (query.startDateFilter) {
      querySearch.createdAt = { $gte: new Date(query.startDateFilter) }
    }
    const infant = await Infant.findOne({ _id: infantId })
    const aggregate = Weight.aggregate([
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
        $project: {
          document: '$$ROOT',
          status: 1,
          situation: 1,
          createdAt: 1
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              { statusWeight: '$status', situationParent: '$situation' },
              '$document'
            ]
          }
        }
      },
      {
        $match: querySearch
      },
      query?.status
        ? { $match: { statusWeight: querySearch.status } } 
        : query?.situation 
        ? { $match: { situationParent: querySearch.situation } } 
        : { $match: {} }
    ])
    const data = await Weight.aggregatePaginate(aggregate, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const createWeight = async body => {
  try {
    const infant = await Infant.findOne({ _id: body.infant }).populate('infant')
    const general = await General.findOne({ _id: infant.infant.general })
    const month = calculateMonth(general.dateOfBirth)
    const size = body.size
    const genre = general.genre
    const situation = (genre === 'Masculino') ? await weightMale(month, size) : await weightFemale(month, size)
    const data = { ...body, infant: infant, situation: situation }
    const result = await Weight.create(data).then(doc => {
      return Infant.updateMany(
        { _id: { $in: body.infant } },
        { weight: doc.id }
      )
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const getWeight = async id => {
  try {
    const data = await (await Weight.findById(id))
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const updateWeight = async (id, body) => {
  try {
    const data = await Weight.findByIdAndUpdate(id, body.payload, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteWeight = async id => {
  try {
    const data = await Weight.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
