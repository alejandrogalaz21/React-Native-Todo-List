import { Router } from 'express'
import * as healthsController from './healths.controller'
import aclMiddleware from './../../../middleware/aclMiddleware'
import authMiddleware from './../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//
router.get('/healths', authMiddleware, aclMiddleware, healthsController.getAllHealthsPagination)
router.get('/healths/all', authMiddleware, aclMiddleware, healthsController.getAllHealths)
router.post('/healths', authMiddleware, aclMiddleware, healthsController.createHealth)
router.get('/healths/:id', authMiddleware, aclMiddleware, healthsController.getOneHealth)
router.put('/healths/:id', authMiddleware, aclMiddleware, healthsController.updateHealth)
router.delete('/healths/:id', authMiddleware, aclMiddleware, healthsController.deleteHealth)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /healths/export/cvs
 ** @params    {rows}
 */
router.post('/healths/export/cvs', (req, res) => {
  const rows = req.body
  console.log('healths exort to cvs')
  console.log({ rows })
  return
})

export default router
