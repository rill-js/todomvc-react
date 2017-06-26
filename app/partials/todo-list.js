import cx from 'classnames'
import { Component } from 'react'
import TodoItem from './todo-item'

export default class TodoList extends Component {
  render () {
    const { props } = this
    const { todos, filter } = props

    const completed = todos.filter(todo => todo.completed)
    const pending = todos.filter(todo => !todo.completed)
    const display = (
      filter === 'all' ? todos
      : filter === 'pending' ? pending
      : filter === 'completed' ? completed
      : null
    )

    return (
      <div>
        <section className='main'>
          <a href='/app/todo/toggle-all'>
            <input className='toggle-all' type='checkbox' />
            <label htmlFor='toggle-all'>Mark all as complete</label>
          </a>
          <ul className='todo-list'>
            {display.map(todo => <TodoItem key={todo.id} {...todo} />)}
          </ul>
        </section>
        <footer className='footer'>
          <span className='todo-count'><strong>{pending.length}</strong> item left</span>
          <ul className='filters'>
            <li>
              <a className={cx({ selected: props.filter === 'all' })} href='/'>All</a>
            </li>
            <li>
              <a className={cx({ selected: props.filter === 'active' })} href='/active'>Active</a>
            </li>
            <li>
              <a className={cx({ selected: props.filter === 'completed' })} href='/completed'>Completed</a>
            </li>
          </ul>

          <form action='/app/todo/remove-completed'>
            <button type='submit' className='clear-completed'>Clear completed</button>
          </form>
        </footer>
      </div>
    )
  }
}
