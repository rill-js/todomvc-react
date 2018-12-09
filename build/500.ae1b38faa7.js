require("source-map-support").install({ hookRequire: true })
exports.ids = [1];
exports.modules = {

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/**
 * Route handler for rendering the 404 page.
 */

/* harmony default export */ __webpack_exports__["default"] = (async ({
  req,
  res,
  locals
}) => {
  const {
    message
  } = req.query;
  locals.title = `Todos: Error`;
  res.status = 500;
  res.body = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("footer", {
    className: "info"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, message), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, "Click here to go back")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Template by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://sindresorhus.com"
  }, "Sindre Sorhus")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Created by ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://todomvc.com"
  }, "Dylan Piercey")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Part of ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "http://todomvc.com"
  }, "TodoMVC"))));
});

/***/ })

};;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiNTAwLmFlMWIzOGZhYTcuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hcHAvcGFnZXMvNTAwLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCdcblxuLyoqXG4gKiBSb3V0ZSBoYW5kbGVyIGZvciByZW5kZXJpbmcgdGhlIDQwNCBwYWdlLlxuICovXG5leHBvcnQgZGVmYXVsdCBhc3luYyAoeyByZXEsIHJlcywgbG9jYWxzIH0pID0+IHtcbiAgY29uc3QgeyBtZXNzYWdlIH0gPSByZXEucXVlcnlcbiAgbG9jYWxzLnRpdGxlID0gYFRvZG9zOiBFcnJvcmBcbiAgcmVzLnN0YXR1cyA9IDUwMFxuICByZXMuYm9keSA9IChcbiAgICA8ZGl2PlxuICAgICAgPGZvb3RlciBjbGFzc05hbWU9J2luZm8nPlxuICAgICAgICA8aDM+e21lc3NhZ2V9PC9oMz5cbiAgICAgICAgPGgyPjxhIGhyZWY9Jy8nPkNsaWNrIGhlcmUgdG8gZ28gYmFjazwvYT48L2gyPlxuICAgICAgICA8cD5UZW1wbGF0ZSBieSA8YSBocmVmPSdodHRwOi8vc2luZHJlc29yaHVzLmNvbSc+U2luZHJlIFNvcmh1czwvYT48L3A+XG4gICAgICAgIDxwPkNyZWF0ZWQgYnkgPGEgaHJlZj0naHR0cDovL3RvZG9tdmMuY29tJz5EeWxhbiBQaWVyY2V5PC9hPjwvcD5cbiAgICAgICAgPHA+UGFydCBvZiA8YSBocmVmPSdodHRwOi8vdG9kb212Yy5jb20nPlRvZG9NVkM8L2E+PC9wPlxuICAgICAgPC9mb290ZXI+XG4gICAgPC9kaXY+XG4gIClcbn1cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUVBOzs7O0FBR0E7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFDQTtBQUFBO0FBSUE7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==