import { Evaluation } from './evaluation.model'

/**
 ** @desc      get all evaluation document's.
 ** @params    query.
 */
export const getAllEvaluations = async (query = {}) => {
  try {
    const data = await Evaluation.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single evaluation document.
 ** @params    id.
 */
export const getEvaluation = async id => {
  try {
    const data = await Evaluation.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
