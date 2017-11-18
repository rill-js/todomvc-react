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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__controllers__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__views__ = __webpack_require__(30);





















/* harmony default export */ __webpack_exports__["default"] = (new __WEBPACK_IMPORTED_MODULE_1_rill___default.a().use(__WEBPACK_IMPORTED_MODULE_2__rill_helmet___default()()).use(__WEBPACK_IMPORTED_MODULE_3__rill_fresh___default()()).use(__WEBPACK_IMPORTED_MODULE_4__rill_etag___default()()).use(__WEBPACK_IMPORTED_MODULE_5__rill_compress___default()()).get('/polyfill.js', __WEBPACK_IMPORTED_MODULE_6__rill_polyfill___default()()).get(__WEBPACK_IMPORTED_MODULE_7__rill_static___default()('build/public', { gzip: true, cache: __WEBPACK_IMPORTED_MODULE_0_ms___default()('30 days') + '; immutable' })).use(__WEBPACK_IMPORTED_MODULE_8__rill_progress___default()({ spinner: false, color: 'rgba(175, 47, 47, .3)' })).use(__WEBPACK_IMPORTED_MODULE_12__rill_body___default()()).use(__WEBPACK_IMPORTED_MODULE_13__rill_session___default()()).use(__WEBPACK_IMPORTED_MODULE_9__rill_logger___default()()).use(__WEBPACK_IMPORTED_MODULE_10__rill_expose___default()()).use(__WEBPACK_IMPORTED_MODULE_11__rill_react___default()()).use(__WEBPACK_IMPORTED_MODULE_15__rill_unhandled___default()(__WEBPACK_IMPORTED_MODULE_14__rill_redirect___default()('/404'))).use(__WEBPACK_IMPORTED_MODULE_16__middleware_error_handler__["a" /* default */]).use(__WEBPACK_IMPORTED_MODULE_17__middleware_preload__["a" /* default */]).at('/app/*', __WEBPACK_IMPORTED_MODULE_18__controllers__["a" /* default */]).get(__WEBPACK_IMPORTED_MODULE_19__views__["a" /* default */]).listen({ port: 8081 }, function () {
  if (!undefined && "production" === 'production') {
    process.stdout.write('server: Started at `http://localhost:8080`.');
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__partials_page__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__500__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__404__ = __webpack_require__(40);







/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_0_rill___default.a().get(Object(__WEBPACK_IMPORTED_MODULE_1__rill_react__["wrap"])(__WEBPACK_IMPORTED_MODULE_2__partials_page__["a" /* default */])) // Wrap all pages with the <Page> component.
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__partials_header__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__partials_todo_list__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__partials_footer__ = __webpack_require__(38);



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
                __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__partials_header__["a" /* default */], null),
                todos.length !== 0 && __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__partials_todo_list__["a" /* default */], { filter: filter, todos: todos })
              ),
              __WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__partials_footer__["a" /* default */], null)
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
        __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement('input', { className: 'new-todo', name: 'text', placeholder: 'What needs to be done?', autoFocus: true }),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgZTljMGYwNTkzMjA5MWJiZTg0MDAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZnJlc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9ldGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvY29tcHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvYm9keVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWRpcmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiIiwid2VicGFjazovLy9hcHAvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2Vycm9yXCIiLCJ3ZWJwYWNrOi8vL2FwcC9taWRkbGV3YXJlL3ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb250cm9sbGVycy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbnRyb2xsZXJzL3RvZG9zLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImN1aWRcIiIsIndlYnBhY2s6Ly8vYXBwL3ZpZXdzL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvcGFydGlhbHMvcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvcGFydGlhbHMvcGFnZS9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3cy9ob21lLmpzIiwid2VicGFjazovLy9hcHAvcGFydGlhbHMvaGVhZGVyLmpzIiwid2VicGFjazovLy9hcHAvcGFydGlhbHMvdG9kby1saXN0LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCIiLCJ3ZWJwYWNrOi8vL2FwcC9wYXJ0aWFscy90b2RvLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vL2FwcC9wYXJ0aWFscy9mb290ZXIuanMiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3cy81MDAuanMiLCJ3ZWJwYWNrOi8vL2FwcC92aWV3cy80MDQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgZTljMGYwNTkzMjA5MWJiZTg0MDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9yZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG1zIGZyb20gJ21zJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdyaWxsJ1xuaW1wb3J0IGhlbG1ldCBmcm9tICdAcmlsbC9oZWxtZXQnXG5pbXBvcnQgZnJlc2ggZnJvbSAnQHJpbGwvZnJlc2gnXG5pbXBvcnQgZXRhZyBmcm9tICdAcmlsbC9ldGFnJ1xuaW1wb3J0IGNvbXByZXNzIGZyb20gJ0ByaWxsL2NvbXByZXNzJ1xuaW1wb3J0IHBvbHlmaWxsIGZyb20gJ0ByaWxsL3BvbHlmaWxsJ1xuaW1wb3J0IHNlcnZlIGZyb20gJ0ByaWxsL3N0YXRpYydcbmltcG9ydCBwcm9ncmVzcyBmcm9tICdAcmlsbC9wcm9ncmVzcydcbmltcG9ydCBsb2dnZXIgZnJvbSAnQHJpbGwvbG9nZ2VyJ1xuaW1wb3J0IGV4cG9zZSBmcm9tICdAcmlsbC9leHBvc2UnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHJpbGwvcmVhY3QnXG5pbXBvcnQgYm9keSBmcm9tICdAcmlsbC9ib2R5J1xuaW1wb3J0IHNlc3Npb24gZnJvbSAnQHJpbGwvc2Vzc2lvbidcbmltcG9ydCByZWRpcmVjdCBmcm9tICdAcmlsbC9yZWRpcmVjdCdcbmltcG9ydCB1bmhhbmRsZWQgZnJvbSAnQHJpbGwvdW5oYW5kbGVkJ1xuaW1wb3J0IGVycm9ySGFuZGxlck1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXInXG5pbXBvcnQgcHJlbG9hZE1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlL3ByZWxvYWQnXG5pbXBvcnQgY29udHJvbGxlcnMgZnJvbSAnLi9jb250cm9sbGVycydcbmltcG9ydCB2aWV3cyBmcm9tICcuL3ZpZXdzJ1xuXG5leHBvcnQgZGVmYXVsdCBuZXcgUm91dGVyKClcbiAgLnVzZShoZWxtZXQoKSlcbiAgLnVzZShmcmVzaCgpKVxuICAudXNlKGV0YWcoKSlcbiAgLnVzZShjb21wcmVzcygpKVxuICAuZ2V0KCcvcG9seWZpbGwuanMnLCBwb2x5ZmlsbCgpKVxuICAuZ2V0KHNlcnZlKCdidWlsZC9wdWJsaWMnLCB7IGd6aXA6IHRydWUsIGNhY2hlOiBgJHttcygnMzAgZGF5cycpfTsgaW1tdXRhYmxlYCB9KSlcbiAgLnVzZShwcm9ncmVzcyh7IHNwaW5uZXI6IGZhbHNlLCBjb2xvcjogJ3JnYmEoMTc1LCA0NywgNDcsIC4zKScgfSkpXG4gIC51c2UoYm9keSgpKVxuICAudXNlKHNlc3Npb24oKSlcbiAgLnVzZShsb2dnZXIoKSlcbiAgLnVzZShleHBvc2UoKSlcbiAgLnVzZShyZWFjdCgpKVxuICAudXNlKHVuaGFuZGxlZChyZWRpcmVjdCgnLzQwNCcpKSlcbiAgLnVzZShlcnJvckhhbmRsZXJNaWRkbGV3YXJlKVxuICAudXNlKHByZWxvYWRNaWRkbGV3YXJlKVxuICAuYXQoJy9hcHAvKicsIGNvbnRyb2xsZXJzKVxuICAuZ2V0KHZpZXdzKVxuICAubGlzdGVuKHsgcG9ydDogODA4MSB9LCAoKSA9PiB7XG4gICAgaWYgKCFwcm9jZXNzLmJyb3dzZXIgJiYgcHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcHJvY2Vzcy5zdGRvdXQud3JpdGUoJ3NlcnZlcjogU3RhcnRlZCBhdCBgaHR0cDovL2xvY2FsaG9zdDo4MDgwYC4nKVxuICAgICAgcHJvY2Vzcy5zZW5kICYmIHByb2Nlc3Muc2VuZCgnb25saW5lJylcbiAgICB9XG4gIH0pXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2luZGV4LmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJtc1wiXG4vLyBtb2R1bGUgaWQgPSAxMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9oZWxtZXRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9oZWxtZXRcIlxuLy8gbW9kdWxlIGlkID0gMTFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZnJlc2hcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9mcmVzaFwiXG4vLyBtb2R1bGUgaWQgPSAxMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9ldGFnXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXRhZ1wiXG4vLyBtb2R1bGUgaWQgPSAxM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9jb21wcmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2NvbXByZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDE0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3BvbHlmaWxsXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcG9seWZpbGxcIlxuLy8gbW9kdWxlIGlkID0gMTVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvc3RhdGljXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvc3RhdGljXCJcbi8vIG1vZHVsZSBpZCA9IDE2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3Byb2dyZXNzXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvcHJvZ3Jlc3NcIlxuLy8gbW9kdWxlIGlkID0gMTdcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvbG9nZ2VyXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCJcbi8vIG1vZHVsZSBpZCA9IDE4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2V4cG9zZVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V4cG9zZVwiXG4vLyBtb2R1bGUgaWQgPSAxOVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9ib2R5XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvYm9keVwiXG4vLyBtb2R1bGUgaWQgPSAyMFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9zZXNzaW9uXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvc2Vzc2lvblwiXG4vLyBtb2R1bGUgaWQgPSAyMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9yZWRpcmVjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3JlZGlyZWN0XCJcbi8vIG1vZHVsZSBpZCA9IDIyXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3VuaGFuZGxlZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiXG4vLyBtb2R1bGUgaWQgPSAyM1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgSHR0cEVycm9yIGZyb20gJ0ByaWxsL2Vycm9yJ1xuXG4vKipcbiAqIFNpbXBsZSBlcnJvciBoYW5kbGluZyBtaWRkbGV3YXJlIHdoaWNoIHJlZGlyZWN0cyB0byB0aGUgZXJyb3IgcGFnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gZXJyb3JIYW5kbGVyTWlkZGxld2FyZSAoeyByZXMgfSwgbmV4dCkge1xuICB0cnkge1xuICAgIGF3YWl0IG5leHQoKVxuICB9IGNhdGNoIChlcnIpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gZXJyIGluc3RhbmNlb2YgSHR0cEVycm9yXG4gICAgICA/IGVyci5tZXNzYWdlXG4gICAgICA6ICdBbiB1bmtub3duIGVycm9yIGhhcyBvY2N1cnJlZC4nXG4gICAgcmVzLnJlZGlyZWN0KGAvNTAwP21lc3NhZ2U9JHttZXNzYWdlfWApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXJyb3JcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9lcnJvclwiXG4vLyBtb2R1bGUgaWQgPSAyNVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKlxuICogTWlkZGxld2FyZSB3aGljaCB3aWxsIHRlbGwgdGhlIGJyb3dzZXIgdG8gcHJlbG9hZCBmaWxlc1xuICogd2Uga25vdyBhcmUgZ29pbmcgdG8gYmUgbmVlZGVkIHRvIHJlbmRlci5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgZnVuY3Rpb24gcHJlbG9hZE1pZGRsZXdhcmUgKHsgcmVzIH0sIG5leHQpIHtcbiAgYXdhaXQgbmV4dCgpXG4gIC8vIElmIHdlIGFyZSBzZW5kaW5nIG91dCBhIHJlYWN0IGNvbXBvbmVudCB0aGVuIHdlIG5lZWQgdGhlIG1haW4gSlMgYW5kIENTUy5cbiAgaWYgKFJlYWN0LmlzVmFsaWRFbGVtZW50KHJlcy5ib2R5KSkge1xuICAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9pbmRleC5jc3M+OyByZWw9cHJlbG9hZDsgYXM9c3R5bGU7JylcbiAgICByZXMuYXBwZW5kKCdMaW5rJywgJzwvcG9seWZpbGwuanM+OyByZWw9cHJlbG9hZDsgYXM9c2NyaXB0OycpXG4gICAgcmVzLmFwcGVuZCgnTGluaycsICc8L2luZGV4LmpzPjsgcmVsPXByZWxvYWQ7IGFzPXNjcmlwdDsnKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL21pZGRsZXdhcmUvcHJlbG9hZC5qcyIsImltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCAqIGFzIHRvZG9DdHJsIGZyb20gJy4vdG9kb3MnXG5cbi8vIENyZWF0ZSBhIG5lc3RlZCByaWxsIHJvdXRlciBmb3IgdGhlIGNvbnRyb2xsZXIgcm91dGVzLlxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcigpXG4gIC8vIENyZWF0ZWQgYSBuZXN0ZWQgcHJlZml4ZWQgcm91dGVyIGZvciB0b2RvIGNvbnRyb2xzLlxuICAuYXQoJy90b2RvLyonLCBuZXcgUm91dGVyKClcbiAgICAucG9zdCgnL2NyZWF0ZScsIHRvZG9DdHJsLmNyZWF0ZSlcbiAgICAuZ2V0KCcvb3Blbi86aWQnLCB0b2RvQ3RybC5vcGVuQnlJZClcbiAgICAucG9zdCgnL3VwZGF0ZS86aWQnLCB0b2RvQ3RybC51cGRhdGVCeUlkKVxuICAgIC5nZXQoJy90b2dnbGUvOmlkJywgdG9kb0N0cmwudG9nZ2xlQnlJZClcbiAgICAuZ2V0KCcvdG9nZ2xlLWFsbCcsIHRvZG9DdHJsLnRvZ2dsZUFsbClcbiAgICAuZ2V0KCcvcmVtb3ZlLzppZCcsIHRvZG9DdHJsLnJlbW92ZUJ5SWQpXG4gICAgLmdldCgnL3JlbW92ZS1jb21wbGV0ZWQnLCB0b2RvQ3RybC5yZW1vdmVDb21wbGV0ZWQpXG4gIClcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29udHJvbGxlcnMvaW5kZXguanMiLCJpbXBvcnQgdWlkIGZyb20gJ2N1aWQnXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBUT0RPLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBpZiAoIXJlcS5ib2R5LnRleHQpIHJldHVyblxuICB0b2Rvcy5wdXNoKHsgaWQ6IHVpZCgpLCB0ZXh0OiByZXEuYm9keS50ZXh0IH0pXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIE9wZW5zIGEgdG9kbyB0byBiZSB1cGRhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3BlbkJ5SWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIGNvbnN0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZClcbiAgaWYgKCF0b2RvKSByZXR1cm5cbiAgdG9kby5lZGl0aW5nID0gdHJ1ZVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgdG9kby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJ5SWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIGNvbnN0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZClcbiAgaWYgKCF0b2RvIHx8ICFyZXEuYm9keS50ZXh0KSByZXR1cm5cbiAgdG9kby50ZXh0ID0gcmVxLmJvZHkudGV4dFxuICB0b2RvLmVkaXRpbmcgPSBmYWxzZVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBUb2dnbGVzIGEgdG9kbydzIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbykgcmV0dXJuXG4gIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFRvZ2dsZXMgYWxsIHRvZG9zIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVBbGwgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIHRvZG9zLmZvckVhY2godG9kbyA9PiB7IHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkIH0pXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYW4gZXhpc3RpbmcgdG9kby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJ5SWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIHRvZG9zLnNwbGljZSh0b2Rvcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKSwgMSlcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgY29tcGxldGVkIHRvZG9zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9jb250cm9sbGVycy90b2Rvcy5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImN1aWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjdWlkXCJcbi8vIG1vZHVsZSBpZCA9IDI5XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSb3V0ZXIgZnJvbSAncmlsbCdcbmltcG9ydCB7IHdyYXAgfSBmcm9tICdAcmlsbC9yZWFjdCdcbmltcG9ydCBQYWdlIGZyb20gJy4uL3BhcnRpYWxzL3BhZ2UnXG5pbXBvcnQgaG9tZVBhZ2UgZnJvbSAnLi9ob21lJ1xuaW1wb3J0IGVycm9yUGFnZSBmcm9tICcuLzUwMCdcbmltcG9ydCBtaXNzaW5nUGFnZSBmcm9tICcuLzQwNCdcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcigpXG4gIC5nZXQod3JhcChQYWdlKSkgLy8gV3JhcCBhbGwgcGFnZXMgd2l0aCB0aGUgPFBhZ2U+IGNvbXBvbmVudC5cbiAgLmdldCgnLzUwMCcsIGVycm9yUGFnZSlcbiAgLmdldCgnLzQwNCcsIG1pc3NpbmdQYWdlKVxuICAuZ2V0KCcvOmZpbHRlcihhbGx8cGVuZGluZ3xjb21wbGV0ZWQpPycsIGhvbWVQYWdlKVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC92aWV3cy9pbmRleC5qcyIsImltcG9ydCAnLi9zdHlsZS5jc3MnXG5pbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbi8qKlxuICogVGhpcyBpcyBhbiBleGFtcGxlIHdyYXBwZXIuXG4gKiBXcmFwcGVycyBhcmUgdXNlZCB0byBjb250YWluIHN1YiBzZWN0aW9ucyBvZiBhbiBhcHAsIHRoaXMgcGFydGljdWxhciBvbmUgd3JhcHMgdGhlIGVudGlyZSBjb250ZW50cyB3aXRoIHRoZSBkb2N1bWVudC5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFnZSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBjb250ZXh0LCBwcm9wcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgbG9jYWxzIH0gPSBjb250ZXh0XG5cbiAgICByZXR1cm4gPGh0bWwgbGFuZz0nZW4nIGRhdGEtZnJhbWV3b3JrPSdyaWxsJz5cbiAgICAgIDxoZWFkPlxuICAgICAgICA8bWV0YSBjaGFyU2V0PSd1dGYtOCcgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XG4gICAgICAgIDx0aXRsZT57bG9jYWxzLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdUb2RvIE1WQyBhcHAgdXNpbmcgUmlsbCBhbmQgUmVhY3QuJyAvPlxuICAgICAgICA8bGluayByZWw9J3N0eWxlc2hlZXQnIGhyZWY9Jy9pbmRleC5jc3MnIC8+XG4gICAgICA8L2hlYWQ+XG4gICAgICA8Ym9keT5cbiAgICAgICAgPGRpdiBpZD0ncm9vdCc+e3Byb3BzLmNoaWxkcmVufTwvZGl2PlxuICAgICAgICA8c2NyaXB0IHNyYz0nL3BvbHlmaWxsLmpzJyAvPlxuICAgICAgICA8c2NyaXB0IHNyYz0nL2luZGV4LmpzJyAvPlxuICAgICAgPC9ib2R5PlxuICAgIDwvaHRtbD5cbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9wYXJ0aWFscy9wYWdlL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9wYXJ0aWFscy9wYWdlL3N0eWxlLmNzc1xuLy8gbW9kdWxlIGlkID0gMzJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9wYXJ0aWFscy9oZWFkZXInXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vcGFydGlhbHMvdG9kby1saXN0J1xuaW1wb3J0IEZvb3RlciBmcm9tICcuLi9wYXJ0aWFscy9mb290ZXInXG5cbi8qKlxuICogUm91dGUgaGFuZGxlciBmb3IgcmVuZGVyaW5nIHRoZSBob21lIHBhZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IHJlcSwgcmVzLCBsb2NhbHMsIHNlc3Npb24gfSkgPT4ge1xuICAvLyBEZWZhdWx0IGZpbHRlciB0byBcImFsbFwiLlxuICBjb25zdCB7IHBhcmFtczogeyBmaWx0ZXIgPSAnYWxsJyB9IH0gPSByZXFcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuXG4gIC8vIFVwZGF0ZSBkb2N1bWVudCB0aXRsZS5cbiAgbG9jYWxzLnRpdGxlID0gYFRvZG9zOiAke2ZpbHRlcn1gXG5cbiAgcmVzLmJvZHkgPSAoXG4gICAgPGRpdj5cbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0ndG9kb2FwcCc+XG4gICAgICAgIDxIZWFkZXIgLz5cbiAgICAgICAge3RvZG9zLmxlbmd0aCAhPT0gMCAmJiA8VG9kb0xpc3QgZmlsdGVyPXtmaWx0ZXJ9IHRvZG9zPXt0b2Rvc30gLz59XG4gICAgICA8L3NlY3Rpb24+XG4gICAgICA8Rm9vdGVyIC8+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvdmlld3MvaG9tZS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGhlYWRlciBjbGFzc05hbWU9J2hlYWRlcic+XG4gICAgICAgIDxoMT50b2RvczwvaDE+XG4gICAgICAgIDxmb3JtIGNsYXNzTmFtZT0nY3JlYXRlLWZvcm0nIGFjdGlvbj0nL2FwcC90b2RvL2NyZWF0ZScgbWV0aG9kPSdQT1NUJyBhdXRvQ29tcGxldGU9J29mZic+XG4gICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nbmV3LXRvZG8nIG5hbWU9J3RleHQnIHBsYWNlaG9sZGVyPSdXaGF0IG5lZWRzIHRvIGJlIGRvbmU/JyBhdXRvRm9jdXMgLz5cbiAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgLz5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9oZWFkZXI+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3BhcnRpYWxzL2hlYWRlci5qcyIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFRvZG9JdGVtIGZyb20gJy4vdG9kby1pdGVtJ1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvTGlzdCBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpc1xuICAgIGNvbnN0IHsgdG9kb3MsIGZpbHRlciB9ID0gcHJvcHNcblxuICAgIGNvbnN0IGNvbXBsZXRlZCA9IHRvZG9zLmZpbHRlcih0b2RvID0+IHRvZG8uY29tcGxldGVkKVxuICAgIGNvbnN0IHBlbmRpbmcgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpXG4gICAgY29uc3QgZGlzcGxheSA9IChcbiAgICAgIGZpbHRlciA9PT0gJ2FsbCcgPyB0b2Rvc1xuICAgICAgOiBmaWx0ZXIgPT09ICdwZW5kaW5nJyA/IHBlbmRpbmdcbiAgICAgIDogZmlsdGVyID09PSAnY29tcGxldGVkJyA/IGNvbXBsZXRlZFxuICAgICAgOiBudWxsXG4gICAgKVxuXG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT0nbWFpbic+XG4gICAgICAgICAgPGEgaHJlZj0nL2FwcC90b2RvL3RvZ2dsZS1hbGwnPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndG9nZ2xlLWFsbCcgdHlwZT0nY2hlY2tib3gnIC8+XG4gICAgICAgICAgICA8bGFiZWwgaHRtbEZvcj0ndG9nZ2xlLWFsbCc+TWFyayBhbGwgYXMgY29tcGxldGU8L2xhYmVsPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSd0b2RvLWxpc3QnPlxuICAgICAgICAgICAge2Rpc3BsYXkubWFwKHRvZG8gPT4gPFRvZG9JdGVtIGtleT17dG9kby5pZH0gey4uLnRvZG99IC8+KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICA8L3NlY3Rpb24+XG4gICAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdmb290ZXInPlxuICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT0ndG9kby1jb3VudCc+PHN0cm9uZz57cGVuZGluZy5sZW5ndGh9PC9zdHJvbmc+IGl0ZW0gbGVmdDwvc3Bhbj5cbiAgICAgICAgICA8dWwgY2xhc3NOYW1lPSdmaWx0ZXJzJz5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCh7IHNlbGVjdGVkOiBwcm9wcy5maWx0ZXIgPT09ICdhbGwnIH0pfSBocmVmPScvJz5BbGw8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgPGxpPlxuICAgICAgICAgICAgICA8YSBjbGFzc05hbWU9e2N4KHsgc2VsZWN0ZWQ6IHByb3BzLmZpbHRlciA9PT0gJ3BlbmRpbmcnIH0pfSBocmVmPScvcGVuZGluZyc+QWN0aXZlPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCh7IHNlbGVjdGVkOiBwcm9wcy5maWx0ZXIgPT09ICdjb21wbGV0ZWQnIH0pfSBocmVmPScvY29tcGxldGVkJz5Db21wbGV0ZWQ8L2E+XG4gICAgICAgICAgICA8L2xpPlxuICAgICAgICAgIDwvdWw+XG5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249Jy9hcHAvdG9kby9yZW1vdmUtY29tcGxldGVkJz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyBjbGFzc05hbWU9J2NsZWFyLWNvbXBsZXRlZCc+Q2xlYXIgY29tcGxldGVkPC9idXR0b24+XG4gICAgICAgICAgPC9mb3JtPlxuICAgICAgICA8L2Zvb3Rlcj5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9wYXJ0aWFscy90b2RvLWxpc3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCJcbi8vIG1vZHVsZSBpZCA9IDM2XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpc1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjeCh7IGNvbXBsZXRlZDogcHJvcHMuY29tcGxldGVkLCBlZGl0aW5nOiBwcm9wcy5lZGl0aW5nIH0pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZXcnPlxuICAgICAgICAgIDxhIGhyZWY9e2AvYXBwL3RvZG8vdG9nZ2xlLyR7cHJvcHMuaWR9YH0+XG4gICAgICAgICAgICA8aW5wdXQgY2xhc3NOYW1lPSd0b2dnbGUnIHR5cGU9J2NoZWNrYm94JyBkZWZhdWx0Q2hlY2tlZD17cHJvcHMuY29tcGxldGVkfSAvPlxuICAgICAgICAgICAgPGxhYmVsIC8+XG4gICAgICAgICAgPC9hPlxuICAgICAgICAgIDxhIGhyZWY9e2AvYXBwL3RvZG8vb3Blbi8ke3Byb3BzLmlkfWB9PjxsYWJlbD57cHJvcHMudGV4dH08L2xhYmVsPjwvYT5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249e2AvYXBwL3RvZG8vcmVtb3ZlLyR7cHJvcHMuaWR9YH0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZGVzdHJveScgdHlwZT0nc3VibWl0JyAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3Byb3BzLmVkaXRpbmcgJiYgKFxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ndXBkYXRlLWZvcm0nIGFjdGlvbj17YC9hcHAvdG9kby91cGRhdGUvJHtwcm9wcy5pZH1gfSBtZXRob2Q9J1BPU1QnPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZWRpdCcgbmFtZT0ndGV4dCcgZGVmYXVsdFZhbHVlPXtwcm9wcy50ZXh0fSBhdXRvRm9jdXMgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3BhcnRpYWxzL3RvZG8taXRlbS5qcyIsImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9vdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGZvb3RlciBpZD0naW5mbycgY2xhc3NOYW1lPSdpbmZvJz5cbiAgICAgICAgPGgzPkdvIGFoZWFkLCBkaXNhYmxlIEphdmFTY3JpcHQuPC9oMz5cbiAgICAgICAgPHA+U2luZ2xlLWNsaWNrIHRvIGVkaXQgYSB0b2RvPC9wPlxuICAgICAgICA8cD5UZW1wbGF0ZSBieSA8YSBocmVmPSdodHRwOi8vc2luZHJlc29yaHVzLmNvbSc+U2luZHJlIFNvcmh1czwvYT48L3A+XG4gICAgICAgIDxwPkNyZWF0ZWQgYnkgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5EeWxhbiBQaWVyY2V5PC9hPjwvcD5cbiAgICAgICAgPHA+UGFydCBvZiA8YSBocmVmPSdodHRwOi8vdG9kb212Yy5jb20nPlRvZG9NVkM8L2E+PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3BhcnRpYWxzL2Zvb3Rlci5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBSb3V0ZSBoYW5kbGVyIGZvciByZW5kZXJpbmcgdGhlIDQwNCBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyByZXEsIHJlcywgbG9jYWxzIH0pID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSByZXEucXVlcnlcbiAgbG9jYWxzLnRpdGxlID0gYFRvZG9zOiBFcnJvcmBcbiAgcmVzLnN0YXR1cyA9IDUwMFxuICByZXMuYm9keSA9IChcbiAgICA8ZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2luZm8nPlxuICAgICAgICA8aDM+e21lc3NhZ2V9PC9oMz5cbiAgICAgICAgPGgyPjxhIGhyZWY9Jy8nPkNsaWNrIGhlcmUgdG8gZ28gYmFjazwvYT48L2gyPlxuICAgICAgICA8cD5UZW1wbGF0ZSBieSA8YSBocmVmPSdodHRwOi8vc2luZHJlc29yaHVzLmNvbSc+U2luZHJlIFNvcmh1czwvYT48L3A+XG4gICAgICAgIDxwPkNyZWF0ZWQgYnkgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5EeWxhbiBQaWVyY2V5PC9hPjwvcD5cbiAgICAgICAgPHA+UGFydCBvZiA8YSBocmVmPSdodHRwOi8vdG9kb212Yy5jb20nPlRvZG9NVkM8L2E+PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvdmlld3MvNTAwLmpzIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKipcbiAqIFJvdXRlIGhhbmRsZXIgZm9yIHJlbmRlcmluZyB0aGUgNDA0IHBhZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jICh7IHJlcywgbG9jYWxzIH0pID0+IHtcbiAgbG9jYWxzLnRpdGxlID0gYFRvZG9zOiBQYWdlIG5vdCBmb3VuZGBcbiAgcmVzLnN0YXR1cyA9IDQwNFxuICByZXMuYm9keSA9IChcbiAgICA8ZGl2PlxuICAgICAgPGZvb3RlciBpZD0naW5mbycgY2xhc3NOYW1lPSdpbmZvJz5cbiAgICAgICAgPGgzPlRoZSByZXF1ZXN0ZWQgcGFnZSBjb3VsZCBub3QgYmUgZm91bmQuPC9oMz5cbiAgICAgICAgPGgyPjxhIGhyZWY9Jy8nPkNsaWNrIGhlcmUgdG8gZ28gYmFjazwvYT48L2gyPlxuICAgICAgICA8cD5UZW1wbGF0ZSBieSA8YSBocmVmPSdodHRwOi8vc2luZHJlc29yaHVzLmNvbSc+U2luZHJlIFNvcmh1czwvYT48L3A+XG4gICAgICAgIDxwPkNyZWF0ZWQgYnkgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5EeWxhbiBQaWVyY2V5PC9hPjwvcD5cbiAgICAgICAgPHA+UGFydCBvZiA8YSBocmVmPSdodHRwOi8vdG9kb212Yy5jb20nPlRvZG9NVkM8L2E+PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvdmlld3MvNDA0LmpzIl0sIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QTs7OztBQzdEQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQW1CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7QUM1Q0E7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7Ozs7QUNBQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBSUE7QUFDQTtBQUVBO0FBQ0E7QUFSQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBOzs7Ozs7QUNMQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7OztBQ05BO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQURBOzs7Ozs7O0FDSkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBOzs7Ozs7QUM3RUE7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1BBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBOzs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFMQTtBQU9BO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBSEE7QUFSQTtBQWNBO0FBQ0E7O0FBcEJBO0FBQ0E7QUFEQTs7Ozs7O0FDUEE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBSUE7QUFMQTtBQUNBO0FBVkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUZBO0FBUUE7QUFDQTs7QUFaQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQURBO0FBTEE7QUFTQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQUdBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFEQTtBQVBBO0FBWUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBZEE7QUFWQTtBQThCQTtBQUNBOztBQTlDQTtBQUNBO0FBREE7Ozs7OztBQ0pBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBTkE7QUFXQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFiQTtBQW9CQTtBQUNBOztBQXpCQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0hBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBUUE7QUFDQTs7QUFaQTtBQUNBO0FBREE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0ZBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMQTtBQURBO0FBQ0E7QUFOQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0xBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7QSIsInNvdXJjZVJvb3QiOiIifQ==