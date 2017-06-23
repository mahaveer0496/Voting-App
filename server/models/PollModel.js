const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  poll: String,
  topics: [{
    title: String,
    votes: Number,
  }],
});

module.exports = mongoose.model('Poll', pollSchema);
