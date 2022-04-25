const mongoose = require('mongoose');
const jwt = require("jsonwebtoken");

const userSchema = mongoose.Schema({

    mail: {
        type: String,
        required: true,
    },

    nom: {
        type: String,
        required: true,
    },

    numero: {
        type: String,
        required: true,
    },


    prenom: {
        type: String,
        required: true,
    },

    role: {
        type: String,
        default: 'default',
    },


    password: {
        type: String,
        required: true,
    },

},
    {
        timestamps: true
    }
);

userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWTPRIVATEKEY, {
        expiresIn: "7d",
    });
    return token;
};

module.exports = User = mongoose.model('user', userSchema)