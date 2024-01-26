import express from 'express'
import { getAllPersons, insertPerson } from '../database/connection'
const router = express.Router()
router.use(express.json())
//api/v1/persons
router.get('/',async(req,res)=>{

  try{
    const response = await getAllPersons()
    console.log("asdf",response)
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