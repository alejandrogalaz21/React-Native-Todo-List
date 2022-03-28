import Health from './health.model'
import Infant from './../../infants/infant.model'

export const getAllHealths = async (query = {}) => {
  const populate = [
    { path: 'infant' }
  ]
  const data = await Health.find(query).populate(populate).sort({ updatedAt: -1 })
  return data
}

export const getHealthsPagination = async (query = {}, page = 0, limit = 10) => {
  const populate = [
    { path: 'infant' }
  ]
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 },
    populate
  }
  const data = await Health.paginate(query, options)
  return data
}

export const createHealth = async body => {
  const infant = await Infant.findOne({ _id: body.infant })
  const data = { ...body, infant: infant }
  const result = await Health.create(data).then(doc => {
    return Infant.updateMany(
      { _id: { $in: body.infant } },
      { health: doc.id }
    )
  })
  return result
}

export const getHealth = async id => {
  const populate = [
    { path: 'infant' }
  ]
  const data = await Health.findById(id).populate(populate)
  return data
}

export const updateHealth = async (id, body) => {
  const data = await Health.findByIdAndUpdate(id, body.payload, {
    new: true
  })
  return data
}

export const deleteHealth = async id => {
  const data = await Health.findByIdAndDelete(id)
  return data
}
