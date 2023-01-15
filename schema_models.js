const mongoose = require("mongoose")

const student_schema = new mongoose.Schema({
    name:String,
    roll:Number,
    branch:String
})

module.exports = mongoose.model("student" , student_schema)

// module.exports = student_schema