import { Religion } from './religion.model'

/**
 ** @desc      get all religion document's.
 ** @params    query.
 */
export const getAllReligions = async (query = {}) => {
  try {
    const data = await Religion.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single religion document.
 ** @params    id.
 */
export const getReligion = async id => {
  try {
    const data = await Religion.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
