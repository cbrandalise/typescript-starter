const webpack = require('webpack');
const path = require('path');

const HtmlWebPackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const htmlPlugin = new HtmlWebPackPlugin({
  title: 'Hello, World',
  template: './src/index.html'
});

const cleanWebpackPlugin = new CleanWebpackPlugin();

const config = {
  mode: 'development',
  entry: './src/index.ts',
  devtool: 'inline-source-map',
  plugins: [
    htmlPlugin,
    cleanWebpackPlugin
  ],
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};

module.exports = config;