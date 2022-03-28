import { Router } from 'express'
import * as generalsController from './generals.controller'
import aclMiddleware from '../../../middleware/aclMiddleware'
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//

/**
 ** @desc      get all the records paginated
 ** @access    Public
 ** @route     GET api/generals
 ** @params    query, page, limit
 */
router.get(
  '/generals',
  authMiddleware,
  aclMiddleware,
  generalsController.getAllGeneralsPagination
)

/**
 ** @desc      get all the records
 ** @access    Public
 ** @route     GET api/generals
 ** @params    queryString, page, limit
 */
router.get('/generals/all', authMiddleware, aclMiddleware, generalsController.getAllGenerals)

/**
 ** @access    Private
 ** @route     POST api/generals
 ** @desc      create a record
 ** @params    {payload}
 */
router.post('/generals', authMiddleware, aclMiddleware, generalsController.createGeneral)

/**
 ** @desc      get single record
 ** @access    Private
 ** @route     GET api/generals/id
 ** @params    id
 */
router.get('/generals/:id', authMiddleware, aclMiddleware, generalsController.getOneGeneral)

/**
 ** @desc      update a record
 ** @access    Private
 ** @route     PUT api/generals/id
 ** @params    id, {payload}.
 */
router.put('/generals/:id', authMiddleware, aclMiddleware, generalsController.updateGeneral)

/**
 * @desc      deactivate a record
 * @access    Private
 * @route     PUT api/generals/deactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/generals/:id/deactivate',
  authMiddleware,
  aclMiddleware,
  generalsController.deactivateGeneral
)

/**
 * @desc      reactivate a record
 * @access    Private
 * @route     PUT api/generals/reactivate/id
 * @params    id, {payload}.
 */
router.put(
  '/generals/:id/reactivate',
  authMiddleware,
  aclMiddleware,
  generalsController.reactivateGeneral
)

/**
 ** @desc      delete a record
 ** @access    Private
 ** @route     DELETE api/generals/id
 ** @params    id
 */
router.delete('/generals/:id', authMiddleware, aclMiddleware, generalsController.deleteGeneral)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /generals/export/cvs
 ** @params    {rows}
 */
router.post('/generals/export/cvs', (req, res) => {
  const rows = req.body
  console.log('generals exort to cvs')
  console.log({ rows })
  return
})

export default router
