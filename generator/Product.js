const Product = require('../models/Product');
const _ = require('underscore');
const faker = require('faker');

const ProductGenerator = {
    generate: async () => {
        let products = _.map(new Array(Math.floor(Math.random() * 100) + 20), (nothing) => {
            return {
                name: faker.commerce.product(),
                description: faker.commerce.productDescription(),
                price: faker.commerce.price(),
                tags: _.uniq([faker.commerce.productAdjective(), faker.commerce.productAdjective()]),
                on_hand: faker.random.number(50)
            };
        });
        products = _.uniq(products, (item) => item.name);
        return await Product.insertMany(products);
    }
};

module.exports = ProductGenerator;
