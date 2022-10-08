const express = require('express')
const router = new express.Router()
const student1 = require('../models/student')

router.get('/', async(req, res) =>{
    try{
        const s1 = await student1.find()
        res.json(s1)
    }catch(err){
        res.send('error' +err)
    }
})

router.post('/', async(req, res) =>{
    const Student2 = new student1({
        rollno:req.body.rollno,
        name:req.body.name,
        scholarship:req.body.scholarship
    })
    try{
        const s3 = await Student2.save()
        res.json(s3)
    }
    catch(err)
    {
        res.send('error' +err)
    }
})

module.exports = router