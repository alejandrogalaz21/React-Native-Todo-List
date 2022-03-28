import Infant from './infant.model'
import mongoose from 'mongoose'

export const getAllInfants = async (query = {}) => {
  const populate = [
    {
      path: 'infant',
      populate: [
        {
          path: 'general'
        },
        {
          path: 'documentation',
          populate: [{ path: 'kidThumbnail', select: 'path' }]
        }
      ]
    },
    {
      path:
        'nutrition socioeconomic health parent partnerDocumentation weight partnerAilment accident'
    },
    { path: 'historical', populate: 'createdBy' }
  ]
  const data = await Infant.find(query).populate(populate).sort({ updatedAt: -1 })
  return data
}

export const getInfantsPagination = async (query = {}, page = 1, limit = 10, user) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
    }
    const querySearch = {}
    const regexName = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    const regexFolio = { $regex: new RegExp('.*' + query?.folio + '.*', 'i') }
    const regexFamilyFolio = { $regex: new RegExp('.*' + query?.familyFolio + '.*', 'i') }

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

    const centerArray = []
    for (const center of user.centers) {
      centerArray.push({ center: mongoose.Types.ObjectId(center) })
    }
    
    const aggregate = Infant.aggregate([
      {
        $lookup: {
          from: 'inscriptions',
          localField: 'infant',
          foreignField: '_id',
          as: 'inscription'
        }
      },
      { $unwind: '$inscription' },
      {
        $lookup: {
          from: 'generals',
          localField: 'inscription.general',
          foreignField: '_id',
          as: 'general'
        }
      },
      { $unwind: '$general' },
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
          _id: 1,
          createdBy: 1,
          createdAt: 1,
          updatedAt: 1,
          active: 1,
          name: '$general.name',
          lastName: '$general.lastName',
          motherLastName: '$general.motherLastName',
          center: '$general.center',
          centerName: '$center.name',
          folio: '$general.folio',
          familyFolio: '$general.familyFolio',
          fullName: {
            $concat: [
              '$general.name',
              ' ',
              '$general.lastName',
              ' ',
              '$general.motherLastName'
            ]
          }
        }
      },
      {
        $match: querySearch
      },
      {
        $match: {
          $or: centerArray
        }
      },
      query?.name
        ? {
            $match: {
              $or: [
                { name: regexName },
                { lastName: regexName },
                { motherLastName: regexName },
                { fullName: regexName }
              ]
            }
          }
        : { $match: {} },
      query?.folio
        ? {
            $match: {
              $or: [{ folio: regexFolio }]
            }
          }
        : { $match: {} },
      query?.familyFolio
        ? {
            $match: {
              $or: [{ familyFolio: regexFamilyFolio }]
            }
          }
        : { $match: {} }
    ])

    const data = await Infant.aggregatePaginate(aggregate, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const createInfant = async body => {
  try {
    const data = await Infant.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getInfant = async id => {
  const populate = [
    {
      path: 'infant',
      populate: [
        {
          path: 'general'
        },
        {
          path: 'documentation',
          populate: [{ path: 'kidThumbnail', select: 'path' }]
        }
      ]
    },
    {
      path:
        'nutrition socioeconomic health parent partnerDocumentation weight partnerAilment accident riskFactor vaccination'
    },
    { path: 'historical', populate: 'createdBy' }
  ]
  const data = await Infant.findById(id).populate(populate)
  return data
}

export const updateInfant = async (id, body) => {
  try {
    const data = await Infant.findByIdAndUpdate(id, body, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteInfant = async id => {
  try {
    const data = await Infant.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get all user document's paginated.
 * @params    query, page, limit.
 */
export const getInfantsByName = async (query = { name: null }, page = 1, limit = 10, user) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
    }
    const regex = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    
    const centerArray = []
    for (const center of user.centers) {
      centerArray.push({ center: mongoose.Types.ObjectId(center) })
    }
    const aggregate = Infant.aggregate([
      {
        $lookup: {
          from: 'inscriptions',
          localField: 'infant',
          foreignField: '_id',
          as: 'inscription'
        }
      },
      { $unwind: '$inscription' },
      {
        $lookup: {
          from: 'generals',
          localField: 'inscription.general',
          foreignField: '_id',
          as: 'general'
        }
      },
      { $unwind: '$general' },
      {
        $project: {
          _id: 1,
          createdBy: 1,
          createdAt: 1,
          updatedAt: 1,
          name: '$general.name',
          lastName: '$general.lastName',
          motherLastName: '$general.motherLastName',
          folio: '$general.folio',
          center: '$general.center',
          familyFolio: '$general.familyFolio',
          fullName: {
            $concat: [
              '$general.name',
              ' ',
              '$general.lastName',
              ' ',
              '$general.motherLastName'
            ]
          }
        }
      },
      {
        $match: {
          $or: centerArray
        }
      },
      query?.name
        ? {
            $match: {
              $or: [
                { name: regex },
                { lastName: regex },
                { motherLastName: regex },
                { fullName: regex },
                { folio: regex },
                { familyFolio: regex }
              ]
            }
          }
        : { $match: {} }
    ])
    const data = await Infant.aggregatePaginate(aggregate, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
