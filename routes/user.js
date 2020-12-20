const express = require('express');
const router = express.Router();
const auth = require('../auth/auth');
// User protected route
router.get('/profile', (req, res, next) => {
    res.json({
        message: 'You made it to the secure route',
        user: req.user,
        token: req.query.secret_token
    });
});

module.exports = router;
