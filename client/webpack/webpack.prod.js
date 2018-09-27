'use strict';

const webpack = require('webpack');
//noinspection JSUnresolvedVariable
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); // Uglify code
//noinspection JSUnresolvedVariable
const DefinePlugin = webpack.DefinePlugin; // Replace code with specific values

const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "bundle.css?[hash]-[chunkhash]-[contenthash]-[name]",
    allChunks: true,
    disable: process.env.NODE_ENV !== "production"
});

const {appDir} = require('./clientConfig').configPaths;

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
                        loader: "css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]",
                        options: {
                            modules: true,
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
                'NODE_ENV': JSON.stringify('production')
            }
        }),
        new UglifyJsPlugin(),
    ]
};
