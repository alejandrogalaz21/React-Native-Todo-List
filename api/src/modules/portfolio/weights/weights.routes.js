import { Router } from 'express'
import * as weightsController from './weights.controller'
import aclMiddleware from './../../../middleware/aclMiddleware'
import authMiddleware from './../../../middleware/auth.middleware'


const router = new Router()

//* C.R.U.D ROUTES *//
router.get('/weights/infant/:infantId', authMiddleware, aclMiddleware, weightsController.getAllWeightsPagination)
router.get('/weights/all', authMiddleware, aclMiddleware, weightsController.getAllWeights)
router.post('/weights', authMiddleware, aclMiddleware, weightsController.createWeight)
router.get('/weights/:id', authMiddleware, aclMiddleware, weightsController.getOneWeight)
router.put('/weights/:id', authMiddleware, aclMiddleware, weightsController.updateWeight)
router.delete('/weights/:id', authMiddleware, aclMiddleware, weightsController.deleteWeight)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /weights/export/cvs
 ** @params    {rows}
 */
router.post('/weights/export/cvs', (req, res) => {
  const rows = req.body
  console.log('weights exort to cvs')
  console.log({ rows })
  return
})

export default router
