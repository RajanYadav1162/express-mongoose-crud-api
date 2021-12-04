const Todo = require('../models/Todo')
const addTodo = async (req, res) => {

    const {title, isCompleted = false} = req.body;
    const newTodo = {title, isCompleted};
    try {
        const result = await Todo.create(newTodo)
        if (result) {
            return res.status(200).send(result)
        } else {
            return res.send({msg: 'Please try again later', error: true})
        }
    } catch (err) {
        console.log('Error while creating new todo', err)
        return res.send({msg: 'Please try again later', error: true})
    }
}

const getAllTodos = async (req, res) => {
    try {
        const result = await Todo.find({})
        if (result) {
            return res.status(200).send(result)
        } else {
            return res.send({msg: 'Please try again later', error: true})
        }
    } catch (err) {
        console.log('Error while fetching all todos', err)
        return res.send({msg: 'Please try again later', error: true})
    }
}

const editTodo = async (req, res) => {

    const {todoID} = req.params;
    const {title, isCompleted = false} = req.body;
    try {
        const targetTodo = await Todo.findOne({_id: todoID})
        if (targetTodo) {
            const updatedTodo = await targetTodo.updateOne({title, isCompleted})
            return res.status(200).send(updatedTodo)
        } else {
            return res.send({msg: `Todo with ID : ${todoID} is not found. `, error: true})
        }
    } catch (err) {
        return res.send({msg: `Todo with ID : ${todoID} is not found. `, error: true})
    }
}
const deleteTodo = async (req, res) => {
    const {todoID} = req.params;
    try {
        const targetTodo = await Todo.findOne({_id: todoID})
        if (targetTodo) {
            const deletedTodo = await targetTodo.deleteOne()
            return res.status(200).send(deletedTodo)
        } else {
            return res.send({msg: `Todo with ID : ${todoID} is not found. `, error: true})
        }
    } catch (err) {
        return res.send({msg: `Todo with ID : ${todoID} is not found. `, error: true})
    }
}
module.exports = {addTodo, getAllTodos, editTodo, deleteTodo}