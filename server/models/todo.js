const mongoose = require("mongoose");

const TodoSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  creation: {
    type: String,
    default: null,
    required: true,

  },
  edit: {
    type: String,
    default: null,
  },
  expire: {
    type: String,
    default: null,
    required: true,

  },
  status: {
    type: String,
    default: null,
    required: true,
  },
  user: {
    type: String,
    default: null,
    required: true,
  }
});

const Todo = mongoose.model("todos", TodoSchema);

module.exports = Todo;