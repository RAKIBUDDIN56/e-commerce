const rateLimit=require('express-rate-limit');

const rateLimiter=rateLimit({
    max:5,
    windowMs: 5 * 60 * 1000, // 5 minutes
    message:
		'Too many accounts created from this IP, please try again after 5 minutes',
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, 

})

module.exports={
    rateLimiter
}