import { Router } from 'express'
import bodyParser from 'body-parser'

const router = new Router()

router.use(bodyParser.json({ limit: '50mb' }))
router.use(bodyParser.urlencoded({ limit: '50mb', extended: false }))

export default router
