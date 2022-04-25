const express = require('express');
const router = express.Router();
const { getEvents, setEvent, deleteEvent, patchEvent, getEvent
} = require('../controllers/eventController')

router.route('/').get(getEvents).post(setEvent)
router.route('/:id').get(getEvent).patch(patchEvent).delete(deleteEvent)

module.exports = router