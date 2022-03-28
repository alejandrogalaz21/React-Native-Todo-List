import { Router } from 'express'
import * as evaluationPersonsController from './evaluationPersons.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/evaluationPersons
 ** @params    query, page, limit
 */
router.get(
  '/evaluationPersons',
  authMiddleware,
  aclMiddleware,
  evaluationPersonsController.getAllEvaluationPersonsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/evaluationPersons
 ** @params    queryString, page, limit
 */
router.get(
  '/evaluationPersons/all',
  authMiddleware,
  aclMiddleware,
  evaluationPersonsController.getAllEvaluationPersons
)

/**
 ** @access    Private
 ** @route     POST api/evaluationPersons
 ** @desc      create a record
 ** @params    {payload}
 */
router.post(
  '/evaluationPersons',
  authMiddleware,
  aclMiddleware,
  evaluationPersonsController.createEvaluationPerson
)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/evaluationPersons/id
 ** @params    id
 */
router.get(
  '/evaluationPersons/:id',
  authMiddleware,
  aclMiddleware,
  evaluationPersonsController.getOneEvaluationPerson
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/evaluationPersons/id
 ** @params    id, {payload}.
 */
router.put(
  '/evaluationPersons/:id',
  authMiddleware,
  aclMiddleware,
  evaluationPersonsController.updateEvaluationPerson
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/evaluationPersons/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/evaluationPersons/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  evaluationPersonsController.deactivateEvaluationPerson
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/evaluationPersons/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/evaluationPersons/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  evaluationPersonsController.reactivateEvaluationPerson
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/evaluationPersons/id
 ** @params    id
 */
router.delete(
  '/evaluationPersons/:id',
  authMiddleware,
  aclMiddleware,
  evaluationPersonsController.deleteEvaluationPerson
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /evaluationPersons/export/cvs
 ** @params    {rows}
 */
router.post('/evaluationPersons/export/cvs', (req, res) => {
  const rows = req.body
  console.log('evaluationPersons exort to cvs')
  console.log({ rows })
  return
})

export default router
