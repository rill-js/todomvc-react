import rill from 'rill'
import home from './home'

// Create a nested rill router for all of the views.
// (Only one in this case)
export default rill()
  .get('/:filter?', home)
