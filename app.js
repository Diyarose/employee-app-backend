const express=require("express")
const mongoose=require("mongoose")
const cors=require("cors")
const employee=require("./models/employee")
const app=express()
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Add")
})

app.get("/search",(req,res)=>{
    res.send("Search")
})

app.get("/delete",(req,res)=>{
    res.send("Delete")
})

app.get("/view",(req,res)=>{
    res.send("View")
})

app.listen(8080,()=>{
    console.log("Server Started")
})