const router = require('express').Router();
const categoryController=require('../controllers/category.controller');
const {rateLimiter} =require('../middleware/auth')


router.route('/addcategory').post(rateLimiter,categoryController.addCategory);
//router.route('/login').get(rateLimiter,authController.login);


module.exports=router;