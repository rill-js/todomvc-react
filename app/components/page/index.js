import './style.css'
import manifest from '../../assets/manifest.webmanifest'
import imgFavicon from '../../assets/favicon.png'
import React, { Component } from 'react'

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
        <meta httpEquiv='X-UA-Compatible' content='IE=edge,chrome=1' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>{locals.title}</title>
        <meta name='description' content='Todo MVC app using Rill and React.' />
        <meta name='theme-color' content='#af2f2f' />
        <link rel='manifest' href={manifest} />
        <link rel='shortcut icon' href={imgFavicon} />
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
