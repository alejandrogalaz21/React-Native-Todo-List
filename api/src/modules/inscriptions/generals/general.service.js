import General from './general.model'
import Inscription from './../inscription.model'
import Historical from '../../historicals/historical.model'
import FamilyFolio from '../../familyFolios/familyFolio.model'

/**
 * @desc      get all general document's.
 * @params    query.
 */
export const getAllGenerals = async (query = {}) => {
  try {
    const data = await General.find(query)
      .populate({ path: 'historical', populate: 'createdBy' })
      .populate('center service modality general grade')
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get all general document's paginated.
 * @params    query, page, limit.
 */
export const getGeneralsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: [
        { path: 'historical', populate: 'createdBy' },
        { path: 'center' },
        { path: 'service' },
        { path: 'modality' },
        { path: 'general' },
        { path: 'grade' }
      ]
    }
    const data = await General.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      create new general.
 * @params    body.
 */
export const createGeneral = async (body, user) => {
  try {
    const payload = body
    const partners = await General.countDocuments()
    const enrollment = partners + 1
    const curp = payload.curp
    const lastName = payload.lastName
    const codeLastName = lastName.substr(0, 1)
    const secondLatsName = payload.motherLastName
    const codeSecondLatsName = secondLatsName.substr(0, 1)
    const name = curp.toUpperCase()
    const code = name.substr(0, 4)
    const folio = code + enrollment
    const familyFolio = codeLastName + codeSecondLatsName + enrollment
    const data = {
      ...payload,
      folio: folio,
      familyFolio: payload.familyFolio ? payload.familyFolio : familyFolio
    }
    const general = await General.create(data)
    const historical = await Historical.create({
      ...data.historical,
      module: 'inscription',
      title: 'Proceso de inscripción',
      cause: 'Creación',
      icon: 'icon-user',
      description: 'Se agregaron los datos generales',
      createdBy: user
    })
    const inscription = await Inscription.create({
      general: general._id,
      folio: folio,
      familyFolio: familyFolio,
      historical: historical._id
    })
    if (!payload.familyFolio) {
      // Create new familyFolio

      await FamilyFolio.create({
        folio: familyFolio,
        inscription: { ...inscription }
      })
    } else {
      // add inscription id to existent familyFolio

      const fam = await FamilyFolio.find({
        folio: payload.familyFolio
      })
      console.log(fam)
      // fam.inscription.push({ ...inscription })
      // FamilyFolio.findByIdAndUpdate(fam._id, fam)
    }
    const result = { general, inscription }
    return result
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      get single general document.
 * @params    id.
 */
export const getGeneral = async id => {
  try {
    const data = await General.findById(id)
      .populate({
        path: 'historical',
        populate: 'createdBy'
      })
      .populate('center service modality general grade cycle')
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      update single general document.
 * @params    id, body.
 */
export const updateGeneral = async (id, body, user) => {
  try {
    const record = await General.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'general',
      title: record.name,
      createdBy: user,
      document: record._id
    })
    const data = await General.findByIdAndUpdate(
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
 * @desc      delete single general document.
 * @params    id.
 */
export const deleteGeneral = async id => {
  try {
    const data = await General.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      deactivates a single general document.
 * @params    id, body.
 */
export const deactivateGeneral = async (id, body, user) => {
  try {
    const record = await General.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'general',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await General.findByIdAndUpdate(
      id,
      { active: false, record, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 * @desc      reactivates a single general document.
 * @params    id, body.
 */
export const reactivateGeneral = async (id, body, user) => {
  try {
    const record = await General.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'general',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await General.findByIdAndUpdate(
      id,
      { active: true, record, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
