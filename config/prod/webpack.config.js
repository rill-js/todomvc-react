'use strict'

const path = require('path')
const webpack = require('webpack')
const ExtractCSSPlugin = require('extract-text-webpack-plugin')
const MinifyJSPlugin = require('babili-webpack-plugin')
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
  bail: true,
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/,
      options: {
        babelrc: false,
        plugins: [
          'babel-plugin-transform-runtime',
          'babel-plugin-react-require'
        ],
        presets: [
          ['babel-preset-env', {
            useBuiltIns: true,
            modules: false,
            loose: true,
            target: opts.name === 'Server'
              ? { node: 'current' }
              : { browsers: ['Last 2 Versions'] }
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
          minimize: true,
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
      new ExtractCSSPlugin({ disable: true, allChunks: true })
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
        'process.env.NODE_ENV': '"production"',
        'process.browser': true
      }),
      new ExtractCSSPlugin({ filename: 'index.css', allChunks: true }),
      new MinifyImgPlugin(),
      new MinifyJSPlugin(),
      new CompressionPlugin()
    ]
  })
]
