const Router = require('express');
const router = new Router()
const userController = require('../../controllers/user/userController')
const {check} = require('express-validator')
const authMiddleware = require('../../middleware/user/authMiddleware')

router.post('/register', [
    check('username', "Username can not be empty").notEmpty(),
    check('password', "Password be higher than 4 and less than 10").isLength({min: 4, max: 10})
], userController.registration);
router.post('/login', userController.login);
router.post('/logout', userController.logout);
router.get('/users', authMiddleware, userController.getUsers);


module.exports = router;
