'use strict';

var router = require('express').Router();

router.get('/demo-path', function(req, res) {
    res.render('index', {
        title: 'Demo Path'
    });
});

/* GET home page. */
router.get('*', function(req, res) {
    res.render('index', {
        title: 'Node & React Template'
    });
});

module.exports = router;
