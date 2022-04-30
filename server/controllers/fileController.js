const asyncHandler = require('express-async-handler');
const File = require("../models/file")
const User = require("../models/user")

const multer = require('multer')
const fs = require('fs');
const file = require('../models/file');

//Upload Storage
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, './public')

    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + "_" + file.originalname)
    }
})

const upload = multer({ storage }).single('image')






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
    try {

        upload(req, res, (err) => {
            res.send({
                file: req.originalname,
                path: req.path,
            })
        })
    } catch (err) {
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