import express from 'express'
import { getAllPersons } from '../database/connection'
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
export default router