import env from "dotenv"
import { connect } from "mongoose"

env.config()

export const ConnectToDataBase = async () => {
    try{
        const {connection} = await connect(process.env.CLUSTER_URL,{
            dbName:'Aaira'
        })
        const dataBase = connection.db.databaseName
        console.log("Connected Database : " ,dataBase);
        
    }catch(err){
        console.log(err);
        
    }
}