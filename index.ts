import { db } from './db_engine/db'
import { dbRtrieve } from './db_engine/dbengine'
const dbInstance = new db( '490a9f93ceb7402e8c51167ed5563a7e' )
const main = ( async () =>{
    const res = await dbRtrieve( dbInstance )
    console.log( res )
  } 
)
console.log( main() )