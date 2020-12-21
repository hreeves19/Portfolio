const express = require('express');
const plaid = require('plaid');
const router = express.Router();

const client = new plaid.Client({
    clientID: process.env.PLAID_CLIENT_ID,
    secret: process.env.PLAID_SECRET,
    env: plaid.environments.sandbox
});

// Used to access link
router.get('/get_link_token', async (req, res, next) => {
    try {
        const user = req.user;
        const clientUserId = user._id;

        // Create the link_token with all of the configurations
        const tokenResponse = await client.createLinkToken({
            user: {
              client_user_id: clientUserId,
            },
            client_name: 'My App',
            products: ['transactions'],
            country_codes: ['US'],
            language: 'en',
            webhook: 'https://webhook.sample.com',
        });

        res.json({link_token: tokenResponse.link_token});
    } catch (e) {
        next(e);
    }
});

module.exports = router;
