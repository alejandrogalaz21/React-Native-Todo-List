import Tutor from './tutor.model'
import Inscription from './../inscription.model'
import Historical from '../../historicals/historical.model'

/**
 ** @desc      get all tutor document's.
 ** @params    query.
 */
export const getAllTutors = async (query = {}) => {
  try {
    const data = await Tutor.find(query)
      .populate({ path: 'historical', populate: 'createdBy' })
      .populate('relationship economical civilStatus religion')
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all tutor document's paginated.
 ** @params    query, page, limit.
 */
export const getTutorsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: [
        { path: 'historical', populate: 'createdBy' },
        'relationship economical civilStatus religion'
      ]
    }
    const data = await Tutor.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new tutor.
 ** @params    body.
 */
export const createTutor = async (body, user) => {
  try {
    const payload = body
    const inscription = await Inscription.findOne({ _id: payload.inscription })
    const historical = await Historical.create({
      ...payload.historical,
      module: 'inscription',
      title: 'Proceso de inscripción',
      cause: 'Creación',
      icon: 'icon-users',
      description: 'Se agregaron los datos del tutor',
      createdBy: user
    })
    const result = await Inscription.findByIdAndUpdate(
      inscription._id,
      { $push: { historical } },
      { new: true }
    )
    const data = { ...payload, inscription: inscription._id, result }
    const tutor = await Tutor.create(data).then(doc => {
      return Inscription.updateMany({ _id: { $in: payload.inscription } }, { tutor: doc._id })
    })
    return tutor
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single tutor document.
 ** @params    id.
 */
export const getTutor = async id => {
  try {
    const data = await Tutor.findById(id)
      .populate({ path: 'historical', populate: 'createdBy' })
      .populate('relationship economical civilStatus religion')
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single tutor document.
 ** @params    id, body.
 */
export const updateTutor = async (id, body, user) => {
  try {
    const record = await Tutor.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'tutor',
      title: record.name,
      createdBy: user,
      document: record._id
    })
    const data = await Tutor.findByIdAndUpdate(
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
 ** @desc      delete single tutor document.
 ** @params    id.
 */
export const deleteTutor = async id => {
  try {
    const data = await Tutor.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
