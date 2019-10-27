require('dotenv-safe').config();
const webpack = require('webpack');

// variables
const config = require('./config');
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
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              sourceMap: true,
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
              sourceMap: true
            }
          },
          {
            loader: 'less-loader',
            options: {
              sourceMap: true,
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
    new webpack.EnvironmentPlugin({ NODE_ENV: 'development', DEBUG: false }),
    new webpack.DefinePlugin({
      'process.env': {
        BROWSER: JSON.stringify('true'),
        SERVER: JSON.stringify('false'),
        ...sharedConfig.getDotenvConfigForDefinePlugin(),
      }
    }),
  ],
  devServer: {
    contentBase: config.sourcePath,
    hot: true,
    inline: true,
    historyApiFallback: {
      disableDotRule: true
    },
    port: config.clientPort,
    stats: 'minimal'
  },
  node: sharedConfig.node
};
