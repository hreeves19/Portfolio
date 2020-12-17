const express = require('express');
const Person = require('../models/Person');
const router = express.Router({mergeParams: true});
const _ = require('underscore');

router.get('/', (req, res, next) => {
    // res.json({msg: 'Person router is working'});
    Person.find((err, people) => {
        if (err) {
            next(err);
        } else {
            res.json(people);
        }
    });
});

router.post('/', (req, res, next) => {
    const person = new Person(req.body);

    person.save((err, person) => {
        if (err) {
            next(err);
        } else {
            res.json(person);
        }
    });
});

router.put('/', (req, res, next) => {
    if (!req.body.id) {
        throw new Error('Cannot find person without an id');
    }
    const data = _.omit(req.body, 'id');
    Person.findByIdAndUpdate(req.body.id, data, {useFindAndModify: false}, (err, result) => {
        if (err) {
            next(err);
        } else {
            res.json({msg: 'Update was successful!'});
        }
    });
});

module.exports = router;
