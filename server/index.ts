import express from 'express'
import {connect} from './database/connection.ts'
import person from './router/person.ts'

//connect to database
connect()


const app = express()
const port = 3000

app.listen(port, () => {
  console.log('server is running on port', port)
})

app.use('/',person)
