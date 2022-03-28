import PartnerDocumentation from './partnerDocumentation.model'
import Infant from './../../infants/infant.model'

export const getAllPartnerDocumentations = async (query = {}) => {
  const data = await PartnerDocumentation.find(query).sort({ updatedAt: -1 })
  return data
}

export const getPartnerDocumentationsPagination = async (query = {}, page = 0, limit = 10, infantId) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 }
  }
  const infant = await Infant.findOne({ _id: infantId })
  query = { infant: infant._id, active: true }
  const data = await PartnerDocumentation.paginate(query, options)
  return data
}

export const createPartnerDocumentation = async body => {
  const infant = await Infant.findOne({ _id: body.infant })
  const data = { ...body, infant: infant }
  const result = await PartnerDocumentation.create(data).then(doc => {
    return Infant.updateMany(
      { _id: { $in: body.infant } },
      { documentation: doc.id }
    )
  })
  return result
}

export const getPartnerDocumentation = async id => {
  const data = await PartnerDocumentation.findById(id).populate('file')
  return data
}

export const updatePartnerDocumentation = async (id, body) => {
  const data = await PartnerDocumentation.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

export const deletePartnerDocumentation = async id => {
  const data = await PartnerDocumentation.findByIdAndDelete(id)
  return data
}
