import { Router } from 'express'
import aclMiddleware from '../../../middleware/aclMiddleware'
import authMiddleware from '../../../middleware/auth.middleware'
import * as nutritionsController from './nutritions.controller'

const router = new Router()

//* C.R.U.D ROUTES *//
router.get('/nutritions', authMiddleware, aclMiddleware, nutritionsController.getAllNutritionsPagination)
router.get('/nutritions/all', authMiddleware, aclMiddleware, nutritionsController.getAllNutritions)
router.post('/nutritions', authMiddleware, aclMiddleware, nutritionsController.createNutrition)
router.get('/nutritions/:id', authMiddleware, aclMiddleware, nutritionsController.getOneNutrition)
router.put('/nutritions/:id', authMiddleware, aclMiddleware, nutritionsController.updateNutrition)
router.delete('/nutritions/:id', authMiddleware, aclMiddleware, nutritionsController.deleteNutrition)

export default router
