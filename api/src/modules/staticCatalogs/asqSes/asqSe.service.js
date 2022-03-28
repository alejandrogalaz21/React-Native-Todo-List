import { AsqSe } from './asqSe.model'

/**
 ** @desc      get all asqSe document's.
 ** @params    query.
 */
export const getAllAsqSes = async (query = {}) => {
  const data = await AsqSe.find(query).sort({ updatedAt: -1 })
  return data
}

/**
 ** @desc      get all asqSe document's paginated.
 ** @params    query, page, limit.
 */
export const getAsqSesPagination = async (query = {}, page = 0, limit = 10) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 }
  }
  const data = await AsqSe.paginate(query, options)
  return data
}

/**
 ** @desc      create new asqSe.
 ** @params    body.
 */
export const createAsqSe = async body => {
  const data = await AsqSe.create(body)
  return data
}

/**
 ** @desc      get single asqSe document.
 ** @params    id.
 */
export const getAsqSe = async id => {
  const data = await AsqSe.findById(id)
  return data
}

/**
 ** @desc      update single asqSe document.
 ** @params    id, body.
 */
export const updateAsqSe = async (id, body) => {
  const data = await AsqSe.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

/**
 ** @desc      delete single asqSe document.
 ** @params    id.
 */
export const deleteAsqSe = async id => {
  const data = await AsqSe.findByIdAndDelete(id)
  return data
}
