import { Router } from 'express'
import * as partnerAilmentsController from './partnerAilments.controller'
import aclMiddleware from './../../../middleware/aclMiddleware'
import authMiddleware from './../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//
router.get('/partnerAilments/infant/:infantId', authMiddleware, aclMiddleware, partnerAilmentsController.getAllPartnerAilmentsPagination)
router.get('/partnerAilments/all', authMiddleware, aclMiddleware, partnerAilmentsController.getAllPartnerAilments)
router.post('/partnerAilments', authMiddleware, aclMiddleware, partnerAilmentsController.createPartnerAilment)
router.get('/partnerAilments/:id', authMiddleware, aclMiddleware, partnerAilmentsController.getOnePartnerAilment)
router.put('/partnerAilments/:id', authMiddleware, aclMiddleware, partnerAilmentsController.updatePartnerAilment)
router.delete('/partnerAilments/:id', authMiddleware, aclMiddleware, partnerAilmentsController.deletePartnerAilment)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /partnerAilments/export/cvs
 ** @params    {rows}
 */
router.post('/partnerAilments/export/cvs', (req, res) => {
  const rows = req.body
  console.log('partnerAilments exort to cvs')
  console.log({ rows })
  return
})

export default router
