var path = require('path')
/* const webpack = require('webpack') */

module.exports = {
  entry: './src/index.js',
  devServer: {
    contentBase: './dist'
  },
  module: {
    rules: [
    /*  {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
        options: {
          // eslint options (if necessary)
        }
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'mocha-loader'
      } */
    ]
  },
  plugins: [
    /* new webpack.optimize.UglifyJsPlugin({
      sourceMap: options.devtool && (options.devtool.indexOf("sourcemap") >= 0 || options.devtool.indexOf("source-map") >= 0)
    }) */
    /*
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false,
        beautify: false
      },
      compress: {
        warnings: false,
        drop_console: false
      }
    }) */
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
}
