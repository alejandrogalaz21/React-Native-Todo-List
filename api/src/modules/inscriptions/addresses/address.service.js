import Address from './address.model'
import Inscription from './../inscription.model'
import Historical from '../../historicals/historical.model'

/**
 ** @desc      get all address document's.
 ** @params    query.
 */
export const getAllAddresses = async (query = {}) => {
  try {
    const data = await Address.find(query)
      .populate({ path: 'historical', populate: 'createdBy' })
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all address document's paginated.
 ** @params    query, page, limit.
 */
export const getAddressesPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: { path: 'historical', populate: 'createdBy' }
    }
    const data = await Address.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new address.
 ** @params    body.
 */
export const createAddress = async (body, user) => {
  try {
    const payload = body
    const inscription = await Inscription.findOne({ _id: payload.inscription })
    const historical = await Historical.create({
      ...payload.historical,
      module: 'inscription',
      title: 'Proceso de inscripción',
      cause: 'Creación',
      icon: 'icon-map',
      description: 'Se agrego la dirección',
      createdBy: user
    })
    const result = await Inscription.findByIdAndUpdate(
      inscription._id,
      { $push: { historical } },
      { new: true }
    )
    const data = { ...payload, inscription: inscription._id, result }
    const address = await Address.create(data).then(doc => {
      return Inscription.updateMany(
        { _id: { $in: payload.inscription } },
        { address: doc._id }
      )
    })
    return address
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single address document.
 ** @params    id.
 */
export const getAddress = async id => {
  try {
    const data = await Address.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single address document.
 ** @params    id, body.
 */
export const updateAddress = async (id, body, user) => {
  try {
    const record = await Address.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'address',
      title: record.name,
      createdBy: user,
      document: record._id
    })
    const data = await Address.findByIdAndUpdate(
      id,
      { ...body.payload, $push: { historical } },
      { new: true }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      delete single address document.
 ** @params    id.
 */
export const deleteAddress = async id => {
  try {
    const data = await Address.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
