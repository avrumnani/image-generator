const express = require('express');
const { generateImage } = require('../controllers/opanaiController');
const router = express.Router();

router.post('/generateimage', generateImage);

module.exports = router;