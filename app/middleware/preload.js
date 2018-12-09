import React from 'react'
import ASSETS from '../assets'
const { main, ...pages } = ASSETS;

/**
 * Middleware which will tell the browser to preload files
 * we know are going to be needed to render.
 */
export default async function preloadMiddleware ({ req, res }, next) {
  await next()
  if (React.isValidElement(res.body)) {
    // If we are sending out a react component then we need the main JS and CSS.
    preloadAssets(res, main);
    
    // We can also check to see if this request has additional assets to preload.
    // These are determined by finding chunks that have the same name as the path.
    const pageAssets = pages[req.pathname.slice(1)];
    if (pageAssets) {
      preloadAssets(res, pageAssets);
    }
  }
}

function preloadAssets(res, { css, js }) {
  if (css) {
    res.append('Link', `<${css}>; rel=preload; as=style;`)
  }

  if (js) {
    res.append('Link', `<${js}>; rel=preload; as=script;`)
  }
}