import { Food } from './food.model'

/**
 ** @desc      get all food document's.
 ** @params    query.
 */
export const getAllFoods = async (query = {}) => {
  try {
    const data = await Food.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single food document.
 ** @params    id.
 */
export const getFood = async id => {
  try {
    const data = await Food.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
