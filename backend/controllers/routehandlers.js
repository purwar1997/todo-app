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
      message: 'Cannot fetch todos',
    });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title } = req.body;

    if (!title) {
      throw new Error('Title is required');
    }

    const newTodo = await Todo.create({ title });

    res.status(201).json({
      success: true,
      message: 'A new todo has been successfully created',
      newTodo,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

exports.getTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.todoId);

    res.status(201).json({
      success: true,
      message: 'Todo has been successfully fetched',
      todo,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Cannot fetch todo',
    });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    await Todo.findByIdAndDelete(req.params.todoId);

    res.status(201).json({
      success: true,
      message: 'Todo has been successfully deleted',
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Cannot delete todo',
    });
  }
};

exports.addTask = async (req, res) => {
  try {
    let { newTask } = req.body;

    if (!newTask) {
      throw new Error('Task is required');
    }

    newTask = newTask.toLowerCase();
    let todo = await Todo.findById(req.params.todoId);

    if (todo.tasks.some(task => task === newTask)) {
      throw new Error('This task already exists. Please enter a new task.');
    }

    todo.tasks.push(newTask);
    todo = await todo.save();

    res.status(201).json({
      success: true,
      message: 'Task added successfully',
      todo,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

exports.editTask = async (req, res) => {
  try {
    let { task, newTask } = req.body;

    if (!newTask) {
      throw new Error('Task is required');
    }

    newTask = newTask.toLowerCase();
    let todo = await Todo.findById(req.params.todoId);

    if (todo.tasks.some(task => task === newTask)) {
      throw new Error('This task already exists. Please enter a new task');
    }

    const index = todo.tasks.indexOf(task);
    todo.tasks.splice(index, 1, newTask);
    todo = await todo.save();

    res.status(201).json({
      success: true,
      message: 'Task updated successfully',
      todo,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};

exports.deleteTask = async (req, res) => {
  try {
    let { task } = req.body;
    let todo = await Todo.findById(req.params.todoId);

    const index = todo.tasks.indexOf(task);
    todo.tasks.splice(index, 1);
    todo = await todo.save();

    res.status(201).json({
      success: true,
      message: 'Task deleted successfully',
      todo,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: 'Cannot delete task',
    });
  }
};

exports.editTitle = async (req, res) => {
  try {
    let { newTitle } = req.body;

    if (!newTitle) {
      throw new Error('Title is required');
    }

    let todo = await Todo.findById(req.params.todoId);
    todo.title = newTitle;
    todo = await todo.save();

    res.status(201).json({
      success: true,
      message: 'Title has been successfully updated',
      todo,
    });
  } catch (err) {
    res.status(401).json({
      success: false,
      message: err.message,
    });
  }
};
