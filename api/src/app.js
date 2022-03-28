import '@babel/polyfill'
import express from 'express'
import compression from 'compression'
import passport from 'passport'

// middleware
import morgan from './middleware/morgan'
import helmet from './middleware/helmet'
import bodyParser from './middleware/bodyParser'
import cors from './middleware/cors'
import cookies from './middleware/cookies'
import {
  genericErrorHandler,
  notFound,
  appErrorHandler
} from './middleware/error.middleware'
import { CustomEvents } from './events'

import router from './router'
// import { httpServer } from './server'

// Create express instance's
const app = express()

// makes /foo and /Foo the same
app.set('case sensitive routing', false)
// makes /foo and /foo/ the same
app.set('strict routing', false)
import './middleware/jwtMiddleware'
import './middleware/oauth'
// # of spaces to indent prettified json
app.set('json spaces', 2)

// setup all the config of the app
app.use(compression())
app.use(morgan)
app.use(helmet)
app.use(bodyParser)
app.use(cors)
app.use(cookies)
app.use(passport.initialize())
app.use(passport.session())
app.use(express.urlencoded({ extended: true }))
// set up the router
app.use(router)

app.use(appErrorHandler)
app.use(genericErrorHandler)
app.use(notFound)

// set up custom error handler
// app.use(errorCentralHandler)

const events = new CustomEvents(app)
events.listenNotification()

export default app
