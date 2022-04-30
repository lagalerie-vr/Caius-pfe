const express = require('express');
const router = express.Router();
const {
    deleteExpertMessage, setExpertMessages, getExpertMessage, getExpertMessages, getByUser, getByExpert, repondre
} = require('../controllers/expertMessageController')

router.route('/').get(getExpertMessages).post(setExpertMessages)
router.route('/:id').get(getExpertMessage).delete(deleteExpertMessage).put(repondre)
router.route('/user/:user').get(getByUser)
router.route('/expert/:expert').get(getByExpert)

module.exports = router