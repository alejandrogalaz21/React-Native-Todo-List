import { Asq } from './asq.model'

/**
 ** @desc      get all asq document's.
 ** @params    query.
 */
export const getAllAsqs = async (query = {}) => {
  const data = await Asq.find(query).sort({ updatedAt: -1 })
  return data
}

/**
 ** @desc      get all asq document's paginated.
 ** @params    query, page, limit.
 */
export const getAsqsPagination = async (query = {}, page = 0, limit = 10) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 }
  }
  const data = await Asq.paginate(query, options)
  return data
}

/**
 ** @desc      create new asq.
 ** @params    body.
 */
export const createAsq = async body => {
  const data = await Asq.create(body)
  return data
}

/**
 ** @desc      get single asq document.
 ** @params    id.
 */
export const getAsq = async id => {
  const data = await Asq.findById(id)
  return data
}

/**
 ** @desc      update single asq document.
 ** @params    id, body.
 */
export const updateAsq = async (id, body) => {
  const data = await Asq.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

/**
 ** @desc      delete single asq document.
 ** @params    id.
 */
export const deleteAsq = async id => {
  const data = await Asq.findByIdAndDelete(id)
  return data
}
