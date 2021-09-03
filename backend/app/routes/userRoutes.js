const express = require('express')
const router = express.Router()
const auth = require('../helpers/authorization')

const userController = require('../controllers/userController')

router.post('/signup', userController.signUpUser)
router.post('/login', userController.logInUser)
router.get('/', auth, userController.loadAllUsers)

module.exports = router
