import { Router } from 'express'
import * as addressesController from './addresses.controller'
// * import validators
// * import middleware
import aclMiddleware from '../../../middleware/aclMiddleware'
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/addresses
 ** @params    query, page, limit
 */
router.get(
  '/addresses',
  authMiddleware,
  aclMiddleware,
  addressesController.getAllAddressesPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/addresses
 ** @params    queryString, page, limit
 */
router.get(
  '/addresses/all',
  authMiddleware,
  aclMiddleware,
  addressesController.getAllAddresses
)

/**
 ** @access    Private
 ** @route     POST api/addresses
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/addresses', authMiddleware, aclMiddleware, addressesController.createAddress)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/addresses/id
 ** @params    id
 */
router.get('/addresses/:id', authMiddleware, aclMiddleware, addressesController.getOneAddress)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/addresses/id
 ** @params    id, {payload}.
 */
router.put('/addresses/:id', authMiddleware, aclMiddleware, addressesController.updateAddress)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/addresses/id
 ** @params    id
 */
router.delete(
  '/addresses/:id',
  authMiddleware,
  aclMiddleware,
  addressesController.deleteAddress
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /addresses/export/cvs
 ** @params    {rows}
 */
router.post('/addresses/export/cvs', (req, res) => {
  const rows = req.body
  console.log('addresses exort to cvs')
  console.log({ rows })
  return
})

export default router
