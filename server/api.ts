import express from 'express'
import {connect} from './database/connection.ts'
import person from './router/person.ts'
import serverless from "serverless-http";
//connect to database
connect()


const app = express()
const port = 3000

app.listen(port, () => {
  console.log('server is running on port', port)
})

app.use('/api/',person)

export const handler = serverless(app)