const express = require('express');
const router = express.Router();
const { getDomiciliations, setDomiciliation, deleteDomiciliation, getDomiciliation
} = require('../controllers/domiciliationController')

router.route('/').get(getDomiciliations).post(setDomiciliation)
router.route('/:id').get(getDomiciliation).delete(deleteDomiciliation)

module.exports = router