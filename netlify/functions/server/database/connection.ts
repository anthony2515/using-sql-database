import { connectionString } from '../config'
import sql from 'mssql'

interface Person{
  firstName:string,
  lastName:string
}

export async function connect() {
  try {
    const pool =  await sql.connect(connectionString)
    console.log("Database connected succesfully")
    return pool
  } catch (e) {
    console.error('Database connection failed', e)
    throw e
  }
}

export async function getAllPersons(){
  let pool
  try{
    pool = await connect()
    const result = await pool.request().query("SELECT * FROM Person")
    return result.recordset
  }catch(e){
    console.error("Failed getting all person record",e)
    throw e
  }finally{
    if(pool){
      pool.close()
    }
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