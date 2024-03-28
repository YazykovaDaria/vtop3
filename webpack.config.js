/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable no-param-reassign */
/* eslint-disable global-require */
const path = require('path');
const globule = require('globule');
const fs = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const mode = process.env.NODE_ENV || 'development';
const devMode = mode === 'development';
const target = devMode ? 'web' : 'browserslist';
const devtool = devMode ? 'source-map' : undefined;

const mixins = globule
  .find(['src/pug/mixins/**/_*.pug', '!src/pug/mixins/mixins.pug'])
  .map((mixinPath) => mixinPath.split('/').pop())
  .reduce((acc, currentItem) => `${acc}include ${currentItem}\n`, ``);

fs.writeFile('src/pug/mixins/mixins.pug', mixins, (err) => {
  if (err) throw err;
});

const pages = globule.find(['src/pug/pages/**/*.pug']);

module.exports = {
  mode,
  target,
  devtool,
  devServer: {
    watchFiles: path.join(__dirname, 'src'),
    static: {
      directory: path.join(__dirname, 'dist'),
    },
    port: 3000,
    open: true,
    hot: true,
  },

  entry: path.resolve('@babel/polyfill', __dirname, 'src', 'js', `index.js`),

  output: {
    clean: true,
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    assetModuleFilename: 'assets/[name][ext]',
  },

  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
    }),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src', 'assets', 'images'),
          to: path.resolve(__dirname, 'dist', 'assets', 'images'),
        },
      ],
    }),
  ].concat(
    pages.map(
      (pugPath) =>
        new HtmlWebpackPlugin({
          template: pugPath,
          filename: `${pugPath.split(/\/|.pug/).splice(-2, 1)}.html`,
        })
    )
  ),
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: 'html-loader',
      },
      {
        test: /\.(c|sa|sc)ss$/i,
        use: [
          devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: [require('postcss-preset-env')],
              },
            },
          },
          'sass-loader',
        ],
      },
      {
        test: /\.(jpe?g|png|webp|gif|svg)$/i,
        use: [
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
              },
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              webp: {
                quality: 75,
              },
            },
          },
        ],
        type: 'asset/resource',
      },
      {
        test: /\.woff2?$/i,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name][ext]',
        },
      },
      {
        test: /\.pug$/,
        loader: 'pug-loader',
        exclude: /(node_modules|bower_components)/,
      },
      {
        test: /\.m?js$/i,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
};
