import { db } from './db_engine/db'
import {  dbQuery } from './db_engine/dbengine'
import dotenv from 'dotenv'; 
dotenv.config();
const dbInstance = new db( process.env.db_id  )
const main = ( async () =>{
    const res = await dbQuery( dbInstance )
      res.forEach( ( element : any) => {
        console.log( element )
      }) 
  } 
)
main()