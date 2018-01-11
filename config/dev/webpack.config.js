'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractCSSPlugin = require('extract-text-webpack-plugin')
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin')
const SpawnServerPlugin = require('spawn-server-webpack-plugin')

const ROOT_PATH = path.join(__dirname, '../..')
const ENTRY_FILE = path.join(ROOT_PATH, 'app/index.js')
const DIST_PATH = path.join(ROOT_PATH, 'build')
const PUBLIC_PATH = path.join(DIST_PATH, 'public')

const spawnedServer = new SpawnServerPlugin({ args: [
  '-r', path.join(__dirname, './pretty-errors')
] })

/**
 * Shared config (server and browser).
 */
const createConfig = opts => Object.assign(opts, {
  bail: true,
  devtool: 'cheap-module-inline-source-map',
  module: {
    rules: [{
      test: /\.jsx?$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        babelrc: false,
        cacheDirectory: true,
        plugins: [['transform-runtime', { 'polyfill': false }]],
        presets: [
          ['babel-preset-env', {
            useBuiltIns: true,
            modules: false,
            loose: true,
            target: { node: opts.target !== 'web' && 'current' }
          }],
          'babel-preset-react'
        ]
      }
    }, {
      test: /\.css$/,
      exclude: /node_modules/,
      use: ExtractCSSPlugin.extract({ use: [{
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
      }] })
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
module.exports = exports = [
  createConfig({
    name: 'Server',
    entry: ENTRY_FILE,
    target: 'async-node',
    externals: [/^[^./!]/],
    output: {
      pathinfo: true,
      path: DIST_PATH,
      filename: 'index.js',
      libraryTarget: 'commonjs2'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': undefined,
        'process.browser': undefined
      }),
      new webpack.BannerPlugin({ banner: 'require("source-map-support").install({ hookRequire: true })', raw: true }),
      new ExtractCSSPlugin({ filename: 'index.css', allChunks: true }),
      new IgnoreEmitPlugin('index.css'),
      spawnedServer
    ]
  }),
  createConfig({
    name: 'Browser',
    target: 'web',
    entry: ['webpack-dev-server/client', ENTRY_FILE],
    output: {
      pathinfo: true,
      publicPath: '/',
      path: PUBLIC_PATH,
      filename: 'index.js',
      libraryTarget: 'var'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': undefined,
        'process.browser': true
      }),
      new ExtractCSSPlugin({ filename: 'index.css', allChunks: true })
    ]
  })
]

exports.spawnedServer = spawnedServer
