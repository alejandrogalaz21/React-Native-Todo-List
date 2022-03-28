import Documentation from './documentation.model'
import Inscription from './../inscription.model'
import Historical from '../../historicals/historical.model'
/**
 ** @desc      get all documentation document's.
 ** @params    query.
 */
export const getAllDocumentations = async (query = {}) => {
  try {
    const data = await Documentation.find(query)
      .populate('kidCertificate kidCurp vaccinationRecord kidThumbnail fatherIne motherIne')
      .populate({ path: 'historical', populate: 'createdBy' })
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all documentation document's paginated.
 ** @params    query, page, limit.
 */
export const getDocumentationsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: [
        { path: 'kidCertificate' },
        { path: 'kidCurp' },
        { path: 'vaccinationRecord' },
        { path: 'kidThumbnail' },
        { path: 'fatherIne' },
        { path: 'motherIne' },
        { path: 'historical', populate: 'createdBy' }
      ]
    }
    const data = await Documentation.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new documentation.
 ** @params    body.
 */
export const createDocumentation = async (body, user) => {
  try {
    const payload = body
    const inscription = await Inscription.findOne({ _id: payload.inscription })
    const historical = await Historical.create({
      ...payload.historical,
      module: 'inscription',
      title: 'Proceso de inscripción',
      cause: 'Creación',
      icon: 'icon-cloud',
      description: 'Se agregaron los documentos',
      createdBy: user
    })
    const result = await Inscription.findByIdAndUpdate(
      inscription._id,
      { $push: { historical } },
      { new: true }
    )
    const data = { ...payload, inscription: inscription._id, result }
    const documentation = await Documentation.create(data).then(doc => {
      return Inscription.updateMany(
        { _id: { $in: payload.inscription } },
        { documentation: doc._id }
      )
    })
    return documentation
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single documentation document.
 ** @params    id.
 */
export const getDocumentation = async id => {
  try {
    const data = await Documentation.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single documentation document.
 ** @params    id, body.
 */
export const updateDocumentation = async (id, body, user) => {
  try {
    const record = await Documentation.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'documentation',
      title: record.name,
      createdBy: user,
      document: record._id
    })
    const data = await Documentation.findByIdAndUpdate(
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
 ** @desc      delete single documentation document.
 ** @params    id.
 */
export const deleteDocumentation = async id => {
  try {
    const data = await Documentation.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
