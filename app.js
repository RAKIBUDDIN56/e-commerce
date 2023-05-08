const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(express.json())
const router = require('./routes/user.route');
app.use('/api',router);


module.exports = app;

