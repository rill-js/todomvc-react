const MANIFEST = {
  'name': 'TodoMVC - Rill & React',
  'short_name': 'Rill',
  'start_url': '.',
  'display': 'minimal-ui',
  'theme_color': '#af2f2f',
  'background_color': '#af2f2f',
  'description': 'Todo MVC app using Rill and React.',
  'related_applications': [{
    'platform': 'web'
  }]
}


/**
 * Sends out a generated web manifest (server only).
 */
 export default function ({ res }) {
   res.body = MANIFEST
 }
