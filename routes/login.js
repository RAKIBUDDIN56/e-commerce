const router= require('express').Router();
const bcrypt= require('bcrypt');
const Users=require('../models/registration.model')
const jwt= require('jsonwebtoken');

router.route('/login').get(async(req,res)=>{
   console.log(req.body);
    
  try{
    const email=req.body.email;
    const password= req.body.password;

    var user = await Users.findOne({email:email})
    if(!user) return res.status(404).send("Invalid login")
    const isPasswordValid= await bcrypt.compare(password,user.password);
    if(isPasswordValid){
      const token= jwt.sign({name:user.name,password:user.password},'secret123')

       return res.json({status:'Ok',token:token});
    }else{
        return res.status(400).send('Wrong password')
    }

  }catch(error){
    console.log(error);

  }

})


module.exports=router
