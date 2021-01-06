const express = require('express');
const router = express.Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);
const faker = require('faker');

router.get('/', async (req, res, next) => {
    res.json({msg: 'hello!'});
});

router.post('/charge', async (req, res, next) => {
    try {
        const customer = await stripe.customers.create({
            name: `${faker.name.firstName()} ${faker.name.lastName()}`,
            email: faker.internet.email(),
            description: 'This is just a test don\'t stress!'
        });
        const token = await stripe.tokens.create({
            card: {
              number: '4242424242424242',
              exp_month: 1,
              exp_year: 2022,
              cvc: '314',
            },
          });
        const card = await stripe.customers.createSource(
            customer.id,
            {source: token.id}
          );
        const charge = await stripe.charges.create({
            amount: 20 * 100,
            currency: 'usd',
            description: 'This is just a test!',
            customer: customer.id,
            source: card.id
        });
        res.json({card, customer, token, charge});
    } catch (err) {
        next(err);
    }
    res.json({msg: 'hello!'});
});

module.exports = router;
