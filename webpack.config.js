const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.join( __dirname, '/public'),
        filename: 'bundle.js'
    },
    devServer: {
        // contentBase: '/public/',
        publicPath: '/public/',
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