import Infant from '../../infants/infant.model'
import Vaccination from './vaccination.model'

/**
 ** @desc      get all vaccination document's.
 ** @params    query.
 */
export const getAllVaccinations = async (query = {}) => {
  try {
    const data = await Vaccination.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all vaccination document's paginated.
 ** @params    query, page, limit.
 */
export const getVaccinationsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
    }
    const data = await Vaccination.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new vaccination.
 ** @params    body.
 */
export const createVaccination = async (body, images) => {
  try {
    const infant = await Infant.findOne({ _id: body.infant })
    if (body.otherVaccine) {
      body.otherVaccine = JSON.parse(body.otherVaccine)
    }
    if (images) {
      body.vaccinationCard = images.vaccinationCard.url
    }
    const data = { ...body, infant: infant }
    const result = await Vaccination.create(data).then(doc => {
      return Infant.updateMany({ _id: { $in: body.infant } }, { vaccination: doc.id })
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single vaccination document.
 ** @params    id.
 */
export const getVaccination = async id => {
  try {
    const data = await Vaccination.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single vaccination document.
 ** @params    id, body.
 */
export const updateVaccination = async (id, body) => {
  try {
    const data = await Vaccination.findByIdAndUpdate(id, body, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      delete single vaccination document.
 ** @params    id.
 */
export const deleteVaccination = async id => {
  try {
    const data = await Vaccination.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
