# Rill • [TodoMVC](http://todomvc.com)

> Expressive HTTP middleware for node.js and the browser. Rill brings cascading middleware to the browser and enables truly isomorphic web applications. It makes apps enjoyable to write with a simpler top down mental model of your app and free progressive enhancement.
> Rill provides the minimum for abstractions over node and the browser enabling things like routing (with redirecting, refreshes and more), cookies, and middleware with the same api.


## Resources

- [Website](https://github.com/rill-js/rill)
- [Documentation](https://github.com/rill-js/rill/tree/master/docs/api)

### Articles

- [Isomorphic Javascript, let’s make it easier.](https://medium.com/@pierceydylan/isomorphic-javascript-it-just-has-to-work-b9da5b0c8035)

### Support

- [Issues](https://github.com/rill-js/rill/issues)
- [Reddit](https://www.reddit.com/r/Rill/)


## Implementation

Uses Rill with "@rill/html" rendering to create an isomorphic/universal TodoMVC app.

Templates are created with [as-html](https://github.com/DylanPiercey/as-html) which enables a simple templating language with es6 tagged templates. You can easily swap this out by using a different templating engine or a different rendering engine such as "@rill/react".

Some misc middleware is also used such as "@rill/progress" for progress bars.
Checkout all of the middleware used in "js/app.js".

Browserify and babel are used to bundle the app for the browser.

Use "npm start" to build and run the app yourself.

## Credit

Created by [Dylan Piercey](https://github.com/DylanPiercey)
