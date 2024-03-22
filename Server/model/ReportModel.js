const mongoose = require('mongoose')

const Report = new mongoose.Schema({
    name: String,
    email: String,
    allocatedDep: String,
    pdf:Buffer
})

const ReportModel = mongoose.model("Report", Report)
module.exports = ReportModel
