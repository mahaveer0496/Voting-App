const webpack = require('webpack');
const path = require('path');
const APP_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

const config = {
  entry: `${APP_DIR}/index.jsx`,
  output: {
    path: DIST_DIR,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders: [{
      test: /\.jsx?/,
      include: APP_DIR,
      loader: 'babel-loader',
    },
    {
      test: /\.scss$/,
      loaders: ['style-loader', 'css-loader', 'sass-loader'],
    },
    ],
  },
  devtool: 'source-map',
  devServer: {
    historyApiFallback: true,
  },
};

module.exports = config;
