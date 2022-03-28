import { IfdResult } from './ifdResult.model'

/**
 ** @desc      get all ifdResult document's.
 ** @params    query.
 */
export const getAllIfdResults = async (query = {}) => {
  try {
    const data = await IfdResult.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single ifdResult document.
 ** @params    id.
 */
export const getIfdResult = async id => {
  try {
    const data = await IfdResult.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
