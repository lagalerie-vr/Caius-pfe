
const mongoose = require('mongoose');

const domiciliationSchema = mongoose.Schema({

    nom: {
        type: String,
        required: true,
    },

    forme: {
        type: String,
        required: true,
    },

    abonnement: {
        type: String,
        required: true,
    },

    reexpedition: {
        type: String,
        required: true,
    },

    cin: {
        type: String,
        required: true,
    },

    cinLink: {
        type: String,
        required: true,
    },

    fisc: {
        type: String,
        required: true,
    },

    rne: {
        type: String,
        required: true,
    },

    adresse: {
        type: String,
        required: true,
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
    {
        timestamps: true
    }
);

module.exports = Domiciliation = mongoose.model('domiciliation', domiciliationSchema)
