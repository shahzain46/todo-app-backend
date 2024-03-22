const toDoModel = require('../models/TodoModel');

const getToDos = async (req,res) => {
    const toDos = await toDoModel.find()
    res.status(200).send(toDos)
}

const createToDos = async (req,res) => {
    const toDo = req.body

    await toDoModel.create(toDo)
    res.status(200).send('todo created success')
}

const updateToDos = async (req,res) => {
    const {id: todoId} = req.params

    todo = req.body

    await toDoModel.findOneAndUpdate({ _id: todoId}, todo)

    res.status(200).send('todo updated success')

}

const deleteToDo = async (req , res) =>{
    const {id: todoId} = req.params

    await toDoModel.findOneAndDelete({_id: todoId});

    res.status(200).send('todo delete success');
}



module.exports = {getToDos, createToDos, updateToDos, deleteToDo}