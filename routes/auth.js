const express = require('express');
const passport = require('passport');
const jwt = require('jsonwebtoken');
const auth = require('../auth/auth');
const router = express.Router();

// Sign up
router.post('/signup', passport.authenticate('signup', {session: false}), async (req, res, next) => {
    res.json({message: 'Signup successful', user: req.user});
});

// Log in
router.post('/login', async (req, res, next) => {
    passport.authenticate('login', async (err, user, info) => {
        try {
            if (err || !user) {
                const error = new Error('An error occured!');
                return next(error);
            }

            req.login(user, {session: false}, async (error) => {
                if (error) return next(error);

                const body = {_id: user._id, email: user.email};
                const token = jwt.sign({user: body}, process.env.SECRET_TOKEN);
                return res.json({token});
            });
        } catch (error) {
            return next(error);
        }
    })(req, res, next);
});

module.exports = router;
