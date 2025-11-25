import {connect} from "mongoose";

export const dbConnect = ()=> connect(process.env.DB_URL).then(()=>{
    console.log("DB connected successfully")
}).catch((error)=>{
    console.log(error.message)
})