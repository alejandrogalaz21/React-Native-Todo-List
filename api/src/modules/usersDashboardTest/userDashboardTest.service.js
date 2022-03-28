import UserDashboardTest from './userDashboardTest.model'

/**
 * @desc      get all userDashboardTest document's.
 * @params    query.
 */
export const getAllUsersDashboardTest = async (query = {}) => {
  const data = await UserDashboardTest.find(query).sort({ updatedAt: -1 })
  return data
}

/**
 * @desc      get all userDashboardTest document's paginated.
 * @params    query, page, limit.
 */
export const getUsersDashboardTestPagination = async (query = {}, page = 0, limit = 10) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 }
  }
  const data = await UserDashboardTest.paginate(query, options)
  return data
}

/**
 * @desc      create new userDashboardTest.
 * @params    body.
 */
export const createUserDashboardTest = async body => {
  const data = await UserDashboardTest.create(body)
  return data
}

/**
 * @desc      get single userDashboardTest document.
 * @params    id.
 */
export const getUserDashboardTest = async id => {
  const data = await UserDashboardTest.findById(id)
  return data
}

/**
 * @desc      update single userDashboardTest document.
 * @params    id, body.
 */
export const updateUserDashboardTest = async (id, body) => {
  const data = await UserDashboardTest.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

/**
 * @desc      delete single userDashboardTest document.
 * @params    id.
 */
export const deleteUserDashboardTest = async id => {
  const data = await UserDashboardTest.findByIdAndDelete(id)
  return data
}

/**
 * @desc      gets an User by it's mail.
 * @params    body.
 */
 export const getDashboardUserByMail = async body => {
  const data = await UserDashboardTest.findOne({'mail':body.mail})
  return data
 }
