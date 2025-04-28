import express from 'express'
import env from 'dotenv'
import { ConnectToDataBase } from './Config/dataBase.config.js'
import cors from 'cors'
import { AdminRoute } from './Routes/AdminRoutes.js'

env.config()

await ConnectToDataBase()

const app = express()

app.use(express.json())

app.use("/assets", express.static("./assets"))

app.use(cors())

app.use('/admin',AdminRoute)


app.listen(process.env.PORT || 8080 , (err) => {
    if(err){
        return process.exit(1)
    }
    console.log(`Server Running on ${process.env.PORT}`);
})


