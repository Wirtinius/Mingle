const User = require('../models/userModel');

exports.createUser = async (req, res) => {
  try {
    const { name, surname, age, email, nationality, password } = req.body;
    const newUser = new User({ name, surname, age, email, nationality, password });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};

exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    console.error(error.message);
    res.status(500).send('Server Error');
  }
};
