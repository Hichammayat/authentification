const mongoose = require("mongoose")

const user = mongoose.Schema({
    Firstname :{
        type: String,
        required: true,
        unique : true
    },
    Lastname:{
        type: String,
        required: true
    },
    Email:{
        type: String,
        required:true
    },
    Password:{
        type: String,
        required:true
    }

})
const UserModel = mongoose.model("users", user)
module.exports = UserModel