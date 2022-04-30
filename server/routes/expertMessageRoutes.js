const express = require('express');
const router = express.Router();
const {
    deleteExpertMessage, setExpertMessages, getExpertMessage, getExpertMessages, getByUser, getByExpert
} = require('../controllers/expertMessageController')

router.route('/').get(getExpertMessages).post(setExpertMessages)
router.route('/:id').get(getExpertMessage).delete(deleteExpertMessage)
router.route('/user/:id').get(getByUser)
router.route('/expert/:id').get(getByExpert)

module.exports = router