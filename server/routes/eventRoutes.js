const express = require('express');
const router = express.Router();
const { getEvents, setEvent, deleteEvent, updateEvent, getEvent, addUserToEvent
} = require('../controllers/eventController')

router.route('/').get(getEvents).post(setEvent)
router.route('/:id').get(getEvent).put(updateEvent).delete(deleteEvent)
router.route('/user/:id').post(addUserToEvent)

module.exports = router