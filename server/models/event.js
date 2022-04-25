const mongoose = require('mongoose');

const eventSchema = mongoose.Schema({

    nom: {
        type: String,
        required: true,
        unique: true,
    },

    date: {
        type: String,
        required: true,
    },

    type: {
        type: String,
        required: true,
    },
    cat: {
        type: String,
        required: true,
    },
    adr: {
        type: String,
        required: true,
    },
    prix: {
        type: String,
        required: true,
    }
},
);

module.exports = Event = mongoose.model('event', eventSchema)
