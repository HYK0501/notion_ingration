import { notion } from '../notion_clinet/notion_clinet'
import { db } from './db'
export function dbRtrieve( dbInstance : db ){
        return notion.databases.retrieve( // return promise
                dbInstance
            ).catch( (err) => {
                console.error(err);
                return err;
            } )      
    }