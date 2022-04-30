
const mongoose = require('mongoose');

const expertMessageSchema = mongoose.Schema({

    nom: {
        type: String,
        required: true,
    },
    mail: {
        type: String,
        required: true,
    },
    number: {
        type: String,
        required: true,
    },
    demande: {
        type: String,
        required: true,
    },
    file: {
        type: String,
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },

    expert: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
},
);

module.exports = ExpertMessage = mongoose.model('expertMessage', expertMessageSchema)
