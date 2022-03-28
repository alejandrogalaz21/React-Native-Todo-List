import { Rol } from './rol.model'

/**
 ** @desc      get all rol document's.
 ** @params    query.
 */
export const getAllRols = async (query = {}) => {
  try {
    const data = await Rol.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single rol document.
 ** @params    id.
 */
export const getRol = async id => {
  try {
    const data = await Rol.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
