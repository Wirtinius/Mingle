const mongoose = require('mongoose');

const Meeting = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  partnerId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  locationId: {
    type: mongoose.Schema.Types.ObjectId, 
    ref: "Place",
    required: true,
  },
  dateTime: {
    type: Date
  },
  status: {
    type: String,
    required: true,
    default: "In Progress"
  }, 
  dateCreated: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Date', Meeting);
