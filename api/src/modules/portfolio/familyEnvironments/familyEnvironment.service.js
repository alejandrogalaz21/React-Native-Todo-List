import FamilyEnvironment from './familyEnvironment.model'
import Infant from './../../infants/infant.model'

export const getAllFamilyEnvironments = async (query = {}) => {
  try {
    const data = await FamilyEnvironment.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getFamilyEnvironmentsPagination = async (query = {}, page = 0, limit = 10, infantId) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
    }
    const infant = await Infant.findOne({ _id: infantId })
    query = { infant: infant._id, active: true }
    const data = await FamilyEnvironment.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const createFamilyEnvironment = async body => {
  try {
    const data = await FamilyEnvironment.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getFamilyEnvironment = async id => {
  try {
    const data = await FamilyEnvironment.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const updateFamilyEnvironment = async (id, body) => {
  try {
    const data = await FamilyEnvironment.findByIdAndUpdate(id, body, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteFamilyEnvironment = async id => {
  try {
    const data = await FamilyEnvironment.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
