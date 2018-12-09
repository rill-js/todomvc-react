import './style.css'
import React, { Component } from 'react'
import ASSETS from '../../assets'

/**
 * This is an example wrapper.
 * Wrappers are used to contain sub sections of an app, this particular one wraps the entire contents with the document.
 */
export default class Page extends Component {
  render () {
    const { context, props } = this
    const { locals } = context

    return <html lang='en' data-framework='rill'>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{locals.title}</title>
        <meta name='description' content='Todo MVC app using Rill and React.' />
        <link id="css" rel='stylesheet' href={ASSETS.main.css} />
      </head>
      <body>
        <div id='root'>{props.children}</div>
        <script id="js" src={ASSETS.main.js} />
      </body>
    </html>
  }
}
