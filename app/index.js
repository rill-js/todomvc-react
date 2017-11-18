import ms from 'ms'
import Router from 'rill'
import helmet from '@rill/helmet'
import fresh from '@rill/fresh'
import etag from '@rill/etag'
import compress from '@rill/compress'
import polyfill from '@rill/polyfill'
import serve from '@rill/static'
import progress from '@rill/progress'
import logger from '@rill/logger'
import expose from '@rill/expose'
import react from '@rill/react'
import body from '@rill/body'
import session from '@rill/session'
import redirect from '@rill/redirect'
import unhandled from '@rill/unhandled'
import errorHandlerMiddleware from './middleware/error-handler'
import preloadMiddleware from './middleware/preload'
import controllers from './controllers'
import views from './views'

export default new Router()
  .use(helmet())
  .use(fresh())
  .use(etag())
  .use(compress())
  .get('/polyfill.js', polyfill())
  .get(serve('build/public', { gzip: true, cache: `${ms('30 days')}; immutable` }))
  .use(progress({ spinner: false, color: 'rgba(175, 47, 47, .3)' }))
  .use(body())
  .use(session())
  .use(logger())
  .use(expose())
  .use(react())
  .use(unhandled(redirect('/404')))
  .use(errorHandlerMiddleware)
  .use(preloadMiddleware)
  .at('/app/*', controllers)
  .get(views)
  .listen({ port: 8081 }, () => {
    if (!process.browser && process.env.NODE_ENV === 'production') {
      process.stdout.write('server: Started at `http://localhost:8080`.')
      process.send && process.send('online')
    }
  })
