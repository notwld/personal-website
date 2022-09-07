"use strict";
(() => {
var exports = {};
exports.id = 888;
exports.ids = [888,285];
exports.modules = {

/***/ 8064:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ _app)
});

// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(997);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(6689);
// EXTERNAL MODULE: external "@chakra-ui/react"
var react_ = __webpack_require__(8930);
// EXTERNAL MODULE: external "@emotion/react"
var external_emotion_react_ = __webpack_require__(2805);
;// CONCATENATED MODULE: ./components/layouts/Fonts.js


const Fonts = ()=>/*#__PURE__*/ jsx_runtime_.jsx(external_emotion_react_.Global, {
        styles: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@500&family=M+PLUS+Rounded+1c&display=swap');`
    });
/* harmony default export */ const layouts_Fonts = (Fonts);

;// CONCATENATED MODULE: external "next/head"
const head_namespaceObject = require("next/head");
var head_default = /*#__PURE__*/__webpack_require__.n(head_namespaceObject);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
var link_default = /*#__PURE__*/__webpack_require__.n(next_link);
// EXTERNAL MODULE: external "@chakra-ui/icons"
var icons_ = __webpack_require__(4513);
;// CONCATENATED MODULE: ./components/layouts/ThemeToggleButton.js



// import { AnimatePresence, motion } from "framer-motion";
const ThemeToggleButton = ()=>{
    const { toggleColorMode  } = (0,react_.useColorMode)();
    return(// <AnimatePresence mode={"wait"} initial={false}>
    //     <motion.div style={{
    //         display: 'inline-block'
    //     }}
    //         key={useColorModeValue('light', 'dark')}
    //         initial={{ y:-20,opacity: 0 }}
    //         animate={{ y:0,opacity: 1 }}
    //         exit={{ y:-20,opacity: 0 }}
    //         transition={{ duration: 0.2 }}
    //         >
    /*#__PURE__*/ jsx_runtime_.jsx(react_.IconButton, {
        "aria-label": "Toggle Theme",
        colorScheme: (0,react_.useColorModeValue)("orange", "purple"),
        icon: (0,react_.useColorModeValue)(/*#__PURE__*/ jsx_runtime_.jsx(icons_.SunIcon, {}), /*#__PURE__*/ jsx_runtime_.jsx(icons_.MoonIcon, {})),
        onClick: toggleColorMode
    }));
};
/* harmony default export */ const layouts_ThemeToggleButton = (ThemeToggleButton);

;// CONCATENATED MODULE: ./components/layouts/Navbar.js





const LinkItems = ({ href , path , children  })=>{
    const active = path === href;
    const inactiveColor = (0,react_.useColorModeValue)("gray.600", "whiteAlpha.900");
    return /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
        href: href,
        passHref: true,
        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Link, {
            p: 2,
            bg: active ? "glassTeal" : undefined,
            color: active ? "#202023" : inactiveColor,
            _hover: {
                textDecoration: "none",
                color: "teal.500"
            },
            borderRadius: 7,
            children: children
        })
    });
};
const Navbar = (props)=>{
    const { path  } = props;
    return /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
        as: "nav",
        position: "fixed",
        bg: (0,react_.useColorModeValue)("#ffffff40", "#20202c"),
        style: {
            backdropFilter: "blur(10px)"
        },
        width: "100%",
        zIndex: 1,
        ...props,
        children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Container, {
            maxW: "container.md",
            display: "flex",
            p: 2,
            wrap: "wrap",
            align: "center",
            justifyContent: "space-between",
            children: [
                /*#__PURE__*/ jsx_runtime_.jsx(react_.Flex, {
                    align: "center",
                    mr: 5,
                    children: /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                        href: "/",
                        passHref: true,
                        children: /*#__PURE__*/ jsx_runtime_.jsx(react_.Heading, {
                            as: "h1",
                            size: "lg",
                            letterSpacing: "tighter",
                            cursor: "pointer",
                            children: "blurryface"
                        })
                    })
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Stack, {
                    direction: {
                        base: "column",
                        md: "row"
                    },
                    display: {
                        base: "none",
                        md: "flex"
                    },
                    width: {
                        base: "full",
                        md: "auto"
                    },
                    alignItems: "center",
                    flexGrow: 1,
                    mt: {
                        base: 4,
                        nmd: 0
                    },
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItems, {
                            href: "/works",
                            path: path,
                            children: "Works"
                        }),
                        /*#__PURE__*/ jsx_runtime_.jsx(LinkItems, {
                            href: "/posts",
                            path: path,
                            children: "Posts"
                        })
                    ]
                }),
                /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
                    flex: 1,
                    align: "right",
                    children: [
                        /*#__PURE__*/ jsx_runtime_.jsx(layouts_ThemeToggleButton, {}),
                        /*#__PURE__*/ jsx_runtime_.jsx(react_.Box, {
                            ml: 2,
                            display: {
                                base: "inline-block",
                                md: "none"
                            },
                            children: /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Menu, {
                                children: [
                                    /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuButton, {
                                        as: react_.IconButton,
                                        "aria-label": "Options",
                                        icon: /*#__PURE__*/ jsx_runtime_.jsx(icons_.HamburgerIcon, {}),
                                        variant: "outline"
                                    }),
                                    /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.MenuList, {
                                        children: [
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/works",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Works"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "/posts",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "Posts"
                                                })
                                            }),
                                            /*#__PURE__*/ jsx_runtime_.jsx((link_default()), {
                                                href: "https://www.github.com/blurryface92",
                                                passHref: true,
                                                children: /*#__PURE__*/ jsx_runtime_.jsx(react_.MenuItem, {
                                                    as: react_.Link,
                                                    children: "View Source"
                                                })
                                            })
                                        ]
                                    })
                                ]
                            })
                        })
                    ]
                })
            ]
        })
    });
};
/* harmony default export */ const layouts_Navbar = (Navbar);

;// CONCATENATED MODULE: ./components/layouts/main.js




const Main = ({ children , router  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.Box, {
        as: "main",
        pb: 8,
        children: [
            /*#__PURE__*/ (0,jsx_runtime_.jsxs)((head_default()), {
                children: [
                    /*#__PURE__*/ jsx_runtime_.jsx("meta", {
                        name: "viewport",
                        width: "device-width. initial-scale=1"
                    }),
                    /*#__PURE__*/ jsx_runtime_.jsx("title", {
                        children: "Muhammad Waleed - Homepage"
                    })
                ]
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_Navbar, {
                path: router.asPath
            }),
            /*#__PURE__*/ jsx_runtime_.jsx(react_.Container, {
                maxW: "container.md",
                pt: 14,
                children: children
            })
        ]
    });
};
/* harmony default export */ const main = (Main);

// EXTERNAL MODULE: ./lib/theme.js
var theme = __webpack_require__(7985);
// EXTERNAL MODULE: ./pages/grid-item.js
var grid_item = __webpack_require__(2328);
;// CONCATENATED MODULE: ./pages/_app.js







const Website = ({ Component , pageProps , router  })=>{
    return /*#__PURE__*/ (0,jsx_runtime_.jsxs)(react_.ChakraProvider, {
        theme: theme/* default */.Z,
        children: [
            /*#__PURE__*/ jsx_runtime_.jsx(layouts_Fonts, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(grid_item.GridStyle, {}),
            /*#__PURE__*/ jsx_runtime_.jsx(main, {
                router: router,
                children: /*#__PURE__*/ (0,external_react_.createElement)(Component, {
                    ...pageProps,
                    key: router.route
                })
            })
        ]
    });
};
/* harmony default export */ const _app = (Website);


/***/ }),

/***/ 4513:
/***/ ((module) => {

module.exports = require("@chakra-ui/icons");

/***/ }),

/***/ 8930:
/***/ ((module) => {

module.exports = require("@chakra-ui/react");

/***/ }),

/***/ 429:
/***/ ((module) => {

module.exports = require("@chakra-ui/theme-tools");

/***/ }),

/***/ 2805:
/***/ ((module) => {

module.exports = require("@emotion/react");

/***/ }),

/***/ 3280:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/app-router-context.js");

/***/ }),

/***/ 2796:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head-manager-context.js");

/***/ }),

/***/ 4957:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 4014:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 744:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config-context.js");

/***/ }),

/***/ 5843:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/image-config.js");

/***/ }),

/***/ 8524:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/is-plain-object.js");

/***/ }),

/***/ 8020:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 4406:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/page-path/denormalize-page-path.js");

/***/ }),

/***/ 4964:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 1751:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/add-path-prefix.js");

/***/ }),

/***/ 6220:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/compare-states.js");

/***/ }),

/***/ 299:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-next-pathname-info.js");

/***/ }),

/***/ 3938:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/format-url.js");

/***/ }),

/***/ 9565:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 5789:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/get-next-pathname-info.js");

/***/ }),

/***/ 1428:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 8854:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-path.js");

/***/ }),

/***/ 1292:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 4567:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/path-has-prefix.js");

/***/ }),

/***/ 979:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 3297:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/remove-trailing-slash.js");

/***/ }),

/***/ 6052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/resolve-rewrites.js");

/***/ }),

/***/ 4226:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 5052:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 9232:
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 6689:
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ 997:
/***/ ((module) => {

module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [952,664,675,328,985], () => (__webpack_exec__(8064)));
module.exports = __webpack_exports__;

})();