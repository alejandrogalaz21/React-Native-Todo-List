import '@babel/polyfill'
import http from 'http'
import app from './app'
import chalk from 'chalk'
import { ENV } from './config/env'
import { mongodbConnection } from './config/mongodb.connection'

export const httpServer = http.Server(app).listen(ENV.PORT, async () => {
  try {
    await mongodbConnection(ENV.MONGO_DB_HOST, ENV.MONGO_DB_NAME)
    console.log(chalk.green('Server started:'))
    console.log(chalk.yellow(`http://localhost:${ENV.PORT}/api`))
  } catch (error) {
    console.error(error)
  }
})
