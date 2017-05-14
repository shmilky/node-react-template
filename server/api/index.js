'use strict';

var demoApiRouter = require('express').Router();
var demoService = require('../services/demoService');

demoApiRouter.get('/api/v1/get-demo-data', function (req, res) {
    demoService.getDemoData(function (err, demoData) {
        if (err) {
            res.status(400);
        }

        res.send(demoData || {});
    });

});

module.exports = {
    demo: demoApiRouter
};