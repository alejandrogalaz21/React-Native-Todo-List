import { Interest } from './interest.model'

/**
 ** @desc      get all interest document's.
 ** @params    query.
 */
export const getAllInterests = async (query = {}) => {
  try {
    const data = await Interest.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single interest document.
 ** @params    id.
 */
export const getInterest = async id => {
  try {
    const data = await Interest.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
