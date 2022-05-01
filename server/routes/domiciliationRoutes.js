const express = require('express');
const router = express.Router();
const { getByUser, getDomiciliations, setDomiciliation, deleteDomiciliation, getDomiciliation, patchDomiciliation, updateRole, getByState, updateState, refuser
} = require('../controllers/domiciliationController')

router.route('/').get(getDomiciliations).post(setDomiciliation)
router.route('/:id').get(getDomiciliation).delete(deleteDomiciliation).patch(patchDomiciliation).put(updateRole)
router.route('/user/:user').get(getByUser)
router.route('/state/:state').get(getByState)
router.route('/update/:id').put(updateState)
router.route('/refuser/:id').put(refuser)




module.exports = router