import ms from 'ms'
import router from 'rill'
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
import preloadMiddleware from './middleware/preload'
import appCtrls from './controllers'
import views from './views'

export default router()
  .use(helmet())
  .use(fresh())
  .use(etag())
  .use(compress())
  .get('/polyfill.js', polyfill())
  .get(serve('build/public', { gzip: true, cache: `${ms('30 days')}; immutable` }))
  .use(progress({ spinner: false, color: '#009fe2' }))
  .use(body())
  .use(session())
  .use(logger())
  .use(expose())
  .use(react())
  .use(unhandled(redirect('/404')))
  .at('/app/*', appCtrls)
  .use(preloadMiddleware)
  .get(views)
  .listen({ port: 8081 }, () => {
    if (!process.browser && process.env.NODE_ENV === 'production') {
      process.stdout.write('server: Started at `http://localhost:8080`.')
      process.send && process.send('online')
    }
  })
