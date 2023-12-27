const express = require('express')
const router = express.Router()

const feedbackController = require('../controllers/itemController')
const itemController = require('../controllers/itemController');

router.get('/', itemController.getitem)

router.post('/', itemController.addItem);

//Exports Router
module.exports = router;