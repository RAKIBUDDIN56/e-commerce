const { Timestamp } = require('mongodb');
const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const categorySchema = new Schema({
    name:{type:String,required:[true,'Category name is required']},
   



},{
    timestamp:true
});
const Categories= mongoose.model("Categories",categorySchema)

module.exports=Categories;
