webpackHotUpdate("static/development/pages/blog.js",{

/***/ "./containers/BlogSection.jsx":
/*!************************************!*\
  !*** ./containers/BlogSection.jsx ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ \"./node_modules/@babel/runtime/regenerator/index.js\");\n/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/asyncToGenerator */ \"./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_Blog_card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Blog-card */ \"./components/Blog-card.jsx\");\n/* harmony import */ var _api_posts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../api/posts */ \"./api/posts.js\");\n\n\n\nvar _this = undefined,\n    _jsxFileName = \"/home/fonscode/dev/portfolio/containers/BlogSection.jsx\";\n\n\nvar __jsx = react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement;\n\n\n\nvar BlogSection = function BlogSection() {\n  return __jsx(\"div\", {\n    className: \"blog-section\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 6,\n      columnNumber: 5\n    }\n  }, __jsx(\"h2\", {\n    className: \"blog-section__title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 7,\n      columnNumber: 7\n    }\n  }, \"Saludos!! Bienvenido al blog.\"), __jsx(\"div\", {\n    className: \"blog-section__subtitle\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 8,\n      columnNumber: 7\n    }\n  }, __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 9,\n      columnNumber: 9\n    }\n  }, \"Disfruto mucho aprendiendo sobre las cosas que me apasionan todos los dias y en este espacio compartire articulos sobre tecnologia, videojuegos, diseno y mas!\"), __jsx(\"p\", {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 14,\n      columnNumber: 9\n    }\n  }, \"Si te interesa la programacion estas en buen lugar! espero que el contenido te sea de ayuda\")), __jsx(\"h2\", {\n    className: \"blog-section__title\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 7\n    }\n  }, __jsx(\"hr\", {\n    className: \"center\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 20,\n      columnNumber: 43\n    }\n  }), \"Ultimos posts\"), __jsx(\"div\", {\n    className: \"container\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 21,\n      columnNumber: 7\n    }\n  }, __jsx(\"div\", {\n    className: \"column\",\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 22,\n      columnNumber: 11\n    }\n  }, __jsx(_components_Blog_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 24,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Blog_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 25,\n      columnNumber: 11\n    }\n  }), __jsx(_components_Blog_card__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    __self: _this,\n    __source: {\n      fileName: _jsxFileName,\n      lineNumber: 26,\n      columnNumber: 11\n    }\n  }))));\n};\n\n_c = BlogSection;\nBlogSection.getInitialProps = /*#__PURE__*/Object(_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__[\"default\"])( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {\n  var posts;\n  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {\n    while (1) {\n      switch (_context.prev = _context.next) {\n        case 0:\n          _context.next = 2;\n          return Object(_api_posts__WEBPACK_IMPORTED_MODULE_4__[\"getPosts\"])();\n\n        case 2:\n          posts = _context.sent;\n          return _context.abrupt(\"return\", {\n            posts: posts\n          });\n\n        case 4:\n        case \"end\":\n          return _context.stop();\n      }\n    }\n  }, _callee);\n}));\n/* harmony default export */ __webpack_exports__[\"default\"] = (BlogSection);\n\nvar _c;\n\n$RefreshReg$(_c, \"BlogSection\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports_1 = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports_1, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports_1)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports_1;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports_1)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9jb250YWluZXJzL0Jsb2dTZWN0aW9uLmpzeD9kMGM1Il0sIm5hbWVzIjpbIkJsb2dTZWN0aW9uIiwiZ2V0SW5pdGlhbFByb3BzIiwiZ2V0UG9zdHMiLCJwb3N0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7O0FBRUEsSUFBTUEsV0FBVyxHQUFHLFNBQWRBLFdBQWMsR0FBTTtBQUN4QixTQUNFO0FBQUssYUFBUyxFQUFDLGNBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxLQUNFO0FBQUksYUFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUNBREYsRUFFRTtBQUFLLGFBQVMsRUFBQyx3QkFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxzS0FERixFQU1FO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUdBTkYsQ0FGRixFQWNFO0FBQUksYUFBUyxFQUFDLHFCQUFkO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBb0M7QUFBSSxhQUFTLEVBQUMsUUFBZDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBQXBDLGtCQWRGLEVBZUU7QUFBSyxhQUFTLEVBQUMsV0FBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBQ0k7QUFBSyxhQUFTLEVBQUMsUUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLEtBRUEsTUFBQyw2REFBRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLElBRkEsRUFHQSxNQUFDLDZEQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsSUFIQSxFQUlBLE1BQUMsNkRBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxJQUpBLENBREosQ0FmRixDQURGO0FBMEJELENBM0JEOztLQUFNQSxXO0FBNkJOQSxXQUFXLENBQUNDLGVBQVosaU1BQThCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBQ1JDLDJEQUFRLEVBREE7O0FBQUE7QUFDdEJDLGVBRHNCO0FBQUEsMkNBRXJCO0FBQUVBLGlCQUFLLEVBQUxBO0FBQUYsV0FGcUI7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsQ0FBOUI7QUFLZUgsMEVBQWYiLCJmaWxlIjoiLi9jb250YWluZXJzL0Jsb2dTZWN0aW9uLmpzeC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBCbG9nQ2FyZCBmcm9tICcuLi9jb21wb25lbnRzL0Jsb2ctY2FyZCdcbmltcG9ydCB7IGdldFBvc3RzIH0gZnJvbSBcIi4uL2FwaS9wb3N0c1wiO1xuXG5jb25zdCBCbG9nU2VjdGlvbiA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctc2VjdGlvblwiPlxuICAgICAgPGgyIGNsYXNzTmFtZT1cImJsb2ctc2VjdGlvbl9fdGl0bGVcIj5TYWx1ZG9zISEgQmllbnZlbmlkbyBhbCBibG9nLjwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2ctc2VjdGlvbl9fc3VidGl0bGVcIj5cbiAgICAgICAgPHA+XG4gICAgICAgICAgRGlzZnJ1dG8gbXVjaG8gYXByZW5kaWVuZG8gc29icmUgbGFzIGNvc2FzIHF1ZSBtZSBhcGFzaW9uYW4gdG9kb3MgbG9zXG4gICAgICAgICAgZGlhcyB5IGVuIGVzdGUgZXNwYWNpbyBjb21wYXJ0aXJlIGFydGljdWxvcyBzb2JyZSB0ZWNub2xvZ2lhLFxuICAgICAgICAgIHZpZGVvanVlZ29zLCBkaXNlbm8geSBtYXMhXG4gICAgICAgIDwvcD5cbiAgICAgICAgPHA+XG4gICAgICAgICAgU2kgdGUgaW50ZXJlc2EgbGEgcHJvZ3JhbWFjaW9uIGVzdGFzIGVuIGJ1ZW4gbHVnYXIhIGVzcGVybyBxdWUgZWxcbiAgICAgICAgICBjb250ZW5pZG8gdGUgc2VhIGRlIGF5dWRhXG4gICAgICAgIDwvcD5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8aDIgY2xhc3NOYW1lPVwiYmxvZy1zZWN0aW9uX190aXRsZVwiPjxociBjbGFzc05hbWU9XCJjZW50ZXJcIi8+VWx0aW1vcyBwb3N0czwvaDI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sdW1uXCI+XG4gICAgICAgICAgICBcbiAgICAgICAgICA8QmxvZ0NhcmQvPlxuICAgICAgICAgIDxCbG9nQ2FyZC8+XG4gICAgICAgICAgPEJsb2dDYXJkLz4gXG4gICAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj4gICAgICAgICAgXG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5CbG9nU2VjdGlvbi5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyAoKSA9PiB7XG4gIGNvbnN0IHBvc3RzID0gYXdhaXQgZ2V0UG9zdHMoKTtcbiAgcmV0dXJuIHsgcG9zdHMgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJsb2dTZWN0aW9uO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./containers/BlogSection.jsx\n");

/***/ })

})