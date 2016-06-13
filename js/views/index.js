import redirect from '@rill/redirect'
import set from '@rill/set'
import home from './home'

// Setup all custom views with an existing Rill app.
export default (app) => {
  app
    .use(set('title', 'Rill'))
    .use(set('description', 'Isomorphic web application framework.'))
    .setup(home)
    .get('/*', redirect('/'))
}
