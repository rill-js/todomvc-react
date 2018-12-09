'use strict'

const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const ExtractCSSPlugin = require('mini-css-extract-plugin')
const IgnoreEmitPlugin = require('ignore-emit-webpack-plugin')
const SpawnServerPlugin = require('spawn-server-webpack-plugin')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')

const HASH = '[hash:10]';
const ROOT_PATH = path.join(__dirname, '../..')
const ENTRY_FILE = path.join(ROOT_PATH, 'app/index.js')
const DIST_PATH = path.join(ROOT_PATH, 'build')
const PUBLIC_PATH = path.join(DIST_PATH, 'public')

const friendlyErrors = new FriendlyErrorPlugin();
const spawnedServer = new SpawnServerPlugin({ args: [
  '-r', path.join(__dirname, './pretty-errors')
] })

/**
 * Shared config (server and browser).
 */
const createConfig = opts => Object.assign(opts, {
  mode: 'development',
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
        plugins: [
          '@babel/plugin-syntax-dynamic-import',
          '@babel/plugin-transform-runtime'
        ],
        presets: [
          ['@babel/preset-env', {
            useBuiltIns: "usage",
            modules: false,
            loose: true,
            targets: opts.name === 'Server'
              ? { node: 'current' }
              : { browsers: ['Last 1 Versions'] }
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
        name: `${HASH}.[ext]`,
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
      chunkFilename: `[name].${HASH}.js`,
      libraryTarget: 'commonjs2'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.browser': undefined
      }),
      new webpack.BannerPlugin({
        banner: 'require("source-map-support").install({ hookRequire: true })',
        raw: true
      }),
      new ExtractCSSPlugin({
        filename: 'index.css',
        allChunks: true
      }),
      new IgnoreEmitPlugin('index.css'),
      spawnedServer,
      friendlyErrors
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
      filename: `index.${HASH}.js`,
      chunkFilename: `[name].${HASH}.js`,
      libraryTarget: 'var'
    },
    plugins: [
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': undefined,
        'process.browser': true
      }),
      new AssetsPlugin({
        filename: 'assets.json',
        includeAllFileTypes: false,
        useCompilerPath: true
      }),
      new ExtractCSSPlugin({
        filename: `index.${HASH}.css`,
        allChunks: true
      }),
      friendlyErrors
    ]
  })
]

exports.spawnedServer = spawnedServer
