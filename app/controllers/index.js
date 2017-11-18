import Router from 'rill'
import * as todoCtrl from './todos'

// Create a nested rill router for the controller routes.
export default new Router()
  // Created a nested prefixed router for todo controls.
  .at('/todo/*', new Router()
    .post('/create', todoCtrl.create)
    .get('/open/:id', todoCtrl.openById)
    .post('/update/:id', todoCtrl.updateById)
    .get('/toggle/:id', todoCtrl.toggleById)
    .get('/toggle-all', todoCtrl.toggleAll)
    .get('/remove/:id', todoCtrl.removeById)
    .get('/remove-completed', todoCtrl.removeCompleted)
  )
