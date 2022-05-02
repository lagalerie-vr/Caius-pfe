const asyncHandler = require('express-async-handler');
const Document = require("../models/document")


/* get all Events */
const getDocuments = asyncHandler(async (req, res) => {

    try {
        await Document.find({})
            .then(result => {
                res.send(result)
            })
    }
    catch (err) {
        console.log(err)
    }
})


const setDocument = asyncHandler(async (req, res) => {

    let newDocument = new Document({
        desc: req.body.desc,
        titre: req.body.titre,
        image: req.body.image,
    })

    try {
        await newDocument.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }

})


const deleteDocument = asyncHandler(async (req, res) => {

    try {
        await Document.remove({ _id: req.params.id })
        res.send('Delete succes')
    }
    catch (err) {
        console.log(err)
    }

})



module.exports = {
    deleteDocument, setDocument, getDocuments
}