import User from './user.model'

/**
 * @desc      get all user document's.
 * @params    query.
 */
export const getAllUsers = async (query = {}) => {
  const data = await User.find(query).sort({ updatedAt: -1 })
  return data
}

/**
 * @desc      get all user document's paginated.
 * @params    query, page, limit.
 */
export const getUsersPagination = async (query = {}, page = 0, limit = 10) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 }
  }
  const data = await User.paginate(query, options)
  return data
}

/**
 * @desc      create new user.
 * @params    body.
 */
export const createUser = async ({ name, lastName, age }) => {
  const data = await User.create({ name, lastName, age })
  return data
}

/**
 * @desc      get single user document.
 * @params    id.
 */
export const getUser = async id => {
  const data = await User.findById(id)
  return data
}

/**
 * @desc      update single user document.
 * @params    id, body.
 */
export const updateUser = async (id, body) => {
  const data = await User.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

/**
 * @desc      delete single user document.
 * @params    id.
 */
export const deleteUser = async id => {
  const data = await User.findByIdAndDelete(id)
  return data
}
