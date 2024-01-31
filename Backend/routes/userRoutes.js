const Router = require('express');
const router = new Router()
const userController = require('../controllers/userController')

router.post('/register', userController.registration);
router.get('/login', userController.login);
router.get('/users', userController.getUsers);


module.exports = router;
