/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n\r\nwindow.addEventListener(\"DOMContentLoaded\", () => {\r\n    // レンダラーを作成\r\n    const renderer = new three__WEBPACK_IMPORTED_MODULE_0__.WebGLRenderer();\r\n    // レンダラーのサイズを設定\r\n    renderer.setSize(800, 600);\r\n    // canvasをbodyに追加\r\n    document.body.appendChild(renderer.domElement);\r\n    // シーンを作成\r\n    const scene = new three__WEBPACK_IMPORTED_MODULE_0__.Scene();\r\n    // カメラを作成\r\n    const camera = new three__WEBPACK_IMPORTED_MODULE_0__.PerspectiveCamera(45, 800 / 600, 1, 10000);\r\n    camera.position.set(0, 0, 1000);\r\n    // 箱を作成\r\n    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(250, 250, 250);\r\n    const material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshStandardMaterial({ color: 0xff0000 });\r\n    const box = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material);\r\n    box.position.z = -5;\r\n    scene.add(box);\r\n    // 平行光源を生成\r\n    const light = new three__WEBPACK_IMPORTED_MODULE_0__.DirectionalLight(0xffffff);\r\n    light.position.set(1, 1, 1);\r\n    scene.add(light);\r\n    const tick = () => {\r\n        requestAnimationFrame(tick);\r\n        box.rotation.x += 0.05;\r\n        box.rotation.y += 0.05;\r\n        // 描画\r\n        renderer.render(scene, camera);\r\n    };\r\n    tick();\r\n    console.log(\"Hello Three.js\");\r\n});\r\n\n\n//# sourceURL=webpack://webpack-three/./src/index.ts?");

/***/ }),

/***/ "./node_modules/three/build/three.module.js":
/*!**************************************************!*\
  !*** ./node_modules/three/build/three.module.js ***!
  \**************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ })()
;