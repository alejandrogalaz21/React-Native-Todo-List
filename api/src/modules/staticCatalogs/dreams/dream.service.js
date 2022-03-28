import { Dream } from './dream.model'

/**
 ** @desc      get all dream document's.
 ** @params    query.
 */
export const getAllDreams = async (query = {}) => {
  try {
    const data = await Dream.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single dream document.
 ** @params    id.
 */
export const getDream = async id => {
  try {
    const data = await Dream.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
