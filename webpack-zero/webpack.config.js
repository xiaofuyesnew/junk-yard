const webpack = require('webpack')

module.exports = {
    entry: './entry.js',
    output: {
        path: __dirname,
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {test: /\.css$/, loader: 'style-loader!css-loader'}
        ]
    },
    plugins: [
        new webpack.BannerPlugin('this file info')
    ],
    resolve: {
        extensions: ['', '.js'],   //指定模块后缀名
        fallback: path.join(__dirname, "node_modules")//处理相关依赖找不到的错误
    },
    resolveLoader: {
        fallback: path.join(__dirname, "node_modules")
    }
}

//webpack-dev-server --progress --colors