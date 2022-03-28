import { Doctor } from './doctor.model'

/**
 ** @desc      get all doctor document's.
 ** @params    query.
 */
export const getAllDoctors = async (query = {}) => {
  try {
    const data = await Doctor.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single doctor document.
 ** @params    id.
 */
export const getDoctor = async id => {
  try {
    const data = await Doctor.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
