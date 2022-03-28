import { CivilStatus } from './civilStatus.model'

/**
 ** @desc      get all civilStatus document's.
 ** @params    query.
 */
export const getAllCivilStatuses = async (query = {}) => {
  try {
    const data = await CivilStatus.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single civilStatus document.
 ** @params    id.
 */
export const getCivilStatus = async id => {
  try {
    const data = await CivilStatus.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
