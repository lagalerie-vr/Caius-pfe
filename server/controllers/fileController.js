const asyncHandler = require('express-async-handler');
const File = require("../models/file")
const User = require("../models/user")


/* get all Events */
const getFiles = asyncHandler(async (req, res) => {

    try {
        await File.find({}).populate("user")
            .then(result => {
                res.send(result)
            })
    }
    catch (err) {
        console.log(err)
    }
})


/* get 1 Event */
const getFile = asyncHandler(async (req, res) => {

    try {
        await File.findById(req.params.id)
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})


/* add 1 Event */
const setFile = asyncHandler(async (req, res) => {

    let newFile = new File({
        user: req.body.nom,
        image: req.body.dateEvent,
        dateFile: req.body.dateFile,
    })

    try {
        await newFile.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }

})


/* delete 1 Event */
const deleteFile = asyncHandler(async (req, res) => {

    try {
        await File.remove({ _id: req.params.id })
        res.send('Delete succes')
    }
    catch (err) {
        console.log(err)
    }

})


module.exports = {
    deleteFile, setFile, getFile, getFiles
}