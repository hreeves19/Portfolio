const express = require('express');
const router = express.Router();
const auth = require('../auth/auth');
const faker = require('faker');
const _ = require('underscore');
const Product = require('../models/Product');

// User protected route
router.get('/', async (req, res, next) => {
    const result = await Product.find().catch(error => next(error));
    res.json(result);
});

router.post('/', async (req, res, next) => {
    const products = _.map(new Array(Math.floor(Math.random() * 100) + 20), (nothing) => {
        return {
            name: faker.commerce.product(),
            description: faker.commerce.productDescription(),
            price: faker.commerce.price(),
            adjective: faker.commerce.productAdjective(),
            on_hand: faker.random.number(50)
        };
    });
    res.json(products);
});

module.exports = router;
