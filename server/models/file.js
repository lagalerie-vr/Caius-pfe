const mongoose = require('mongoose')

const fileSchema = new mongoose.Schema({

    image: {
        type: String,

    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    },
    dateFile: {
        type: String,
        required: true,
    },
}, { timestamps: true })

module.exports = mongoose.model('File', fileSchema)