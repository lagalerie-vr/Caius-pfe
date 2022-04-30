const asyncHandler = require('express-async-handler');
const ExpertMessage = require("../models/expertMessage");
const User = require("../models/user")



const getExpertMessages = asyncHandler(async (req, res) => {

    try {
        await ExpertMessage.find({})
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})

const getByUser = asyncHandler(async (req, res) => {

    try {
        await ExpertMessage.find({ user: req.params.user })
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
});

const getByExpert = asyncHandler(async (req, res) => {

    try {
        await ExpertMessage.find({ expert: req.params.expert })
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
});



const getExpertMessage = asyncHandler(async (req, res) => {

    try {
        await ExpertMessage.findById(req.params.id)
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})


const setExpertMessages = asyncHandler(async (req, res) => {

    let newExpertMessages = new ExpertMessage({
        nom: req.body.nom,
        mail: req.body.mail,
        number: req.body.number,
        demande: req.body.demande,
        file: req.body.file,
        user: req.body.user,
        expert: req.body.expert,
    })

    try {
        await newExpertMessages.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }
})


const deleteExpertMessage = asyncHandler(async (req, res) => {

    try {
        await ExpertMessage.remove({ _id: req.params.id })
        res.send('Delete succes')
    }
    catch (err) {
        console.log(err)
    }

})


module.exports = {
    deleteExpertMessage, setExpertMessages, getExpertMessage, getExpertMessages, getByUser, getByExpert
}