const express =require('express');
const router =express.Router()
const todoController =require('../controller/todoController')


router.get('/', todoController.getTodos)
router.post('/add', todoController.addTodos)
router.post('/delete/:id', todoController.deleteTodos)
router.post('/update/:id', todoController.updateTodos)

module.exports = router;