const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const TODOModel = require('./Models/Todo')

const app = express()
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb+srv://padsalgimegha:WRXFYuyKNmoFZora@cluster0.xiyqr.mongodb.net/Todo')

app.get('/get', (req,res) => {
    TODOModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req,res) => {
    const {id} = req.params;
    TODOModel.findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req,res) => {
    const {id} = req.params;
    TODOModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req,res) => {
    const task = req.body.task;
    TODOModel.create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is working perfectly")
})