var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var extractCSS = new ExtractTextPlugin('bundle.css');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

module.exports = {
  entry: [
    './index.js'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify('production')
       }
    }),
    extractCSS
  ],
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loaders: ['babel'],
      includes: ['./index.js', path.join(__dirname, 'src')]
    }, {
      test: /\.scss$/,
      loader: extractCSS.extract(
        'style', 'css!postcss?sourceMap=inline!sass'
      )
    }, {
      test: /\.(png|jpg|ttf|woff|svg|otf|eot|svg).*?$/,
      loader: 'file-loader'
    }]
  },
  postcss: function () {
    return [precss, autoprefixer({ browsers: ['last 2 versions']})];
  }
};