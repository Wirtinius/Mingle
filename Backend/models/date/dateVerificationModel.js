const mongoose = require('mongoose');

const Verification = new mongoose.Schema({
    status: {
        type: String,
        required: true,
        default: "In Progress"
    }, 
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

module.exports = mongoose.model('dateVerification', Verification);
