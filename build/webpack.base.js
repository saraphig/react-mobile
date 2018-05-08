const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = require('./config');
const path = require('path');

module.exports = {
  entry: [
    'normalize.css',
    config.srcPath,
  ],

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: config.srcPath,
      },

      {
        test: /\.(ico|jpg|jpeg|png|gif|svg|mp4)$/,
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'images/[name].[hash:6].[ext]',
        },
      },
    ],
  },

  resolve: {
    modules: [
      config.srcPath,
      'node_modules',
    ],
    extensions: ['.js', '.jsx'],
    alias: {
      'src': path.resolve(__dirname, '../src'),
      'utils': path.resolve(__dirname, '../src/utils'),
      'components': path.resolve(__dirname, '../src/components'),
      'models': path.resolve(__dirname, '../src/models'),
      'api': path.resolve(__dirname, '../src/api'),
      'assets': path.resolve(__dirname, '../src/assets'),
      'views': path.resolve(__dirname, '../src/views'),
    }
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: config.templatePath,
    }),
  ],

};
