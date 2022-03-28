import { Interpersonal } from './interpersonal.model'

/**
 ** @desc      get all interpersonal document's.
 ** @params    query.
 */
export const getAllInterpersonals = async (query = {}) => {
  try {
    const data = await Interpersonal.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single interpersonal document.
 ** @params    id.
 */
export const getInterpersonal = async id => {
  try {
    const data = await Interpersonal.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
