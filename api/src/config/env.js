import dotenv from 'dotenv'
dotenv.config()

const {
  PORT,
  MONGO_DB_HOST,
  MONGO_DB_NAME,
  MONGO_DB_USER,
  MONGO_DB_PASSWORD,
  SECRET
} = process.env

export const ENV = {
  PORT,
  SECRET,
  MONGO_DB_HOST,
  MONGO_DB_NAME,
  MONGO_DB_USER,
  MONGO_DB_PASSWORD
}
