const express = require('express');
const router = express.Router();
const { getVideos, setVideo, deleteVideo, updateVideo, getVideo } = require('../controllers/videoController')

router.route('/').get(getVideos).post(setVideo)
router.route('/:id').get(getVideo).put(updateVideo).delete(deleteVideo)

module.exports = router