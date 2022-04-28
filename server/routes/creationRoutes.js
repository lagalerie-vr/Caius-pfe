const express = require('express');
const router = express.Router();
const { getByUser, getCreations, setCreation, deleteCreation, getCreation
} = require('../controllers/creationController')

router.route('/').get(getCreations).post(setCreation)
router.route('/:id').get(getCreation).delete(deleteCreation)
router.route('/user/:user').get(getByUser)


module.exports = router