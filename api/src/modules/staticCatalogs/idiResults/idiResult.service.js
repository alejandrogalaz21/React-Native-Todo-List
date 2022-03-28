import { IdiResult } from './idiResult.model'

/**
 ** @desc      get all idiResult document's.
 ** @params    query.
 */
export const getAllIdiResults = async (query = {}) => {
  try {
    const data = await IdiResult.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single idiResult document.
 ** @params    id.
 */
export const getIdiResult = async id => {
  try {
    const data = await IdiResult.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
