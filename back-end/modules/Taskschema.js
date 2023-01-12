const mongoose = require("mongoose")

const task = mongoose.Schema({
    titre :{
        type: String,
        required: true,
     
    },
    status:{
        type: Boolean,
        required: true,
      
     
    },
    user_id:{
        type: mongoose.Schema.Types.ObjectId,
        ref : "users",
        required: true
    }

})
const TaskModel = mongoose.model("tasks", task)
module.exports = TaskModel