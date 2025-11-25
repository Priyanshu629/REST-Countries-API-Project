import express from "express"
import { dbConnect } from "./config/db.js"
import countryRouter from "./routes/country.route.js"
import cors from "cors"


const app = express()


// setting cors
app.use(cors({
    origin:["http://localhost:5173"],
    methods : ["POST","DELETE","PUT","PATCH","GET"]
}))


//setting json middleware
app.use(express.json())


//connection to database
dbConnect()


//setting router 
app.use("/api/country",countryRouter)


//listening
app.listen(process.env.PORT,()=>{
    console.log(`Server is listening on http://localhost:${process.env.PORT}`)
})