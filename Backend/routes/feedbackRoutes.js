const express = require('express')
const router = express.Router()

const feedbackController = require('../controllers/feedbackController')



router.get('/page', (req, res) => {
    feedbackController.getFAQ(req, res)
})

//Exports Router
module.exports = router;