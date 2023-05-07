const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

const empRouter = require('./routes/employee');
const userRouter = require('./routes/registration');
const loginRouter= require('./routes/login')

app.use('/employee', empRouter);
app.use('/api',userRouter);
app.use('/api',loginRouter)

module.exports = app;

