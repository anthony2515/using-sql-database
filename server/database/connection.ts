import { connectionString } from '../config'
import sql from 'mssql'


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
    return result
  }catch(e){
    console.error("Failed getting all person record",e)
  }
}