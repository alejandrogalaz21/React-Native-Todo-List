import { Router } from 'express'
import * as documentationsController from './documentations.controller'
// * import validators
// * import middleware
import aclMiddleware from '../../../middleware/aclMiddleware'
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/documentations
 ** @params    query, page, limit
 */
router.get(
  '/documentations',
  authMiddleware,
  aclMiddleware,
  documentationsController.getAllDocumentationsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/documentations
 ** @params    queryString, page, limit
 */
router.get(
  '/documentations/all',
  authMiddleware,
  aclMiddleware,
  documentationsController.getAllDocumentations
)

/**
 ** @access    Private
 ** @route     POST api/documentations
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/documentations',
  authMiddleware,
  aclMiddleware,
  documentationsController.createDocumentation
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/documentations/id
 ** @params    id
 */
router.get(
  '/documentations/:id',
  authMiddleware,
  aclMiddleware,
  documentationsController.getOneDocumentation
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/documentations/id
 ** @params    id, {payload}.
 */
router.put(
  '/documentations/:id',
  authMiddleware,
  aclMiddleware,
  documentationsController.updateDocumentation
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/documentations/id
 ** @params    id
 */
router.delete(
  '/documentations/:id',
  authMiddleware,
  aclMiddleware,
  documentationsController.deleteDocumentation
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /documentations/export/cvs
 ** @params    {rows}
 */
router.post('/documentations/export/cvs', (req, res) => {
  const rows = req.body
  console.log('documentations exort to cvs')
  console.log({ rows })
  return
})

export default router
