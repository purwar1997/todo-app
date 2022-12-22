const express = require('express');
const router = express.Router();

const {
  home,
  getTodos,
  createTodo,
  getTodo,
  deleteTodo,
  createTask,
  editTask,
  deleteTask,
} = require('../controllers/routehandlers');

router.get('/', home);
router.get('/getTodos', getTodos);
router.post('/createTodo', createTodo);
router.get('/getTodo/:todoId', getTodo);
router.delete('/deleteTodo/:todoId', deleteTodo);
router.put('/createTask/:todoId', createTask);
router.put('/editTask/:todoId', editTask);
router.put('/deleteTask/:todoId', deleteTask);

module.exports = router;
