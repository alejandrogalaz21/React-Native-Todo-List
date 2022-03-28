import { config as dotenv } from 'dotenv'
dotenv()

export const ENV = {
  PORT: process.env.PORT,
  SECRET: process.env.SECRET,
  MONGO_DB_HOST: process.env.MONGO_DB_HOST,
  MONGO_DB_NAME: process.env.MONGO_DB_NAME,
  MONGO_DB_PASSWORD: process.env.MONGO_DB_PASSWORD,
  MONGO_DB_USER: process.env.MONGO_DB_USER,
  MYSQL_DB_HOST: process.env.MYSQL_DB_HOST,
  MYSQL_DB_NAME: process.env.MYSQL_DB_NAME,
  MYSQL_DB_PASSWORD: process.env.MYSQL_DB_PASSWORD,
  MYSQL_DB_USER: process.env.MYSQL_DB_USER
}
