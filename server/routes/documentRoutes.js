const express = require('express');
const router = express.Router();
const {
    deleteDocument, setDocument, getDocuments
} = require('../controllers/documentController')

router.route('/').get(getDocuments).post(setDocument)
router.route('/:id').delete(deleteDocument)

module.exports = router