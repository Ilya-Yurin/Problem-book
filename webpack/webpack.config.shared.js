const webpack = require('webpack');
const path = require('path');
const dotenv = require('dotenv-safe');

// plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const HappyPack = require('happypack');

// variables
const config = require('./config');

const dotenvConfig = dotenv.config({
  allowEmptyValues: true,
  main: path.resolve(path.join(__dirname, '..'), '.env'),
  sample: path.resolve(path.join(__dirname, '..'), '.env.example'),
}).parsed;

const getDotenvConfigForDefinePlugin = () => ({
  APIHOST: JSON.stringify(process.env.APIHOST) || JSON.stringify(dotenvConfig.APIHOST) || '"0.0.0.0"',
  NODE_ENV: JSON.stringify(process.env.NODE_ENV) || '"production"',
});

module.exports = {
  dotenvConfig,
  getDotenvConfigForDefinePlugin,
  context: config.sourcePath,
  entry: {
    app: [
      '@babel/polyfill',
      './index.tsx'
    ]
  },
  output: {
    path: config.outPath,
    filename: 'bundle.js',
    chunkFilename: '[chunkhash].js',
    publicPath: '/'
  },
  target: 'web',
  resolve: {
    extensions: ['.js', '.dsts', '.tsx'],
    mainFields: ['module', 'browser', 'main'],
    alias: {
      src: config.sourcePath
    }
  },
  module: {
    rules: [
      // .ts, .tsx
      {
        test: /\.tsx?$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              plugins: [
                'syntax-dynamic-import',
                'react-hot-loader/babel',
              ]
            }
          },
          'happypack/loader?id=ts'
        ].filter(Boolean)
      },
      // static assets
      { test: /\.(png)$/, use: 'url-loader?limit=10000' },
      { test: /\.(jpg|gif)$/, use: 'file-loader' },
    ]
  },
  optimization: {
    splitChunks: {
      name: true,
      cacheGroups: {
        commons: {
          chunks: 'initial',
          minChunks: 2
        },
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
          priority: -10
        }
      }
    },
    runtimeChunk: true
  },
  plugins: [
    new webpack.ContextReplacementPlugin(/moment[/\\]locale$/, /ru/),
    new HtmlWebpackPlugin({ template: 'assets/index.html' }),
    new HappyPack({
      id: 'ts',
      threads: 2,
      loaders: [
        {
          loader: 'ts-loader',
          options: {
            happyPackMode: true,
            getCustomTransformers: path.join(__dirname, './utils/styled-components.js')
          }
        }
      ]
    }),
    new ForkTsCheckerWebpackPlugin({
      tsconfig: path.resolve(path.join(__dirname, '..'), 'tsconfig.json'),
      checkSyntacticErrors: true
    })
  ],
  node: {
    fs: 'empty',
    net: 'empty'
  }
};
