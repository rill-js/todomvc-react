// Polyfills
import 'console-polyfill'
import 'babel-polyfill'

// Libraries
import rill from 'rill'

// Middleware
import serve from '@rill/static'
import logger from '@rill/logger'
import session from '@rill/session'
import html from '@rill/html'
import body from '@rill/body'
import set from '@rill/set'
import redirect from '@rill/redirect'

// Subroutes
import controllers from './controllers'
import wrappers from './wrappers'
import views from './views'

// Create app
console.time('Rill TodoMVC')
export default rill()
  // Serve static files
  .use(serve('public'))
  .use(serve('node_modules/todomvc-common'))
  .use(serve('node_modules/todomvc-app-css'))
  // Standard middleware
  .use(body())
  .use(session())
  .use(logger())
  .use(html())
  // Set some ctx.locals
  .use(set('title', 'Rill'))
  .use(set('description', 'Isomorphic web application framework.'))
  // Setup custom middleware
  .use(controllers)
  .use(wrappers)
  .use(views)
  // Handle 404
  .get('/*', redirect('/'))
  // Start app
  .listen({ port: process.env.PORT || 3002 }, () => {
    console.timeEnd('Rill TodoMVC')
    process.send && process.send('online')
  })
