const express = require('express');
const router = express.Router();
const {sendEmailController} = require('../controllers/portfolioController');


router.post('/sendEmail',sendEmailController);


module.exports = router;