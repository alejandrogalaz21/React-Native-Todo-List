import { Router } from 'express'
import * as familyEnvironmentsController from './familyEnvironments.controller'
import aclMiddleware from './../../../middleware/aclMiddleware'
import authMiddleware from './../../../middleware/auth.middleware'


const router = new Router()

//* C.R.U.D ROUTES *//
router.get('/familyEnvironments/infant/:infantId', authMiddleware, aclMiddleware, familyEnvironmentsController.getAllFamilyEnvironmentsPagination)
router.get('/familyEnvironments/all', authMiddleware, aclMiddleware, familyEnvironmentsController.getAllFamilyEnvironments)
router.post('/familyEnvironments', authMiddleware, aclMiddleware, familyEnvironmentsController.createFamilyEnvironment)
router.get('/familyEnvironments/:id', authMiddleware, aclMiddleware, familyEnvironmentsController.getOneFamilyEnvironment)
router.put('/familyEnvironments/:id', authMiddleware, aclMiddleware, familyEnvironmentsController.updateFamilyEnvironment)
router.delete('/familyEnvironments/:id', authMiddleware, aclMiddleware, familyEnvironmentsController.deleteFamilyEnvironment)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /familyEnvironments/export/cvs
 ** @params    {rows}
 */
router.post('/familyEnvironments/export/cvs', (req, res) => {
  const rows = req.body
  console.log('familyEnvironments exort to cvs')
  console.log({ rows })
  return
})

export default router
