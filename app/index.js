import ms from 'ms'
import Router from 'rill'
import helmet from '@rill/helmet'
import fresh from '@rill/fresh'
import etag from '@rill/etag'
import compress from '@rill/compress'
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
import actions from './actions'
import pages from './pages'

export default new Router()
  .use(helmet())
  .use(fresh())
  .use(etag())
  .use(compress())
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
  .at('/app/*', actions)
  .get(pages)
  .listen({ port: process.env.PORT || 8080 }, function () {
    if (!process.browser && process.env.NODE_ENV === 'production') {
      console.log(`Server started on port '${this.address().port}'.`)
      process.send && process.send('online')
    }
  })
