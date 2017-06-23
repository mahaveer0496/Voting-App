const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    minlength: 5,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
