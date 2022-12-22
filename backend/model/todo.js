const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
  title: {
    type: String,
    default: undefined,
    required: [true, 'Give your todo a title'],
    lowercase: true,
    trim: true,
  },

  date: {
    type: Date,
    default: new Date(),
  },

  tasks: {
    type: [String],
    default: undefined,
  },
});

module.exports = mongoose.model('todo', todoSchema);
