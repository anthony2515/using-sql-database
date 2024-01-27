import { connectionString } from '../config'
import sql from 'mssql'

interface Person{
  firstName:string,
  lastName:string
}

export async function connect() {
  try {
    await sql.connect(connectionString)
    console.log("Database connected succesfully")
  } catch (e) {
    console.error('Database connection failed', e)
  }
}

export async function getAllPersons(){
  try{
    
    const result = await sql.query("SELECT * FROM Person")
    return result.recordset
  }catch(e){
    console.error("Failed getting all person record",e)
  }
}

export async function insertPerson(data:Person){
  try{
    const result = await sql.query`
    INSERT INTO Person (firstName,lastName)
    VALUES (${data.firstName}, ${data.lastName})`
    return result.rowsAffected
  }catch(e){
    console.error("Failed inserting person",e)
  }
}