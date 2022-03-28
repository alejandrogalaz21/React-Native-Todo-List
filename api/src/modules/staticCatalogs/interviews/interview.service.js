import { Interview } from './interview.model'

/**
 ** @desc      get all interview document's.
 ** @params    query.
 */
export const getAllInterviews = async (query = {}) => {
  try {
    const data = await Interview.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single interview document.
 ** @params    id.
 */
export const getInterview = async id => {
  try {
    const data = await Interview.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
