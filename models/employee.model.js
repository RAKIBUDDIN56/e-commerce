const mongoose = require('mongoose');
const Schema =mongoose.Schema;

const employeeSchema = new Schema({
    fname: {type: String, require: true},
    lname: {type: String, require: true},
    dept: {type: String, require: true},
    email: {type: String, require: true},

},{
    timestamp: true,
});

const Employee = mongoose.model('User', employeeSchema);

module.exports = Employee;
