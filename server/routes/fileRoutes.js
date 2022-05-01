const express = require('express');
const router = express.Router();
const { setFile } = require('../controllers/fileController')


router.route('/uploads').post(setFile)

module.exports = router