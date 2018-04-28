const path = require('path')
module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist/'),
    publicPath: '/dist/',
    filename: 'bundle.js'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client'),
    historyApiFallback: true,
    proxy: {
      "/api/**": "http://localhost:3001",
    }
  },
  resolve: {
    alias: {
      common: path.resolve(__dirname, 'common')
    },
  },
  module: {
    rules: [
      { 
        test: /\.js$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015', 'stage-2']
          }
        }
      },
      { 
        test: /\.jsx$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react']
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          }, 
          {
            loader: "css-loader"
          },
          {
            loader: "sass-loader"
          }
        ]
      },
    ]
  },

}
