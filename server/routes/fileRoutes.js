const express = require('express');
const router = express.Router();
const { deleteFile, setFile, getFile, getFiles, getByUser } = require('../controllers/fileController')

router.route('/').get(getFiles)
router.route('/delete/:id').delete(deleteFile)
router.route('/user/:user').get(getByUser)
router.route('/uploads').post(setFile)

module.exports = router