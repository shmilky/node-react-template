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
    entry: {
        main: path.join(configPaths.appDir, 'index.js')
    },
    output: {
        path: path.join(configPaths.basePublicPath, configPaths.buildDir),
        filename: '[name].[contenthash].bundle.js',
        chunkFilename: '[name].[contenthash].bundle.js',
        publicPath: configPaths.buildDir + '/',
        clean: true
    },
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: ['node_modules', APP_DIR]
    },
    externals: {
        jquery: 'jQuery',
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
        'react-router-dom': 'ReactRouterDOM'
    },
    optimization: {
        moduleIds: 'deterministic',
        runtimeChunk: 'single',
        splitChunks: {
            chunks: 'all',
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        }
    }
};