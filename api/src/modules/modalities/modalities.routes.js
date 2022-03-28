import { Router } from 'express'
import * as modalitiesController from './modalities.controller'
// * import validators
// * import middleware
import authMiddleware from '../../middleware/auth.middleware'
import aclMiddleware from '../../middleware/aclMiddleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/modalities
 ** @params    query, page, limit
 */
router.get(
  '/modalities',
  authMiddleware,
  aclMiddleware,
  modalitiesController.getAllModalitiesPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/modalities
 ** @params    queryString, page, limit
 */
router.get(
  '/modalities/all',
  authMiddleware,
  aclMiddleware,
  modalitiesController.getAllModalities
)

/**
 ** @access    Private
 ** @route     POST api/modalities
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/modalities', authMiddleware, aclMiddleware, modalitiesController.createModality)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/modalities/id
 ** @params    id
 */
router.get(
  '/modalities/:id',
  authMiddleware,
  aclMiddleware,
  modalitiesController.getOneModality
)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/modalities/id
 ** @params    id, {payload}.
 */
router.put(
  '/modalities/:id',
  authMiddleware,
  aclMiddleware,
  modalitiesController.updateModality
)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/modalities/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/modalities/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  modalitiesController.deactivateModality
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/modalities/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/modalities/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  modalitiesController.reactivateModality
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/modalities/id
 ** @params    id
 */
router.delete(
  '/modalities/:id',
  authMiddleware,
  aclMiddleware,
  modalitiesController.deleteModality
)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /modalities/export/cvs
 ** @params    {rows}
 */
router.post('/modalities/export/cvs', (req, res) => {
  const rows = req.body
  console.log('modalities exort to cvs')
  console.log({ rows })
  return
})

export default router
