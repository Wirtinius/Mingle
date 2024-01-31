const User = require('../models/userModel')
const Role = require('../models/roleModel')
const bcrypt = require('bcryptjs')

class userController {

  async registration (req, res) {
    try {
        const {username, name, surname, age, email, nationality, password} = req.body
        const candidate = await User.findOne({username})
        if (candidate) {
          return res.status(400).json({message: "User with this name has already been registered!"})
        }
        const hashPassword = bcrypt.hashSync(password, 7);
        const userRole = await Role.findOne({value: "User"})
        const user = new User({username, name, surname, age, email, nationality, password: hashPassword, roles: [userRole.value]})
        await user.save()
        return res.json({message: "Succesfully registered!"})
    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Registration error'})
    }
  }

  async login (req, res) {
    try {

    } catch (e) {
      console.log(e)
      res.status(400).json({message: 'Login error'})
    }
  }

  async getUsers (req, res) {
    try {

      res.json("server works")
    } catch (e) {
      console.log(e)
    }
  }

}

module.exports = new userController()