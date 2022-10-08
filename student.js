const express = require('express')
const mongoose = require('mongoose')

const Stuschema = mongoose.Schema({
    rollno:{
        type:String,
        required:true
    },
    name:{
        type:String,
        required:true
    },
    scholarship:{
        type:Boolean,
        required:true,
        default:false
    }

})

module.exports=mongoose.model('student1', Stuschema)