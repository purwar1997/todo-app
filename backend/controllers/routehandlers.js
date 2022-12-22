const Todo = require('../model/todo');

exports.home = (req, res) => {
  res.status(201).send('<h1 style="text-align: center">Todo App</h1>');
};

exports.getTodos = async (req, res) => {
  try {
    const todos = await Todo.find();

    res.status(201).json({
      success: true,
      message: 'All the todos have been successfully fetched',
      todos,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
  } catch (err) {}
};

exports.getTodo = async (req, res) => {};

exports.deleteTodo = async (req, res) => {};

exports.createTask = async (req, res) => {};

exports.editTask = async (req, res) => {};

exports.deleteTask = async (req, res) => {};
