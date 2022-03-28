import Socioeconomic from './socioeconomic.model'
import Infant from './../../infants/infant.model'

export const getAllSocioeconomics = async (query = {}) => {
  try {
    const populate = [
      { path: 'infant' },
      { path: 'relationship' },
      { path: 'levelEstudy' },
      { path: 'historical', populate: 'createdBy' }
    ]
    const data = await Socioeconomic.find(query).populate(populate).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const getSocioeconomicsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const populate = [
      { path: 'infant' },
      { path: 'relationship' },
      { path: 'levelEstudy' },
      { path: 'historical', populate: 'createdBy' }
    ]
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate
    }
    const data = await Socioeconomic.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const createSocioeconomic = async body => {
  try {
    const infant = await Infant.findOne({ _id: body.infant })
    const data = { ...body, infant: infant }
    const result = await Socioeconomic.create(data).then(doc => {
      return Infant.updateMany({ _id: { $in: body.infant } }, { socioeconomic: doc.id })
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

export const getSocioeconomic = async id => {
  try {
    const populate = [
      { path: 'infant' },
      { path: 'person', populate: [{ path: 'relationship' }, { path: 'levelEstudy' }] },
      { path: 'historical', populate: 'createdBy' }
    ]
    const data = await Socioeconomic.findById(id).populate(populate)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const updateSocioeconomic = async (id, body) => {
  try {
    const data = await Socioeconomic.findByIdAndUpdate(id, body, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

export const deleteSocioeconomic = async id => {
  try {
    const data = await Socioeconomic.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
