/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/index.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/index.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// Imports\nvar ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\nexports = ___CSS_LOADER_API_IMPORT___(false);\n// Module\nexports.push([module.i, \"body {\\r\\n    margin: 0;\\r\\n    background-color: black;\\r\\n}\\r\\n\\r\\n#root {\\r\\n    padding: 3rem;\\r\\n    text-align: center\\r\\n}\\r\\n\\r\\n#root h1 {\\r\\n    font-family: 'Press Start 2P', Consolas, monospace;\\r\\n    color: white;\\r\\n}\\r\\n\\r\\n#root canvas {\\r\\n    display: block;\\r\\n    margin: 0 auto;\\r\\n    \\r\\n    \\r\\n}\\r\\n\\r\\n\", \"\"]);\n// Exports\nmodule.exports = exports;\n\n\n//# sourceURL=webpack:///./src/css/index.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\n// css base code, injected by the css-loader\n// eslint-disable-next-line func-names\nmodule.exports = function (useSourceMap) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = cssWithMappingToString(item, useSourceMap);\n\n      if (item[2]) {\n        return \"@media \".concat(item[2], \" {\").concat(content, \"}\");\n      }\n\n      return content;\n    }).join('');\n  }; // import a list of modules into the list\n  // eslint-disable-next-line func-names\n\n\n  list.i = function (modules, mediaQuery) {\n    if (typeof modules === 'string') {\n      // eslint-disable-next-line no-param-reassign\n      modules = [[null, modules, '']];\n    }\n\n    for (var i = 0; i < modules.length; i++) {\n      var item = [].concat(modules[i]);\n\n      if (mediaQuery) {\n        if (!item[2]) {\n          item[2] = mediaQuery;\n        } else {\n          item[2] = \"\".concat(mediaQuery, \" and \").concat(item[2]);\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\nfunction cssWithMappingToString(item, useSourceMap) {\n  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring\n\n  var cssMapping = item[3];\n\n  if (!cssMapping) {\n    return content;\n  }\n\n  if (useSourceMap && typeof btoa === 'function') {\n    var sourceMapping = toComment(cssMapping);\n    var sourceURLs = cssMapping.sources.map(function (source) {\n      return \"/*# sourceURL=\".concat(cssMapping.sourceRoot).concat(source, \" */\");\n    });\n    return [content].concat(sourceURLs).concat([sourceMapping]).join('\\n');\n  }\n\n  return [content].join('\\n');\n} // Adapted from convert-source-map (MIT)\n\n\nfunction toComment(sourceMap) {\n  // eslint-disable-next-line no-undef\n  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));\n  var data = \"sourceMappingURL=data:application/json;charset=utf-8;base64,\".concat(base64);\n  return \"/*# \".concat(data, \" */\");\n}\n\n//# sourceURL=webpack:///./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar isOldIE = function isOldIE() {\n  var memo;\n  return function memorize() {\n    if (typeof memo === 'undefined') {\n      // Test for IE <= 9 as proposed by Browserhacks\n      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805\n      // Tests for existence of standard globals is to allow style-loader\n      // to operate correctly into non-standard environments\n      // @see https://github.com/webpack-contrib/style-loader/issues/177\n      memo = Boolean(window && document && document.all && !window.atob);\n    }\n\n    return memo;\n  };\n}();\n\nvar getTarget = function getTarget() {\n  var memo = {};\n  return function memorize(target) {\n    if (typeof memo[target] === 'undefined') {\n      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n        try {\n          // This will throw an exception if access to iframe is blocked\n          // due to cross-origin restrictions\n          styleTarget = styleTarget.contentDocument.head;\n        } catch (e) {\n          // istanbul ignore next\n          styleTarget = null;\n        }\n      }\n\n      memo[target] = styleTarget;\n    }\n\n    return memo[target];\n  };\n}();\n\nvar stylesInDom = {};\n\nfunction modulesToDom(moduleId, list, options) {\n  for (var i = 0; i < list.length; i++) {\n    var part = {\n      css: list[i][1],\n      media: list[i][2],\n      sourceMap: list[i][3]\n    };\n\n    if (stylesInDom[moduleId][i]) {\n      stylesInDom[moduleId][i](part);\n    } else {\n      stylesInDom[moduleId].push(addStyle(part, options));\n    }\n  }\n}\n\nfunction insertStyleElement(options) {\n  var style = document.createElement('style');\n  var attributes = options.attributes || {};\n\n  if (typeof attributes.nonce === 'undefined') {\n    var nonce =  true ? __webpack_require__.nc : undefined;\n\n    if (nonce) {\n      attributes.nonce = nonce;\n    }\n  }\n\n  Object.keys(attributes).forEach(function (key) {\n    style.setAttribute(key, attributes[key]);\n  });\n\n  if (typeof options.insert === 'function') {\n    options.insert(style);\n  } else {\n    var target = getTarget(options.insert || 'head');\n\n    if (!target) {\n      throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n    }\n\n    target.appendChild(style);\n  }\n\n  return style;\n}\n\nfunction removeStyleElement(style) {\n  // istanbul ignore if\n  if (style.parentNode === null) {\n    return false;\n  }\n\n  style.parentNode.removeChild(style);\n}\n/* istanbul ignore next  */\n\n\nvar replaceText = function replaceText() {\n  var textStore = [];\n  return function replace(index, replacement) {\n    textStore[index] = replacement;\n    return textStore.filter(Boolean).join('\\n');\n  };\n}();\n\nfunction applyToSingletonTag(style, index, remove, obj) {\n  var css = remove ? '' : obj.css; // For old IE\n\n  /* istanbul ignore if  */\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = replaceText(index, css);\n  } else {\n    var cssNode = document.createTextNode(css);\n    var childNodes = style.childNodes;\n\n    if (childNodes[index]) {\n      style.removeChild(childNodes[index]);\n    }\n\n    if (childNodes.length) {\n      style.insertBefore(cssNode, childNodes[index]);\n    } else {\n      style.appendChild(cssNode);\n    }\n  }\n}\n\nfunction applyToTag(style, options, obj) {\n  var css = obj.css;\n  var media = obj.media;\n  var sourceMap = obj.sourceMap;\n\n  if (media) {\n    style.setAttribute('media', media);\n  } else {\n    style.removeAttribute('media');\n  }\n\n  if (sourceMap && btoa) {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  if (style.styleSheet) {\n    style.styleSheet.cssText = css;\n  } else {\n    while (style.firstChild) {\n      style.removeChild(style.firstChild);\n    }\n\n    style.appendChild(document.createTextNode(css));\n  }\n}\n\nvar singleton = null;\nvar singletonCounter = 0;\n\nfunction addStyle(obj, options) {\n  var style;\n  var update;\n  var remove;\n\n  if (options.singleton) {\n    var styleIndex = singletonCounter++;\n    style = singleton || (singleton = insertStyleElement(options));\n    update = applyToSingletonTag.bind(null, style, styleIndex, false);\n    remove = applyToSingletonTag.bind(null, style, styleIndex, true);\n  } else {\n    style = insertStyleElement(options);\n    update = applyToTag.bind(null, style, options);\n\n    remove = function remove() {\n      removeStyleElement(style);\n    };\n  }\n\n  update(obj);\n  return function updateStyle(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {\n        return;\n      }\n\n      update(obj = newObj);\n    } else {\n      remove();\n    }\n  };\n}\n\nmodule.exports = function (moduleId, list, options) {\n  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>\n  // tags it will allow on a page\n\n  if (!options.singleton && typeof options.singleton !== 'boolean') {\n    options.singleton = isOldIE();\n  }\n\n  moduleId = options.base ? moduleId + options.base : moduleId;\n  list = list || [];\n\n  if (!stylesInDom[moduleId]) {\n    stylesInDom[moduleId] = [];\n  }\n\n  modulesToDom(moduleId, list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    if (Object.prototype.toString.call(newList) !== '[object Array]') {\n      return;\n    }\n\n    if (!stylesInDom[moduleId]) {\n      stylesInDom[moduleId] = [];\n    }\n\n    modulesToDom(moduleId, newList, options);\n\n    for (var j = newList.length; j < stylesInDom[moduleId].length; j++) {\n      stylesInDom[moduleId][j]();\n    }\n\n    stylesInDom[moduleId].length = newList.length;\n\n    if (stylesInDom[moduleId].length === 0) {\n      delete stylesInDom[moduleId];\n    }\n  };\n};\n\n//# sourceURL=webpack:///./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./src/controller.js":
/*!***************************!*\
  !*** ./src/controller.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Controller; });\nclass Controller {\n  constructor(game, view) {\n    this.game = game\n    this.view = view\n    this.isPlay = false\n    this.intervalId = null\n\n    document.addEventListener('keydown', this.handleKeyDown.bind(this))\n    document.addEventListener('keyup', this.handleKeyUp.bind(this))\n    this.view.renderStartScreen()\n  }\n\n  update() {\n    this.game.movePieceDown()\n    this.updateView()\n  }\n\n  pause() {\n    this.isPlay = false\n    this.stopTimer()\n    this.updateView()\n  }\n\n  reset() {\n    this.game.reset()\n    this.play()\n  }\n\n  play() {\n    this.isPlay = true\n    this.startTimer()\n    this.updateView()\n  }\n\n  updateView() {\n    const state = this.game.getState()\n    if (state.isGameOver) {\n      this.view.renderEndScreen(state)\n    } else if (!this.isPlay) {\n      this.view.renderPauseScreen()\n    } else {\n      this.view.renderMainScreen(state)\n    }\n  }\n\n  startTimer() {\n    const speed = 1000 - this.game.getState().level * 100\n\n    if (!this.intervalId) {\n      this.intervalId = setInterval(\n        () => {\n          this.update()\n        },\n        speed > 0 ? speed : 100\n      )\n    }\n  }\n\n  stopTimer() {\n    if (this.intervalId) {\n      clearInterval(this.intervalId)\n      this.intervalId = null\n    }\n  }\n\n  handleKeyDown(event) {\n    const state = this.game.getState()\n\n    switch (event.keyCode) {\n      case 13: //ENTER\n        if (state.isGameOver) {\n          this.reset()\n        } else if (this.isPlay) {\n          this.pause()\n        } else {\n          this.play()\n        }\n        break\n      case 37: //LEFT ARROW\n        this.game.movePieceLeft()\n        this.updateView()\n        break\n      case 38: //UP ARROW\n        this.game.rotatePiece()\n        this.updateView()\n        break\n      case 39: //RIGHT ARROW\n        this.game.movePieceRight()\n        this.updateView()\n        break\n      case 40: //DOWN ARROW\n        this.stopTimer()\n        this.game.movePieceDown()\n        this.updateView()\n        break\n    }\n  }\n\n  handleKeyUp(event) {\n    switch (event.keyCode) {\n      case 40: //DOWN ARROW\n        this.startTimer()\n        break\n    }\n  }\n}\n\n\n//# sourceURL=webpack:///./src/controller.js?");

/***/ }),

/***/ "./src/css/index.css":
/*!***************************!*\
  !*** ./src/css/index.css ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var api = __webpack_require__(/*! ../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n            var content = __webpack_require__(/*! !../../node_modules/css-loader/dist/cjs.js!./index.css */ \"./node_modules/css-loader/dist/cjs.js!./src/css/index.css\");\n\n            content = content.__esModule ? content.default : content;\n\n            if (typeof content === 'string') {\n              content = [[module.i, content, '']];\n            }\n\nvar options = {};\n\noptions.insert = \"head\";\noptions.singleton = false;\n\nvar update = api(module.i, content, options);\n\nvar exported = content.locals ? content.locals : {};\n\n\n\nmodule.exports = exported;\n\n//# sourceURL=webpack:///./src/css/index.css?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./css/index.css */ \"./src/css/index.css\");\n/* harmony import */ var _css_index_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_index_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _scripts_game_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./scripts/game.js */ \"./src/scripts/game.js\");\n/* harmony import */ var _view__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./view */ \"./src/view.js\");\n/* harmony import */ var _controller_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./controller.js */ \"./src/controller.js\");\n\r\n\r\n\r\n\r\n\r\nconst root = document.querySelector('#root')\r\n\r\nconst game = new _scripts_game_js__WEBPACK_IMPORTED_MODULE_1__[\"default\"]()\r\nconst view = new _view__WEBPACK_IMPORTED_MODULE_2__[\"default\"](root, 480, 640, 20, 10)\r\nconst controller = new _controller_js__WEBPACK_IMPORTED_MODULE_3__[\"default\"](game, view)\r\n\r\nwindow.game = game\r\nwindow.view = view\r\nwindow.controller = controller\r\n\n\n//# sourceURL=webpack:///./src/index.js?");

/***/ }),

/***/ "./src/scripts/game.js":
/*!*****************************!*\
  !*** ./src/scripts/game.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Game; });\nclass Game {\r\n  constructor() {\r\n    this.score = 0\r\n    this.lines = 0\r\n    this.topOut = false\r\n    this.playfield = this.createPlayfield()\r\n    this.activePiece = this.createPiece()\r\n    this.nextPiece = this.createPiece()\r\n    this.points = {\r\n      '1': 40,\r\n      '2': 100,\r\n      '3': 300,\r\n      '4': 1200,\r\n    }\r\n  }\r\n\r\n  get level() {\r\n    return Math.floor(this.lines * 0.1)\r\n  }\r\n\r\n  getState() {\r\n    const playfield = this.createPlayfield()\r\n    const { y: pieceY, x: pieceX, blocks } = this.activePiece\r\n\r\n    for (let y = 0; y < this.playfield.length; y++) {\r\n      playfield[y] = []\r\n\r\n      for (let x = 0; x < this.playfield[y].length; x++) {\r\n        playfield[y][x] = this.playfield[y][x]\r\n      }\r\n    }\r\n\r\n    for (let y = 0; y < blocks.length; y++) {\r\n      for (let x = 0; x < blocks[y].length; x++) {\r\n        if (blocks[y][x]) {\r\n          playfield[pieceY + y][pieceX + x] = blocks[y][x]\r\n        }\r\n      }\r\n    }\r\n\r\n    return {\r\n      score: this.score,\r\n      level: this.level,\r\n      lines: this.lines,\r\n      nextPiece: this.nextPiece,\r\n      playfield,\r\n      isGameOver: this.topOut,\r\n    }\r\n  }\r\n\r\n  reset() {\r\n    this.score = 0\r\n    this.lines = 0\r\n    this.topOut = false\r\n    this.playfield = this.createPlayfield()\r\n    this.activePiece = this.createPiece()\r\n    this.nextPiece = this.createPiece()\r\n  }\r\n\r\n  createPlayfield() {\r\n    const playfield = []\r\n    for (let y = 0; y < 20; y++) {\r\n      playfield[y] = []\r\n\r\n      for (let x = 0; x < 10; x++) {\r\n        playfield[y][x] = 0\r\n      }\r\n    }\r\n\r\n    return playfield\r\n  }\r\n\r\n  createPiece() {\r\n    const index = Math.floor(Math.random() * 7)\r\n    const type = 'IJLOSTZ'[index]\r\n    const piece = { x: 0, y: 0 }\r\n\r\n    switch (type) {\r\n      case 'I':\r\n        piece.blocks = [\r\n          [0, 0, 0, 0],\r\n          [1, 1, 1, 1],\r\n          [0, 0, 0, 0],\r\n          [0, 0, 0, 0],\r\n        ]\r\n        break\r\n      case 'J':\r\n        piece.blocks = [\r\n          [0, 0, 0],\r\n          [2, 2, 2],\r\n          [0, 0, 2],\r\n        ]\r\n        break\r\n      case 'L':\r\n        piece.blocks = [\r\n          [0, 0, 0],\r\n          [3, 3, 3],\r\n          [3, 0, 0],\r\n        ]\r\n        break\r\n      case 'O':\r\n        piece.blocks = [\r\n          [0, 0, 0, 0],\r\n          [0, 4, 4, 0],\r\n          [0, 4, 4, 0],\r\n          [0, 0, 0, 0],\r\n        ]\r\n        break\r\n      case 'S':\r\n        piece.blocks = [\r\n          [0, 0, 0],\r\n          [0, 5, 5],\r\n          [5, 5, 0],\r\n        ]\r\n        break\r\n      case 'T':\r\n        piece.blocks = [\r\n          [0, 0, 0],\r\n          [6, 6, 6],\r\n          [0, 6, 0],\r\n        ]\r\n        break\r\n      case 'Z':\r\n        piece.blocks = [\r\n          [0, 0, 0],\r\n          [7, 7, 0],\r\n          [0, 7, 7],\r\n        ]\r\n        break\r\n      default:\r\n        throw new Error('I dont know what the error!')\r\n    }\r\n    piece.x = Math.floor((10 - piece.blocks[0].length) / 2)\r\n    piece.y = -1\r\n\r\n    return piece\r\n  }\r\n\r\n  movePieceLeft() {\r\n    this.activePiece.x -= 1\r\n    if (this.hasCollision()) {\r\n      this.activePiece.x += 1\r\n    }\r\n  }\r\n\r\n  movePieceRight() {\r\n    this.activePiece.x += 1\r\n    if (this.hasCollision()) {\r\n      this.activePiece.x -= 1\r\n    }\r\n  }\r\n\r\n  movePieceDown() {\r\n    if (this.topOut) {\r\n      return\r\n    }\r\n    this.activePiece.y += 1\r\n    if (this.hasCollision()) {\r\n      this.activePiece.y -= 1\r\n      this.lockPiece()\r\n      const clearedLines = this.clearLines()\r\n      this.updateScore(clearedLines)\r\n      this.updatePieces()\r\n    }\r\n\r\n    if (this.hasCollision()) {\r\n      this.topOut = true\r\n    }\r\n  }\r\n\r\n  hasCollision() {\r\n    const { y: pieceY, x: pieceX, blocks } = this.activePiece\r\n\r\n    for (let y = 0; y < blocks.length; y++) {\r\n      for (let x = 0; x < blocks[y].length; x++) {\r\n        if (\r\n          blocks[y][x] &&\r\n          (this.playfield[pieceY + y] === undefined ||\r\n            this.playfield[pieceY + y][pieceX + x] === undefined ||\r\n            this.playfield[pieceY + y][pieceX + x])\r\n        ) {\r\n          return true\r\n        }\r\n      }\r\n    }\r\n    return false\r\n  }\r\n\r\n  rotatePiece() {\r\n    this.rotateBlocks()\r\n\r\n    if (this.hasCollision()) {\r\n      this.rotateBlocks(false)\r\n    }\r\n  }\r\n\r\n  rotateBlocks(clockwise = true) {\r\n    const blocks = this.activePiece.blocks\r\n    const length = blocks.length\r\n    const x = Math.floor(length / 2)\r\n    const y = length - 1\r\n\r\n    for (let i = 0; i < x; i++) {\r\n      for (let j = i; j < y - i; j++) {\r\n        const temp = blocks[i][j]\r\n\r\n        if (clockwise) {\r\n          blocks[i][j] = blocks[y - j][i]\r\n          blocks[y - j][i] = blocks[y - i][y - j]\r\n          blocks[y - i][y - j] = blocks[j][y - i]\r\n          blocks[j][y - i] = temp\r\n        } else {\r\n          blocks[i][j] = blocks[j][y - i]\r\n          blocks[j][y - i] = blocks[y - i][y - j]\r\n          blocks[y - i][y - j] = blocks[y - j][i]\r\n          blocks[y - j][i] = temp\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  lockPiece() {\r\n    const { y: pieceY, x: pieceX, blocks } = this.activePiece\r\n\r\n    for (let y = 0; y < blocks.length; y++) {\r\n      for (let x = 0; x < blocks[y].length; x++) {\r\n        if (blocks[y][x]) {\r\n          this.playfield[pieceY + y][pieceX + x] = blocks[y][x]\r\n        }\r\n      }\r\n    }\r\n  }\r\n\r\n  clearLines() {\r\n    const rows = 20\r\n    const columns = 10\r\n    let lines = []\r\n\r\n    for (let y = rows - 1; y >= 0; y--) {\r\n      let numberOfBlocks = 0\r\n\r\n      for (let x = 0; x < columns; x++) {\r\n        if (this.playfield[y][x]) {\r\n          numberOfBlocks += 1\r\n        }\r\n      }\r\n\r\n      if (numberOfBlocks === 0) {\r\n        break\r\n      } else if (numberOfBlocks < columns) {\r\n        continue\r\n      } else if (numberOfBlocks === columns) {\r\n        lines.unshift(y)\r\n      }\r\n    }\r\n\r\n    for (let index of lines) {\r\n      this.playfield.splice(index, 1)\r\n      this.playfield.unshift(new Array(columns).fill(0))\r\n    }\r\n\r\n    return lines.length\r\n  }\r\n\r\n  updateScore(clearedLines) {\r\n    if (clearedLines > 0) {\r\n      this.score += this.points[clearedLines] * (this.level + 1)\r\n      this.lines += clearedLines\r\n      console.log(this.score, this.lines)\r\n    }\r\n  }\r\n\r\n  updatePieces() {\r\n    this.activePiece = this.nextPiece\r\n    this.nextPiece = this.createPiece()\r\n  }\r\n}\r\n\n\n//# sourceURL=webpack:///./src/scripts/game.js?");

/***/ }),

/***/ "./src/view.js":
/*!*********************!*\
  !*** ./src/view.js ***!
  \*********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\n  constructor(element, width, height, rows, columns) {\n    this.colors = {\n      '1': 'cyan',\n      '2': 'blue',\n      '3': 'orange',\n      '4': 'yellow',\n      '5': 'green',\n      '6': 'purple',\n      '7': 'red',\n    }\n    this.element = element\n    this.width = width\n    this.height = height\n\n    this.canvas = document.createElement('canvas')\n    this.canvas.width = this.width\n    this.canvas.height = this.height\n    this.context = this.canvas.getContext('2d')\n\n    this.playfieldBorderWidth = 4\n    this.playfieldX = this.playfieldBorderWidth\n    this.playfieldY = this.playfieldBorderWidth\n    this.playfieldWidth = (this.width * 2) / 3\n    this.playfieldHeight = this.height\n    this.playfieldInnerWidth =\n      this.playfieldWidth - this.playfieldBorderWidth * 2\n    this.playfieldInnerHeight =\n      this.playfieldHeight - this.playfieldBorderWidth * 2\n\n    this.blockWidth = this.playfieldInnerWidth / columns\n    this.blockHeight = this.playfieldInnerHeight / rows\n\n    this.panelX = this.playfieldWidth + 10\n    this.panelY = 0\n    this.panelWidth = this.width / 3\n    this.panelHeight = this.height\n\n    this.element.appendChild(this.canvas)\n  }\n\n  renderMainScreen(state) {\n    this.clearScreen()\n    this.renderPlayfield(state)\n    this.renderPanel(state)\n  }\n\n  clearScreen() {\n    this.context.clearRect(0, 0, this.width, this.height)\n  }\n\n  renderStartScreen() {\n    this.context.fillStyle = 'white'\n    this.context.font = '14px \"Press Start 2P\"'\n    this.context.textAlign = 'center'\n    this.context.textBaseline = 'middle'\n    this.context.fillText(\n      'НАЖАЛА БИСТРО ИНТЕР ШОБЫ ПАИГРАТЬ',\n      this.width / 2,\n      this.height / 2\n    )\n  }\n\n  renderPauseScreen() {\n    this.context.fillStyle = 'rgba(0,0,0,0.75)'\n    this.context.fillRect(0, 0, this.width, this.height)\n\n    this.context.fillStyle = 'white'\n    this.context.font = '14px \"Press Start 2P\"'\n    this.context.textAlign = 'center'\n    this.context.textBaseline = 'middle'\n    this.context.fillText(\n      'НАЖАЛА БИСТРО ИНТЕР ШОБЫ НАЗАД ВИРНУТСЯ',\n      this.width / 2,\n      this.height / 2\n    )\n  }\n  renderEndScreen({ score }) {\n    this.clearScreen()\n\n    this.context.fillStyle = 'white'\n    this.context.font = '14px \"Press Start 2P\"'\n    this.context.textAlign = 'center'\n    this.context.textBaseline = 'middle'\n    this.context.fillText(\n      'БЛЯ КАТКУ ПРОЕБАЛА :(',\n      this.width / 2,\n      this.height / 2 - 48\n    )\n    this.context.fillText(\n      `ЗАТО НАБИЛА ${score} ОЧКОВ!`,\n      this.width / 2,\n      this.height / 2\n    )\n    this.context.fillText(\n      `ШОБ ОПЯТЬ ПРОЕБАТЬ НАЖМИ ИНТЕР`,\n      this.width / 2,\n      this.height / 2 + 48\n    )\n  }\n\n  renderPlayfield({ playfield }) {\n    for (let y = 0; y < playfield.length; y++) {\n      const line = playfield[y]\n\n      for (let x = 0; x < line.length; x++) {\n        const block = line[x]\n\n        if (block) {\n          this.renderBlock(\n            this.playfieldX + x * this.blockWidth,\n            this.playfieldY + y * this.blockHeight,\n            this.blockWidth,\n            this.blockHeight,\n            this.colors[block]\n          )\n        }\n      }\n    }\n\n    this.context.strokeStyle = 'white'\n    this.context.lineWidth = this.playfieldBorderWidth\n    this.context.strokeRect(0, 0, this.playfieldWidth, this.playfieldHeight)\n  }\n\n  renderPanel({ level, score, lines, nextPiece }) {\n    this.context.textAlign = 'start'\n    this.context.textBaseline = 'top'\n    this.context.fillStyle = 'white'\n    this.context.font = '14px \"Press Start 2P\"'\n\n    this.context.fillText(`Score: ${score}`, this.panelX, this.panelY + 0)\n    this.context.fillText(`Lines: ${lines}`, this.panelX, this.panelY + 24)\n    this.context.fillText(`Level: ${level}`, this.panelX, this.panelY + 48)\n    this.context.fillText('Next:', this.panelX, this.panelY + 96)\n\n    for (let y = 0; y < nextPiece.blocks.length; y++) {\n      for (let x = 0; x < nextPiece.blocks[y].length; x++) {\n        const block = nextPiece.blocks[y][x]\n\n        if (block) {\n          this.renderBlock(\n            this.panelX + x * this.blockWidth * 0.5,\n            this.panelY + 100 + y * this.blockHeight * 0.5,\n            this.blockWidth * 0.5,\n            this.blockHeight * 0.5,\n            this.colors[block]\n          )\n        }\n      }\n    }\n  }\n\n  renderBlock(x, y, width, height, color) {\n    this.context.fillStyle = color\n    this.context.strokeStyle = 'black'\n    this.context.lineWidth = 2\n\n    this.context.fillRect(x, y, width, height)\n    this.context.strokeRect(x, y, width, height)\n  }\n}\n\n\n//# sourceURL=webpack:///./src/view.js?");

/***/ })

/******/ });