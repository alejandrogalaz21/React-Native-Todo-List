import { Situation } from './situation.model'

/**
 ** @desc      get all situation document's.
 ** @params    query.
 */
export const getAllSituations = async (query = {}) => {
  try {
    const data = await Situation.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single situation document.
 ** @params    id.
 */
export const getSituation = async id => {
  try {
    const data = await Situation.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
