import Debt from './debt.model'
import Inscription from './../inscriptions/inscription.model'

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const getAllCollectionPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: [{ path: 'inscription' }]
    }
    const data = await Debt.paginate(query, options)
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
    const populate = [{ path: 'inscription' }]
    const data = await Debt.find(query).populate(populate).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new product.
 ** @params    body.
 */
export const createCollection = async body => {
  try {
    const data = await Debt.create(body)
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
    const data = await Debt.findById(id)
      .populate({
        path: 'collections',
        populate: { path: 'concept' }
      })
      .populate('concept')
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
    const data = await Debt.findOneAndUpdate(id, body, { new: true })
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
    const data = await Debt.findByIdAndDelete(id)
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
 ** @desc      get single product document.
 ** @params    id.
 */
export const getAllChildDebts = async (id, query, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      populate: 'concept',
      sort: { updatedAt: -1 }
    }
    const data = await Debt.paginate({ inscription: id, active: true }, options)
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
    const data = await Inscription.findById(id).populate('general')
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's paginated.
 ** @params    query, page, limit.
 */
export const updateInscription = async (id, recal) => {
  try {
    const filter = { _id: id }
    const update = { debt: recal }
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
export const updateInscriptionDebt = async (id, recal) => {
  try {
    const filter = { _id: id }
    const update = { debt: recal }
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
export const checkAllDebts = async (id, concept) => {
  try {
    const data = await Debt.find({ inscription: id, concept: concept, status: false }).sort({
      updatedAt: -1
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's.
 ** @params    query.
 */
export const getAllDebts = async (id, concept) => {
  try {
    const data = await Debt.find({ inscription: id, concept: concept, status: false }).sort({
      updatedAt: -1
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all product document's.
 ** @params    query.
 */
export const getAllDebtsFalse = async id => {
  try {
    const data = await Debt.find({ inscription: id, status: false }).sort({
      updatedAt: -1
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}
