const webpack = require('webpack');

const baseConfig = require('./webpack.base');

const config = require('./config');

module.exports = Object.assign({}, baseConfig, {
  entry: [
    'react-hot-loader/patch',
    ...baseConfig.entry,
  ],

  output: {
    path: config.distPath,
    publicPath: '/',
    filename: 'js/app.js',
  },

  module: {
    rules: [
      ...baseConfig.module.rules,

     //  {
     //    test: /\.css$/,
     //    use: [ 'style-loader', 'css-loader' ]
     // },
      {
        test: /\.(css|scss)$/,
        use: [
            {loader: 'style-loader'},
            {loader: 'css-loader'},
            {loader: 'postcss-loader',options:{plugins:[require("autoprefixer")("last 100 versions"),require('postcss-px2rem')({'remUnit': 37.5, 'baseDpr': 2})]}},
            {loader: 'sass-loader'}
        ]
      },
    ],
  },

  devtool: 'cheap-module-eval-source-map',

  devServer: {
    // contentBase: ['/', 'public', 'node_modules'],
    historyApiFallback: true,
    host: '127.0.0.1',
    stats: {
      assets: false,
      chunks: false,
      hash: false,
      version: false,
    },
  },

  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),

    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),

    ...baseConfig.plugins,
  ],
});
