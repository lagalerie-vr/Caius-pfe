const asyncHandler = require('express-async-handler');
const Event = require("../models/event")


/* get all Events */
const getEvents = asyncHandler(async (req, res) => {

    try {
        await Event.find({})
            .then(result => {
                res.send(result)
            })
    }
    catch (err) {
        console.log(err)
    }
})


/* get 1 Event */
const getEvent = asyncHandler(async (req, res) => {

    try {
        await Event.findById(req.params.id)
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})


/* add 1 Event */
const setEvent = asyncHandler(async (req, res) => {

    let newEvent = new Event({
        nom: req.body.nom,
        date: req.body.date,
        type: req.body.type,
        cat: req.body.cat,
        adr: req.body.adr,
        prix: req.body.prix,
    })

    try {
        await newEvent.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }

})


/* delete 1 Event */
const deleteEvent = asyncHandler(async (req, res) => {

    try {
        await Event.remove({ _id: req.params.id })
        res.send('Delete succes')
    }
    catch (err) {
        console.log(err)
    }

})


/* update 1 Event */
const patchEvent = asyncHandler(async (req, res) => {

    try {
        await Event.updateOne({ id: req.params.id }, {
            $set: {
                nom: req.body.nom,
                date: req.body.date,
                type: req.body.type,
                cat: req.body.cat,
                adr: req.body.adr,
                prix: req.body.prix,
            }
        })
        res.send('update succes')
    }
    catch (err) {
        console.log(err)
    }

})

module.exports = {
    getEvents, setEvent, deleteEvent, patchEvent, getEvent
}