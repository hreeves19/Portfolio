const express = require('express');
const router = express.Router();
const auth = require('../auth/auth');
const faker = require('faker');
const _ = require('underscore');
const Product = require('../models/Product');
const productGen = require('../generator/Product');

// User protected route
router.get('/', async (req, res, next) => {
    const result = await Product.find().catch(error => next(error));
    res.json(result);
});

router.post('/', async (req, res, next) => {
    productGen.generate().then((result) => {
        res.json(result);
    }).catch(error => next(error));
});

module.exports = router;
