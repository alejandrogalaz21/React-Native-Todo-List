import { Router } from 'express'
import * as accessController from './access.controller'
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'
// * import validators
// * import middleware

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 * @desc      get all the records paginated
 * @access    Public
 * @route     GET api/access
 * @params    query, page, limit
 */
router.get(
  '/access',
  authMiddleware,
  aclMiddleware,
  accessController.getAllAccessPagination
)

/**
 * @desc      get single record
 * @access    Public
 * @route     GET api/access/infants
 * @params    id
 */
 router.get(
  '/access/infants',
  authMiddleware,
  aclMiddleware,
  accessController.getInfants
)

/**
 * @desc      get single record
 * @access    Public
 * @route     GET api/access/psychologists
 * @params    id
 */
router.get(
  '/access/psychologists',
  authMiddleware,
  aclMiddleware,
  accessController.getPsychologists
)
/**
 * @desc      get all the records
 * @access    Public
 * @route     GET api/access
 * @params    queryString, page, limit
 */
router.get(
  '/access/all',
  authMiddleware,
  aclMiddleware,
  accessController.getAllAccess
)

/**
 * @access    Private
 * @route     POST api/access
 * @desc      create a record
 * @params    {payload}
 */
router.post(
  '/access',
  authMiddleware,
  aclMiddleware,
  accessController.createAccess
)

/**
 * @desc      get single record
 * @access    Private
 * @route     GET api/access/id
 * @params    id
 */
router.get('/access/:id', authMiddleware, accessController.getOneAccess)

/**
 * @desc      update a record
 * @access    Private
 * @route     PUT api/access/id
 * @params    id, {payload}.
 */
router.put(
  '/access/:id',
  authMiddleware,
  aclMiddleware,
  accessController.updateAccess
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/access/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/access/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  accessController.deactivateAccess
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/access/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/access/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  accessController.reactivateAccess
)

/**
 * @desc      delete a record
 * @access    Private
 * @route     DELETE api/access/id
 * @params    id
 */
router.delete(
  '/access/:id',
  authMiddleware,
  aclMiddleware,
  accessController.deleteAccess
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 * @desc      export to cvs the selected rows
 * @access    Private
 * @route     POST /access/export/cvs
 * @params    {rows}
 */
router.post('/access/export/cvs', (req, res) => {
  const rows = req.body
  console.log('access exort to cvs')
  console.log({ rows })
  return
})

export default router
