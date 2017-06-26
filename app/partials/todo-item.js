import cx from 'classnames'
import { Component } from 'react'

export default class TodoItem extends Component {
  render () {
    const { props } = this
    return (
      <li className={cx({ completed: props.completed, editing: props.editing })}>
        <div className='view'>
          <a href={`/app/todo/toggle/${props.id}`}>
            <input className='toggle' type='checkbox' defaultChecked={props.completed} />
            <div className='cover' />
          </a>
          <a href={`/app/todo/open/${props.id}`}><label>{props.text}</label></a>
          <form action={`/app/todo/remove/${props.id}`}>
            <button className='destroy' type='submit' />
          </form>
        </div>

        {props.editing && (
          <form className='update-form' action={`/app/todo/update/${props.id}`} method='POST'>
            <a href={`/app/todo/close/${props.id}`} />
            <input className='edit' name='text' defaultValue={props.text} />
            <button type='submit' />
          </form>
        )}
      </li>
    )
  }
}
