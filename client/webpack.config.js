'use strict';

var path = require('path');

var APP_DIR = path.resolve(__dirname, 'src');
var BASE_PUBLIC_PATH = path.resolve(__dirname, '../../public');
var BUILD_DIR = '/compiled';

module.exports = function(env) {
    env = env || 'prod';

    var generalConfig = require('./webpack/webpack.general.js')(APP_DIR, BASE_PUBLIC_PATH, BUILD_DIR);

    var envConfig = require('./webpack/webpack.' + env  + '.js')(BASE_PUBLIC_PATH, BUILD_DIR);
    var newConfig = Object.assign(generalConfig, envConfig);

    console.log('*******************');
    console.log('webpack ' + env + ' setup\n' +
        'Compiling entry point is ' + newConfig.entry + '\n' +
        'Compiling files to ' + newConfig.output.path + ' folder.......');
    console.log('*******************');

    return newConfig;
};