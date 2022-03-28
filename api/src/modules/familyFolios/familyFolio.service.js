import FamilyFolio from './familyFolio.model'

export const getAllFamilyFolios = async (query = {}) => {
  try {
    const data = await FamilyFolio.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getFamilyFoliosPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
    }
    const data = await FamilyFolio.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const createFamilyFolio = async body => {
  console.log('body', body)
  try {
    const data = await FamilyFolio.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getFamilyFolio = async id => {
  try {
    const data = await FamilyFolio.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const updateFamilyFolio = async (id, body) => {
  try {
    const data = await FamilyFolio.findByIdAndUpdate(id, body, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteFamilyFolio = async id => {
  try {
    const data = await FamilyFolio.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
