import React, { Component } from 'react'

export default class Header extends Component {
  render () {
    return (
      <header className='header'>
        <h1>todos</h1>
        <form className='create-form' action='/app/todo/create' method='POST'>
          <input className='new-todo' name='text' placeholder='What needs to be done?' autoFocus />
          <button type='submit' />
        </form>
      </header>
    )
  }
}
