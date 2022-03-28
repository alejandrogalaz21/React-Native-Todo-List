import Infant from './../../infants/infant.model'
import Parent from './parent.model'

export const getAllParents = async (range = {}) => {
  try {
    const populate = [{ path: 'infant' }]
    const query = {}
    range.end && !range.start
      ? (query.createdAt = { $lte: range.end })
      : range.end
      ? (query.createdAt = { $gte: range.start, $lte: range.end })
      : (query.createdAt = { $gte: range.start })

    if (range.start) query.createdAt = { $gte: range.start }
    if (range.name) query.name = range.name
    if (range.cellPhone) query.cellPhone = range.cellPhone
    const data = await Parent.find(query).populate(populate).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getParentsPagination = async (query = {}, page = 1, limit = 10, infantId) => {
  try {
    const populate = [{ path: 'infant' }]
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate
    }
    const querySearch = {}
    const regexName = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    if (query.endDateFilter && query.startDateFilter) {
      querySearch.createdAt = {
        $gte: new Date(query.startDateFilter),
        $lte: new Date(query.endDateFilter)
      }
    } else if (query.endDateFilter) {
      querySearch.createdAt = { $lte: new Date(query.endDateFilter) }
    } else if (query.startDateFilter) {
      querySearch.createdAt = { $gte: new Date(query.startDateFilter) }
    }
    const infant = await Infant.findOne({ _id: infantId })
    if (query.cellPhone) querySearch.cellPhone = parseInt(query.cellPhone, 10)
    const aggregate = Parent.aggregate([
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
          name: 1,
          cellPhone: 1,
          createdAt: 1
        }
      },
      {
        $replaceRoot: {
          newRoot: {
            $mergeObjects: [
              { cellPhoneParent: '$cellPhone', nameParent: '$name' },
              '$document'
            ]
          }
        }
      },
      {
        $match: querySearch
      },
      query?.name ? { $match: { nameParent: regexName } } : { $match: {} }
    ])
    const data = await Parent.aggregatePaginate(aggregate, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const createParent = async body => {
  try {
    const infant = await Infant.findOne({ _id: body.infant })
    const result = await Parent.create({ ...body, infant: infant }).then(doc => {
      return Infant.updateMany({ _id: { $in: body.infant } }, { parent: doc.id })
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const getParent = async id => {
  try {
    const populate = [{ path: 'infant' }, { path: 'historical', populate: 'createdBy' }]
    const data = await Parent.findById(id).populate(populate)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const updateParent = async (id, body) => {
  try {
    const data = await Parent.findByIdAndUpdate(id, body.payload, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteParent = async id => {
  try {
    const data = await Parent.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
