'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractCSSPlugin = require('mini-css-extract-plugin')
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin')
const MinifyJSPlugin = require('babel-minify-webpack-plugin')
const MinifyCSSPlugin = require('csso-webpack-plugin').default
const MinifyImgPlugin = require('imagemin-webpack-plugin').default
const CompressionPlugin = require('compression-webpack-plugin')

const ROOT_PATH = path.join(__dirname, '../..')
const ENTRY_FILE = path.join(ROOT_PATH, 'app/index.js')
const DIST_PATH = path.join(ROOT_PATH, 'build')
const PUBLIC_PATH = path.join(DIST_PATH, 'public')
/**
 * Shared config (server and browser).
 */
const createConfig = opts => Object.assign(opts, {
  mode: 'production',
  bail: true,
  optimization: {
    minimize: false // We use babel-minify instead.
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        babelrc: false,
        plugins: [['@babel/plugin-transform-runtime']],
        presets: [
          ['@babel/preset-env', {
            useBuiltIns: "usage",
            modules: false,
            loose: true,
            targets: opts.name === 'Server'
              ? { node: 'current' }
              : { browsers: [
                'last 1 version',
                'not dead'
              ] }
          }],
          '@babel/preset-react'
        ]
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: [ExtractCSSPlugin.loader, {
        loader: 'css-loader',
        options: {
          modules: false,
          sourceMap: true,
          importLoaders: 1
        }
      }, {
        loader: 'postcss-loader',
        options: {
          sourceMap: true,
          config: { path: require.resolve('./postcss.config.js') }
        }
      }]
    }, {
      test: file => !/\.(js(x|on)?|css)$/.test(file),
      loader: 'file-loader',
      options: {
        publicPath: '/',
        name: '[hash:base64:10].[ext]',
        emitFile: opts.name === 'Browser'
      }
    }]
  }
})

// Expose configs.
module.exports = [
  createConfig({
    name: 'Server',
    entry: ENTRY_FILE,
    target: 'async-node',
    externals: [/^[^./!]/],
    devtool: 'cheap-module-inline-source-map',
    output: {
      pathinfo: false,
      path: DIST_PATH,
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': '"production"',
        'process.browser': undefined
      }),
      new webpack.BannerPlugin({ banner: 'require("source-map-support").install({ hookRequire: true })', raw: true }),
      new ExtractCSSPlugin({ filename: 'index.css', allChunks: true }),
      new IgnoreEmitPlugin('index.css')
    ]
  }),
  createConfig({
    name: 'Browser',
    target: 'web',
    entry: ENTRY_FILE,
    devtool: 'cheap-module-source-map',
    output: {
      pathinfo: false,
      publicPath: '/',
      path: PUBLIC_PATH,
      filename: 'index.js',
      libraryTarget: 'var'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.browser': true
      }),
      new ExtractCSSPlugin({ filename: 'index.css', allChunks: true }),
      new MinifyJSPlugin({ mangle: { topLevel: true } }),
      new MinifyCSSPlugin(),
      new MinifyImgPlugin(),
      new CompressionPlugin()
    ]
  })
]
