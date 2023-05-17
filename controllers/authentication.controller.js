let Users = require('../models/registration.model');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
require('dotenv').config();
exports.registration=async(req,res,next)=>{
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

    newUser.save().then(()=>res.status(200).send({message:"User created",data:newUser})).catch(error=>res.status(400).json('Error'+error));
   }catch(error){
    return next(error);
   }

}

exports.login=async(req,res,next)=>{
    console.log(req.body);
    try{
        const email=req.body.email;
        const password= req.body.password;
    
        var user = await Users.findOne({email:email})
        if(!user) return res.status(404).send("Invalid login")
        const isPasswordValid= await bcrypt.compare(password,user.password);
        if(isPasswordValid){
          const token= jwt.sign({name:user.name,password:user.password},process.env.SECRET)
    
           return res.status(200).send({status:'Success',token:token});
        }else{
            return res.status(400).send('Wrong password')
        }
    
      }catch(error){
        return next(error);
    }
}