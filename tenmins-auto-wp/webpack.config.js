var path = require('path');

module.exports = {
    entry: {
        Index: ['./src/js/index.js']
    },
    output: {
        path: path.resolve(__dirname, './dist/static'),
        publicPath: 'static/',
        filename: '[name].js'
    },
    resolve: {
        extensions: ['', '.js', '.scss', '.swig']
    },
    module: {
        loaders: [
            {
                test: /\.scss$/,
                loader: 'style!css!sass'
            },
            {
                test: /\.swig$/,
                loader: 'swig'
            }
        ]
    }
}