require("source-map-support").install({ hookRequire: true })
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
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

// CONCATENATED MODULE: ./app/middleware/preload.js

/**
 * Middleware which will tell the browser to preload files
 * we know are going to be needed to render.
 */

async function preloadMiddleware({
  res
}, next) {
  await next(); // If we are sending out a react component then we need the main JS and CSS.

  if (external_react_default.a.isValidElement(res.body)) {
    res.append('Link', '</index.css>; rel=preload; as=style;');
    res.append('Link', '</index.js>; rel=preload; as=script;');
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
      rel: "stylesheet",
      href: "/index.css"
    })), external_react_default.a.createElement("body", null, external_react_default.a.createElement("div", {
      id: "root"
    }, props.children), external_react_default.a.createElement("script", {
      src: "/index.js"
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
// CONCATENATED MODULE: ./app/pages/500.js

/**
 * Route handler for rendering the 404 page.
 */

/* harmony default export */ var _500 = (async ({
  req,
  res,
  locals
}) => {
  const {
    message
  } = req.query;
  locals.title = `Todos: Error`;
  res.status = 500;
  res.body = external_react_default.a.createElement("div", null, external_react_default.a.createElement("footer", {
    className: "info"
  }, external_react_default.a.createElement("h3", null, message), external_react_default.a.createElement("h2", null, external_react_default.a.createElement("a", {
    href: "/"
  }, "Click here to go back")), external_react_default.a.createElement("p", null, "Template by ", external_react_default.a.createElement("a", {
    href: "http://sindresorhus.com"
  }, "Sindre Sorhus")), external_react_default.a.createElement("p", null, "Created by ", external_react_default.a.createElement("a", {
    href: "http://todomvc.com"
  }, "Dylan Piercey")), external_react_default.a.createElement("p", null, "Part of ", external_react_default.a.createElement("a", {
    href: "http://todomvc.com"
  }, "TodoMVC"))));
});
// CONCATENATED MODULE: ./app/pages/404.js

/**
 * Route handler for rendering the 404 page.
 * @param {Rill.Context} options
 */

/* harmony default export */ var _404 = (async ({
  res,
  locals
}) => {
  locals.title = `Todos: Page not found`;
  res.status = 404;
  res.body = external_react_default.a.createElement("div", null, external_react_default.a.createElement("footer", {
    id: "info",
    className: "info"
  }, external_react_default.a.createElement("h3", null, "The requested page could not be found."), external_react_default.a.createElement("h2", null, external_react_default.a.createElement("a", {
    href: "/"
  }, "Click here to go back")), external_react_default.a.createElement("p", null, "Template by ", external_react_default.a.createElement("a", {
    href: "http://sindresorhus.com"
  }, "Sindre Sorhus")), external_react_default.a.createElement("p", null, "Created by ", external_react_default.a.createElement("a", {
    href: "http://todomvc.com"
  }, "Dylan Piercey")), external_react_default.a.createElement("p", null, "Part of ", external_react_default.a.createElement("a", {
    href: "http://todomvc.com"
  }, "TodoMVC"))));
});
// CONCATENATED MODULE: ./app/pages/index.js






/* harmony default export */ var pages = (new external_rill_default.a().get(Object(react_["wrap"])(page_Page)) // Wrap all pages with the <Page> component.
.get('/500', _500).get('/404', _404).get('/:filter(all|pending|completed)?', home));
// CONCATENATED MODULE: ./app/index.js



















/* harmony default export */ var app = __webpack_exports__["default"] = (new external_rill_default.a().use(helmet_default()()).use(fresh_default()()).use(etag_default()()).use(compress_default()()).get(static_default()('build/public', {
  gzip: true,
  cache: `${external_ms_default()('30 days')}; immutable`
})).use(progress_default()({
  spinner: false,
  color: 'rgba(175, 47, 47, .3)'
})).use(body_default()()).use(session_default()()).use(logger_default()()).use(expose_default()()).use(react_default()()).use(unhandled_default()(redirect_default()('/404'))).use(errorHandlerMiddleware).use(preloadMiddleware).at('/app/*', actions).get(pages).listen({
  port: process.env.PORT || 8080
}, function () {
  if (!undefined && "production" === 'production') {
    console.log(`Server started on port '${this.address().port}'.`);
    process.send && process.send('online');
  }
}));

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyaWxsXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY2xhc3NuYW1lc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3JlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9mcmVzaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2V0YWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvYm9keVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWRpcmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2Vycm9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiY3VpZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2Uvc3R5bGUuY3NzP2UxZjYiLCJ3ZWJwYWNrOi8vLy4vYXBwL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvbWlkZGxld2FyZS9wcmVsb2FkLmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL3RvZG9zLmpzIiwid2VicGFjazovLy8uL2FwcC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3BhZ2UvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvaGVhZGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9jb21wb25lbnRzL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy90b2RvLWxpc3QuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy9ob21lLmpzIiwid2VicGFjazovLy8uL2FwcC9wYWdlcy81MDAuanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL3BhZ2VzLzQwNC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vYXBwL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSAyMSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyaWxsXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvaGVsbWV0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2ZyZXNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V0YWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvY29tcHJlc3NcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvc3RhdGljXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Byb2dyZXNzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2xvZ2dlclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9leHBvc2VcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvYm9keVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zZXNzaW9uXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3JlZGlyZWN0XCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3VuaGFuZGxlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9lcnJvclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjdWlkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgSHR0cEVycm9yIGZyb20gJ0ByaWxsL2Vycm9yJ1xuXG4vKipcbiAqIFNpbXBsZSBlcnJvciBoYW5kbGluZyBtaWRkbGV3YXJlIHdoaWNoIHJlZGlyZWN0cyB0byB0aGUgZXJyb3IgcGFnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZXJyb3JIYW5kbGVyTWlkZGxld2FyZSAoeyByZXMgfSwgbmV4dCkge1xuICB0cnkge1xuICAgIGF3YWl0IG5leHQoKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yXG4gICAgICA/IGVyci5tZXNzYWdlXG4gICAgICA6ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nXG4gICAgcmVzLnJlZGlyZWN0KGAvNTAwP21lc3NhZ2U9JHttZXNzYWdlfWApXG4gIH1cbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBNaWRkbGV3YXJlIHdoaWNoIHdpbGwgdGVsbCB0aGUgYnJvd3NlciB0byBwcmVsb2FkIGZpbGVzXG4gKiB3ZSBrbm93IGFyZSBnb2luZyB0byBiZSBuZWVkZWQgdG8gcmVuZGVyLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkTWlkZGxld2FyZSAoeyByZXMgfSwgbmV4dCkge1xuICBhd2FpdCBuZXh0KClcbiAgLy8gSWYgd2UgYXJlIHNlbmRpbmcgb3V0IGEgcmVhY3QgY29tcG9uZW50IHRoZW4gd2UgbmVlZCB0aGUgbWFpbiBKUyBhbmQgQ1NTLlxuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQocmVzLmJvZHkpKSB7XG4gICAgcmVzLmFwcGVuZCgnTGluaycsICc8L2luZGV4LmNzcz47IHJlbD1wcmVsb2FkOyBhcz1zdHlsZTsnKVxuICAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9pbmRleC5qcz47IHJlbD1wcmVsb2FkOyBhcz1zY3JpcHQ7JylcbiAgfVxufVxuIiwiaW1wb3J0IHVpZCBmcm9tICdjdWlkJ1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVE9ETy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgaWYgKCFyZXEuYm9keS50ZXh0KSByZXR1cm5cbiAgdG9kb3MucHVzaCh7IGlkOiB1aWQoKSwgdGV4dDogcmVxLmJvZHkudGV4dCB9KVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBPcGVucyBhIHRvZG8gdG8gYmUgdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wZW5CeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbykgcmV0dXJuXG4gIHRvZG8uZWRpdGluZyA9IHRydWVcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVXBkYXRlIGFuIGV4aXN0aW5nIHRvZG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbyB8fCAhcmVxLmJvZHkudGV4dCkgcmV0dXJuXG4gIHRvZG8udGV4dCA9IHJlcS5ib2R5LnRleHRcbiAgdG9kby5lZGl0aW5nID0gZmFsc2VcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVG9nZ2xlcyBhIHRvZG8ncyBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKVxuICBpZiAoIXRvZG8pIHJldHVyblxuICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZFxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBUb2dnbGVzIGFsbCB0b2RvcyBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQWxsICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4geyB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZCB9KVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGV4aXN0aW5nIHRvZG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICB0b2Rvcy5zcGxpY2UodG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZCksIDEpXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGNvbXBsZXRlZCB0b2Rvcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKSlcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cbiIsImltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCAqIGFzIHRvZG9DdHJsIGZyb20gJy4vdG9kb3MnXG5cbi8vIENyZWF0ZSBhIG5lc3RlZCByaWxsIHJvdXRlciBmb3IgdGhlIGNvbnRyb2xsZXIgcm91dGVzLlxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcigpXG4gIC8vIENyZWF0ZWQgYSBuZXN0ZWQgcHJlZml4ZWQgcm91dGVyIGZvciB0b2RvIGNvbnRyb2xzLlxuICAuYXQoJy90b2RvLyonLCBuZXcgUm91dGVyKClcbiAgICAucG9zdCgnL2NyZWF0ZScsIHRvZG9DdHJsLmNyZWF0ZSlcbiAgICAuZ2V0KCcvb3Blbi86aWQnLCB0b2RvQ3RybC5vcGVuQnlJZClcbiAgICAucG9zdCgnL3VwZGF0ZS86aWQnLCB0b2RvQ3RybC51cGRhdGVCeUlkKVxuICAgIC5nZXQoJy90b2dnbGUvOmlkJywgdG9kb0N0cmwudG9nZ2xlQnlJZClcbiAgICAuZ2V0KCcvdG9nZ2xlLWFsbCcsIHRvZG9DdHJsLnRvZ2dsZUFsbClcbiAgICAuZ2V0KCcvcmVtb3ZlLzppZCcsIHRvZG9DdHJsLnJlbW92ZUJ5SWQpXG4gICAgLmdldCgnL3JlbW92ZS1jb21wbGV0ZWQnLCB0b2RvQ3RybC5yZW1vdmVDb21wbGV0ZWQpXG4gIClcbiIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbi8qKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIHdyYXBwZXIuXG4gKiBXcmFwcGVycyBhcmUgdXNlZCB0byBjb250YWluIHN1YiBzZWN0aW9ucyBvZiBhbiBhcHAsIHRoaXMgcGFydGljdWxhciBvbmUgd3JhcHMgdGhlIGVudGlyZSBjb250ZW50cyB3aXRoIHRoZSBkb2N1bWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjb250ZXh0LCBwcm9wcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgbG9jYWxzIH0gPSBjb250ZXh0XG5cbiAgICByZXR1cm4gPGh0bWwgbGFuZz0nZW4nIGRhdGEtZnJhbWV3b3JrPSdyaWxsJz5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XG4gICAgICAgIDx0aXRsZT57bG9jYWxzLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdUb2RvIE1WQyBhcHAgdXNpbmcgUmlsbCBhbmQgUmVhY3QuJyAvPlxuICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy9pbmRleC5jc3MnIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBpZD0ncm9vdCc+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICA8c2NyaXB0IHNyYz0nL2luZGV4LmpzJyAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8aGVhZGVyIGNsYXNzTmFtZT0naGVhZGVyJz5cbiAgICAgICAgPGgxPnRvZG9zPC9oMT5cbiAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSdjcmVhdGUtZm9ybScgYWN0aW9uPScvYXBwL3RvZG8vY3JlYXRlJyBtZXRob2Q9J1BPU1QnIGF1dG9Db21wbGV0ZT0nb2ZmJz5cbiAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSduZXctdG9kbycgbmFtZT0ndGV4dCcgcGxhY2Vob2xkZXI9J1doYXQgbmVlZHMgdG8gYmUgZG9uZT8nIGF1dG9Db21wbGV0ZT0nb2ZmJyBhdXRvRm9jdXMgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9oZWFkZXI+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0l0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXNcbiAgICByZXR1cm4gKFxuICAgICAgPGxpIGNsYXNzTmFtZT17Y3goeyBjb21wbGV0ZWQ6IHByb3BzLmNvbXBsZXRlZCwgZWRpdGluZzogcHJvcHMuZWRpdGluZyB9KX0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPSd2aWV3Jz5cbiAgICAgICAgICA8YSBocmVmPXtgL2FwcC90b2RvL3RvZ2dsZS8ke3Byb3BzLmlkfWB9PlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndG9nZ2xlJyB0eXBlPSdjaGVja2JveCcgZGVmYXVsdENoZWNrZWQ9e3Byb3BzLmNvbXBsZXRlZH0gLz5cbiAgICAgICAgICAgIDxsYWJlbCAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPXtgL2FwcC90b2RvL29wZW4vJHtwcm9wcy5pZH1gfT48bGFiZWw+e3Byb3BzLnRleHR9PC9sYWJlbD48L2E+XG4gICAgICAgICAgPGZvcm0gYWN0aW9uPXtgL2FwcC90b2RvL3JlbW92ZS8ke3Byb3BzLmlkfWB9PlxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzc05hbWU9J2Rlc3Ryb3knIHR5cGU9J3N1Ym1pdCcgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZGl2PlxuXG4gICAgICAgIHtwcm9wcy5lZGl0aW5nICYmIChcbiAgICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J3VwZGF0ZS1mb3JtJyBhY3Rpb249e2AvYXBwL3RvZG8vdXBkYXRlLyR7cHJvcHMuaWR9YH0gbWV0aG9kPSdQT1NUJz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J2VkaXQnIG5hbWU9J3RleHQnIGRlZmF1bHRWYWx1ZT17cHJvcHMudGV4dH0gYXV0b0ZvY3VzIC8+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgLz5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgICl9XG4gICAgICA8L2xpPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5pbXBvcnQgVG9kb0l0ZW0gZnJvbSAnLi90b2RvLWl0ZW0nXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzXG4gICAgY29uc3QgeyB0b2RvcywgZmlsdGVyIH0gPSBwcm9wc1xuXG4gICAgY29uc3QgY29tcGxldGVkID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gdG9kby5jb21wbGV0ZWQpXG4gICAgY29uc3QgcGVuZGluZyA9IHRvZG9zLmZpbHRlcih0b2RvID0+ICF0b2RvLmNvbXBsZXRlZClcbiAgICBjb25zdCBkaXNwbGF5ID0gKFxuICAgICAgZmlsdGVyID09PSAnYWxsJyA/IHRvZG9zXG4gICAgICA6IGZpbHRlciA9PT0gJ3BlbmRpbmcnID8gcGVuZGluZ1xuICAgICAgOiBmaWx0ZXIgPT09ICdjb21wbGV0ZWQnID8gY29tcGxldGVkXG4gICAgICA6IG51bGxcbiAgICApXG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPSdtYWluJz5cbiAgICAgICAgICA8YSBocmVmPScvYXBwL3RvZG8vdG9nZ2xlLWFsbCc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd0b2dnbGUtYWxsJyB0eXBlPSdjaGVja2JveCcgLz5cbiAgICAgICAgICAgIDxsYWJlbCBodG1sRm9yPSd0b2dnbGUtYWxsJz5NYXJrIGFsbCBhcyBjb21wbGV0ZTwvbGFiZWw+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J3RvZG8tbGlzdCc+XG4gICAgICAgICAgICB7ZGlzcGxheS5tYXAodG9kbyA9PiA8VG9kb0l0ZW0ga2V5PXt0b2RvLmlkfSB7Li4udG9kb30gLz4pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2Zvb3Rlcic+XG4gICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPSd0b2RvLWNvdW50Jz48c3Ryb25nPntwZW5kaW5nLmxlbmd0aH08L3N0cm9uZz4gaXRlbSBsZWZ0PC9zcGFuPlxuICAgICAgICAgIDx1bCBjbGFzc05hbWU9J2ZpbHRlcnMnPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KHsgc2VsZWN0ZWQ6IHByb3BzLmZpbHRlciA9PT0gJ2FsbCcgfSl9IGhyZWY9Jy8nPkFsbDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3goeyBzZWxlY3RlZDogcHJvcHMuZmlsdGVyID09PSAncGVuZGluZycgfSl9IGhyZWY9Jy9wZW5kaW5nJz5BY3RpdmU8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KHsgc2VsZWN0ZWQ6IHByb3BzLmZpbHRlciA9PT0gJ2NvbXBsZXRlZCcgfSl9IGhyZWY9Jy9jb21wbGV0ZWQnPkNvbXBsZXRlZDwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgPC91bD5cblxuICAgICAgICAgIDxmb3JtIGFjdGlvbj0nL2FwcC90b2RvL3JlbW92ZS1jb21wbGV0ZWQnPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIGNsYXNzTmFtZT0nY2xlYXItY29tcGxldGVkJz5DbGVhciBjb21wbGV0ZWQ8L2J1dHRvbj5cbiAgICAgICAgICA8L2Zvcm0+XG4gICAgICAgIDwvZm9vdGVyPlxuICAgICAgPC9kaXY+XG4gICAgKVxuICB9XG59XG4iLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb290ZXIgaWQ9J2luZm8nIGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgIDxoMz5HbyBhaGVhZCwgZGlzYWJsZSBKYXZhU2NyaXB0LjwvaDM+XG4gICAgICAgIDxwPlNpbmdsZS1jbGljayB0byBlZGl0IGEgdG9kbzwvcD5cbiAgICAgICAgPHA+VGVtcGxhdGUgYnkgPGEgaHJlZj0naHR0cDovL3NpbmRyZXNvcmh1cy5jb20nPlNpbmRyZSBTb3JodXM8L2E+PC9wPlxuICAgICAgICA8cD5DcmVhdGVkIGJ5IDxhIGhyZWY9J2h0dHA6Ly90b2RvbXZjLmNvbSc+RHlsYW4gUGllcmNleTwvYT48L3A+XG4gICAgICAgIDxwPlBhcnQgb2YgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5Ub2RvTVZDPC9hPjwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIClcbiAgfVxufVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3RvZG8tbGlzdCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cbi8qKlxuICogUm91dGUgaGFuZGxlciBmb3IgcmVuZGVyaW5nIHRoZSBob21lIHBhZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IHJlcSwgcmVzLCBsb2NhbHMsIHNlc3Npb24gfSkgPT4ge1xuICAvLyBEZWZhdWx0IGZpbHRlciB0byBcImFsbFwiLlxuICBjb25zdCB7IHBhcmFtczogeyBmaWx0ZXIgPSAnYWxsJyB9IH0gPSByZXFcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuXG4gIC8vIFVwZGF0ZSBkb2N1bWVudCB0aXRsZS5cbiAgbG9jYWxzLnRpdGxlID0gYFRvZG9zOiAke2ZpbHRlcn1gXG5cbiAgcmVzLmJvZHkgPSAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9kb2FwcCc+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3RvZG9zLmxlbmd0aCAhPT0gMCAmJiA8VG9kb0xpc3QgZmlsdGVyPXtmaWx0ZXJ9IHRvZG9zPXt0b2Rvc30gLz59XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBSb3V0ZSBoYW5kbGVyIGZvciByZW5kZXJpbmcgdGhlIDQwNCBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyByZXEsIHJlcywgbG9jYWxzIH0pID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSByZXEucXVlcnlcbiAgbG9jYWxzLnRpdGxlID0gYFRvZG9zOiBFcnJvcmBcbiAgcmVzLnN0YXR1cyA9IDUwMFxuICByZXMuYm9keSA9IChcbiAgICA8ZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2luZm8nPlxuICAgICAgICA8aDM+e21lc3NhZ2V9PC9oMz5cbiAgICAgICAgPGgyPjxhIGhyZWY9Jy8nPkNsaWNrIGhlcmUgdG8gZ28gYmFjazwvYT48L2gyPlxuICAgICAgICA8cD5UZW1wbGF0ZSBieSA8YSBocmVmPSdodHRwOi8vc2luZHJlc29yaHVzLmNvbSc+U2luZHJlIFNvcmh1czwvYT48L3A+XG4gICAgICAgIDxwPkNyZWF0ZWQgYnkgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5EeWxhbiBQaWVyY2V5PC9hPjwvcD5cbiAgICAgICAgPHA+UGFydCBvZiA8YSBocmVmPSdodHRwOi8vdG9kb212Yy5jb20nPlRvZG9NVkM8L2E+PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBSb3V0ZSBoYW5kbGVyIGZvciByZW5kZXJpbmcgdGhlIDQwNCBwYWdlLlxuICogQHBhcmFtIHtSaWxsLkNvbnRleHR9IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgcmVzLCBsb2NhbHMgfSkgPT4ge1xuICBsb2NhbHMudGl0bGUgPSBgVG9kb3M6IFBhZ2Ugbm90IGZvdW5kYFxuICByZXMuc3RhdHVzID0gNDA0XG4gIHJlcy5ib2R5ID0gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9vdGVyIGlkPSdpbmZvJyBjbGFzc05hbWU9J2luZm8nPlxuICAgICAgICA8aDM+VGhlIHJlcXVlc3RlZCBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZC48L2gzPlxuICAgICAgICA8aDI+PGEgaHJlZj0nLyc+Q2xpY2sgaGVyZSB0byBnbyBiYWNrPC9hPjwvaDI+XG4gICAgICAgIDxwPlRlbXBsYXRlIGJ5IDxhIGhyZWY9J2h0dHA6Ly9zaW5kcmVzb3JodXMuY29tJz5TaW5kcmUgU29yaHVzPC9hPjwvcD5cbiAgICAgICAgPHA+Q3JlYXRlZCBieSA8YSBocmVmPSdodHRwOi8vdG9kb212Yy5jb20nPkR5bGFuIFBpZXJjZXk8L2E+PC9wPlxuICAgICAgICA8cD5QYXJ0IG9mIDxhIGhyZWY9J2h0dHA6Ly90b2RvbXZjLmNvbSc+VG9kb01WQzwvYT48L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuIiwiaW1wb3J0IFJvdXRlciBmcm9tICdyaWxsJ1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gJ0ByaWxsL3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJ1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZSdcbmltcG9ydCBlcnJvclBhZ2UgZnJvbSAnLi81MDAnXG5pbXBvcnQgbWlzc2luZ1BhZ2UgZnJvbSAnLi80MDQnXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKVxuICAuZ2V0KHdyYXAoUGFnZSkpIC8vIFdyYXAgYWxsIHBhZ2VzIHdpdGggdGhlIDxQYWdlPiBjb21wb25lbnQuXG4gIC5nZXQoJy81MDAnLCBlcnJvclBhZ2UpXG4gIC5nZXQoJy80MDQnLCBtaXNzaW5nUGFnZSlcbiAgLmdldCgnLzpmaWx0ZXIoYWxsfHBlbmRpbmd8Y29tcGxldGVkKT8nLCBob21lUGFnZSlcbiIsImltcG9ydCBtcyBmcm9tICdtcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBoZWxtZXQgZnJvbSAnQHJpbGwvaGVsbWV0J1xuaW1wb3J0IGZyZXNoIGZyb20gJ0ByaWxsL2ZyZXNoJ1xuaW1wb3J0IGV0YWcgZnJvbSAnQHJpbGwvZXRhZydcbmltcG9ydCBjb21wcmVzcyBmcm9tICdAcmlsbC9jb21wcmVzcydcbmltcG9ydCBzZXJ2ZSBmcm9tICdAcmlsbC9zdGF0aWMnXG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnQHJpbGwvcHJvZ3Jlc3MnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0ByaWxsL2xvZ2dlcidcbmltcG9ydCBleHBvc2UgZnJvbSAnQHJpbGwvZXhwb3NlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0ByaWxsL3JlYWN0J1xuaW1wb3J0IGJvZHkgZnJvbSAnQHJpbGwvYm9keSdcbmltcG9ydCBzZXNzaW9uIGZyb20gJ0ByaWxsL3Nlc3Npb24nXG5pbXBvcnQgcmVkaXJlY3QgZnJvbSAnQHJpbGwvcmVkaXJlY3QnXG5pbXBvcnQgdW5oYW5kbGVkIGZyb20gJ0ByaWxsL3VuaGFuZGxlZCdcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyJ1xuaW1wb3J0IHByZWxvYWRNaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZS9wcmVsb2FkJ1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHBhZ2VzIGZyb20gJy4vcGFnZXMnXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKVxuICAudXNlKGhlbG1ldCgpKVxuICAudXNlKGZyZXNoKCkpXG4gIC51c2UoZXRhZygpKVxuICAudXNlKGNvbXByZXNzKCkpXG4gIC5nZXQoc2VydmUoJ2J1aWxkL3B1YmxpYycsIHsgZ3ppcDogdHJ1ZSwgY2FjaGU6IGAke21zKCczMCBkYXlzJyl9OyBpbW11dGFibGVgIH0pKVxuICAudXNlKHByb2dyZXNzKHsgc3Bpbm5lcjogZmFsc2UsIGNvbG9yOiAncmdiYSgxNzUsIDQ3LCA0NywgLjMpJyB9KSlcbiAgLnVzZShib2R5KCkpXG4gIC51c2Uoc2Vzc2lvbigpKVxuICAudXNlKGxvZ2dlcigpKVxuICAudXNlKGV4cG9zZSgpKVxuICAudXNlKHJlYWN0KCkpXG4gIC51c2UodW5oYW5kbGVkKHJlZGlyZWN0KCcvNDA0JykpKVxuICAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpXG4gIC51c2UocHJlbG9hZE1pZGRsZXdhcmUpXG4gIC5hdCgnL2FwcC8qJywgYWN0aW9ucylcbiAgLmdldChwYWdlcylcbiAgLmxpc3Rlbih7IHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2coYFNlcnZlciBzdGFydGVkIG9uIHBvcnQgJyR7dGhpcy5hZGRyZXNzKCkucG9ydH0nLmApXG4gICAgICBwcm9jZXNzLnNlbmQgJiYgcHJvY2Vzcy5zZW5kKCdvbmxpbmUnKVxuICAgIH1cbiAgfSlcbiJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQ2xGQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTs7Ozs7O0FDZEE7QUFFQTs7Ozs7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDYkE7QUFFQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Ozs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdFQTtBQUNBO0FBQ0E7QUFFQTtBQUFBOzs7OztBQ0pBO0FBQ0E7QUFFQTs7Ozs7QUFJQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUdBO0FBQ0E7QUFuQkE7O0FDUEE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFJQTtBQUNBO0FBWkE7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFLQTtBQUNBO0FBekJBOzs7QUNIQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUNBO0FBQ0E7QUFPQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUVBO0FBQUE7QUFDQTtBQUFBO0FBR0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBRUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUtBO0FBQ0E7QUE5Q0E7O0FDSkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFHQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFHQTtBQUNBO0FBWkE7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBRUE7QUFBQTtBQUVBO0FBQUE7QUFBQTtBQUtBOztBQ3pCQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FDcEJBO0FBRUE7Ozs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUtBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQVdBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==