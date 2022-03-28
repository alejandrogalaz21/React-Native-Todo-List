import { Economical } from './economical.model'

/**
 ** @desc      get all economical document's.
 ** @params    query.
 */
export const getAllEconomicals = async (query = {}) => {
  try {
    const data = await Economical.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single economical document.
 ** @params    id.
 */
export const getEconomical = async id => {
  try {
    const data = await Economical.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
