import dotenv from 'dotenv'

export const getEnv = () =>
  dotenv.config().error ? {} : dotenv.config().parsed
