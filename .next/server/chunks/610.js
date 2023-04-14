"use strict";
exports.id = 610;
exports.ids = [610];
exports.modules = {

/***/ 610:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_animated_3d_card__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(284);
/* harmony import */ var react_animated_3d_card__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_animated_3d_card__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _public_stack_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(789);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(675);
/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(689);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);





const Stack = ()=>{
    const observer = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    const stackSection = (0,react__WEBPACK_IMPORTED_MODULE_4__.useRef)();
    (0,react__WEBPACK_IMPORTED_MODULE_4__.useEffect)(()=>{
        observer.current = new IntersectionObserver((elements)=>{
            elements.forEach((element)=>{
                if (element.isIntersecting) stackSection.current.classList.add("active");
                else stackSection.current.classList.remove("active");
            });
        }, {
            threshold: 0.5
        });
        if (stackSection) observer.current.observe(stackSection.current);
    }, []);
    return /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
        className: "stack-section w-[97%] min-h-screen flex flex-wrap items-center justify-start",
        "data-stack": true,
        ref: stackSection,
        children: [
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[65%] flex flex-wrap items-center justify-center",
                children: _public_stack_json__WEBPACK_IMPORTED_MODULE_2__.slice(0, 8).map((item, index)=>{
                    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                        className: "w-[20%] mr-5 my-5",
                        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((react_animated_3d_card__WEBPACK_IMPORTED_MODULE_1___default()), {
                            style: {
                                width: "100%",
                                backgrgoundColor: "black",
                                height: "200px",
                                cursor: "pointer",
                                backgroundColor: "transparent"
                            },
                            children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                                className: "w-full h-full flex items-center justify-center",
                                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("figure", {
                                    className: "w-[100px] relative",
                                    children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_image__WEBPACK_IMPORTED_MODULE_3___default()), {
                                        alt: "language-img",
                                        src: item.img,
                                        width: 100,
                                        height: 100
                                    })
                                })
                            })
                        })
                    }, index);
                })
            }),
            /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
                className: "w-[35%]",
                children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                    className: "stack-title dark:text-white text-black uppercase text-7xl text-center",
                    children: "Stack"
                })
            })
        ]
    });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Stack);


/***/ })

};
;