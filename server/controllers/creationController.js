const asyncHandler = require('express-async-handler');
const Creation = require("../models/creation");
const User = require("../models/user")


/* ---------------model---------------
{
    "nom": "cc",
    "domaine": "cc",
    "typeGerant": "cc",
    "associes": "cc",
    "capital": "cc",
    "siege": "cc",
    "recherche": "cc",
    "rs": "cc",
    "forme": "cc",
    "gerant": "cc",
    "nomGerant": "cc"
    "userID": 
    "state":
}

*/


/* get all creations  */
const getCreations = asyncHandler(async (req, res) => {

    try {
        await Creation.find({}).populate("user")
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})

const updateRole = asyncHandler(async (req, res) => {
    try {
        const creation = await Creation.findById(req.params.id);
        const user = await User.findByIdAndUpdate(creation.user._id, { role: "Client" })
        await Creation.findByIdAndUpdate(req.params.id, { state: "Acceptée" })
        console.log(req.body.user)
        console.log(user)
    } catch (err) {
        console.log(err)
    }
})

const getByUser = asyncHandler(async (req, res) => {

    try {
        await Creation.find({ user: req.params.user })
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
});


const getByState = asyncHandler(async (req, res) => {

    try {
        await Creation.find({ state: req.params.state })
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
});


/* get 1 Video */
const getCreation = asyncHandler(async (req, res) => {

    try {
        await Creation.findById(req.params.id)
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})


const patchCreation = asyncHandler(async (req, res) => {

    try {
        await Creation.updateOne({ id: req.params.id }, {
            $set: {
                nom: req.body.nom,
                domaine: req.body.domaine,
                typeGerant: req.body.typeGerant,
                associes: req.body.associes,
                capital: req.body.capital,
                siege: req.body.siege,
                recherche: req.body.recherche,
                rs: req.body.rs,
                forme: req.body.forme,
                gerant: req.body.gerant,
                nomGerant: req.body.nomGerant,
                user: req.body.user,
                state: req.body.state,
            },
        })
        res.send('update succes')
    }
    catch (err) {
        console.log(err)
    }

});

/* add 1 Video */
const setCreation = asyncHandler(async (req, res) => {

    let newCreation = new Creation({
        nom: req.body.nom,
        domaine: req.body.domaine,
        typeGerant: req.body.typeGerant,
        associes: req.body.associes,
        capital: req.body.capital,
        siege: req.body.siege,
        recherche: req.body.recherche,
        rs: req.body.rs,
        forme: req.body.forme,
        gerant: req.body.gerant,
        nomGerant: req.body.nomGerant,
        user: req.body.user,
        state: req.body.state,
    })

    try {
        await newCreation.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }
})


/* delete 1 Video */
const deleteCreation = asyncHandler(async (req, res) => {

    try {
        await Creation.remove({ _id: req.params.id })
        res.send('Delete succes')
    }
    catch (err) {
        console.log(err)
    }

})


module.exports = {
    getByUser, getCreations, setCreation, deleteCreation, getCreation, patchCreation, updateRole, getByState
}