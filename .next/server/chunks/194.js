exports.id = 194;
exports.ids = [194];
exports.modules = {

/***/ 9856:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23));
Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 3380, 23))

/***/ }),

/***/ 6849:
/***/ ((__unused_webpack_module, __unused_webpack_exports, __webpack_require__) => {

Promise.resolve(/* import() eager */).then(__webpack_require__.t.bind(__webpack_require__, 954, 23))

/***/ }),

/***/ 6976:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ RootLayout),
  metadata: () => (/* binding */ metadata)
});

// EXTERNAL MODULE: external "next/dist/compiled/react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(6786);
// EXTERNAL MODULE: ./node_modules/next/font/google/target.css?{"path":"app\\layout.tsx","import":"Inter","arguments":[{"subsets":["latin"]}],"variableName":"inter"}
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_ = __webpack_require__(2411);
var target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default = /*#__PURE__*/__webpack_require__.n(target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(5124);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: ./node_modules/next/dist/compiled/react/react.shared-subset.js
var react_shared_subset = __webpack_require__(2947);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(4178);
var image_default = /*#__PURE__*/__webpack_require__.n(next_image);
;// CONCATENATED MODULE: ./components/Navbar.tsx




const Navbar = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("nav", {
        className: "border-gray-200 bg-gray-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                    href: "/",
                    className: "flex items-center w-8 md:w-10",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                            className: "rounded-full  mr-3",
                            src: "/images/avatar.png",
                            width: 48,
                            height: 48,
                            alt: "Ognjen Stankovic",
                            priority: true
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "self-center text-md md:text-xl font-semibold whitespace-nowrap text-white",
                            children: "Ognjen Stanković"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("button", {
                    "data-collapse-toggle": "navbar-default",
                    type: "button",
                    className: "inline-flex items-center p-2 w-10 h-10 justify-center text-sm rounded-lg md:hidden   focus:outline-none focus:ring-2  text-gray-400 hover:bg-gray-700 focus:ring-gray-600",
                    "aria-controls": "navbar-default",
                    "aria-expanded": "false",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx("span", {
                            className: "sr-only",
                            children: "Open main menu"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx("svg", {
                            className: "w-5 h-5",
                            "aria-hidden": "true",
                            xmlns: "http://www.w3.org/2000/svg",
                            fill: "none",
                            viewBox: "0 0 17 14",
                            children: /*#__PURE__*/ jsx_runtime_.jsx("path", {
                                stroke: "currentColor",
                                "stroke-linecap": "round",
                                "stroke-linejoin": "round",
                                "stroke-width": "2",
                                d: "M1 1h15M1 7h15M1 13h15"
                            })
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("div", {
                    className: "hidden w-full md:block md:w-auto",
                    id: "navbar-default",
                    children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                        className: "font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg md:flex-row md:space-x-8 md:mt-0 bg-gray-800 md:bg-gray-900",
                        children: [
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "blog",
                                    className: "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent",
                                    children: "Blog"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "sponsorship",
                                    className: "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent",
                                    children: "Sponsorship"
                                })
                            }),
                            /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                    href: "about",
                                    className: "block py-2 pl-3 pr-4 rounded md:border-0 md:p-0 text-white md:hover:text-gray-500 hover:bg-gray-700 hover:text-white md:hover:bg-transparent",
                                    children: "About"
                                })
                            })
                        ]
                    })
                })
            ]
        })
    });
};
/* harmony default export */ const components_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/Footer.tsx




const Footer = ()=>{
    return /*#__PURE__*/ jsx_runtime_.jsx("footer", {
        className: "shadow pt-8 bg-gray-900",
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
            className: "w-full max-w-screen-xl mx-auto p-4 md:py-8",
            children: [
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("div", {
                    className: "sm:flex sm:items-center sm:justify-between",
                    children: [
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)((link_default()), {
                            href: "/",
                            className: "flex items-center mb-4 sm:mb-0",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx((image_default()), {
                                    src: "/images/avatar.png",
                                    className: "h-8 mr-3",
                                    height: 32,
                                    width: 32,
                                    alt: "Flowbite Logo"
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("span", {
                                    className: "self-center text-xl font-semibold whitespace-nowrap text-white",
                                    children: "Ognjen Stanković"
                                })
                            ]
                        }),
                        /*#__PURE__*/ (0,jsx_runtime_.jsxs)("ul", {
                            className: "flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 text-gray-400",
                            children: [
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "mr-4 hover:underline md:mr-6",
                                        children: "Blog"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "mr-4 hover:underline md:mr-6",
                                        children: "Sponsorship"
                                    })
                                }),
                                /*#__PURE__*/ jsx_runtime_.jsx("li", {
                                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                        href: "#",
                                        className: "mr-4 hover:underline md:mr-6",
                                        children: "About"
                                    })
                                })
                            ]
                        })
                    ]
                }),
                /*#__PURE__*/ jsx_runtime_.jsx("hr", {
                    className: "my-6 sm:mx-auto border-gray-700 lg:my-8"
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)("span", {
                    className: "block text-sm sm:text-center text-gray-400",
                    children: [
                        "\xa9 2023 ",
                        /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                            href: "/",
                            className: "hover:underline",
                            children: "Ognjen Stankovic"
                        }),
                        ". All Rights Reserved."
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const components_Footer = (Footer);

// EXTERNAL MODULE: ./app/globals.css
var globals = __webpack_require__(7272);
;// CONCATENATED MODULE: ./app/layout.tsx





const metadata = {
    title: "Ognjen Stanković | New Tech Blog!",
    description: "Covering every topic of the tech world!",
    icons: {
        icon: "favicon.ico"
    }
};
function RootLayout({ children }) {
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)("html", {
        lang: "en",
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx("head", {
                children: /*#__PURE__*/ jsx_runtime_.jsx("script", {
                    src: "https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"
                })
            }),
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)("body", {
                className: (target_path_app_layout_tsx_import_Inter_arguments_subsets_latin_variableName_inter_default()).className,
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Navbar, {}),
                    children,
                    /*#__PURE__*/ jsx_runtime_.jsx(components_Footer, {})
                ]
            })
        ]
    });
}


/***/ }),

/***/ 6061:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ NotFound)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6786);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5124);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(2947);



function NotFound() {
    return /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("section", {
        className: "py-24 bg-gray-900",
        children: /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
            className: "py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6",
            children: /*#__PURE__*/ (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", {
                className: "mx-auto max-w-screen-sm text-center",
                children: [
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
                        className: "mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-white",
                        children: "404"
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-4 text-3xl tracking-tight font-bold md:text-4xl text-white",
                        children: "Something's missing."
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("p", {
                        className: "mb-4 text-lg font-light  text-gray-400",
                        children: "Sorry, we can't find that page. You'll find lots to explore on the home page. "
                    }),
                    /*#__PURE__*/ react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx((next_link__WEBPACK_IMPORTED_MODULE_1___default()), {
                        href: "/",
                        className: "inline-flex text-white bg-gray-800 hover:bg_dark_blue   focus:ring-4 focus:outline-none font-medium rounded-lg    text-sm px-5 py-2.5 text-center focus:ring-primary-900 my-4",
                        children: "Back to Homepage"
                    })
                ]
            })
        })
    });
}


/***/ }),

/***/ 7481:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(85);
/* harmony import */ var next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__);
  

  /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ((props) => {
    const imageData = {"type":"image/x-icon","sizes":"64x64"}
    const imageUrl = (0,next_dist_lib_metadata_get_metadata_route__WEBPACK_IMPORTED_MODULE_0__.fillMetadataSegment)(".", props.params, "favicon.ico")

    return [{
      ...imageData,
      url: imageUrl + "",
    }]
  });

/***/ }),

/***/ 7272:
/***/ (() => {



/***/ })

};
;