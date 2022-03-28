import { Router } from 'express'
import * as academicLevelsController from './academicLevels.controller'
import authMiddleware from '../../../middleware/auth.middleware'

const router = new Router()

//* C.R.U.D ROUTES *//
router.get('/academicLevels/all', authMiddleware, academicLevelsController.getAllAcademicLevels)
router.get('/academicLevels/:id', authMiddleware, academicLevelsController.getOneAcademicLevel)

export default router
