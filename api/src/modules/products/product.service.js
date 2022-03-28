import Product from './product.model'

/**
 * @desc      get all product document's.
 * @params    query.
 */
export const getAllProducts = async (query = {}) => {
  const data = await Product.find(query).sort({ updatedAt: -1 })
  return data
}

/**
 * @desc      get all product document's paginated.
 * @params    query, page, limit.
 */
export const getProductsPagination = async (
  query = {},
  page = 0,
  limit = 10
) => {
  const options = {
    page,
    limit,
    sort: { updatedAt: -1 }
  }
  const data = await Product.paginate(query, options)
  return data
}

/**
 * @desc      create new product.
 * @params    body.
 */
export const createProduct = async body => {
  const data = await Product.create(body)
  return data
}

/**
 * @desc      get single product document.
 * @params    id.
 */
export const getProduct = async id => {
  const data = await Product.findById(id)
  return data
}

/**
 * @desc      update single product document.
 * @params    id, body.
 */
export const updateProduct = async (id, body) => {
  const data = await Product.findByIdAndUpdate(id, body, {
    new: true
  })
  return data
}

/**
 * @desc      delete single product document.
 * @params    id.
 */
export const deleteProduct = async id => {
  const data = await Product.findByIdAndDelete(id)
  return data
}
