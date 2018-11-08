import React from 'react'

/**
 * Middleware which will tell the browser to preload files
 * we know are going to be needed to render.
 */
export default async function preloadMiddleware ({ res }, next) {
  await next()
  // If we are sending out a react component then we need the main JS and CSS.
  if (React.isValidElement(res.body)) {
    res.append('Link', '</index.css>; rel=preload; as=style;')
    res.append('Link', '</index.js>; rel=preload; as=script;')
  }
}
