require('./pretty-errors')

const webpack = require('webpack')
const FriendlyErrorPlugin = require('friendly-errors-webpack-plugin')
const DevServer = require('webpack-dev-server')
const configs = require('./webpack.config')
const spawnedServer = configs.spawnedServer
const compiler = webpack(configs)
const server = new DevServer(compiler, {
  quiet: true,
  inline: true,
  overlay: true,
  contentBase: false,
  stats: 'errors-only',
  clientLogLevel: 'error',
  watchOptions: { ignored: [/node_modules/] },
  proxy: { '**': {
    target: true,
    router: () => `http://localhost:${spawnedServer.address.port}`
  } },
  before (app) {
    app.use((req, res, next) => {
      if (spawnedServer.listening) next()
      else spawnedServer.once('listening', next)
    })
  }
}).listen(8080)

compiler.apply(new FriendlyErrorPlugin())
spawnedServer.once('listening', () => {
  console.log(`Development Server running on port ${server.address().port}\n`)
})
