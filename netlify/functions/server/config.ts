import 'dotenv/config'
import { config } from 'mssql'
const server = process.env.AZURE_SQL_SERVER||''
// const port = Number(process.env.AZURE_SQL_PORT)
const database = process.env.AZURE_SQL_DATABASE
const user = process.env.AZURE_SQL_USER
const password = process.env.AZURE_SQL_PASSWORD

export const connectionString:config= {
  server,
  // port,
  database,
  user,
  password,
  options: {
    encrypt: true,
  },
}
