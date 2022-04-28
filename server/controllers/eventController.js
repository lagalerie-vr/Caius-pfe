const asyncHandler = require('express-async-handler');
const Event = require("../models/event")
const User = require("../models/user")


/* get all Events */
const getEvents = asyncHandler(async (req, res) => {

    try {
        await Event.find({}).populate("users")
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
const updateEvent = asyncHandler(async (req, res) => {

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

const addUserToEvent = asyncHandler(async (req, res) => {

    try {
        const event = await Event.findById(req.params.id);
        const user = await User.findById(req.body.user)
        console.log(req.body.user)
        console.log(user)
        let index = event.users.indexOf(user._id)
        if (index !== -1) {
            event.users.splice(index, 1);
            await event.save();
        } else {
            event.users.push(user);
            await event.save();
        }
        res.send(event)
    } catch (err) {
        console.log(err)
    }

})


module.exports = {
    getEvents, setEvent, deleteEvent, updateEvent, getEvent, addUserToEvent
}