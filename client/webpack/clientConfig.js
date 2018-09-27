'use strict';

const path = require('path');

const APP_DIR = path.resolve(__dirname, '../src');
const BASE_PUBLIC_PATH = path.resolve(__dirname, '../../server/public');
const BUILD_DIR = '/.compiled';

const configPaths = {
    appDir: APP_DIR,
    basePublicPath: BASE_PUBLIC_PATH,
    buildDir: BUILD_DIR,
};

module.exports.configPaths = configPaths;

module.exports.webpack = {
    entry: configPaths.appDir + '/index.js',
    output: {
        path: configPaths.basePublicPath + configPaths.buildDir,
        filename: '[name].bundle.js',
        chunkFilename: '[name].bundle.js',
        publicPath: configPaths.buildDir + '/'
    },
    externals: {
        'jquery': 'var jQuery',

        'react': 'var React',
        'react-dom': 'var ReactDOM',
        'prop-types': 'var PropTypes',

        'react-router': 'var ReactRouterDOM',
        'react-router-dom': 'var ReactRouterDOM',
    },
};