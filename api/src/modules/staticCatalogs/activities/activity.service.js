import { Activity } from './activity.model'

/**
 ** @desc      get all activity document's.
 ** @params    query.
 */
export const getAllActivities = async (query = {}) => {
  try {
    const data = await Activity.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single activity document.
 ** @params    id.
 */
export const getActivity = async id => {
  try {
    const data = await Activity.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
