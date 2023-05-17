const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())
const userRouter = require('./routes/user.route');
const categoryRouter = require('./routes/category.route');
app.use('/api',userRouter);
app.use('/api',categoryRouter);


module.exports = app;

