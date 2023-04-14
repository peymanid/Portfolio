"use strict";
exports.id = 824;
exports.ids = [824];
exports.modules = {

/***/ 824:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_Header)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(675);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(689);
// EXTERNAL MODULE: ./pages/_app.js
var _app = __webpack_require__(4);
// EXTERNAL MODULE: external "react-icons/bs"
var bs_ = __webpack_require__(567);
// EXTERNAL MODULE: external "react-icons/io5"
var io5_ = __webpack_require__(989);
;// CONCATENATED MODULE: ./public/Space-Illustration.png
/* harmony default export */ const Space_Illustration = ({"src":"/_next/static/media/Space-Illustration.de16caa7.png","height":2048,"width":2048,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAIAAABLbSncAAAA00lEQVR42gHIADf/ACEWJwAAAHB2eZ+AfmdXVh4NGAAAAAATKAAAAABph5DDvsSac39rZ4IQACWGeXWmem8AEwsuY2WLTlqMOSRsiACkbB+RyK+RfTY9AAAQEBY4UGWZvYk+lWYsl8Ovn4lvggAASABWAG14Y7FYbJ1eAGvTvM++xtNUM9dOFnwAhiBzvU2wcyeACQBQ4bjC0nDcvT3mchR7AAAAAG47eW5ImkYAe81on91knJUpfkYRRgAgDSMBABUAACM2FDlBACgAACQAAAAABw1uP0HtsyZYwAAAAABJRU5ErkJggg==","blurWidth":8,"blurHeight":8});
;// CONCATENATED MODULE: ./pages/Header.jsx







const Header = ({ children  })=>{
    const { ToggleContact  } = (0,external_react_.useContext)(_app.ModeContext);
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
        className: `about-container ${ToggleContact && "transition-activate"} flex h-[88vh] items-center pt-[10vh]`,
        "data-about": true,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "text-white w-[50%] h-full p-10 overflow-hidden",
                children: children
            }),
            /*#__PURE__*/ jsx_runtime_.jsx("div", {
                className: "w-[50%] h-full",
                children: /*#__PURE__*/ jsx_runtime_.jsx("figure", {
                    className: "w-[80%] ml-auto h-full relative astronaut-img rounded-l-[40px]",
                    children: /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                        alt: "hero-image",
                        src: Space_Illustration,
                        fill: true,
                        className: "rounded-l-[40px]"
                    })
                })
            })
        ]
    });
};
/* harmony default export */ const pages_Header = (Header);


/***/ })

};
;