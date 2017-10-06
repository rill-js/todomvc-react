import router from 'rill'
import { wrap } from '@rill/react'
import Page from '../partials/page'
import homePage from './home'
import notFoundPage from './not-found'

export default router()
  .get(wrap(Page)) // Wrap all pages with the <Page> component.
  .get('/404', notFoundPage)
  .get('/:filter(all|pending|completed)?', homePage)
