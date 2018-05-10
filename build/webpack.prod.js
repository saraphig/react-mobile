const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const baseConfig = require('./webpack.base');
const path = require('path');
const config = require('./config');

module.exports = Object.assign({}, baseConfig, {
  output: {
    path: config.distPath,
    filename: 'js/app.[chunkhash].js',
  },

  module: {
    rules: [
      ...baseConfig.module.rules,

      // {
      //   test: /\.css$/,
      //   loader: ExtractTextPlugin.extract({
      //     fallback: 'style-loader',
      //     use: [
      //       'css-loader?minimize&sourceMap&importLoaders=1&module&camelCase&localIdentName=[hash:base64:5]',
      //       'postcss-loader',
      //     ],
      //     publicPath: '../',
      //   }),
      // },

      {
        test: /\.(css|scss)$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader?minimize'},
            {loader: 'postcss-loader',options:{plugins:[require("autoprefixer")("last 100 versions"),require('postcss-px2rem')({'remUnit': 37.5, 'baseDpr': 2})]}},
            {loader: 'sass-loader'}
        ],
      },
    ],
  },
  // devtool: 'source-map',

  plugins: [
    ...baseConfig.plugins,

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),

    new webpack.optimize.UglifyJsPlugin({
      output: {
        // 最紧凑的输出
        beautify: true,
        // 删除所有注释
        comments: true,
      },
      compress: {
        warnings: false,
        drop_debugger: true,
        drop_console: true,
      },
      // sourceMap: true,
    }),

    // new CopyWebpackPlugin([{
    //   from: path.resolve(__dirname, '../lib'),
    //   to: path.resolve(__dirname, '../dist/lib'),
    //   toType: 'dir',
    // }]),

    // new ExtractTextPlugin('css/app.css'),
    new ExtractTextPlugin({
      filename: 'css/app_[contenthash:8].css'
    }),
  ],
});
