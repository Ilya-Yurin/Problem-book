require('dotenv-safe').config();
const webpack = require('webpack');

// plugins
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

// variables
const sharedConfig = require('./webpack.config.shared');

module.exports = {
  context: sharedConfig.context,
  entry: sharedConfig.entry,
  output: sharedConfig.output,
  target: sharedConfig.target,
  resolve: sharedConfig.resolve,
  module: {
    rules: [
      ...sharedConfig.module.rules,
      // css
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: false,
              import: true,
              localIdentName: '[local]',
            }
          },
        ]
      },
      // less
      {
        test: /\.less$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader', options: {
              sourceMap: false
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: false,
              javascriptEnabled: true
            },
          },
        ],
      }
    ]
  },
  optimization: sharedConfig.optimization,
  plugins: [
    ...sharedConfig.plugins,
    new WebpackCleanupPlugin(),
    new MiniCssExtractPlugin({ filename: '[contenthash].css' }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify('true'),
        SERVER: JSON.stringify('false'),
        ...sharedConfig.getDotenvConfigForDefinePlugin(),
      }
    }),
  ],
  node: sharedConfig.node
};
