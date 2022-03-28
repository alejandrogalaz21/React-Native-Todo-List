import { Grade } from './grade.model'

/**
 ** @desc      get all grade document's.
 ** @params    query.
 */
export const getAllGrades = async (query = {}) => {
  try {
    const data = await Grade.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single grade document.
 ** @params    id.
 */
export const getGrade = async id => {
  try {
    const data = await Grade.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
