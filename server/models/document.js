const mongoose = require('mongoose');

const documentSchema = mongoose.Schema({

    image: {
        type: String,
        required: true,
    },

    titre: {
        type: String,
        required: true,
    },

    desc: {
        type: String,
        required: true,
    },
},
);


module.exports = Document = mongoose.model('document', documentSchema)