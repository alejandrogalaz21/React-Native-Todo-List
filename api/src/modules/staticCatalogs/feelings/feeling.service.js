import { Feeling } from './feeling.model'

/**
 ** @desc      get all feeling document's.
 ** @params    query.
 */
export const getAllFeelings = async (query = {}) => {
  try {
    const data = await Feeling.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single feeling document.
 ** @params    id.
 */
export const getFeeling = async id => {
  try {
    const data = await Feeling.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
