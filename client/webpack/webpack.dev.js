'use strict';

var webpack = require('webpack');
//noinspection JSUnresolvedVariable
var DefinePlugin = webpack.DefinePlugin;

module.exports = function (basePublicPath, buildDir) {
    return {
        devServer: {
            contentBase: basePublicPath,
            port: 3000,
            proxy: {
                '/': 'http://localhost:4000'
            },
            publicPath: buildDir + '/'
        },

        plugins: [
            new DefinePlugin({
                'process.env.NODE_ENV': JSON.stringify('dev')
            })
        ]
    };
};