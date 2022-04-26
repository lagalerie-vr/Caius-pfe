const express = require("express")
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const cors = require('cors')

const userRoutes = require("./routes/userRoutes")
const videoRoutes = require("./routes/videoRoutes")
const creationRoutes = require("./routes/creationRoutes")
const eventRoutes = require("./routes/eventRoutes")
const domiciliationRoutes = require("./routes/domiciliationRoutes")


require('dotenv/config')

const PORT = process.env.PORT
const app = express()

app.use(cors())
app.use(bodyParser.json())

// Shared
app.use('/users', userRoutes)
app.use('/events', eventRoutes)
app.use('/videos', videoRoutes)
app.use('/creations', creationRoutes)
app.use('/domiciliation', domiciliationRoutes)



mongoose.connect(process.env.DB_CONNECTION, (err, done) => {
    if (err) {
        console.log(err)
    } if (done) {
        console.log('mongoDB connected')
    }
})

app.listen(PORT, console.log('Server started on Port:', PORT))