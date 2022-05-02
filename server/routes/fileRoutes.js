const express = require('express');
const router = express.Router();
const { deleteFile, setFile, getFile, getFiles } = require('../controllers/fileController')

router.route('/uploads').post(setFile)

module.exports = router