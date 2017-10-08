import React from 'react'

/**
 * Route handler for rendering the 404 page.
 */
export default async ({ res, locals }) => {
  locals.title = `Todos: Page not found`
  res.body = (
    <div>
      <footer className='info'>
        <h3>The requested page could not be found.</h3>
        <h2><a href='/'>Click here to go back</a></h2>
        <p>Template by <a href='http://sindresorhus.com'>Sindre Sorhus</a></p>
        <p>Created by <a href='http://todomvc.com'>Dylan Piercey</a></p>
        <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>
      </footer>
    </div>
  )
}
