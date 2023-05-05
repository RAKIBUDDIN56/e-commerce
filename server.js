const http = require('http');
const app = require('./app');
require('dotenv').config();
const db = require('./db')

const port = process.env.PORT || 5000;

const server = http.createServer(app);

server.listen(port, () =>{
    console.log(`Server is running on port: ${port}`);
});