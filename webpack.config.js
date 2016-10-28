
var webpack = require('webpack');  

module.exports = {  
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080  ',
    'webpack/hot/only-dev-server',
    "./app/index.js"
  ],
  output: {
    path: __dirname + '/build',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'cheap-source-map'
};