import env from 'dotenv'
import { happyClients } from '../Models/HappyClient.js'

env.config()

export const AddHappyClient = async (req,res) => {
    try{
        const {body} = req
        const responce = await happyClients.create(body)
        if(!responce){
            return res.status(400).send({
                message:'Bad Request'
            })
        }
        return res.status(201).send({
            message:'Client responce added',
            responce
        })
    }catch(err){
        console.log(err);
        return res.status(500).send({
            message:'Internal Server Error'
        })
    }

}