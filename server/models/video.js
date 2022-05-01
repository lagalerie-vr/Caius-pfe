const mongoose = require('mongoose');

const videoSchema = mongoose.Schema({

    titre: {
        type: String,
        required: true,
    },

    lien: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
},
);

module.exports = Video = mongoose.model('video', videoSchema)