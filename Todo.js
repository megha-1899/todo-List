const mongoose = require('mongoose')

const TODOSchema = new mongoose.Schema({
    task: String,
    done: {
        type: Boolean,
        default: false,
    }
})

const TODOModel = mongoose.model("Todolist", TODOSchema)
module.exports = TODOModel