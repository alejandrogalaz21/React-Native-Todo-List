import { Careful } from './careful.model'

/**
 ** @desc      get all careful document's.
 ** @params    query.
 */
export const getAllCarefuls = async (query = {}) => {
  const data = await Careful.find(query).sort({ updatedAt: -1 })
  return data
}

/**
 ** @desc      get single careful document.
 ** @params    id.
 */
export const getCareful = async id => {
  const data = await Careful.findById(id)
  return data
}