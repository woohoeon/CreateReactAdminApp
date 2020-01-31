const webpack = require('webpack')
const path = require('path')
const CONTENT_PATH = path.resolve(path.join(__dirname, './priv/static'))
const NODE_ENV = process.env.NODE_ENV || 'production'
const env = require('dotenv').config({
  path: path.resolve(path.join(__dirname, 'config', `${NODE_ENV}.env`))
}).parsed
const envKeys = Object.keys(env).reduce((prev, next) => {
  prev[`process.env.${next}`] = JSON.stringify(env[next])
  return prev
}, {})

module.exports = {
  mode: NODE_ENV,
  entry: {
    app: ['./src/main.js']
  },
  output: {
    filename: 'bundle.js',
    path: CONTENT_PATH
  },
  devServer: {
    publicPath: env.WEBPACK_DEV_SERVER_PUBLIC_PATH,
    contentBase: CONTENT_PATH,
    historyApiFallback: true,
    hot: false,
    inline: true,
    port: 50112,
    proxy: {
      '/admin/api': 'http://localhost:4000'
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              modules: true,
              importLoaders: 1,
              localIdentName: '[local]'
            }
          }
        ]
      },
      {
        test: /\.(jpg|png)$/,
        use: {
          loader: 'url-loader'
        }
      }
    ]
  },
  plugins: [new webpack.DefinePlugin(envKeys)],
  devtool: 'inline-source-map'
}
