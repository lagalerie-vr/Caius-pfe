const express = require('express');
const router = express.Router();
const { getByUser, getDomiciliations, setDomiciliation, deleteDomiciliation, getDomiciliation, patchDomiciliation, updateRole
} = require('../controllers/domiciliationController')

router.route('/').get(getDomiciliations).post(setDomiciliation)
router.route('/:id').get(getDomiciliation).delete(deleteDomiciliation).patch(patchDomiciliation).put(updateRole)
router.route('/user/:user').get(getByUser)


module.exports = router