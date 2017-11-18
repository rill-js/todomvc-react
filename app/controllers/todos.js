import uid from 'cuid'

/**
 * Creates a new TODO.
 */
export function create ({ req, res, session }) {
  const todos = session.get('todos') || []
  if (!req.body.text) return
  todos.push({ id: uid(), text: req.body.text })
  session.set('todos', todos)
  res.redirect('back')
}

/**
 * Opens a todo to be updated.
 */
export function openById ({ req, res, session }) {
  const todos = session.get('todos') || []
  const todo = todos.find(todo => todo.id === req.params.id)
  if (!todo) return
  todo.editing = true
  session.set('todos', todos)
  res.redirect('back')
}

/**
 * Update an existing todo.
 */
export function updateById ({ req, res, session }) {
  const todos = session.get('todos') || []
  const todo = todos.find(todo => todo.id === req.params.id)
  if (!todo || !req.body.text) return
  todo.text = req.body.text
  todo.editing = false
  session.set('todos', todos)
  res.redirect('back')
}

/**
 * Toggles a todo's completion.
 */
export function toggleById ({ req, res, session }) {
  const todos = session.get('todos') || []
  const todo = todos.find(todo => todo.id === req.params.id)
  if (!todo) return
  todo.completed = !todo.completed
  session.set('todos', todos)
  res.redirect('back')
}

/**
 * Toggles all todos completion.
 */
export function toggleAll ({ req, res, session }) {
  const todos = session.get('todos') || []
  todos.forEach(todo => { todo.completed = !todo.completed })
  session.set('todos', todos)
  res.redirect('back')
}

/**
 * Removes an existing todo.
 */
export function removeById ({ req, res, session }) {
  const todos = session.get('todos') || []
  todos.splice(todos.findIndex(todo => todo.id === req.params.id), 1)
  session.set('todos', todos)
  res.redirect('back')
}

/**
 * Removes all completed todos.
 */
export function removeCompleted ({ req, res, session }) {
  const todos = session.get('todos') || []
  session.set('todos', todos.filter(todo => !todo.completed))
  res.redirect('back')
}
