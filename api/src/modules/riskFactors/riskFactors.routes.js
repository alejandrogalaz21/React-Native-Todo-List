import { Router } from 'express'
import * as riskFactorsController from './riskFactors.controller'
// * import validators
// * import middleware
import aclMiddleware from '../../../middleware/aclMiddleware'
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/riskFactors
 ** @params    query, page, limit
 */
router.get(
  '/riskFactors',
  authMiddleware,
  aclMiddleware,
  riskFactorsController.getAllRiskFactorsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/riskFactors
 ** @params    queryString, page, limit
 */
router.get(
  '/riskFactors/all',
  authMiddleware,
  aclMiddleware,
  riskFactorsController.getAllRiskFactors
)

/**
 ** @access    Private
 ** @route     POST api/riskFactors
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/riskFactors',
  authMiddleware,
  aclMiddleware,
  riskFactorsController.createRiskFactor
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/riskFactors/id
 ** @params    id
 */
router.get(
  '/riskFactors/:id',
  authMiddleware,
  aclMiddleware,
  riskFactorsController.getOneRiskFactor
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/riskFactors/id
 ** @params    id, {payload}.
 */
router.put(
  '/riskFactors/:id',
  authMiddleware,
  aclMiddleware,
  riskFactorsController.updateRiskFactor
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/riskFactors/id
 ** @params    id
 */
router.delete(
  '/riskFactors/:id',
  authMiddleware,
  aclMiddleware,
  riskFactorsController.deleteRiskFactor
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /riskFactors/export/cvs
 ** @params    {rows}
 */
router.post('/riskFactors/export/cvs', (req, res) => {
  const rows = req.body
  console.log('riskFactors exort to cvs')
  console.log({ rows })
  return
})

export default router
