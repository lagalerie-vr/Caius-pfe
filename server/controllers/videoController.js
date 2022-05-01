const asyncHandler = require('express-async-handler');
const Video = require("../models/video")


/* ---------------model---------------
{
    "titre": "video 1",
    "lien": "https://www.youtube.com/watch?v=DPHqkHLweMY",
    "description": " The Paper Kites - Woodland (Full EP Stream)",
},

*/


/* get all Videos */
const getVideos = asyncHandler(async (req, res) => {

    try {
        await Video.find({})
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})


/* get 1 Video */
const getVideo = asyncHandler(async (req, res) => {

    try {
        await Video.findById(req.params.id)
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})


/* add 1 Video */
const setVideo = asyncHandler(async (req, res) => {

    let newVideo = new Video({
        titre: req.body.titre,
        lien: req.body.lien,
        description: req.body.description,
    })

    try {
        await newVideo.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }

})


/* delete 1 Video */
const deleteVideo = asyncHandler(async (req, res) => {

    try {
        await Video.remove({ _id: req.params.id })
        res.send('Delete succes')
    }
    catch (err) {
        console.log(err)
    }

})


/* update 1 Video */
const updateVideo = asyncHandler(async (req, res) => {

    try {
        await Video.updateOne({ id: req.params.id }, {
            $set: {
                titre: req.body.titre,
                lien: req.body.lien,
                description: req.body.description,
            }
        })
        res.send('update succes')
    }
    catch (err) {
        console.log(err)
    }

})

module.exports = {
    getVideos, setVideo, deleteVideo, updateVideo, getVideo
}