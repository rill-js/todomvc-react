import html from 'as-html'

/**
 * This middleware will wrap an existing html response body with the rest of the document html.
 */
export default async function pageWrapper ({ res, locals }, next) {
  await next()
  if (res.get("Content-Type") !== "text/html") return
  res.body = html`
    <!doctype html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <meta name="description" content=${locals.description}/>
        <title>${locals.title}</title>
        <link rel="stylesheet" href="/base.css">
        <link rel="stylesheet" href="/index.css">
        <style>
          .todo-list a {
            color: #4d4d4d;
            text-decoration: none;
          }

          /* Makes underlying input not clickable since we use links */
          .todo-list a .cover {
            position: absolute;
            width: 40px;
            height: 40px;
          }
        </style>
      </head>
      <body>
        <section class="todoapp">!${res.body}</section>
        <footer class="info">
          <h3>Go ahead, disable JavaScript.</h3>
          <p>Single-click to edit a todo</p>
          <p>Template by <a href="http://sindresorhus.com">Sindre Sorhus</a></p>
          <p>Created by <a href="http://todomvc.com">Dylan Piercey</a></p>
          <p>Part of <a href="http://todomvc.com">TodoMVC</a></p>
        </footer>
        <script src="/bundle.js"></script>
      </body>
    </html>
  `
}
