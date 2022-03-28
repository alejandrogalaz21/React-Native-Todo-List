import { Lesion } from './lesion.model'

/**
 ** @desc      get all lesion document's.
 ** @params    query.
 */
export const getAllLesions = async (query = {}) => {
  try {
    const data = await Lesion.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single lesion document.
 ** @params    id.
 */
export const getLesion = async id => {
  try {
    const data = await Lesion.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
