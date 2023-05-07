const router = require('express').Router();
let Employee = require('../models/employee.model');

router.route('/').get((req, res) => {
    Employee.find()
        .then(emps => res.json(emps))
        .catch(err => res.status(400).json('Error : ' + err));
});

router.route('/add').post((req, res) => {
    debugger
    const fname = req.body.fname;
    //const lname = req.body.lname;
    //const dept = req.body.dept;
    //const email = req.body.email;

    const newEmployee = new Employee({
        fname
    });

    newEmployee.save()
        .then(() => res.json('Employee added.'))
        .catch(err => res.status(400).json('Error : ' +err));


});

router.route('/:id').delete((req, res) => {
    Employee.findByIdAndDelete(req.params.id)
        .then(() => res.json('Employee removed!'))
        .catch(err => res.status(400).json('Error : ' +err));
});

router.route('/update/:id').post((req, res) => {
    Employee.findById(req.params.id)
        .then(employee => {
            employee.fname = req.body.fname;

            employee.save()
                .then(() => res.json('Employee Updated!'))
                .catch(err => res.status(400).json('Error : ' +err));
        })
        .catch(err => res.status(400).json('Error : ' +err));
});

module.exports = router;

