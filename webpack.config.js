var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: "source-map",
  target: "node",
  entry: [
    "./app/app.js"
  ],
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html',
      inject: 'body',
      hash: true
    }),
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loader: 'ng-annotate!babel', exclude: /node_modules/ },
      { test: /\.html$/, loader: 'raw' },
      { test: /\.css$/, loader: 'style!css' }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  },
  eslint: {
    configFile: '.eslintrc.json'
  },
  watch: true,
  colors: true
};