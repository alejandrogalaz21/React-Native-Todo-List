import { Courage } from './courage.model'

/**
 ** @desc      get all courage document's.
 ** @params    query.
 */
export const getAllCourages = async (query = {}) => {
  try {
    const data = await Courage.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single courage document.
 ** @params    id.
 */
export const getCourage = async id => {
  try {
    const data = await Courage.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
