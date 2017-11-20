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

if (undefined && "production" === 'production') {
  __webpack_require__(43).install();
}

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__500__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__404__ = __webpack_require__(42);







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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_manifest_webmanifest__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_manifest_webmanifest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_manifest_webmanifest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_favicon_png__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__assets_favicon_png___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__assets_favicon_png__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_react__);








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


    return __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
      'html',
      { lang: 'en', 'data-framework': 'rill' },
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'head',
        null,
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('meta', { charSet: 'utf-8' }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('meta', { httpEquiv: 'X-UA-Compatible', content: 'IE=edge,chrome=1' }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('meta', { name: 'viewport', content: 'width=device-width, initial-scale=1.0' }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'title',
          null,
          locals.title
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('meta', { name: 'description', content: 'Todo MVC app using Rill and React.' }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('meta', { name: 'theme-color', content: '#af2f2f' }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('link', { rel: 'manifest', href: __WEBPACK_IMPORTED_MODULE_4__assets_manifest_webmanifest___default.a }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('link', { rel: 'shortcut icon', href: __WEBPACK_IMPORTED_MODULE_5__assets_favicon_png___default.a }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('link', { rel: 'stylesheet', href: '/index.css' })
      ),
      __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
        'body',
        null,
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement(
          'div',
          { id: 'root' },
          props.children
        ),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('script', { src: '/polyfill.js' }),
        __WEBPACK_IMPORTED_MODULE_6_react___default.a.createElement('script', { src: '/index.js' })
      )
    );
  };

  return Page;
}(__WEBPACK_IMPORTED_MODULE_6_react__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (Page);

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports = "/17HVJUyROp.webmanifest";

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports = "/WjSVNuu8C0.png";

/***/ }),
/* 35 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_regenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_asyncToGenerator__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_header__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_todo_list__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_footer__ = __webpack_require__(40);



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
/* 36 */
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
/* 37 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_helpers_extends__ = __webpack_require__(38);
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__todo_item__ = __webpack_require__(39);








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
/* 38 */
/***/ (function(module, exports) {

module.exports = require("babel-runtime/helpers/extends");

/***/ }),
/* 39 */
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
          { href: '/app/todo/toggle/' + props.id, 'aria-label': 'Toggle Todo' },
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('input', { className: 'toggle', type: 'checkbox', defaultChecked: props.completed }),
          __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement('label', null)
        ),
        __WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(
          'a',
          { href: '/app/todo/open/' + props.id, 'aria-label': 'Edit Todo' },
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
/* 40 */
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
/* 41 */
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
/* 42 */
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

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("offline-plugin/runtime");

/***/ })
/******/ ]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAgOTBjZTk4NjA4MzM1YWRmMzFmOTgiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL3JlZ2VuZXJhdG9yXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2FzeW5jVG9HZW5lcmF0b3JcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvY2xhc3NDYWxsQ2hlY2tcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJpbGxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImNsYXNzbmFtZXNcIiIsIndlYnBhY2s6Ly8vYXBwL2luZGV4LmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1zXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvaGVsbWV0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZnJlc2hcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9ldGFnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvY29tcHJlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9wb2x5ZmlsbFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvbG9nZ2VyXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvZXhwb3NlXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiQHJpbGwvYm9keVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJAcmlsbC9yZWRpcmVjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL3VuaGFuZGxlZFwiIiwid2VicGFjazovLy9hcHAvbWlkZGxld2FyZS9lcnJvci1oYW5kbGVyLmpzIiwid2VicGFjazovLy9leHRlcm5hbCBcIkByaWxsL2Vycm9yXCIiLCJ3ZWJwYWNrOi8vL2FwcC9taWRkbGV3YXJlL3ByZWxvYWQuanMiLCJ3ZWJwYWNrOi8vL2FwcC9hY3Rpb25zL2luZGV4LmpzIiwid2VicGFjazovLy9hcHAvYWN0aW9ucy90b2Rvcy5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJjdWlkXCIiLCJ3ZWJwYWNrOi8vL2FwcC9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vYXBwL2NvbXBvbmVudHMvcGFnZS9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9hcHAvY29tcG9uZW50cy9wYWdlL3N0eWxlLmNzcyIsIndlYnBhY2s6Ly8vLi9hcHAvYXNzZXRzL21hbmlmZXN0LndlYm1hbmlmZXN0Iiwid2VicGFjazovLy8uL2FwcC9hc3NldHMvZmF2aWNvbi5wbmciLCJ3ZWJwYWNrOi8vL2FwcC9wYWdlcy9ob21lLmpzIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL3RvZG8tbGlzdC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiIiwid2VicGFjazovLy9hcHAvY29tcG9uZW50cy90b2RvLWl0ZW0uanMiLCJ3ZWJwYWNrOi8vL2FwcC9jb21wb25lbnRzL2Zvb3Rlci5qcyIsIndlYnBhY2s6Ly8vYXBwL3BhZ2VzLzUwMC5qcyIsIndlYnBhY2s6Ly8vYXBwL3BhZ2VzLzQwNC5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJvZmZsaW5lLXBsdWdpbi9ydW50aW1lXCIiXSwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7XG4gXHRcdFx0XHRjb25maWd1cmFibGU6IGZhbHNlLFxuIFx0XHRcdFx0ZW51bWVyYWJsZTogdHJ1ZSxcbiBcdFx0XHRcdGdldDogZ2V0dGVyXG4gXHRcdFx0fSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gOSk7XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gd2VicGFjay9ib290c3RyYXAgOTBjZTk4NjA4MzM1YWRmMzFmOTgiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcInJlYWN0XCJcbi8vIG1vZHVsZSBpZCA9IDBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9yZWdlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvcmVnZW5lcmF0b3JcIlxuLy8gbW9kdWxlIGlkID0gMVxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvYXN5bmNUb0dlbmVyYXRvclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9hc3luY1RvR2VuZXJhdG9yXCJcbi8vIG1vZHVsZSBpZCA9IDJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL2NsYXNzQ2FsbENoZWNrXCJcbi8vIG1vZHVsZSBpZCA9IDNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiYmFiZWwtcnVudGltZS9oZWxwZXJzL3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm5cIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvcG9zc2libGVDb25zdHJ1Y3RvclJldHVyblwiXG4vLyBtb2R1bGUgaWQgPSA0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9pbmhlcml0c1wiXG4vLyBtb2R1bGUgaWQgPSA1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJpbGxcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJyaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDZcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcmVhY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9yZWFjdFwiXG4vLyBtb2R1bGUgaWQgPSA3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImNsYXNzbmFtZXNcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJjbGFzc25hbWVzXCJcbi8vIG1vZHVsZSBpZCA9IDhcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IG1zIGZyb20gJ21zJ1xuaW1wb3J0IFJvdXRlciBmcm9tICdyaWxsJ1xuaW1wb3J0IGhlbG1ldCBmcm9tICdAcmlsbC9oZWxtZXQnXG5pbXBvcnQgZnJlc2ggZnJvbSAnQHJpbGwvZnJlc2gnXG5pbXBvcnQgZXRhZyBmcm9tICdAcmlsbC9ldGFnJ1xuaW1wb3J0IGNvbXByZXNzIGZyb20gJ0ByaWxsL2NvbXByZXNzJ1xuaW1wb3J0IHBvbHlmaWxsIGZyb20gJ0ByaWxsL3BvbHlmaWxsJ1xuaW1wb3J0IHNlcnZlIGZyb20gJ0ByaWxsL3N0YXRpYydcbmltcG9ydCBwcm9ncmVzcyBmcm9tICdAcmlsbC9wcm9ncmVzcydcbmltcG9ydCBsb2dnZXIgZnJvbSAnQHJpbGwvbG9nZ2VyJ1xuaW1wb3J0IGV4cG9zZSBmcm9tICdAcmlsbC9leHBvc2UnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHJpbGwvcmVhY3QnXG5pbXBvcnQgYm9keSBmcm9tICdAcmlsbC9ib2R5J1xuaW1wb3J0IHNlc3Npb24gZnJvbSAnQHJpbGwvc2Vzc2lvbidcbmltcG9ydCByZWRpcmVjdCBmcm9tICdAcmlsbC9yZWRpcmVjdCdcbmltcG9ydCB1bmhhbmRsZWQgZnJvbSAnQHJpbGwvdW5oYW5kbGVkJ1xuaW1wb3J0IGVycm9ySGFuZGxlck1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlL2Vycm9yLWhhbmRsZXInXG5pbXBvcnQgcHJlbG9hZE1pZGRsZXdhcmUgZnJvbSAnLi9taWRkbGV3YXJlL3ByZWxvYWQnXG5pbXBvcnQgYWN0aW9ucyBmcm9tICcuL2FjdGlvbnMnXG5pbXBvcnQgcGFnZXMgZnJvbSAnLi9wYWdlcydcblxuZXhwb3J0IGRlZmF1bHQgbmV3IFJvdXRlcigpXG4gIC51c2UoaGVsbWV0KCkpXG4gIC51c2UoZnJlc2goKSlcbiAgLnVzZShldGFnKCkpXG4gIC51c2UoY29tcHJlc3MoKSlcbiAgLmdldCgnL3BvbHlmaWxsLmpzJywgcG9seWZpbGwoKSlcbiAgLmdldChzZXJ2ZSgnYnVpbGQvcHVibGljJywgeyBnemlwOiB0cnVlLCBjYWNoZTogYCR7bXMoJzMwIGRheXMnKX07IGltbXV0YWJsZWAgfSkpXG4gIC51c2UocHJvZ3Jlc3MoeyBzcGlubmVyOiBmYWxzZSwgY29sb3I6ICdyZ2JhKDE3NSwgNDcsIDQ3LCAuMyknIH0pKVxuICAudXNlKGJvZHkoKSlcbiAgLnVzZShzZXNzaW9uKCkpXG4gIC51c2UobG9nZ2VyKCkpXG4gIC51c2UoZXhwb3NlKCkpXG4gIC51c2UocmVhY3QoKSlcbiAgLnVzZSh1bmhhbmRsZWQocmVkaXJlY3QoJy80MDQnKSkpXG4gIC51c2UoZXJyb3JIYW5kbGVyTWlkZGxld2FyZSlcbiAgLnVzZShwcmVsb2FkTWlkZGxld2FyZSlcbiAgLmF0KCcvYXBwLyonLCBhY3Rpb25zKVxuICAuZ2V0KHBhZ2VzKVxuICAubGlzdGVuKHsgcG9ydDogcHJvY2Vzcy5lbnYuUE9SVCB8fCA4MDgwIH0sIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIXByb2Nlc3MuYnJvd3NlciAmJiBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBjb25zb2xlLmxvZyhgU2VydmVyIHN0YXJ0ZWQgb24gcG9ydCAnJHt0aGlzLmFkZHJlc3MoKS5wb3J0fScuYClcbiAgICAgIHByb2Nlc3Muc2VuZCAmJiBwcm9jZXNzLnNlbmQoJ29ubGluZScpXG4gICAgfVxuICB9KVxuXG5pZiAocHJvY2Vzcy5icm93c2VyICYmIHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpIHtcbiAgcmVxdWlyZSgnb2ZmbGluZS1wbHVnaW4vcnVudGltZScpLmluc3RhbGwoKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9pbmRleC5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1zXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwibXNcIlxuLy8gbW9kdWxlIGlkID0gMTBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvaGVsbWV0XCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvaGVsbWV0XCJcbi8vIG1vZHVsZSBpZCA9IDExXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2ZyZXNoXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZnJlc2hcIlxuLy8gbW9kdWxlIGlkID0gMTJcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvZXRhZ1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2V0YWdcIlxuLy8gbW9kdWxlIGlkID0gMTNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvY29tcHJlc3NcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9jb21wcmVzc1wiXG4vLyBtb2R1bGUgaWQgPSAxNFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9wb2x5ZmlsbFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3BvbHlmaWxsXCJcbi8vIG1vZHVsZSBpZCA9IDE1XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL3N0YXRpY1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3N0YXRpY1wiXG4vLyBtb2R1bGUgaWQgPSAxNlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9wcm9ncmVzc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3Byb2dyZXNzXCJcbi8vIG1vZHVsZSBpZCA9IDE3XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2xvZ2dlclwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2xvZ2dlclwiXG4vLyBtb2R1bGUgaWQgPSAxOFxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC9leHBvc2VcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9leHBvc2VcIlxuLy8gbW9kdWxlIGlkID0gMTlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvYm9keVwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL2JvZHlcIlxuLy8gbW9kdWxlIGlkID0gMjBcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvc2Vzc2lvblwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcIkByaWxsL3Nlc3Npb25cIlxuLy8gbW9kdWxlIGlkID0gMjFcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiQHJpbGwvcmVkaXJlY3RcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC9yZWRpcmVjdFwiXG4vLyBtb2R1bGUgaWQgPSAyMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJAcmlsbC91bmhhbmRsZWRcIik7XG5cblxuLy8vLy8vLy8vLy8vLy8vLy8vXG4vLyBXRUJQQUNLIEZPT1RFUlxuLy8gZXh0ZXJuYWwgXCJAcmlsbC91bmhhbmRsZWRcIlxuLy8gbW9kdWxlIGlkID0gMjNcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IEh0dHBFcnJvciBmcm9tICdAcmlsbC9lcnJvcidcblxuLyoqXG4gKiBTaW1wbGUgZXJyb3IgaGFuZGxpbmcgbWlkZGxld2FyZSB3aGljaCByZWRpcmVjdHMgdG8gdGhlIGVycm9yIHBhZ2UuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIGVycm9ySGFuZGxlck1pZGRsZXdhcmUgKHsgcmVzIH0sIG5leHQpIHtcbiAgdHJ5IHtcbiAgICBhd2FpdCBuZXh0KClcbiAgfSBjYXRjaCAoZXJyKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVyciBpbnN0YW5jZW9mIEh0dHBFcnJvclxuICAgICAgPyBlcnIubWVzc2FnZVxuICAgICAgOiAnQW4gdW5rbm93biBlcnJvciBoYXMgb2NjdXJyZWQuJ1xuICAgIHJlcy5yZWRpcmVjdChgLzUwMD9tZXNzYWdlPSR7bWVzc2FnZX1gKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL21pZGRsZXdhcmUvZXJyb3ItaGFuZGxlci5qcyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkByaWxsL2Vycm9yXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwiQHJpbGwvZXJyb3JcIlxuLy8gbW9kdWxlIGlkID0gMjVcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuXG4vKipcbiAqIE1pZGRsZXdhcmUgd2hpY2ggd2lsbCB0ZWxsIHRoZSBicm93c2VyIHRvIHByZWxvYWQgZmlsZXNcbiAqIHdlIGtub3cgYXJlIGdvaW5nIHRvIGJlIG5lZWRlZCB0byByZW5kZXIuXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGFzeW5jIGZ1bmN0aW9uIHByZWxvYWRNaWRkbGV3YXJlICh7IHJlcyB9LCBuZXh0KSB7XG4gIGF3YWl0IG5leHQoKVxuICAvLyBJZiB3ZSBhcmUgc2VuZGluZyBvdXQgYSByZWFjdCBjb21wb25lbnQgdGhlbiB3ZSBuZWVkIHRoZSBtYWluIEpTIGFuZCBDU1MuXG4gIGlmIChSZWFjdC5pc1ZhbGlkRWxlbWVudChyZXMuYm9keSkpIHtcbiAgICByZXMuYXBwZW5kKCdMaW5rJywgJzwvaW5kZXguY3NzPjsgcmVsPXByZWxvYWQ7IGFzPXN0eWxlOycpXG4gICAgcmVzLmFwcGVuZCgnTGluaycsICc8L3BvbHlmaWxsLmpzPjsgcmVsPXByZWxvYWQ7IGFzPXNjcmlwdDsnKVxuICAgIHJlcy5hcHBlbmQoJ0xpbmsnLCAnPC9pbmRleC5qcz47IHJlbD1wcmVsb2FkOyBhcz1zY3JpcHQ7JylcbiAgfVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9taWRkbGV3YXJlL3ByZWxvYWQuanMiLCJpbXBvcnQgUm91dGVyIGZyb20gJ3JpbGwnXG5pbXBvcnQgKiBhcyB0b2RvQ3RybCBmcm9tICcuL3RvZG9zJ1xuXG4vLyBDcmVhdGUgYSBuZXN0ZWQgcmlsbCByb3V0ZXIgZm9yIHRoZSBjb250cm9sbGVyIHJvdXRlcy5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKVxuICAvLyBDcmVhdGVkIGEgbmVzdGVkIHByZWZpeGVkIHJvdXRlciBmb3IgdG9kbyBjb250cm9scy5cbiAgLmF0KCcvdG9kby8qJywgbmV3IFJvdXRlcigpXG4gICAgLnBvc3QoJy9jcmVhdGUnLCB0b2RvQ3RybC5jcmVhdGUpXG4gICAgLmdldCgnL29wZW4vOmlkJywgdG9kb0N0cmwub3BlbkJ5SWQpXG4gICAgLnBvc3QoJy91cGRhdGUvOmlkJywgdG9kb0N0cmwudXBkYXRlQnlJZClcbiAgICAuZ2V0KCcvdG9nZ2xlLzppZCcsIHRvZG9DdHJsLnRvZ2dsZUJ5SWQpXG4gICAgLmdldCgnL3RvZ2dsZS1hbGwnLCB0b2RvQ3RybC50b2dnbGVBbGwpXG4gICAgLmdldCgnL3JlbW92ZS86aWQnLCB0b2RvQ3RybC5yZW1vdmVCeUlkKVxuICAgIC5nZXQoJy9yZW1vdmUtY29tcGxldGVkJywgdG9kb0N0cmwucmVtb3ZlQ29tcGxldGVkKVxuICApXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2FjdGlvbnMvaW5kZXguanMiLCJpbXBvcnQgdWlkIGZyb20gJ2N1aWQnXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBUT0RPLlxuICovXG5leHBvcnQgZnVuY3Rpb24gY3JlYXRlICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBpZiAoIXJlcS5ib2R5LnRleHQpIHJldHVyblxuICB0b2Rvcy5wdXNoKHsgaWQ6IHVpZCgpLCB0ZXh0OiByZXEuYm9keS50ZXh0IH0pXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIE9wZW5zIGEgdG9kbyB0byBiZSB1cGRhdGVkLlxuICovXG5leHBvcnQgZnVuY3Rpb24gb3BlbkJ5SWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIGNvbnN0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZClcbiAgaWYgKCF0b2RvKSByZXR1cm5cbiAgdG9kby5lZGl0aW5nID0gdHJ1ZVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBVcGRhdGUgYW4gZXhpc3RpbmcgdG9kby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZUJ5SWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIGNvbnN0IHRvZG8gPSB0b2Rvcy5maW5kKHRvZG8gPT4gdG9kby5pZCA9PT0gcmVxLnBhcmFtcy5pZClcbiAgaWYgKCF0b2RvIHx8ICFyZXEuYm9keS50ZXh0KSByZXR1cm5cbiAgdG9kby50ZXh0ID0gcmVxLmJvZHkudGV4dFxuICB0b2RvLmVkaXRpbmcgPSBmYWxzZVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2RvcylcbiAgcmVzLnJlZGlyZWN0KCdiYWNrJylcbn1cblxuLyoqXG4gKiBUb2dnbGVzIGEgdG9kbydzIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVCeUlkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBjb25zdCB0b2RvID0gdG9kb3MuZmluZCh0b2RvID0+IHRvZG8uaWQgPT09IHJlcS5wYXJhbXMuaWQpXG4gIGlmICghdG9kbykgcmV0dXJuXG4gIHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFRvZ2dsZXMgYWxsIHRvZG9zIGNvbXBsZXRpb24uXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0b2dnbGVBbGwgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIHRvZG9zLmZvckVhY2godG9kbyA9PiB7IHRvZG8uY29tcGxldGVkID0gIXRvZG8uY29tcGxldGVkIH0pXG4gIHNlc3Npb24uc2V0KCd0b2RvcycsIHRvZG9zKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG4vKipcbiAqIFJlbW92ZXMgYW4gZXhpc3RpbmcgdG9kby5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJ5SWQgKHsgcmVxLCByZXMsIHNlc3Npb24gfSkge1xuICBjb25zdCB0b2RvcyA9IHNlc3Npb24uZ2V0KCd0b2RvcycpIHx8IFtdXG4gIHRvZG9zLnNwbGljZSh0b2Rvcy5maW5kSW5kZXgodG9kbyA9PiB0b2RvLmlkID09PSByZXEucGFyYW1zLmlkKSwgMSlcbiAgc2Vzc2lvbi5zZXQoJ3RvZG9zJywgdG9kb3MpXG4gIHJlcy5yZWRpcmVjdCgnYmFjaycpXG59XG5cbi8qKlxuICogUmVtb3ZlcyBhbGwgY29tcGxldGVkIHRvZG9zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlQ29tcGxldGVkICh7IHJlcSwgcmVzLCBzZXNzaW9uIH0pIHtcbiAgY29uc3QgdG9kb3MgPSBzZXNzaW9uLmdldCgndG9kb3MnKSB8fCBbXVxuICBzZXNzaW9uLnNldCgndG9kb3MnLCB0b2Rvcy5maWx0ZXIodG9kbyA9PiAhdG9kby5jb21wbGV0ZWQpKVxuICByZXMucmVkaXJlY3QoJ2JhY2snKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9hY3Rpb25zL3RvZG9zLmpzIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwiY3VpZFwiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImN1aWRcIlxuLy8gbW9kdWxlIGlkID0gMjlcbi8vIG1vZHVsZSBjaHVua3MgPSAwIiwiaW1wb3J0IFJvdXRlciBmcm9tICdyaWxsJ1xuaW1wb3J0IHsgd3JhcCB9IGZyb20gJ0ByaWxsL3JlYWN0J1xuaW1wb3J0IFBhZ2UgZnJvbSAnLi4vY29tcG9uZW50cy9wYWdlJ1xuaW1wb3J0IGhvbWVQYWdlIGZyb20gJy4vaG9tZSdcbmltcG9ydCBlcnJvclBhZ2UgZnJvbSAnLi81MDAnXG5pbXBvcnQgbWlzc2luZ1BhZ2UgZnJvbSAnLi80MDQnXG5cbmV4cG9ydCBkZWZhdWx0IG5ldyBSb3V0ZXIoKVxuICAuZ2V0KHdyYXAoUGFnZSkpIC8vIFdyYXAgYWxsIHBhZ2VzIHdpdGggdGhlIDxQYWdlPiBjb21wb25lbnQuXG4gIC5nZXQoJy81MDAnLCBlcnJvclBhZ2UpXG4gIC5nZXQoJy80MDQnLCBtaXNzaW5nUGFnZSlcbiAgLmdldCgnLzpmaWx0ZXIoYWxsfHBlbmRpbmd8Y29tcGxldGVkKT8nLCBob21lUGFnZSlcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvcGFnZXMvaW5kZXguanMiLCJpbXBvcnQgJy4vc3R5bGUuY3NzJ1xuaW1wb3J0IG1hbmlmZXN0IGZyb20gJy4uLy4uL2Fzc2V0cy9tYW5pZmVzdC53ZWJtYW5pZmVzdCdcbmltcG9ydCBpbWdGYXZpY29uIGZyb20gJy4uLy4uL2Fzc2V0cy9mYXZpY29uLnBuZydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBUaGlzIGlzIGFuIGV4YW1wbGUgd3JhcHBlci5cbiAqIFdyYXBwZXJzIGFyZSB1c2VkIHRvIGNvbnRhaW4gc3ViIHNlY3Rpb25zIG9mIGFuIGFwcCwgdGhpcyBwYXJ0aWN1bGFyIG9uZSB3cmFwcyB0aGUgZW50aXJlIGNvbnRlbnRzIHdpdGggdGhlIGRvY3VtZW50LlxuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYWdlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyICgpIHtcbiAgICBjb25zdCB7IGNvbnRleHQsIHByb3BzIH0gPSB0aGlzXG4gICAgY29uc3QgeyBsb2NhbHMgfSA9IGNvbnRleHRcblxuICAgIHJldHVybiA8aHRtbCBsYW5nPSdlbicgZGF0YS1mcmFtZXdvcms9J3JpbGwnPlxuICAgICAgPGhlYWQ+XG4gICAgICAgIDxtZXRhIGNoYXJTZXQ9J3V0Zi04JyAvPlxuICAgICAgICA8bWV0YSBodHRwRXF1aXY9J1gtVUEtQ29tcGF0aWJsZScgY29udGVudD0nSUU9ZWRnZSxjaHJvbWU9MScgLz5cbiAgICAgICAgPG1ldGEgbmFtZT0ndmlld3BvcnQnIGNvbnRlbnQ9J3dpZHRoPWRldmljZS13aWR0aCwgaW5pdGlhbC1zY2FsZT0xLjAnIC8+XG4gICAgICAgIDx0aXRsZT57bG9jYWxzLnRpdGxlfTwvdGl0bGU+XG4gICAgICAgIDxtZXRhIG5hbWU9J2Rlc2NyaXB0aW9uJyBjb250ZW50PSdUb2RvIE1WQyBhcHAgdXNpbmcgUmlsbCBhbmQgUmVhY3QuJyAvPlxuICAgICAgICA8bWV0YSBuYW1lPSd0aGVtZS1jb2xvcicgY29udGVudD0nI2FmMmYyZicgLz5cbiAgICAgICAgPGxpbmsgcmVsPSdtYW5pZmVzdCcgaHJlZj17bWFuaWZlc3R9IC8+XG4gICAgICAgIDxsaW5rIHJlbD0nc2hvcnRjdXQgaWNvbicgaHJlZj17aW1nRmF2aWNvbn0gLz5cbiAgICAgICAgPGxpbmsgcmVsPSdzdHlsZXNoZWV0JyBocmVmPScvaW5kZXguY3NzJyAvPlxuICAgICAgPC9oZWFkPlxuICAgICAgPGJvZHk+XG4gICAgICAgIDxkaXYgaWQ9J3Jvb3QnPntwcm9wcy5jaGlsZHJlbn08L2Rpdj5cbiAgICAgICAgPHNjcmlwdCBzcmM9Jy9wb2x5ZmlsbC5qcycgLz5cbiAgICAgICAgPHNjcmlwdCBzcmM9Jy9pbmRleC5qcycgLz5cbiAgICAgIDwvYm9keT5cbiAgICA8L2h0bWw+XG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9wYWdlL2luZGV4LmpzIiwiLy8gcmVtb3ZlZCBieSBleHRyYWN0LXRleHQtd2VicGFjay1wbHVnaW5cblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9jb21wb25lbnRzL3BhZ2Uvc3R5bGUuY3NzXG4vLyBtb2R1bGUgaWQgPSAzMlxuLy8gbW9kdWxlIGNodW5rcyA9IDAiLCJtb2R1bGUuZXhwb3J0cyA9IFwiLzE3SFZKVXlST3Aud2VibWFuaWZlc3RcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9hc3NldHMvbWFuaWZlc3Qud2VibWFuaWZlc3Rcbi8vIG1vZHVsZSBpZCA9IDMzXG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsIm1vZHVsZS5leHBvcnRzID0gXCIvV2pTVk51dThDMC5wbmdcIjtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyAuL2FwcC9hc3NldHMvZmF2aWNvbi5wbmdcbi8vIG1vZHVsZSBpZCA9IDM0XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcbmltcG9ydCBIZWFkZXIgZnJvbSAnLi4vY29tcG9uZW50cy9oZWFkZXInXG5pbXBvcnQgVG9kb0xpc3QgZnJvbSAnLi4vY29tcG9uZW50cy90b2RvLWxpc3QnXG5pbXBvcnQgRm9vdGVyIGZyb20gJy4uL2NvbXBvbmVudHMvZm9vdGVyJ1xuXG4vKipcbiAqIFJvdXRlIGhhbmRsZXIgZm9yIHJlbmRlcmluZyB0aGUgaG9tZSBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyByZXEsIHJlcywgbG9jYWxzLCBzZXNzaW9uIH0pID0+IHtcbiAgLy8gRGVmYXVsdCBmaWx0ZXIgdG8gXCJhbGxcIi5cbiAgY29uc3QgeyBwYXJhbXM6IHsgZmlsdGVyID0gJ2FsbCcgfSB9ID0gcmVxXG4gIGNvbnN0IHRvZG9zID0gc2Vzc2lvbi5nZXQoJ3RvZG9zJykgfHwgW11cblxuICAvLyBVcGRhdGUgZG9jdW1lbnQgdGl0bGUuXG4gIGxvY2Fscy50aXRsZSA9IGBUb2RvczogJHtmaWx0ZXJ9YFxuXG4gIHJlcy5ib2R5ID0gKFxuICAgIDxkaXY+XG4gICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J3RvZG9hcHAnPlxuICAgICAgICA8SGVhZGVyIC8+XG4gICAgICAgIHt0b2Rvcy5sZW5ndGggIT09IDAgJiYgPFRvZG9MaXN0IGZpbHRlcj17ZmlsdGVyfSB0b2Rvcz17dG9kb3N9IC8+fVxuICAgICAgPC9zZWN0aW9uPlxuICAgICAgPEZvb3RlciAvPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3BhZ2VzL2hvbWUuanMiLCJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSAncmVhY3QnXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgcmV0dXJuIChcbiAgICAgIDxoZWFkZXIgY2xhc3NOYW1lPSdoZWFkZXInPlxuICAgICAgICA8aDE+dG9kb3M8L2gxPlxuICAgICAgICA8Zm9ybSBjbGFzc05hbWU9J2NyZWF0ZS1mb3JtJyBhY3Rpb249Jy9hcHAvdG9kby9jcmVhdGUnIG1ldGhvZD0nUE9TVCcgYXV0b0NvbXBsZXRlPSdvZmYnPlxuICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J25ldy10b2RvJyBuYW1lPSd0ZXh0JyBwbGFjZWhvbGRlcj0nV2hhdCBuZWVkcyB0byBiZSBkb25lPycgYXV0b0NvbXBsZXRlPSdvZmYnIGF1dG9Gb2N1cyAvPlxuICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyAvPlxuICAgICAgICA8L2Zvcm0+XG4gICAgICA8L2hlYWRlcj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9oZWFkZXIuanMiLCJpbXBvcnQgY3ggZnJvbSAnY2xhc3NuYW1lcydcbmltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tICdyZWFjdCdcbmltcG9ydCBUb2RvSXRlbSBmcm9tICcuL3RvZG8taXRlbSdcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9kb0xpc3QgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIGNvbnN0IHsgcHJvcHMgfSA9IHRoaXNcbiAgICBjb25zdCB7IHRvZG9zLCBmaWx0ZXIgfSA9IHByb3BzXG5cbiAgICBjb25zdCBjb21wbGV0ZWQgPSB0b2Rvcy5maWx0ZXIodG9kbyA9PiB0b2RvLmNvbXBsZXRlZClcbiAgICBjb25zdCBwZW5kaW5nID0gdG9kb3MuZmlsdGVyKHRvZG8gPT4gIXRvZG8uY29tcGxldGVkKVxuICAgIGNvbnN0IGRpc3BsYXkgPSAoXG4gICAgICBmaWx0ZXIgPT09ICdhbGwnID8gdG9kb3NcbiAgICAgIDogZmlsdGVyID09PSAncGVuZGluZycgPyBwZW5kaW5nXG4gICAgICA6IGZpbHRlciA9PT0gJ2NvbXBsZXRlZCcgPyBjb21wbGV0ZWRcbiAgICAgIDogbnVsbFxuICAgIClcblxuICAgIHJldHVybiAoXG4gICAgICA8ZGl2PlxuICAgICAgICA8c2VjdGlvbiBjbGFzc05hbWU9J21haW4nPlxuICAgICAgICAgIDxhIGhyZWY9Jy9hcHAvdG9kby90b2dnbGUtYWxsJz5cbiAgICAgICAgICAgIDxpbnB1dCBjbGFzc05hbWU9J3RvZ2dsZS1hbGwnIHR5cGU9J2NoZWNrYm94JyAvPlxuICAgICAgICAgICAgPGxhYmVsIGh0bWxGb3I9J3RvZ2dsZS1hbGwnPk1hcmsgYWxsIGFzIGNvbXBsZXRlPC9sYWJlbD5cbiAgICAgICAgICA8L2E+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0ndG9kby1saXN0Jz5cbiAgICAgICAgICAgIHtkaXNwbGF5Lm1hcCh0b2RvID0+IDxUb2RvSXRlbSBrZXk9e3RvZG8uaWR9IHsuLi50b2RvfSAvPil9XG4gICAgICAgICAgPC91bD5cbiAgICAgICAgPC9zZWN0aW9uPlxuICAgICAgICA8Zm9vdGVyIGNsYXNzTmFtZT0nZm9vdGVyJz5cbiAgICAgICAgICA8c3BhbiBjbGFzc05hbWU9J3RvZG8tY291bnQnPjxzdHJvbmc+e3BlbmRpbmcubGVuZ3RofTwvc3Ryb25nPiBpdGVtIGxlZnQ8L3NwYW4+XG4gICAgICAgICAgPHVsIGNsYXNzTmFtZT0nZmlsdGVycyc+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3goeyBzZWxlY3RlZDogcHJvcHMuZmlsdGVyID09PSAnYWxsJyB9KX0gaHJlZj0nLyc+QWxsPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgPGEgY2xhc3NOYW1lPXtjeCh7IHNlbGVjdGVkOiBwcm9wcy5maWx0ZXIgPT09ICdwZW5kaW5nJyB9KX0gaHJlZj0nL3BlbmRpbmcnPkFjdGl2ZTwvYT5cbiAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgIDxhIGNsYXNzTmFtZT17Y3goeyBzZWxlY3RlZDogcHJvcHMuZmlsdGVyID09PSAnY29tcGxldGVkJyB9KX0gaHJlZj0nL2NvbXBsZXRlZCc+Q29tcGxldGVkPC9hPlxuICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgPGZvcm0gYWN0aW9uPScvYXBwL3RvZG8vcmVtb3ZlLWNvbXBsZXRlZCc+XG4gICAgICAgICAgICA8YnV0dG9uIHR5cGU9J3N1Ym1pdCcgY2xhc3NOYW1lPSdjbGVhci1jb21wbGV0ZWQnPkNsZWFyIGNvbXBsZXRlZDwvYnV0dG9uPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9mb290ZXI+XG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy90b2RvLWxpc3QuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiYWJlbC1ydW50aW1lL2hlbHBlcnMvZXh0ZW5kc1wiKTtcblxuXG4vLy8vLy8vLy8vLy8vLy8vLy9cbi8vIFdFQlBBQ0sgRk9PVEVSXG4vLyBleHRlcm5hbCBcImJhYmVsLXJ1bnRpbWUvaGVscGVycy9leHRlbmRzXCJcbi8vIG1vZHVsZSBpZCA9IDM4XG4vLyBtb2R1bGUgY2h1bmtzID0gMCIsImltcG9ydCBjeCBmcm9tICdjbGFzc25hbWVzJ1xuaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2RvSXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlciAoKSB7XG4gICAgY29uc3QgeyBwcm9wcyB9ID0gdGhpc1xuICAgIHJldHVybiAoXG4gICAgICA8bGkgY2xhc3NOYW1lPXtjeCh7IGNvbXBsZXRlZDogcHJvcHMuY29tcGxldGVkLCBlZGl0aW5nOiBwcm9wcy5lZGl0aW5nIH0pfT5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9J3ZpZXcnPlxuICAgICAgICAgIDxhIGhyZWY9e2AvYXBwL3RvZG8vdG9nZ2xlLyR7cHJvcHMuaWR9YH0gYXJpYS1sYWJlbD0nVG9nZ2xlIFRvZG8nPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0ndG9nZ2xlJyB0eXBlPSdjaGVja2JveCcgZGVmYXVsdENoZWNrZWQ9e3Byb3BzLmNvbXBsZXRlZH0gLz5cbiAgICAgICAgICAgIDxsYWJlbCAvPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8YSBocmVmPXtgL2FwcC90b2RvL29wZW4vJHtwcm9wcy5pZH1gfSBhcmlhLWxhYmVsPSdFZGl0IFRvZG8nPjxsYWJlbD57cHJvcHMudGV4dH08L2xhYmVsPjwvYT5cbiAgICAgICAgICA8Zm9ybSBhY3Rpb249e2AvYXBwL3RvZG8vcmVtb3ZlLyR7cHJvcHMuaWR9YH0+XG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT0nZGVzdHJveScgdHlwZT0nc3VibWl0JyAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAge3Byb3BzLmVkaXRpbmcgJiYgKFxuICAgICAgICAgIDxmb3JtIGNsYXNzTmFtZT0ndXBkYXRlLWZvcm0nIGFjdGlvbj17YC9hcHAvdG9kby91cGRhdGUvJHtwcm9wcy5pZH1gfSBtZXRob2Q9J1BPU1QnPlxuICAgICAgICAgICAgPGlucHV0IGNsYXNzTmFtZT0nZWRpdCcgbmFtZT0ndGV4dCcgZGVmYXVsdFZhbHVlPXtwcm9wcy50ZXh0fSBhdXRvRm9jdXMgLz5cbiAgICAgICAgICAgIDxidXR0b24gdHlwZT0nc3VibWl0JyAvPlxuICAgICAgICAgIDwvZm9ybT5cbiAgICAgICAgKX1cbiAgICAgIDwvbGk+XG4gICAgKVxuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL2NvbXBvbmVudHMvdG9kby1pdGVtLmpzIiwiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gJ3JlYWN0J1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb290ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIgKCkge1xuICAgIHJldHVybiAoXG4gICAgICA8Zm9vdGVyIGlkPSdpbmZvJyBjbGFzc05hbWU9J2luZm8nPlxuICAgICAgICA8aDM+R28gYWhlYWQsIGRpc2FibGUgSmF2YVNjcmlwdC48L2gzPlxuICAgICAgICA8cD5TaW5nbGUtY2xpY2sgdG8gZWRpdCBhIHRvZG88L3A+XG4gICAgICAgIDxwPlRlbXBsYXRlIGJ5IDxhIGhyZWY9J2h0dHA6Ly9zaW5kcmVzb3JodXMuY29tJz5TaW5kcmUgU29yaHVzPC9hPjwvcD5cbiAgICAgICAgPHA+Q3JlYXRlZCBieSA8YSBocmVmPSdodHRwOi8vdG9kb212Yy5jb20nPkR5bGFuIFBpZXJjZXk8L2E+PC9wPlxuICAgICAgICA8cD5QYXJ0IG9mIDxhIGhyZWY9J2h0dHA6Ly90b2RvbXZjLmNvbSc+VG9kb01WQzwvYT48L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICApXG4gIH1cbn1cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBhcHAvY29tcG9uZW50cy9mb290ZXIuanMiLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5cbi8qKlxuICogUm91dGUgaGFuZGxlciBmb3IgcmVuZGVyaW5nIHRoZSA0MDQgcGFnZS5cbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgcmVxLCByZXMsIGxvY2FscyB9KSA9PiB7XG4gIGNvbnN0IHsgbWVzc2FnZSB9ID0gcmVxLnF1ZXJ5XG4gIGxvY2Fscy50aXRsZSA9IGBUb2RvczogRXJyb3JgXG4gIHJlcy5zdGF0dXMgPSA1MDBcbiAgcmVzLmJvZHkgPSAoXG4gICAgPGRpdj5cbiAgICAgIDxmb290ZXIgY2xhc3NOYW1lPSdpbmZvJz5cbiAgICAgICAgPGgzPnttZXNzYWdlfTwvaDM+XG4gICAgICAgIDxoMj48YSBocmVmPScvJz5DbGljayBoZXJlIHRvIGdvIGJhY2s8L2E+PC9oMj5cbiAgICAgICAgPHA+VGVtcGxhdGUgYnkgPGEgaHJlZj0naHR0cDovL3NpbmRyZXNvcmh1cy5jb20nPlNpbmRyZSBTb3JodXM8L2E+PC9wPlxuICAgICAgICA8cD5DcmVhdGVkIGJ5IDxhIGhyZWY9J2h0dHA6Ly90b2RvbXZjLmNvbSc+RHlsYW4gUGllcmNleTwvYT48L3A+XG4gICAgICAgIDxwPlBhcnQgb2YgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5Ub2RvTVZDPC9hPjwvcD5cbiAgICAgIDwvZm9vdGVyPlxuICAgIDwvZGl2PlxuICApXG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gYXBwL3BhZ2VzLzUwMC5qcyIsImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBSb3V0ZSBoYW5kbGVyIGZvciByZW5kZXJpbmcgdGhlIDQwNCBwYWdlLlxuICogQHBhcmFtIHtSaWxsLkNvbnRleHR9IG9wdGlvbnNcbiAqL1xuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHsgcmVzLCBsb2NhbHMgfSkgPT4ge1xuICBsb2NhbHMudGl0bGUgPSBgVG9kb3M6IFBhZ2Ugbm90IGZvdW5kYFxuICByZXMuc3RhdHVzID0gNDA0XG4gIHJlcy5ib2R5ID0gKFxuICAgIDxkaXY+XG4gICAgICA8Zm9vdGVyIGlkPSdpbmZvJyBjbGFzc05hbWU9J2luZm8nPlxuICAgICAgICA8aDM+VGhlIHJlcXVlc3RlZCBwYWdlIGNvdWxkIG5vdCBiZSBmb3VuZC48L2gzPlxuICAgICAgICA8aDI+PGEgaHJlZj0nLyc+Q2xpY2sgaGVyZSB0byBnbyBiYWNrPC9hPjwvaDI+XG4gICAgICAgIDxwPlRlbXBsYXRlIGJ5IDxhIGhyZWY9J2h0dHA6Ly9zaW5kcmVzb3JodXMuY29tJz5TaW5kcmUgU29yaHVzPC9hPjwvcD5cbiAgICAgICAgPHA+Q3JlYXRlZCBieSA8YSBocmVmPSdodHRwOi8vdG9kb212Yy5jb20nPkR5bGFuIFBpZXJjZXk8L2E+PC9wPlxuICAgICAgICA8cD5QYXJ0IG9mIDxhIGhyZWY9J2h0dHA6Ly90b2RvbXZjLmNvbSc+VG9kb01WQzwvYT48L3A+XG4gICAgICA8L2Zvb3Rlcj5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIGFwcC9wYWdlcy80MDQuanMiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJvZmZsaW5lLXBsdWdpbi9ydW50aW1lXCIpO1xuXG5cbi8vLy8vLy8vLy8vLy8vLy8vL1xuLy8gV0VCUEFDSyBGT09URVJcbi8vIGV4dGVybmFsIFwib2ZmbGluZS1wbHVnaW4vcnVudGltZVwiXG4vLyBtb2R1bGUgaWQgPSA0M1xuLy8gbW9kdWxlIGNodW5rcyA9IDAiXSwibWFwcGluZ3MiOiI7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBOzs7O0FDN0RBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBbUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7O0FDaERBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7O0FDQUE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUlBO0FBQ0E7QUFFQTtBQUNBO0FBUkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTs7Ozs7O0FDTEE7Ozs7Ozs7Ozs7Ozs7OztBQ0FBO0FBQ0E7QUFDQTs7OztBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVJBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7Ozs7Ozs7QUNOQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFEQTs7Ozs7OztBQ0pBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUdBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTs7Ozs7O0FDN0VBOzs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7OztBQUlBOzs7Ozs7Ozs7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQVRBO0FBV0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFIQTtBQVpBO0FBa0JBO0FBQ0E7O0FBeEJBO0FBQ0E7QUFEQTs7Ozs7O0FDVEE7Ozs7OztBQ0FBOzs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRkE7QUFJQTtBQUxBO0FBQ0E7QUFWQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUFBO0FBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUZBO0FBRkE7QUFRQTtBQUNBOztBQVpBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7O0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBRUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQU1BO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUZBO0FBSUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBREE7QUFMQTtBQVNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBR0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBUEE7QUFZQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREE7QUFkQTtBQVZBO0FBOEJBO0FBQ0E7O0FBOUNBO0FBQ0E7QUFEQTs7Ozs7O0FDSkE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDQUE7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7OztBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQUlBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBREE7QUFOQTtBQVdBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFGQTtBQWJBO0FBb0JBO0FBQ0E7O0FBekJBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDSEE7QUFDQTtBQUNBOzs7Ozs7Ozs7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFRQTtBQUNBOztBQVpBO0FBQ0E7QUFEQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOzs7QUFHQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxBO0FBREE7QUFDQTtBQU5BO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQUE7QUFBQTs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTEE7QUFDQTtBQUNBOzs7O0FBSUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEE7QUFEQTtBQUNBO0FBTEE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQURBO0FBQUE7QUFBQTtBQUFBOzs7Ozs7QUNOQTs7O0EiLCJzb3VyY2VSb290IjoiIn0=