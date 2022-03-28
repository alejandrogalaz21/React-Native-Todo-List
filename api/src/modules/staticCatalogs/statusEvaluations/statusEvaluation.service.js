import { StatusEvaluation } from './statusEvaluation.model'

/**
 ** @desc      get all statusEvaluation document's.
 ** @params    query.
 */
export const getAllStatusEvaluations = async (query = {}) => {
  try {
    const data = await StatusEvaluation.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single statusEvaluation document.
 ** @params    id.
 */
export const getStatusEvaluation = async id => {
  try {
    const data = await StatusEvaluation.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
