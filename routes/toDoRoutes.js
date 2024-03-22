const express = require('express');
const router = express.Router();

const { getToDos, createToDos, updateToDos, deleteToDo } = require('../controllers/toDos');


router.get('/all', getToDos);
router.post('/create',createToDos);
router.put('/update/:id',updateToDos);
router.delete('/delete/:id',deleteToDo);


module.exports = router