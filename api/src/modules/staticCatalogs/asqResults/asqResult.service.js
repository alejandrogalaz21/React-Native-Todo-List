import { AsqResult } from './asqResult.model'

/**
 ** @desc      get all asqResult document's.
 ** @params    query.
 */
export const getAllAsqResults = async (query = {}) => {
  try {
    const data = await AsqResult.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single asqResult document.
 ** @params    id.
 */
export const getAsqResult = async id => {
  try {
    const data = await AsqResult.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
