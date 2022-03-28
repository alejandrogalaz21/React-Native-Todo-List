import { Router } from 'express'
import * as scholarshipsController from './scholarships.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/scholarships
 ** @params    query, page, limit
 */
router.get(
  '/scholarships',
  authMiddleware,
  aclMiddleware,
  scholarshipsController.getAllScholarshipsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/scholarships
 ** @params    queryString, page, limit
 */
router.get(
  '/scholarships/all',
  authMiddleware,
  aclMiddleware,
  scholarshipsController.getAllScholarships
)

/**
 ** @access    Private
 ** @route     POST api/scholarships
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/scholarships',
  authMiddleware,
  aclMiddleware,
  scholarshipsController.createScholarship
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/scholarships/id
 ** @params    id
 */
router.get(
  '/scholarships/:id',
  authMiddleware,
  aclMiddleware,
  scholarshipsController.getOneScholarship
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/scholarships/id
 ** @params    id, {payload}.
 */
router.put(
  '/scholarships/:id',
  authMiddleware,
  aclMiddleware,
  scholarshipsController.updateScholarship
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/scholarships/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/scholarships/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  scholarshipsController.deactivateScholarship
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/scholarships/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/scholarships/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  scholarshipsController.reactivateScholarship
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/scholarships/id
 ** @params    id
 */
router.delete(
  '/scholarships/:id',
  authMiddleware,
  aclMiddleware,
  scholarshipsController.deleteScholarship
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /scholarships/export/cvs
 ** @params    {rows}
 */
router.post('/scholarships/export/cvs', (req, res) => {
  const rows = req.body
  console.log('scholarships exort to cvs')
  console.log({ rows })
  return
})

export default router
