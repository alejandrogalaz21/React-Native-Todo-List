import express from 'express'
import compression from 'compression'
import morgan from './middleware/morgan'
import helmet from './middleware/helmet'
import bodyParser from './middleware/bodyParser'
import cors from './middleware/cors'
import cookies from './middleware/cookies'
import swaggerJSDoc from 'swagger-jsdoc'
import swaggerUI from 'swagger-ui-express'
import { options } from './config/swaggerOptions'
import router from './router'

const app = express()
const specs = swaggerJSDoc(options)

// Set Rules
app.set('case sensitive routing', false)
app.set('strict routing', false)
app.set('json spaces', 2)

// Set Middlewares
app.use(compression())
app.use(morgan)
app.use(helmet)
app.use(bodyParser)
app.use(cors)
app.use(cookies)
app.use(express.urlencoded({ extended: true }))

app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs))
app.use(router)

export default app
