import { Router } from 'express'
import * as partnerDocumentationsController from './partnerDocumentations.controller'
import aclMiddleware from './../../../middleware/aclMiddleware'
import authMiddleware from './../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//
router.get('/partnerDocumentations/infant/:infantId', authMiddleware, aclMiddleware, partnerDocumentationsController.getAllPartnerDocumentationsPagination)
router.get('/partnerDocumentations/all', authMiddleware, aclMiddleware, partnerDocumentationsController.getAllPartnerDocumentations)
router.post('/partnerDocumentations', authMiddleware, aclMiddleware, partnerDocumentationsController.createPartnerDocumentation)
router.get('/partnerDocumentations/:id', authMiddleware, aclMiddleware, partnerDocumentationsController.getOnePartnerDocumentation)
router.put('/partnerDocumentations/:id', authMiddleware, aclMiddleware, partnerDocumentationsController.updatePartnerDocumentation)
router.delete('/partnerDocumentations/:id', authMiddleware, aclMiddleware, partnerDocumentationsController.deletePartnerDocumentation)

// TODO work in progress
//* OTHER ROTES (EXPORT, REPORTS, ETC...) *//

/**
 ** @desc      export to cvs the selected rows
 ** @access    Private
 ** @route     POST /partnerDocumentations/export/cvs
 ** @params    {rows}
 */
router.post('/partnerDocumentations/export/cvs', (req, res) => {
  const rows = req.body
  console.log('partnerDocumentations exort to cvs')
  console.log({ rows })
  return
})

export default router
