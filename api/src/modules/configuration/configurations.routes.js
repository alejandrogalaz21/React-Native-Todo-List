import * as configuration from './configuration.controller'
import authMiddleware from '../../middleware/auth.middleware'
import { Router } from 'express'

const router = new Router()

router.get('/configuration/edit', authMiddleware, configuration.edit)
router.put('/configuration/', authMiddleware, configuration.update)

export default router
