import cx from 'classnames'

export default async ({ req, res, locals, session }) => {
  // Default filter to "all".
  const { params: { filter = 'all' } } = req

    // Update document title.
  locals.title = `Todos: ${filter}`

  // Don't render with an invalid filter.
  if (!['all', 'active', 'completed'].includes(filter)) return

  const todos = session.get('todos') || []
  const completed = todos.filter(todo => todo.completed)
  const active = todos.filter(todo => !todo.completed)
  const listTodos = (
      filter === 'all' ? todos
      : filter === 'active' ? active
      : filter === 'completed' ? completed
      : null
    )

  res.body = (
    <div>
      <section className='todoapp'>
        <header className='header'>
          <h1>todos</h1>
          <form className='create-form' action='/app/todo/create' method='POST'>
            <input className='new-todo' name='text' placeholder='What needs to be done?' autoFocus />
            <button type='submit' />
          </form>
        </header>
        {todos.length !== 0 && (
          <div>
            <section className='main'>
              <a href='/app/todo/toggle-all'>
                <input className='toggle-all' type='checkbox' />
                <label htmlFor='toggle-all'>Mark all as complete</label>
              </a>
              <ul className='todo-list'>
                {listTodos.map(todo => (
                  <li key={todo.id} className={cx({ completed: todo.completed, editing: todo.editing })}>
                    <div className='view'>
                      <a href={`/app/todo/toggle/${todo.id}`}>
                        <input className='toggle' type='checkbox' defaultChecked={todo.completed} />
                        <div className='cover' />
                      </a>
                      <a href={`/app/todo/open/${todo.id}`}><label>{todo.text}</label></a>
                      <form action={`/app/todo/remove/${todo.id}`}>
                        <button className='destroy' type='submit' />
                      </form>
                    </div>

                    {todo.editing && (
                      <form className='update-form' action={`/app/todo/update/${todo.id}`} method='POST'>
                        <a href={`/app/todo/close/${todo.id}`} />
                        <input className='edit' name='text' defaultValue={todo.text} />
                        <button type='submit' />
                      </form>
                    )}
                  </li>
                ))}
              </ul>
            </section>
            <footer className='footer'>
              <span className='todo-count'><strong>{active.length}</strong> item left</span>
              <ul className='filters'>
                <li>
                  <a className={cx({ selected: filter === 'all' })} href='/'>All</a>
                </li>
                <li>
                  <a className={cx({ selected: filter === 'active' })} href='/active'>Active</a>
                </li>
                <li>
                  <a className={cx({ selected: filter === 'completed' })} href='/completed'>Completed</a>
                </li>
              </ul>

              <form action='/app/todo/remove-completed'>
                <button type='submit' className='clear-completed'>Clear completed</button>
              </form>
            </footer>
          </div>
        )}
      </section>
      <footer className='info'>
        <h3>Go ahead, disable JavaScript.</h3>
        <p>Single-click to edit a todo</p>
        <p>Template by <a href='http://sindresorhus.com'>Sindre Sorhus</a></p>
        <p>Created by <a href='http://todomvc.com'>Dylan Piercey</a></p>
        <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>
      </footer>
    </div>
  )
}
