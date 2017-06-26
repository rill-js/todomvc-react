import { Component } from 'react'

export default class Footer extends Component {
  render () {
    return (
      <footer className='info'>
        <h3>Go ahead, disable JavaScript.</h3>
        <p>Single-click to edit a todo</p>
        <p>Template by <a href='http://sindresorhus.com'>Sindre Sorhus</a></p>
        <p>Created by <a href='http://todomvc.com'>Dylan Piercey</a></p>
        <p>Part of <a href='http://todomvc.com'>TodoMVC</a></p>
      </footer>
    )
  }
}
