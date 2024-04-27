import { notion } from '../notion_clinet/notion_clinet'
import { db } from './db'
export async function dbRtrieve( dbInstance : db ){
    const response = await notion.databases.retrieve(
       dbInstance
    )
    console.log(response);
}