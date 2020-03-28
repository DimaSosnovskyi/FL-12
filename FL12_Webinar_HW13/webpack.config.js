const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtratPlugin = require('mini-css-extract-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
  mode: 'production',
  watch: true,
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js'
  },
  plugins: [
    new HtmlWebpackPlugin ({
        template: path.resolve(__dirname,'src','index.html'),
        filename: 'index.html'
      }),
    new MiniCssExtratPlugin ({
      filename: 'css/style.css'
    }),
    new CleanWebpackPlugin()
  ],
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtratPlugin.loader, 'css-loader']
      },
      {
        test: /\.less$/i,
        use: [MiniCssExtratPlugin.loader, 'css-loader',
         'less-loader']
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
          loader: 'file-loader'
          }
        ]
      }
    ]
  }
}