const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  pollTitle: String,
  pollTopics: [{
    title: String,
    votes: Number,
  }],
  createdBy: String,
});

module.exports = mongoose.model('Poll', pollSchema);
