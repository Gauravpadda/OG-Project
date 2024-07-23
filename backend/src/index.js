import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser"

dotenv.config();

const app=express();

app.use(cors())

app.use(express.json({
    limit : "16kb"
}))
app.use(express.urlencoded({
    extended: true,
    limit : "16kb"
}))
app.use(cookieParser()) 

app.listen(process.env.PORT,()=>{
    console.log(`Server is running on port ${process.env.PORT}`)
})
