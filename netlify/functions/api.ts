import express from 'express'
import {connect} from '../../server/database/connection.ts'
import person from '../../server/router/person.ts'
import serverless from "serverless-http";
// import cors from 'cors'
// //connect to database
// const corsOptions = {
//   origin:'https://main--chimerical-bombolone-a885d6.netlify.app/api/.netlify/functions/api',
//   methods:'GET',
//   credentials:true,
//   optionsSuccessStatus:204
// }


const app = express()
const port = process.env.PORT||3000

app.listen(port, () => {
  console.log('server is running on port', port)
})
// app.use(cors(corsOptions))
app.use('/api/',person)

export const handler = serverless(app)