# Rill • [TodoMVC](http://todomvc.com)

## Why Rill

Rill is the answer to a simple question; Can I run my [Express](https://github.com/expressjs/express) style router in the browser? Turns out you can and it works awesome.

It brings a common interface to many typical app like features in both the browser and [nodejs](https://nodejs.org). Many isomorphic frameworks have crazy abstractions and learning curves but with Rill, if you understand [Express](https://github.com/expressjs/express) or [Koa](https://github.com/koajs/koa), you already know how the routing works! In Rill you get to program much of your application logic using the same api (client or server) including routing, rendering, data fetching and more are easily shared.

Rill also works perfectly as a stand alone [nodejs](https://nodejs.org) server or a stand alone browser framework. This allows for easy progressive enhancement. If all is well the browser can handle much of your application logic and if JavaScript fails for any reason your server knows exactly what to do.


## Resources

- [Website](https://github.com/rill-js/rill)
- [Documentation](https://github.com/rill-js/rill/tree/master/docs/api)

### Articles

- [Isomorphic Javascript, let’s make it easier.](https://medium.com/@pierceydylan/isomorphic-javascript-it-just-has-to-work-b9da5b0c8035)
- [Browsers, Servers, and APIs](https://medium.com/@iamjohnhenry/browsers-servers-and-apis-2f7b10523f39)
- [Why Everyone is Talking About Isomorphic](https://medium.com/capital-one-developers/why-everyone-is-talking-about-isomorphic-universal-javascript-and-why-it-matters-38c07c87905#.mdd84j28m)

### Support

- [Issues](https://github.com/rill-js/rill/issues)
- [Reddit](https://www.reddit.com/r/Rill/)
* [Gitter Chat](https://gitter.im/rill-js/rill)


## Implementation

Uses Rill with [@rill/react](https://github.com/rill-js/react) middleware to create an isomorphic/universal TodoMVC app.

Templates are created with [React](https://facebook.github.io/react/blog/) but you can can easily swap this out by using a different templating engine middleware such as [@rill/html](https://github.com/rill-js/html) or writing your own.

Webpack and babel are used to bundle the app for both the server and browser for optimum performance.

Use "npm run watch" to build and run the app yourself (starts up on port 8080).

## Credit

Created by [Dylan Piercey](https://github.com/DylanPiercey)
