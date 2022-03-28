import { Frustration } from './frustration.model'

/**
 ** @desc      get all frustration document's.
 ** @params    query.
 */
export const getAllFrustrations = async (query = {}) => {
  try {
    const data = await Frustration.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single frustration document.
 ** @params    id.
 */
export const getFrustration = async id => {
  try {
    const data = await Frustration.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
