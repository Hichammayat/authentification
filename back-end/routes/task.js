const {Router} = require("express")
const router = Router()
const TaskModal = require("../modules/Taskschema")

/*app.get("/newlist",(req,res)=>{
    list.push({titre:"reading"})
    res.send(list)
})*/

router.get("/usertask/:user_id",async (req,res)=>{
    const id =req.params.user_id
    try{
    const TasksUserid = await TaskModal.find({user_id : id})
    console.log(TasksUserid)
        res.send(TasksUserid)
    }catch(err){console.log(err.message)} 
    
})
router.get("/filter",(req,res)=>{
   
})

router.post("/newlist/:user_id",async(req,res)=>{
    const task= req.body
    console.log(task)
    try{
         
            const newTask = new TaskModal(task)
            const saved = await newTask.save()
            console.log(saved)
            if (saved)res.send(saved)
        else res.send("task not inserted")
        

    }catch(err) {console.error(err)}
})


router.delete("/dltlist/:_id",async(req,res)=>{
    const task_id = req.params._id
    console.log(task_id)

    try {
        
            let DLT = await TaskModal.deleteOne({_id: task_id})
              console.log(DLT)

            res.send(task_id)
        
    } catch (error) {console.error(error)
        
    }
    
})
router.put("/taskstatus/:_id",async(req,res)=>{
    const task_id = req.params._id
    const task_state = req.params.status
    console.log(task_state)

    try {
        let result = await TaskModal.updateOne({_id: task_id},{ $set : {status: !task_state}})
         res.send(result)
        
    } catch (error) {console.error(error)
        
    }
    
})

module.exports = router