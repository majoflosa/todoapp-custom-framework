const path = require('path');

module.exports = {
    entry: ['@babel/polyfill', './src/index.js'],
    output: {
        path: path.join( __dirname, '/build/js'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: './build', // root of devServer
        publicPath: '/js', // devServer generates bundle.js in memory and serves it from here
        port: 8888,
        watchContentBase: true
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                query: {
                    presets: ['@babel/env']
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'html-loader'
            }
        ]
    }
};