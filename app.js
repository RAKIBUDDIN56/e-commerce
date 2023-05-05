const express = require('express');

const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())

const empRouter = require('./routes/employee');

app.use('/employee', empRouter);

module.exports = app;

