import Module from './module.model'

/**
 ** @desc      get all module document's.
 ** @params    query.
 */
export const getAllModules = async (query = {}) => {
  const data = await Module.find(query).sort({ updatedAt: -1 })
  return data
}

/**
 ** @desc      get single module document.
 ** @params    id.
 */
export const getModule = async id => {
  const data = await Module.findById(id)
  return data
}
