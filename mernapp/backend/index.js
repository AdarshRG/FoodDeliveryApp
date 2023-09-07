const express=require('express')
const app=express()
const cors=require('cors')
app.use(cors({orgin:'http://localhost:3000'}))
const db=require('./db')
const port=5000

app.get('/',(req,res)=>{
    res.send("Hello World")
})
app.use(express.json())
app.use("/api",require("./Routes/CreateUser"))
app.listen(port,()=>{
    console.log("..........ems server started.............");
}) 