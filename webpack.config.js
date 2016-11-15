var webpack = require('webpack');  

module.exports = {  
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    "./app/index.js"
  ],
  output: {
    path:'/public',
    filename: "bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel',
        query: {
          presets:['es2015', 'react']
        }
      },
      {
        test: /\.js$/, 
        exclude: /node_modules/, 
        loader: 'babel-loader'
      },
      { 
        test: /\.css$/, 
        loader: "style!css" 
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin()
  ],
  devtool: 'cheap-source-map'
};