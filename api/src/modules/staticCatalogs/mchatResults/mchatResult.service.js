import { MchatResult } from './mchatResult.model'

/**
 ** @desc      get all mchatResult document's.
 ** @params    query.
 */
export const getAllMchatResults = async (query = {}) => {
  try {
    const data = await MchatResult.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single mchatResult document.
 ** @params    id.
 */
export const getMchatResult = async id => {
  try {
    const data = await MchatResult.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
