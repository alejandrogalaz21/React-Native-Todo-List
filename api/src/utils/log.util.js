import chalk from 'chalk'

const log = console.log
const error = chalk.bold.red
const warning = chalk.keyword('orange')
const success = chalk.green

export const logError = logMessage => log(error(logMessage))
export const logWarning = logMessage => log(warning(logMessage))
export const logSuccess = logMessage => log(success(logMessage))
