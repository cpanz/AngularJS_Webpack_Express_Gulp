var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "source-map",
  entry: "./app/app.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      mangle: {
        except: ['$super', '$', 'exports', 'require', 'angular']
      }
    }),
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: true
    }),
  ],
  module: {
    preLoaders: [{ test: /\.js$/, loader: 'eslint-loader' }],
    loaders: [
      { test: /\.js$/, exclude: [/node_modules/], loader: 'ng-annotate!babel' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  eslint: {
    configFile: '.eslintrc.json'
  },
  colors: true
};