const mongoose = require('mongoose');

const pollSchema = new mongoose.Schema({
  pollTitle: String,
  pollTopics: [{
    title: String,
    votes: Number,
  }],
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
});

module.exports = mongoose.model('Poll', pollSchema);
