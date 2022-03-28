import { LevelEstudy } from './levelEstudy.model'

/**
 ** @desc      get all levelEstudy document's.
 ** @params    query.
 */
export const getAllLevelEstudies = async (query = {}) => {
  try {
    const data = await LevelEstudy.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single levelEstudy document.
 ** @params    id.
 */
export const getLevelEstudy = async id => {
  try {
    const data = await LevelEstudy.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
