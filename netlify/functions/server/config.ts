import 'dotenv/config'
import { config } from 'mssql'
const server = process.env.AZURE_SQL_SERVER||''
const port = Number(process.env.AZURE_SQL_PORT)
const database = process.env.AZURE_SQL_DATABASE
const user = process.env.AZURE_SQL_USER
const password = process.env.AZURE_SQL_PASSWORD

export const connectionString:config= {
  server,
  port,
  database,
  user,
  password,
  options: {
    encrypt: true,
    trustServerCertificate: false,
  },
  pool: {
    max: 10, // maximum number of connections in the pool
    min: 0,  // minimum number of connections in the pool
    idleTimeoutMillis: 30000, // how long a connection is allowed to remain idle in the pool before being closed
  },
}
