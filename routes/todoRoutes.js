const express = require('express')
const {addTodo, getAllTodos, editTodo, deleteTodo} = require('../controllers/todoControllers')
const Router = express.Router();

Router.get('/', getAllTodos)

Router.post('/', addTodo)

Router.put('/:todoID', editTodo)

Router.delete('/:todoID', deleteTodo)

module.exports = Router;