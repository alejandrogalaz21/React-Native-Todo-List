import { Router } from 'express'
import * as familyFoliosController from './familyFolios.controller'
import aclMiddleware from '../../../middleware/aclMiddleware'
import authMiddleware from '../../../middleware/auth.middleware'


const router = new Router()

//* C.R.U.D ROUTES *//
router.get('/familyFolios', authMiddleware, aclMiddleware, familyFoliosController.getAllFamilyFoliosPagination)
router.get('/familyFolios/all', authMiddleware, aclMiddleware, familyFoliosController.getAllFamilyFolios)
router.post('/familyFolios', authMiddleware, aclMiddleware, familyFoliosController.createFamilyFolio)
router.get('/familyFolios/:id', authMiddleware, aclMiddleware, familyFoliosController.getOneFamilyFolio)
router.put('/familyFolios/:id', authMiddleware, aclMiddleware, familyFoliosController.updateFamilyFolio)
router.delete('/familyFolios/:id', authMiddleware, aclMiddleware, familyFoliosController.deleteFamilyFolio)

export default router
