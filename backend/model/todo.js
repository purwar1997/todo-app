const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    default: undefined,
    unique: true,
    required: [true, 'Title is required'],
    lowercase: true,
    trim: true,
  },

  date: {
    type: String,
    default: new Date().toString(),
  },

  tasks: {
    type: [String],
  },
});

module.exports = mongoose.model('todo', todoSchema);
