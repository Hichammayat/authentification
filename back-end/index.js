const express = require("express")
const cors = require("cors")
const mongoose  = require("mongoose");
const UserRouter = require("./routes/user")
const TasksRouter = require("./routes/task")


const app = express()
app.listen(9000, ()=>console.log("running"))

app.use(express.json())

app.use(cors())

mongoose.connect("mongodb://localhost/todos")


app.use(UserRouter)
app.use(TasksRouter)





