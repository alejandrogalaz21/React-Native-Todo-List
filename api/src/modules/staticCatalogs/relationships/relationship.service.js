import { Relationship } from './relationship.model'

/**
 ** @desc      get all relationship document's.
 ** @params    query.
 */
export const getAllRelationships = async (query = {}) => {
  try {
    const data = await Relationship.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single relationship document.
 ** @params    id.
 */
export const getRelationship = async id => {
  try {
    const data = await Relationship.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
