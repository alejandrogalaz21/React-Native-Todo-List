import * as oauth from './oauth.controller'
import { Router } from 'express'

const router = new Router()

router.get('/oauth/login/check', oauth.check)
router.get('/oauth/login/failed', oauth.failed)
router.get('/oauth/logout', oauth.logout)

export default router
