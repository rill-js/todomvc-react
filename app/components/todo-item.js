import cx from 'classnames'
import React, { Component } from 'react'

export default class TodoItem extends Component {
  render () {
    const { props } = this
    return (
      <li className={cx({ completed: props.completed, editing: props.editing })}>
        <div className='view'>
          <a href={`/app/todo/toggle/${props.id}`} aria-label='Toggle Todo'>
            <input className='toggle' type='checkbox' defaultChecked={props.completed} />
            <label />
          </a>
          <a href={`/app/todo/open/${props.id}`} aria-label='Edit Todo'><label>{props.text}</label></a>
          <form action={`/app/todo/remove/${props.id}`}>
            <button className='destroy' type='submit' />
          </form>
        </div>

        {props.editing && (
          <form className='update-form' action={`/app/todo/update/${props.id}`} method='POST'>
            <input className='edit' name='text' defaultValue={props.text} autoFocus />
            <button type='submit' />
          </form>
        )}
      </li>
    )
  }
}
