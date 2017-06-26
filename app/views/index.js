import router from 'rill'
import homePage from './home'

export default router()
  .get('/:filter?', homePage)
