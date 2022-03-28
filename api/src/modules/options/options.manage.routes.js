import * as manage from './options.manage.controller'
import authMiddleware from '../../middleware/auth.middleware'
import { Router } from 'express'

const router = new Router()

router.get('/options/services', authMiddleware, manage.readServices)
router.get('/options/centers', authMiddleware, manage.readCenters)
router.get('/options/payments', authMiddleware, manage.readPayments)
router.get('/options/modalities', authMiddleware, manage.readModalities)
router.get('/options/classrooms', authMiddleware, manage.readClassrooms)
router.get('/options/classrooms/all', authMiddleware, manage.readAllClassrooms)
router.get('/options/titulars', authMiddleware, manage.readTitulars)
router.get('/options/titulars/all', authMiddleware, manage.readAllTitulars)
router.get('/options/assistants', authMiddleware, manage.readAssistants)
router.get('/options/assistants/all', authMiddleware, manage.readAllAssistants)
router.get('/options/groupAssignments', authMiddleware, manage.readGroupAssignments)
router.get('/options/groups', authMiddleware, manage.readGroups)
router.get('/options/scholarships', authMiddleware, manage.readScholarships)
router.get('/options/percentages', authMiddleware, manage.readPercentages)
router.get('/options/canalizations', authMiddleware, manage.readCanalizations)
router.get('/options/cycles', authMiddleware, manage.readCycles)
router.get('/options/generals', authMiddleware, manage.readGenerals)
router.get('/options/positions', authMiddleware, manage.readPositions)
router.get('/options/costs', authMiddleware, manage.readCosts)
router.get('/options/debts/:id', manage.readDebts)
// router.get('/options/canalizationLocations', authMiddleware, manage.readCanalizationLocations)

export default router
