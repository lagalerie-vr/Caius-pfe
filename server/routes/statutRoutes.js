const express = require('express');
const router = express.Router();
const { setStatut, getStatut, getStatuts, getByUser
} = require('../controllers/statutController')

router.route('/').get(getStatuts).post(setStatut)
router.route('/:id').get(getStatut)
router.route('/user/:user').get(getByUser)



module.exports = router