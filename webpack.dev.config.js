var webpack = require('webpack'),
    path = require('path'),
    HtmlwebpackPlugin = require('html-webpack-plugin');

var devFlagPlugin = new webpack.DefinePlugin({
    __DEV__: JSON.stringify(JSON.parse(process.env.DEBUG || 'false'))
});

module.exports = {
    entry: [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './app/src/index.js'
    ],
    output: {
        path: path.join(__dirname, 'app', 'build'), // build path is for dev, dist is for prod
        publicPath: '/',
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loaders: ['react-hot', 'babel'],
                include: path.join(__dirname, 'app', 'src')
            },
            {
                test: /\.scss$/,
                loaders: ['style', 'css', 'sass'],
                include: path.join(__dirname, 'app', 'src')
            }
        ]
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin(),
        new HtmlwebpackPlugin({
            template: './app/src/index.html'
        }),
        devFlagPlugin // now we can use __DEV__ as a flag in code for debugging purpose by DEBUG=true npm start
    ]
}
