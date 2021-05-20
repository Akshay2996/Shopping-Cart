let path = require('path');
let HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry : './src/index.js',
    mode: 'development',
    output : {
        path : path.resolve(__dirname , 'dist'),
        filename: 'index_bundle.js',
        publicPath: '/'
    },
    module : {
        rules : [
            {test : /\.(js|jsx)$/, use:'babel-loader'},
            {test: /\.(scss|css)$/, use: ['style-loader', 'css-loader', 'sass-loader'],},
            {test: /\.(png|jpe?g|gif|svg)$/i, use:'file-loader'},
        ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins : [
        new HtmlWebpackPlugin ({
            template : 'src/index.html'
        })
    ]

}