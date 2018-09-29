'use strict';

const router = require('express').Router();
const react = require('react');
const {renderToString} = require('react-dom/server');

// Trying to use the compiled App factory
let serverAppFactory;
try {
    serverAppFactory = require('../ssr/.compiled/ServerAppFactory.js').default;
}
catch (e) {
    console.error('creating server app factory for ssr resulted with exception - ' + e);
}

const NO_SSR_HTML_ERROR = "<script>console.warn('failed ssr attempt')</script>";

/* GET home page. */
router.get('*', function(req, res, next) {
    if (serverAppFactory) {
        res.locals.htmlContent = renderToString(react.createElement(serverAppFactory(req.url)));
    }
    else {
        res.locals.htmlContent = NO_SSR_HTML_ERROR;
    }
    next()
});

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
