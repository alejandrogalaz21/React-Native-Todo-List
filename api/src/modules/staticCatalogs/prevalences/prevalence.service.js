import { Prevalence } from './prevalence.model'

/**
 ** @desc      get all prevalence document's.
 ** @params    query.
 */
export const getAllPrevalences = async (query = {}) => {
  try {
    const data = await Prevalence.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single prevalence document.
 ** @params    id.
 */
export const getPrevalence = async id => {
  try {
    const data = await Prevalence.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
