webpackHotUpdate_N_E("pages/index",{

/***/ "./src/contexts/ChallengesContext.tsx":
/*!********************************************!*\
  !*** ./src/contexts/ChallengesContext.tsx ***!
  \********************************************/
/*! exports provided: ChallengesContext, ChallengesProvider */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesContext\", function() { return ChallengesContext; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ChallengesProvider\", function() { return ChallengesProvider; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _home_devchicala_Documentos_meus_projectos_ReactJS_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties */ \"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! js-cookie */ \"./node_modules/js-cookie/src/js.cookie.js\");\n/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _challenges_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../challenges.json */ \"./challenges.json\");\nvar _challenges_json__WEBPACK_IMPORTED_MODULE_4___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../challenges.json */ \"./challenges.json\", 1);\n/* harmony import */ var _components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/LevelUpModal */ \"./src/components/LevelUpModal.tsx\");\n\n\n\nvar _jsxFileName = \"/home/devchicala/Documentos/meus projectos/ReactJS/moveit-next/src/contexts/ChallengesContext.tsx\",\n    _s = $RefreshSig$();\n\n\n\n\n\nvar ChallengesContext = /*#__PURE__*/Object(react__WEBPACK_IMPORTED_MODULE_2__[\"createContext\"])({});\nfunction ChallengesProvider(_ref) {\n  _s();\n\n  var _rest$level, _rest$currentExperien, _rest$challengesCompl;\n\n  var children = _ref.children,\n      rest = Object(_home_devchicala_Documentos_meus_projectos_ReactJS_moveit_next_node_modules_babel_runtime_helpers_esm_objectWithoutProperties__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(_ref, [\"children\"]);\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$level = rest.level) !== null && _rest$level !== void 0 ? _rest$level : 1),\n      level = _useState[0],\n      setLevel = _useState[1];\n\n  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$currentExperien = rest.currentExperience) !== null && _rest$currentExperien !== void 0 ? _rest$currentExperien : 0),\n      currentExperience = _useState2[0],\n      setcurrentExperience = _useState2[1];\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])((_rest$challengesCompl = rest.challengesCompleted) !== null && _rest$challengesCompl !== void 0 ? _rest$challengesCompl : 0),\n      challengesCompleted = _useState3[0],\n      setchallengesCompleted = _useState3[1];\n\n  var _useState4 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(null),\n      activeChallenge = _useState4[0],\n      setactiveChallenge = _useState4[1];\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      isLevelUpModalOpen = _useState5[0],\n      setisLevelUpModalOpen = _useState5[1];\n\n  var experienceToNextLevel = Math.pow((level + 1) * 4, 2);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    Notification.requestPermission();\n  }, []);\n  Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useEffect\"])(function () {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', String(level));\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', String(currentExperience));\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', String(challengesCompleted));\n  }, [level, currentExperience, challengesCompleted]);\n\n  function levelUp() {\n    setLevel(level + 1);\n    setisLevelUpModalOpen(true);\n  }\n\n  function closeLevelUpModal() {\n    setisLevelUpModalOpen(false);\n  }\n\n  function resetCookie() {\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('level', '0');\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('currentExperience', '0');\n    js_cookie__WEBPACK_IMPORTED_MODULE_3___default.a.set('challengesCompleted', '0');\n  }\n\n  function startNewChallenge() {\n    var randonChallengeIndex = Math.floor(Math.random() * _challenges_json__WEBPACK_IMPORTED_MODULE_4__.length);\n    var challenge = _challenges_json__WEBPACK_IMPORTED_MODULE_4__[randonChallengeIndex];\n    setactiveChallenge(challenge);\n    new Audio('/notification.mp3').play();\n\n    if (Notification.permission == 'granted') {\n      new Notification('Novo desafio!!!', {\n        body: \"Valendo \".concat(challenge.amount, \"xp!\")\n      });\n    }\n  }\n\n  function resetChallenge() {\n    setactiveChallenge(null);\n  }\n\n  function completeChallenge() {\n    if (!activeChallenge) {\n      return;\n    }\n\n    var amount = activeChallenge.amount;\n    var finalExperience = currentExperience + amount;\n\n    if (finalExperience >= experienceToNextLevel) {\n      finalExperience = finalExperience - experienceToNextLevel;\n      levelUp();\n    }\n\n    setcurrentExperience(finalExperience);\n    setactiveChallenge(null);\n    setchallengesCompleted(challengesCompleted + 1);\n  }\n\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(ChallengesContext.Provider, {\n    value: {\n      level: level,\n      currentExperience: currentExperience,\n      challengesCompleted: challengesCompleted,\n      experienceToNextLevel: experienceToNextLevel,\n      levelUp: levelUp,\n      startNewChallenge: startNewChallenge,\n      activeChallenge: activeChallenge,\n      resetChallenge: resetChallenge,\n      completeChallenge: completeChallenge,\n      closeLevelUpModal: closeLevelUpModal\n    },\n    children: [children, isLevelUpModalOpen && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_LevelUpModal__WEBPACK_IMPORTED_MODULE_5__[\"LevelUpModal\"], {}, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 126,\n      columnNumber: 31\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 111,\n    columnNumber: 5\n  }, this);\n}\n\n_s(ChallengesProvider, \"B60ep7ed2zjPnJZxFzJ0j+gwQ/U=\");\n\n_c = ChallengesProvider;\n\nvar _c;\n\n$RefreshReg$(_c, \"ChallengesProvider\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnRleHRzL0NoYWxsZW5nZXNDb250ZXh0LnRzeD9lYjI4Il0sIm5hbWVzIjpbIkNoYWxsZW5nZXNDb250ZXh0IiwiY3JlYXRlQ29udGV4dCIsIkNoYWxsZW5nZXNQcm92aWRlciIsImNoaWxkcmVuIiwicmVzdCIsInVzZVN0YXRlIiwibGV2ZWwiLCJzZXRMZXZlbCIsImN1cnJlbnRFeHBlcmllbmNlIiwic2V0Y3VycmVudEV4cGVyaWVuY2UiLCJjaGFsbGVuZ2VzQ29tcGxldGVkIiwic2V0Y2hhbGxlbmdlc0NvbXBsZXRlZCIsImFjdGl2ZUNoYWxsZW5nZSIsInNldGFjdGl2ZUNoYWxsZW5nZSIsImlzTGV2ZWxVcE1vZGFsT3BlbiIsInNldGlzTGV2ZWxVcE1vZGFsT3BlbiIsImV4cGVyaWVuY2VUb05leHRMZXZlbCIsIk1hdGgiLCJwb3ciLCJ1c2VFZmZlY3QiLCJOb3RpZmljYXRpb24iLCJyZXF1ZXN0UGVybWlzc2lvbiIsIkNvb2tpZSIsInNldCIsIlN0cmluZyIsImxldmVsVXAiLCJjbG9zZUxldmVsVXBNb2RhbCIsInJlc2V0Q29va2llIiwic3RhcnROZXdDaGFsbGVuZ2UiLCJyYW5kb25DaGFsbGVuZ2VJbmRleCIsImZsb29yIiwicmFuZG9tIiwiY2hhbGxlbmdlcyIsImxlbmd0aCIsImNoYWxsZW5nZSIsIkF1ZGlvIiwicGxheSIsInBlcm1pc3Npb24iLCJib2R5IiwiYW1vdW50IiwicmVzZXRDaGFsbGVuZ2UiLCJjb21wbGV0ZUNoYWxsZW5nZSIsImZpbmFsRXhwZXJpZW5jZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBNEJPLElBQU1BLGlCQUFpQixnQkFBR0MsMkRBQWEsQ0FBQyxFQUFELENBQXZDO0FBRUEsU0FBU0Msa0JBQVQsT0FHc0I7QUFBQTs7QUFBQTs7QUFBQSxNQUYzQkMsUUFFMkIsUUFGM0JBLFFBRTJCO0FBQUEsTUFEeEJDLElBQ3dC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LFFBQUlHLGVBQWUsSUFBSTFCLHFCQUF2QixFQUE4QztBQUM1QzBCLHFCQUFlLEdBQUdBLGVBQWUsR0FBRzFCLHFCQUFwQztBQUNBUyxhQUFPO0FBQ1I7O0FBRURoQix3QkFBb0IsQ0FBQ2lDLGVBQUQsQ0FBcEI7QUFDQTdCLHNCQUFrQixDQUFDLElBQUQsQ0FBbEI7QUFDQUYsMEJBQXNCLENBQUNELG1CQUFtQixHQUFHLENBQXZCLENBQXRCO0FBQ0Q7O0FBRUQsc0JBQ0UscUVBQUMsaUJBQUQsQ0FBbUIsUUFBbkI7QUFDRSxTQUFLLEVBQUU7QUFDTEosV0FBSyxFQUFMQSxLQURLO0FBRUxFLHVCQUFpQixFQUFqQkEsaUJBRks7QUFHTEUseUJBQW1CLEVBQW5CQSxtQkFISztBQUlMTSwyQkFBcUIsRUFBckJBLHFCQUpLO0FBS0xTLGFBQU8sRUFBUEEsT0FMSztBQU1MRyx1QkFBaUIsRUFBakJBLGlCQU5LO0FBT0xoQixxQkFBZSxFQUFmQSxlQVBLO0FBUUw0QixvQkFBYyxFQUFkQSxjQVJLO0FBU0xDLHVCQUFpQixFQUFqQkEsaUJBVEs7QUFVTGYsdUJBQWlCLEVBQWpCQTtBQVZLLEtBRFQ7QUFBQSxlQWNHdkIsUUFkSCxFQWVJVyxrQkFBa0IsaUJBQUkscUVBQUMscUVBQUQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxZQWYxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFERjtBQW1CRDs7R0EvRmVaLGtCOztLQUFBQSxrQiIsImZpbGUiOiIuL3NyYy9jb250ZXh0cy9DaGFsbGVuZ2VzQ29udGV4dC50c3guanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVDb250ZXh0LCBSZWFjdE5vZGUsIHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBDb29raWUgZnJvbSAnanMtY29va2llJ1xuaW1wb3J0IGNoYWxsZW5nZXMgZnJvbSAnLi4vLi4vY2hhbGxlbmdlcy5qc29uJ1xuaW1wb3J0IHsgTGV2ZWxVcE1vZGFsIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTGV2ZWxVcE1vZGFsXCI7XG5cbmludGVyZmFjZSBjaGFsbGVuZ2Uge1xuICAgIHR5cGU6ICdib2R5J3wnZXllJyxcbiAgICBkZXNjcmlwdGlvbjogc3RyaW5nO1xuICAgIGFtb3VudDogbnVtYmVyO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc0NvbnRleHREYXRhIHtcbiAgbGV2ZWw6IG51bWJlcjtcbiAgY3VycmVudEV4cGVyaWVuY2U6IG51bWJlcjtcbiAgY2hhbGxlbmdlc0NvbXBsZXRlZDogbnVtYmVyO1xuICBleHBlcmllbmNlVG9OZXh0TGV2ZWw6IG51bWJlcjtcbiAgYWN0aXZlQ2hhbGxlbmdlOiBjaGFsbGVuZ2U7XG4gIHJlc2V0Q2hhbGxlbmdlOiAoKSA9PiB2b2lkO1xuICBsZXZlbFVwOiAoKSA9PiB2b2lkO1xuICBzdGFydE5ld0NoYWxsZW5nZTogKCkgPT4gdm9pZDtcbiAgY29tcGxldGVDaGFsbGVuZ2U6ICgpID0+IHZvaWQ7XG4gIGNsb3NlTGV2ZWxVcE1vZGFsOiAoKSA9PiB2b2lkO1xufVxuXG5pbnRlcmZhY2UgQ2hhbGxlbmdlc1Byb3ZpZGVyUHJvcHMge1xuICBjaGlsZHJlbjogUmVhY3ROb2RlO1xuICBsZXZlbDogbnVtYmVyO1xuICBjdXJyZW50RXhwZXJpZW5jZTogbnVtYmVyO1xuICBjaGFsbGVuZ2VzQ29tcGxldGVkOiBudW1iZXI7IFxufVxuXG5leHBvcnQgY29uc3QgQ2hhbGxlbmdlc0NvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9IGFzIENoYWxsZW5nZXNDb250ZXh0RGF0YSk7XG5cbmV4cG9ydCBmdW5jdGlvbiBDaGFsbGVuZ2VzUHJvdmlkZXIoeyBcbiAgY2hpbGRyZW4sXG4gIC4uLnJlc3RcbiB9OiBDaGFsbGVuZ2VzUHJvdmlkZXJQcm9wcykge1xuICBjb25zdCBbbGV2ZWwsIHNldExldmVsXSA9IHVzZVN0YXRlKHJlc3QubGV2ZWwgPz8gMSk7XG4gIGNvbnN0IFtjdXJyZW50RXhwZXJpZW5jZSwgc2V0Y3VycmVudEV4cGVyaWVuY2VdID0gdXNlU3RhdGUocmVzdC5jdXJyZW50RXhwZXJpZW5jZSA/PyAwKTtcbiAgY29uc3QgW2NoYWxsZW5nZXNDb21wbGV0ZWQsIHNldGNoYWxsZW5nZXNDb21wbGV0ZWRdID0gdXNlU3RhdGUocmVzdC5jaGFsbGVuZ2VzQ29tcGxldGVkID8/IDApO1xuXG4gIGNvbnN0IFthY3RpdmVDaGFsbGVuZ2UsIHNldGFjdGl2ZUNoYWxsZW5nZV0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzTGV2ZWxVcE1vZGFsT3Blbiwgc2V0aXNMZXZlbFVwTW9kYWxPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKVxuXG4gIGNvbnN0IGV4cGVyaWVuY2VUb05leHRMZXZlbCA9IE1hdGgucG93KChsZXZlbCArIDEpICogNCwyKVxuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgTm90aWZpY2F0aW9uLnJlcXVlc3RQZXJtaXNzaW9uKCk7XG4gIH0sIFtdKVxuICBcbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBDb29raWUuc2V0KCdsZXZlbCcsIFN0cmluZyhsZXZlbCkpO1xuICAgIENvb2tpZS5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywgU3RyaW5nKGN1cnJlbnRFeHBlcmllbmNlKSk7XG4gICAgQ29va2llLnNldCgnY2hhbGxlbmdlc0NvbXBsZXRlZCcsIFN0cmluZyhjaGFsbGVuZ2VzQ29tcGxldGVkKSk7XG4gIH0sIFtsZXZlbCwgY3VycmVudEV4cGVyaWVuY2UsIGNoYWxsZW5nZXNDb21wbGV0ZWRdKVxuICBcbiAgZnVuY3Rpb24gbGV2ZWxVcCgpIHtcbiAgICBzZXRMZXZlbChsZXZlbCArIDEpO1xuICAgIHNldGlzTGV2ZWxVcE1vZGFsT3Blbih0cnVlKTtcbiAgfVxuXG4gIGZ1bmN0aW9uIGNsb3NlTGV2ZWxVcE1vZGFsKCkge1xuICAgIHNldGlzTGV2ZWxVcE1vZGFsT3BlbihmYWxzZSlcbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q29va2llKCkge1xuICAgIENvb2tpZS5zZXQoJ2xldmVsJywnMCcpO1xuICAgIENvb2tpZS5zZXQoJ2N1cnJlbnRFeHBlcmllbmNlJywnMCcpO1xuICAgIENvb2tpZS5zZXQoJ2NoYWxsZW5nZXNDb21wbGV0ZWQnLCAnMCcpO1xuICB9XG5cbiAgZnVuY3Rpb24gc3RhcnROZXdDaGFsbGVuZ2UoKSB7XG4gICAgY29uc3QgcmFuZG9uQ2hhbGxlbmdlSW5kZXggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBjaGFsbGVuZ2VzLmxlbmd0aCk7XG4gICAgY29uc3QgY2hhbGxlbmdlID0gY2hhbGxlbmdlc1tyYW5kb25DaGFsbGVuZ2VJbmRleF07XG5cbiAgICBzZXRhY3RpdmVDaGFsbGVuZ2UoY2hhbGxlbmdlKTtcblxuICAgIG5ldyBBdWRpbygnL25vdGlmaWNhdGlvbi5tcDMnKS5wbGF5KCk7XG5cbiAgICBpZiAoTm90aWZpY2F0aW9uLnBlcm1pc3Npb24gPT0gJ2dyYW50ZWQnKSB7XG4gICAgICBuZXcgTm90aWZpY2F0aW9uKCdOb3ZvIGRlc2FmaW8hISEnLCB7XG4gICAgICAgIGJvZHk6IGBWYWxlbmRvICR7Y2hhbGxlbmdlLmFtb3VudH14cCFgXG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlc2V0Q2hhbGxlbmdlKCkge1xuICAgIHNldGFjdGl2ZUNoYWxsZW5nZShudWxsKVxuICB9XG5cbiAgZnVuY3Rpb24gY29tcGxldGVDaGFsbGVuZ2UoKSB7XG4gICAgaWYoIWFjdGl2ZUNoYWxsZW5nZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IHsgYW1vdW50ICB9ID0gYWN0aXZlQ2hhbGxlbmdlO1xuXG4gICAgbGV0IGZpbmFsRXhwZXJpZW5jZSA9IGN1cnJlbnRFeHBlcmllbmNlICsgYW1vdW50O1xuXG4gICAgaWYgKGZpbmFsRXhwZXJpZW5jZSA+PSBleHBlcmllbmNlVG9OZXh0TGV2ZWwpIHtcbiAgICAgIGZpbmFsRXhwZXJpZW5jZSA9IGZpbmFsRXhwZXJpZW5jZSAtIGV4cGVyaWVuY2VUb05leHRMZXZlbDtcbiAgICAgIGxldmVsVXAoKTtcbiAgICB9XG5cbiAgICBzZXRjdXJyZW50RXhwZXJpZW5jZShmaW5hbEV4cGVyaWVuY2UpO1xuICAgIHNldGFjdGl2ZUNoYWxsZW5nZShudWxsKTtcbiAgICBzZXRjaGFsbGVuZ2VzQ29tcGxldGVkKGNoYWxsZW5nZXNDb21wbGV0ZWQgKyAxKVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXJcbiAgICAgIHZhbHVlPXt7XG4gICAgICAgIGxldmVsLFxuICAgICAgICBjdXJyZW50RXhwZXJpZW5jZSxcbiAgICAgICAgY2hhbGxlbmdlc0NvbXBsZXRlZCxcbiAgICAgICAgZXhwZXJpZW5jZVRvTmV4dExldmVsLFxuICAgICAgICBsZXZlbFVwLFxuICAgICAgICBzdGFydE5ld0NoYWxsZW5nZSxcbiAgICAgICAgYWN0aXZlQ2hhbGxlbmdlLFxuICAgICAgICByZXNldENoYWxsZW5nZSxcbiAgICAgICAgY29tcGxldGVDaGFsbGVuZ2UsXG4gICAgICAgIGNsb3NlTGV2ZWxVcE1vZGFsLFxuICAgICAgfX1cbiAgICA+XG4gICAgICB7Y2hpbGRyZW59XG4gICAgICB7IGlzTGV2ZWxVcE1vZGFsT3BlbiAmJiA8TGV2ZWxVcE1vZGFsIC8+fVxuICAgIDwvQ2hhbGxlbmdlc0NvbnRleHQuUHJvdmlkZXI+XG4gICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/contexts/ChallengesContext.tsx\n");

/***/ })

})