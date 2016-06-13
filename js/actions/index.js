import todos from './todos'

/**
 * Setup all action handlers.
 * Most apps have more than one resource and as such need to spread out actions more.
 * Todos are pretty simple.
 */
export default (app) => {
  app.setup(todos)
}
