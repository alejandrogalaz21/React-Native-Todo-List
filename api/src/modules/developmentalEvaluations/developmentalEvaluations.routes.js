import { Router } from 'express'
import * as developmentalEvaluationsController from './developmentalEvaluations.controller'
// * import validators
// * import middleware
import aclMiddleware from '../../middleware/aclMiddleware'
import authMiddleware from '../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/developmentalEvaluations
 ** @params    query, page, limit
 */
router.get(
  '/developmentalEvaluations/infant/:infantId',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.getAllDevelopmentalEvaluationsPagination
)

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/developmentalEvaluations
 ** @params    query, page, limit
 */
router.get(
  '/developmentalEvaluations/',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.getDevelopmentalEvaluationsPagination
)

/**
 * @desc      get single record
 * @access    Public
 * @route     GET api/developmentEvaluations/evaluationPerson
 * @params    id
 */
router.get(
  '/developmentEvaluations/evaluationPersons',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.getEvaluationPerson
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/developmentalEvaluations
 ** @params    queryString, page, limit
 */
router.get(
  '/developmentalEvaluations/all',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.getAllDevelopmentalEvaluations
)

/**
 ** @access    Private
 ** @route     POST api/developmentalEvaluations
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/developmentalEvaluations',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.createDevelopmentalEvaluation
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/developmentalEvaluations/id
 ** @params    id
 */
router.get(
  '/developmentalEvaluations/:id',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.getOneDevelopmentalEvaluation
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/developmentalEvaluations/id
 ** @params    id, {payload}.
 */
router.put(
  '/developmentalEvaluations/:id',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.updateDevelopmentalEvaluation
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/developmentalEvaluations/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/developmentalEvaluations/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.deactivateDevelopmentalEvaluation
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/developmentalEvaluations/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/developmentalEvaluations/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.reactivateDevelopmentalEvaluation
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/developmentalEvaluations/id
 ** @params    id
 */
router.delete(
  '/developmentalEvaluations/:id',
  authMiddleware,
  aclMiddleware,
  developmentalEvaluationsController.deleteDevelopmentalEvaluation
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /developmentalEvaluations/export/cvs
 ** @params    {rows}
 */
router.post('/developmentalEvaluations/export/cvs', (req, res) => {
  const rows = req.body
  console.log('developmentalEvaluations exort to cvs')
  console.log({ rows })
  return
})

export default router
