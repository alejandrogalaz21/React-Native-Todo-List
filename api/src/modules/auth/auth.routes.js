import * as auth from './auth.controller'
import authMiddleware from '../../middleware/auth.middleware'
import { Router } from 'express'

const router = new Router()

router.post('/auth/login', auth.login)
router.put('/auth/logout/:id', auth.logout)
router.post('/auth/request-recover-password', auth.requestRecoverPassword)
router.post('/auth/recover-password', auth.recoverPassword)
router.post('/auth/reset-password', authMiddleware, auth.resetPassword)

export default router
