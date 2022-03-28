import { AcademicLevel } from './academicLevel.model'

export const getAllAcademicLevels = async (query = {}) => {
  try {
    const data = await AcademicLevel.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getAcademicLevel = async id => {
  try {
    const data = await AcademicLevel.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
