'use strict';

let generalConfig;

module.exports = function(env) {
    env = env || 'prod';

    if (env === 'ssr') {
        generalConfig = require('./webpack/ssrConfig').webpack;
    } else {
        generalConfig = require('./webpack/clientConfig').webpack;
    }

    const envConfig = require(`./webpack/webpack.${env}.js`);
    const execConfig = { ...generalConfig, ...envConfig };

    console.log('\n*******************');
    console.log(`Webpack ${env} Configuration:`);
    console.log(`Entry point: ${JSON.stringify(execConfig.entry)}`);
    console.log(`Output path: ${execConfig.output.path}`);
    console.log('*******************\n');

    return execConfig;
};