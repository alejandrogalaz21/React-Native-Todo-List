import Ailment from './ailment.model'
import Inscription from './../inscription.model'
import Historical from '../../historicals/historical.model'
/**
 ** @desc      get all ailment document's.
 ** @params    query.
 */
export const getAllAilments = async (query = {}) => {
  try {
    const data = await Ailment.find(query)
      .populate({ path: 'historical', populate: 'createdBy' })
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all ailment document's paginated.
 ** @params    query, page, limit.
 */
export const getAilmentsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: { path: 'historical', populate: 'createdBy' }
    }
    const data = await Ailment.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new ailment.
 ** @params    body.
 */
export const createAilment = async (body, user) => {
  try {
    const payload = body
    const inscription = await Inscription.findOne({ _id: payload.inscription })
    const historical = await Historical.create({
      ...payload.historical,
      module: 'inscription',
      title: 'Proceso de inscripción',
      cause: 'Creación',
      icon: 'icon-stethoscope',
      description: 'Se agregaron los padecimientos',
      createdBy: user
    })
    const result = await Inscription.findByIdAndUpdate(
      inscription._id,
      { $push: { historical } },
      { new: true }
    )
    const data = {
      q1: payload.q1,
      q2: payload.q2,
      q3: payload.q3,
      q4: payload.q4,
      q5: payload.q5,
      q6: payload.q6,
      justify1: payload.justify1,
      justify2: payload.justify2,
      inscription: inscription._id,
      result
    }
    console.log(data)
    const ailment = await Ailment.create(data).then(doc => {
      return Inscription.updateMany(
        { _id: { $in: payload.inscription } },
        { ailment: doc._id }
      )
    })
    return ailment
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single ailment document.
 ** @params    id.
 */
export const getAilment = async id => {
  try {
    const data = await Ailment.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single ailment document.
 ** @params    id, body.
 */
export const updateAilment = async (id, body, user) => {
  try {
    const record = await Ailment.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'ailment',
      title: record.name,
      createdBy: user,
      document: record._id
    })
    const data = await Ailment.findByIdAndUpdate(
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
 ** @desc      delete single ailment document.
 ** @params    id.
 */
export const deleteAilment = async id => {
  try {
    const data = await Ailment.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
