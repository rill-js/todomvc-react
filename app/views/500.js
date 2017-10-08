import React from 'react'

/**
 * Route handler for rendering the 404 page.
 */
export default async ({ req, res, locals }) => {
  const { message } = req.query
  locals.title = `Todos: Error`
  res.body = (
    <div>
      <footer className='info'>
        <h3>{message}</h3>
        <h2><a href='/'>Click here to go back</a></h2>
        <p>Template by <a href='http://sindresorhus.com'>Sindre Sorhus</a></p>
        <p>Created by <a href='http://todomvc.com'>Dylan Piercey</a></p>
        <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>
      </footer>
    </div>
  )
}
