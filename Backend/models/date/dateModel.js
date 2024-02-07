const mongoose = require('mongoose');

const Meeting = new mongoose.Schema({
  userId: {
    type: Number,
    required: true
  },
  partnerId: {
    type: Number,
    required: true,
  },
  location: {
    type: String, 
    required: true,
  },
  dateTime: {
    type: Date
  },
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Date', Meeting);
