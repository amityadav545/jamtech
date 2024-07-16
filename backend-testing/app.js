const express=require("express")
const mongoose=require("mongoose")
const bodyParser=require("body-parser")
const cors=require("cors")
const dotenv=require("dotenv")
dotenv.config()
PORT=process.env.PORT || 3002
const app=express()
app.use(bodyParser.json())
app.use(cors())
mongoose.connect(process.env.DATABASE).then(()=>{
console.log("database is connected")
}).catch((error)=>{
console.log(error);
})
app.get("/",(req,res)=>{
res.send("server is running")
})
const userRoute=require("./routes/userroute")
const authRoute=require("./routes/authroute")
app.use("/api/user",userRoute)
app.use("/api/authuser",authRoute)

app.listen(PORT,()=>{
    console.log(`server is running on ${PORT}`)
})

