var webpack = require('webpack');

module.exports = {
  devtool: "eval-source-map",
  entry: "./app/app.js",
  output: {
    path: __dirname + '/public',
    filename: "bundle.js"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
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
  watch: true,
  colors: true
};