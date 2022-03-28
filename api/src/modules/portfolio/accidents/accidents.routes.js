import { Router } from 'express'
import * as accidentsController from './accidents.controller'
import aclMiddleware from './../../../middleware/aclMiddleware'
import authMiddleware from './../../../middleware/auth.middleware'

const router = new Router()
router.get('/accidents/infant/:infantId', accidentsController.getAllAccidentsPagination)
router.get('/accidents/all', authMiddleware, aclMiddleware, accidentsController.getAllAccidents)
router.post('/accidents', authMiddleware, aclMiddleware, accidentsController.createAccident)
router.get('/accidents/:id', authMiddleware, aclMiddleware, accidentsController.getOneAccident)
router.put('/accidents/:id', authMiddleware, aclMiddleware, accidentsController.updateAccident)
router.delete('/accidents/:id', authMiddleware, aclMiddleware, accidentsController.deleteAccident)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /accidents/export/cvs
 ** @params    {rows}
 */
router.post('/accidents/export/cvs', (req, res) => {
  const rows = req.body
  console.log('accidents exort to cvs')
  console.log({ rows })
  return
})

export default router
