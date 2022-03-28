import { Router } from 'express'
import cookieParser from 'cookie-parser'
import cookieSession from 'cookie-session'
import { ENV } from './../config/env'

const router = new Router()

router.use(cookieParser())

// Cookies' sessions for OAuth
router.use(
  cookieSession({
    name: 'session',
    keys: [ENV.SECRET],
    maxAge: 24 * 60 * 60 * 100
  })
)
export default router
