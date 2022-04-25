const express = require('express');
const router = express.Router();
const { getUsers, getUser, patchUser, deleteUser, setUser, getRole, loginUser } = require('../controllers/userController')

router.route('/').get(getUsers)
router.route('/user/:id').patch(patchUser).delete(deleteUser).get(getUser)
router.route('/role/:role').get(getRole)
router.route('/register').post(setUser)
router.route('/login').post(loginUser)



module.exports = router