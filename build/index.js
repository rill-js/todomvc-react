require("source-map-support").install({ hookRequire: true })
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded chunks
/******/ 	// "0" means "already loaded"
/******/ 	var installedChunks = {
/******/ 		2: 0
/******/ 	};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/ 	// This file contains only the entry chunk.
/******/ 	// The chunk loading function for additional chunks
/******/ 	__webpack_require__.e = function requireEnsure(chunkId) {
/******/ 		var promises = [];
/******/
/******/
/******/ 		// ReadFile + VM.run chunk loading for javascript
/******/
/******/ 		var installedChunkData = installedChunks[chunkId];
/******/ 		if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 			// array of [resolve, reject, promise] means "currently loading"
/******/ 			if(installedChunkData) {
/******/ 				promises.push(installedChunkData[2]);
/******/ 			} else {
/******/ 				// load the chunk and return promise to it
/******/ 				var promise = new Promise(function(resolve, reject) {
/******/ 					installedChunkData = installedChunks[chunkId] = [resolve, reject];
/******/ 					var filename = require('path').join(__dirname, "/" + ({"0":"404","1":"500"}[chunkId]||chunkId) + "." + "ae1b38faa7" + ".js");
/******/ 					require('fs').readFile(filename, 'utf-8',  function(err, content) {
/******/ 						if(err) return reject(err);
/******/ 						var chunk = {};
/******/ 						require('vm').runInThisContext('(function(exports, require, __dirname, __filename) {' + content + '\n})', filename)(chunk, require, require('path').dirname(filename), filename);
/******/ 						var moreModules = chunk.modules, chunkIds = chunk.ids;
/******/ 						for(var moduleId in moreModules) {
/******/ 							modules[moduleId] = moreModules[moduleId];
/******/ 						}
/******/ 						var callbacks = [];
/******/ 						for(var i = 0; i < chunkIds.length; i++) {
/******/ 							if(installedChunks[chunkIds[i]])
/******/ 								callbacks = callbacks.concat(installedChunks[chunkIds[i]][0]);
/******/ 							installedChunks[chunkIds[i]] = 0;
/******/ 						}
/******/ 						for(i = 0; i < callbacks.length; i++)
/******/ 							callbacks[i]();
/******/ 					});
/******/ 				});
/******/ 				promises.push(installedChunkData[2] = promise);
/******/ 			}
/******/ 		}
/******/ 		return Promise.all(promises);
/******/ 	};
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// uncaught error handler for webpack runtime
/******/ 	__webpack_require__.oe = function(err) {
/******/ 		process.nextTick(function() {
/******/ 			throw err; // catch this error by using import().catch()
/******/ 		});
/******/ 	};
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("rill");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("@rill/react");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@rill/helmet");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("@rill/fresh");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@rill/etag");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("@rill/compress");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("@rill/static");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("@rill/progress");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@rill/logger");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@rill/expose");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@rill/body");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@rill/session");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@rill/redirect");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@rill/unhandled");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@rill/error");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/helpers/extends");

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "ms"
var external_ms_ = __webpack_require__(4);
var external_ms_default = /*#__PURE__*/__webpack_require__.n(external_ms_);

// EXTERNAL MODULE: external "rill"
var external_rill_ = __webpack_require__(1);
var external_rill_default = /*#__PURE__*/__webpack_require__.n(external_rill_);

// EXTERNAL MODULE: external "@rill/helmet"
var helmet_ = __webpack_require__(5);
var helmet_default = /*#__PURE__*/__webpack_require__.n(helmet_);

// EXTERNAL MODULE: external "@rill/fresh"
var fresh_ = __webpack_require__(6);
var fresh_default = /*#__PURE__*/__webpack_require__.n(fresh_);

// EXTERNAL MODULE: external "@rill/etag"
var etag_ = __webpack_require__(7);
var etag_default = /*#__PURE__*/__webpack_require__.n(etag_);

// EXTERNAL MODULE: external "@rill/compress"
var compress_ = __webpack_require__(8);
var compress_default = /*#__PURE__*/__webpack_require__.n(compress_);

// EXTERNAL MODULE: external "@rill/static"
var static_ = __webpack_require__(9);
var static_default = /*#__PURE__*/__webpack_require__.n(static_);

// EXTERNAL MODULE: external "@rill/progress"
var progress_ = __webpack_require__(10);
var progress_default = /*#__PURE__*/__webpack_require__.n(progress_);

// EXTERNAL MODULE: external "@rill/logger"
var logger_ = __webpack_require__(11);
var logger_default = /*#__PURE__*/__webpack_require__.n(logger_);

// EXTERNAL MODULE: external "@rill/expose"
var expose_ = __webpack_require__(12);
var expose_default = /*#__PURE__*/__webpack_require__.n(expose_);

// EXTERNAL MODULE: external "@rill/react"
var react_ = __webpack_require__(3);
var react_default = /*#__PURE__*/__webpack_require__.n(react_);

// EXTERNAL MODULE: external "@rill/body"
var body_ = __webpack_require__(13);
var body_default = /*#__PURE__*/__webpack_require__.n(body_);

// EXTERNAL MODULE: external "@rill/session"
var session_ = __webpack_require__(14);
var session_default = /*#__PURE__*/__webpack_require__.n(session_);

// EXTERNAL MODULE: external "@rill/redirect"
var redirect_ = __webpack_require__(15);
var redirect_default = /*#__PURE__*/__webpack_require__.n(redirect_);

// EXTERNAL MODULE: external "@rill/unhandled"
var unhandled_ = __webpack_require__(16);
var unhandled_default = /*#__PURE__*/__webpack_require__.n(unhandled_);

// EXTERNAL MODULE: external "@rill/error"
var error_ = __webpack_require__(17);
var error_default = /*#__PURE__*/__webpack_require__.n(error_);

// CONCATENATED MODULE: ./app/middleware/error-handler.js

/**
 * Simple error handling middleware which redirects to the error page.
 */

async function errorHandlerMiddleware({
  res
}, next) {
  try {
    await next();
  } catch (err) {
    const message = err instanceof error_default.a ? err.message : 'An unknown error has occurred.';
    res.redirect(`/500?message=${message}`);
  }
}
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// CONCATENATED MODULE: ./app/assets.js
/**
 * The below ensures that the proper (hashed) file names are used for
 * js and css assets.
 * 
 * It reuse the current script locations when rendering in the browser.
 * Server side we load the generated webpack asset locations.
 */
/* harmony default export */ var assets = (undefined ? {
  main: {
    css: document.getElementById("css").getAttribute("href"),
    js: document.getElementById("js").getAttribute("src")
  }
} : require("./public/assets.json"));
// CONCATENATED MODULE: ./app/middleware/preload.js


const {
  main,
  ...pages
} = assets;
/**
 * Middleware which will tell the browser to preload files
 * we know are going to be needed to render.
 */

async function preloadMiddleware({
  req,
  res
}, next) {
  await next();

  if (external_react_default.a.isValidElement(res.body)) {
    // If we are sending out a react component then we need the main JS and CSS.
    preloadAssets(res, main); // We can also check to see if this request has additional assets to preload.
    // These are determined by finding chunks that have the same name as the path.

    const pageAssets = pages[req.pathname.slice(1)];

    if (pageAssets) {
      preloadAssets(res, pageAssets);
    }
  }
}

function preloadAssets(res, {
  css,
  js
}) {
  if (css) {
    res.append('Link', `<${css}>; rel=preload; as=style;`);
  }

  if (js) {
    res.append('Link', `<${js}>; rel=preload; as=script;`);
  }
}
// EXTERNAL MODULE: external "cuid"
var external_cuid_ = __webpack_require__(18);
var external_cuid_default = /*#__PURE__*/__webpack_require__.n(external_cuid_);

// CONCATENATED MODULE: ./app/actions/todos.js

/**
 * Creates a new TODO.
 */

function create({
  req,
  res,
  session
}) {
  const todos = session.get('todos') || [];
  if (!req.body.text) return;
  todos.push({
    id: external_cuid_default()(),
    text: req.body.text
  });
  session.set('todos', todos);
  res.redirect('back');
}
/**
 * Opens a todo to be updated.
 */

function openById({
  req,
  res,
  session
}) {
  const todos = session.get('todos') || [];
  const todo = todos.find(todo => todo.id === req.params.id);
  if (!todo) return;
  todo.editing = true;
  session.set('todos', todos);
  res.redirect('back');
}
/**
 * Update an existing todo.
 */

function updateById({
  req,
  res,
  session
}) {
  const todos = session.get('todos') || [];
  const todo = todos.find(todo => todo.id === req.params.id);
  if (!todo || !req.body.text) return;
  todo.text = req.body.text;
  todo.editing = false;
  session.set('todos', todos);
  res.redirect('back');
}
/**
 * Toggles a todo's completion.
 */

function toggleById({
  req,
  res,
  session
}) {
  const todos = session.get('todos') || [];
  const todo = todos.find(todo => todo.id === req.params.id);
  if (!todo) return;
  todo.completed = !todo.completed;
  session.set('todos', todos);
  res.redirect('back');
}
/**
 * Toggles all todos completion.
 */

function toggleAll({
  req,
  res,
  session
}) {
  const todos = session.get('todos') || [];
  todos.forEach(todo => {
    todo.completed = !todo.completed;
  });
  session.set('todos', todos);
  res.redirect('back');
}
/**
 * Removes an existing todo.
 */

function removeById({
  req,
  res,
  session
}) {
  const todos = session.get('todos') || [];
  todos.splice(todos.findIndex(todo => todo.id === req.params.id), 1);
  session.set('todos', todos);
  res.redirect('back');
}
/**
 * Removes all completed todos.
 */

function removeCompleted({
  req,
  res,
  session
}) {
  const todos = session.get('todos') || [];
  session.set('todos', todos.filter(todo => !todo.completed));
  res.redirect('back');
}
// CONCATENATED MODULE: ./app/actions/index.js

 // Create a nested rill router for the controller routes.

/* harmony default export */ var actions = (new external_rill_default.a() // Created a nested prefixed router for todo controls.
.at('/todo/*', new external_rill_default.a().post('/create', create).get('/open/:id', openById).post('/update/:id', updateById).get('/toggle/:id', toggleById).get('/toggle-all', toggleAll).get('/remove/:id', removeById).get('/remove-completed', removeCompleted)));
// EXTERNAL MODULE: ./app/components/page/style.css
var style = __webpack_require__(20);

// CONCATENATED MODULE: ./app/components/page/index.js



/**
 * This is an example wrapper.
 * Wrappers are used to contain sub sections of an app, this particular one wraps the entire contents with the document.
 */

class page_Page extends external_react_["Component"] {
  render() {
    const {
      context,
      props
    } = this;
    const {
      locals
    } = context;
    return external_react_default.a.createElement("html", {
      lang: "en",
      "data-framework": "rill"
    }, external_react_default.a.createElement("head", null, external_react_default.a.createElement("meta", {
      charSet: "utf-8"
    }), external_react_default.a.createElement("meta", {
      name: "viewport",
      content: "width=device-width, initial-scale=1.0"
    }), external_react_default.a.createElement("title", null, locals.title), external_react_default.a.createElement("meta", {
      name: "description",
      content: "Todo MVC app using Rill and React."
    }), external_react_default.a.createElement("link", {
      id: "css",
      rel: "stylesheet",
      href: assets.main.css
    })), external_react_default.a.createElement("body", null, external_react_default.a.createElement("div", {
      id: "root"
    }, props.children), external_react_default.a.createElement("script", {
      id: "js",
      src: assets.main.js
    })));
  }

}
// CONCATENATED MODULE: ./app/components/header.js

class header_Header extends external_react_["Component"] {
  render() {
    return external_react_default.a.createElement("header", {
      className: "header"
    }, external_react_default.a.createElement("h1", null, "todos"), external_react_default.a.createElement("form", {
      className: "create-form",
      action: "/app/todo/create",
      method: "POST",
      autoComplete: "off"
    }, external_react_default.a.createElement("input", {
      className: "new-todo",
      name: "text",
      placeholder: "What needs to be done?",
      autoComplete: "off",
      autoFocus: true
    }), external_react_default.a.createElement("button", {
      type: "submit"
    })));
  }

}
// EXTERNAL MODULE: external "@babel/runtime/helpers/extends"
var extends_ = __webpack_require__(19);
var extends_default = /*#__PURE__*/__webpack_require__.n(extends_);

// EXTERNAL MODULE: external "classnames"
var external_classnames_ = __webpack_require__(2);
var external_classnames_default = /*#__PURE__*/__webpack_require__.n(external_classnames_);

// CONCATENATED MODULE: ./app/components/todo-item.js


class todo_item_TodoItem extends external_react_["Component"] {
  render() {
    const {
      props
    } = this;
    return external_react_default.a.createElement("li", {
      className: external_classnames_default()({
        completed: props.completed,
        editing: props.editing
      })
    }, external_react_default.a.createElement("div", {
      className: "view"
    }, external_react_default.a.createElement("a", {
      href: `/app/todo/toggle/${props.id}`
    }, external_react_default.a.createElement("input", {
      className: "toggle",
      type: "checkbox",
      defaultChecked: props.completed
    }), external_react_default.a.createElement("label", null)), external_react_default.a.createElement("a", {
      href: `/app/todo/open/${props.id}`
    }, external_react_default.a.createElement("label", null, props.text)), external_react_default.a.createElement("form", {
      action: `/app/todo/remove/${props.id}`
    }, external_react_default.a.createElement("button", {
      className: "destroy",
      type: "submit"
    }))), props.editing && external_react_default.a.createElement("form", {
      className: "update-form",
      action: `/app/todo/update/${props.id}`,
      method: "POST"
    }, external_react_default.a.createElement("input", {
      className: "edit",
      name: "text",
      defaultValue: props.text,
      autoFocus: true
    }), external_react_default.a.createElement("button", {
      type: "submit"
    })));
  }

}
// CONCATENATED MODULE: ./app/components/todo-list.js




class todo_list_TodoList extends external_react_["Component"] {
  render() {
    const {
      props
    } = this;
    const {
      todos,
      filter
    } = props;
    const completed = todos.filter(todo => todo.completed);
    const pending = todos.filter(todo => !todo.completed);
    const display = filter === 'all' ? todos : filter === 'pending' ? pending : filter === 'completed' ? completed : null;
    return external_react_default.a.createElement("div", null, external_react_default.a.createElement("section", {
      className: "main"
    }, external_react_default.a.createElement("a", {
      href: "/app/todo/toggle-all"
    }, external_react_default.a.createElement("input", {
      className: "toggle-all",
      type: "checkbox"
    }), external_react_default.a.createElement("label", {
      htmlFor: "toggle-all"
    }, "Mark all as complete")), external_react_default.a.createElement("ul", {
      className: "todo-list"
    }, display.map(todo => external_react_default.a.createElement(todo_item_TodoItem, extends_default()({
      key: todo.id
    }, todo))))), external_react_default.a.createElement("footer", {
      className: "footer"
    }, external_react_default.a.createElement("span", {
      className: "todo-count"
    }, external_react_default.a.createElement("strong", null, pending.length), " item left"), external_react_default.a.createElement("ul", {
      className: "filters"
    }, external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
      className: external_classnames_default()({
        selected: props.filter === 'all'
      }),
      href: "/"
    }, "All")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
      className: external_classnames_default()({
        selected: props.filter === 'pending'
      }),
      href: "/pending"
    }, "Active")), external_react_default.a.createElement("li", null, external_react_default.a.createElement("a", {
      className: external_classnames_default()({
        selected: props.filter === 'completed'
      }),
      href: "/completed"
    }, "Completed"))), external_react_default.a.createElement("form", {
      action: "/app/todo/remove-completed"
    }, external_react_default.a.createElement("button", {
      type: "submit",
      className: "clear-completed"
    }, "Clear completed"))));
  }

}
// CONCATENATED MODULE: ./app/components/footer.js

class footer_Footer extends external_react_["Component"] {
  render() {
    return external_react_default.a.createElement("footer", {
      id: "info",
      className: "info"
    }, external_react_default.a.createElement("h3", null, "Go ahead, disable JavaScript."), external_react_default.a.createElement("p", null, "Single-click to edit a todo"), external_react_default.a.createElement("p", null, "Template by ", external_react_default.a.createElement("a", {
      href: "http://sindresorhus.com"
    }, "Sindre Sorhus")), external_react_default.a.createElement("p", null, "Created by ", external_react_default.a.createElement("a", {
      href: "http://todomvc.com"
    }, "Dylan Piercey")), external_react_default.a.createElement("p", null, "Part of ", external_react_default.a.createElement("a", {
      href: "http://todomvc.com"
    }, "TodoMVC")));
  }

}
// CONCATENATED MODULE: ./app/pages/home.js




/**
 * Route handler for rendering the home page.
 */

/* harmony default export */ var home = (async ({
  req,
  res,
  locals,
  session
}) => {
  // Default filter to "all".
  const {
    params: {
      filter = 'all'
    }
  } = req;
  const todos = session.get('todos') || []; // Update document title.

  locals.title = `Todos: ${filter}`;
  res.body = external_react_default.a.createElement("div", null, external_react_default.a.createElement("section", {
    className: "todoapp"
  }, external_react_default.a.createElement(header_Header, null), todos.length !== 0 && external_react_default.a.createElement(todo_list_TodoList, {
    filter: filter,
    todos: todos
  })), external_react_default.a.createElement(footer_Footer, null));
});
// CONCATENATED MODULE: ./app/pages/index.js



 // Code split out the error and missing pages.

const errorPage = async ctx => (await __webpack_require__.e(/* import() | 500 */ 1).then(__webpack_require__.bind(null, 22))).default(ctx);

const missingPage = async ctx => (await __webpack_require__.e(/* import() | 404 */ 0).then(__webpack_require__.bind(null, 23))).default(ctx);

/* harmony default export */ var app_pages = (new external_rill_default.a().get(Object(react_["wrap"])(page_Page)) // Wrap all pages with the <Page> component.
.get('/500', errorPage).get('/404', missingPage).get('/:filter(all|pending|completed)?', home));
// CONCATENATED MODULE: ./app/index.js



















/* harmony default export */ var app = __webpack_exports__["default"] = (new external_rill_default.a().use(helmet_default()()).use(fresh_default()()).use(etag_default()()).use(compress_default()()).get(static_default()('build/public', {
  gzip: true,
  cache: `${external_ms_default()('30 days')}; immutable`
})).use(progress_default()({
  spinner: false,
  color: 'rgba(175, 47, 47, .3)'
})).use(body_default()()).use(session_default()()).use(logger_default()()).use(expose_default()()).use(react_default()()).use(unhandled_default()(redirect_default()('/404'))).use(errorHandlerMiddleware).use(preloadMiddleware).at('/app/*', actions).get(app_pages).listen({
  port: process.env.PORT || 8080
}, function () {
  if (!undefined && "production" === 'production') {
    console.log(`Server started on port '${this.address().port}'.`);
    process.send && process.send('online');
  }
}));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9mcmVzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2V0YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvYm9keVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWRpcmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2Vycm9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3VpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2Uvc3R5bGUuY3NzPzIwNjIiLCJ3ZWJwYWNrOi8vLy4vYXBwL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzLmpzIiwid2VicGFjazovLy8uL2FwcC9taWRkbGV3YXJlL3ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FjdGlvbnMvdG9kb3MuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2FjdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvdG9kby1pdGVtLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3RvZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGNodW5rc1xuIFx0Ly8gXCIwXCIgbWVhbnMgXCJhbHJlYWR5IGxvYWRlZFwiXG4gXHR2YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuIFx0XHQyOiAwXG4gXHR9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cbiBcdC8vIFRoaXMgZmlsZSBjb250YWlucyBvbmx5IHRoZSBlbnRyeSBjaHVuay5cbiBcdC8vIFRoZSBjaHVuayBsb2FkaW5nIGZ1bmN0aW9uIGZvciBhZGRpdGlvbmFsIGNodW5rc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5lID0gZnVuY3Rpb24gcmVxdWlyZUVuc3VyZShjaHVua0lkKSB7XG4gXHRcdHZhciBwcm9taXNlcyA9IFtdO1xuXG5cbiBcdFx0Ly8gUmVhZEZpbGUgKyBWTS5ydW4gY2h1bmsgbG9hZGluZyBmb3IgamF2YXNjcmlwdFxuXG4gXHRcdHZhciBpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG4gXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cbiBcdFx0XHQvLyBhcnJheSBvZiBbcmVzb2x2ZSwgcmVqZWN0LCBwcm9taXNlXSBtZWFucyBcImN1cnJlbnRseSBsb2FkaW5nXCJcbiBcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEpIHtcbiBcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdKTtcbiBcdFx0XHR9IGVsc2Uge1xuIFx0XHRcdFx0Ly8gbG9hZCB0aGUgY2h1bmsgYW5kIHJldHVybiBwcm9taXNlIHRvIGl0XG4gXHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKGZ1bmN0aW9uKHJlc29sdmUsIHJlamVjdCkge1xuIFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XTtcbiBcdFx0XHRcdFx0dmFyIGZpbGVuYW1lID0gcmVxdWlyZSgncGF0aCcpLmpvaW4oX19kaXJuYW1lLCBcIi9cIiArICh7XCIwXCI6XCI0MDRcIixcIjFcIjpcIjUwMFwifVtjaHVua0lkXXx8Y2h1bmtJZCkgKyBcIi5cIiArIFwiYWUxYjM4ZmFhN1wiICsgXCIuanNcIik7XG4gXHRcdFx0XHRcdHJlcXVpcmUoJ2ZzJykucmVhZEZpbGUoZmlsZW5hbWUsICd1dGYtOCcsICBmdW5jdGlvbihlcnIsIGNvbnRlbnQpIHtcbiBcdFx0XHRcdFx0XHRpZihlcnIpIHJldHVybiByZWplY3QoZXJyKTtcbiBcdFx0XHRcdFx0XHR2YXIgY2h1bmsgPSB7fTtcbiBcdFx0XHRcdFx0XHRyZXF1aXJlKCd2bScpLnJ1bkluVGhpc0NvbnRleHQoJyhmdW5jdGlvbihleHBvcnRzLCByZXF1aXJlLCBfX2Rpcm5hbWUsIF9fZmlsZW5hbWUpIHsnICsgY29udGVudCArICdcXG59KScsIGZpbGVuYW1lKShjaHVuaywgcmVxdWlyZSwgcmVxdWlyZSgncGF0aCcpLmRpcm5hbWUoZmlsZW5hbWUpLCBmaWxlbmFtZSk7XG4gXHRcdFx0XHRcdFx0dmFyIG1vcmVNb2R1bGVzID0gY2h1bmsubW9kdWxlcywgY2h1bmtJZHMgPSBjaHVuay5pZHM7XG4gXHRcdFx0XHRcdFx0Zm9yKHZhciBtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuIFx0XHRcdFx0XHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdFx0XHRcdFx0fVxuIFx0XHRcdFx0XHRcdHZhciBjYWxsYmFja3MgPSBbXTtcbiBcdFx0XHRcdFx0XHRmb3IodmFyIGkgPSAwOyBpIDwgY2h1bmtJZHMubGVuZ3RoOyBpKyspIHtcbiBcdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rc1tjaHVua0lkc1tpXV0pXG4gXHRcdFx0XHRcdFx0XHRcdGNhbGxiYWNrcyA9IGNhbGxiYWNrcy5jb25jYXQoaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRzW2ldXVswXSk7XG4gXHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZHNbaV1dID0gMDtcbiBcdFx0XHRcdFx0XHR9XG4gXHRcdFx0XHRcdFx0Zm9yKGkgPSAwOyBpIDwgY2FsbGJhY2tzLmxlbmd0aDsgaSsrKVxuIFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzW2ldKCk7XG4gXHRcdFx0XHRcdH0pO1xuIFx0XHRcdFx0fSk7XG4gXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuIFx0XHRcdH1cbiBcdFx0fVxuIFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwocHJvbWlzZXMpO1xuIFx0fTtcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyB1bmNhdWdodCBlcnJvciBoYW5kbGVyIGZvciB3ZWJwYWNrIHJ1bnRpbWVcbiBcdF9fd2VicGFja19yZXF1aXJlX18ub2UgPSBmdW5jdGlvbihlcnIpIHtcbiBcdFx0cHJvY2Vzcy5uZXh0VGljayhmdW5jdGlvbigpIHtcbiBcdFx0XHR0aHJvdyBlcnI7IC8vIGNhdGNoIHRoaXMgZXJyb3IgYnkgdXNpbmcgaW1wb3J0KCkuY2F0Y2goKVxuIFx0XHR9KTtcbiBcdH07XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2ZyZXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V0YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvY29tcHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvc3RhdGljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2xvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9leHBvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvYm9keVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3JlZGlyZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3VuaGFuZGxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjdWlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgSHR0cEVycm9yIGZyb20gJ0ByaWxsL2Vycm9yJ1xuXG4vKipcbiAqIFNpbXBsZSBlcnJvciBoYW5kbGluZyBtaWRkbGV3YXJlIHdoaWNoIHJlZGlyZWN0cyB0byB0aGUgZXJyb3IgcGFnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZXJyb3JIYW5kbGVyTWlkZGxld2FyZSAoeyByZXMgfSwgbmV4dCkge1xuICB0cnkge1xuICAgIGF3YWl0IG5leHQoKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yXG4gICAgICA/IGVyci5tZXNzYWdlXG4gICAgICA6ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nXG4gICAgcmVzLnJlZGlyZWN0KGAvNTAwP21lc3NhZ2U9JHttZXNzYWdlfWApXG4gIH1cbn1cbiIsIi8qKlxuICogVGhlIGJlbG93IGVuc3VyZXMgdGhhdCB0aGUgcHJvcGVyIChoYXNoZWQpIGZpbGUgbmFtZXMgYXJlIHVzZWQgZm9yXG4gKiBqcyBhbmQgY3NzIGFzc2V0cy5cbiAqIFxuICogSXQgcmV1c2UgdGhlIGN1cnJlbnQgc2NyaXB0IGxvY2F0aW9ucyB3aGVuIHJlbmRlcmluZyBpbiB0aGUgYnJvd3Nlci5cbiAqIFNlcnZlciBzaWRlIHdlIGxvYWQgdGhlIGdlbmVyYXRlZCB3ZWJwYWNrIGFzc2V0IGxvY2F0aW9ucy5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgcHJvY2Vzcy5icm93c2VyID8ge1xuICBtYWluOiB7XG4gICAgY3NzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNzc1wiKS5nZXRBdHRyaWJ1dGUoXCJocmVmXCIpLFxuICAgIGpzOiBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImpzXCIpLmdldEF0dHJpYnV0ZShcInNyY1wiKVxuICB9XG59IDogX19ub25fd2VicGFja19yZXF1aXJlX18oXCIuL3B1YmxpYy9hc3NldHMuanNvblwiKSIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBBU1NFVFMgZnJvbSAnLi4vYXNzZXRzJ1xuY29uc3QgeyBtYWluLCAuLi5wYWdlcyB9ID0gQVNTRVRTO1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgd2hpY2ggd2lsbCB0ZWxsIHRoZSBicm93c2VyIHRvIHByZWxvYWQgZmlsZXNcbiAqIHdlIGtub3cgYXJlIGdvaW5nIHRvIGJlIG5lZWRlZCB0byByZW5kZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWRNaWRkbGV3YXJlICh7IHJlcSwgcmVzIH0sIG5leHQpIHtcbiAgYXdhaXQgbmV4dCgpXG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChyZXMuYm9keSkpIHtcbiAgICAvLyBJZiB3ZSBhcmUgc2VuZGluZyBvdXQgYSByZWFjdCBjb21wb25lbnQgdGhlbiB3ZSBuZWVkIHRoZSBtYWluIEpTIGFuZCBDU1MuXG4gICAgcHJlbG9hZEFzc2V0cyhyZXMsIG1haW4pO1xuICAgIFxuICAgIC8vIFdlIGNhbiBhbHNvIGNoZWNrIHRvIHNlZSBpZiB0aGlzIHJlcXVlc3QgaGFzIGFkZGl0aW9uYWwgYXNzZXRzIHRvIHByZWxvYWQuXG4gICAgLy8gVGhlc2UgYXJlIGRldGVybWluZWQgYnkgZmluZGluZyBjaHVua3MgdGhhdCBoYXZlIHRoZSBzYW1lIG5hbWUgYXMgdGhlIHBhdGguXG4gICAgY29uc3QgcGFnZUFzc2V0cyA9IHBhZ2VzW3JlcS5wYXRobmFtZS5zbGljZSgxKV07XG4gICAgaWYgKHBhZ2VBc3NldHMpIHtcbiAgICAgIHByZWxvYWRBc3NldHMocmVzLCBwYWdlQXNzZXRzKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gcHJlbG9hZEFzc2V0cyhyZXMsIHsgY3NzLCBqcyB9KSB7XG4gIGlmIChjc3MpIHtcbiAgICByZXMuYXBwZW5kKCdMaW5rJywgYDwke2Nzc30+OyByZWw9cHJlbG9hZDsgYXM9c3R5bGU7YClcbiAgfVxuXG4gIGlmIChqcykge1xuICAgIHJlcy5hcHBlbmQoJ0xpbmsnLCBgPCR7anN9PjsgcmVsPXByZWxvYWQ7IGFzPXNjcmlwdDtgKVxuICB9XG59IiwiaW1wb3J0IHVpZCBmcm9tICdjdWlkJ1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVE9ETy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgaWYgKCFyZXEuYm9keS50ZXh0KSByZXR1cm5cbiAgdG9kb3MucHVzaCh7IGlkOiB1aWQoKSwgdGV4dDogcmVxLmJvZHkudGV4dCB9KVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBPcGVucyBhIHRvZG8gdG8gYmUgdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wZW5CeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbykgcmV0dXJuXG4gIHRvZG8uZWRpdGluZyA9IHRydWVcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVXBkYXRlIGFuIGV4aXN0aW5nIHRvZG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbyB8fCAhcmVxLmJvZHkudGV4dCkgcmV0dXJuXG4gIHRvZG8udGV4dCA9IHJlcS5ib2R5LnRleHRcbiAgdG9kby5lZGl0aW5nID0gZmFsc2VcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVG9nZ2xlcyBhIHRvZG8ncyBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKVxuICBpZiAoIXRvZG8pIHJldHVyblxuICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZFxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBUb2dnbGVzIGFsbCB0b2RvcyBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQWxsICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4geyB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZCB9KVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGV4aXN0aW5nIHRvZG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICB0b2Rvcy5zcGxpY2UodG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZCksIDEpXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGNvbXBsZXRlZCB0b2Rvcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKSlcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCAqIGFzIHRvZG9DdHJsIGZyb20gJy4vdG9kb3MnXG5cbi8vIENyZWF0ZSBhIG5lc3RlZCByaWxsIHJvdXRlciBmb3IgdGhlIGNvbnRyb2xsZXIgcm91dGVzLlxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcigpXG4gIC8vIENyZWF0ZWQgYSBuZXN0ZWQgcHJlZml4ZWQgcm91dGVyIGZvciB0b2RvIGNvbnRyb2xzLlxuICAuYXQoJy90b2RvLyonLCBuZXcgUm91dGVyKClcbiAgICAucG9zdCgnL2NyZWF0ZScsIHRvZG9DdHJsLmNyZWF0ZSlcbiAgICAuZ2V0KCcvb3Blbi86aWQnLCB0b2RvQ3RybC5vcGVuQnlJZClcbiAgICAucG9zdCgnL3VwZGF0ZS86aWQnLCB0b2RvQ3RybC51cGRhdGVCeUlkKVxuICAgIC5nZXQoJy90b2dnbGUvOmlkJywgdG9kb0N0cmwudG9nZ2xlQnlJZClcbiAgICAuZ2V0KCcvdG9nZ2xlLWFsbCcsIHRvZG9DdHJsLnRvZ2dsZUFsbClcbiAgICAuZ2V0KCcvcmVtb3ZlLzppZCcsIHRvZG9DdHJsLnJlbW92ZUJ5SWQpXG4gICAgLmdldCgnL3JlbW92ZS1jb21wbGV0ZWQnLCB0b2RvQ3RybC5yZW1vdmVDb21wbGV0ZWQpXG4gIClcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgQVNTRVRTIGZyb20gJy4uLy4uL2Fzc2V0cydcblxuLyoqXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgd3JhcHBlci5cbiAqIFdyYXBwZXJzIGFyZSB1c2VkIHRvIGNvbnRhaW4gc3ViIHNlY3Rpb25zIG9mIGFuIGFwcCwgdGhpcyBwYXJ0aWN1bGFyIG9uZSB3cmFwcyB0aGUgZW50aXJlIGNvbnRlbnRzIHdpdGggdGhlIGRvY3VtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNvbnRleHQsIHByb3BzIH0gPSB0aGlzXG4gICAgY29uc3QgeyBsb2NhbHMgfSA9IGNvbnRleHRcblxuICAgIHJldHVybiA8aHRtbCBsYW5nPSdlbicgZGF0YS1mcmFtZXdvcms9J3JpbGwnPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgLz5cbiAgICAgICAgPHRpdGxlPntsb2NhbHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1RvZG8gTVZDIGFwcCB1c2luZyBSaWxsIGFuZCBSZWFjdC4nIC8+XG4gICAgICAgIDxsaW5rIGlkPVwiY3NzXCIgcmVsPSdzdHlsZXNoZWV0JyBocmVmPXtBU1NFVFMubWFpbi5jc3N9IC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBpZD0ncm9vdCc+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICA8c2NyaXB0IGlkPVwianNcIiBzcmM9e0FTU0VUUy5tYWluLmpzfSAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgPGgxPnRvZG9zPC9oMT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdjcmVhdGUtZm9ybScgYWN0aW9uPScvYXBwL3RvZG8vY3JlYXRlJyBtZXRob2Q9J1BPU1QnIGF1dG9Db21wbGV0ZT0nb2ZmJz5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSduZXctdG9kbycgbmFtZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1doYXQgbmVlZHMgdG8gYmUgZG9uZT8nIGF1dG9Db21wbGV0ZT0nb2ZmJyBhdXRvRm9jdXMgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9oZWFkZXI+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0l0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXNcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17Y3goeyBjb21wbGV0ZWQ6IHByb3BzLmNvbXBsZXRlZCwgZWRpdGluZzogcHJvcHMuZWRpdGluZyB9KX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWV3Jz5cbiAgICAgICAgICA8YSBocmVmPXtgL2FwcC90b2RvL3RvZ2dsZS8ke3Byb3BzLmlkfWB9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndG9nZ2xlJyB0eXBlPSdjaGVja2JveCcgZGVmYXVsdENoZWNrZWQ9e3Byb3BzLmNvbXBsZXRlZH0gLz5cbiAgICAgICAgICAgIDxsYWJlbCAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPXtgL2FwcC90b2RvL29wZW4vJHtwcm9wcy5pZH1gfT48bGFiZWw+e3Byb3BzLnRleHR9PC9sYWJlbD48L2E+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPXtgL2FwcC90b2RvL3JlbW92ZS8ke3Byb3BzLmlkfWB9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Rlc3Ryb3knIHR5cGU9J3N1Ym1pdCcgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtwcm9wcy5lZGl0aW5nICYmIChcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J3VwZGF0ZS1mb3JtJyBhY3Rpb249e2AvYXBwL3RvZG8vdXBkYXRlLyR7cHJvcHMuaWR9YH0gbWV0aG9kPSdQT1NUJz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2VkaXQnIG5hbWU9J3RleHQnIGRlZmF1bHRWYWx1ZT17cHJvcHMudGV4dH0gYXV0b0ZvY3VzIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzXG4gICAgY29uc3QgeyB0b2RvcywgZmlsdGVyIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgY29tcGxldGVkID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQpXG4gICAgY29uc3QgcGVuZGluZyA9IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZClcbiAgICBjb25zdCBkaXNwbGF5ID0gKFxuICAgICAgZmlsdGVyID09PSAnYWxsJyA/IHRvZG9zXG4gICAgICA6IGZpbHRlciA9PT0gJ3BlbmRpbmcnID8gcGVuZGluZ1xuICAgICAgOiBmaWx0ZXIgPT09ICdjb21wbGV0ZWQnID8gY29tcGxldGVkXG4gICAgICA6IG51bGxcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICA8YSBocmVmPScvYXBwL3RvZG8vdG9nZ2xlLWFsbCc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd0b2dnbGUtYWxsJyB0eXBlPSdjaGVja2JveCcgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd0b2dnbGUtYWxsJz5NYXJrIGFsbCBhcyBjb21wbGV0ZTwvbGFiZWw+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3RvZG8tbGlzdCc+XG4gICAgICAgICAgICB7ZGlzcGxheS5tYXAodG9kbyA9PiA8VG9kb0l0ZW0ga2V5PXt0b2RvLmlkfSB7Li4udG9kb30gLz4pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0b2RvLWNvdW50Jz48c3Ryb25nPntwZW5kaW5nLmxlbmd0aH08L3N0cm9uZz4gaXRlbSBsZWZ0PC9zcGFuPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZpbHRlcnMnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KHsgc2VsZWN0ZWQ6IHByb3BzLmZpbHRlciA9PT0gJ2FsbCcgfSl9IGhyZWY9Jy8nPkFsbDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3goeyBzZWxlY3RlZDogcHJvcHMuZmlsdGVyID09PSAncGVuZGluZycgfSl9IGhyZWY9Jy9wZW5kaW5nJz5BY3RpdmU8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KHsgc2VsZWN0ZWQ6IHByb3BzLmZpbHRlciA9PT0gJ2NvbXBsZXRlZCcgfSl9IGhyZWY9Jy9jb21wbGV0ZWQnPkNvbXBsZXRlZDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxmb3JtIGFjdGlvbj0nL2FwcC90b2RvL3JlbW92ZS1jb21wbGV0ZWQnPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nY2xlYXItY29tcGxldGVkJz5DbGVhciBjb21wbGV0ZWQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb290ZXIgaWQ9J2luZm8nIGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgIDxoMz5HbyBhaGVhZCwgZGlzYWJsZSBKYXZhU2NyaXB0LjwvaDM+XG4gICAgICAgIDxwPlNpbmdsZS1jbGljayB0byBlZGl0IGEgdG9kbzwvcD5cbiAgICAgICAgPHA+VGVtcGxhdGUgYnkgPGEgaHJlZj0naHR0cDovL3NpbmRyZXNvcmh1cy5jb20nPlNpbmRyZSBTb3JodXM8L2E+PC9wPlxuICAgICAgICA8cD5DcmVhdGVkIGJ5IDxhIGhyZWY9J2h0dHA6Ly90b2RvbXZjLmNvbSc+RHlsYW4gUGllcmNleTwvYT48L3A+XG4gICAgICAgIDxwPlBhcnQgb2YgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5Ub2RvTVZDPC9hPjwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3RvZG8tbGlzdCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cbi8qKlxuICogUm91dGUgaGFuZGxlciBmb3IgcmVuZGVyaW5nIHRoZSBob21lIHBhZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IHJlcSwgcmVzLCBsb2NhbHMsIHNlc3Npb24gfSkgPT4ge1xuICAvLyBEZWZhdWx0IGZpbHRlciB0byBcImFsbFwiLlxuICBjb25zdCB7IHBhcmFtczogeyBmaWx0ZXIgPSAnYWxsJyB9IH0gPSByZXFcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuXG4gIC8vIFVwZGF0ZSBkb2N1bWVudCB0aXRsZS5cbiAgbG9jYWxzLnRpdGxlID0gYFRvZG9zOiAke2ZpbHRlcn1gXG5cbiAgcmVzLmJvZHkgPSAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9kb2FwcCc+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3RvZG9zLmxlbmd0aCAhPT0gMCAmJiA8VG9kb0xpc3QgZmlsdGVyPXtmaWx0ZXJ9IHRvZG9zPXt0b2Rvc30gLz59XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdAcmlsbC9yZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSdcbmltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUnXG5cbi8vIENvZGUgc3BsaXQgb3V0IHRoZSBlcnJvciBhbmQgbWlzc2luZyBwYWdlcy5cbmNvbnN0IGVycm9yUGFnZSA9IGFzeW5jIGN0eCA9PlxuICAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiNTAwXCIgKi8nLi81MDAnKSkuZGVmYXVsdChjdHgpXG5jb25zdCBtaXNzaW5nUGFnZSA9IGFzeW5jIGN0eCA9PlxuICAoYXdhaXQgaW1wb3J0KC8qIHdlYnBhY2tDaHVua05hbWU6IFwiNDA0XCIgKi8nLi80MDQnKSkuZGVmYXVsdChjdHgpXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKVxuICAuZ2V0KHdyYXAoUGFnZSkpIC8vIFdyYXAgYWxsIHBhZ2VzIHdpdGggdGhlIDxQYWdlPiBjb21wb25lbnQuXG4gIC5nZXQoJy81MDAnLCBlcnJvclBhZ2UpXG4gIC5nZXQoJy80MDQnLCBtaXNzaW5nUGFnZSlcbiAgLmdldCgnLzpmaWx0ZXIoYWxsfHBlbmRpbmd8Y29tcGxldGVkKT8nLCBob21lUGFnZSkiLCJpbXBvcnQgbXMgZnJvbSAnbXMnXG5pbXBvcnQgUm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgaGVsbWV0IGZyb20gJ0ByaWxsL2hlbG1ldCdcbmltcG9ydCBmcmVzaCBmcm9tICdAcmlsbC9mcmVzaCdcbmltcG9ydCBldGFnIGZyb20gJ0ByaWxsL2V0YWcnXG5pbXBvcnQgY29tcHJlc3MgZnJvbSAnQHJpbGwvY29tcHJlc3MnXG5pbXBvcnQgc2VydmUgZnJvbSAnQHJpbGwvc3RhdGljJ1xuaW1wb3J0IHByb2dyZXNzIGZyb20gJ0ByaWxsL3Byb2dyZXNzJ1xuaW1wb3J0IGxvZ2dlciBmcm9tICdAcmlsbC9sb2dnZXInXG5pbXBvcnQgZXhwb3NlIGZyb20gJ0ByaWxsL2V4cG9zZSdcbmltcG9ydCByZWFjdCBmcm9tICdAcmlsbC9yZWFjdCdcbmltcG9ydCBib2R5IGZyb20gJ0ByaWxsL2JvZHknXG5pbXBvcnQgc2Vzc2lvbiBmcm9tICdAcmlsbC9zZXNzaW9uJ1xuaW1wb3J0IHJlZGlyZWN0IGZyb20gJ0ByaWxsL3JlZGlyZWN0J1xuaW1wb3J0IHVuaGFuZGxlZCBmcm9tICdAcmlsbC91bmhhbmRsZWQnXG5pbXBvcnQgZXJyb3JIYW5kbGVyTWlkZGxld2FyZSBmcm9tICcuL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlcidcbmltcG9ydCBwcmVsb2FkTWlkZGxld2FyZSBmcm9tICcuL21pZGRsZXdhcmUvcHJlbG9hZCdcbmltcG9ydCBhY3Rpb25zIGZyb20gJy4vYWN0aW9ucydcbmltcG9ydCBwYWdlcyBmcm9tICcuL3BhZ2VzJ1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKClcbiAgLnVzZShoZWxtZXQoKSlcbiAgLnVzZShmcmVzaCgpKVxuICAudXNlKGV0YWcoKSlcbiAgLnVzZShjb21wcmVzcygpKVxuICAuZ2V0KHNlcnZlKCdidWlsZC9wdWJsaWMnLCB7IGd6aXA6IHRydWUsIGNhY2hlOiBgJHttcygnMzAgZGF5cycpfTsgaW1tdXRhYmxlYCB9KSlcbiAgLnVzZShwcm9ncmVzcyh7IHNwaW5uZXI6IGZhbHNlLCBjb2xvcjogJ3JnYmEoMTc1LCA0NywgNDcsIC4zKScgfSkpXG4gIC51c2UoYm9keSgpKVxuICAudXNlKHNlc3Npb24oKSlcbiAgLnVzZShsb2dnZXIoKSlcbiAgLnVzZShleHBvc2UoKSlcbiAgLnVzZShyZWFjdCgpKVxuICAudXNlKHVuaGFuZGxlZChyZWRpcmVjdCgnLzQwNCcpKSlcbiAgLnVzZShlcnJvckhhbmRsZXJNaWRkbGV3YXJlKVxuICAudXNlKHByZWxvYWRNaWRkbGV3YXJlKVxuICAuYXQoJy9hcHAvKicsIGFjdGlvbnMpXG4gIC5nZXQocGFnZXMpXG4gIC5saXN0ZW4oeyBwb3J0OiBwcm9jZXNzLmVudi5QT1JUIHx8IDgwODAgfSwgZnVuY3Rpb24gKCkge1xuICAgIGlmICghcHJvY2Vzcy5icm93c2VyICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgICAgIGNvbnNvbGUubG9nKGBTZXJ2ZXIgc3RhcnRlZCBvbiBwb3J0ICcke3RoaXMuYWRkcmVzcygpLnBvcnR9Jy5gKVxuICAgICAgcHJvY2Vzcy5zZW5kICYmIHByb2Nlc3Muc2VuZCgnb25saW5lJylcbiAgICB9XG4gIH0pXG4iXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUN4SUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7Ozs7OztBQ2RBOzs7Ozs7O0FBT0E7QUFDQTtBQUNBO0FBQ0E7QUFGQTtBQURBOztBQ1BBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUMvQkE7QUFFQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7OztBQ0pBO0FBQ0E7QUFDQTtBQUVBOzs7OztBQUlBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUdBO0FBQ0E7QUFuQkE7O0FDUkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBWkE7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBekJBOzs7QUNIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUE5Q0E7O0FDSkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBWkE7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUEsNEhBQ0E7QUFDQTtBQUFBLDhIQUNBO0FBQ0E7QUFDQTtBQUFBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFLQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFXQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=