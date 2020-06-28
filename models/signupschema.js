const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const signupschema = new Schema({
  name: {
    type: String,
    minlength: 3,
  },
  email: {
    unique: true,
    type: String,
  },
  password: {
    type: String,
    minlength: 6,
  },
});

const User = mongoose.model("User", signupschema);

module.exports = User;
