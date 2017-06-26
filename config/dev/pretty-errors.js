const path = require('path')
const rootPath = path.join(__dirname, '../..')

// Setup errors to pretty print.
const PrettyError = require('pretty-error')
const pe = new PrettyError()
  .skipNodeFiles()
  .skipPackage('regenerator-runtime')
  .alias(path.join(rootPath, 'build/webpack:'), '.')
  .alias(rootPath, '.')

// Pretty print console.error
const originalError = console.error
console.error = function (err) {
  if (err instanceof Error) return handleError(err)
  originalError.apply(this, arguments)
}

process
  .once('uncaughtException', handleExit)
  .once('unhandledRejection', handleExit)

// Logs an error using pretty error.
function handleError (err) {
  console.log('\n' + pe.render(err))
}

// Handles when node crashes.
function handleExit (err) {
  handleError(err)
  process.exit(1)
}
