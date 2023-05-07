const router = require('express').Router();
let Users = require('../models/registration.model');
const bcrypt=require('bcrypt');

router.route('/registration').post(async(req,res)=>{
   console.log(req.body);
    try{
    const name=req.body.name;
    const email=req.body.email;

    const password=await bcrypt.hash(req.body.password,10);
    const newUser= new Users({
        name,email,password
    })

  
    let user= await Users.findOne({email});
    if(user) return res.status(400).send("User already registered!")

    newUser.save().then(()=>res.json('User created')).catch(error=>res.status(400).json('Error'+error));
   }catch(error){
    res.json(error)
   }
});

module.exports=router;