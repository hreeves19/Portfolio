const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');
const router = express.Router();
const _ = require('underscore');

// Sign up
router.post('/signup', passport.authenticate('signup', {session: false}), async (req, res, next) => {
    res.json({message: 'Signup successful'});
});

// Log in
router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        const expiresInSecs = 60;
        try {
            if (err || !user) {
                const error = new Error('An error occured!');
                return next(error);
            }

            req.login(user, {session: false}, async (error) => {
                if (error) return next(error);

                const body = {_id: user._id, email: user.email};
                const token = jwt.sign({user: body}, process.env.SECRET_TOKEN, {expiresIn: expiresInSecs});
                return res.json({token, expiresIn: expiresInSecs});
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});

module.exports = router;
