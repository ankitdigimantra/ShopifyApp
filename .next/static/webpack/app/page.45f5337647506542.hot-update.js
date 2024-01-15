"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./src/components/Itemscard.jsx":
/*!**************************************!*\
  !*** ./src/components/Itemscard.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var use_fetch_react_vc__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! use-fetch-react-vc */ \"(app-pages-browser)/./node_modules/use-fetch-react-vc/dist/index.js\");\n/* harmony import */ var use_fetch_react_vc__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(use_fetch_react_vc__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _app_constant__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../app/constant */ \"(app-pages-browser)/./src/app/constant.js\");\n\nvar _s = $RefreshSig$();\n\n\n\nconst ItemsCard = (param)=>{\n    let { setSubtotal } = param;\n    _s();\n    const { data, error, loading } = (0,use_fetch_react_vc__WEBPACK_IMPORTED_MODULE_2__.useFetch)(_app_constant__WEBPACK_IMPORTED_MODULE_3__.apiUrl, _app_constant__WEBPACK_IMPORTED_MODULE_3__.fetchOptions);\n    const myIndex = 1;\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (!error && !loading && data) {\n            let total = 0;\n            data.products.forEach((item)=>{\n                if (item.id <= myIndex + 1) total += item.price;\n            });\n            setSubtotal(total);\n        }\n    }, [\n        error,\n        loading,\n        data,\n        setSubtotal\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"overflow-y-auto\",\n        children: !loading && !error && data && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            className: \"grid grid-rows-1\",\n            children: data === null || data === void 0 ? void 0 : data.products.map((item, index)=>{\n                if (index > myIndex) return;\n                return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: \"grid grid-cols-2\",\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                                src: item.thumbnail,\n                                width: 400,\n                                height: 400,\n                                alt: item.title,\n                                style: {\n                                    width: \"50%\",\n                                    height: \"90%\"\n                                },\n                                className: \"h-1 cursor-pointer top-3 bottom-3\"\n                            }, void 0, false, {\n                                fileName: \"/home/dml-dhruva/Desktop/ankit/ShopifyApp/src/components/Itemscard.jsx\",\n                                lineNumber: 28,\n                                columnNumber: 19\n                            }, undefined)\n                        }, void 0, false, {\n                            fileName: \"/home/dml-dhruva/Desktop/ankit/ShopifyApp/src/components/Itemscard.jsx\",\n                            lineNumber: 27,\n                            columnNumber: 17\n                        }, undefined),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                            className: \"text-smm\",\n                            children: [\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: item.title\n                                }, void 0, false, {\n                                    fileName: \"/home/dml-dhruva/Desktop/ankit/ShopifyApp/src/components/Itemscard.jsx\",\n                                    lineNumber: 38,\n                                    columnNumber: 19\n                                }, undefined),\n                                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                    children: [\n                                        \"Price: \",\n                                        item.price\n                                    ]\n                                }, void 0, true, {\n                                    fileName: \"/home/dml-dhruva/Desktop/ankit/ShopifyApp/src/components/Itemscard.jsx\",\n                                    lineNumber: 39,\n                                    columnNumber: 19\n                                }, undefined)\n                            ]\n                        }, void 0, true, {\n                            fileName: \"/home/dml-dhruva/Desktop/ankit/ShopifyApp/src/components/Itemscard.jsx\",\n                            lineNumber: 37,\n                            columnNumber: 17\n                        }, undefined)\n                    ]\n                }, item.id, true, {\n                    fileName: \"/home/dml-dhruva/Desktop/ankit/ShopifyApp/src/components/Itemscard.jsx\",\n                    lineNumber: 26,\n                    columnNumber: 17\n                }, undefined);\n            })\n        }, void 0, false, {\n            fileName: \"/home/dml-dhruva/Desktop/ankit/ShopifyApp/src/components/Itemscard.jsx\",\n            lineNumber: 22,\n            columnNumber: 9\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"/home/dml-dhruva/Desktop/ankit/ShopifyApp/src/components/Itemscard.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(ItemsCard, \"kO6JFiZRgoquWzsdjojnrQL4Jmc=\", false, function() {\n    return [\n        use_fetch_react_vc__WEBPACK_IMPORTED_MODULE_2__.useFetch\n    ];\n});\n_c = ItemsCard;\n/* harmony default export */ __webpack_exports__[\"default\"] = (ItemsCard);\nvar _c;\n$RefreshReg$(_c, \"ItemsCard\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0l0ZW1zY2FyZC5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWtDO0FBQ1k7QUFDUztBQUV2RCxNQUFNSSxZQUFZO1FBQUMsRUFBRUMsV0FBVyxFQUFFOztJQUNoQyxNQUFNLEVBQUVDLElBQUksRUFBRUMsS0FBSyxFQUFFQyxPQUFPLEVBQUUsR0FBR1AsNERBQVFBLENBQUNDLGlEQUFNQSxFQUFFQyx1REFBWUE7SUFDOUQsTUFBTU0sVUFBVTtJQUVoQlQsZ0RBQVNBLENBQUM7UUFDUixJQUFJLENBQUNPLFNBQVMsQ0FBQ0MsV0FBV0YsTUFBTTtZQUM5QixJQUFJSSxRQUFRO1lBQ1pKLEtBQUtLLFFBQVEsQ0FBQ0MsT0FBTyxDQUFDLENBQUNDO2dCQUNyQixJQUFJQSxLQUFLQyxFQUFFLElBQUlMLFVBQVUsR0FBR0MsU0FBU0csS0FBS0UsS0FBSztZQUNqRDtZQUNBVixZQUFZSztRQUNkO0lBQ0YsR0FBRztRQUFDSDtRQUFPQztRQUFTRjtRQUFNRDtLQUFZO0lBRXRDLHFCQUNFLDhEQUFDVztRQUFJQyxXQUFVO2tCQUNaLENBQUNULFdBQVcsQ0FBQ0QsU0FBU0Qsc0JBQ3JCLDhEQUFDVTtZQUFJQyxXQUFVO3NCQUNaWCxpQkFBQUEsMkJBQUFBLEtBQU1LLFFBQVEsQ0FBQ08sR0FBRyxDQUFDLENBQUNMLE1BQU1NO2dCQUN6QixJQUFJQSxRQUFRVixTQUFTO2dCQUNyQixxQkFDSSw4REFBQ087b0JBQUlDLFdBQVU7O3NDQUNmLDhEQUFDRDtzQ0FDQyw0RUFBQ0k7Z0NBQ0NDLEtBQUtSLEtBQUtTLFNBQVM7Z0NBQ25CQyxPQUFPO2dDQUNQQyxRQUFRO2dDQUNSQyxLQUFLWixLQUFLYSxLQUFLO2dDQUNmQyxPQUFPO29DQUFFSixPQUFPO29DQUFPQyxRQUFRO2dDQUFNO2dDQUNyQ1AsV0FBVTs7Ozs7Ozs7Ozs7c0NBR2QsOERBQUNEOzRCQUFJQyxXQUFVOzs4Q0FDYiw4REFBQ1c7OENBQUdmLEtBQUthLEtBQUs7Ozs7Ozs4Q0FDZCw4REFBQ0U7O3dDQUFFO3dDQUFRZixLQUFLRSxLQUFLOzs7Ozs7Ozs7Ozs7OzttQkFiZ0JGLEtBQUtDLEVBQUU7Ozs7O1lBaUJwRDs7Ozs7Ozs7Ozs7QUFNVjtHQTVDTVY7O1FBQzZCSCx3REFBUUE7OztLQURyQ0c7QUE4Q04sK0RBQWVBLFNBQVNBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvSXRlbXNjYXJkLmpzeD83NGIwIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgdXNlRmV0Y2ggfSBmcm9tIFwidXNlLWZldGNoLXJlYWN0LXZjXCI7XG5pbXBvcnQgeyBhcGlVcmwsIGZldGNoT3B0aW9ucyB9IGZyb20gXCIuLi9hcHAvY29uc3RhbnRcIjtcblxuY29uc3QgSXRlbXNDYXJkID0gKHsgc2V0U3VidG90YWwgfSkgPT4ge1xuICBjb25zdCB7IGRhdGEsIGVycm9yLCBsb2FkaW5nIH0gPSB1c2VGZXRjaChhcGlVcmwsIGZldGNoT3B0aW9ucyk7XG4gIGNvbnN0IG15SW5kZXggPSAxO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKCFlcnJvciAmJiAhbG9hZGluZyAmJiBkYXRhKSB7XG4gICAgICBsZXQgdG90YWwgPSAwO1xuICAgICAgZGF0YS5wcm9kdWN0cy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGlmIChpdGVtLmlkIDw9IG15SW5kZXggKyAxKSB0b3RhbCArPSBpdGVtLnByaWNlO1xuICAgICAgfSk7XG4gICAgICBzZXRTdWJ0b3RhbCh0b3RhbCk7XG4gICAgfVxuICB9LCBbZXJyb3IsIGxvYWRpbmcsIGRhdGEsIHNldFN1YnRvdGFsXSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJmbG93LXktYXV0b1wiID5cbiAgICAgIHshbG9hZGluZyAmJiAhZXJyb3IgJiYgZGF0YSAmJiAoXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLXJvd3MtMVwiPlxuICAgICAgICAgIHtkYXRhPy5wcm9kdWN0cy5tYXAoKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAoaW5kZXggPiBteUluZGV4KSByZXR1cm47XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMlwiIGtleT17aXRlbS5pZH0+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtpdGVtLnRodW1ibmFpbH1cbiAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezQwMH1cbiAgICAgICAgICAgICAgICAgICAgaGVpZ2h0PXs0MDB9XG4gICAgICAgICAgICAgICAgICAgIGFsdD17aXRlbS50aXRsZX1cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiNTAlXCIsIGhlaWdodDogXCI5MCVcIiB9fVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoLTEgY3Vyc29yLXBvaW50ZXIgdG9wLTMgYm90dG9tLTNcIlxuICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRleHQtc21tXCI+XG4gICAgICAgICAgICAgICAgICA8cD57aXRlbS50aXRsZX08L3A+XG4gICAgICAgICAgICAgICAgICA8cD5QcmljZToge2l0ZW0ucHJpY2V9PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cblxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSXRlbXNDYXJkOyJdLCJuYW1lcyI6WyJ1c2VFZmZlY3QiLCJ1c2VGZXRjaCIsImFwaVVybCIsImZldGNoT3B0aW9ucyIsIkl0ZW1zQ2FyZCIsInNldFN1YnRvdGFsIiwiZGF0YSIsImVycm9yIiwibG9hZGluZyIsIm15SW5kZXgiLCJ0b3RhbCIsInByb2R1Y3RzIiwiZm9yRWFjaCIsIml0ZW0iLCJpZCIsInByaWNlIiwiZGl2IiwiY2xhc3NOYW1lIiwibWFwIiwiaW5kZXgiLCJpbWciLCJzcmMiLCJ0aHVtYm5haWwiLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInRpdGxlIiwic3R5bGUiLCJwIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/Itemscard.jsx\n"));

/***/ })

});