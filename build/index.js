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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/regenerator");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/asyncToGenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/classCallCheck");

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/possibleConstructorReturn");

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/inherits");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("rill");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@rill/react");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("classnames");

/***/ }),
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ms___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ms__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_helmet___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_helmet__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__rill_fresh___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__rill_fresh__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rill_etag___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__rill_etag__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__rill_compress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__rill_compress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6__rill_polyfill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__rill_static___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7__rill_static__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__rill_progress___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__rill_progress__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rill_logger___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__rill_logger__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__rill_expose___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__rill_expose__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__rill_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__rill_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rill_body__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__rill_body___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__rill_body__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rill_session__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__rill_session___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__rill_session__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rill_redirect__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__rill_redirect___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__rill_redirect__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rill_unhandled__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__rill_unhandled___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__rill_unhandled__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__middleware_error_handler__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__middleware_preload__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__actions__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages__ = __webpack_require__(30);





















/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1_rill___default.a().use(__WEBPACK_IMPORTED_MODULE_2__rill_helmet___default()()).use(__WEBPACK_IMPORTED_MODULE_3__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_compress___default()()).get('/polyfill.js', __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_0_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: 'rgba(175, 47, 47, .3)' })).use(__WEBPACK_IMPORTED_MODULE_12__rill_body___default()()).use(__WEBPACK_IMPORTED_MODULE_13__rill_session___default()()).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).use(__WEBPACK_IMPORTED_MODULE_11__rill_react___default()()).use(__WEBPACK_IMPORTED_MODULE_15__rill_unhandled___default()(__WEBPACK_IMPORTED_MODULE_14__rill_redirect___default()('/404'))).use(__WEBPACK_IMPORTED_MODULE_16__middleware_error_handler__["a" /* default */]).use(__WEBPACK_IMPORTED_MODULE_17__middleware_preload__["a" /* default */]).at('/app/*', __WEBPACK_IMPORTED_MODULE_18__actions__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_19__pages__["a" /* default */]).listen({ port: process.env.PORT || 8080 }, function () {
  if (!undefined && "production" === 'production') {
    console.log('Server started on port \'' + this.address().port + '\'.');
    process.send && process.send('online');
  }
}));

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("ms");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("@rill/helmet");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("@rill/fresh");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("@rill/etag");

/***/ }),
/* 14 */
/***/ (function(module, exports) {

module.exports = require("@rill/compress");

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("@rill/polyfill");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("@rill/static");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("@rill/progress");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("@rill/logger");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("@rill/expose");

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = require("@rill/body");

/***/ }),
/* 21 */
/***/ (function(module, exports) {

module.exports = require("@rill/session");

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("@rill/redirect");

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("@rill/unhandled");

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_error__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rill_error___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__rill_error__);




/**
 * Simple error handling middleware which redirects to the error page.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref, next) {
    var res = _ref.res;
    var message;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.prev = 0;
            _context.next = 3;
            return next();

          case 3:
            _context.next = 9;
            break;

          case 5:
            _context.prev = 5;
            _context.t0 = _context['catch'](0);
            message = _context.t0 instanceof __WEBPACK_IMPORTED_MODULE_2__rill_error___default.a ? _context.t0.message : 'An unknown error has occurred.';

            res.redirect('/500?message=' + message);

          case 9:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this, [[0, 5]]);
  }));

  function errorHandlerMiddleware(_x, _x2) {
    return _ref2.apply(this, arguments);
  }

  return errorHandlerMiddleware;
})());

/***/ }),
/* 25 */
/***/ (function(module, exports) {

module.exports = require("@rill/error");

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);




/**
 * Middleware which will tell the browser to preload files
 * we know are going to be needed to render.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref, next) {
    var res = _ref.res;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return next();

          case 2:
            // If we are sending out a react component then we need the main JS and CSS.
            if (__WEBPACK_IMPORTED_MODULE_2_react___default.a.isValidElement(res.body)) {
              res.append('Link', '</index.css>; rel=preload; as=style;');
              res.append('Link', '</polyfill.js>; rel=preload; as=script;');
              res.append('Link', '</index.js>; rel=preload; as=script;');
            }

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  function preloadMiddleware(_x, _x2) {
    return _ref2.apply(this, arguments);
  }

  return preloadMiddleware;
})());

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__todos__ = __webpack_require__(28);



// Create a nested rill router for the controller routes.
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_rill___default.a()
// Created a nested prefixed router for todo controls.
.at('/todo/*', new __WEBPACK_IMPORTED_MODULE_0_rill___default.a().post('/create', __WEBPACK_IMPORTED_MODULE_1__todos__["a" /* create */]).get('/open/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["b" /* openById */]).post('/update/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["g" /* updateById */]).get('/toggle/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["f" /* toggleById */]).get('/toggle-all', __WEBPACK_IMPORTED_MODULE_1__todos__["e" /* toggleAll */]).get('/remove/:id', __WEBPACK_IMPORTED_MODULE_1__todos__["c" /* removeById */]).get('/remove-completed', __WEBPACK_IMPORTED_MODULE_1__todos__["d" /* removeCompleted */])));

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = create;
/* harmony export (immutable) */ __webpack_exports__["b"] = openById;
/* harmony export (immutable) */ __webpack_exports__["g"] = updateById;
/* harmony export (immutable) */ __webpack_exports__["f"] = toggleById;
/* harmony export (immutable) */ __webpack_exports__["e"] = toggleAll;
/* harmony export (immutable) */ __webpack_exports__["c"] = removeById;
/* harmony export (immutable) */ __webpack_exports__["d"] = removeCompleted;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cuid__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_cuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_cuid__);


/**
 * Creates a new TODO.
 */
function create(_ref) {
  var req = _ref.req,
      res = _ref.res,
      session = _ref.session;

  var todos = session.get('todos') || [];
  if (!req.body.text) return;
  todos.push({ id: __WEBPACK_IMPORTED_MODULE_0_cuid___default()(), text: req.body.text });
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Opens a todo to be updated.
 */
function openById(_ref2) {
  var req = _ref2.req,
      res = _ref2.res,
      session = _ref2.session;

  var todos = session.get('todos') || [];
  var todo = todos.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (!todo) return;
  todo.editing = true;
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Update an existing todo.
 */
function updateById(_ref3) {
  var req = _ref3.req,
      res = _ref3.res,
      session = _ref3.session;

  var todos = session.get('todos') || [];
  var todo = todos.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (!todo || !req.body.text) return;
  todo.text = req.body.text;
  todo.editing = false;
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Toggles a todo's completion.
 */
function toggleById(_ref4) {
  var req = _ref4.req,
      res = _ref4.res,
      session = _ref4.session;

  var todos = session.get('todos') || [];
  var todo = todos.find(function (todo) {
    return todo.id === req.params.id;
  });
  if (!todo) return;
  todo.completed = !todo.completed;
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Toggles all todos completion.
 */
function toggleAll(_ref5) {
  var req = _ref5.req,
      res = _ref5.res,
      session = _ref5.session;

  var todos = session.get('todos') || [];
  todos.forEach(function (todo) {
    todo.completed = !todo.completed;
  });
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Removes an existing todo.
 */
function removeById(_ref6) {
  var req = _ref6.req,
      res = _ref6.res,
      session = _ref6.session;

  var todos = session.get('todos') || [];
  todos.splice(todos.findIndex(function (todo) {
    return todo.id === req.params.id;
  }), 1);
  session.set('todos', todos);
  res.redirect('back');
}

/**
 * Removes all completed todos.
 */
function removeCompleted(_ref7) {
  var req = _ref7.req,
      res = _ref7.res,
      session = _ref7.session;

  var todos = session.get('todos') || [];
  session.set('todos', todos.filter(function (todo) {
    return !todo.completed;
  }));
  res.redirect('back');
}

/***/ }),
/* 29 */
/***/ (function(module, exports) {

module.exports = require("cuid");

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rill___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rill__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rill_react__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rill_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__rill_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__500__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__404__ = __webpack_require__(40);







/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_rill___default.a().get(Object(__WEBPACK_IMPORTED_MODULE_1__rill_react__["wrap"])(__WEBPACK_IMPORTED_MODULE_2__components_page__["a" /* default */])) // Wrap all pages with the <Page> component.
.get('/500', __WEBPACK_IMPORTED_MODULE_4__500__["a" /* default */]).get('/404', __WEBPACK_IMPORTED_MODULE_5__404__["a" /* default */]).get('/:filter(all|pending|completed)?', __WEBPACK_IMPORTED_MODULE_3__home__["a" /* default */]));

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__style_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);






/**
 * This is an example wrapper.
 * Wrappers are used to contain sub sections of an app, this particular one wraps the entire contents with the document.
 */

var Page = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Page, _Component);

  function Page() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Page);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  Page.prototype.render = function render() {
    var context = this.context,
        props = this.props;
    var locals = context.locals;


    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'html',
      { lang: 'en', 'data-framework': 'rill' },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'head',
        null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('meta', { charSet: 'utf-8' }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'title',
          null,
          locals.title
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('meta', { name: 'description', content: 'Todo MVC app using Rill and React.' }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('link', { rel: 'stylesheet', href: '/index.css' })
      ),
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'body',
        null,
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'div',
          { id: 'root' },
          props.children
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('script', { src: '/polyfill.js' }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('script', { src: '/index.js' })
      )
    );
  };

  return Page;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_todo_list__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer__ = __webpack_require__(38);



var _this = this;






/**
 * Route handler for rendering the home page.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var req = _ref.req,
        res = _ref.res,
        locals = _ref.locals,
        session = _ref.session;

    var _req$params$filter, filter, todos;

    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            // Default filter to "all".
            _req$params$filter = req.params.filter, filter = _req$params$filter === undefined ? 'all' : _req$params$filter;
            todos = session.get('todos') || [];

            // Update document title.

            locals.title = 'Todos: ' + filter;

            res.body = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'section',
                { className: 'todoapp' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__components_header__["a" /* default */], null),
                todos.length !== 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__components_todo_list__["a" /* default */], { filter: filter, todos: todos })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__components_footer__["a" /* default */], null)
            );

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),
/* 34 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);





var Header = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Header, _Component);

  function Header() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Header);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  Header.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'header',
      { className: 'header' },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'h1',
        null,
        'todos'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'form',
        { className: 'create-form', action: '/app/todo/create', method: 'POST', autoComplete: 'off' },
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', { className: 'new-todo', name: 'text', placeholder: 'What needs to be done?', autoComplete: 'off', autoFocus: true }),
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('button', { type: 'submit' })
      )
    );
  };

  return Header;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Header);

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_item__ = __webpack_require__(37);








var TodoList = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_3_babel_runtime_helpers_inherits___default()(TodoList, _Component);

  function TodoList() {
    __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_classCallCheck___default()(this, TodoList);

    return __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  TodoList.prototype.render = function render() {
    var props = this.props;
    var todos = props.todos,
        filter = props.filter;


    var completed = todos.filter(function (todo) {
      return todo.completed;
    });
    var pending = todos.filter(function (todo) {
      return !todo.completed;
    });
    var display = filter === 'all' ? todos : filter === 'pending' ? pending : filter === 'completed' ? completed : null;

    return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
      'div',
      null,
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'section',
        { className: 'main' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'a',
          { href: '/app/todo/toggle-all' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement('input', { className: 'toggle-all', type: 'checkbox' }),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'label',
            { htmlFor: 'toggle-all' },
            'Mark all as complete'
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'ul',
          { className: 'todo-list' },
          display.map(function (todo) {
            return __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__todo_item__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends___default()({ key: todo.id }, todo));
          })
        )
      ),
      __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
        'footer',
        { className: 'footer' },
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'span',
          { className: 'todo-count' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'strong',
            null,
            pending.length
          ),
          ' item left'
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'ul',
          { className: 'filters' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'a',
              { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()({ selected: props.filter === 'all' }), href: '/' },
              'All'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'a',
              { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()({ selected: props.filter === 'pending' }), href: '/pending' },
              'Active'
            )
          ),
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'li',
            null,
            __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
              'a',
              { className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()({ selected: props.filter === 'completed' }), href: '/completed' },
              'Completed'
            )
          )
        ),
        __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
          'form',
          { action: '/app/todo/remove-completed' },
          __WEBPACK_IMPORTED_MODULE_5_react___default.a.createElement(
            'button',
            { type: 'submit', className: 'clear-completed' },
            'Clear completed'
          )
        )
      )
    );
  };

  return TodoList;
}(__WEBPACK_IMPORTED_MODULE_5_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TodoList);

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);






var TodoItem = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(TodoItem, _Component);

  function TodoItem() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, TodoItem);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  TodoItem.prototype.render = function render() {
    var props = this.props;

    return __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
      'li',
      { className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()({ completed: props.completed, editing: props.editing }) },
      __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'div',
        { className: 'view' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'a',
          { href: '/app/todo/toggle/' + props.id },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { className: 'toggle', type: 'checkbox', defaultChecked: props.completed }),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('label', null)
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'a',
          { href: '/app/todo/open/' + props.id },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
            'label',
            null,
            props.text
          )
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'form',
          { action: '/app/todo/remove/' + props.id },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('button', { className: 'destroy', type: 'submit' })
        )
      ),
      props.editing && __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
        'form',
        { className: 'update-form', action: '/app/todo/update/' + props.id, method: 'POST' },
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { className: 'edit', name: 'text', defaultValue: props.text, autoFocus: true }),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('button', { type: 'submit' })
      )
    );
  };

  return TodoItem;
}(__WEBPACK_IMPORTED_MODULE_4_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (TodoItem);

/***/ }),
/* 38 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);





var Footer = function (_Component) {
  __WEBPACK_IMPORTED_MODULE_2_babel_runtime_helpers_inherits___default()(Footer, _Component);

  function Footer() {
    __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_classCallCheck___default()(this, Footer);

    return __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_possibleConstructorReturn___default()(this, _Component.apply(this, arguments));
  }

  Footer.prototype.render = function render() {
    return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
      'footer',
      { id: 'info', className: 'info' },
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'h3',
        null,
        'Go ahead, disable JavaScript.'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'p',
        null,
        'Single-click to edit a todo'
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'p',
        null,
        'Template by ',
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'a',
          { href: 'http://sindresorhus.com' },
          'Sindre Sorhus'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'p',
        null,
        'Created by ',
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'a',
          { href: 'http://todomvc.com' },
          'Dylan Piercey'
        )
      ),
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
        'p',
        null,
        'Part of ',
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(
          'a',
          { href: 'http://todomvc.com' },
          'TodoMVC'
        )
      )
    );
  };

  return Footer;
}(__WEBPACK_IMPORTED_MODULE_3_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Footer);

/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



var _this = this;



/**
 * Route handler for rendering the 404 page.
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var req = _ref.req,
        res = _ref.res,
        locals = _ref.locals;
    var message;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            message = req.query.message;

            locals.title = 'Todos: Error';
            res.status = 500;
            res.body = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'footer',
                { className: 'info' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h3',
                  null,
                  message
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h2',
                  null,
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: '/' },
                    'Click here to go back'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'p',
                  null,
                  'Template by ',
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: 'http://sindresorhus.com' },
                    'Sindre Sorhus'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'p',
                  null,
                  'Created by ',
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: 'http://todomvc.com' },
                    'Dylan Piercey'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'p',
                  null,
                  'Part of ',
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: 'http://todomvc.com' },
                    'TodoMVC'
                  )
                )
              )
            );

          case 4:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);



var _this = this;



/**
 * Route handler for rendering the 404 page.
 * @param {Rill.Context} options
 */
/* harmony default export */ __webpack_exports__["a"] = ((function () {
  var _ref2 = __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default()( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.mark(function _callee(_ref) {
    var res = _ref.res,
        locals = _ref.locals;
    return __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            locals.title = 'Todos: Page not found';
            res.status = 404;
            res.body = __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
              'div',
              null,
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                'footer',
                { id: 'info', className: 'info' },
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h3',
                  null,
                  'The requested page could not be found.'
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'h2',
                  null,
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: '/' },
                    'Click here to go back'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'p',
                  null,
                  'Template by ',
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: 'http://sindresorhus.com' },
                    'Sindre Sorhus'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'p',
                  null,
                  'Created by ',
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: 'http://todomvc.com' },
                    'Dylan Piercey'
                  )
                ),
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                  'p',
                  null,
                  'Part of ',
                  __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(
                    'a',
                    { href: 'http://todomvc.com' },
                    'TodoMVC'
                  )
                )
              )
            );

          case 3:
          case 'end':
            return _context.stop();
        }
      }
    }, _callee, _this);
  }));

  return function (_x) {
    return _ref2.apply(this, arguments);
  };
})());

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgMzRkODcxNGQ3OTNhYTQ2NmFlMWYiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZnJlc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9ldGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvY29tcHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvYm9keVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWRpcmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiIiwid2VicGFjazovLy9hcHAvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2Vycm9yXCIiLCJ3ZWJwYWNrOi8vL2FwcC9taWRkbGV3YXJlL3ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvYWN0aW9ucy90b2Rvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjdWlkXCIiLCJ3ZWJwYWNrOi8vL2FwcC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vYXBwL3BhZ2VzL2hvbWUuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvdG9kby1saXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCIiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL3RvZG8taXRlbS5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvZm9vdGVyLmpzIiwid2VicGFjazovLy9hcHAvcGFnZXMvNTAwLmpzIiwid2VicGFjazovLy9hcHAvcGFnZXMvNDA0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDkpO1xuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHdlYnBhY2svYm9vdHN0cmFwIDM0ZDg3MTRkNzkzYWE0NjZhZTFmIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSAwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiXG4vLyBtb2R1bGUgaWQgPSAyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9jbGFzc0NhbGxDaGVja1wiXG4vLyBtb2R1bGUgaWQgPSAzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIlxuLy8gbW9kdWxlIGlkID0gNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvaW5oZXJpdHNcIlxuLy8gbW9kdWxlIGlkID0gNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwicmlsbFwiXG4vLyBtb2R1bGUgaWQgPSA2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3JlYWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcmVhY3RcIlxuLy8gbW9kdWxlIGlkID0gN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJjbGFzc25hbWVzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiY2xhc3NuYW1lc1wiXG4vLyBtb2R1bGUgaWQgPSA4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBtcyBmcm9tICdtcydcbmltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCBoZWxtZXQgZnJvbSAnQHJpbGwvaGVsbWV0J1xuaW1wb3J0IGZyZXNoIGZyb20gJ0ByaWxsL2ZyZXNoJ1xuaW1wb3J0IGV0YWcgZnJvbSAnQHJpbGwvZXRhZydcbmltcG9ydCBjb21wcmVzcyBmcm9tICdAcmlsbC9jb21wcmVzcydcbmltcG9ydCBwb2x5ZmlsbCBmcm9tICdAcmlsbC9wb2x5ZmlsbCdcbmltcG9ydCBzZXJ2ZSBmcm9tICdAcmlsbC9zdGF0aWMnXG5pbXBvcnQgcHJvZ3Jlc3MgZnJvbSAnQHJpbGwvcHJvZ3Jlc3MnXG5pbXBvcnQgbG9nZ2VyIGZyb20gJ0ByaWxsL2xvZ2dlcidcbmltcG9ydCBleHBvc2UgZnJvbSAnQHJpbGwvZXhwb3NlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0ByaWxsL3JlYWN0J1xuaW1wb3J0IGJvZHkgZnJvbSAnQHJpbGwvYm9keSdcbmltcG9ydCBzZXNzaW9uIGZyb20gJ0ByaWxsL3Nlc3Npb24nXG5pbXBvcnQgcmVkaXJlY3QgZnJvbSAnQHJpbGwvcmVkaXJlY3QnXG5pbXBvcnQgdW5oYW5kbGVkIGZyb20gJ0ByaWxsL3VuaGFuZGxlZCdcbmltcG9ydCBlcnJvckhhbmRsZXJNaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyJ1xuaW1wb3J0IHByZWxvYWRNaWRkbGV3YXJlIGZyb20gJy4vbWlkZGxld2FyZS9wcmVsb2FkJ1xuaW1wb3J0IGFjdGlvbnMgZnJvbSAnLi9hY3Rpb25zJ1xuaW1wb3J0IHBhZ2VzIGZyb20gJy4vcGFnZXMnXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKVxuICAudXNlKGhlbG1ldCgpKVxuICAudXNlKGZyZXNoKCkpXG4gIC51c2UoZXRhZygpKVxuICAudXNlKGNvbXByZXNzKCkpXG4gIC5nZXQoJy9wb2x5ZmlsbC5qcycsIHBvbHlmaWxsKCkpXG4gIC5nZXQoc2VydmUoJ2J1aWxkL3B1YmxpYycsIHsgZ3ppcDogdHJ1ZSwgY2FjaGU6IGAke21zKCczMCBkYXlzJyl9OyBpbW11dGFibGVgIH0pKVxuICAudXNlKHByb2dyZXNzKHsgc3Bpbm5lcjogZmFsc2UsIGNvbG9yOiAncmdiYSgxNzUsIDQ3LCA0NywgLjMpJyB9KSlcbiAgLnVzZShib2R5KCkpXG4gIC51c2Uoc2Vzc2lvbigpKVxuICAudXNlKGxvZ2dlcigpKVxuICAudXNlKGV4cG9zZSgpKVxuICAudXNlKHJlYWN0KCkpXG4gIC51c2UodW5oYW5kbGVkKHJlZGlyZWN0KCcvNDA0JykpKVxuICAudXNlKGVycm9ySGFuZGxlck1pZGRsZXdhcmUpXG4gIC51c2UocHJlbG9hZE1pZGRsZXdhcmUpXG4gIC5hdCgnL2FwcC8qJywgYWN0aW9ucylcbiAgLmdldChwYWdlcylcbiAgLmxpc3Rlbih7IHBvcnQ6IHByb2Nlc3MuZW52LlBPUlQgfHwgODA4MCB9LCBmdW5jdGlvbiAoKSB7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgY29uc29sZS5sb2coYFNlcnZlciBzdGFydGVkIG9uIHBvcnQgJyR7dGhpcy5hZGRyZXNzKCkucG9ydH0nLmApXG4gICAgICBwcm9jZXNzLnNlbmQgJiYgcHJvY2Vzcy5zZW5kKCdvbmxpbmUnKVxuICAgIH1cbiAgfSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvaW5kZXguanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIm1zXCJcbi8vIG1vZHVsZSBpZCA9IDEwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2hlbG1ldFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2hlbG1ldFwiXG4vLyBtb2R1bGUgaWQgPSAxMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9mcmVzaFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2ZyZXNoXCJcbi8vIG1vZHVsZSBpZCA9IDEyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V0YWdcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9ldGFnXCJcbi8vIG1vZHVsZSBpZCA9IDEzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2NvbXByZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvY29tcHJlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTRcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcG9seWZpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wb2x5ZmlsbFwiXG4vLyBtb2R1bGUgaWQgPSAxNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zdGF0aWNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9zdGF0aWNcIlxuLy8gbW9kdWxlIGlkID0gMTZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcHJvZ3Jlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9wcm9ncmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxN1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9sb2dnZXJcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9sb2dnZXJcIlxuLy8gbW9kdWxlIGlkID0gMThcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXhwb3NlXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCJcbi8vIG1vZHVsZSBpZCA9IDE5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2JvZHlcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9ib2R5XCJcbi8vIG1vZHVsZSBpZCA9IDIwXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Nlc3Npb25cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9zZXNzaW9uXCJcbi8vIG1vZHVsZSBpZCA9IDIxXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3JlZGlyZWN0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcmVkaXJlY3RcIlxuLy8gbW9kdWxlIGlkID0gMjJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvdW5oYW5kbGVkXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvdW5oYW5kbGVkXCJcbi8vIG1vZHVsZSBpZCA9IDIzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBIdHRwRXJyb3IgZnJvbSAnQHJpbGwvZXJyb3InXG5cbi8qKlxuICogU2ltcGxlIGVycm9yIGhhbmRsaW5nIG1pZGRsZXdhcmUgd2hpY2ggcmVkaXJlY3RzIHRvIHRoZSBlcnJvciBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBlcnJvckhhbmRsZXJNaWRkbGV3YXJlICh7IHJlcyB9LCBuZXh0KSB7XG4gIHRyeSB7XG4gICAgYXdhaXQgbmV4dCgpXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBlcnIgaW5zdGFuY2VvZiBIdHRwRXJyb3JcbiAgICAgID8gZXJyLm1lc3NhZ2VcbiAgICAgIDogJ0FuIHVua25vd24gZXJyb3IgaGFzIG9jY3VycmVkLidcbiAgICByZXMucmVkaXJlY3QoYC81MDA/bWVzc2FnZT0ke21lc3NhZ2V9YClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXIuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9lcnJvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2Vycm9yXCJcbi8vIG1vZHVsZSBpZCA9IDI1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBNaWRkbGV3YXJlIHdoaWNoIHdpbGwgdGVsbCB0aGUgYnJvd3NlciB0byBwcmVsb2FkIGZpbGVzXG4gKiB3ZSBrbm93IGFyZSBnb2luZyB0byBiZSBuZWVkZWQgdG8gcmVuZGVyLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyBmdW5jdGlvbiBwcmVsb2FkTWlkZGxld2FyZSAoeyByZXMgfSwgbmV4dCkge1xuICBhd2FpdCBuZXh0KClcbiAgLy8gSWYgd2UgYXJlIHNlbmRpbmcgb3V0IGEgcmVhY3QgY29tcG9uZW50IHRoZW4gd2UgbmVlZCB0aGUgbWFpbiBKUyBhbmQgQ1NTLlxuICBpZiAoUmVhY3QuaXNWYWxpZEVsZW1lbnQocmVzLmJvZHkpKSB7XG4gICAgcmVzLmFwcGVuZCgnTGluaycsICc8L2luZGV4LmNzcz47IHJlbD1wcmVsb2FkOyBhcz1zdHlsZTsnKVxuICAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9wb2x5ZmlsbC5qcz47IHJlbD1wcmVsb2FkOyBhcz1zY3JpcHQ7JylcbiAgICByZXMuYXBwZW5kKCdMaW5rJywgJzwvaW5kZXguanM+OyByZWw9cHJlbG9hZDsgYXM9c2NyaXB0OycpXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvbWlkZGxld2FyZS9wcmVsb2FkLmpzIiwiaW1wb3J0IFJvdXRlciBmcm9tICdyaWxsJ1xuaW1wb3J0ICogYXMgdG9kb0N0cmwgZnJvbSAnLi90b2RvcydcblxuLy8gQ3JlYXRlIGEgbmVzdGVkIHJpbGwgcm91dGVyIGZvciB0aGUgY29udHJvbGxlciByb3V0ZXMuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKClcbiAgLy8gQ3JlYXRlZCBhIG5lc3RlZCBwcmVmaXhlZCByb3V0ZXIgZm9yIHRvZG8gY29udHJvbHMuXG4gIC5hdCgnL3RvZG8vKicsIG5ldyBSb3V0ZXIoKVxuICAgIC5wb3N0KCcvY3JlYXRlJywgdG9kb0N0cmwuY3JlYXRlKVxuICAgIC5nZXQoJy9vcGVuLzppZCcsIHRvZG9DdHJsLm9wZW5CeUlkKVxuICAgIC5wb3N0KCcvdXBkYXRlLzppZCcsIHRvZG9DdHJsLnVwZGF0ZUJ5SWQpXG4gICAgLmdldCgnL3RvZ2dsZS86aWQnLCB0b2RvQ3RybC50b2dnbGVCeUlkKVxuICAgIC5nZXQoJy90b2dnbGUtYWxsJywgdG9kb0N0cmwudG9nZ2xlQWxsKVxuICAgIC5nZXQoJy9yZW1vdmUvOmlkJywgdG9kb0N0cmwucmVtb3ZlQnlJZClcbiAgICAuZ2V0KCcvcmVtb3ZlLWNvbXBsZXRlZCcsIHRvZG9DdHJsLnJlbW92ZUNvbXBsZXRlZClcbiAgKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hY3Rpb25zL2luZGV4LmpzIiwiaW1wb3J0IHVpZCBmcm9tICdjdWlkJ1xuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgVE9ETy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZSAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgaWYgKCFyZXEuYm9keS50ZXh0KSByZXR1cm5cbiAgdG9kb3MucHVzaCh7IGlkOiB1aWQoKSwgdGV4dDogcmVxLmJvZHkudGV4dCB9KVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBPcGVucyBhIHRvZG8gdG8gYmUgdXBkYXRlZC5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIG9wZW5CeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbykgcmV0dXJuXG4gIHRvZG8uZWRpdGluZyA9IHRydWVcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVXBkYXRlIGFuIGV4aXN0aW5nIHRvZG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB1cGRhdGVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbyB8fCAhcmVxLmJvZHkudGV4dCkgcmV0dXJuXG4gIHRvZG8udGV4dCA9IHJlcS5ib2R5LnRleHRcbiAgdG9kby5lZGl0aW5nID0gZmFsc2VcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogVG9nZ2xlcyBhIHRvZG8ncyBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQnlJZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgY29uc3QgdG9kbyA9IHRvZG9zLmZpbmQodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKVxuICBpZiAoIXRvZG8pIHJldHVyblxuICB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZFxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBUb2dnbGVzIGFsbCB0b2RvcyBjb21wbGV0aW9uLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdG9nZ2xlQWxsICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICB0b2Rvcy5mb3JFYWNoKHRvZG8gPT4geyB0b2RvLmNvbXBsZXRlZCA9ICF0b2RvLmNvbXBsZXRlZCB9KVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBSZW1vdmVzIGFuIGV4aXN0aW5nIHRvZG8uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICB0b2Rvcy5zcGxpY2UodG9kb3MuZmluZEluZGV4KHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZCksIDEpXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYWxsIGNvbXBsZXRlZCB0b2Rvcy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUNvbXBsZXRlZCAoeyByZXEsIHJlcywgc2Vzc2lvbiB9KSB7XG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKSlcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvYWN0aW9ucy90b2Rvcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImN1aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjdWlkXCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdAcmlsbC9yZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL2NvbXBvbmVudHMvcGFnZSdcbmltcG9ydCBob21lUGFnZSBmcm9tICcuL2hvbWUnXG5pbXBvcnQgZXJyb3JQYWdlIGZyb20gJy4vNTAwJ1xuaW1wb3J0IG1pc3NpbmdQYWdlIGZyb20gJy4vNDA0J1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKClcbiAgLmdldCh3cmFwKFBhZ2UpKSAvLyBXcmFwIGFsbCBwYWdlcyB3aXRoIHRoZSA8UGFnZT4gY29tcG9uZW50LlxuICAuZ2V0KCcvNTAwJywgZXJyb3JQYWdlKVxuICAuZ2V0KCcvNDA0JywgbWlzc2luZ1BhZ2UpXG4gIC5nZXQoJy86ZmlsdGVyKGFsbHxwZW5kaW5nfGNvbXBsZXRlZCk/JywgaG9tZVBhZ2UpXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3BhZ2VzL2luZGV4LmpzIiwiaW1wb3J0ICcuL3N0eWxlLmNzcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgd3JhcHBlci5cbiAqIFdyYXBwZXJzIGFyZSB1c2VkIHRvIGNvbnRhaW4gc3ViIHNlY3Rpb25zIG9mIGFuIGFwcCwgdGhpcyBwYXJ0aWN1bGFyIG9uZSB3cmFwcyB0aGUgZW50aXJlIGNvbnRlbnRzIHdpdGggdGhlIGRvY3VtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNvbnRleHQsIHByb3BzIH0gPSB0aGlzXG4gICAgY29uc3QgeyBsb2NhbHMgfSA9IGNvbnRleHRcblxuICAgIHJldHVybiA8aHRtbCBsYW5nPSdlbicgZGF0YS1mcmFtZXdvcms9J3JpbGwnPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd2aWV3cG9ydCcgY29udGVudD0nd2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMCcgLz5cbiAgICAgICAgPHRpdGxlPntsb2NhbHMudGl0bGV9PC90aXRsZT5cbiAgICAgICAgPG1ldGEgbmFtZT0nZGVzY3JpcHRpb24nIGNvbnRlbnQ9J1RvZG8gTVZDIGFwcCB1c2luZyBSaWxsIGFuZCBSZWFjdC4nIC8+XG4gICAgICAgIDxsaW5rIHJlbD0nc3R5bGVzaGVldCcgaHJlZj0nL2luZGV4LmNzcycgLz5cbiAgICAgIDwvaGVhZD5cbiAgICAgIDxib2R5PlxuICAgICAgICA8ZGl2IGlkPSdyb290Jz57cHJvcHMuY2hpbGRyZW59PC9kaXY+XG4gICAgICAgIDxzY3JpcHQgc3JjPScvcG9seWZpbGwuanMnIC8+XG4gICAgICAgIDxzY3JpcHQgc3JjPScvaW5kZXguanMnIC8+XG4gICAgICA8L2JvZHk+XG4gICAgPC9odG1sPlxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvcGFnZS9pbmRleC5qcyIsIi8vIHJlbW92ZWQgYnkgZXh0cmFjdC10ZXh0LXdlYnBhY2stcGx1Z2luXG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gLi9hcHAvY29tcG9uZW50cy9wYWdlL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL2hlYWRlcidcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuLi9jb21wb25lbnRzL3RvZG8tbGlzdCdcbmltcG9ydCBGb290ZXIgZnJvbSAnLi4vY29tcG9uZW50cy9mb290ZXInXG5cbi8qKlxuICogUm91dGUgaGFuZGxlciBmb3IgcmVuZGVyaW5nIHRoZSBob21lIHBhZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IHJlcSwgcmVzLCBsb2NhbHMsIHNlc3Npb24gfSkgPT4ge1xuICAvLyBEZWZhdWx0IGZpbHRlciB0byBcImFsbFwiLlxuICBjb25zdCB7IHBhcmFtczogeyBmaWx0ZXIgPSAnYWxsJyB9IH0gPSByZXFcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuXG4gIC8vIFVwZGF0ZSBkb2N1bWVudCB0aXRsZS5cbiAgbG9jYWxzLnRpdGxlID0gYFRvZG9zOiAke2ZpbHRlcn1gXG5cbiAgcmVzLmJvZHkgPSAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9kb2FwcCc+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3RvZG9zLmxlbmd0aCAhPT0gMCAmJiA8VG9kb0xpc3QgZmlsdGVyPXtmaWx0ZXJ9IHRvZG9zPXt0b2Rvc30gLz59XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvcGFnZXMvaG9tZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nY3JlYXRlLWZvcm0nIGFjdGlvbj0nL2FwcC90b2RvL2NyZWF0ZScgbWV0aG9kPSdQT1NUJyBhdXRvQ29tcGxldGU9J29mZic+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nbmV3LXRvZG8nIG5hbWU9J3RleHQnIHBsYWNlaG9sZGVyPSdXaGF0IG5lZWRzIHRvIGJlIGRvbmU/JyBhdXRvQ29tcGxldGU9J29mZicgYXV0b0ZvY3VzIC8+XG4gICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIC8+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvaGVhZGVyPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL2hlYWRlci5qcyIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vdG9kby1pdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgdG9kb3MsIGZpbHRlciB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkKVxuICAgIGNvbnN0IHBlbmRpbmcgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpXG4gICAgY29uc3QgZGlzcGxheSA9IChcbiAgICAgIGZpbHRlciA9PT0gJ2FsbCcgPyB0b2Rvc1xuICAgICAgOiBmaWx0ZXIgPT09ICdwZW5kaW5nJyA/IHBlbmRpbmdcbiAgICAgIDogZmlsdGVyID09PSAnY29tcGxldGVkJyA/IGNvbXBsZXRlZFxuICAgICAgOiBudWxsXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgPGEgaHJlZj0nL2FwcC90b2RvL3RvZ2dsZS1hbGwnPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndG9nZ2xlLWFsbCcgdHlwZT0nY2hlY2tib3gnIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndG9nZ2xlLWFsbCc+TWFyayBhbGwgYXMgY29tcGxldGU8L2xhYmVsPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0b2RvLWxpc3QnPlxuICAgICAgICAgICAge2Rpc3BsYXkubWFwKHRvZG8gPT4gPFRvZG9JdGVtIGtleT17dG9kby5pZH0gey4uLnRvZG99IC8+KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdmb290ZXInPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndG9kby1jb3VudCc+PHN0cm9uZz57cGVuZGluZy5sZW5ndGh9PC9zdHJvbmc+IGl0ZW0gbGVmdDwvc3Bhbj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmaWx0ZXJzJz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCh7IHNlbGVjdGVkOiBwcm9wcy5maWx0ZXIgPT09ICdhbGwnIH0pfSBocmVmPScvJz5BbGw8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KHsgc2VsZWN0ZWQ6IHByb3BzLmZpbHRlciA9PT0gJ3BlbmRpbmcnIH0pfSBocmVmPScvcGVuZGluZyc+QWN0aXZlPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCh7IHNlbGVjdGVkOiBwcm9wcy5maWx0ZXIgPT09ICdjb21wbGV0ZWQnIH0pfSBocmVmPScvY29tcGxldGVkJz5Db21wbGV0ZWQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249Jy9hcHAvdG9kby9yZW1vdmUtY29tcGxldGVkJz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2NsZWFyLWNvbXBsZXRlZCc+Q2xlYXIgY29tcGxldGVkPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL3RvZG8tbGlzdC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2V4dGVuZHNcIlxuLy8gbW9kdWxlIGlkID0gMzZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IGN4IGZyb20gJ2NsYXNzbmFtZXMnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9JdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IHByb3BzIH0gPSB0aGlzXG4gICAgcmV0dXJuIChcbiAgICAgIDxsaSBjbGFzc05hbWU9e2N4KHsgY29tcGxldGVkOiBwcm9wcy5jb21wbGV0ZWQsIGVkaXRpbmc6IHByb3BzLmVkaXRpbmcgfSl9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT0ndmlldyc+XG4gICAgICAgICAgPGEgaHJlZj17YC9hcHAvdG9kby90b2dnbGUvJHtwcm9wcy5pZH1gfT5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3RvZ2dsZScgdHlwZT0nY2hlY2tib3gnIGRlZmF1bHRDaGVja2VkPXtwcm9wcy5jb21wbGV0ZWR9IC8+XG4gICAgICAgICAgICA8bGFiZWwgLz5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPGEgaHJlZj17YC9hcHAvdG9kby9vcGVuLyR7cHJvcHMuaWR9YH0+PGxhYmVsPntwcm9wcy50ZXh0fTwvbGFiZWw+PC9hPlxuICAgICAgICAgIDxmb3JtIGFjdGlvbj17YC9hcHAvdG9kby9yZW1vdmUvJHtwcm9wcy5pZH1gfT5cbiAgICAgICAgICAgIDxidXR0b24gY2xhc3NOYW1lPSdkZXN0cm95JyB0eXBlPSdzdWJtaXQnIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICB7cHJvcHMuZWRpdGluZyAmJiAoXG4gICAgICAgICAgPGZvcm0gY2xhc3NOYW1lPSd1cGRhdGUtZm9ybScgYWN0aW9uPXtgL2FwcC90b2RvL3VwZGF0ZS8ke3Byb3BzLmlkfWB9IG1ldGhvZD0nUE9TVCc+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSdlZGl0JyBuYW1lPSd0ZXh0JyBkZWZhdWx0VmFsdWU9e3Byb3BzLnRleHR9IGF1dG9Gb2N1cyAvPlxuICAgICAgICAgICAgPGJ1dHRvbiB0eXBlPSdzdWJtaXQnIC8+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICApfVxuICAgICAgPC9saT5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy90b2RvLWl0ZW0uanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvb3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxmb290ZXIgaWQ9J2luZm8nIGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgIDxoMz5HbyBhaGVhZCwgZGlzYWJsZSBKYXZhU2NyaXB0LjwvaDM+XG4gICAgICAgIDxwPlNpbmdsZS1jbGljayB0byBlZGl0IGEgdG9kbzwvcD5cbiAgICAgICAgPHA+VGVtcGxhdGUgYnkgPGEgaHJlZj0naHR0cDovL3NpbmRyZXNvcmh1cy5jb20nPlNpbmRyZSBTb3JodXM8L2E+PC9wPlxuICAgICAgICA8cD5DcmVhdGVkIGJ5IDxhIGhyZWY9J2h0dHA6Ly90b2RvbXZjLmNvbSc+RHlsYW4gUGllcmNleTwvYT48L3A+XG4gICAgICAgIDxwPlBhcnQgb2YgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5Ub2RvTVZDPC9hPjwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb21wb25lbnRzL2Zvb3Rlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBSb3V0ZSBoYW5kbGVyIGZvciByZW5kZXJpbmcgdGhlIDQwNCBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyByZXEsIHJlcywgbG9jYWxzIH0pID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSByZXEucXVlcnlcbiAgbG9jYWxzLnRpdGxlID0gYFRvZG9zOiBFcnJvcmBcbiAgcmVzLnN0YXR1cyA9IDUwMFxuICByZXMuYm9keSA9IChcbiAgICA8ZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2luZm8nPlxuICAgICAgICA8aDM+e21lc3NhZ2V9PC9oMz5cbiAgICAgICAgPGgyPjxhIGhyZWY9Jy8nPkNsaWNrIGhlcmUgdG8gZ28gYmFjazwvYT48L2gyPlxuICAgICAgICA8cD5UZW1wbGF0ZSBieSA8YSBocmVmPSdodHRwOi8vc2luZHJlc29yaHVzLmNvbSc+U2luZHJlIFNvcmh1czwvYT48L3A+XG4gICAgICAgIDxwPkNyZWF0ZWQgYnkgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5EeWxhbiBQaWVyY2V5PC9hPjwvcD5cbiAgICAgICAgPHA+UGFydCBvZiA8YSBocmVmPSdodHRwOi8vdG9kb212Yy5jb20nPlRvZG9NVkM8L2E+PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvcGFnZXMvNTAwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKipcbiAqIFJvdXRlIGhhbmRsZXIgZm9yIHJlbmRlcmluZyB0aGUgNDA0IHBhZ2UuXG4gKiBAcGFyYW0ge1JpbGwuQ29udGV4dH0gb3B0aW9uc1xuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyByZXMsIGxvY2FscyB9KSA9PiB7XG4gIGxvY2Fscy50aXRsZSA9IGBUb2RvczogUGFnZSBub3QgZm91bmRgXG4gIHJlcy5zdGF0dXMgPSA0MDRcbiAgcmVzLmJvZHkgPSAoXG4gICAgPGRpdj5cbiAgICAgIDxmb290ZXIgaWQ9J2luZm8nIGNsYXNzTmFtZT0naW5mbyc+XG4gICAgICAgIDxoMz5UaGUgcmVxdWVzdGVkIHBhZ2UgY291bGQgbm90IGJlIGZvdW5kLjwvaDM+XG4gICAgICAgIDxoMj48YSBocmVmPScvJz5DbGljayBoZXJlIHRvIGdvIGJhY2s8L2E+PC9oMj5cbiAgICAgICAgPHA+VGVtcGxhdGUgYnkgPGEgaHJlZj0naHR0cDovL3NpbmRyZXNvcmh1cy5jb20nPlNpbmRyZSBTb3JodXM8L2E+PC9wPlxuICAgICAgICA8cD5DcmVhdGVkIGJ5IDxhIGhyZWY9J2h0dHA6Ly90b2RvbXZjLmNvbSc+RHlsYW4gUGllcmNleTwvYT48L3A+XG4gICAgICAgIDxwPlBhcnQgb2YgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5Ub2RvTVZDPC9hPjwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3BhZ2VzLzQwNC5qcyJdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0E7Ozs7QUM3REE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFtQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDNUNBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7O0FDTEE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FDN0VBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNQQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7QUFJQTs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTEE7QUFPQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUhBO0FBUkE7QUFjQTtBQUNBOztBQXBCQTtBQUNBO0FBREE7Ozs7OztBQ1BBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBTEE7QUFDQTtBQVZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUkE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFGQTtBQVFBO0FBQ0E7O0FBWkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBTUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFEQTtBQUxBO0FBU0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFHQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFQQTtBQVlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQWRBO0FBVkE7QUE4QkE7QUFDQTs7QUE5Q0E7QUFDQTtBQURBOzs7Ozs7QUNKQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQU5BO0FBV0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBYkE7QUFvQkE7QUFDQTs7QUF6QkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNIQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQVFBO0FBQ0E7O0FBWkE7QUFDQTtBQURBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNGQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBTkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMQTtBQUNBO0FBQ0E7Ozs7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBQ0E7QUFMQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7OztBIiwic291cmNlUm9vdCI6IiJ9