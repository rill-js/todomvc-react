import rill from 'rill'
import * as todoCtrl from './todos'

// Create a nested rill router for the controller routes.
export default rill()
  .post('/todo/create', todoCtrl.create)
  .get('/todo/open/:id', todoCtrl.openById)
  .get('/todo/close/:id', todoCtrl.closeById)
  .post('/todo/update/:id', todoCtrl.updateById)
  .get('/todo/toggle/:id', todoCtrl.toggleById)
  .get('/todo/toggle-all', todoCtrl.toggleAll)
  .get('/todo/remove/:id', todoCtrl.removeById)
  .get('/todo/remove-completed', todoCtrl.removeCompleted)
