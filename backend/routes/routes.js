const express = require('express');
const router = express.Router();

const {
  home,
  getTodos,
  createTodo,
  getTodo,
  deleteTodo,
  addTask,
  editTask,
  deleteTask,
  editTitle,
} = require('../controllers/routehandlers');

router.get('/', home);
router.get('/getTodos', getTodos);
router.post('/createTodo', createTodo);
router.get('/getTodo/:todoId', getTodo);
router.delete('/deleteTodo/:todoId', deleteTodo);
router.put('/addTask/:todoId', addTask);
router.put('/editTask/:todoId', editTask);
router.put('/deleteTask/:todoId', deleteTask);
router.put('/editTitle/:todoId', editTitle);

module.exports = router;
