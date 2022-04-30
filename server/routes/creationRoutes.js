const express = require('express');
const router = express.Router();
const { getByUser, getCreations, setCreation, deleteCreation, getCreation, patchCreation, updateRole, getByState, updateState, refuser
} = require('../controllers/creationController')

router.route('/').get(getCreations).post(setCreation)
router.route('/:id').get(getCreation).delete(deleteCreation).patch(patchCreation).put(updateRole)
router.route('/user/:user').get(getByUser)
router.route('/state/:state').get(getByState)
router.route('/update/:id').put(updateState)
router.route('/refuser/:id').put(refuser)



module.exports = router