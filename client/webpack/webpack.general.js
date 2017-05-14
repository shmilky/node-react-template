'use strict';

module.exports = function (appDir, basePublicPath, buildDir) {
    return {
        entry: appDir + '/index.js',
        output: {
            path: basePublicPath + buildDir,
            filename: 'bundle.js',
            publicPath: buildDir + '/'
        },
        devtool: 'source-map',
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
                    test: /\.sass$/,
                    include: appDir,
                    use: [
                        'style-loader',
                        'css-loader?importLoaders=1&modules&localIdentName=[path]___[name]__[local]___[hash:base64:5]',
                        'sass-loader'
                    ]
                }
            ]
        }
    };
};
