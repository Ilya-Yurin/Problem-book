/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable import/first */
require('dotenv-safe').config();

console.log('TEST API : ', process.env);

import path from 'path';
import webpack from 'webpack';

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');

const srcPath = path.join(__dirname, '..', 'src');
const rootDir = path.resolve(__dirname, '..');
const entryPoint = path.join(__dirname, '..', 'src', 'index.tsx');
const publicPath = '/';
const outputPath = path.join(__dirname, '..', 'dist');

type CustomConfig = {
  publicPath: string;
  outputPath: string;
  rootDir: string;
  srcPath: string;
  entryPoint: string;
};

const config: webpack.Configuration & CustomConfig = {
  publicPath,
  outputPath,
  rootDir,
  srcPath,
  entryPoint,
  target: 'web',
  output: {
    publicPath,
    path: outputPath,
    filename: '[name].js',
    sourceMapFilename: '[name].js.map',
  },
  module: {
    noParse: [/proj4\/dist\/proj4.js/, /openlayers\/dist\/ol.js/],
    rules: [
      // rules for modules (configure loaders, parser options, etc.)
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
            },
          },
          'happypack/loader?id=ts',
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
            options: {},
          },
          {
            loader: 'less-loader',
            options: {
              javascriptEnabled: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    modules: ['node_modules', srcPath],
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'], // Automatically resolve certain extensions
    enforceExtension: false, // If true, it will not allow extension-less files
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, 'index.html'),
      filename: 'index.html',
      hash: true,
    }),
    new HappyPack({
      id: 'ts',
      threads: 2,
      loaders: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
          },
        },
      ],
    }),
    new ForkTsCheckerWebpackPlugin({checkSyntacticErrors: true}),
    new webpack.DefinePlugin({
      'process.env': {
        developer: JSON.stringify(process.env.DEVELOPER),
        proto: JSON.stringify('https'),
        host: JSON.stringify(process.env.APIHOST),
      },
    }),
  ],
};

export default config;
