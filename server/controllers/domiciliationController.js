const asyncHandler = require('express-async-handler');
const Domiciliation = require("../models/domiciliation");


/* ---------------model---------------
    {
        "nom": "mohamed",
        "forme": "SARL ou EURL",
        "abonnement": "Mensuel",
        "reexpedition": "Chaque mois",
        "adresse": "MINDUP | MANAR"
    }

*/


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



/* add 1 Video */
const setDomiciliation = asyncHandler(async (req, res) => {

    let newDomiciliation = new Domiciliation({
        nom: req.body.nom,
        forme: req.body.forme,
        abonnement: req.body.abonnement,
        reexpedition: req.body.reexpedition,
        adresse: req.body.adresse,
    })

    try {
        await newDomiciliation.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }
})


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
    getDomiciliations, setDomiciliation, deleteDomiciliation, getDomiciliation
}