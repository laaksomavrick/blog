const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  mode: process.env.WEBPACK_SERVE ? 'development' : 'production',
}
const isDev = config.mode === 'development'

module.exports = {
  entry: './client/src/index.js',
  output: {
    path: path.resolve(__dirname, 'client/dist/'),
    publicPath: '/',
    filename: `[name]${isDev ? '' : '.[chunkhash]'}.js`
  },
  plugins: [
    new CleanWebpackPlugin(['client/dist']),
    new HtmlWebpackPlugin({
      template: 'client/index.html'
    }),
    //new webpack.HashedModuleIdsPlugin(),
  ],
  /*optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },*/
  serve: {
    content: 'client/dist'
  },
  devServer: {
    contentBase: path.resolve(__dirname, 'client/dist'),
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
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
          }
        }
      },
      { 
        test: /\.jsx$/, 
        exclude: /node_modules/, 
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-react', '@babel/preset-env'],
            plugins: ['@babel/plugin-transform-runtime']
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
