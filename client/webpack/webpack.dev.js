const webpack = require('webpack');
//noinspection JSUnresolvedVariable
const DefinePlugin = webpack.DefinePlugin; // Replace code with specific values
const CaseSensitivePathsPlugin = require('case-sensitive-paths-webpack-plugin'); // Force case sensitive on client paths upon require/import

const {appDir, basePublicPath, buildDir} = require('./clientConfig').configPaths;

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
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'fast-sass-loader'
                ]
            },
            {
                test: /^((?!\.global).)*\.sass$/, // anything with .global will not go through css modules loader
                include: appDir,
                use: [
                    'style-loader',
                    'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                    'fast-sass-loader'
                ]
            }
        ]
    },
    devServer: {
        contentBase: basePublicPath,
        port: 3000,
        proxy: {
            '/': process.env.API_HOST || 'http://localhost:4300'
        },
        publicPath: buildDir + '/'
    },
    devtool: 'source-map',
    plugins: [
        new DefinePlugin({
            'process.env': {
                'NODE_ENV': JSON.stringify('dev')
            }
        }),
        new CaseSensitivePathsPlugin(),
    ]
};
