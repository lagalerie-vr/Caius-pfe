const mongoose = require('mongoose');

const statut = mongoose.Schema({

    nomSociete: {
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
    objet: {
        type: String,
        required: true,
    },
    denomination: {
        type: String,
        required: true,
    },
    actions: {
        type: String,
        required: true,
    },
    partie: {
        type: String,
        required: true,
    },
    plafond: {
        type: String,
        required: true,
    },
    garanties: {
        type: String,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
},
    {
        timestamps: true
    }
);


module.exports = Statut = mongoose.model('statut', statut)
