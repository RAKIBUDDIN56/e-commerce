const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const userRegistration = new Schema({
    name:{type:String,required:[true,'Name is required']},
    email:{type:String, uniqued : true,required:[true,'Email is required']},
    password:{type:String,required:[true,'Password is requuired']}




},{
    timestamp:true
});
const Users= mongoose.model("Users",userRegistration)

module.exports=Users;

