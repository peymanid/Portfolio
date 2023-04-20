/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"ModeContext\": () => (/* binding */ ModeContext),\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/styles/globals.css */ \"./styles/globals.css\");\n/* harmony import */ var _styles_globals_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_styles_globals_css__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/bs */ \"react-icons/bs\");\n/* harmony import */ var react_icons_bs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/io5 */ \"react-icons/io5\");\n/* harmony import */ var react_icons_io5__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__);\n\n\n\n\n\nconst ModeContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_2__.createContext)();\nfunction App({ Component , pageProps  }) {\n    const [ToggleMode, setToggleMode] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(true);\n    const [ToggleContact, setToggleContact] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    const [ToggleSide, setToggleSide] = (0,react__WEBPACK_IMPORTED_MODULE_2__.useState)(false);\n    (0,react__WEBPACK_IMPORTED_MODULE_2__.useEffect)(()=>{\n        if (ToggleMode) document.documentElement.classList.add(\"dark\");\n        else document.documentElement.classList.remove(\"dark\");\n    }, [\n        ToggleMode\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(ModeContext.Provider, {\n        value: {\n            ToggleMode,\n            setToggleMode,\n            ToggleContact,\n            setToggleContact,\n            ToggleSide,\n            setToggleSide\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                ...pageProps\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xavie\\\\OneDrive\\\\Desktop\\\\Web Dev\\\\PeymanPortfolio\\\\Portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 28,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: `bg-[#842cdd] transition-all rounded-[50px] flex justify-center items-center h-[50px] w-[50px] z-[10] fixed bottom-[5%] left-[2%] ml-2`,\n                children: ToggleMode ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_io5__WEBPACK_IMPORTED_MODULE_4__.IoSunnyOutline, {\n                    size: 30,\n                    className: \"cursor-pointer text-white\",\n                    onClick: ()=>setToggleMode(false)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xavie\\\\OneDrive\\\\Desktop\\\\Web Dev\\\\PeymanPortfolio\\\\Portfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 31,\n                    columnNumber: 11\n                }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_icons_bs__WEBPACK_IMPORTED_MODULE_3__.BsFillMoonStarsFill, {\n                    size: 30,\n                    className: \"cursor-pointer fill-black\",\n                    onClick: ()=>setToggleMode(true)\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\xavie\\\\OneDrive\\\\Desktop\\\\Web Dev\\\\PeymanPortfolio\\\\Portfolio\\\\pages\\\\_app.js\",\n                    lineNumber: 37,\n                    columnNumber: 11\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\xavie\\\\OneDrive\\\\Desktop\\\\Web Dev\\\\PeymanPortfolio\\\\Portfolio\\\\pages\\\\_app.js\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\xavie\\\\OneDrive\\\\Desktop\\\\Web Dev\\\\PeymanPortfolio\\\\Portfolio\\\\pages\\\\_app.js\",\n        lineNumber: 18,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEI7QUFDNkI7QUFDTjtBQUNKO0FBRTFDLE1BQU1LLDRCQUFjSCxvREFBYUEsR0FBRztBQUM1QixTQUFTSSxJQUFJLEVBQUVDLFVBQVMsRUFBRUMsVUFBUyxFQUFFLEVBQUU7SUFDcEQsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdWLCtDQUFRQSxDQUFDLElBQUk7SUFDakQsTUFBTSxDQUFDVyxlQUFlQyxpQkFBaUIsR0FBR1osK0NBQVFBLENBQUMsS0FBSztJQUN4RCxNQUFNLENBQUNhLFlBQVlDLGNBQWMsR0FBR2QsK0NBQVFBLENBQUMsS0FBSztJQUVsREMsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLFlBQVlNLFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDQyxHQUFHLENBQUM7YUFDbERILFNBQVNDLGVBQWUsQ0FBQ0MsU0FBUyxDQUFDRSxNQUFNLENBQUM7SUFDakQsR0FBRztRQUFDVjtLQUFXO0lBRWYscUJBQ0UsOERBQUNKLFlBQVllLFFBQVE7UUFDbkJDLE9BQU87WUFDTFo7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7WUFDQUM7UUFDRjs7MEJBRUEsOERBQUNQO2dCQUFXLEdBQUdDLFNBQVM7Ozs7OzswQkFDeEIsOERBQUNjO2dCQUFJQyxXQUFXLENBQUMscUlBQXFJLENBQUM7MEJBQ3BKZCwyQkFDQyw4REFBQ0wsMkRBQWNBO29CQUNib0IsTUFBTTtvQkFDTkQsV0FBVTtvQkFDVkUsU0FBUyxJQUFNZixjQUFjLEtBQUs7Ozs7O3lDQUdwQyw4REFBQ1AsK0RBQW1CQTtvQkFDbEJxQixNQUFNO29CQUNORCxXQUFVO29CQUNWRSxTQUFTLElBQU1mLGNBQWMsSUFBSTs7Ozs7d0JBRXBDOzs7Ozs7Ozs7Ozs7QUFJVCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcG9ydGZvbGlvLy4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBcIkAvc3R5bGVzL2dsb2JhbHMuY3NzXCI7XHJcbmltcG9ydCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QsIGNyZWF0ZUNvbnRleHQgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IHsgQnNGaWxsTW9vblN0YXJzRmlsbCB9IGZyb20gXCJyZWFjdC1pY29ucy9ic1wiO1xyXG5pbXBvcnQgeyBJb1N1bm55T3V0bGluZSB9IGZyb20gXCJyZWFjdC1pY29ucy9pbzVcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBNb2RlQ29udGV4dCA9IGNyZWF0ZUNvbnRleHQoKTtcclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIGNvbnN0IFtUb2dnbGVNb2RlLCBzZXRUb2dnbGVNb2RlXSA9IHVzZVN0YXRlKHRydWUpO1xyXG4gIGNvbnN0IFtUb2dnbGVDb250YWN0LCBzZXRUb2dnbGVDb250YWN0XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBbVG9nZ2xlU2lkZSwgc2V0VG9nZ2xlU2lkZV0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBpZiAoVG9nZ2xlTW9kZSkgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkYXJrXCIpO1xyXG4gICAgZWxzZSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImRhcmtcIik7XHJcbiAgfSwgW1RvZ2dsZU1vZGVdKTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxNb2RlQ29udGV4dC5Qcm92aWRlclxyXG4gICAgICB2YWx1ZT17e1xyXG4gICAgICAgIFRvZ2dsZU1vZGUsXHJcbiAgICAgICAgc2V0VG9nZ2xlTW9kZSxcclxuICAgICAgICBUb2dnbGVDb250YWN0LFxyXG4gICAgICAgIHNldFRvZ2dsZUNvbnRhY3QsXHJcbiAgICAgICAgVG9nZ2xlU2lkZSxcclxuICAgICAgICBzZXRUb2dnbGVTaWRlLFxyXG4gICAgICB9fVxyXG4gICAgPlxyXG4gICAgICA8Q29tcG9uZW50IHsuLi5wYWdlUHJvcHN9IC8+XHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgYmctWyM4NDJjZGRdIHRyYW5zaXRpb24tYWxsIHJvdW5kZWQtWzUwcHhdIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyIGgtWzUwcHhdIHctWzUwcHhdIHotWzEwXSBmaXhlZCBib3R0b20tWzUlXSBsZWZ0LVsyJV0gbWwtMmB9PlxyXG4gICAgICAgIHtUb2dnbGVNb2RlID8gKFxyXG4gICAgICAgICAgPElvU3VubnlPdXRsaW5lXHJcbiAgICAgICAgICAgIHNpemU9ezMwfVxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjdXJzb3ItcG9pbnRlciB0ZXh0LXdoaXRlXCJcclxuICAgICAgICAgICAgb25DbGljaz17KCkgPT4gc2V0VG9nZ2xlTW9kZShmYWxzZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICkgOiAoXHJcbiAgICAgICAgICA8QnNGaWxsTW9vblN0YXJzRmlsbFxyXG4gICAgICAgICAgICBzaXplPXszMH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY3Vyc29yLXBvaW50ZXIgZmlsbC1ibGFja1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldFRvZ2dsZU1vZGUodHJ1ZSl9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9Nb2RlQ29udGV4dC5Qcm92aWRlcj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsImNyZWF0ZUNvbnRleHQiLCJCc0ZpbGxNb29uU3RhcnNGaWxsIiwiSW9TdW5ueU91dGxpbmUiLCJNb2RlQ29udGV4dCIsIkFwcCIsIkNvbXBvbmVudCIsInBhZ2VQcm9wcyIsIlRvZ2dsZU1vZGUiLCJzZXRUb2dnbGVNb2RlIiwiVG9nZ2xlQ29udGFjdCIsInNldFRvZ2dsZUNvbnRhY3QiLCJUb2dnbGVTaWRlIiwic2V0VG9nZ2xlU2lkZSIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwiUHJvdmlkZXIiLCJ2YWx1ZSIsImRpdiIsImNsYXNzTmFtZSIsInNpemUiLCJvbkNsaWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/globals.css":
/*!****************************!*\
  !*** ./styles/globals.css ***!
  \****************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react-icons/bs":
/*!*********************************!*\
  !*** external "react-icons/bs" ***!
  \*********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/bs");

/***/ }),

/***/ "react-icons/io5":
/*!**********************************!*\
  !*** external "react-icons/io5" ***!
  \**********************************/
/***/ ((module) => {

"use strict";
module.exports = require("react-icons/io5");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();