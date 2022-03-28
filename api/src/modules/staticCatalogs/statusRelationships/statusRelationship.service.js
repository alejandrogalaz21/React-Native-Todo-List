import { StatusRelationship } from './statusRelationship.model'

/**
 ** @desc      get all statusRelationship document's.
 ** @params    query.
 */
export const getAllStatusRelationships = async (query = {}) => {
  try {
    const data = await StatusRelationship.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single statusRelationship document.
 ** @params    id.
 */
export const getStatusRelationship = async id => {
  try {
    const data = await StatusRelationship.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
