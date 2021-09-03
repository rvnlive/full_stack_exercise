const express = require('express')
const router = express.Router()
const auth = require('../helpers/authorization')

const favouriteController = require('../controllers/favouriteController')

router.get('/', auth, favouriteController.getAllFavourites)
router.post('/', auth, favouriteController.addToFavourites)
router.delete('/:id', auth, favouriteController.removeFavourite)

module.exports = router
