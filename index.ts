import { db } from './db_engine/db'
import { dbRtrieve , dbQuery } from './db_engine/dbengine'
const dbInstance = new db( '490a9f93ceb7402e8c51167ed5563a7e' )
const main = ( async () =>{
    const res = await dbQuery( dbInstance )
      res.forEach( ( element : any) => {
        console.log( element )
      }) 
  } 
)
main()