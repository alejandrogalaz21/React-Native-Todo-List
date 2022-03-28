import Historical from './historical.model'
import User from './../users/user.model'

/**
 ** @desc      get all historical document's.
 ** @params    query.
 */
export const getAllHistoricals = async (query = {}) => {
  try {
    const data = await Historical.find(query)
      .populate({ path: 'createdBy', populate: 'thumbnail' })
      .sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single historical document.
 ** @params    id.
 */
export const getHistorical = async id => {
  try {
    const data = await Historical.find({ createdBy: id })
      .populate({
        path: 'createdBy',
        populate: 'thumbnail'
      })
      .sort({ updatedAt: -1 })
    const user = await User.findById(id).populate('thumbnail', 'path')
    const result = { list: data, user }
    return result
  } catch (error) {
    throw new Error(error)
  }
}
