import express from 'express'
import { getAllPersons, insertPerson,connect } from '../database/connection'
import cors from 'cors'
//connect to database
const corsOptions = {
  origin:'https://main--chimerical-bombolone-a885d6.netlify.app/api/.netlify/functions/api',
  methods:'GET',
  credentials:true,
  optionsSuccessStatus:204
}
const router = express.Router()
router.use(cors(corsOptions))
router.use(express.json())

//app.use('/',person)
router.get('/.netlify/functions/api',async(req,res)=>{
 
  try{
    
    const response = await getAllPersons()
    res.json(response)
  }catch(e){
    res.status(500).json("failed getting all persons")
  }
})
router.post('/', async(req,res)=>{
  try{
    const person = req.body
    const result = {
      firstName:person.firstName,
      lastName:person.lastName
    }
    const response = await insertPerson(result)
    res.status(200).send(response)
  }catch(e){
    res.status(500).json("Internal Server Error")
  }
})
export default router