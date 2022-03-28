import Inscription from './inscription.model'
import mongoose from 'mongoose'

export const getAllInscriptions = async (query = {}) => {
  const data = await Inscription.find(query)
    .populate({ path: 'historical', populate: 'createdBy' })
    .sort({ updatedAt: -1 })
  return data
}

export async function getInscriptionsPaginationApproved(
  query = { status: 1 },
  page = 1,
  limit = 10,
  user
) {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: [
        { path: 'historical', populate: 'createdBy' },
        { path: 'general address tutor ailment environment documentation authorization' }
      ]
    }
    // const result = await Inscription.find(query)
    //   .populate({ path: 'historical', populate: 'createdBy' })
    //   .populate('general address tutor ailment environment documentation authorization')
    //   .sort({ updatedAt: -1 })
    // if (user.centers) {
    //   const centerArray = []
    //   for (const center of user.centers) {
    //     centerArray.push(center)
    //   }
    //   query.centers = { $in: centerArray }
    // }
    const data = await Inscription.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
export const getInscriptionsPagination = async (query = {}, page = 1, limit = 10, user) => {
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
  if (query.endPaymentDateFilter && query.startPaymentDateFilter) {
    querySearch.createdAt = {
      $gte: new Date(query.startPaymentDateFilter),
      $lte: new Date(query.endPaymentDateFilter)
    }
  } else if (query.endPaymentDateFilter) {
    querySearch.createdAt = { $lte: new Date(query.endPaymentDateFilter) }
  } else if (query.startPaymentDateFilter) {
    querySearch.createdAt = { $gte: new Date(query.startPaymentDateFilter) }
  }
  if (query.status) querySearch.status = parseInt(query.status, 10)
  const centerArray = []
    for (const center of user.centers) {
      centerArray.push({ center: mongoose.Types.ObjectId(center) })
    }
  const aggregate = Inscription.aggregate([
    {
      $lookup: {
        from: 'generals',
        localField: 'general',
        foreignField: '_id',
        as: 'general'
      }
    },
    { $unwind: '$general' },
    {
      $lookup: {
        from: 'authorizations',
        localField: 'authorization',
        foreignField: '_id',
        as: 'authorization'
      }
    },
    // { $unwind: '$authorization' },
    {
      $project: {
        _id: 1,
        amount: 1,
        amountInFavor: 1,
        createdBy: 1,
        createdAt: 1,
        status: 1,
        updatedAt: 1,
        active: 1,
        name: '$general.name',
        lastName: '$general.lastName',
        motherLastName: '$general.motherLastName',
        folio: '$general.folio',
        center: '$general.center',
        familyFolio: '$general.familyFolio',
        fullName: {
          $concat: ['$general.name', ' ', '$general.lastName', ' ', '$general.motherLastName']
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

  const data = await Inscription.aggregatePaginate(aggregate, options)
  return data
}

export const createInscription = async body => {
  const data = await Inscription.create(body)
  return data
}

export const getInscription = async id => {
  const data = await Inscription.findById(id)
  return data
}

export const updateInscription = async (id, body) => {
  const data = await Inscription.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

export const deleteInscription = async id => {
  const data = await Inscription.findByIdAndDelete(id)
  return data
}
