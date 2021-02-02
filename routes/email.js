const express = require('express');
const router = express.Router({mergeParams: true});
const SES = require('../classes/ses-email');

router.get('/', (req, res, next) => {
    res.json({msg: 'Email router is working'});
});

router.get('/send', (req, res, next) => {
    SES.sendMail().then(result => {
        res.send({msg: 'Email was sent successfully!'});
    }).catch(error => next(error));
});

module.exports = router;
