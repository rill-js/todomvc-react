import './style.css'
import { Component } from 'react'

/**
 * This is an example wrapper.
 * Wrappers are used to contain sub sections of an app, this particialar one wraps the entire contents with the document.
 */
export default class Page extends Component {
  render () {
    const { context, props } = this
    const { locals } = context

    return <html lang='en'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{locals.title}</title>
        <meta name='description' content='Todo MVC app using Rill and React.' />
        <link rel='stylesheet' href='/index.css' />
      </head>
      <body>
        <div id='root'>{props.children}</div>
        <script src='/polyfill.js' />
        <script src='/index.js' />
      </body>
    </html>
  }
}
