import { Router } from 'express'
import * as environmentsController from './environments.controller'
// * import validators
// * import middleware
import authMiddleware from '../../../middleware/auth.middleware'
import aclMiddleware from '../../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/environments
 ** @params    query, page, limit
 */
router.get(
  '/environments',
  authMiddleware,
  aclMiddleware,
  environmentsController.getAllEnvironmentsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/environments
 ** @params    queryString, page, limit
 */
router.get(
  '/environments/all',
  authMiddleware,
  aclMiddleware,
  environmentsController.getAllEnvironments
)

/**
 ** @access    Private
 ** @route     POST api/environments
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/environments',
  authMiddleware,
  aclMiddleware,
  environmentsController.createEnvironment
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/environments/id
 ** @params    id
 */
router.get(
  '/environments/:id',
  authMiddleware,
  aclMiddleware,
  environmentsController.getOneEnvironment
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/environments/id
 ** @params    id, {payload}.
 */
router.put(
  '/environments/:id',
  authMiddleware,
  aclMiddleware,
  environmentsController.updateEnvironment
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/environments/id
 ** @params    id
 */
router.delete(
  '/environments/:id',
  authMiddleware,
  aclMiddleware,
  environmentsController.deleteEnvironment
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /environments/export/cvs
 ** @params    {rows}
 */
router.post('/environments/export/cvs', (req, res) => {
  const rows = req.body
  console.log('environments exort to cvs')
  console.log({ rows })
  return
})

export default router
