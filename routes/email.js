const express = require('express');
const router = express.Router({mergeParams: true});
const SES = require('../classes/ses-email');

router.get('/', (req, res, next) => {
    res.json({msg: 'Email router is working'});
});

router.get('/send', (req, res, next) => {
    if (!req.query.to) {
        throw new Error('To is a required parameter');
    }
    const toAddresses = req.query.to.split(',');
    SES.sendMail(toAddresses).then(result => {
        console.log(result);
        res.send({msg: 'Email was sent successfully!'});
    }).catch(error => next(error));
});

module.exports = router;
