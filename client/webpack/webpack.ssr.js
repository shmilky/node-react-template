'use strict';

const webpack = require('webpack');
//noinspection JSUnresolvedVariable
const DefinePlugin = webpack.DefinePlugin; // Replace code with specific values

const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'); // Force case sensitive on client paths upon require/import

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css?[hash]-[chunkhash]-[contenthash]-[name]",
    allChunks: true,
    disable: process.env.NODE_ENV !== "production"
});

const {appDir} = require('./ssrConfig').configPaths;

module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                include: appDir,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [['es2015', {modules: false}]],
                        plugins: ['syntax-dynamic-import']
                    }
                }
            },
            {
                test: /\.jsx$/,
                include: appDir,
                use: {
                    loader: 'babel-loader'
                }
            },
            {
                test: /\.global\.sass$/,  // only files with .global will go through this loader. e.g. app.global.sass
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader?importLoaders=1",
                        options: {
                            sourceMap: false
                        }
                    }, {
                        loader: "fast-sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                }),
            },
            {
                test: /^((?!\.global).)*\.sass$/, // anything with .global will not go through css modules loader
                include: appDir,
                use: ExtractTextPlugin.extract({
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            // localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
                            sourceMap: false,
                            minimize: true
                        }
                    }, {
                        loader: "fast-sass-loader"
                    }],
                    // use style-loader in development
                    fallback: "style-loader"
                }),
            }
        ]
    },
    plugins: [
        extractSass,
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('production'),
                'COMPILE_STATE': JSON.stringify('SSR')
            }
        }),
        new CaseSensitivePathsPlugin(),
    ]
};
