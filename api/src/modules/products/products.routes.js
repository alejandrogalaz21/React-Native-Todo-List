import { Router } from 'express'
import * as productsController from './products.controller'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 * @desc      get all the records paginated
 * @access    Public
 * @route     GET api/products
 * @params    query, page, limit
 */
router.get('/products', productsController.getAllProductsPagination)

/**
 * @desc      get all the records
 * @access    Public
 * @route     GET api/products
 * @params    queryString, page, limit
 */
router.get('/products/all', productsController.getAllProducts)

/**
 * @access    Private
 * @route     POST api/products
 * @desc      create a record
 * @params    {payload}
 */
router.post('/products', productsController.createProduct)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/products/id
 * @params    id
 */
router.get('/products/:id', productsController.getOneProduct)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/products/id
 * @params    id, {payload}.
 */
router.put('/products/:id', productsController.updateProduct)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/products/id
 * @params    id
 */
router.delete('/products/:id', productsController.deleteProduct)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 * @desc      export to cvs the selected rows
 * @access    Private
 * @route     POST /products/export/cvs
 * @params    {rows}
 */
router.post('/products/export/cvs', (req, res) => {
  const rows = req.body
  console.log('products exort to cvs')
  console.log({ rows })
  return
})

export default router
