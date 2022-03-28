import Collection from './collection.model'
import Debt from './../debt/debt.model'
import Inscription from './../inscriptions/inscription.model'

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const getAllCollectionPagination = async (query = {}, page = 1, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
      // populate: {
      //   path: 'concept inscription',
      //   select: 'name lastName',
      //   populate: {
      //     path: 'general',
      //     select: 'name lastName motherLastName folio familyFolio'
      //   }
      // }
    }
    const querySearch = {}
    const regexName = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    const regexFolio = { $regex: new RegExp('.*' + query?.folio + '.*', 'i') }
    const regexFamilyFolio = { $regex: new RegExp('.*' + query?.familyFolio + '.*', 'i') }
    const regexBankFolio = { $regex: new RegExp('.*' + query?.bankFolio + '.*', 'i') }
    const regexConceptName = { $regex: new RegExp('.*' + query?.conceptName + '.*', 'i') }
    
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
    if (query.amount) querySearch.amount = query.amount
    if (query.infant) querySearch.infant = query.infant

    const aggregate = Collection.aggregate([
      {
        $lookup: {
          from: 'inscriptions',
          localField: 'inscription',
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
          from: 'debts',
          localField: 'concept',
          foreignField: '_id',
          as: 'concept'
        }
      },
      { $unwind: '$concept' },
      {
        $project: {
          _id: 1,
          amount: 1,
          amountInFavor: 1,
          createdBy: 1,
          createdAt: 1,
          updatedAt: 1,
          active: 1,
          bankFolio: '$folio',
          concept: 1,
          conceptName: '$concept.name',
          name: '$general.name',
          lastName: '$general.lastName',
          motherLastName: '$general.motherLastName',
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
        : { $match: {} },
        query?.bankFolio
          ? {
              $match: {
                $or: [{ familyFolio: regexBankFolio }]
              }
            }
          : { $match: {} },
          query?.conceptName
            ? {
                $match: {
                  $or: [{ conceptName: regexConceptName }]
                }
              }
            : { $match: {} }
    ])
    const data = await Collection.aggregatePaginate(aggregate, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's.
 ** @params    query.
 */
export const getAllCollections = async (query = {}) => {
  try {
    const data = await Collection.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new product.
 ** @params    body.
 */
export const createCollection = async (body, debtId) => {
  try {
    const data = await Collection.create(body)
    const debt = await Debt.findById(debtId)
    debt.collections.push(data)
    debt.save()
    debt.updateOne()
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single product document.
 ** @params    id.
 */
export const getOneCollection = async id => {
  try {
    const data = await Collection.findById(id).populate('concept')
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single product document.
 ** @params    id, body.
 */
export const updateCollection = async (id, body) => {
  try {
    const data = await Collection.findOneAndUpdate(id, body, { new: true })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      delete single product document.
 ** @params    id.
 */
export const deleteCollection = async id => {
  try {
    const data = await Collection.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single product document.
 ** @params    id.
 */
export const getInscription = async id => {
  try {
    const data = await Inscription.find({ _id: id })
      .populate('general')
      .populate({
        path: 'documentation',
        populate: { path: 'kidThumbnail' }
      })
      .populate({
        path: 'authorization',
        populate: { path: 'cost scholarship percentage bankReference group' }
      })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const getAllChildPayments = async (id, query, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      populate: 'concept',
      limit,
      sort: { updatedAt: -1 }
    }
    const data = await Collection.paginate({ inscription: id, active: true }, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const getAllInscriptionsPagination = async (query = {}) => {
  try {
    const data = await Inscription.find(query).populate('general').sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const getOneInscription = async id => {
  try {
    const data = await Inscription.findById(id).populate({
      path: 'general',
      populate: { path: 'center service' }
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const updateInscription = async (id, recal, difference = 0) => {
  try {
    const filter = { _id: id }
    const update = { debt: recal, positiveBalance: difference }
    const data = await Inscription.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const updateInscription1 = async (id, recal, newPositiveBalance) => {
  try {
    const filter = { _id: id }
    const update = { debt: recal, positiveBalance: newPositiveBalance }
    const data = await Inscription.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const updateInscription3 = async (id, recal, newPositiveBalance) => {
  try {
    const filter = { _id: id }
    const update = { debt: recal, positiveBalance: newPositiveBalance }
    const data = await Inscription.findOneAndUpdate(filter, update, {
      new: true,
      upsert: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const updateDebt = async (id, update) => {
  try {
    const filter = { _id: id }
    const data = await Debt.findOneAndUpdate(filter, update, { new: true, upsert: true })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's.
 ** @params    query.
 */
export const getAllBalances = async () => {
  try {
    const data = await Collection.aggregate([
      { $match: { active: true, associatedService: 'Servicio club deportivo' } },
      {
        $group: { _id: null, count: { $sum: '$amount' } }
      }
    ])
    return data
  } catch (error) {
    throw new Error(error)
  }
}
