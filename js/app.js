// Polyfills
import 'babel-polyfill'

// Libraries
import rill from 'rill'

// Middleware
import serve from '@rill/static'
import logger from '@rill/logger'
import progress from '@rill/progress'
import session from '@rill/session'
import html from '@rill/html'
import body from '@rill/body'

// Subroutes
import actions from './actions'
import wrappers from './wrappers'
import views from './views'

// Create app
console.time('Rill TodoMVC')
rill()
  .use(serve('public'))
  .use(serve('node_modules/todomvc-common'))
  .use(serve('node_modules/todomvc-app-css'))
  .use(body())
  .use(progress())
  .use(session())
  .use(logger())
  .use(html())
  .setup(actions)
  .setup(wrappers)
  .setup(views)
  .listen({ port: process.env.PORT || 3002 }, ()=> {
    console.timeEnd('Rill TodoMVC')
    process.send && process.send('online')
  })
