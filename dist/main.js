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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(2);
module.exports = __webpack_require__(3);


/***/ }),
/* 2 */
/***/ (function(module, exports) {

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

// Import your JS components here

var App = function () {
  function App() {
    _classCallCheck(this, App);

    this.components = [];
  }

  _createClass(App, [{
    key: "component",
    value: function component(_component) {
      this.components.push(_component);
    }
  }, {
    key: "boot",
    value: function boot() {
      this.components.forEach(function (component) {
        return component.init();
      });
    }
  }]);

  return App;
}();

var app = new App();
// Push imported JS to component variable using .component method


document.addEventListener("DOMContentLoaded", function () {
  return app.boot();
});

/***/ }),
/* 3 */
/***/ (function(module, exports) {

throw new Error("Module build failed: ModuleBuildError: Module build failed: Error: Missing binding /Users/sam/Documents/dev/vue-training/node_modules/node-sass/vendor/darwin-x64-72/binding.node\nNode Sass could not find a binding for your current environment: OS X 64-bit with Node.js 12.x\n\nFound bindings for the following environments:\n  - OS X 64-bit with Unsupported runtime (83)\n\nThis usually happens because your environment has changed since running `npm install`.\nRun `npm rebuild node-sass` to download the binding for your current environment.\n    at module.exports (/Users/sam/Documents/dev/vue-training/node_modules/node-sass/lib/binding.js:15:13)\n    at Object.<anonymous> (/Users/sam/Documents/dev/vue-training/node_modules/node-sass/lib/index.js:14:35)\n    at Module._compile (internal/modules/cjs/loader.js:1015:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1035:10)\n    at Module.load (internal/modules/cjs/loader.js:879:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:724:14)\n    at Module.require (internal/modules/cjs/loader.js:903:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at Object.<anonymous> (/Users/sam/Documents/dev/vue-training/node_modules/sass-loader/lib/loader.js:3:14)\n    at Module._compile (internal/modules/cjs/loader.js:1015:30)\n    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1035:10)\n    at Module.load (internal/modules/cjs/loader.js:879:32)\n    at Function.Module._load (internal/modules/cjs/loader.js:724:14)\n    at Module.require (internal/modules/cjs/loader.js:903:19)\n    at require (internal/modules/cjs/helpers.js:74:18)\n    at loadLoader (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/loadLoader.js:18:17)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at /Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/NormalModule.js:195:19\n    at /Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:367:11\n    at /Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:172:11\n    at loadLoader (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/loadLoader.js:32:11)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:165:10)\n    at /Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:176:18\n    at loadLoader (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/loadLoader.js:47:3)\n    at iteratePitchingLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:169:2)\n    at runLoaders (/Users/sam/Documents/dev/vue-training/node_modules/loader-runner/lib/LoaderRunner.js:365:2)\n    at NormalModule.doBuild (/Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/NormalModule.js:182:3)\n    at NormalModule.build (/Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/NormalModule.js:275:15)\n    at Compilation.buildModule (/Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/Compilation.js:157:10)\n    at /Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/Compilation.js:460:10\n    at /Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/NormalModuleFactory.js:243:5\n    at /Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/NormalModuleFactory.js:94:13\n    at /Users/sam/Documents/dev/vue-training/node_modules/tapable/lib/Tapable.js:268:11\n    at NormalModuleFactory.<anonymous> (/Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/CompatibilityPlugin.js:52:5)\n    at NormalModuleFactory.applyPluginsAsyncWaterfall (/Users/sam/Documents/dev/vue-training/node_modules/tapable/lib/Tapable.js:272:13)\n    at /Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/NormalModuleFactory.js:69:10\n    at /Users/sam/Documents/dev/vue-training/node_modules/webpack/lib/NormalModuleFactory.js:196:7\n    at processTicksAndRejections (internal/process/task_queues.js:79:11)");

/***/ })
/******/ ]);