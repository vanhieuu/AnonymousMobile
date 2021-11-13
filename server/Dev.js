const mongoose = require('mongoose');

const DevSchema = new mongoose.Schema({
    name:String,
    email:String,
    phone:String,
    picture:String,
    salary:String,
    position:String,
})
mongoose.model("dev",DevSchema)