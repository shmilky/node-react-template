'use strict';

var webpack = require('webpack');
//noinspection JSUnresolvedVariable
var UglifyJsPlugin = webpack.optimize.UglifyJsPlugin;

module.exports = function () {
    return {
        plugins: [
            new UglifyJsPlugin()
        ]
    };
};