webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/comps/navbar.js":
/*!*******************************!*\
  !*** ./pages/comps/navbar.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _logos_menusvg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./logos/menusvg */ "./pages/comps/logos/menusvg.js");
/* harmony import */ var _public_static_css_navbar_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../public/static/css/navbar.scss */ "./public/static/css/navbar.scss");
/* harmony import */ var _public_static_css_navbar_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_navbar_scss__WEBPACK_IMPORTED_MODULE_3__);
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/comps/navbar.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;





var Navbar = function Navbar() {
  var handleMenuOpen = function handleMenuOpen(e) {
    var dropdown = document.getElementById("dropDown");
    var overlay = document.getElementById("overlay");

    if (dropdown.classList.contains("active")) {
      dropdown.classList.remove("active");
    } else {
      dropdown.classList.add("active");
      overlay.classList.add("active");
    }
  };

  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var dropdown = document.getElementById("dropDown");
    var overlay = document.getElementById("overlay");
    dropdown.classList.remove("active");
    overlay.classList.remove("active");
  });

  var overlayClose = function overlayClose(e) {
    var dropdown = document.getElementById("dropDown");

    if (e.target.classList.contains("active")) {
      e.target.classList.remove("active");
      dropdown.classList.remove("active");
    }
  };

  return __jsx("nav", {
    className: "navMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx("div", {
    className: "navMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    onClick: overlayClose,
    className: "",
    id: "overlay",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("div", {
    className: "navLogoDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, __jsx("h2", {
    className: "navLogo",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 40
    },
    __self: this
  }, "Broughton"), __jsx("h2", {
    className: "navLogoSecond",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, "Detailing")))), __jsx("div", {
    tabIndex: "0",
    className: "navLinksDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("a", {
    className: "navLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 50
    },
    __self: this
  }, __jsx("a", {
    className: "navLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
    },
    __self: this
  }, "Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("a", {
    className: "navLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "Work")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    className: "navLink",
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, __jsx("a", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "Contact"))), __jsx("div", {
    tabIndex: "0",
    onClick: handleMenuOpen,
    className: "burgerMenuDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx(_logos_menusvg__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: "burgerMenu",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  })), __jsx("div", {
    tabIndex: "0",
    id: "dropDown",
    className: "navDropDown",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("ul", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/about",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "About")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, "Services")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/work",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, "Work")), __jsx(next_link__WEBPACK_IMPORTED_MODULE_1___default.a, {
    href: "/contact",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("li", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Contact"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Navbar);

/***/ })

})
//# sourceMappingURL=index.js.c6ea0d3cf1eef73d08b3.hot-update.js.map