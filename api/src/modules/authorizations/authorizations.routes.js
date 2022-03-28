import { Router } from 'express'
import * as authorizationsController from './authorizations.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/authorizations
 ** @params    query, page, limit
 */
router.get(
  '/authorizations',
  authMiddleware,
  aclMiddleware,
  authorizationsController.getAllAuthorizationsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/authorizations
 ** @params    queryString, page, limit
 */
router.get(
  '/authorizations/all',
  authMiddleware,
  aclMiddleware,
  authorizationsController.getAllAuthorizations
)

/**
 ** @access    Private
 ** @route     POST api/authorizations
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/authorizations',
  authMiddleware,
  aclMiddleware,
  authorizationsController.createAuthorization
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/authorizations/id
 ** @params    id
 */
router.get(
  '/authorizations/:id',
  authMiddleware,
  aclMiddleware,
  authorizationsController.getOneAuthorization
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/authorizations/id
 ** @params    id, {payload}.
 */
router.put(
  '/authorizations/:id',
  authMiddleware,
  aclMiddleware,
  authorizationsController.updateAuthorization
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/authorizations/id
 ** @params    id
 */
router.delete(
  '/authorizations/:id',
  authMiddleware,
  aclMiddleware,
  authorizationsController.deleteAuthorization
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /authorizations/export/cvs
 ** @params    {rows}
 */
router.post('/authorizations/export/cvs', (req, res) => {
  const rows = req.body
  console.log('authorizations exort to cvs')
  console.log({ rows })
  return
})

export default router
