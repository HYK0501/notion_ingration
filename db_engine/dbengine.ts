import { notion } from '../notion_clinet/notion_clinet'
import { db } from './db'
export function dbRtrieve( dbInstance : db ){
        return notion.databases.retrieve( // return promise
                dbInstance
            )
            .then( ( data ) => {
                return Object.entries( data.properties )
            } )
            .catch( (err) => {
                console.error(err);
                return err;
            } )      
    }
function getItemMap( item : any ){
    let map = new Map( Object.entries( item.properties) )
    let mapResult : Map< string , any > = new Map() 
    map.forEach( (  value : any , key : string ) => {
            if( value.type == "title" ){
                let titleStr = ""
                value.title.forEach( ( text : any ) => {
                    titleStr = titleStr.concat( text.plain_text )
                });
                mapResult.set( key , titleStr )
            }else{
                mapResult.set( key , value[ value.type ] )
            }
        }
    )
    return mapResult 
}
export function dbQuery( dbInstance : db ){
        return notion.databases.query( // return promise
                {
                    database_id: dbInstance.database_id ,
                }
            )
            .then( ( row ) => {
                    return row.results.map( getItemMap )
                } 
            )
            .catch( (err) => {
                    console.error(err);
                    return err;
                } 
            )      
    }