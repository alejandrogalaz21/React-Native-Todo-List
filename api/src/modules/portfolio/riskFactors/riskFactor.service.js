import RiskFactor from './riskFactor.model'
import Infant from './../../infants/infant.model'

/**
 ** @desc      get all riskFactor document's.
 ** @params    query.
 */
export const getAllRiskFactors = async (query = {}) => {
  try {
    const data = await RiskFactor.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all riskFactor document's paginated.
 ** @params    query, page, limit.
 */
export const getRiskFactorsPagination = async (query = {}, page = 1, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 }
    }
    const data = await RiskFactor.paginate(query, options)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new riskFactor.
 ** @params    body.
 */
export const createRiskFactor = async body => {
  try {
    const infant = await Infant.findOne({ _id: body.infant })
    const data = { ...body, infant: infant }
    const result = await RiskFactor.create(data).then(doc => {
      return Infant.updateMany({ _id: { $in: body.infant } }, { riskFactor: doc.id })
    })
    return result
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single riskFactor document.
 ** @params    id.
 */
export const getRiskFactor = async id => {
  try {
    const populate = [{ path: 'infant' }, { path: 'historical', populate: 'createdBy' }]
    const data = await RiskFactor.findById(id).populate(populate)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single riskFactor document.
 ** @params    id, body.
 */
export const updateRiskFactor = async (id, body) => {
  try {
    const data = await RiskFactor.findByIdAndUpdate(id, body.payload, {
      new: true
    })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      delete single riskFactor document.
 ** @params    id.
 */
export const deleteRiskFactor = async id => {
  try {
    const data = await RiskFactor.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}
