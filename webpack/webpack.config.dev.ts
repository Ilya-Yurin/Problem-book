import webpack from 'webpack';
import sharedConfig from './webpack.config.shared';

const config: webpack.Configuration = {
  mode: 'development',
  devtool: 'source-map',
  target: sharedConfig.target,
  context: sharedConfig.rootDir, // the home directory for webpack the entry and module.rules.loader option
  entry: {
    app: [
      sharedConfig.entryPoint,
    ],
  },
  output: sharedConfig.output,
  module: sharedConfig.module,
  resolve: sharedConfig.resolve,
  plugins: [
    ...sharedConfig.plugins,
    new webpack.EnvironmentPlugin({
      NODE_ENV: 'development',
      DEBUG: true,
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  devServer: {
    contentBase: sharedConfig.outputPath,
    compress: true, // Enable gzip compression for everything served
    hot: true,
    historyApiFallback: true,
    publicPath: sharedConfig.publicPath,
    port: 9000,
    stats: 'minimal'
  },
};

export default config;
