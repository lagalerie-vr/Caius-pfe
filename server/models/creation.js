
const mongoose = require('mongoose');

const creationSchema = mongoose.Schema({

    nom: {
        type: String,
        required: true,
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
    cinLink: {
        type: String,
        required: true,

    },
    cin: {
        type: String,
        required: true,

    },
    comptable: {
        type: String,
        required: true,
    },

    state: {
        type: String,
        default: "En Cours de traitement",
    }
},
    {
        timestamps: true
    }
);

module.exports = Creation = mongoose.model('creation', creationSchema)
