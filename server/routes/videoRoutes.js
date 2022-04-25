const express = require('express');
const router = express.Router();
const { getVideos, setVideo, deleteVideo, patchVideo, getVideo } = require('../controllers/videoController')

router.route('/').get(getVideos).post(setVideo)
router.route('/:id').get(getVideo).patch(patchVideo).delete(deleteVideo)

module.exports = router