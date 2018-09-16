'use strict';

let generalConfig;

module.exports = function(env) {
    env = env || 'prod';

    if (env === 'ssr') {
        generalConfig = require('./webpack/ssrConfig').webpack;
    }
    else {
        generalConfig = require('./webpack/clientConfig').webpack;
    }


    const envConfig = require('./webpack/webpack.' + env  + '.js');
    const execConfig = Object.assign({}, generalConfig, envConfig);
    console.log(JSON.stringify(execConfig));

    console.log('*******************');
    console.log('webpack ' + env + ' setup\n' +
        'Compiling entry point is ' + JSON.stringify(execConfig.entry) + '\n' +
        'Compiling files to ' + execConfig.output.path + ' folder.......');
    console.log('*******************');

    return execConfig;
};