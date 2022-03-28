import path from 'path'
import root from 'app-root-path'
import dotenv from 'dotenv'
import Configuration from './app/configuration/configuration'

dotenv.config()

export const getEnv = () => (dotenv.config().error ? {} : dotenv.config().parsed)

export async function getConfig() {
  const config = await Configuration.findOne({ active: true }).populate('settings.logo').lean()
  if (!config) return {}

  return { ...config }
}

export const env = process.env.NODE_ENV || 'development'

// URL of DB and services
export const urls = {
  sharepoint: process.env.SHAREPOINT_URL
}

// Server general configuration
export const settings = {
  port: process.env.PORT || 5000,
  secret: process.env.SECRET || 'a211221684app',
  expiresIn: process.env.EXPIRES_IN || '1 days',
  clientURL: process.env.CLIENT_URL || ''
}

// Static directories paths
export const paths = {
  public: process.env.PUBLIC_PATH || path.join(root.toString(), 'api', 'public'),
  uploads: process.env.UPLOADS_PATH || path.join(root.toString(), 'api', 'public', 'uploads')
}
