webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_static_css_contact_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../public/static/css/contact.scss */ "./public/static/css/contact.scss");
/* harmony import */ var _public_static_css_contact_scss__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_contact_scss__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./comps/navbar */ "./pages/comps/navbar.js");
/* harmony import */ var _comps_logos_facebook__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./comps/logos/facebook */ "./pages/comps/logos/facebook.js");
/* harmony import */ var _comps_logos_instagram__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./comps/logos/instagram */ "./pages/comps/logos/instagram.js");
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/contact.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;

 // import { useAppContext } from "./comps/context.js";






var Contact = function Contact() {
  // const { statusUrl } = useAppContext();
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      formData = _useState[0],
      setFormData = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      email = _useState2[0],
      setEmail = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      name = _useState3[0],
      setName = _useState3[1];

  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      make = _useState4[0],
      setMake = _useState4[1];

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      model = _useState5[0],
      setModel = _useState5[1];

  var _useState6 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      condition = _useState6[0],
      setCondition = _useState6[1];

  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      detail = _useState7[0],
      setDetail = _useState7[1];

  var handleChange = function handleChange(e) {
    setFormData(e.target.value);
  };

  var handleEmailChange = function handleEmailChange(e) {
    setEmail(e.target.value);
  };

  var handleNameChange = function handleNameChange(e) {
    setName(e.target.value);
  };

  var handleMakeChange = function handleMakeChange(e) {
    setMake(e.target.value);
  };

  var handleModelChange = function handleModelChange(e) {
    setModel(e.target.value);
  };

  var handleConditionChange = function handleConditionChange(e) {
    setCondition(e.target.value);
  };

  var handleDetailChange = function handleDetailChange(e) {
    setDetail(e.target.value);
  };

  var handleQuoteSubmit = function handleQuoteSubmit(e) {
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://www.broughtondetailing/api/addquote", {
      email: email,
      name: name,
      make: make,
      model: model,
      condition: condition,
      detail: detail
    }).then(function (response) {
      return console.log(response);
    })["catch"](function (err) {
      return console.log(err);
    });
  };

  var handleFormInput = function handleFormInput(e) {
    var input = document.getElementById("emailInput");
    var thankYou = document.getElementById("thankYou");
    axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://www.broughtondetailing.com/api/addclient", {
      email: formData
    }).then(function (response) {
      return console.log(response);
    })["catch"](function (err) {
      return console.log(err);
    });

    if (formData !== "") {
      thankYou.style.display = "block";
    }

    input.value = "";
    setTimeout(function () {
      thankYou.style.display = "none";
    }, 5000);
    e.preventDefault();
  };

  return __jsx("div", {
    itemScope: true,
    itemType: "http://schema.org/ContactPage",
    className: "contactMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_3__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("div", {
    className: "contactMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 89
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 90
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Contact"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    className: "letsTalkDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx("h2", {
    className: "letsTalkHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, "Lets Talk!"), __jsx("p", {
    itemprop: "creator",
    className: "contactPara name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Jacob Broughton"), __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Detailing Inquiry",
    className: "emailLink",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 102
    },
    __self: this
  }, __jsx("p", {
    className: "email contactPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, "BroughtonDetailing@gmail.com")), __jsx("a", {
    href: "tel:+7047708371",
    className: "contactPara phone",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "704-770-8371"), __jsx("div", {
    className: "socialDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 113
    },
    __self: this
  }, __jsx("a", {
    href: "https://facebook.com/broughtondetailing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 114
    },
    __self: this
  }, __jsx(_comps_logos_facebook__WEBPACK_IMPORTED_MODULE_4__["default"], {
    className: "socialIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 115
    },
    __self: this
  })), __jsx("a", {
    href: "https://instagram.com/broughtondetailing",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 117
    },
    __self: this
  }, __jsx(_comps_logos_instagram__WEBPACK_IMPORTED_MODULE_5__["default"], {
    className: "socialIcon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 118
    },
    __self: this
  })))), __jsx("div", {
    className: "quoteDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 122
    },
    __self: this
  }, __jsx("h2", {
    className: "quoteHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, "Get a quote!"), __jsx("form", {
    onSubmit: handleQuoteSubmit,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, __jsx("input", {
    placeholder: "Email",
    onChange: handleEmailChange,
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 125
    },
    __self: this
  }), __jsx("input", {
    placeholder: "First Name",
    onChange: handleNameChange,
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 126
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Make",
    onChange: handleMakeChange,
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Model",
    onChange: handleModelChange,
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }), __jsx("input", {
    placeholder: "Your Car's Condition",
    onChange: handleConditionChange,
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 129
    },
    __self: this
  }), __jsx("textarea", {
    placeholder: "What kind of detail are you looking for?",
    onChange: handleDetailChange,
    type: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 130
    },
    __self: this
  }), __jsx("input", {
    type: "submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 135
    },
    __self: this
  }))), __jsx("div", {
    className: "signupDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx("h2", {
    className: "signupHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Sign Up For Deals!"), __jsx("form", {
    onSubmit: handleFormInput,
    className: "signupForm",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx("div", {
    className: "signupInputParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 143
    },
    __self: this
  }, __jsx("input", {
    className: "signupInput",
    id: "emailInput",
    type: "email",
    onChange: handleChange,
    placeholder: "Your Email (I won't spam)",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  })), __jsx("input", {
    className: "signupSubmit",
    type: "submit",
    placeholder: "Submit",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  })), __jsx("h4", {
    id: "thankYou",
    className: "thankYou",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }, "Thank You!"))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);

/***/ })

})
//# sourceMappingURL=contact.js.0b632df5599617ef6dc3.hot-update.js.map