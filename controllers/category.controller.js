const CategoriesModel=require('./../models/category.model')

exports.addCategory=async(req,res)=>{
    const categoryModel=CategoriesModel(req.body);

   await categoryModel.save().then(()=>res.send({"sussecc":true,"data":categoryModel})).catch(()=>res.send({"success":false,"message":error}))

}