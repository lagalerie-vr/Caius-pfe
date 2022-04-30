const asyncHandler = require('express-async-handler');
const File = require("../models/file")
const User = require("../models/user")





/* get all Files */
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


/* get 1 File */
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


/* add 1 File */
const setFile = asyncHandler(async (req, res) => {

    let newEvent = new Event({
        nom: req.body.nom,
        dateEvent: req.body.dateEvent,
        type: req.body.type,
        cat: req.body.cat,
        adr: req.body.adr,
        prix: req.body.prix,
        description: req.body.description,
    })

    try {
        await newEvent.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }

})


/* delete 1 File */
const deleteFile = asyncHandler(async (req, res) => {

    try {
        await File.remove({ _id: req.params.id })
        res.send('Delete succes')
    }
    catch (err) {
        console.log(err)
    }

})


/* update 1 Event */
const updateFile = asyncHandler(async (req, res) => {

    try {
        await Event.updateOne({ id: req.params.id }, {
            $set: {
                nom: req.body.nom,
                dateEvent: req.body.dateEvent,
                type: req.body.type,
                cat: req.body.cat,
                adr: req.body.adr,
                prix: req.body.prix,
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
    getFiles, setFile, deleteFile, updateFile, getFile
}