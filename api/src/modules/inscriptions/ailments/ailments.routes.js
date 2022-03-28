import { Router } from 'express'
import * as ailmentsController from './ailments.controller'
// * import validators
// * import middleware
import aclMiddleware from '../../../middleware/aclMiddleware'
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/ailments
 ** @params    query, page, limit
 */
router.get(
  '/ailments',
  authMiddleware,
  aclMiddleware,
  ailmentsController.getAllAilmentsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/ailments
 ** @params    queryString, page, limit
 */
router.get('/ailments/all', authMiddleware, aclMiddleware, ailmentsController.getAllAilments)

/**
 ** @access    Private
 ** @route     POST api/ailments
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/ailments', authMiddleware, aclMiddleware, ailmentsController.createAilment)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/ailments/id
 ** @params    id
 */
router.get('/ailments/:id', authMiddleware, aclMiddleware, ailmentsController.getOneAilment)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/ailments/id
 ** @params    id, {payload}.
 */
router.put('/ailments/:id', authMiddleware, aclMiddleware, ailmentsController.updateAilment)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/ailments/id
 ** @params    id
 */
router.delete('/ailments/:id', authMiddleware, aclMiddleware, ailmentsController.deleteAilment)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /ailments/export/cvs
 ** @params    {rows}
 */
router.post('/ailments/export/cvs', (req, res) => {
  const rows = req.body
  console.log('ailments exort to cvs')
  console.log({ rows })
  return
})

export default router
