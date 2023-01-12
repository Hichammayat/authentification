const {Router}= require("express")
const UserModel = require("../modules/userschema")


const router =Router()

router.post("/signup", async(req,res)=>{
    let user = req.body
     console.log(user)
try{
    let result = await UserModel.findOne({Firstname: user.Firstname})
    if(result){
        res.send("user already exist")
    }else{
        const newUser = new UserModel(user)
        const saved = await newUser.save()
        if (saved)res.send("user inserted")
        else res.send("not inserted")
        

    }
}catch(err){console.log(err.message)} 
})

router.post('/signin', async (req,res)=> {
    let userAccount = req.body
    try {
    let userAccount_result = await UserModel.findOne({Email: userAccount.Email,Password: userAccount.Password})
    if (userAccount_result) {
        res.send(userAccount_result)
       

    } else {
        res.send(false)
        
    }
    }catch(err) {
        console.error(err.message)
    }

})

module.exports = router