const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const Report = require('./Router/Report')
const PORT = 8001

const app = express()

mongoose.connect('mongodb://0.0.0.0:27017/sap')
    .then(() => console.log("Connected to database..."))
    .catch((err) => console.log("error occured: ", err))


app.use(express.json())
app.use(cors())
app.use(Report)

app.listen(PORT,() => {
    console.log("Listening...")
})