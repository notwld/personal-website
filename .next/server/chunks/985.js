"use strict";
exports.id = 985;
exports.ids = [985];
exports.modules = {

/***/ 7985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8930);
/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(429);
/* harmony import */ var _chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__);


const styles = {
    global: (props)=>({
            body: {
                bg: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("#F0E7DB", "#202023")(props),
                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("gray.600", "whiteAlpha.900")(props)
            }
        })
};
const components = {
    Heading: {
        variants: {
            "section-title": {
                fontSize: 20,
                textDecoration: "underline",
                textUnderlineOffset: 6,
                textDecorationColor: "#525252",
                textDecorationThickness: 4,
                marginTop: 3,
                marginBottom: 4
            }
        }
    },
    Link: {
        baseProps: (props)=>({
                color: (0,_chakra_ui_theme_tools__WEBPACK_IMPORTED_MODULE_1__.mode)("#3d7aed", "#ff63c3")(props),
                textUnderlineOffset: 3
            })
    }
};
const fonts = {
    heading: "'M PLUS Rounded 1c'"
};
const config = {
    initialColorMode: "dark",
    useSystemColorMode: true
};
const colors = {
    glassTeal: "#88ccca"
};
const theme = (0,_chakra_ui_react__WEBPACK_IMPORTED_MODULE_0__.extendTheme)({
    styles,
    components,
    fonts,
    config,
    colors
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (theme);


/***/ })

};
;