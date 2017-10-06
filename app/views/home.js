import React from 'react'
import Header from '../partials/header'
import TodoList from '../partials/todo-list'
import Footer from '../partials/footer'

/**
 * Route handler for rendering the home page.
 */
export default async ({ req, res, locals, session }) => {
  // Default filter to "all".
  const { params: { filter = 'all' } } = req
  const todos = session.get('todos') || []

  // Update document title.
  locals.title = `Todos: ${filter}`

  res.body = (
    <div>
      <section className='todoapp'>
        <Header />
        {todos.length !== 0 && <TodoList filter={filter} todos={todos} />}
      </section>
      <Footer />
    </div>
  )
}
