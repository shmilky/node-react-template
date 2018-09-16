'use strict';

const path = require('path');
const nodeExternals = require('webpack-node-externals');

const APP_DIR = path.resolve(__dirname, '../src');
const BASE_PUBLIC_PATH = path.resolve(__dirname, '../../../server');
const BUILD_DIR = '/compiled';

const configPaths = {
    appDir: APP_DIR,
    basePublicPath: BASE_PUBLIC_PATH,
    buildDir: BUILD_DIR + '/ssr',
};

module.exports.configPaths = configPaths;

module.exports.webpack = {
    entry: {
        ServerAppFactory: configPaths.appDir + '/ServerAppFactory.js'
    },
    output: {
        path: configPaths.basePublicPath + configPaths.buildDir,
        filename: '[name].js',
        publicPath: configPaths.buildDir + '/',
        libraryTarget: 'commonjs2'
    },
    externals: [nodeExternals()],
};