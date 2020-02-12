webpackHotUpdate("static/development/pages/services.js",{

/***/ "./pages/services.js":
/*!***************************!*\
  !*** ./pages/services.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _public_static_css_services_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../public/static/css/services.scss */ "./public/static/css/services.scss");
/* harmony import */ var _public_static_css_services_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_public_static_css_services_scss__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _comps_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./comps/navbar */ "./pages/comps/navbar.js");
var _jsxFileName = "/Users/JacobBroughton/coding/work/broughton-detailing-next/pages/services.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;




var Services = function Services() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(),
      service = _useState[0],
      setService = _useState[1];

  var handlePackageClick = function handlePackageClick(e) {
    var packages = document.getElementsByClassName("serviceList");
    var packagesArr = [].slice.call(packages);
    var clickedPackage = e.target.id + "Desc";

    for (var i = 0; i < packagesArr.length; i++) {
      if (packagesArr[i].id === clickedPackage) {
        packagesArr[i].classList.add("active");
        packagesArr[i].style.display = "block";
      } else {
        packagesArr[i].style.display = "none";
      }
    }
  }; // const closeNavMenu = () => {
  //   let dropdown = document.getElementById("dropDown");
  //   let overlay = document.getElementById("overlay");
  //   dropdown.classList.remove("active");
  //   overlay.classList.remove("active");
  // };
  // useEffect(() => {
  //   closeNavMenu();
  // });


  return __jsx("div", {
    className: "servicesMother",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, __jsx(_comps_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }), __jsx("div", {
    className: "servicesMain",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx("section", {
    className: "leftSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx("div", {
    className: "headDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, __jsx("h1", {
    className: "head",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "Services"))), __jsx("section", {
    className: "rightSect",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("div", {
    className: "rightSectChild",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, __jsx("div", {
    className: "servicesGrid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  }, __jsx("div", {
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 45
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "basics",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 46
    },
    __self: this
  }, "The Basics"), __jsx("div", {
    className: "serviceListBasics",
    id: "basicsList",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 53
    },
    __self: this
  }, __jsx("li", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 54
    },
    __self: this
  }, "- Hand Washed"), __jsx("li", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, "- Windows Inside & Out"), __jsx("li", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "- Door Jams"), __jsx("li", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, "- Clean Plastics"), __jsx("li", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "- Dust"), __jsx("li", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }, "- Vacuum"), __jsx("div", {
    className: "priceTimeParent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("p", {
    className: "priceRubric",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, "Cars ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "/"), " SUVs ", __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "/"), " Minivans"), __jsx("div", {
    className: "priceTimeDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h3", {
    className: "packagePrice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "$45 / $55 / $65"), __jsx("h3", {
    className: "packageTime",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, "1 - 1.5 hours"))))), __jsx("div", {
    className: "premiumHeadDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, __jsx("h2", {
    className: "premiumHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }, "Premium Services")), __jsx("div", {
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "interior",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "Interior Conditioning"), __jsx("div", {
    className: "serviceList",
    id: "interiorDesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("p", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "Plastics and other vinyl-like interior surfaces are very susceptable to damage from the sun over time, as well as from natural body oils. ", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 88
    },
    __self: this
  }), "This sun damage mainly causes the color to fade. So rather than the deep color that was there from the factory, the plastics begin to look a bit develop. Protecting and conditioning these surfaces is vital to keeping them looking fantastic."), __jsx("p", {
    className: "questionPara",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "Any questions? Click ", __jsx("a", {
    href: "mailto:broughtondetailing@gmail.com?subject=Services",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "here"), "and ask away!"))), __jsx("div", {
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 98
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "wheels",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 99
    },
    __self: this
  }, "Wheel Service"), __jsx("div", {
    className: "serviceList",
    id: "wheelsDesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }, __jsx("p", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 107
    },
    __self: this
  }, "The first glance that people give to cars is usually straight to the wheels.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }), "Over time, wheels tend to gather lots of brake dust from continuous brake pad wear while driving. This break dust builds up on the wheel and can actually embed itself into the wheel, causing permanant damage if not taken care of. Not to mention, clean wheels just look fantastic. Along with getting that brake dust taken care of, applying a fresh coat of tire shine, cleaning the wheel wells, and inner barrel of the wheel are also taken care of."))), __jsx("div", {
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 123
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "leather",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 124
    },
    __self: this
  }, "Leather Treatment"), __jsx("div", {
    className: "serviceList",
    id: "leatherDesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 131
    },
    __self: this
  }, __jsx("p", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, "Leather is important to maintain. Over time, if cared for correctly, it develops a wonderful finish called a patina, or a 'sheen'. This adds a bit of character to the leather.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 136
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 137
    },
    __self: this
  }), "This is caused by the sun, dirt particles, and your natural body oils. If cared for improperly, leather starts to crack and actually lose some of it's color."))), __jsx("div", {
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 144
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "carpets",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }, "Carpet Cleaning"), __jsx("div", {
    className: "serviceList",
    id: "carpetsDesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, __jsx("p", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 153
    },
    __self: this
  }, "Carpets are often overlooked because we're always stepping about on them, but the cleanliness of carpets actually effect the experience quite a lot. Past the obvious visual appearance, they tend to hold the majority of whatever smell seems to be locked in the car.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 159
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }), "Also, a renewed plush and deep colored carpet is a great way to really restore the feel of your interior cabin."))), __jsx("div", {
    className: "serviceDiv",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 167
    },
    __self: this
  }, __jsx("div", {
    onClick: handlePackageClick,
    id: "paint",
    className: "serviceHead",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 168
    },
    __self: this
  }, "Paint Revitalization"), __jsx("div", {
    className: "serviceList",
    id: "paintDesc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 175
    },
    __self: this
  }, __jsx("p", {
    className: "serviceListItem",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 176
    },
    __self: this
  }, "Paint can make all the difference visually.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 178
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }), "Firstly, (if paint clearly contains contaminants), a clay bar will be used to safely extract the contaminants that are embeded into the paint. Secondly, after the paint is smooth to the touch and lacking any grit feeling, wax will be applied. Wax creates a hydrophobic effect, making water bead off the surface rather than sheeting off.", __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 186
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 187
    },
    __self: this
  }), "Along with the beading, wax provides an incredible gloss to the paint, as well as very smooth to the touch (I recommend avoiding contact though, without any lubrication that is.)."), __jsx("p", {
    className: "ctaP",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }), __jsx("br", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 193
    },
    __self: this
  }), __jsx("p", {
    className: "serviceNotice",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  }, __jsx("strong", {
    className: "italic",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 195
    },
    __self: this
  }, "Notice:"), " Paint correction is not offered in this service."))))))));
};

/* harmony default export */ __webpack_exports__["default"] = (Services);

/***/ })

})
//# sourceMappingURL=services.js.3917a4931ed6fa498240.hot-update.js.map