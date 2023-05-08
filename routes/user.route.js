const router = require('express').Router();
const authController=require('../controllers/authentication.controller');
const {rateLimiter} =require('../middleware/auth')


router.route('/registration').post(rateLimiter,authController.registration);
router.route('/login').get(rateLimiter,authController.login);


module.exports=router;