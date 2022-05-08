const asyncHandler = require('express-async-handler');
const Statut = require("../models/statut");



const getStatuts = asyncHandler(async (req, res) => {

    try {
        await Statut.find({}).populate("user")
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
        await Statut.find({ user: req.params.user })
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
});


const getStatut = asyncHandler(async (req, res) => {

    try {
        await Statut.findById(req.params.id)
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})


const setStatut = asyncHandler(async (req, res) => {

    let newStatut = new Statut({
        nomSociete: req.body.nomSociete,
        capital: req.body.capital,
        siege: req.body.siege,
        objet: req.body.objet,
        denomination: req.body.denomination,
        actions: req.body.actions,
        partie: req.body.partie,
        plafond: req.body.plafond,
        garanties: req.body.garanties,
        user: req.body.user,
    })

    try {
        await newStatut.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }
})

module.exports = {
    setStatut, getStatut, getStatuts, getByUser
}