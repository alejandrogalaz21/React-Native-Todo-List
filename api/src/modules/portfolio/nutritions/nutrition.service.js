import Nutrition from './nutrition.model'
import Infant from './../../infants/infant.model'

export const getAllNutritions = async (query = {}) => {
  const populate = [
    { path: 'infant' },
    { path: 'foodHistory' },
    { path: 'historical', populate: 'createdBy' }
  ]
  const data = await Nutrition.find(query).populate(populate).sort({ updatedAt: -1 })
  return data
}

export const getNutritionsPagination = async (query = {}, page = 0, limit = 10) => {
  const populate = [
    { path: 'infant' },
    { path: 'foodHistory' },
    { path: 'historical', populate: 'createdBy' }
  ]
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 },
    populate
  }
  const data = await Nutrition.paginate(query, options)
  return data
}

export const createNutrition = async body => {
  const infant = await Infant.findOne({ _id: body.infant })
  const data = { ...body, infant: infant }
  const result = await Nutrition.create(data).then(doc => {
    return Infant.updateMany(
      { _id: { $in: body.infant } },
      { nutrition: doc.id }
    )
  })
  return result
}

export const getNutrition = async id => {
  const populate = [
    { path: 'infant' },
    { path: 'foodHistory' },
    { path: 'historical', populate: 'createdBy' }
  ]
  const data = await Nutrition.findById(id).populate(populate)
  return data
}

export const updateNutrition = async (id, body) => {
  const data = await Nutrition.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

export const deleteNutrition = async id => {
  const data = await Nutrition.findByIdAndDelete(id)
  return data
}
