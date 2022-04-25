const asyncHandler = require('express-async-handler');
const User = require("../models/user")
const bcrypt = require("bcrypt")


{/*
----------------------MODEl---------------------------
{
    "nom": "joud",
    "prenom": "joud",
    "mail": "joud@admin.ssadsmin",
    "role":"admin",
    "numero": "22222222",
    "password": "admin@admin.admin"
    }

*/}


/* get all users */
const getUsers = asyncHandler(async (req, res) => {

    try {
        await User.find({})
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
});


/* get 1 user */
const getUser = asyncHandler(async (req, res) => {

    try {
        await User.findById(req.params.id)
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
});


/* get user by role */
const getRole = asyncHandler(async (req, res) => {

    try {
        await User.find({ role: req.params.role })
            .then(result => {
                res.send(result)
            })
    }

    catch (err) {
        console.log(err)
    }
});

/* delete 1 user */
const deleteUser = asyncHandler(async (req, res) => {

    try {
        await User.remove({ _id: req.params.id })
        res.send('Delete succes')
    }
    catch (err) {
        console.log(err)
    }

});


/* update 1 user */
const patchUser = asyncHandler(async (req, res) => {

    try {
        await User.updateOne({ id: req.params.id }, {
            $set: {
                nom: req.body.nom,
                prenom: req.body.prenom,
                mail: req.body.mail,
                role: req.body.role,
                numero: req.body.numero,
                password: req.body.password,
            }
        })
        res.send('update succes')
    }
    catch (err) {
        console.log(err)
    }

});


/* add 1 user */
const setUser = asyncHandler(async (req, res) => {

    const user = await User.findOne({ mail: req.body.mail });
    if (user)
        return res
            .status(409)
            .send({ message: "User with given email already Exist!" });

    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(req.body.password, salt);

    let newUser = new User({
        nom: req.body.nom,
        prenom: req.body.prenom,
        mail: req.body.mail,
        role: req.body.role,
        numero: req.body.numero,
        password: hashPassword,
    })

    try {
        await newUser.save()
        res.send('saved succes')
    }
    catch (err) {
        console.log(err)
    }
});


/* login 1 user */

const loginUser = asyncHandler(async (req, res) => {
    try {
        const user = await User.findOne({ mail: req.body.mail });
        if (!user)
            return res.status(401).send({ message: "Invalid Email " });

        const validPassword = await bcrypt.compare(
            req.body.password,
            user.password
        );
        if (!validPassword)
            return res.status(401).send({ message: "Invalid Password" });

        const token = user.generateAuthToken();
        res.status(200).send({ data: token, message: "logged in successfully" });
    } catch (error) {
        res.status(500).send({ message: "Internal Server Error" });
    }
});

module.exports = {
    getUsers, getUser, patchUser, deleteUser, setUser, getRole, loginUser
}