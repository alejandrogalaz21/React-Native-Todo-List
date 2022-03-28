import Infant from './../../infants/infant.model'
import Accident from './accident.model'

export const getAllAccidents = async (query = {}) => {
  try {
    const data = await Accident.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getAccidentsPagination = async (query = {}, page = 1, limit = 10, infantId) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
    }
    const querySearch = {}
    const regexTime = { $regex: new RegExp('.*' + query?.time + '.*', 'i') }
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
    const aggregate = Accident.aggregate([
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
          diagnosisOK: '$diagnosis',
          time: 1
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              { diagnosisOK: '$diagnosisOK', timeAccident: '$time' },
              '$document'
            ]
          }
        }
      },
      {
        $match: querySearch
      },
      query?.time ? { $match: { timeAccident: regexTime } } : { $match: {} }
    ])
    const data = await Accident.aggregatePaginate(aggregate, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const createAccident = async body => {
  try {
    const infant = await Infant.findOne({ _id: body.infant })
    const data = { ...body, infant: infant }
    const result = await Accident.create(data).then(doc => {
      return Infant.updateMany({ _id: { $in: body.infant } }, { accident: doc.id })
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const getAccident = async id => {
  try {
    const populate = [{ path: 'infant' }, { path: 'historical', populate: 'createdBy' }]
    const data = await Accident.findById(id).populate(populate)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const updateAccident = async (id, body) => {
  try {
    const data = await Accident.findByIdAndUpdate(id, body.payload, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteAccident = async id => {
  try {
    const data = await Accident.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
