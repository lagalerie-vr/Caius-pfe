const express = require('express');
const router = express.Router();
const { getByUser, getDomiciliations, setDomiciliation, deleteDomiciliation, getDomiciliation, patchDomiciliation
} = require('../controllers/domiciliationController')

router.route('/').get(getDomiciliations).post(setDomiciliation)
router.route('/:id').get(getDomiciliation).delete(deleteDomiciliation).patch(patchDomiciliation)
router.route('/user/:user').get(getByUser)


module.exports = router