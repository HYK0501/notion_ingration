export class  db {
    database_id : string 
    constructor( database_id : string | undefined ){
        this.database_id = database_id as string
    }
}