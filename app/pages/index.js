import Router from 'rill'
import { wrap } from '@rill/react'
import Page from '../components/page'
import homePage from './home'

// Code split out the error and missing pages.
const errorPage = async ctx =>
  (await import(/* webpackChunkName: "500" */'./500')).default(ctx)
const missingPage = async ctx =>
  (await import(/* webpackChunkName: "404" */'./404')).default(ctx)

export default new Router()
  .get(wrap(Page)) // Wrap all pages with the <Page> component.
  .get('/500', errorPage)
  .get('/404', missingPage)
  .get('/:filter(all|pending|completed)?', homePage)