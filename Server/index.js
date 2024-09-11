import express, { json } from 'express'
import { connect } from 'mongoose'
import cors from 'cors'
import { find, findByIdAndUpdate, findByIdAndDelete, create } from './Models/Todo'

const app = express()
app.use(cors())
app.use(json())

connect('mongodb+srv://padsalgimegha:WRXFYuyKNmoFZora@cluster0.xiyqr.mongodb.net/Todo')

app.get('/get', (req,res) => {
    find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.put('/update/:id', (req,res) => {
    const {id} = req.params;
    findByIdAndUpdate({_id: id}, {done: true})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.delete('/delete/:id', (req,res) => {
    const {id} = req.params;
    findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})

app.post('/add', (req,res) => {
    const task = req.body.task;
    create({
        task: task
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("Server is working perfectly")
})