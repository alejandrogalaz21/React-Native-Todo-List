import Payment from './payment.model'
import Historical from './../historicals/historical.model'

/**
 ** @desc      get all payment document's.
 ** @params    query.
 */
export const getAllPayments = async (range = {}) => {
  try {
    const query = {}
    range.end && !range.start
      ? (query.createdAt = { $lte: range.end })
      : range.end
      ? (query.createdAt = { $gte: range.start, $lte: range.end })
      : (query.createdAt = { $gte: range.start })

    if (range.start) query.createdAt = { $gte: range.start }
    if (range.name) query.name = range.name
    const data = await Payment.find(query).sort({ updatedAt: -1 })
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get all payment document's paginated.
 ** @params    query, page, limit.
 */
export const getPaymentsPagination = async (query = {}, page = 0, limit = 10) => {
  try {
    const options = {
      page,
      limit,
      sort: { updatedAt: -1 },
      populate: { path: 'historical', populate: { path: 'createdBy' } }
    }
    const querySearch = {}
    if (query.endDateFilter &&  query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter, $lte: query.endDateFilter }
    } else if (query.endDateFilter) {
      querySearch.createdAt = { $lte: query.endDateFilter }
    } else if (query.startDateFilter) {
      querySearch.createdAt = { $gte: query.startDateFilter }
    }
    if (query.name) querySearch.name = query.name
    const regex = { $regex: new RegExp('.*' + query?.name + '.*', 'i') }
    const data = await Payment.paginate(
      query?.name ? { $or: [{ name: regex }, { description: regex }] } : querySearch,
      options
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      create new payment.
 ** @params    body.
 */
export const createPayment = async body => {
  try {
    const data = await Payment.create(body)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      get single payment document.
 ** @params    id.
 */
export const getPayment = async id => {
  try {
    const data = await Payment.findById(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      update single payment document.
 ** @params    id, body.
 */
export const updatePayment = async (id, body, user) => {
  try {
    const data = await Payment.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'dropout',
      title: data.name,
      createdBy: user,
      document: data._id
    })
    const result = await Payment.findByIdAndUpdate(
      id,
      { ...body.payload, $push: { historical } },
      {
        new: true
      }
    )
    return result
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      delete single payment document.
 ** @params    id.
 */
export const deletePayment = async id => {
  try {
    const data = await Payment.findByIdAndDelete(id)
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      deactivates a single payment document.
 ** @params    id, body.
 */
export const deactivatePayment = async (id, body, user) => {
  try {
    const record = await Payment.findById(id).lean()
    const historical = await Historical.create({
      ...body.historical,
      module: 'payment',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Payment.findByIdAndUpdate(
      id,
      { active: false, record, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}

/**
 ** @desc      reactivates a single payment document.
 ** @params    id, body.
 */
export const reactivatePayment = async (id, body, user) => {
  try {
    const record = await Payment.findById(id)
    const historical = await Historical.create({
      ...body.historical,
      module: 'payment',
      title: record.name,
      createdBy: user,
      document: record._id,
      cause: body.historical.cause,
      description: body.historical.description
    })
    const data = await Payment.findByIdAndUpdate(
      id,
      { active: true, record, $push: { historical } },
      {
        new: true
      }
    )
    return data
  } catch (error) {
    throw new Error(error)
  }
}
