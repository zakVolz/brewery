const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    index: './src/index.js',
    history: './src/index.js',
    variety: './src/index.js',
    brewery: './src/index.js',
    contacts: './src/index.js',
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].[chunkhash].js',
  },
  module: {
    rules: [{
      test: /\.js$/,
      use: { loader: 'babel-loader' },
      exclude: /node_modules/,
    },
    {
      test: /\.css$/,
      use: [
        (isDev ? 'style-loader' : MiniCssExtractPlugin.loader),
        'css-loader',
        'postcss-loader',
      ],
    },
    {
      test: /\.(eot|ttf|woff|woff2)$/,
      loader: 'file-loader?name=./vendor/[name].[ext]',
    },
    {
      test: /\.(png|jpg|gif|ico|svg|webp)$/,
      use: [
        'file-loader?name=./images/[name].[ext]',
        {
          loader: 'image-webpack-loader',
          options: {},
        },
      ],
    },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      path: path.resolve(__dirname, 'src'),
      filename: '[name].[contenthash].css',
    }),
    new OptimizeCssAssetsPlugin({
      assetNameRegExp: /\.css$/g,
      // eslint-disable-next-line global-require
      cssProcessor: require('cssnano'),
      cssProcessorPluginOptions: {
        preset: ['default'],
      },
      canPrint: true,
    }),
    new WebpackMd5Hash(),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/index.html',
      filename: 'index.html',
      chunks: ['index'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/history.html',
      filename: 'history.html',
      chunks: ['history'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/variety.html',
      filename: 'variety.html',
      chunks: ['variety'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/brewery.html',
      filename: 'brewery.html',
      chunks: ['brewery'],
    }),
    new HtmlWebpackPlugin({
      inject: false,
      template: './src/pages/contacts.html',
      filename: 'contacts.html',
      chunks: ['contacts'],
    }),
    new webpack.DefinePlugin({
      NODE_ENV: JSON.stringify(process.env.NODE_ENV),
    }),
  ],
};
