var webpack = require('webpack');
var path = require('path');

var BUILD_DIR = path.resolve(__dirname, 'dist');
var APP_DIR = path.resolve(__dirname, 'src');

var ExtractTextPlugin = require('extract-text-webpack-plugin');

var config = {
    entry: {
      bundle: APP_DIR + '/boot.jsx'
    },
    resolve: {
      extensions: ['', '.js', '.jsx', '.scss']
    },
    output: {
        path: BUILD_DIR,
        filename: '[name].js'
    },
    module: {
        loaders : [
            { test : /\.jsx?/, exclude : /node_modules/, loader : 'babel' },
            { test: /\.scss?/, exclude: /node_modules/, loader: ExtractTextPlugin.extract('css!sass')}
        ]
    },
    plugins: [
        new ExtractTextPlugin('style.css', {
            allChunks: true
        })
    ]
};

module.exports = config;