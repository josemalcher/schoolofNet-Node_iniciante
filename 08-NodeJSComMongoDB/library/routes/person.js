var express = require('express');
var router = express.Router();
var Person = require('./../models/Person');


// FINDE ALL
router.get('/', function (req, res) {

    Person.find({}, function (err, people) {
        if (err) {
            return;
        }
        res.send(people);
    });
});

//Finde ONE
router.get('/:id', function (req, res) {

    Person.findById(req.params.id, function (err, person) {
        if (err) {
            return;
        }
        res.send(person);
    });

    /*
    Person.findOne({
        _id: req.params.id
    }, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */
});

router.post('/', function (req, res) {

    //create with insertMany method
    var arr = [
        {
            name: {
                firstname: 'Alvin 1',
                lastname: 'Brand'
            },
            age: 30
        },
        {
            name: {
                firstname: 'Alvin 2',
                lastname: 'Brand'
            },
            age: 27
        },
        {
            name: {
                firstname: 'Alvin 3',
                lastname: 'Brand'
            },
            age: 28
        }
    ];

    Person.insertMany(arr, function (err, person) {
        if (err) {
            return;
        }

        res.send(person);
    });

    /*
    var person = new Person({
        name: {
            firstname: 'Ana CLAUDIA',
            lastname: 'MARIA'
        },
        age: 33
    });
    person.save(person, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */

    /*
    Person.create({
        name: {
            firstname: 'Ana Carolina',
            lastname: 'Castro Malcher'
        },
        age: 33
    }, function (err, person) {
        if(err){
            return;
        }
        res.send(person);
    });
    */
});

//update
router.put('/:id', function (req, res) {
    /**
     *  findOneAndUpdate
     */
    Person.findOneAndUpdate({
        _id: req.params.id
    },{
        name: {
            firstname: 'Thed',
            lastname: 'Talks'
        }
    }, function (err, person) {
        if(err) {
            return;
        }

        res.send(person);
    });

    /**
     *  update
     */
    /*
    Person.update({
        _id: req.params.id
    }, {
        name: {
            firstname: 'Bread',
            lastname: 'Paints'
        }
    }, function (err, person) {
        if (err) {
            return;
        }

        res.send(person);
    });
    */
});



module.exports = router;