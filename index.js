const express = require('express')
const mongoose  = require('mongoose')
const index = express()
const url = 'mongodb://localhost/stuDB'

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',function(){
    console.log("connected to database")
})
index.use(express.json())
const stuRouter = require('./routes/students')
index.use('/students', stuRouter)

index.listen(9000, ()=>{
    console.log("hello world")
    console.log("server started")
})