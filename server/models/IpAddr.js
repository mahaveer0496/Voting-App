const mongoose = require('mongoose');

const ipSchema = new mongoose.Schema({
  ip: String,
  hasVoted: Boolean,
  expires_at: {
    type: Date,
    default: Date.now,
    expires: 20,
  },
});

module.exports = mongoose.model('Ip', ipSchema);
