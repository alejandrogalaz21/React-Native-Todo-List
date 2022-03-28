import Cost from '../costs/cost.model'
import Debt from '../debt/debt.model'
import Historical from '../historicals/historical.model'
import Infant from '../infants/infant.model'
import Inscription from '../inscriptions/inscription.model'
import Percentage from '../percentages/percentage.model'
import Parent from '../portfolio/parents/parent.model'
import Authorization from './authorization.model'

/**
 ** @desc      get all authorization document's.
 ** @params    query.
 */
export const getAllAuthorizations = async (query = {}) => {
  try {
    const data = await Authorization.find(query)
      .populate('inscription cost scholarship percentage group')
      .populate({ path: 'historical', populate: 'createdBy' })
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all authorization document's paginated.
 ** @params    query, page, limit.
 */
export const getAuthorizationsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: [
        'inscription cost scholarship percentage group',
        { path: 'historical', populate: 'createdBy' }
      ]
    }
    const data = await Authorization.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new authorization.
 ** @params    body.
 */
export const createAuthorization = async (body, user) => {
  try {
    const payload = body
    const inscription = await Inscription.findOne({ _id: payload.inscription }).populate(
      'general tutor'
    )
    const cost = await Cost.findOne({ _id: payload.cost })
    const percentage = await Percentage.findOne({ _id: payload.percentage })
    const historical = await Historical.create({
      ...payload.historical,
      module: 'inscription',
      title: 'Proceso de inscripción',
      cause: 'Aprobado',
      icon: 'icon-check',
      description: 'Se aprobó la inscripción del niño',
      createdBy: user
    })
    const result = await Inscription.findByIdAndUpdate(
      inscription._id,
      { $push: { historical } },
      { new: true }
    )
    const data = {
      ...payload,
      inscription: inscription,
      result,
      desc: cost.amount - cost.amount * `.${percentage.percentage}`
    }
    const authorization = await Authorization.create(data).then(doc => {
      return Inscription.updateMany(
        { _id: { $in: payload.inscription } },
        { authorization: doc._id, status: 1, debt: data.desc }
      )
    })
    const fullName =
      inscription.general.name +
      ' ' +
      inscription.general.lastName +
      ' ' +
      inscription.general.motherLastName

    const inscriptionDebt = {
      inscription: payload.inscription,
      name: fullName,
      conceptName: cost.name,
      concept: cost._id,
      amount: data.desc,
      date: Date.now(),
      observations:
        'Deuda generada automaticamente por el sistema con concepto de inscripcion',
      currentDebt: data.desc,
      collections: []
    }
    await Debt.create(inscriptionDebt)
    const infant = await Infant.create({ infant: inscription })
    if (inscription.tutor) {
      await Parent.create({
        infant: infant._id,
        name: inscription.tutor.name,
        lastName: inscription.tutor.lastName,
        address: inscription.tutor.address,
        homePhone: inscription.tutor.homePhone,
        cellPhone: inscription.tutor.phone,
        workPhone: inscription.tutor.workPhone
      })
    }
    const collection = { authorization, infant }
    return collection
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single authorization document.
 ** @params    id.
 */
export const getAuthorization = async id => {
  try {
    const data = await Authorization.findById(id).populate(
      'inscription cost scholarship percentage group'
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single authorization document.
 ** @params    id, body.
 */
export const updateAuthorization = async (id, body, user) => {
  try {
    const record = await Authorization.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'authorization',
      title: record.name,
      createdBy: user,
      document: record._id
    })
    const data = await Authorization.findByIdAndUpdate(
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
 ** @desc      delete single authorization document.
 ** @params    id.
 */
export const deleteAuthorization = async id => {
  try {
    const data = await Authorization.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
