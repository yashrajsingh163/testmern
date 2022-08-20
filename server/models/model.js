const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    default: 1,
  },
  mobile: {
    type: String,
    default: null,
  },
});

const User = mongoose.model("User", UserSchema);

module.exports = User;