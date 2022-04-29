const asyncHandler = require('express-async-handler');
const Domiciliation = require("../models/domiciliation");
const User = require("../models/user")

/* ---------------model---------------
    {
        "nom": "mohamed",
        "forme": "SARL ou EURL",
        "abonnement": "Mensuel",
        "reexpedition": "Chaque mois",
        "adresse": "MINDUP | MANAR"
        "userID": 
        "state": 
    }

*/
const patchDomiciliation = asyncHandler(async (req, res) => {

    try {
        await Domiciliation.updateOne({ id: req.params.id }, {
            $set: {
                nom: req.body.nom,
                forme: req.body.forme,
                abonnement: req.body.abonnement,
                reexpedition: req.body.reexpedition,
                adresse: req.body.adresse,
                user: req.body.user,
                state: req.body.state,
            }
        })
        res.send('update succes')
    }
    catch (err) {
        console.log(err)
    }

});

const updateRole = asyncHandler(async (req, res) => {
    try {
        const domiciliation = await Domiciliation.findById(req.params.id);
        const user = await User.findByIdAndUpdate(domiciliation.user._id, { role: "Client" })
        await Domiciliation.findByIdAndUpdate(req.params.id, { state: "Acceptée" })
        console.log(req.body.user)
        console.log(user)
    } catch (err) {
        console.log(err)
    }
})


/* get all Domiciliation  */
const getDomiciliations = asyncHandler(async (req, res) => {

    try {
        await Domiciliation.find({})
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }

})


/* get 1 Video */
const getDomiciliation = asyncHandler(async (req, res) => {

    try {
        await Domiciliation.findById(req.params.id)
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
})



/* add 1  */
const setDomiciliation = asyncHandler(async (req, res) => {

    let newDomiciliation = new Domiciliation({
        nom: req.body.nom,
        forme: req.body.forme,
        abonnement: req.body.abonnement,
        reexpedition: req.body.reexpedition,
        adresse: req.body.adresse,
        user: req.body.user,
        state: req.body.state,
    })

    try {
        await newDomiciliation.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }
})


const getByUser = asyncHandler(async (req, res) => {

    try {
        await Domiciliation.find({ user: req.params.user })
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
});

/* delete 1 Video */
const deleteDomiciliation = asyncHandler(async (req, res) => {

    try {
        await Domiciliation.remove({ _id: req.params.id })
        res.send('Delete succes')
    }
    catch (err) {
        console.log(err)
    }

})


module.exports = {
    getByUser, getDomiciliations, setDomiciliation, deleteDomiciliation, getDomiciliation, patchDomiciliation, updateRole
}