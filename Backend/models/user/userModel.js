const mongoose = require('mongoose');

const User = new mongoose.Schema({
  username: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true,
  },
  surname: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  // gender: {
  //   type: String,
  //   required: true,
  //   enum: ["male", "female"]
  // },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  nationality: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  profilePic: {
    type: String,
    default: ""
  },
  roles: [{
    type: String,
    ref: 'Role'
  }],
  verified: {
    type: Boolean,
    default: false,
  },
}, {timestamps: true});

module.exports = mongoose.model('User', User);
