const mongoose = require('mongoose');

const ipSchema = new mongoose.Schema({
  ip: String,
  topics: [{
    topicId: mongoose.Schema.Types.ObjectId,
    hasVoted: Boolean,
  }],

});

module.exports = mongoose.model('Ip', ipSchema);