import Environment from './environment.model'
import Inscription from './../inscription.model'
import Historical from '../../historicals/historical.model'
/**
 ** @desc      get all environment document's.
 ** @params    query.
 */
export const getAllEnvironments = async (query = {}) => {
  try {
    const data = await Environment.find(query)
      .populate({ path: 'historical', populate: 'createdBy' })
      .populate('activity relationship3 relationship4 relationship5')
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all environment document's paginated.
 ** @params    query, page, limit.
 */
export const getEnvironmentsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: [
        { path: 'historical', populate: 'createdBy' },
        { path: 'activity' },
        { path: 'relationship3' },
        { path: 'relationship4' },
        { path: 'relationship5' }
      ]
    }
    const data = await Environment.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new environment.
 ** @params    body.
 */
export const createEnvironment = async (body, user) => {
  try {
    const payload = body
    const inscription = await Inscription.findOne({ _id: payload.inscription })
    const historical = await Historical.create({
      ...payload.historical,
      module: 'inscription',
      title: 'Proceso de inscripción',
      cause: 'Creación',
      icon: 'icon-home',
      description: 'Se agrego el entorno social',
      createdBy: user
    })
    const result = await Inscription.findByIdAndUpdate(
      inscription._id,
      { $push: { historical } },
      { new: true }
    )
    const data = { ...payload, inscription: inscription._id, result }
    const environment = await Environment.create(data).then(doc => {
      return Inscription.updateMany(
        { _id: { $in: payload.inscription } },
        { environment: doc._id }
      )
    })
    return environment
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single environment document.
 ** @params    id.
 */
export const getEnvironment = async id => {
  try {
    const data = await Environment.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single environment document.
 ** @params    id, body.
 */
export const updateEnvironment = async (id, body, user) => {
  try {
    const record = await Environment.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'environment',
      title: record.name,
      createdBy: user,
      document: record._id
    })
    const data = await Environment.findByIdAndUpdate(
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
 ** @desc      delete single environment document.
 ** @params    id.
 */
export const deleteEnvironment = async id => {
  try {
    const data = await Environment.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
