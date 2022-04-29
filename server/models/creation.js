
const mongoose = require('mongoose');

const creationSchema = mongoose.Schema({

    nom: {
        type: String,
        required: true,
        unique: true,
    },

    domaine: {
        type: String,
        required: true,
    },

    typeGerant: {
        type: String,
        required: true,
    },
    associes: {
        type: String,
        required: true,
    },
    capital: {
        type: String,
        required: true,
    },
    siege: {
        type: String,
        required: true,
    },
    recherche: {
        type: String,
        required: true,
    },
    rs: {
        type: String,
    },
    forme: {
        type: String,
    },
    gerant: {
        type: String,
    },
    nomGerant: {
        type: String,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

    state: {
        type: String,
        default: "En Cours de traitement",
    }
},
);

module.exports = Creation = mongoose.model('creation', creationSchema)
