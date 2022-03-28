import { Participation } from './participation.model'

/**
 ** @desc      get all participation document's.
 ** @params    query.
 */
export const getAllParticipations = async (query = {}) => {
  try {
    const data = await Participation.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single participation document.
 ** @params    id.
 */
export const getParticipation = async id => {
  try {
    const data = await Participation.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
