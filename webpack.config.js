/**
 * Webpack configuration file
 * This configuration is used by Gulp when running Webpack
 */

var path = require('path')
const webpack = require('webpack')

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
  },
  // Generate source map
  devtool: '#cheap-module-source-map',
  module: {},
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production')
    })
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
