const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  userName: String,
  email: {
    type: String,
    unique: true,
    lowercase: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  polls: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Poll',
  }],
});

module.exports = mongoose.model('User', userSchema);
