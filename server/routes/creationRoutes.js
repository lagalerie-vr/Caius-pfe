const express = require('express');
const router = express.Router();
const { getCreations, setCreation, deleteCreation, getCreation
} = require('../controllers/creationController')

router.route('/').get(getCreations).post(setCreation)
router.route('/:id').get(getCreation).delete(deleteCreation)

module.exports = router