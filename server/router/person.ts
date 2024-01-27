import express from 'express'
import { getAllPersons, insertPerson,connect } from '../database/connection'
const router = express.Router()
router.use(express.json())

//app.use('/',person)
router.get('/.netlify/functions/api',async(req,res)=>{
 
  try{
    
    const response = await getAllPersons()
    if(response){res.send(response)}else{res.send("failed getting al persons")}
    
    console.log("asdf",response)
    
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