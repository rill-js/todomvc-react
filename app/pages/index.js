import Router from 'rill'
import { wrap } from '@rill/react'
import Page from '../components/page'
import homePage from './home'
import errorPage from './500'
import missingPage from './404'

export default new Router()
  .get(wrap(Page)) // Wrap all pages with the <Page> component.
  .get('/500', errorPage)
  .get('/404', missingPage)
  .get('/:filter(all|pending|completed)?', homePage)
