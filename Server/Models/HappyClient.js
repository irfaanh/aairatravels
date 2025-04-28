import { model, Schema } from "mongoose";

const happySchema = new Schema(
    {
        image:{type:String,required:[true,"Image is Required"],
            unique:[true,"Image must be unique"]
        }
    },
    {
        timestamps:true
    }
)

export const happyClients = model("happyclients", happySchema)