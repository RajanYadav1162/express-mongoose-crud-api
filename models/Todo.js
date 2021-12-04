const mongoose = require('mongoose')
const TodoSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true,

    },
    isCompleted: {
        type: Boolean,
        default: false,
    },

    createAt: {
        type: Date,
        default: Date.now()
    }
})

const Todo = mongoose.model('Todo', TodoSchema)
module.exports = Todo;