const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const webpack = require('webpack');
const  MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin  = require('copy-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    watch: true,
    entry: './src/app.js',
    mode: 'development',
    output: {
        filename: 'app.js',
        path: path.resolve(__dirname, 'dist')
    },
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname,'src','index.html')
        }),
        new CleanWebpackPlugin(),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        }),
        new MiniCssExtractPlugin({
            filename: 'css/styles.css'
        }),
        new CopyWebpackPlugin([
            {
                from:'./src/img/',
                to:'img'
            } 
        ]),

    ],
    module: {
        rules: [
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, 'css-loader'],
          },
          {
            test: /\.less$/,
            use: [MiniCssExtractPlugin.loader, 'css-loader','less-loader']
          },
          {
            test: /\.(png|svg|jpg|gif)$/,
            use: [
                'file-loader'
            ]
          }
        ],
    }
}