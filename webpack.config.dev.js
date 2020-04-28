const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var apiMocker = require('connect-api-mocker');

module.exports = {
    watch: true,
    mode: "development",
    entry: ["@babel/polyfill",'./app/src/containers/App/index.js'],
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        contentBase: path.join(__dirname, 'dist'),
        before: function(app) {
            app.use(apiMocker('/api', 'mocks/api'));
        }
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: 'babel-loader' },
            { test: /\.css$/, use: ['style-loader', 'css-loader'] },
            { test: /\.(png|svg|jpg|gif)$/,use: ['file-loader'] },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./app/index.html"
        })
    ],
};
