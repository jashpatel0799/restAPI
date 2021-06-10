let express = require('express')
let router = express.Router()
let Student = require('../models/student')

router.get('/', async(req, res) => {
    try{
        let student = await Student.find()
        res.json(student)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.get('/:id', async(req, res) => {
    try{
        let student = await Student.findById(req.params.id)
        res.json(student)
    }catch(err){
        res.send('Error: ' + err)
    }
})

router.post('/', async(req, res) => {
    let student = new Student({
        enrollment: parseInt(req.body.enrollment),
        name: req.body.name,
        contact_no: parseInt(req.body.contact_no),
        gender: req.body.gender,
        birth: req.body.birth,
        qualification: req.body.qualification,
        result: req.body.result,
        event_info: req.body.event_info
    })
    try{
        await student.save()
        res.send("Data insert successfully.")
    }catch(err){
        res.send('Error: ' + err.message())
    }
})

router.patch('/:id', async(req, res) => {
    try{
        let student = await Student.findById(req.params.id)
        student.name = req.body.name
        let s1 = await student.save()
        res.send("Updated Successfully.")
    }catch(err){
        res.send("Error: " + err)
    }
})

router.delete('/:id', async(req, res) => {
    try{
        let student = await Student.findByIdAndRemove(req.params.id)
        res.send("Deleted Successfully.")
    }catch(err){
        res.send("Error: " + err)
    }
})

module.exports = router