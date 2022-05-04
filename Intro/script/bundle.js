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
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 289);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _extends;
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),
/* 2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _objectWithoutPropertiesLoose;
function _objectWithoutPropertiesLoose(source, excluded) {
  if (source == null) return {};
  var target = {};
  var sourceKeys = Object.keys(source);
  var key, i;

  for (i = 0; i < sourceKeys.length; i++) {
    key = sourceKeys[i];
    if (excluded.indexOf(key) >= 0) continue;
    target[key] = source[key];
  }

  return target;
}

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if (typeof module !== 'undefined' && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
			return classNames;
		}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {
		window.classNames = classNames;
	}
}());


/***/ }),
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = useBootstrapPrefix;
/* unused harmony export createBootstrapComponent */
/* unused harmony export ThemeConsumer */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


var ThemeContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.createContext({});
var Consumer = ThemeContext.Consumer,
    Provider = ThemeContext.Provider;

function ThemeProvider(_ref) {
  var prefixes = _ref.prefixes,
      children = _ref.children;
  var copiedPrefixes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useMemo"])(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, prefixes);
  }, [prefixes]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Provider, {
    value: copiedPrefixes
  }, children);
}

function useBootstrapPrefix(prefix, defaultPrefix) {
  var prefixes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useContext"])(ThemeContext);
  return prefix || prefixes[defaultPrefix] || defaultPrefix;
}

function createBootstrapComponent(Component, opts) {
  if (typeof opts === 'string') opts = {
    prefix: opts
  };
  var isClassy = Component.prototype && Component.prototype.isReactComponent; // If it's a functional component make sure we don't break it with a ref

  var _opts = opts,
      prefix = _opts.prefix,
      _opts$forwardRefAs = _opts.forwardRefAs,
      forwardRefAs = _opts$forwardRefAs === void 0 ? isClassy ? 'ref' : 'innerRef' : _opts$forwardRefAs;
  var Wrapped = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.forwardRef(function (_ref2, ref) {
    var props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, _ref2);

    props[forwardRefAs] = ref;
    var bsPrefix = useBootstrapPrefix(props.bsPrefix, prefix);
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
      bsPrefix: bsPrefix
    }));
  });
  Wrapped.displayName = "Bootstrap(" + (Component.displayName || Component.name) + ")";
  return Wrapped;
}


/* harmony default export */ __webpack_exports__["a"] = (ThemeProvider);

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var bind = __webpack_require__(39);

// utils is a library of generic helper functions non-specific to axios

var toString = Object.prototype.toString;

/**
 * Determine if a value is an Array
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Array, otherwise false
 */
function isArray(val) {
  return toString.call(val) === '[object Array]';
}

/**
 * Determine if a value is undefined
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if the value is undefined, otherwise false
 */
function isUndefined(val) {
  return typeof val === 'undefined';
}

/**
 * Determine if a value is a Buffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Buffer, otherwise false
 */
function isBuffer(val) {
  return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
    && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
}

/**
 * Determine if a value is an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an ArrayBuffer, otherwise false
 */
function isArrayBuffer(val) {
  return toString.call(val) === '[object ArrayBuffer]';
}

/**
 * Determine if a value is a FormData
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an FormData, otherwise false
 */
function isFormData(val) {
  return (typeof FormData !== 'undefined') && (val instanceof FormData);
}

/**
 * Determine if a value is a view on an ArrayBuffer
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
 */
function isArrayBufferView(val) {
  var result;
  if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
    result = ArrayBuffer.isView(val);
  } else {
    result = (val) && (val.buffer) && (val.buffer instanceof ArrayBuffer);
  }
  return result;
}

/**
 * Determine if a value is a String
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a String, otherwise false
 */
function isString(val) {
  return typeof val === 'string';
}

/**
 * Determine if a value is a Number
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Number, otherwise false
 */
function isNumber(val) {
  return typeof val === 'number';
}

/**
 * Determine if a value is an Object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is an Object, otherwise false
 */
function isObject(val) {
  return val !== null && typeof val === 'object';
}

/**
 * Determine if a value is a plain Object
 *
 * @param {Object} val The value to test
 * @return {boolean} True if value is a plain Object, otherwise false
 */
function isPlainObject(val) {
  if (toString.call(val) !== '[object Object]') {
    return false;
  }

  var prototype = Object.getPrototypeOf(val);
  return prototype === null || prototype === Object.prototype;
}

/**
 * Determine if a value is a Date
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Date, otherwise false
 */
function isDate(val) {
  return toString.call(val) === '[object Date]';
}

/**
 * Determine if a value is a File
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a File, otherwise false
 */
function isFile(val) {
  return toString.call(val) === '[object File]';
}

/**
 * Determine if a value is a Blob
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Blob, otherwise false
 */
function isBlob(val) {
  return toString.call(val) === '[object Blob]';
}

/**
 * Determine if a value is a Function
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Function, otherwise false
 */
function isFunction(val) {
  return toString.call(val) === '[object Function]';
}

/**
 * Determine if a value is a Stream
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a Stream, otherwise false
 */
function isStream(val) {
  return isObject(val) && isFunction(val.pipe);
}

/**
 * Determine if a value is a URLSearchParams object
 *
 * @param {Object} val The value to test
 * @returns {boolean} True if value is a URLSearchParams object, otherwise false
 */
function isURLSearchParams(val) {
  return typeof URLSearchParams !== 'undefined' && val instanceof URLSearchParams;
}

/**
 * Trim excess whitespace off the beginning and end of a string
 *
 * @param {String} str The String to trim
 * @returns {String} The String freed of excess whitespace
 */
function trim(str) {
  return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
}

/**
 * Determine if we're running in a standard browser environment
 *
 * This allows axios to run in a web worker, and react-native.
 * Both environments support XMLHttpRequest, but not fully standard globals.
 *
 * web workers:
 *  typeof window -> undefined
 *  typeof document -> undefined
 *
 * react-native:
 *  navigator.product -> 'ReactNative'
 * nativescript
 *  navigator.product -> 'NativeScript' or 'NS'
 */
function isStandardBrowserEnv() {
  if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                           navigator.product === 'NativeScript' ||
                                           navigator.product === 'NS')) {
    return false;
  }
  return (
    typeof window !== 'undefined' &&
    typeof document !== 'undefined'
  );
}

/**
 * Iterate over an Array or an Object invoking a function for each item.
 *
 * If `obj` is an Array callback will be called passing
 * the value, index, and complete array for each item.
 *
 * If 'obj' is an Object callback will be called passing
 * the value, key, and complete object for each property.
 *
 * @param {Object|Array} obj The object to iterate
 * @param {Function} fn The callback to invoke for each item
 */
function forEach(obj, fn) {
  // Don't bother if no value provided
  if (obj === null || typeof obj === 'undefined') {
    return;
  }

  // Force an array if not already something iterable
  if (typeof obj !== 'object') {
    /*eslint no-param-reassign:0*/
    obj = [obj];
  }

  if (isArray(obj)) {
    // Iterate over array values
    for (var i = 0, l = obj.length; i < l; i++) {
      fn.call(null, obj[i], i, obj);
    }
  } else {
    // Iterate over object keys
    for (var key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        fn.call(null, obj[key], key, obj);
      }
    }
  }
}

/**
 * Accepts varargs expecting each argument to be an object, then
 * immutably merges the properties of each object and returns result.
 *
 * When multiple objects contain the same key the later object in
 * the arguments list will take precedence.
 *
 * Example:
 *
 * ```js
 * var result = merge({foo: 123}, {foo: 456});
 * console.log(result.foo); // outputs 456
 * ```
 *
 * @param {Object} obj1 Object to merge
 * @returns {Object} Result of all merge properties
 */
function merge(/* obj1, obj2, obj3, ... */) {
  var result = {};
  function assignValue(val, key) {
    if (isPlainObject(result[key]) && isPlainObject(val)) {
      result[key] = merge(result[key], val);
    } else if (isPlainObject(val)) {
      result[key] = merge({}, val);
    } else if (isArray(val)) {
      result[key] = val.slice();
    } else {
      result[key] = val;
    }
  }

  for (var i = 0, l = arguments.length; i < l; i++) {
    forEach(arguments[i], assignValue);
  }
  return result;
}

/**
 * Extends object a by mutably adding to it the properties of object b.
 *
 * @param {Object} a The object to be extended
 * @param {Object} b The object to copy properties from
 * @param {Object} thisArg The object to bind function to
 * @return {Object} The resulting value of object a
 */
function extend(a, b, thisArg) {
  forEach(b, function assignValue(val, key) {
    if (thisArg && typeof val === 'function') {
      a[key] = bind(val, thisArg);
    } else {
      a[key] = val;
    }
  });
  return a;
}

/**
 * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
 *
 * @param {string} content with BOM
 * @return {string} content value without BOM
 */
function stripBOM(content) {
  if (content.charCodeAt(0) === 0xFEFF) {
    content = content.slice(1);
  }
  return content;
}

module.exports = {
  isArray: isArray,
  isArrayBuffer: isArrayBuffer,
  isBuffer: isBuffer,
  isFormData: isFormData,
  isArrayBufferView: isArrayBufferView,
  isString: isString,
  isNumber: isNumber,
  isObject: isObject,
  isPlainObject: isPlainObject,
  isUndefined: isUndefined,
  isDate: isDate,
  isFile: isFile,
  isBlob: isBlob,
  isFunction: isFunction,
  isStream: isStream,
  isURLSearchParams: isURLSearchParams,
  isStandardBrowserEnv: isStandardBrowserEnv,
  forEach: forEach,
  merge: merge,
  extend: extend,
  trim: trim,
  stripBOM: stripBOM
};


/***/ }),
/* 6 */
/***/ (function(module, exports) {

// shim for using process in browser
var process = module.exports = {};

// cached from whatever global is present so that test runners that stub it
// don't break things.  But we need to wrap it in a try catch in case it is
// wrapped in strict mode code which doesn't define any globals.  It's inside a
// function because try/catches deoptimize in certain engines.

var cachedSetTimeout;
var cachedClearTimeout;

function defaultSetTimout() {
    throw new Error('setTimeout has not been defined');
}
function defaultClearTimeout () {
    throw new Error('clearTimeout has not been defined');
}
(function () {
    try {
        if (typeof setTimeout === 'function') {
            cachedSetTimeout = setTimeout;
        } else {
            cachedSetTimeout = defaultSetTimout;
        }
    } catch (e) {
        cachedSetTimeout = defaultSetTimout;
    }
    try {
        if (typeof clearTimeout === 'function') {
            cachedClearTimeout = clearTimeout;
        } else {
            cachedClearTimeout = defaultClearTimeout;
        }
    } catch (e) {
        cachedClearTimeout = defaultClearTimeout;
    }
} ())
function runTimeout(fun) {
    if (cachedSetTimeout === setTimeout) {
        //normal enviroments in sane situations
        return setTimeout(fun, 0);
    }
    // if setTimeout wasn't available but was latter defined
    if ((cachedSetTimeout === defaultSetTimout || !cachedSetTimeout) && setTimeout) {
        cachedSetTimeout = setTimeout;
        return setTimeout(fun, 0);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedSetTimeout(fun, 0);
    } catch(e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't trust the global object when called normally
            return cachedSetTimeout.call(null, fun, 0);
        } catch(e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error
            return cachedSetTimeout.call(this, fun, 0);
        }
    }


}
function runClearTimeout(marker) {
    if (cachedClearTimeout === clearTimeout) {
        //normal enviroments in sane situations
        return clearTimeout(marker);
    }
    // if clearTimeout wasn't available but was latter defined
    if ((cachedClearTimeout === defaultClearTimeout || !cachedClearTimeout) && clearTimeout) {
        cachedClearTimeout = clearTimeout;
        return clearTimeout(marker);
    }
    try {
        // when when somebody has screwed with setTimeout but no I.E. maddness
        return cachedClearTimeout(marker);
    } catch (e){
        try {
            // When we are in I.E. but the script has been evaled so I.E. doesn't  trust the global object when called normally
            return cachedClearTimeout.call(null, marker);
        } catch (e){
            // same as above but when it's a version of I.E. that must have the global object for 'this', hopfully our context correct otherwise it will throw a global error.
            // Some versions of I.E. have different rules for clearTimeout vs setTimeout
            return cachedClearTimeout.call(this, marker);
        }
    }



}
var queue = [];
var draining = false;
var currentQueue;
var queueIndex = -1;

function cleanUpNextTick() {
    if (!draining || !currentQueue) {
        return;
    }
    draining = false;
    if (currentQueue.length) {
        queue = currentQueue.concat(queue);
    } else {
        queueIndex = -1;
    }
    if (queue.length) {
        drainQueue();
    }
}

function drainQueue() {
    if (draining) {
        return;
    }
    var timeout = runTimeout(cleanUpNextTick);
    draining = true;

    var len = queue.length;
    while(len) {
        currentQueue = queue;
        queue = [];
        while (++queueIndex < len) {
            if (currentQueue) {
                currentQueue[queueIndex].run();
            }
        }
        queueIndex = -1;
        len = queue.length;
    }
    currentQueue = null;
    draining = false;
    runClearTimeout(timeout);
}

process.nextTick = function (fun) {
    var args = new Array(arguments.length - 1);
    if (arguments.length > 1) {
        for (var i = 1; i < arguments.length; i++) {
            args[i - 1] = arguments[i];
        }
    }
    queue.push(new Item(fun, args));
    if (queue.length === 1 && !draining) {
        runTimeout(drainQueue);
    }
};

// v8 likes predictible objects
function Item(fun, array) {
    this.fun = fun;
    this.array = array;
}
Item.prototype.run = function () {
    this.fun.apply(null, this.array);
};
process.title = 'browser';
process.browser = true;
process.env = {};
process.argv = [];
process.version = ''; // empty string to avoid regexp issues
process.versions = {};

function noop() {}

process.on = noop;
process.addListener = noop;
process.once = noop;
process.off = noop;
process.removeListener = noop;
process.removeAllListeners = noop;
process.emit = noop;
process.prependListener = noop;
process.prependOnceListener = noop;

process.listeners = function (name) { return [] }

process.binding = function (name) {
    throw new Error('process.binding is not supported');
};

process.cwd = function () { return '/' };
process.chdir = function (dir) {
    throw new Error('process.chdir is not supported');
};
process.umask = function() { return 0; };


/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = createWithBsPrefix;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dom_helpers_camelize__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["className", "bsPrefix", "as"];





var pascalCase = function pascalCase(str) {
  return str[0].toUpperCase() + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_dom_helpers_camelize__["a" /* default */])(str).slice(1);
};

// TODO: emstricten & fix the typing here! `createWithBsPrefix<TElementType>...`
function createWithBsPrefix(prefix, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      _ref$displayName = _ref.displayName,
      displayName = _ref$displayName === void 0 ? pascalCase(prefix) : _ref$displayName,
      Component = _ref.Component,
      defaultProps = _ref.defaultProps;

  var BsComponent = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.forwardRef(function (_ref2, ref) {
    var className = _ref2.className,
        bsPrefix = _ref2.bsPrefix,
        _ref2$as = _ref2.as,
        Tag = _ref2$as === void 0 ? Component || 'div' : _ref2$as,
        props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref2, _excluded);

    var resolvedPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, prefix);
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Tag, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
      ref: ref,
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, resolvedPrefix)
    }, props));
  });
  BsComponent.defaultProps = defaultProps;
  BsComponent.displayName = displayName;
  return BsComponent;
}

/***/ }),
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return top; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return bottom; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return right; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return left; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "l", function() { return auto; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return basePlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return start; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "k", function() { return end; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "g", function() { return clippingParents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "h", function() { return viewport; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "i", function() { return popper; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "j", function() { return reference; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "n", function() { return variationPlacements; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "m", function() { return placements; });
/* unused harmony export beforeRead */
/* unused harmony export read */
/* unused harmony export afterRead */
/* unused harmony export beforeMain */
/* unused harmony export main */
/* unused harmony export afterMain */
/* unused harmony export beforeWrite */
/* unused harmony export write */
/* unused harmony export afterWrite */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "o", function() { return modifierPhases; });
var top = 'top';
var bottom = 'bottom';
var right = 'right';
var left = 'left';
var auto = 'auto';
var basePlacements = [top, bottom, right, left];
var start = 'start';
var end = 'end';
var clippingParents = 'clippingParents';
var viewport = 'viewport';
var popper = 'popper';
var reference = 'reference';
var variationPlacements = /*#__PURE__*/basePlacements.reduce(function (acc, placement) {
  return acc.concat([placement + "-" + start, placement + "-" + end]);
}, []);
var placements = /*#__PURE__*/[].concat(basePlacements, [auto]).reduce(function (acc, placement) {
  return acc.concat([placement, placement + "-" + start, placement + "-" + end]);
}, []); // modifiers that need to read the DOM

var beforeRead = 'beforeRead';
var read = 'read';
var afterRead = 'afterRead'; // pure-logic modifiers

var beforeMain = 'beforeMain';
var main = 'main';
var afterMain = 'afterMain'; // modifier with the purpose to write to the DOM (or write into a framework state)

var beforeWrite = 'beforeWrite';
var write = 'write';
var afterWrite = 'afterWrite';
var modifierPhases = [beforeRead, read, afterRead, beforeMain, main, afterMain, beforeWrite, write, afterWrite];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (process.env.NODE_ENV !== 'production') {
  var ReactIs = __webpack_require__(161);

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = __webpack_require__(224)(ReactIs.isElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(223)();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useEventCallback;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__useCommittedRef__ = __webpack_require__(120);


function useEventCallback(fn) {
  var ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__useCommittedRef__["a" /* default */])(fn);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useCallback"])(function () {
    return ref.current && ref.current.apply(ref, arguments);
  }, [ref]);
}

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return isElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return isHTMLElement; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return isShadowRoot; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(14);


function isElement(node) {
  var OwnElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node).Element;
  return node instanceof OwnElement || node instanceof Element;
}

function isHTMLElement(node) {
  var OwnElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node).HTMLElement;
  return node instanceof OwnElement || node instanceof HTMLElement;
}

function isShadowRoot(node) {
  // IE 11 has no ShadowRoot
  if (typeof ShadowRoot === 'undefined') {
    return false;
  }

  var OwnElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node).ShadowRoot;
  return node instanceof OwnElement || node instanceof ShadowRoot;
}



/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hook__ = __webpack_require__(290);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__hook__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_0__hook__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__uncontrollable__ = __webpack_require__(291);
/* unused harmony reexport uncontrollable */



/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return makeEventKey; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // TODO (apparently this is a bare "onSelect"?)

var SelectableContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null);
var makeEventKey = function makeEventKey(eventKey, href) {
  if (href === void 0) {
    href = null;
  }

  if (eventKey != null) return String(eventKey);
  return href || null;
};
/* harmony default export */ __webpack_exports__["b"] = (SelectableContext);

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWindow;
function getWindow(node) {
  if (node == null) {
    return window;
  }

  if (node.toString() !== '[object Window]') {
    var ownerDocument = node.ownerDocument;
    return ownerDocument ? ownerDocument.defaultView || window : window;
  }

  return node;
}

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // TODO

var FormContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext({
  controlId: undefined
});
/* harmony default export */ __webpack_exports__["a"] = (FormContext);

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDocumentElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instanceOf_js__ = __webpack_require__(11);

function getDocumentElement(element) {
  // $FlowFixMe[incompatible-return]: assume body is always available
  return ((__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__instanceOf_js__["c" /* isElement */])(element) ? element.ownerDocument : // $FlowFixMe[prop-missing]
  element.document) || window.document).documentElement;
}

/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBasePlacement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(8);

function getBasePlacement(placement) {
  return placement.split('-')[0];
}

/***/ }),
/* 19 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__createChainedFunction__ = __webpack_require__(102);


var _excluded = ["as", "disabled", "onKeyDown"];



function isTrivialHref(href) {
  return !href || href.trim() === '#';
}
/**
 * There are situations due to browser quirks or Bootstrap CSS where
 * an anchor tag is needed, when semantically a button tag is the
 * better choice. SafeAnchor ensures that when an anchor is used like a
 * button its accessible. It also emulates input `disabled` behavior for
 * links, which is usually desirable for Buttons, NavItems, DropdownItems, etc.
 */


var SafeAnchor = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'a' : _ref$as,
      disabled = _ref.disabled,
      onKeyDown = _ref.onKeyDown,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var handleClick = function handleClick(event) {
    var href = props.href,
        onClick = props.onClick;

    if (disabled || isTrivialHref(href)) {
      event.preventDefault();
    }

    if (disabled) {
      event.stopPropagation();
      return;
    }

    if (onClick) {
      onClick(event);
    }
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (event.key === ' ') {
      event.preventDefault();
      handleClick(event);
    }
  };

  if (isTrivialHref(props.href)) {
    props.role = props.role || 'button'; // we want to make sure there is a href attribute on the node
    // otherwise, the cursor incorrectly styled (except with role='button')

    props.href = props.href || '#';
  }

  if (disabled) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    onClick: handleClick,
    onKeyDown: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__createChainedFunction__["a" /* default */])(handleKeyDown, onKeyDown)
  }));
});
SafeAnchor.displayName = 'SafeAnchor';
/* harmony default export */ __webpack_exports__["a"] = (SafeAnchor);

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var __DEV__ = process.env.NODE_ENV !== 'production';

var warning = function() {};

if (__DEV__) {
  var printWarning = function printWarning(format, args) {
    var len = arguments.length;
    args = new Array(len > 1 ? len - 1 : 0);
    for (var key = 1; key < len; key++) {
      args[key - 1] = arguments[key];
    }
    var argIndex = 0;
    var message = 'Warning: ' +
      format.replace(/%s/g, function() {
        return args[argIndex++];
      });
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  }

  warning = function(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error(
          '`warning(condition, format, ...args)` requires a warning ' +
          'message argument'
      );
    }
    if (!condition) {
      printWarning.apply(null, [format].concat(args));
    }
  };
}

module.exports = warning;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 21 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return max; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return min; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return round; });
var max = Math.max;
var min = Math.min;
var round = Math.round;

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

var utils = __webpack_require__(5);
var normalizeHeaderName = __webpack_require__(77);
var enhanceError = __webpack_require__(37);

var DEFAULT_CONTENT_TYPE = {
  'Content-Type': 'application/x-www-form-urlencoded'
};

function setContentTypeIfUnset(headers, value) {
  if (!utils.isUndefined(headers) && utils.isUndefined(headers['Content-Type'])) {
    headers['Content-Type'] = value;
  }
}

function getDefaultAdapter() {
  var adapter;
  if (typeof XMLHttpRequest !== 'undefined') {
    // For browsers use XHR adapter
    adapter = __webpack_require__(33);
  } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
    // For node use HTTP adapter
    adapter = __webpack_require__(33);
  }
  return adapter;
}

function stringifySafely(rawValue, parser, encoder) {
  if (utils.isString(rawValue)) {
    try {
      (parser || JSON.parse)(rawValue);
      return utils.trim(rawValue);
    } catch (e) {
      if (e.name !== 'SyntaxError') {
        throw e;
      }
    }
  }

  return (encoder || JSON.stringify)(rawValue);
}

var defaults = {

  transitional: {
    silentJSONParsing: true,
    forcedJSONParsing: true,
    clarifyTimeoutError: false
  },

  adapter: getDefaultAdapter(),

  transformRequest: [function transformRequest(data, headers) {
    normalizeHeaderName(headers, 'Accept');
    normalizeHeaderName(headers, 'Content-Type');

    if (utils.isFormData(data) ||
      utils.isArrayBuffer(data) ||
      utils.isBuffer(data) ||
      utils.isStream(data) ||
      utils.isFile(data) ||
      utils.isBlob(data)
    ) {
      return data;
    }
    if (utils.isArrayBufferView(data)) {
      return data.buffer;
    }
    if (utils.isURLSearchParams(data)) {
      setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
      return data.toString();
    }
    if (utils.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
      setContentTypeIfUnset(headers, 'application/json');
      return stringifySafely(data);
    }
    return data;
  }],

  transformResponse: [function transformResponse(data) {
    var transitional = this.transitional;
    var silentJSONParsing = transitional && transitional.silentJSONParsing;
    var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
    var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

    if (strictJSONParsing || (forcedJSONParsing && utils.isString(data) && data.length)) {
      try {
        return JSON.parse(data);
      } catch (e) {
        if (strictJSONParsing) {
          if (e.name === 'SyntaxError') {
            throw enhanceError(e, this, 'E_JSON_PARSE');
          }
          throw e;
        }
      }
    }

    return data;
  }],

  /**
   * A timeout in milliseconds to abort a request. If set to 0 (default) a
   * timeout is not created.
   */
  timeout: 0,

  xsrfCookieName: 'XSRF-TOKEN',
  xsrfHeaderName: 'X-XSRF-TOKEN',

  maxContentLength: -1,
  maxBodyLength: -1,

  validateStatus: function validateStatus(status) {
    return status >= 200 && status < 300;
  }
};

defaults.headers = {
  common: {
    'Accept': 'application/json, text/plain, */*'
  }
};

utils.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
  defaults.headers[method] = {};
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  defaults.headers[method] = utils.merge(DEFAULT_CONTENT_TYPE);
});

module.exports = defaults;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 23 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getComputedStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(14);

function getComputedStyle(element) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(element).getComputedStyle(element);
}

/***/ }),
/* 24 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getNodeName;
function getNodeName(element) {
  return element ? (element.nodeName || '').toLowerCase() : null;
}

/***/ }),
/* 25 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ownerDocument;
/**
 * Returns the owner document of a given element.
 * 
 * @param node the element
 */
function ownerDocument(node) {
  return node && node.ownerDocument || document;
}

/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_transition_group_Transition__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__transitionEndListener__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__triggerBrowserReflow__ = __webpack_require__(105);


var _excluded = ["className", "children"];

var _fadeStyles;






var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false
};
var fadeStyles = (_fadeStyles = {}, _fadeStyles[__WEBPACK_IMPORTED_MODULE_4_react_transition_group_Transition__["a" /* ENTERING */]] = 'show', _fadeStyles[__WEBPACK_IMPORTED_MODULE_4_react_transition_group_Transition__["b" /* ENTERED */]] = 'show', _fadeStyles);
var Fade = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      children = _ref.children,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var handleEnter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(function (node) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__triggerBrowserReflow__["a" /* default */])(node);
    if (props.onEnter) props.onEnter(node);
  }, [props]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_transition_group_Transition__["c" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    addEndListener: __WEBPACK_IMPORTED_MODULE_5__transitionEndListener__["a" /* default */]
  }, props, {
    onEnter: handleEnter
  }), function (status, innerProps) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(children, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, innerProps, {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()('fade', className, children.props.className, fadeStyles[status])
    }));
  });
});
Fade.defaultProps = defaultProps;
Fade.displayName = 'Fade';
/* harmony default export */ __webpack_exports__["a"] = (Fade);

/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _inheritsLoose;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__setPrototypeOf_js__ = __webpack_require__(173);

function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__setPrototypeOf_js__["a" /* default */])(subClass, superClass);
}

/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getBoundingClientRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instanceOf_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_math_js__ = __webpack_require__(21);


function getBoundingClientRect(element, includeScale) {
  if (includeScale === void 0) {
    includeScale = false;
  }

  var rect = element.getBoundingClientRect();
  var scaleX = 1;
  var scaleY = 1;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__instanceOf_js__["a" /* isHTMLElement */])(element) && includeScale) {
    var offsetHeight = element.offsetHeight;
    var offsetWidth = element.offsetWidth; // Do not attempt to divide by 0, otherwise we get `Infinity` as scale
    // Fallback to 1 in case both values are `0`

    if (offsetWidth > 0) {
      scaleX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_math_js__["c" /* round */])(rect.width) / offsetWidth || 1;
    }

    if (offsetHeight > 0) {
      scaleY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_math_js__["c" /* round */])(rect.height) / offsetHeight || 1;
    }
  }

  return {
    width: rect.width / scaleX,
    height: rect.height / scaleY,
    top: rect.top / scaleY,
    right: rect.right / scaleX,
    bottom: rect.bottom / scaleY,
    left: rect.left / scaleX,
    x: rect.left / scaleX,
    y: rect.top / scaleY
  };
}

/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOffsetParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getNodeName_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceOf_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isTableElement_js__ = __webpack_require__(182);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getParentNode_js__ = __webpack_require__(43);







function getTrueOffsetParent(element) {
  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["a" /* isHTMLElement */])(element) || // https://github.com/popperjs/popper-core/issues/837
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(element).position === 'fixed') {
    return null;
  }

  return element.offsetParent;
} // `.offsetParent` reports `null` for fixed elements, while absolute elements
// return the containing block


function getContainingBlock(element) {
  var isFirefox = navigator.userAgent.toLowerCase().indexOf('firefox') !== -1;
  var isIE = navigator.userAgent.indexOf('Trident') !== -1;

  if (isIE && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["a" /* isHTMLElement */])(element)) {
    // In IE 9, 10 and 11 fixed elements containing block is always established by the viewport
    var elementCss = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(element);

    if (elementCss.position === 'fixed') {
      return null;
    }
  }

  var currentNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__getParentNode_js__["a" /* default */])(element);

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["b" /* isShadowRoot */])(currentNode)) {
    currentNode = currentNode.host;
  }

  while (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["a" /* isHTMLElement */])(currentNode) && ['html', 'body'].indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getNodeName_js__["a" /* default */])(currentNode)) < 0) {
    var css = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(currentNode); // This is non-exhaustive but covers the most common CSS properties that
    // create a containing block.
    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block

    if (css.transform !== 'none' || css.perspective !== 'none' || css.contain === 'paint' || ['transform', 'perspective'].indexOf(css.willChange) !== -1 || isFirefox && css.willChange === 'filter' || isFirefox && css.filter && css.filter !== 'none') {
      return currentNode;
    } else {
      currentNode = currentNode.parentNode;
    }
  }

  return null;
} // Gets the closest ancestor positioned element. Handles some edge cases,
// such as table ancestors and cross browser bugs.


function getOffsetParent(element) {
  var window = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(element);
  var offsetParent = getTrueOffsetParent(element);

  while (offsetParent && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isTableElement_js__["a" /* default */])(offsetParent) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(offsetParent).position === 'static') {
    offsetParent = getTrueOffsetParent(offsetParent);
  }

  if (offsetParent && (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getNodeName_js__["a" /* default */])(offsetParent) === 'html' || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getNodeName_js__["a" /* default */])(offsetParent) === 'body' && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getComputedStyle_js__["a" /* default */])(offsetParent).position === 'static')) {
    return window;
  }

  return offsetParent || getContainingBlock(element) || window;
}

/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = detectOverflow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getClippingRect_js__ = __webpack_require__(175);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getDocumentElement_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_getBoundingClientRect_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__computeOffsets_js__ = __webpack_require__(114);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rectToClientRect_js__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom_utils_instanceOf_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__mergePaddingObject_js__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__expandToHashMap_js__ = __webpack_require__(115);








 // eslint-disable-next-line import/no-unused-modules

function detectOverflow(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      _options$placement = _options.placement,
      placement = _options$placement === void 0 ? state.placement : _options$placement,
      _options$boundary = _options.boundary,
      boundary = _options$boundary === void 0 ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["g" /* clippingParents */] : _options$boundary,
      _options$rootBoundary = _options.rootBoundary,
      rootBoundary = _options$rootBoundary === void 0 ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["h" /* viewport */] : _options$rootBoundary,
      _options$elementConte = _options.elementContext,
      elementContext = _options$elementConte === void 0 ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */] : _options$elementConte,
      _options$altBoundary = _options.altBoundary,
      altBoundary = _options$altBoundary === void 0 ? false : _options$altBoundary,
      _options$padding = _options.padding,
      padding = _options$padding === void 0 ? 0 : _options$padding;
  var paddingObject = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__mergePaddingObject_js__["a" /* default */])(typeof padding !== 'number' ? padding : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__expandToHashMap_js__["a" /* default */])(padding, __WEBPACK_IMPORTED_MODULE_5__enums_js__["a" /* basePlacements */]));
  var altContext = elementContext === __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */] ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["j" /* reference */] : __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */];
  var popperRect = state.rects.popper;
  var element = state.elements[altBoundary ? altContext : elementContext];
  var clippingClientRect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getClippingRect_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__dom_utils_instanceOf_js__["c" /* isElement */])(element) ? element : element.contextElement || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getDocumentElement_js__["a" /* default */])(state.elements.popper), boundary, rootBoundary);
  var referenceClientRect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_utils_getBoundingClientRect_js__["a" /* default */])(state.elements.reference);
  var popperOffsets = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__computeOffsets_js__["a" /* default */])({
    reference: referenceClientRect,
    element: popperRect,
    strategy: 'absolute',
    placement: placement
  });
  var popperClientRect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__rectToClientRect_js__["a" /* default */])(Object.assign({}, popperRect, popperOffsets));
  var elementClientRect = elementContext === __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */] ? popperClientRect : referenceClientRect; // positive = overflowing the clipping rect
  // 0 or negative = within the clipping rect

  var overflowOffsets = {
    top: clippingClientRect.top - elementClientRect.top + paddingObject.top,
    bottom: elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom,
    left: clippingClientRect.left - elementClientRect.left + paddingObject.left,
    right: elementClientRect.right - clippingClientRect.right + paddingObject.right
  };
  var offsetData = state.modifiersData.offset; // Offsets can be applied only to the popper element

  if (elementContext === __WEBPACK_IMPORTED_MODULE_5__enums_js__["i" /* popper */] && offsetData) {
    var offset = offsetData[placement];
    Object.keys(overflowOffsets).forEach(function (key) {
      var multiply = [__WEBPACK_IMPORTED_MODULE_5__enums_js__["c" /* right */], __WEBPACK_IMPORTED_MODULE_5__enums_js__["e" /* bottom */]].indexOf(key) >= 0 ? 1 : -1;
      var axis = [__WEBPACK_IMPORTED_MODULE_5__enums_js__["d" /* top */], __WEBPACK_IMPORTED_MODULE_5__enums_js__["e" /* bottom */]].indexOf(key) >= 0 ? 'y' : 'x';
      overflowOffsets[key] += offset[axis] * multiply;
    });
  }

  return overflowOffsets;
}

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getVariation;
function getVariation(placement) {
  return placement.split('-')[1];
}

/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export mergeRefs */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);


var toFnRef = function toFnRef(ref) {
  return !ref || typeof ref === 'function' ? ref : function (value) {
    ref.current = value;
  };
};

function mergeRefs(refA, refB) {
  var a = toFnRef(refA);
  var b = toFnRef(refB);
  return function (value) {
    if (a) a(value);
    if (b) b(value);
  };
}
/**
 * Create and returns a single callback ref composed from two other Refs.
 *
 * ```tsx
 * const Button = React.forwardRef((props, ref) => {
 *   const [element, attachRef] = useCallbackRef<HTMLButtonElement>();
 *   const mergedRef = useMergedRefs(ref, attachRef);
 *
 *   return <button ref={mergedRef} {...props}/>
 * })
 * ```
 *
 * @param refA A Callback or mutable Ref
 * @param refB A Callback or mutable Ref
 * @category refs
 */

function useMergedRefs(refA, refB) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useMemo"])(function () {
    return mergeRefs(refA, refB);
  }, [refA, refB]);
}

/* harmony default export */ __webpack_exports__["a"] = (useMergedRefs);

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var settle = __webpack_require__(70);
var cookies = __webpack_require__(73);
var buildURL = __webpack_require__(40);
var buildFullPath = __webpack_require__(68);
var parseHeaders = __webpack_require__(78);
var isURLSameOrigin = __webpack_require__(76);
var createError = __webpack_require__(36);

module.exports = function xhrAdapter(config) {
  return new Promise(function dispatchXhrRequest(resolve, reject) {
    var requestData = config.data;
    var requestHeaders = config.headers;
    var responseType = config.responseType;

    if (utils.isFormData(requestData)) {
      delete requestHeaders['Content-Type']; // Let the browser set it
    }

    var request = new XMLHttpRequest();

    // HTTP basic authentication
    if (config.auth) {
      var username = config.auth.username || '';
      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    }

    var fullPath = buildFullPath(config.baseURL, config.url);
    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    // Set the request timeout in MS
    request.timeout = config.timeout;

    function onloadend() {
      if (!request) {
        return;
      }
      // Prepare the response
      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
        request.responseText : request.response;
      var response = {
        data: responseData,
        status: request.status,
        statusText: request.statusText,
        headers: responseHeaders,
        config: config,
        request: request
      };

      settle(resolve, reject, response);

      // Clean up request
      request = null;
    }

    if ('onloadend' in request) {
      // Use onloadend if available
      request.onloadend = onloadend;
    } else {
      // Listen for ready state to emulate onloadend
      request.onreadystatechange = function handleLoad() {
        if (!request || request.readyState !== 4) {
          return;
        }

        // The request errored out and we didn't get a response, this will be
        // handled by onerror instead
        // With one exception: request that using file: protocol, most browsers
        // will return status as 0 even though it's a successful request
        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
          return;
        }
        // readystate handler is calling before onerror or ontimeout handlers,
        // so we should call onloadend on the next 'tick'
        setTimeout(onloadend);
      };
    }

    // Handle browser request cancellation (as opposed to a manual cancellation)
    request.onabort = function handleAbort() {
      if (!request) {
        return;
      }

      reject(createError('Request aborted', config, 'ECONNABORTED', request));

      // Clean up request
      request = null;
    };

    // Handle low level network errors
    request.onerror = function handleError() {
      // Real errors are hidden from us by the browser
      // onerror should only fire if it's a network error
      reject(createError('Network Error', config, null, request));

      // Clean up request
      request = null;
    };

    // Handle timeout
    request.ontimeout = function handleTimeout() {
      var timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
      if (config.timeoutErrorMessage) {
        timeoutErrorMessage = config.timeoutErrorMessage;
      }
      reject(createError(
        timeoutErrorMessage,
        config,
        config.transitional && config.transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
        request));

      // Clean up request
      request = null;
    };

    // Add xsrf header
    // This is only done if running in a standard browser environment.
    // Specifically not if we're in a web worker, or react-native.
    if (utils.isStandardBrowserEnv()) {
      // Add xsrf header
      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
        cookies.read(config.xsrfCookieName) :
        undefined;

      if (xsrfValue) {
        requestHeaders[config.xsrfHeaderName] = xsrfValue;
      }
    }

    // Add headers to the request
    if ('setRequestHeader' in request) {
      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
          // Remove Content-Type if data is undefined
          delete requestHeaders[key];
        } else {
          // Otherwise add header to the request
          request.setRequestHeader(key, val);
        }
      });
    }

    // Add withCredentials to request if needed
    if (!utils.isUndefined(config.withCredentials)) {
      request.withCredentials = !!config.withCredentials;
    }

    // Add responseType to request if needed
    if (responseType && responseType !== 'json') {
      request.responseType = config.responseType;
    }

    // Handle progress if needed
    if (typeof config.onDownloadProgress === 'function') {
      request.addEventListener('progress', config.onDownloadProgress);
    }

    // Not all browsers support upload events
    if (typeof config.onUploadProgress === 'function' && request.upload) {
      request.upload.addEventListener('progress', config.onUploadProgress);
    }

    if (config.cancelToken) {
      // Handle cancellation
      config.cancelToken.promise.then(function onCanceled(cancel) {
        if (!request) {
          return;
        }

        request.abort();
        reject(cancel);
        // Clean up request
        request = null;
      });
    }

    if (!requestData) {
      requestData = null;
    }

    // Send the request
    request.send(requestData);
  });
};


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * A `Cancel` is an object that is thrown when an operation is canceled.
 *
 * @class
 * @param {string=} message The message.
 */
function Cancel(message) {
  this.message = message;
}

Cancel.prototype.toString = function toString() {
  return 'Cancel' + (this.message ? ': ' + this.message : '');
};

Cancel.prototype.__CANCEL__ = true;

module.exports = Cancel;


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function isCancel(value) {
  return !!(value && value.__CANCEL__);
};


/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var enhanceError = __webpack_require__(37);

/**
 * Create an Error with the specified message, config, error code, request and response.
 *
 * @param {string} message The error message.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The created error.
 */
module.exports = function createError(message, config, code, request, response) {
  var error = new Error(message);
  return enhanceError(error, config, code, request, response);
};


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Update an Error with the specified config, error code, and response.
 *
 * @param {Error} error The error to update.
 * @param {Object} config The config.
 * @param {string} [code] The error code (for example, 'ECONNABORTED').
 * @param {Object} [request] The request.
 * @param {Object} [response] The response.
 * @returns {Error} The error.
 */
module.exports = function enhanceError(error, config, code, request, response) {
  error.config = config;
  if (code) {
    error.code = code;
  }

  error.request = request;
  error.response = response;
  error.isAxiosError = true;

  error.toJSON = function toJSON() {
    return {
      // Standard
      message: this.message,
      name: this.name,
      // Microsoft
      description: this.description,
      number: this.number,
      // Mozilla
      fileName: this.fileName,
      lineNumber: this.lineNumber,
      columnNumber: this.columnNumber,
      stack: this.stack,
      // Axios
      config: this.config,
      code: this.code
    };
  };
  return error;
};


/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

/**
 * Config-specific merge-function which creates a new config-object
 * by merging two configuration objects together.
 *
 * @param {Object} config1
 * @param {Object} config2
 * @returns {Object} New object resulting from merging config2 to config1
 */
module.exports = function mergeConfig(config1, config2) {
  // eslint-disable-next-line no-param-reassign
  config2 = config2 || {};
  var config = {};

  var valueFromConfig2Keys = ['url', 'method', 'data'];
  var mergeDeepPropertiesKeys = ['headers', 'auth', 'proxy', 'params'];
  var defaultToConfig2Keys = [
    'baseURL', 'transformRequest', 'transformResponse', 'paramsSerializer',
    'timeout', 'timeoutMessage', 'withCredentials', 'adapter', 'responseType', 'xsrfCookieName',
    'xsrfHeaderName', 'onUploadProgress', 'onDownloadProgress', 'decompress',
    'maxContentLength', 'maxBodyLength', 'maxRedirects', 'transport', 'httpAgent',
    'httpsAgent', 'cancelToken', 'socketPath', 'responseEncoding'
  ];
  var directMergeKeys = ['validateStatus'];

  function getMergedValue(target, source) {
    if (utils.isPlainObject(target) && utils.isPlainObject(source)) {
      return utils.merge(target, source);
    } else if (utils.isPlainObject(source)) {
      return utils.merge({}, source);
    } else if (utils.isArray(source)) {
      return source.slice();
    }
    return source;
  }

  function mergeDeepProperties(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  }

  utils.forEach(valueFromConfig2Keys, function valueFromConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    }
  });

  utils.forEach(mergeDeepPropertiesKeys, mergeDeepProperties);

  utils.forEach(defaultToConfig2Keys, function defaultToConfig2(prop) {
    if (!utils.isUndefined(config2[prop])) {
      config[prop] = getMergedValue(undefined, config2[prop]);
    } else if (!utils.isUndefined(config1[prop])) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  utils.forEach(directMergeKeys, function merge(prop) {
    if (prop in config2) {
      config[prop] = getMergedValue(config1[prop], config2[prop]);
    } else if (prop in config1) {
      config[prop] = getMergedValue(undefined, config1[prop]);
    }
  });

  var axiosKeys = valueFromConfig2Keys
    .concat(mergeDeepPropertiesKeys)
    .concat(defaultToConfig2Keys)
    .concat(directMergeKeys);

  var otherKeys = Object
    .keys(config1)
    .concat(Object.keys(config2))
    .filter(function filterAxiosKeys(key) {
      return axiosKeys.indexOf(key) === -1;
    });

  utils.forEach(otherKeys, mergeDeepProperties);

  return config;
};


/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function bind(fn, thisArg) {
  return function wrap() {
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }
    return fn.apply(thisArg, args);
  };
};


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

function encode(val) {
  return encodeURIComponent(val).
    replace(/%3A/gi, ':').
    replace(/%24/g, '$').
    replace(/%2C/gi, ',').
    replace(/%20/g, '+').
    replace(/%5B/gi, '[').
    replace(/%5D/gi, ']');
}

/**
 * Build a URL by appending params to the end
 *
 * @param {string} url The base of the url (e.g., http://www.google.com)
 * @param {object} [params] The params to be appended
 * @returns {string} The formatted url
 */
module.exports = function buildURL(url, params, paramsSerializer) {
  /*eslint no-param-reassign:0*/
  if (!params) {
    return url;
  }

  var serializedParams;
  if (paramsSerializer) {
    serializedParams = paramsSerializer(params);
  } else if (utils.isURLSearchParams(params)) {
    serializedParams = params.toString();
  } else {
    var parts = [];

    utils.forEach(params, function serialize(val, key) {
      if (val === null || typeof val === 'undefined') {
        return;
      }

      if (utils.isArray(val)) {
        key = key + '[]';
      } else {
        val = [val];
      }

      utils.forEach(val, function parseValue(v) {
        if (utils.isDate(v)) {
          v = v.toISOString();
        } else if (utils.isObject(v)) {
          v = JSON.stringify(v);
        }
        parts.push(encode(key) + '=' + encode(v));
      });
    });

    serializedParams = parts.join('&');
  }

  if (serializedParams) {
    var hashmarkIndex = url.indexOf('#');
    if (hashmarkIndex !== -1) {
      url = url.slice(0, hashmarkIndex);
    }

    url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
  }

  return url;
};


/***/ }),
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getComputedStyle__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__hyphenateStyle__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__isTransform__ = __webpack_require__(214);




function style(node, property) {
  var css = '';
  var transforms = '';

  if (typeof property === 'string') {
    return node.style.getPropertyValue(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hyphenateStyle__["a" /* default */])(property)) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getComputedStyle__["a" /* default */])(node).getPropertyValue(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hyphenateStyle__["a" /* default */])(property));
  }

  Object.keys(property).forEach(function (key) {
    var value = property[key];

    if (!value && value !== 0) {
      node.style.removeProperty(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hyphenateStyle__["a" /* default */])(key));
    } else if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__isTransform__["a" /* default */])(key)) {
      transforms += key + "(" + value + ") ";
    } else {
      css += __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__hyphenateStyle__["a" /* default */])(key) + ": " + value + ";";
    }
  });

  if (transforms) {
    css += "transform: " + transforms + ";";
  }

  node.style.cssText += ";" + css;
}

/* harmony default export */ __webpack_exports__["a"] = (style);

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // TODO: check

var context = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null);
context.displayName = 'NavbarContext';
/* harmony default export */ __webpack_exports__["a"] = (context);

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getParentNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNodeName_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instanceOf_js__ = __webpack_require__(11);



function getParentNode(element) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getNodeName_js__["a" /* default */])(element) === 'html') {
    return element;
  }

  return (// this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    element.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    element.parentNode || ( // DOM Element detected
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__instanceOf_js__["b" /* isShadowRoot */])(element) ? element.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__["a" /* default */])(element) // fallback

  );
}

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (!!(typeof window !== 'undefined' && window.document && window.document.createElement));

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function(condition, format, a, b, c, d, e, f) {
  if (process.env.NODE_ENV !== 'production') {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error(
        'Minified exception occurred; use the non-minified dev environment ' +
        'for the full error message and additional helpful warnings.'
      );
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(
        format.replace(/%s/g, function() { return args[argIndex++]; })
      );
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = all;

var _createChainableTypeChecker = __webpack_require__(221);

var _createChainableTypeChecker2 = _interopRequireDefault(_createChainableTypeChecker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function all() {
  for (var _len = arguments.length, validators = Array(_len), _key = 0; _key < _len; _key++) {
    validators[_key] = arguments[_key];
  }

  function allPropTypes() {
    for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    var error = null;

    validators.forEach(function (validator) {
      if (error != null) {
        return;
      }

      var result = validator.apply(undefined, args);
      if (result != null) {
        error = result;
      }
    });

    return error;
  }

  return (0, _createChainableTypeChecker2.default)(allPropTypes);
}
module.exports = exports['default'];

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isRequiredForA11y;
function isRequiredForA11y(validator) {
  return function validate(props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      return new Error('The ' + location + ' `' + propFullNameSafe + '` is required to make ' + ('`' + componentNameSafe + '` accessible for users of assistive ') + 'technologies such as screen readers.');
    }

    for (var _len = arguments.length, args = Array(_len > 5 ? _len - 5 : 0), _key = 5; _key < _len; _key++) {
      args[_key - 5] = arguments[_key];
    }

    return validator.apply(undefined, [props, propName, componentName, location, propFullName].concat(args));
  };
}
module.exports = exports['default'];

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var context = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null);
context.displayName = 'AccordionContext';
/* harmony default export */ __webpack_exports__["a"] = (context);

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SafeAnchor__ = __webpack_require__(19);


var _excluded = ["bsPrefix", "variant", "size", "active", "className", "block", "type", "as"];




var defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false
};
var Button = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      size = _ref.size,
      active = _ref.active,
      className = _ref.className,
      block = _ref.block,
      type = _ref.type,
      as = _ref.as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'btn');
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefix, active && 'active', variant && prefix + "-" + variant, block && prefix + "-block", size && prefix + "-" + size);

  if (props.href) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__SafeAnchor__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
      as: as,
      ref: ref,
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(classes, props.disabled && 'disabled')
    }));
  }

  if (ref) {
    props.ref = ref;
  }

  if (type) {
    props.type = type;
  } else if (!as) {
    props.type = 'button';
  }

  var Component = as || 'button';
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    className: classes
  }));
});
Button.displayName = 'Button';
Button.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Button);

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_classnames__);


var _excluded = ["label", "onClick", "className"];



var propTypes = {
  label: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string.isRequired,
  onClick: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
var defaultProps = {
  label: 'Close'
};
var CloseButton = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var label = _ref.label,
      onClick = _ref.onClick,
      className = _ref.className,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("button", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    type: "button",
    className: __WEBPACK_IMPORTED_MODULE_4_classnames___default()('close', className),
    onClick: onClick
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
    className: "sr-only"
  }, label));
});
CloseButton.displayName = 'CloseButton';
CloseButton.propTypes = propTypes;
CloseButton.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CloseButton);

/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_overlays_Dropdown__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DropdownItem__ = __webpack_require__(239);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__DropdownMenu__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__DropdownToggle__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__SelectableContext__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__createWithBsPrefix__ = __webpack_require__(7);


var _excluded = ["bsPrefix", "drop", "show", "className", "alignRight", "onSelect", "onToggle", "focusFirstItemOnShow", "as", "navbar"];











var DropdownHeader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__createWithBsPrefix__["a" /* default */])('dropdown-header', {
  defaultProps: {
    role: 'heading'
  }
});
var DropdownDivider = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__createWithBsPrefix__["a" /* default */])('dropdown-divider', {
  defaultProps: {
    role: 'separator'
  }
});
var DropdownItemText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__createWithBsPrefix__["a" /* default */])('dropdown-item-text', {
  Component: 'span'
});
var defaultProps = {
  navbar: false
};
var Dropdown = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (pProps, ref) {
  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_uncontrollable__["a" /* useUncontrolled */])(pProps, {
    show: 'onToggle'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      drop = _useUncontrolled.drop,
      show = _useUncontrolled.show,
      className = _useUncontrolled.className,
      alignRight = _useUncontrolled.alignRight,
      onSelect = _useUncontrolled.onSelect,
      onToggle = _useUncontrolled.onToggle,
      focusFirstItemOnShow = _useUncontrolled.focusFirstItemOnShow,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      _4 = _useUncontrolled.navbar,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useUncontrolled, _excluded);

  var onSelectCtx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_10__SelectableContext__["b" /* default */]);
  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'dropdown');
  var handleToggle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__restart_hooks_useEventCallback__["a" /* default */])(function (nextShow, event, source) {
    if (source === void 0) {
      source = event.type;
    }

    if (event.currentTarget === document && (source !== 'keydown' || event.key === 'Escape')) source = 'rootClose';

    if (onToggle) {
      onToggle(nextShow, event, {
        source: source
      });
    }
  });
  var handleSelect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__restart_hooks_useEventCallback__["a" /* default */])(function (key, event) {
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
    handleToggle(false, event, 'select');
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__SelectableContext__["b" /* default */].Provider, {
    value: handleSelect
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_overlays_Dropdown__["a" /* default */], {
    drop: drop,
    show: show,
    alignEnd: alignRight,
    onToggle: handleToggle,
    focusFirstItemOnShow: focusFirstItemOnShow,
    itemSelector: "." + prefix + "-item:not(.disabled):not(:disabled)"
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, show && 'show', (!drop || drop === 'down') && prefix, drop === 'up' && 'dropup', drop === 'right' && 'dropright', drop === 'left' && 'dropleft')
  }))));
});
Dropdown.displayName = 'Dropdown';
Dropdown.defaultProps = defaultProps;
Dropdown.Divider = DropdownDivider;
Dropdown.Header = DropdownHeader;
Dropdown.Item = __WEBPACK_IMPORTED_MODULE_7__DropdownItem__["a" /* default */];
Dropdown.ItemText = DropdownItemText;
Dropdown.Menu = __WEBPACK_IMPORTED_MODULE_8__DropdownMenu__["b" /* default */];
Dropdown.Toggle = __WEBPACK_IMPORTED_MODULE_9__DropdownToggle__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),
/* 52 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return map; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return forEach; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Iterates through children that are typically specified as `props.children`,
 * but only maps over children that are "valid elements".
 *
 * The mapFunction provided index will be normalised to the components mapped,
 * so an invalid component would not increase the index.
 *
 */

function map(children, func) {
  var index = 0;
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.map(children, function (child) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child) ? func(child, index++) : child;
  });
}
/**
 * Iterates through children that are "valid elements".
 *
 * The provided forEachFunc(child, index) will be called for each
 * leaf child with the index reflecting the position relative to "valid components".
 */


function forEach(children, func) {
  var index = 0;
  __WEBPACK_IMPORTED_MODULE_0_react___default.a.Children.forEach(children, function (child) {
    if ( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.isValidElement(child)) func(child, index++);
  });
}



/***/ }),
/* 53 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SafeAnchor__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__AbstractNavItem__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "disabled", "className", "href", "eventKey", "onSelect", "as"];





var defaultProps = {
  disabled: false,
  as: __WEBPACK_IMPORTED_MODULE_4__SafeAnchor__["a" /* default */]
};
var NavLink = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      disabled = _ref.disabled,
      className = _ref.className,
      href = _ref.href,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      as = _ref.as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'nav-link');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__AbstractNavItem__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    href: href,
    ref: ref,
    eventKey: eventKey,
    as: as,
    disabled: disabled,
    onSelect: onSelect,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, disabled && 'disabled')
  }));
});
NavLink.displayName = 'NavLink';
NavLink.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (NavLink);

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getLayoutRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__ = __webpack_require__(28);
 // Returns the layout rect of an element relative to its offsetParent. Layout
// means it doesn't take into account transforms.

function getLayoutRect(element) {
  var clientRect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(element); // Use the clientRect sizes if it's not been transformed.
  // Fixes https://github.com/popperjs/popper-core/issues/1223

  var width = element.offsetWidth;
  var height = element.offsetHeight;

  if (Math.abs(clientRect.width - width) <= 1) {
    width = clientRect.width;
  }

  if (Math.abs(clientRect.height - height) <= 1) {
    height = clientRect.height;
  }

  return {
    x: element.offsetLeft,
    y: element.offsetTop,
    width: width,
    height: height
  };
}

/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWindowScroll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(14);

function getWindowScroll(node) {
  var win = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(node);
  var scrollLeft = win.pageXOffset;
  var scrollTop = win.pageYOffset;
  return {
    scrollLeft: scrollLeft,
    scrollTop: scrollTop
  };
}

/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getWindowScrollBarX;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindowScroll_js__ = __webpack_require__(55);



function getWindowScrollBarX(element) {
  // If <html> has a CSS width greater than the viewport, then this will be
  // incorrect for RTL.
  // Popper 1 is broken in this case and never had a bug report so let's assume
  // it's not an issue. I don't think anyone ever specifies width on <html>
  // anyway.
  // Browsers where the left scrollbar doesn't cause an issue report `0` for
  // this (e.g. Edge 2019, IE11, Safari)
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__["a" /* default */])(element)).left + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getWindowScroll_js__["a" /* default */])(element).scrollLeft;
}

/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isScrollParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getComputedStyle_js__ = __webpack_require__(23);

function isScrollParent(element) {
  // Firefox wants us to check `-x` and `-y` variations as well
  var _getComputedStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getComputedStyle_js__["a" /* default */])(element),
      overflow = _getComputedStyle.overflow,
      overflowX = _getComputedStyle.overflowX,
      overflowY = _getComputedStyle.overflowY;

  return /auto|scroll|overlay|hidden/.test(overflow + overflowY + overflowX);
}

/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getMainAxisFromPlacement;
function getMainAxisFromPlacement(placement) {
  return ['top', 'bottom'].indexOf(placement) >= 0 ? 'x' : 'y';
}

/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useCallbackRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * A convenience hook around `useState` designed to be paired with
 * the component [callback ref](https://reactjs.org/docs/refs-and-the-dom.html#callback-refs) api.
 * Callback refs are useful over `useRef()` when you need to respond to the ref being set
 * instead of lazily accessing it in an effect.
 *
 * ```ts
 * const [element, attachRef] = useCallbackRef<HTMLDivElement>()
 *
 * useEffect(() => {
 *   if (!element) return
 *
 *   const calendar = new FullCalendar.Calendar(element)
 *
 *   return () => {
 *     calendar.destroy()
 *   }
 * }, [element])
 *
 * return <div ref={attachRef} />
 * ```
 *
 * @category refs
 */

function useCallbackRef() {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useState"])(null);
}

/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useMounted;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Track whether a component is current mounted. Generally less preferable than
 * properlly canceling effects so they don't run after a component is unmounted,
 * but helpful in cases where that isn't feasible, such as a `Promise` resolution.
 *
 * @returns a function that returns the current isMounted state of the component
 *
 * ```ts
 * const [data, setData] = useState(null)
 * const isMounted = useMounted()
 *
 * useEffect(() => {
 *   fetchdata().then((newData) => {
 *      if (isMounted()) {
 *        setData(newData);
 *      }
 *   })
 * })
 * ```
 */

function useMounted() {
  var mounted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(true);
  var isMounted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(function () {
    return mounted.current;
  });
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    return function () {
      mounted.current = false;
    };
  }, []);
  return isMounted.current;
}

/***/ }),
/* 61 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useTimeout;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__useMounted__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__useWillUnmount__ = __webpack_require__(62);



/*
 * Browsers including Internet Explorer, Chrome, Safari, and Firefox store the
 * delay as a 32-bit signed integer internally. This causes an integer overflow
 * when using delays larger than 2,147,483,647 ms (about 24.8 days),
 * resulting in the timeout being executed immediately.
 *
 * via: https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setTimeout
 */

var MAX_DELAY_MS = Math.pow(2, 31) - 1;

function setChainedTimeout(handleRef, fn, timeoutAtMs) {
  var delayMs = timeoutAtMs - Date.now();
  handleRef.current = delayMs <= MAX_DELAY_MS ? setTimeout(fn, delayMs) : setTimeout(function () {
    return setChainedTimeout(handleRef, fn, timeoutAtMs);
  }, MAX_DELAY_MS);
}
/**
 * Returns a controller object for setting a timeout that is properly cleaned up
 * once the component unmounts. New timeouts cancel and replace existing ones.
 *
 *
 *
 * ```tsx
 * const { set, clear } = useTimeout();
 * const [hello, showHello] = useState(false);
 * //Display hello after 5 seconds
 * set(() => showHello(true), 5000);
 * return (
 *   <div className="App">
 *     {hello ? <h3>Hello</h3> : null}
 *   </div>
 * );
 * ```
 */


function useTimeout() {
  var isMounted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__useMounted__["a" /* default */])(); // types are confused between node and web here IDK

  var handleRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__useWillUnmount__["a" /* default */])(function () {
    return clearTimeout(handleRef.current);
  });
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useMemo"])(function () {
    var clear = function clear() {
      return clearTimeout(handleRef.current);
    };

    function set(fn, delayMs) {
      if (delayMs === void 0) {
        delayMs = 0;
      }

      if (!isMounted()) return;
      clear();

      if (delayMs <= MAX_DELAY_MS) {
        // For simplicity, if the timeout is short, just set a normal timeout.
        handleRef.current = setTimeout(fn, delayMs);
      } else {
        setChainedTimeout(handleRef, fn, Date.now() + delayMs);
      }
    }

    return {
      set: set,
      clear: clear
    };
  }, []);
}

/***/ }),
/* 62 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useWillUnmount;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__useUpdatedRef__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


/**
 * Attach a callback that fires when a component unmounts
 *
 * @param fn Handler to run when the component unmounts
 * @category effects
 */

function useWillUnmount(fn) {
  var onUnmount = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__useUpdatedRef__["a" /* default */])(fn);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useEffect"])(function () {
    return function () {
      return onUnmount.current();
    };
  }, []);
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(64);

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var bind = __webpack_require__(39);
var Axios = __webpack_require__(66);
var mergeConfig = __webpack_require__(38);
var defaults = __webpack_require__(22);

/**
 * Create an instance of Axios
 *
 * @param {Object} defaultConfig The default config for the instance
 * @return {Axios} A new instance of Axios
 */
function createInstance(defaultConfig) {
  var context = new Axios(defaultConfig);
  var instance = bind(Axios.prototype.request, context);

  // Copy axios.prototype to instance
  utils.extend(instance, Axios.prototype, context);

  // Copy context to instance
  utils.extend(instance, context);

  return instance;
}

// Create the default instance to be exported
var axios = createInstance(defaults);

// Expose Axios class to allow class inheritance
axios.Axios = Axios;

// Factory for creating new instances
axios.create = function create(instanceConfig) {
  return createInstance(mergeConfig(axios.defaults, instanceConfig));
};

// Expose Cancel & CancelToken
axios.Cancel = __webpack_require__(34);
axios.CancelToken = __webpack_require__(65);
axios.isCancel = __webpack_require__(35);

// Expose all/spread
axios.all = function all(promises) {
  return Promise.all(promises);
};
axios.spread = __webpack_require__(79);

// Expose isAxiosError
axios.isAxiosError = __webpack_require__(75);

module.exports = axios;

// Allow use of default import syntax in TypeScript
module.exports.default = axios;


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Cancel = __webpack_require__(34);

/**
 * A `CancelToken` is an object that can be used to request cancellation of an operation.
 *
 * @class
 * @param {Function} executor The executor function.
 */
function CancelToken(executor) {
  if (typeof executor !== 'function') {
    throw new TypeError('executor must be a function.');
  }

  var resolvePromise;
  this.promise = new Promise(function promiseExecutor(resolve) {
    resolvePromise = resolve;
  });

  var token = this;
  executor(function cancel(message) {
    if (token.reason) {
      // Cancellation has already been requested
      return;
    }

    token.reason = new Cancel(message);
    resolvePromise(token.reason);
  });
}

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
CancelToken.prototype.throwIfRequested = function throwIfRequested() {
  if (this.reason) {
    throw this.reason;
  }
};

/**
 * Returns an object that contains a new `CancelToken` and a function that, when called,
 * cancels the `CancelToken`.
 */
CancelToken.source = function source() {
  var cancel;
  var token = new CancelToken(function executor(c) {
    cancel = c;
  });
  return {
    token: token,
    cancel: cancel
  };
};

module.exports = CancelToken;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var buildURL = __webpack_require__(40);
var InterceptorManager = __webpack_require__(67);
var dispatchRequest = __webpack_require__(69);
var mergeConfig = __webpack_require__(38);
var validator = __webpack_require__(80);

var validators = validator.validators;
/**
 * Create a new instance of Axios
 *
 * @param {Object} instanceConfig The default config for the instance
 */
function Axios(instanceConfig) {
  this.defaults = instanceConfig;
  this.interceptors = {
    request: new InterceptorManager(),
    response: new InterceptorManager()
  };
}

/**
 * Dispatch a request
 *
 * @param {Object} config The config specific for this request (merged with this.defaults)
 */
Axios.prototype.request = function request(config) {
  /*eslint no-param-reassign:0*/
  // Allow for axios('example/url'[, config]) a la fetch API
  if (typeof config === 'string') {
    config = arguments[1] || {};
    config.url = arguments[0];
  } else {
    config = config || {};
  }

  config = mergeConfig(this.defaults, config);

  // Set config.method
  if (config.method) {
    config.method = config.method.toLowerCase();
  } else if (this.defaults.method) {
    config.method = this.defaults.method.toLowerCase();
  } else {
    config.method = 'get';
  }

  var transitional = config.transitional;

  if (transitional !== undefined) {
    validator.assertOptions(transitional, {
      silentJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      forcedJSONParsing: validators.transitional(validators.boolean, '1.0.0'),
      clarifyTimeoutError: validators.transitional(validators.boolean, '1.0.0')
    }, false);
  }

  // filter out skipped interceptors
  var requestInterceptorChain = [];
  var synchronousRequestInterceptors = true;
  this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
    if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
      return;
    }

    synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

    requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
  });

  var responseInterceptorChain = [];
  this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
    responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
  });

  var promise;

  if (!synchronousRequestInterceptors) {
    var chain = [dispatchRequest, undefined];

    Array.prototype.unshift.apply(chain, requestInterceptorChain);
    chain = chain.concat(responseInterceptorChain);

    promise = Promise.resolve(config);
    while (chain.length) {
      promise = promise.then(chain.shift(), chain.shift());
    }

    return promise;
  }


  var newConfig = config;
  while (requestInterceptorChain.length) {
    var onFulfilled = requestInterceptorChain.shift();
    var onRejected = requestInterceptorChain.shift();
    try {
      newConfig = onFulfilled(newConfig);
    } catch (error) {
      onRejected(error);
      break;
    }
  }

  try {
    promise = dispatchRequest(newConfig);
  } catch (error) {
    return Promise.reject(error);
  }

  while (responseInterceptorChain.length) {
    promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
  }

  return promise;
};

Axios.prototype.getUri = function getUri(config) {
  config = mergeConfig(this.defaults, config);
  return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
};

// Provide aliases for supported request methods
utils.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: (config || {}).data
    }));
  };
});

utils.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
  /*eslint func-names:0*/
  Axios.prototype[method] = function(url, data, config) {
    return this.request(mergeConfig(config || {}, {
      method: method,
      url: url,
      data: data
    }));
  };
});

module.exports = Axios;


/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

function InterceptorManager() {
  this.handlers = [];
}

/**
 * Add a new interceptor to the stack
 *
 * @param {Function} fulfilled The function to handle `then` for a `Promise`
 * @param {Function} rejected The function to handle `reject` for a `Promise`
 *
 * @return {Number} An ID used to remove interceptor later
 */
InterceptorManager.prototype.use = function use(fulfilled, rejected, options) {
  this.handlers.push({
    fulfilled: fulfilled,
    rejected: rejected,
    synchronous: options ? options.synchronous : false,
    runWhen: options ? options.runWhen : null
  });
  return this.handlers.length - 1;
};

/**
 * Remove an interceptor from the stack
 *
 * @param {Number} id The ID that was returned by `use`
 */
InterceptorManager.prototype.eject = function eject(id) {
  if (this.handlers[id]) {
    this.handlers[id] = null;
  }
};

/**
 * Iterate over all the registered interceptors
 *
 * This method is particularly useful for skipping over any
 * interceptors that may have become `null` calling `eject`.
 *
 * @param {Function} fn The function to call for each interceptor
 */
InterceptorManager.prototype.forEach = function forEach(fn) {
  utils.forEach(this.handlers, function forEachHandler(h) {
    if (h !== null) {
      fn(h);
    }
  });
};

module.exports = InterceptorManager;


/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isAbsoluteURL = __webpack_require__(74);
var combineURLs = __webpack_require__(72);

/**
 * Creates a new URL by combining the baseURL with the requestedURL,
 * only when the requestedURL is not already an absolute URL.
 * If the requestURL is absolute, this function returns the requestedURL untouched.
 *
 * @param {string} baseURL The base URL
 * @param {string} requestedURL Absolute or relative URL to combine
 * @returns {string} The combined full path
 */
module.exports = function buildFullPath(baseURL, requestedURL) {
  if (baseURL && !isAbsoluteURL(requestedURL)) {
    return combineURLs(baseURL, requestedURL);
  }
  return requestedURL;
};


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var transformData = __webpack_require__(71);
var isCancel = __webpack_require__(35);
var defaults = __webpack_require__(22);

/**
 * Throws a `Cancel` if cancellation has been requested.
 */
function throwIfCancellationRequested(config) {
  if (config.cancelToken) {
    config.cancelToken.throwIfRequested();
  }
}

/**
 * Dispatch a request to the server using the configured adapter.
 *
 * @param {object} config The config that is to be used for the request
 * @returns {Promise} The Promise to be fulfilled
 */
module.exports = function dispatchRequest(config) {
  throwIfCancellationRequested(config);

  // Ensure headers exist
  config.headers = config.headers || {};

  // Transform request data
  config.data = transformData.call(
    config,
    config.data,
    config.headers,
    config.transformRequest
  );

  // Flatten headers
  config.headers = utils.merge(
    config.headers.common || {},
    config.headers[config.method] || {},
    config.headers
  );

  utils.forEach(
    ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
    function cleanHeaderConfig(method) {
      delete config.headers[method];
    }
  );

  var adapter = config.adapter || defaults.adapter;

  return adapter(config).then(function onAdapterResolution(response) {
    throwIfCancellationRequested(config);

    // Transform response data
    response.data = transformData.call(
      config,
      response.data,
      response.headers,
      config.transformResponse
    );

    return response;
  }, function onAdapterRejection(reason) {
    if (!isCancel(reason)) {
      throwIfCancellationRequested(config);

      // Transform response data
      if (reason && reason.response) {
        reason.response.data = transformData.call(
          config,
          reason.response.data,
          reason.response.headers,
          config.transformResponse
        );
      }
    }

    return Promise.reject(reason);
  });
};


/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var createError = __webpack_require__(36);

/**
 * Resolve or reject a Promise based on response status.
 *
 * @param {Function} resolve A function that resolves the promise.
 * @param {Function} reject A function that rejects the promise.
 * @param {object} response The response.
 */
module.exports = function settle(resolve, reject, response) {
  var validateStatus = response.config.validateStatus;
  if (!response.status || !validateStatus || validateStatus(response.status)) {
    resolve(response);
  } else {
    reject(createError(
      'Request failed with status code ' + response.status,
      response.config,
      null,
      response.request,
      response
    ));
  }
};


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);
var defaults = __webpack_require__(22);

/**
 * Transform the data for a request or a response
 *
 * @param {Object|String} data The data to be transformed
 * @param {Array} headers The headers for the request or response
 * @param {Array|Function} fns A single function or Array of functions
 * @returns {*} The resulting transformed data
 */
module.exports = function transformData(data, headers, fns) {
  var context = this || defaults;
  /*eslint no-param-reassign:0*/
  utils.forEach(fns, function transform(fn) {
    data = fn.call(context, data, headers);
  });

  return data;
};


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Creates a new URL by combining the specified URLs
 *
 * @param {string} baseURL The base URL
 * @param {string} relativeURL The relative URL
 * @returns {string} The combined URL
 */
module.exports = function combineURLs(baseURL, relativeURL) {
  return relativeURL
    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    : baseURL;
};


/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs support document.cookie
    (function standardBrowserEnv() {
      return {
        write: function write(name, value, expires, path, domain, secure) {
          var cookie = [];
          cookie.push(name + '=' + encodeURIComponent(value));

          if (utils.isNumber(expires)) {
            cookie.push('expires=' + new Date(expires).toGMTString());
          }

          if (utils.isString(path)) {
            cookie.push('path=' + path);
          }

          if (utils.isString(domain)) {
            cookie.push('domain=' + domain);
          }

          if (secure === true) {
            cookie.push('secure');
          }

          document.cookie = cookie.join('; ');
        },

        read: function read(name) {
          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
          return (match ? decodeURIComponent(match[3]) : null);
        },

        remove: function remove(name) {
          this.write(name, '', Date.now() - 86400000);
        }
      };
    })() :

  // Non standard browser env (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return {
        write: function write() {},
        read: function read() { return null; },
        remove: function remove() {}
      };
    })()
);


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the specified URL is absolute
 *
 * @param {string} url The URL to test
 * @returns {boolean} True if the specified URL is absolute, otherwise false
 */
module.exports = function isAbsoluteURL(url) {
  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
  // by any combination of letters, digits, plus, period, or hyphen.
  return /^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(url);
};


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Determines whether the payload is an error thrown by Axios
 *
 * @param {*} payload The value to test
 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
 */
module.exports = function isAxiosError(payload) {
  return (typeof payload === 'object') && (payload.isAxiosError === true);
};


/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = (
  utils.isStandardBrowserEnv() ?

  // Standard browser envs have full support of the APIs needed to test
  // whether the request URL is of the same origin as current location.
    (function standardBrowserEnv() {
      var msie = /(msie|trident)/i.test(navigator.userAgent);
      var urlParsingNode = document.createElement('a');
      var originURL;

      /**
    * Parse a URL to discover it's components
    *
    * @param {String} url The URL to be parsed
    * @returns {Object}
    */
      function resolveURL(url) {
        var href = url;

        if (msie) {
        // IE needs attribute set twice to normalize properties
          urlParsingNode.setAttribute('href', href);
          href = urlParsingNode.href;
        }

        urlParsingNode.setAttribute('href', href);

        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
        return {
          href: urlParsingNode.href,
          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
          host: urlParsingNode.host,
          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
          hostname: urlParsingNode.hostname,
          port: urlParsingNode.port,
          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
            urlParsingNode.pathname :
            '/' + urlParsingNode.pathname
        };
      }

      originURL = resolveURL(window.location.href);

      /**
    * Determine if a URL shares the same origin as the current location
    *
    * @param {String} requestURL The URL to test
    * @returns {boolean} True if URL shares the same origin, otherwise false
    */
      return function isURLSameOrigin(requestURL) {
        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
        return (parsed.protocol === originURL.protocol &&
            parsed.host === originURL.host);
      };
    })() :

  // Non standard browser envs (web workers, react-native) lack needed support.
    (function nonStandardBrowserEnv() {
      return function isURLSameOrigin() {
        return true;
      };
    })()
);


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

module.exports = function normalizeHeaderName(headers, normalizedName) {
  utils.forEach(headers, function processHeader(value, name) {
    if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
      headers[normalizedName] = value;
      delete headers[name];
    }
  });
};


/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var utils = __webpack_require__(5);

// Headers whose duplicates are ignored by node
// c.f. https://nodejs.org/api/http.html#http_message_headers
var ignoreDuplicateOf = [
  'age', 'authorization', 'content-length', 'content-type', 'etag',
  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
  'referer', 'retry-after', 'user-agent'
];

/**
 * Parse headers into an object
 *
 * ```
 * Date: Wed, 27 Aug 2014 08:58:49 GMT
 * Content-Type: application/json
 * Connection: keep-alive
 * Transfer-Encoding: chunked
 * ```
 *
 * @param {String} headers Headers needing to be parsed
 * @returns {Object} Headers parsed into an object
 */
module.exports = function parseHeaders(headers) {
  var parsed = {};
  var key;
  var val;
  var i;

  if (!headers) { return parsed; }

  utils.forEach(headers.split('\n'), function parser(line) {
    i = line.indexOf(':');
    key = utils.trim(line.substr(0, i)).toLowerCase();
    val = utils.trim(line.substr(i + 1));

    if (key) {
      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
        return;
      }
      if (key === 'set-cookie') {
        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
      } else {
        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
      }
    }
  });

  return parsed;
};


/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Syntactic sugar for invoking a function and expanding an array for arguments.
 *
 * Common use case would be to use `Function.prototype.apply`.
 *
 *  ```js
 *  function f(x, y, z) {}
 *  var args = [1, 2, 3];
 *  f.apply(null, args);
 *  ```
 *
 * With `spread` this example can be re-written.
 *
 *  ```js
 *  spread(function(x, y, z) {})([1, 2, 3]);
 *  ```
 *
 * @param {Function} callback
 * @returns {Function}
 */
module.exports = function spread(callback) {
  return function wrap(arr) {
    return callback.apply(null, arr);
  };
};


/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var pkg = __webpack_require__(81);

var validators = {};

// eslint-disable-next-line func-names
['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
  validators[type] = function validator(thing) {
    return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
  };
});

var deprecatedWarnings = {};
var currentVerArr = pkg.version.split('.');

/**
 * Compare package versions
 * @param {string} version
 * @param {string?} thanVersion
 * @returns {boolean}
 */
function isOlderVersion(version, thanVersion) {
  var pkgVersionArr = thanVersion ? thanVersion.split('.') : currentVerArr;
  var destVer = version.split('.');
  for (var i = 0; i < 3; i++) {
    if (pkgVersionArr[i] > destVer[i]) {
      return true;
    } else if (pkgVersionArr[i] < destVer[i]) {
      return false;
    }
  }
  return false;
}

/**
 * Transitional option validator
 * @param {function|boolean?} validator
 * @param {string?} version
 * @param {string} message
 * @returns {function}
 */
validators.transitional = function transitional(validator, version, message) {
  var isDeprecated = version && isOlderVersion(version);

  function formatMessage(opt, desc) {
    return '[Axios v' + pkg.version + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
  }

  // eslint-disable-next-line func-names
  return function(value, opt, opts) {
    if (validator === false) {
      throw new Error(formatMessage(opt, ' has been removed in ' + version));
    }

    if (isDeprecated && !deprecatedWarnings[opt]) {
      deprecatedWarnings[opt] = true;
      // eslint-disable-next-line no-console
      console.warn(
        formatMessage(
          opt,
          ' has been deprecated since v' + version + ' and will be removed in the near future'
        )
      );
    }

    return validator ? validator(value, opt, opts) : true;
  };
};

/**
 * Assert object's properties type
 * @param {object} options
 * @param {object} schema
 * @param {boolean?} allowUnknown
 */

function assertOptions(options, schema, allowUnknown) {
  if (typeof options !== 'object') {
    throw new TypeError('options must be an object');
  }
  var keys = Object.keys(options);
  var i = keys.length;
  while (i-- > 0) {
    var opt = keys[i];
    var validator = schema[opt];
    if (validator) {
      var value = options[opt];
      var result = value === undefined || validator(value, opt, options);
      if (result !== true) {
        throw new TypeError('option ' + opt + ' must be ' + result);
      }
      continue;
    }
    if (allowUnknown !== true) {
      throw Error('Unknown option ' + opt);
    }
  }
}

module.exports = {
  isOlderVersion: isOlderVersion,
  assertOptions: assertOptions,
  validators: validators
};


/***/ }),
/* 81 */
/***/ (function(module, exports) {

module.exports = {"_args":[[{"raw":"axios@^0.21.0","scope":null,"escapedName":"axios","name":"axios","rawSpec":"^0.21.0","spec":">=0.21.0 <0.22.0","type":"range"},"C:\\code\\sessionIntro"]],"_from":"axios@>=0.21.0 <0.22.0","_hasShrinkwrap":false,"_id":"axios@0.21.4","_inCache":true,"_location":"/axios","_nodeVersion":"12.21.0","_npmOperationalInternal":{"host":"s3://npm-registry-packages","tmp":"tmp/axios_0.21.4_1630942542911_0.9205474689335591"},"_npmUser":{"name":"jasonsaayman","email":"jasonsaayman@gmail.com"},"_npmVersion":"7.20.3","_phantomChildren":{},"_requested":{"raw":"axios@^0.21.0","scope":null,"escapedName":"axios","name":"axios","rawSpec":"^0.21.0","spec":">=0.21.0 <0.22.0","type":"range"},"_requiredBy":["/"],"_resolved":"https://registry.npmjs.org/axios/-/axios-0.21.4.tgz","_shasum":"c67b90dc0568e5c1cf2b0b858c43ba28e2eda575","_shrinkwrap":null,"_spec":"axios@^0.21.0","_where":"C:\\code\\sessionIntro","author":{"name":"Matt Zabriskie"},"browser":{"./lib/adapters/http.js":"./lib/adapters/xhr.js"},"bugs":{"url":"https://github.com/axios/axios/issues"},"bundlesize":[{"path":"./dist/axios.min.js","threshold":"5kB"}],"dependencies":{"follow-redirects":"^1.14.0"},"description":"Promise based HTTP client for the browser and node.js","devDependencies":{"coveralls":"^3.0.0","es6-promise":"^4.2.4","grunt":"^1.3.0","grunt-banner":"^0.6.0","grunt-cli":"^1.2.0","grunt-contrib-clean":"^1.1.0","grunt-contrib-watch":"^1.0.0","grunt-eslint":"^23.0.0","grunt-karma":"^4.0.0","grunt-mocha-test":"^0.13.3","grunt-ts":"^6.0.0-beta.19","grunt-webpack":"^4.0.2","istanbul-instrumenter-loader":"^1.0.0","jasmine-core":"^2.4.1","karma":"^6.3.2","karma-chrome-launcher":"^3.1.0","karma-firefox-launcher":"^2.1.0","karma-jasmine":"^1.1.1","karma-jasmine-ajax":"^0.1.13","karma-safari-launcher":"^1.0.0","karma-sauce-launcher":"^4.3.6","karma-sinon":"^1.0.5","karma-sourcemap-loader":"^0.3.8","karma-webpack":"^4.0.2","load-grunt-tasks":"^3.5.2","minimist":"^1.2.0","mocha":"^8.2.1","sinon":"^4.5.0","terser-webpack-plugin":"^4.2.3","typescript":"^4.0.5","url-search-params":"^0.10.0","webpack":"^4.44.2","webpack-dev-server":"^3.11.0"},"directories":{},"dist":{"integrity":"sha512-ut5vewkiu8jjGBdqpM44XxjuCjq9LAKeHVmoVfHVzy8eHgxxq8SbAVQNovDA8mVi05kP0Ea/n/UzcSHcTJQfNg==","shasum":"c67b90dc0568e5c1cf2b0b858c43ba28e2eda575","tarball":"https://registry.npmjs.org/axios/-/axios-0.21.4.tgz","fileCount":44,"unpackedSize":375349,"npm-signature":"-----BEGIN PGP SIGNATURE-----\r\nVersion: OpenPGP.js v3.0.13\r\nComment: https://openpgpjs.org\r\n\r\nwsFcBAEBCAAQBQJhNjVPCRA9TVsSAnZWagAA0foP/3y+vPMPeoBU5dw1GOw+\npuX9t90nj+UaF116uDtZy1nmLl3CI+75T40P6OfbRq8AqTtIZ3GAb1hgFWDD\njftxo/P6kNlQrokmw5Nlpz3orM2Pobmk/TW56vd4CknIBw8PlBW+JQHZpPfY\nKjCg2rCv3XGqcFX8FGxE9sagkaMmomAZSNhw+86IsqWn4PYwL52prAVK1TNF\nBGoJgQCQ7Gh0XGa50SINUuVfnZ/SpYLGMFV+vlZGqVSOCS+Al/SshpldSA0A\nhCf7YUcLgqcej+l+EHFLFqO6iq78VayCTjqgSDM6USC8a17zfAaq/0bJdEht\nM1e3OhtcnUyDC00I5PPGv1PW3N1J8eptu6QyREsPoHRUqVGX0u1eHTB3Mbr2\n8VLwYal453QJ9FN7pW24U7ZCJy953gtJ99DY0KIXcl22+U1X0pNlzYhoghUh\nBpajCP2kDps7SmcRQ0oGCefebuTT+czP7lAzHtF5tAg0FFtMt6X5I8bQahL4\n/22ITU9SdY1+SZRj+oWrj7CJAfjODRd9VmAMbwxgTnStzeWLvU/Cwc1l6euZ\nPh2TnA3smLJ4McjaP9Mj7PAXxGVhmwoMLnAcqpu01L7Dy2C8SdZ+lgy/+1Mz\ncYW4OibWQjCM8/eGmFGS82R2Tg20Mx+aZ09YQo1mjYxZ3SvTmlVh1Ee7Xvc2\nPkX7\r\n=rPmy\r\n-----END PGP SIGNATURE-----\r\n","signatures":[{"keyid":"SHA256:jl3bwswu80PjjokCgh0o2w5c2U4LhQAE57gj9cz1kzA","sig":"MEUCIGkkAJ1lvuGlmUhSCUk69Ot9u/hhH8bBd+7yA7cyaIIAAiEA2hD60EdaF6ud13eUjHo/zRR0MdZ8boETX3PqRwsrwZU="}]},"gitHead":"84f009d862e06ef7339f0d45da061a15749ddfee","homepage":"https://axios-http.com","jsdelivr":"dist/axios.min.js","keywords":["xhr","http","ajax","promise","node"],"license":"MIT","main":"index.js","maintainers":[{"name":"mzabriskie","email":"mzabriskie@gmail.com"},{"name":"nickuraltsev","email":"nick.uraltsev@gmail.com"},{"name":"emilyemorehouse","email":"emilyemorehouse@gmail.com"},{"name":"jasonsaayman","email":"jasonsaayman@gmail.com"}],"name":"axios","optionalDependencies":{},"readme":"ERROR: No README data found!","repository":{"type":"git","url":"git+https://github.com/axios/axios.git"},"scripts":{"build":"NODE_ENV=production grunt build","coveralls":"cat coverage/lcov.info | ./node_modules/coveralls/bin/coveralls.js","examples":"node ./examples/server.js","fix":"eslint --fix lib/**/*.js","postversion":"git push && git push --tags","preversion":"npm test","start":"node ./sandbox/server.js","test":"grunt test","version":"npm run build && grunt version && git add -A dist && git add CHANGELOG.md bower.json package.json"},"typings":"./index.d.ts","unpkg":"dist/axios.min.js","version":"0.21.4"}

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var token = '%[a-f0-9]{2}';
var singleMatcher = new RegExp(token, 'gi');
var multiMatcher = new RegExp('(' + token + ')+', 'gi');

function decodeComponents(components, split) {
	try {
		// Try to decode the entire string first
		return decodeURIComponent(components.join(''));
	} catch (err) {
		// Do nothing
	}

	if (components.length === 1) {
		return components;
	}

	split = split || 1;

	// Split the array in 2 parts
	var left = components.slice(0, split);
	var right = components.slice(split);

	return Array.prototype.concat.call([], decodeComponents(left), decodeComponents(right));
}

function decode(input) {
	try {
		return decodeURIComponent(input);
	} catch (err) {
		var tokens = input.match(singleMatcher);

		for (var i = 1; i < tokens.length; i++) {
			input = decodeComponents(tokens, i).join('');

			tokens = input.match(singleMatcher);
		}

		return input;
	}
}

function customDecodeURIComponent(input) {
	// Keep track of all the replacements and prefill the map with the `BOM`
	var replaceMap = {
		'%FE%FF': '\uFFFD\uFFFD',
		'%FF%FE': '\uFFFD\uFFFD'
	};

	var match = multiMatcher.exec(input);
	while (match) {
		try {
			// Decode as big chunks as possible
			replaceMap[match[0]] = decodeURIComponent(match[0]);
		} catch (err) {
			var result = decode(match[0]);

			if (result !== match[0]) {
				replaceMap[match[0]] = result;
			}
		}

		match = multiMatcher.exec(input);
	}

	// Add `%C2` at the end of the map to make sure it does not replace the combinator before everything else
	replaceMap['%C2'] = '\uFFFD';

	var entries = Object.keys(replaceMap);

	for (var i = 0; i < entries.length; i++) {
		// Replace all decoded components
		var key = entries[i];
		input = input.replace(new RegExp(key, 'g'), replaceMap[key]);
	}

	return input;
}

module.exports = function (encodedURI) {
	if (typeof encodedURI !== 'string') {
		throw new TypeError('Expected `encodedURI` to be of type `string`, got `' + typeof encodedURI + '`');
	}

	try {
		encodedURI = encodedURI.replace(/\+/g, ' ');

		// Try the built in decoder first
		return decodeURIComponent(encodedURI);
	} catch (err) {
		// Fallback to a more advanced decoder
		return customDecodeURIComponent(encodedURI);
	}
};


/***/ }),
/* 83 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export optionsSupported */
/* unused harmony export onceSupported */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canUseDOM__ = __webpack_require__(44);
/* eslint-disable no-return-assign */

var optionsSupported = false;
var onceSupported = false;

try {
  var options = {
    get passive() {
      return optionsSupported = true;
    },

    get once() {
      // eslint-disable-next-line no-multi-assign
      return onceSupported = optionsSupported = true;
    }

  };

  if (__WEBPACK_IMPORTED_MODULE_0__canUseDOM__["a" /* default */]) {
    window.addEventListener('test', options, options);
    window.removeEventListener('test', options, true);
  }
} catch (e) {
  /* */
}

/**
 * An `addEventListener` ponyfill, supports the `once` option
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function addEventListener(node, eventName, handler, options) {
  if (options && typeof options !== 'boolean' && !onceSupported) {
    var once = options.once,
        capture = options.capture;
    var wrappedHandler = handler;

    if (!onceSupported && once) {
      wrappedHandler = handler.__once || function onceHandler(event) {
        this.removeEventListener(eventName, onceHandler, capture);
        handler.call(this, event);
      };

      handler.__once = wrappedHandler;
    }

    node.addEventListener(eventName, wrappedHandler, optionsSupported ? options : capture);
  }

  node.addEventListener(eventName, handler, options);
}

/* harmony default export */ __webpack_exports__["a"] = (addEventListener);

/***/ }),
/* 84 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contains;
/* eslint-disable no-bitwise, no-cond-assign */

/**
 * Checks if an element contains another given element.
 * 
 * @param context the context element
 * @param node the element to check
 */
function contains(context, node) {
  // HTML DOM and SVG DOM may have different support levels,
  // so we need to check on context instead of a document root element.
  if (context.contains) return context.contains(node);
  if (context.compareDocumentPosition) return context === node || !!(context.compareDocumentPosition(node) & 16);
}

/***/ }),
/* 85 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__addEventListener__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__removeEventListener__ = __webpack_require__(124);



function listen(node, eventName, handler, options) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__addEventListener__["a" /* default */])(node, eventName, handler, options);
  return function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__removeEventListener__["a" /* default */])(node, eventName, handler, options);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (listen);

/***/ }),
/* 86 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = qsa;
var toArray = Function.prototype.bind.call(Function.prototype.call, [].slice);
/**
 * Runs `querySelectorAll` on a given element.
 * 
 * @param element the element
 * @param selector the selector
 */

function qsa(element, selector) {
  return toArray(element.querySelectorAll(selector));
}

/***/ }),
/* 87 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = scrollbarSize;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__canUseDOM__ = __webpack_require__(44);

var size;
function scrollbarSize(recalc) {
  if (!size && size !== 0 || recalc) {
    if (__WEBPACK_IMPORTED_MODULE_0__canUseDOM__["a" /* default */]) {
      var scrollDiv = document.createElement('div');
      scrollDiv.style.position = 'absolute';
      scrollDiv.style.top = '-9999px';
      scrollDiv.style.width = '50px';
      scrollDiv.style.height = '50px';
      scrollDiv.style.overflow = 'scroll';
      document.body.appendChild(scrollDiv);
      size = scrollDiv.offsetWidth - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
    }
  }

  return size;
}

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = function (obj, predicate) {
	var ret = {};
	var keys = Object.keys(obj);
	var isArr = Array.isArray(predicate);

	for (var i = 0; i < keys.length; i++) {
		var key = keys[i];
		var val = obj[key];

		if (isArr ? predicate.indexOf(key) !== -1 : predicate(key, val, obj)) {
			ret[key] = val;
		}
	}

	return ret;
};


/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

const strictUriEncode = __webpack_require__(110);
const decodeComponent = __webpack_require__(82);
const splitOnFirst = __webpack_require__(109);
const filterObject = __webpack_require__(88);

const isNullOrUndefined = value => value === null || value === undefined;

function encoderForArrayFormat(options) {
	switch (options.arrayFormat) {
		case 'index':
			return key => (result, value) => {
				const index = result.length;

				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[', index, ']'].join('')];
				}

				return [
					...result,
					[encode(key, options), '[', encode(index, options), ']=', encode(value, options)].join('')
				];
			};

		case 'bracket':
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, [encode(key, options), '[]'].join('')];
				}

				return [...result, [encode(key, options), '[]=', encode(value, options)].join('')];
			};

		case 'comma':
		case 'separator':
			return key => (result, value) => {
				if (value === null || value === undefined || value.length === 0) {
					return result;
				}

				if (result.length === 0) {
					return [[encode(key, options), '=', encode(value, options)].join('')];
				}

				return [[result, encode(value, options)].join(options.arrayFormatSeparator)];
			};

		default:
			return key => (result, value) => {
				if (
					value === undefined ||
					(options.skipNull && value === null) ||
					(options.skipEmptyString && value === '')
				) {
					return result;
				}

				if (value === null) {
					return [...result, encode(key, options)];
				}

				return [...result, [encode(key, options), '=', encode(value, options)].join('')];
			};
	}
}

function parserForArrayFormat(options) {
	let result;

	switch (options.arrayFormat) {
		case 'index':
			return (key, value, accumulator) => {
				result = /\[(\d*)\]$/.exec(key);

				key = key.replace(/\[\d*\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = {};
				}

				accumulator[key][result[1]] = value;
			};

		case 'bracket':
			return (key, value, accumulator) => {
				result = /(\[\])$/.exec(key);
				key = key.replace(/\[\]$/, '');

				if (!result) {
					accumulator[key] = value;
					return;
				}

				if (accumulator[key] === undefined) {
					accumulator[key] = [value];
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};

		case 'comma':
		case 'separator':
			return (key, value, accumulator) => {
				const isArray = typeof value === 'string' && value.includes(options.arrayFormatSeparator);
				const isEncodedArray = (typeof value === 'string' && !isArray && decode(value, options).includes(options.arrayFormatSeparator));
				value = isEncodedArray ? decode(value, options) : value;
				const newValue = isArray || isEncodedArray ? value.split(options.arrayFormatSeparator).map(item => decode(item, options)) : value === null ? value : decode(value, options);
				accumulator[key] = newValue;
			};

		default:
			return (key, value, accumulator) => {
				if (accumulator[key] === undefined) {
					accumulator[key] = value;
					return;
				}

				accumulator[key] = [].concat(accumulator[key], value);
			};
	}
}

function validateArrayFormatSeparator(value) {
	if (typeof value !== 'string' || value.length !== 1) {
		throw new TypeError('arrayFormatSeparator must be single character string');
	}
}

function encode(value, options) {
	if (options.encode) {
		return options.strict ? strictUriEncode(value) : encodeURIComponent(value);
	}

	return value;
}

function decode(value, options) {
	if (options.decode) {
		return decodeComponent(value);
	}

	return value;
}

function keysSorter(input) {
	if (Array.isArray(input)) {
		return input.sort();
	}

	if (typeof input === 'object') {
		return keysSorter(Object.keys(input))
			.sort((a, b) => Number(a) - Number(b))
			.map(key => input[key]);
	}

	return input;
}

function removeHash(input) {
	const hashStart = input.indexOf('#');
	if (hashStart !== -1) {
		input = input.slice(0, hashStart);
	}

	return input;
}

function getHash(url) {
	let hash = '';
	const hashStart = url.indexOf('#');
	if (hashStart !== -1) {
		hash = url.slice(hashStart);
	}

	return hash;
}

function extract(input) {
	input = removeHash(input);
	const queryStart = input.indexOf('?');
	if (queryStart === -1) {
		return '';
	}

	return input.slice(queryStart + 1);
}

function parseValue(value, options) {
	if (options.parseNumbers && !Number.isNaN(Number(value)) && (typeof value === 'string' && value.trim() !== '')) {
		value = Number(value);
	} else if (options.parseBooleans && value !== null && (value.toLowerCase() === 'true' || value.toLowerCase() === 'false')) {
		value = value.toLowerCase() === 'true';
	}

	return value;
}

function parse(query, options) {
	options = Object.assign({
		decode: true,
		sort: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ',',
		parseNumbers: false,
		parseBooleans: false
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const formatter = parserForArrayFormat(options);

	// Create an object with no prototype
	const ret = Object.create(null);

	if (typeof query !== 'string') {
		return ret;
	}

	query = query.trim().replace(/^[?#&]/, '');

	if (!query) {
		return ret;
	}

	for (const param of query.split('&')) {
		if (param === '') {
			continue;
		}

		let [key, value] = splitOnFirst(options.decode ? param.replace(/\+/g, ' ') : param, '=');

		// Missing `=` should be `null`:
		// http://w3.org/TR/2012/WD-url-20120524/#collect-url-parameters
		value = value === undefined ? null : ['comma', 'separator'].includes(options.arrayFormat) ? value : decode(value, options);
		formatter(decode(key, options), value, ret);
	}

	for (const key of Object.keys(ret)) {
		const value = ret[key];
		if (typeof value === 'object' && value !== null) {
			for (const k of Object.keys(value)) {
				value[k] = parseValue(value[k], options);
			}
		} else {
			ret[key] = parseValue(value, options);
		}
	}

	if (options.sort === false) {
		return ret;
	}

	return (options.sort === true ? Object.keys(ret).sort() : Object.keys(ret).sort(options.sort)).reduce((result, key) => {
		const value = ret[key];
		if (Boolean(value) && typeof value === 'object' && !Array.isArray(value)) {
			// Sort object keys, not values
			result[key] = keysSorter(value);
		} else {
			result[key] = value;
		}

		return result;
	}, Object.create(null));
}

exports.extract = extract;
exports.parse = parse;

exports.stringify = (object, options) => {
	if (!object) {
		return '';
	}

	options = Object.assign({
		encode: true,
		strict: true,
		arrayFormat: 'none',
		arrayFormatSeparator: ','
	}, options);

	validateArrayFormatSeparator(options.arrayFormatSeparator);

	const shouldFilter = key => (
		(options.skipNull && isNullOrUndefined(object[key])) ||
		(options.skipEmptyString && object[key] === '')
	);

	const formatter = encoderForArrayFormat(options);

	const objectCopy = {};

	for (const key of Object.keys(object)) {
		if (!shouldFilter(key)) {
			objectCopy[key] = object[key];
		}
	}

	const keys = Object.keys(objectCopy);

	if (options.sort !== false) {
		keys.sort(options.sort);
	}

	return keys.map(key => {
		const value = object[key];

		if (value === undefined) {
			return '';
		}

		if (value === null) {
			return encode(key, options);
		}

		if (Array.isArray(value)) {
			return value
				.reduce(formatter(key), [])
				.join('&');
		}

		return encode(key, options) + '=' + encode(value, options);
	}).filter(x => x.length > 0).join('&');
};

exports.parseUrl = (url, options) => {
	options = Object.assign({
		decode: true
	}, options);

	const [url_, hash] = splitOnFirst(url, '#');

	return Object.assign(
		{
			url: url_.split('?')[0] || '',
			query: parse(extract(url), options)
		},
		options && options.parseFragmentIdentifier && hash ? {fragmentIdentifier: decode(hash, options)} : {}
	);
};

exports.stringifyUrl = (object, options) => {
	options = Object.assign({
		encode: true,
		strict: true
	}, options);

	const url = removeHash(object.url).split('?')[0] || '';
	const queryFromUrl = exports.extract(object.url);
	const parsedQueryFromUrl = exports.parse(queryFromUrl, {sort: false});

	const query = Object.assign(parsedQueryFromUrl, object.query);
	let queryString = exports.stringify(query, options);
	if (queryString) {
		queryString = `?${queryString}`;
	}

	let hash = getHash(object.url);
	if (object.fragmentIdentifier) {
		hash = `#${encode(object.fragmentIdentifier, options)}`;
	}

	return `${url}${queryString}${hash}`;
};

exports.pick = (input, filter, options) => {
	options = Object.assign({
		parseFragmentIdentifier: true
	}, options);

	const {url, query, fragmentIdentifier} = exports.parseUrl(input, options);
	return exports.stringifyUrl({
		url,
		query: filterObject(query, filter),
		fragmentIdentifier
	}, options);
};

exports.exclude = (input, filter, options) => {
	const exclusionFilter = Array.isArray(filter) ? key => !filter.includes(key) : (key, value) => !filter(key, value);

	return exports.pick(input, exclusionFilter, options);
};


/***/ }),
/* 91 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "size", "toggle", "vertical", "className", "as"];



var defaultProps = {
  vertical: false,
  toggle: false,
  role: 'group'
};
var ButtonGroup = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      toggle = _ref.toggle,
      vertical = _ref.vertical,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'btn-group');
  var baseClass = prefix;
  if (vertical) baseClass = prefix + "-vertical";
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, rest, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, baseClass, size && prefix + "-" + size, toggle && prefix + "-toggle")
  }));
});
ButtonGroup.displayName = 'ButtonGroup';
ButtonGroup.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ButtonGroup);

/***/ }),
/* 92 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dom_helpers_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_transition_group_Transition__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__transitionEndListener__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__createChainedFunction__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__triggerBrowserReflow__ = __webpack_require__(105);


var _excluded = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "className", "children", "dimension", "getDimensionValue"];

var _collapseStyles;








var MARGINS = {
  height: ['marginTop', 'marginBottom'],
  width: ['marginLeft', 'marginRight']
};

function getDefaultDimensionValue(dimension, elem) {
  var offset = "offset" + dimension[0].toUpperCase() + dimension.slice(1);
  var value = elem[offset];
  var margins = MARGINS[dimension];
  return value + // @ts-ignore
  parseInt(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_dom_helpers_css__["a" /* default */])(elem, margins[0]), 10) + // @ts-ignore
  parseInt(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_dom_helpers_css__["a" /* default */])(elem, margins[1]), 10);
}

var collapseStyles = (_collapseStyles = {}, _collapseStyles[__WEBPACK_IMPORTED_MODULE_5_react_transition_group_Transition__["d" /* EXITED */]] = 'collapse', _collapseStyles[__WEBPACK_IMPORTED_MODULE_5_react_transition_group_Transition__["e" /* EXITING */]] = 'collapsing', _collapseStyles[__WEBPACK_IMPORTED_MODULE_5_react_transition_group_Transition__["a" /* ENTERING */]] = 'collapsing', _collapseStyles[__WEBPACK_IMPORTED_MODULE_5_react_transition_group_Transition__["b" /* ENTERED */]] = 'collapse show', _collapseStyles);
var defaultProps = {
  in: false,
  timeout: 300,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  getDimensionValue: getDefaultDimensionValue
};
var Collapse = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.forwardRef(function (_ref, ref) {
  var onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      className = _ref.className,
      children = _ref.children,
      _ref$dimension = _ref.dimension,
      dimension = _ref$dimension === void 0 ? 'height' : _ref$dimension,
      _ref$getDimensionValu = _ref.getDimensionValue,
      getDimensionValue = _ref$getDimensionValu === void 0 ? getDefaultDimensionValue : _ref$getDimensionValu,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  /* Compute dimension */
  var computedDimension = typeof dimension === 'function' ? dimension() : dimension;
  /* -- Expanding -- */

  var handleEnter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useMemo"])(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__createChainedFunction__["a" /* default */])(function (elem) {
      elem.style[computedDimension] = '0';
    }, onEnter);
  }, [computedDimension, onEnter]);
  var handleEntering = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useMemo"])(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__createChainedFunction__["a" /* default */])(function (elem) {
      var scroll = "scroll" + computedDimension[0].toUpperCase() + computedDimension.slice(1);
      elem.style[computedDimension] = elem[scroll] + "px";
    }, onEntering);
  }, [computedDimension, onEntering]);
  var handleEntered = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useMemo"])(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__createChainedFunction__["a" /* default */])(function (elem) {
      elem.style[computedDimension] = null;
    }, onEntered);
  }, [computedDimension, onEntered]);
  /* -- Collapsing -- */

  var handleExit = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useMemo"])(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__createChainedFunction__["a" /* default */])(function (elem) {
      elem.style[computedDimension] = getDimensionValue(computedDimension, elem) + "px";
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__triggerBrowserReflow__["a" /* default */])(elem);
    }, onExit);
  }, [onExit, getDimensionValue, computedDimension]);
  var handleExiting = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useMemo"])(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__createChainedFunction__["a" /* default */])(function (elem) {
      elem.style[computedDimension] = null;
    }, onExiting);
  }, [computedDimension, onExiting]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5_react_transition_group_Transition__["c" /* default */] // @ts-ignore
  , __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    addEndListener: __WEBPACK_IMPORTED_MODULE_6__transitionEndListener__["a" /* default */]
  }, props, {
    "aria-expanded": props.role ? props.in : null,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: handleEntered,
    onExit: handleExit,
    onExiting: handleExiting
  }), function (state, innerProps) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.cloneElement(children, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, innerProps, {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, children.props.className, collapseStyles[state], computedDimension === 'width' && 'width')
    }));
  });
}); // @ts-ignore

// @ts-ignore
Collapse.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Collapse);

/***/ }),
/* 93 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return alignPropType; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_overlays_DropdownMenu__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restart_hooks_useMergedRefs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_warning__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__NavbarContext__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__useWrappedRefWithWarning__ = __webpack_require__(160);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__usePopperMarginModifiers__ = __webpack_require__(159);


var _excluded = ["bsPrefix", "className", "align", "alignRight", "rootCloseEvent", "flip", "show", "renderOnMount", "as", "popperConfig"];










var alignDirection = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOf(['left', 'right']);
var alignPropType = __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.oneOfType([alignDirection, __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
  sm: alignDirection
}), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
  md: alignDirection
}), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
  lg: alignDirection
}), __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.shape({
  xl: alignDirection
})]);
var defaultProps = {
  align: 'left',
  alignRight: false,
  flip: true
};
var DropdownMenu = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      align = _ref.align,
      alignRight = _ref.alignRight,
      rootCloseEvent = _ref.rootCloseEvent,
      flip = _ref.flip,
      showProps = _ref.show,
      renderOnMount = _ref.renderOnMount,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      popperConfig = _ref.popperConfig,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var isNavbar = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_8__NavbarContext__["a" /* default */]);
  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'dropdown-menu');

  var _usePopperMarginModif = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__usePopperMarginModifiers__["a" /* default */])(),
      popperRef = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var alignClasses = [];

  if (align) {
    if (typeof align === 'object') {
      var keys = Object.keys(align);
      process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_7_warning___default()(keys.length === 1, 'There should only be 1 breakpoint when passing an object to `align`') : void 0;

      if (keys.length) {
        var brkPoint = keys[0];
        var direction = align[brkPoint]; // .dropdown-menu-right is required for responsively aligning
        // left in addition to align left classes.
        // Reuse alignRight to toggle the class below.

        alignRight = direction === 'left';
        alignClasses.push(prefix + "-" + brkPoint + "-" + direction);
      }
    } else if (align === 'right') {
      alignRight = true;
    }
  }

  var _useDropdownMenu = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_overlays_DropdownMenu__["a" /* useDropdownMenu */])({
    flip: flip,
    rootCloseEvent: rootCloseEvent,
    show: showProps,
    alignEnd: alignRight,
    usePopper: !isNavbar && alignClasses.length === 0,
    popperConfig: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, popperConfig, {
      modifiers: marginModifiers.concat((popperConfig == null ? void 0 : popperConfig.modifiers) || [])
    })
  }),
      menuProps = _useDropdownMenu[0],
      _useDropdownMenu$ = _useDropdownMenu[1],
      hasShown = _useDropdownMenu$.hasShown,
      popper = _useDropdownMenu$.popper,
      show = _useDropdownMenu$.show,
      alignEnd = _useDropdownMenu$.alignEnd,
      toggle = _useDropdownMenu$.toggle;

  menuProps.ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__restart_hooks_useMergedRefs__["a" /* default */])(popperRef, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__restart_hooks_useMergedRefs__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__useWrappedRefWithWarning__["a" /* default */])(ref, 'DropdownMenu'), menuProps.ref));
  if (!hasShown && !renderOnMount) return null; // For custom components provide additional, non-DOM, props;

  if (typeof Component !== 'string') {
    menuProps.show = show;

    menuProps.close = function () {
      return toggle == null ? void 0 : toggle(false);
    };

    menuProps.alignRight = alignEnd;
  }

  var style = props.style;

  if (popper != null && popper.placement) {
    // we don't need the default popper style,
    // menus are display: none when not shown.
    style = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props.style, menuProps.style);
    props['x-placement'] = popper.placement;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, menuProps, {
    style: style,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a.apply(void 0, [className, prefix, show && 'show', alignEnd && prefix + "-right"].concat(alignClasses))
  }));
});
DropdownMenu.displayName = 'DropdownMenu';
DropdownMenu.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["b"] = (DropdownMenu);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);


var _excluded = ["as", "className", "type", "tooltip"];



var propTypes = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /** Display feedback as a tooltip. */
  tooltip: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,
  as: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.elementType
};
var Feedback = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'valid' : _ref$type,
      _ref$tooltip = _ref.tooltip,
      tooltip = _ref$tooltip === void 0 ? false : _ref$tooltip,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, type + "-" + (tooltip ? 'tooltip' : 'feedback'))
  }));
});
Feedback.displayName = 'Feedback';
Feedback.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (Feedback);

/***/ }),
/* 95 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_all__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_all__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Feedback__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FormCheckInput__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FormCheckLabel__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FormContext__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["id", "bsPrefix", "bsCustomPrefix", "inline", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "title", "type", "label", "children", "custom", "as"];








var FormCheck = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      _ref$inline = _ref.inline,
      inline = _ref$inline === void 0 ? false : _ref$inline,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      _ref$feedbackTooltip = _ref.feedbackTooltip,
      feedbackTooltip = _ref$feedbackTooltip === void 0 ? false : _ref$feedbackTooltip,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      _ref$title = _ref.title,
      title = _ref$title === void 0 ? '' : _ref$title,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'checkbox' : _ref$type,
      label = _ref.label,
      children = _ref.children,
      propCustom = _ref.custom,
      _ref$as = _ref.as,
      as = _ref$as === void 0 ? 'input' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var custom = type === 'switch' ? true : propCustom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control'] : [bsPrefix, 'form-check'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ThemeProvider__["b" /* useBootstrapPrefix */])(prefix, defaultPrefix);

  var _useContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_8__FormContext__["a" /* default */]),
      controlId = _useContext.controlId;

  var innerFormContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useMemo"])(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = custom || label != null && label !== false && !children;
  var input = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__FormCheckInput__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    type: type === 'switch' ? 'checkbox' : type,
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    isStatic: !hasLabel,
    disabled: disabled,
    as: as
  }));
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__FormContext__["a" /* default */].Provider, {
    value: innerFormContext
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement("div", {
    style: style,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, custom && "custom-" + type, inline && bsPrefix + "-inline")
  }, children || /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment, null, input, hasLabel && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__FormCheckLabel__["a" /* default */], {
    title: title
  }, label), (isValid || isInvalid) && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Feedback__["a" /* default */], {
    type: isValid ? 'valid' : 'invalid',
    tooltip: feedbackTooltip
  }, feedback))));
});
FormCheck.displayName = 'FormCheck';
FormCheck.Input = __WEBPACK_IMPORTED_MODULE_6__FormCheckInput__["a" /* default */];
FormCheck.Label = __WEBPACK_IMPORTED_MODULE_7__FormCheckLabel__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (FormCheck);

/***/ }),
/* 96 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // TODO: check this

var NavContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null);
NavContext.displayName = 'NavContext';
/* harmony default export */ __webpack_exports__["a"] = (NavContext);

/***/ }),
/* 97 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "children", "as"];



var NavItem = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'nav-item');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix)
  }), children);
});
NavItem.displayName = 'NavItem';
/* harmony default export */ __webpack_exports__["a"] = (NavItem);

/***/ }),
/* 98 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContext__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectableContext__ = __webpack_require__(13);





var TabContainer = function TabContainer(props) {
  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_uncontrollable__["a" /* useUncontrolled */])(props, {
    activeKey: 'onSelect'
  }),
      id = _useUncontrolled.id,
      generateCustomChildId = _useUncontrolled.generateChildId,
      onSelect = _useUncontrolled.onSelect,
      activeKey = _useUncontrolled.activeKey,
      transition = _useUncontrolled.transition,
      mountOnEnter = _useUncontrolled.mountOnEnter,
      unmountOnExit = _useUncontrolled.unmountOnExit,
      children = _useUncontrolled.children;

  var generateChildId = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useMemo"])(function () {
    return generateCustomChildId || function (key, type) {
      return id ? id + "-" + type + "-" + key : null;
    };
  }, [id, generateCustomChildId]);
  var tabContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useMemo"])(function () {
    return {
      onSelect: onSelect,
      activeKey: activeKey,
      transition: transition,
      mountOnEnter: mountOnEnter || false,
      unmountOnExit: unmountOnExit || false,
      getControlledId: function getControlledId(key) {
        return generateChildId(key, 'tabpane');
      },
      getControllerId: function getControllerId(key) {
        return generateChildId(key, 'tab');
      }
    };
  }, [onSelect, activeKey, transition, mountOnEnter, unmountOnExit, generateChildId]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__TabContext__["a" /* default */].Provider, {
    value: tabContext
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__SelectableContext__["b" /* default */].Provider, {
    value: onSelect || null
  }, children));
};

/* harmony default export */ __webpack_exports__["a"] = (TabContainer);

/***/ }),
/* 99 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "as", "className"];



var TabContent = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var decoratedBsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'tab-content');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, decoratedBsPrefix)
  }));
});
/* harmony default export */ __webpack_exports__["a"] = (TabContent);

/***/ }),
/* 100 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var TabContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["a"] = (TabContext);

/***/ }),
/* 101 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__TabContext__ = __webpack_require__(100);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__SelectableContext__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Fade__ = __webpack_require__(26);


var _excluded = ["activeKey", "getControlledId", "getControllerId"],
    _excluded2 = ["bsPrefix", "className", "active", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "mountOnEnter", "unmountOnExit", "transition", "as", "eventKey"];







function useTabContext(props) {
  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_5__TabContext__["a" /* default */]);
  if (!context) return props;

  var activeKey = context.activeKey,
      getControlledId = context.getControlledId,
      getControllerId = context.getControllerId,
      rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(context, _excluded);

  var shouldTransition = props.transition !== false && rest.transition !== false;
  var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__SelectableContext__["a" /* makeEventKey */])(props.eventKey);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    active: props.active == null && key != null ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__SelectableContext__["a" /* makeEventKey */])(activeKey) === key : props.active,
    id: getControlledId(props.eventKey),
    'aria-labelledby': getControllerId(props.eventKey),
    transition: shouldTransition && (props.transition || rest.transition || __WEBPACK_IMPORTED_MODULE_7__Fade__["a" /* default */]),
    mountOnEnter: props.mountOnEnter != null ? props.mountOnEnter : rest.mountOnEnter,
    unmountOnExit: props.unmountOnExit != null ? props.unmountOnExit : rest.unmountOnExit
  });
}

var TabPane = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (props, ref) {
  var _useTabContext = useTabContext(props),
      bsPrefix = _useTabContext.bsPrefix,
      className = _useTabContext.className,
      active = _useTabContext.active,
      onEnter = _useTabContext.onEnter,
      onEntering = _useTabContext.onEntering,
      onEntered = _useTabContext.onEntered,
      onExit = _useTabContext.onExit,
      onExiting = _useTabContext.onExiting,
      onExited = _useTabContext.onExited,
      mountOnEnter = _useTabContext.mountOnEnter,
      unmountOnExit = _useTabContext.unmountOnExit,
      Transition = _useTabContext.transition,
      _useTabContext$as = _useTabContext.as,
      Component = _useTabContext$as === void 0 ? 'div' : _useTabContext$as,
      _ = _useTabContext.eventKey,
      rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useTabContext, _excluded2);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'tab-pane');
  if (!active && !Transition && unmountOnExit) return null;
  var pane = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, rest, {
    ref: ref,
    role: "tabpanel",
    "aria-hidden": !active,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefix, {
      active: active
    })
  }));
  if (Transition) pane = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Transition, {
    in: active,
    onEnter: onEnter,
    onEntering: onEntering,
    onEntered: onEntered,
    onExit: onExit,
    onExiting: onExiting,
    onExited: onExited,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, pane); // We provide an empty the TabContext so `<Nav>`s in `<TabPane>`s don't
  // conflict with the top level one.

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__TabContext__["a" /* default */].Provider, {
    value: null
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__SelectableContext__["b" /* default */].Provider, {
    value: null
  }, pane));
});
TabPane.displayName = 'TabPane';
/* harmony default export */ __webpack_exports__["a"] = (TabPane);

/***/ }),
/* 102 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * Safe chained function
 *
 * Will only create a new function if needed,
 * otherwise will pass back existing functions or null.
 *
 * @param {function} functions to chain
 * @returns {function|null}
 */
function createChainedFunction() {
  for (var _len = arguments.length, funcs = new Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  return funcs.filter(function (f) {
    return f != null;
  }).reduce(function (acc, f) {
    if (typeof f !== 'function') {
      throw new Error('Invalid Argument Type, must only provide functions, undefined, or null.');
    }

    if (acc === null) return f;
    return function chainedFunction() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      // @ts-ignore
      acc.apply(this, args); // @ts-ignore

      f.apply(this, args);
    };
  }, null);
}

/* harmony default export */ __webpack_exports__["a"] = (createChainedFunction);

/***/ }),
/* 103 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);



/* harmony default export */ __webpack_exports__["a"] = (function (className) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.forwardRef(function (p, ref) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, p, {
      ref: ref,
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(p.className, className)
    }));
  });
});

/***/ }),
/* 104 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transitionEndListener;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_helpers_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_helpers_transitionEnd__ = __webpack_require__(125);



function parseDuration(node, property) {
  var str = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_dom_helpers_css__["a" /* default */])(node, property) || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function transitionEndListener(element, handler) {
  var duration = parseDuration(element, 'transitionDuration');
  var delay = parseDuration(element, 'transitionDelay');
  var remove = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_transitionEnd__["a" /* default */])(element, function (e) {
    if (e.target === element) {
      remove();
      handler(e);
    }
  }, duration + delay);
}

/***/ }),
/* 105 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = triggerBrowserReflow;
// reading a dimension prop will cause the browser to recalculate,
// which will let our animations work
function triggerBrowserReflow(node) {
  // eslint-disable-next-line @typescript-eslint/no-unused-expressions
  node.offsetHeight;
}

/***/ }),
/* 106 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var DropdownContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null);
/* harmony default export */ __webpack_exports__["a"] = (DropdownContext);

/***/ }),
/* 107 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = safeFindDOMNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react_dom__);

function safeFindDOMNode(componentOrElement) {
  if (componentOrElement && 'setState' in componentOrElement) {
    return __WEBPACK_IMPORTED_MODULE_0_react_dom___default.a.findDOMNode(componentOrElement);
  }

  return componentOrElement != null ? componentOrElement : null;
}

/***/ }),
/* 108 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export UNMOUNTED */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return EXITED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ENTERING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ENTERED; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return EXITING; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__config__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_PropTypes__ = __webpack_require__(285);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__ = __webpack_require__(283);








var UNMOUNTED = 'unmounted';
var EXITED = 'exited';
var ENTERING = 'entering';
var ENTERED = 'entered';
var EXITING = 'exiting';
/**
 * The Transition component lets you describe a transition from one component
 * state to another _over time_ with a simple declarative API. Most commonly
 * it's used to animate the mounting and unmounting of a component, but can also
 * be used to describe in-place transition states as well.
 *
 * ---
 *
 * **Note**: `Transition` is a platform-agnostic base component. If you're using
 * transitions in CSS, you'll probably want to use
 * [`CSSTransition`](https://reactcommunity.org/react-transition-group/css-transition)
 * instead. It inherits all the features of `Transition`, but contains
 * additional features necessary to play nice with CSS transitions (hence the
 * name of the component).
 *
 * ---
 *
 * By default the `Transition` component does not alter the behavior of the
 * component it renders, it only tracks "enter" and "exit" states for the
 * components. It's up to you to give meaning and effect to those states. For
 * example we can add styles to a component when it enters or exits:
 *
 * ```jsx
 * import { Transition } from 'react-transition-group';
 *
 * const duration = 300;
 *
 * const defaultStyle = {
 *   transition: `opacity ${duration}ms ease-in-out`,
 *   opacity: 0,
 * }
 *
 * const transitionStyles = {
 *   entering: { opacity: 1 },
 *   entered:  { opacity: 1 },
 *   exiting:  { opacity: 0 },
 *   exited:  { opacity: 0 },
 * };
 *
 * const Fade = ({ in: inProp }) => (
 *   <Transition in={inProp} timeout={duration}>
 *     {state => (
 *       <div style={{
 *         ...defaultStyle,
 *         ...transitionStyles[state]
 *       }}>
 *         I'm a fade Transition!
 *       </div>
 *     )}
 *   </Transition>
 * );
 * ```
 *
 * There are 4 main states a Transition can be in:
 *  - `'entering'`
 *  - `'entered'`
 *  - `'exiting'`
 *  - `'exited'`
 *
 * Transition state is toggled via the `in` prop. When `true` the component
 * begins the "Enter" stage. During this stage, the component will shift from
 * its current transition state, to `'entering'` for the duration of the
 * transition and then to the `'entered'` stage once it's complete. Let's take
 * the following example (we'll use the
 * [useState](https://reactjs.org/docs/hooks-reference.html#usestate) hook):
 *
 * ```jsx
 * function App() {
 *   const [inProp, setInProp] = useState(false);
 *   return (
 *     <div>
 *       <Transition in={inProp} timeout={500}>
 *         {state => (
 *           // ...
 *         )}
 *       </Transition>
 *       <button onClick={() => setInProp(true)}>
 *         Click to Enter
 *       </button>
 *     </div>
 *   );
 * }
 * ```
 *
 * When the button is clicked the component will shift to the `'entering'` state
 * and stay there for 500ms (the value of `timeout`) before it finally switches
 * to `'entered'`.
 *
 * When `in` is `false` the same thing happens except the state moves from
 * `'exiting'` to `'exited'`.
 */

var Transition = /*#__PURE__*/function (_React$Component) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Transition, _React$Component);

  function Transition(props, context) {
    var _this;

    _this = _React$Component.call(this, props, context) || this;
    var parentGroup = context; // In the context of a TransitionGroup all enters are really appears

    var appear = parentGroup && !parentGroup.isMounting ? props.enter : props.appear;
    var initialStatus;
    _this.appearStatus = null;

    if (props.in) {
      if (appear) {
        initialStatus = EXITED;
        _this.appearStatus = ENTERING;
      } else {
        initialStatus = ENTERED;
      }
    } else {
      if (props.unmountOnExit || props.mountOnEnter) {
        initialStatus = UNMOUNTED;
      } else {
        initialStatus = EXITED;
      }
    }

    _this.state = {
      status: initialStatus
    };
    _this.nextCallback = null;
    return _this;
  }

  Transition.getDerivedStateFromProps = function getDerivedStateFromProps(_ref, prevState) {
    var nextIn = _ref.in;

    if (nextIn && prevState.status === UNMOUNTED) {
      return {
        status: EXITED
      };
    }

    return null;
  } // getSnapshotBeforeUpdate(prevProps) {
  //   let nextStatus = null
  //   if (prevProps !== this.props) {
  //     const { status } = this.state
  //     if (this.props.in) {
  //       if (status !== ENTERING && status !== ENTERED) {
  //         nextStatus = ENTERING
  //       }
  //     } else {
  //       if (status === ENTERING || status === ENTERED) {
  //         nextStatus = EXITING
  //       }
  //     }
  //   }
  //   return { nextStatus }
  // }
  ;

  var _proto = Transition.prototype;

  _proto.componentDidMount = function componentDidMount() {
    this.updateStatus(true, this.appearStatus);
  };

  _proto.componentDidUpdate = function componentDidUpdate(prevProps) {
    var nextStatus = null;

    if (prevProps !== this.props) {
      var status = this.state.status;

      if (this.props.in) {
        if (status !== ENTERING && status !== ENTERED) {
          nextStatus = ENTERING;
        }
      } else {
        if (status === ENTERING || status === ENTERED) {
          nextStatus = EXITING;
        }
      }
    }

    this.updateStatus(false, nextStatus);
  };

  _proto.componentWillUnmount = function componentWillUnmount() {
    this.cancelNextCallback();
  };

  _proto.getTimeouts = function getTimeouts() {
    var timeout = this.props.timeout;
    var exit, enter, appear;
    exit = enter = appear = timeout;

    if (timeout != null && typeof timeout !== 'number') {
      exit = timeout.exit;
      enter = timeout.enter; // TODO: remove fallback for next major

      appear = timeout.appear !== undefined ? timeout.appear : enter;
    }

    return {
      exit: exit,
      enter: enter,
      appear: appear
    };
  };

  _proto.updateStatus = function updateStatus(mounting, nextStatus) {
    if (mounting === void 0) {
      mounting = false;
    }

    if (nextStatus !== null) {
      // nextStatus will always be ENTERING or EXITING.
      this.cancelNextCallback();

      if (nextStatus === ENTERING) {
        this.performEnter(mounting);
      } else {
        this.performExit();
      }
    } else if (this.props.unmountOnExit && this.state.status === EXITED) {
      this.setState({
        status: UNMOUNTED
      });
    }
  };

  _proto.performEnter = function performEnter(mounting) {
    var _this2 = this;

    var enter = this.props.enter;
    var appearing = this.context ? this.context.isMounting : mounting;

    var _ref2 = this.props.nodeRef ? [appearing] : [__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this), appearing],
        maybeNode = _ref2[0],
        maybeAppearing = _ref2[1];

    var timeouts = this.getTimeouts();
    var enterTimeout = appearing ? timeouts.appear : timeouts.enter; // no enter animation skip right to ENTERED
    // if we are mounting and running this it means appear _must_ be set

    if (!mounting && !enter || __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].disabled) {
      this.safeSetState({
        status: ENTERED
      }, function () {
        _this2.props.onEntered(maybeNode);
      });
      return;
    }

    this.props.onEnter(maybeNode, maybeAppearing);
    this.safeSetState({
      status: ENTERING
    }, function () {
      _this2.props.onEntering(maybeNode, maybeAppearing);

      _this2.onTransitionEnd(enterTimeout, function () {
        _this2.safeSetState({
          status: ENTERED
        }, function () {
          _this2.props.onEntered(maybeNode, maybeAppearing);
        });
      });
    });
  };

  _proto.performExit = function performExit() {
    var _this3 = this;

    var exit = this.props.exit;
    var timeouts = this.getTimeouts();
    var maybeNode = this.props.nodeRef ? undefined : __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this); // no exit animation skip right to EXITED

    if (!exit || __WEBPACK_IMPORTED_MODULE_5__config__["a" /* default */].disabled) {
      this.safeSetState({
        status: EXITED
      }, function () {
        _this3.props.onExited(maybeNode);
      });
      return;
    }

    this.props.onExit(maybeNode);
    this.safeSetState({
      status: EXITING
    }, function () {
      _this3.props.onExiting(maybeNode);

      _this3.onTransitionEnd(timeouts.exit, function () {
        _this3.safeSetState({
          status: EXITED
        }, function () {
          _this3.props.onExited(maybeNode);
        });
      });
    });
  };

  _proto.cancelNextCallback = function cancelNextCallback() {
    if (this.nextCallback !== null) {
      this.nextCallback.cancel();
      this.nextCallback = null;
    }
  };

  _proto.safeSetState = function safeSetState(nextState, callback) {
    // This shouldn't be necessary, but there are weird race conditions with
    // setState callbacks and unmounting in testing, so always make sure that
    // we can cancel any pending setState callbacks after we unmount.
    callback = this.setNextCallback(callback);
    this.setState(nextState, callback);
  };

  _proto.setNextCallback = function setNextCallback(callback) {
    var _this4 = this;

    var active = true;

    this.nextCallback = function (event) {
      if (active) {
        active = false;
        _this4.nextCallback = null;
        callback(event);
      }
    };

    this.nextCallback.cancel = function () {
      active = false;
    };

    return this.nextCallback;
  };

  _proto.onTransitionEnd = function onTransitionEnd(timeout, handler) {
    this.setNextCallback(handler);
    var node = this.props.nodeRef ? this.props.nodeRef.current : __WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.findDOMNode(this);
    var doesNotHaveTimeoutOrListener = timeout == null && !this.props.addEndListener;

    if (!node || doesNotHaveTimeoutOrListener) {
      setTimeout(this.nextCallback, 0);
      return;
    }

    if (this.props.addEndListener) {
      var _ref3 = this.props.nodeRef ? [this.nextCallback] : [node, this.nextCallback],
          maybeNode = _ref3[0],
          maybeNextCallback = _ref3[1];

      this.props.addEndListener(maybeNode, maybeNextCallback);
    }

    if (timeout != null) {
      setTimeout(this.nextCallback, timeout);
    }
  };

  _proto.render = function render() {
    var status = this.state.status;

    if (status === UNMOUNTED) {
      return null;
    }

    var _this$props = this.props,
        children = _this$props.children,
        _in = _this$props.in,
        _mountOnEnter = _this$props.mountOnEnter,
        _unmountOnExit = _this$props.unmountOnExit,
        _appear = _this$props.appear,
        _enter = _this$props.enter,
        _exit = _this$props.exit,
        _timeout = _this$props.timeout,
        _addEndListener = _this$props.addEndListener,
        _onEnter = _this$props.onEnter,
        _onEntering = _this$props.onEntering,
        _onEntered = _this$props.onEntered,
        _onExit = _this$props.onExit,
        _onExiting = _this$props.onExiting,
        _onExited = _this$props.onExited,
        _nodeRef = _this$props.nodeRef,
        childProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);

    return (
      /*#__PURE__*/
      // allows for nested Transitions
      __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__["a" /* default */].Provider, {
        value: null
      }, typeof children === 'function' ? children(status, childProps) : __WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(children), childProps))
    );
  };

  return Transition;
}(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

Transition.contextType = __WEBPACK_IMPORTED_MODULE_7__TransitionGroupContext__["a" /* default */];
Transition.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.shape({
    current: typeof Element === 'undefined' ? __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any : function (propValue, key, componentName, location, propFullName, secret) {
      var value = propValue[key];
      return __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.instanceOf(value && 'ownerDocument' in value ? value.ownerDocument.defaultView.Element : Element)(propValue, key, componentName, location, propFullName, secret);
    }
  }),

  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired, __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.element.isRequired]).isRequired,

  /**
   * Show the component; triggers the enter or exit states
   */
  in: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * Enable or disable enter transitions.
   */
  enter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * Enable or disable exit transitions.
   */
  exit: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function timeout(props) {
    var pt = __WEBPACK_IMPORTED_MODULE_6__utils_PropTypes__["a" /* timeoutsShape */];
    if (!props.addEndListener) pt = pt.isRequired;

    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    return pt.apply(void 0, [props].concat(args));
  },

  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
} : {}; // Name the function so it is clearer in the documentation

function noop() {}

Transition.defaultProps = {
  in: false,
  mountOnEnter: false,
  unmountOnExit: false,
  appear: false,
  enter: true,
  exit: true,
  onEnter: noop,
  onEntering: noop,
  onEntered: noop,
  onExit: noop,
  onExiting: noop,
  onExited: noop
};
Transition.UNMOUNTED = UNMOUNTED;
Transition.EXITED = EXITED;
Transition.ENTERING = ENTERING;
Transition.ENTERED = ENTERED;
Transition.EXITING = EXITING;
/* harmony default export */ __webpack_exports__["c"] = (Transition);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = (string, separator) => {
	if (!(typeof string === 'string' && typeof separator === 'string')) {
		throw new TypeError('Expected the arguments to be of type `string`');
	}

	if (separator === '') {
		return [string];
	}

	const separatorIndex = string.indexOf(separator);

	if (separatorIndex === -1) {
		return [string];
	}

	return [
		string.slice(0, separatorIndex),
		string.slice(separatorIndex + separator.length)
	];
};


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

module.exports = str => encodeURIComponent(str).replace(/[!'()*]/g, x => `%${x.charCodeAt(0).toString(16).toUpperCase()}`);


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var axios_1 = __webpack_require__(63);
var SessionizeService = /** @class */ (function () {
    function SessionizeService() {
    }
    SessionizeService.GetSessions = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sessions;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, axios_1.default.get("https://sessionize.com/api/v2/pia3gis3/view/Sessions")];
                    case 1:
                        sessions = _a.sent();
                        return [2 /*return*/, sessions.data[0].sessions];
                }
            });
        });
    };
    SessionizeService.getSponsors = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sponsors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!(window.location.protocol == "file:")) return [3 /*break*/, 1];
                        return [2 /*return*/, [{
                                    "Sponsor": "all",
                                    "Content": "<img src='images/AllSponsors.png' />"
                                }]];
                    case 1: return [4 /*yield*/, axios_1.default.get("sponsors.json")];
                    case 2:
                        sponsors = _a.sent();
                        return [2 /*return*/, sponsors.data];
                }
            });
        });
    };
    return SessionizeService;
}());
exports.default = SessionizeService;


/***/ }),
/* 112 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = contains;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__instanceOf_js__ = __webpack_require__(11);

function contains(parent, child) {
  var rootNode = child.getRootNode && child.getRootNode(); // First, attempt with faster native method

  if (parent.contains(child)) {
    return true;
  } // then fallback to custom implementation with Shadow DOM support
  else if (rootNode && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__instanceOf_js__["b" /* isShadowRoot */])(rootNode)) {
      var next = child;

      do {
        if (next && parent.isSameNode(next)) {
          return true;
        } // $FlowFixMe[prop-missing]: need a better way to handle this...


        next = next.parentNode || next.host;
      } while (next);
    } // Give up, the result is false


  return false;
}

/***/ }),
/* 113 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = listScrollParents;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getScrollParent_js__ = __webpack_require__(180);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getParentNode_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindow_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__isScrollParent_js__ = __webpack_require__(57);




/*
given a DOM element, return the list of all scroll parents, up the list of ancesors
until we get to the top window object. This list is what we attach scroll listeners
to, because if any of these parent elements scroll, we'll need to re-calculate the
reference element's position.
*/

function listScrollParents(element, list) {
  var _element$ownerDocumen;

  if (list === void 0) {
    list = [];
  }

  var scrollParent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getScrollParent_js__["a" /* default */])(element);
  var isBody = scrollParent === ((_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body);
  var win = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getWindow_js__["a" /* default */])(scrollParent);
  var target = isBody ? [win].concat(win.visualViewport || [], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__isScrollParent_js__["a" /* default */])(scrollParent) ? scrollParent : []) : scrollParent;
  var updatedList = list.concat(target);
  return isBody ? updatedList : // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
  updatedList.concat(listScrollParents(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getParentNode_js__["a" /* default */])(target)));
}

/***/ }),
/* 114 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = computeOffsets;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBasePlacement_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getVariation_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getMainAxisFromPlacement_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__enums_js__ = __webpack_require__(8);




function computeOffsets(_ref) {
  var reference = _ref.reference,
      element = _ref.element,
      placement = _ref.placement;
  var basePlacement = placement ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getBasePlacement_js__["a" /* default */])(placement) : null;
  var variation = placement ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getVariation_js__["a" /* default */])(placement) : null;
  var commonX = reference.x + reference.width / 2 - element.width / 2;
  var commonY = reference.y + reference.height / 2 - element.height / 2;
  var offsets;

  switch (basePlacement) {
    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["d" /* top */]:
      offsets = {
        x: commonX,
        y: reference.y - element.height
      };
      break;

    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["e" /* bottom */]:
      offsets = {
        x: commonX,
        y: reference.y + reference.height
      };
      break;

    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["c" /* right */]:
      offsets = {
        x: reference.x + reference.width,
        y: commonY
      };
      break;

    case __WEBPACK_IMPORTED_MODULE_3__enums_js__["b" /* left */]:
      offsets = {
        x: reference.x - element.width,
        y: commonY
      };
      break;

    default:
      offsets = {
        x: reference.x,
        y: reference.y
      };
  }

  var mainAxis = basePlacement ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getMainAxisFromPlacement_js__["a" /* default */])(basePlacement) : null;

  if (mainAxis != null) {
    var len = mainAxis === 'y' ? 'height' : 'width';

    switch (variation) {
      case __WEBPACK_IMPORTED_MODULE_3__enums_js__["f" /* start */]:
        offsets[mainAxis] = offsets[mainAxis] - (reference[len] / 2 - element[len] / 2);
        break;

      case __WEBPACK_IMPORTED_MODULE_3__enums_js__["k" /* end */]:
        offsets[mainAxis] = offsets[mainAxis] + (reference[len] / 2 - element[len] / 2);
        break;

      default:
    }
  }

  return offsets;
}

/***/ }),
/* 115 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = expandToHashMap;
function expandToHashMap(value, keys) {
  return keys.reduce(function (hashMap, key) {
    hashMap[key] = value;
    return hashMap;
  }, {});
}

/***/ }),
/* 116 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getFreshSideObject;
function getFreshSideObject() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergePaddingObject;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getFreshSideObject_js__ = __webpack_require__(116);

function mergePaddingObject(paddingObject) {
  return Object.assign({}, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getFreshSideObject_js__["a" /* default */])(), paddingObject);
}

/***/ }),
/* 118 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = rectToClientRect;
function rectToClientRect(rect) {
  return Object.assign({}, rect, {
    left: rect.x,
    top: rect.y,
    right: rect.x + rect.width,
    bottom: rect.y + rect.height
  });
}

/***/ }),
/* 119 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = within;
/* harmony export (immutable) */ __webpack_exports__["b"] = withinMaxClamp;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__math_js__ = __webpack_require__(21);

function within(min, value, max) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["a" /* max */])(min, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__math_js__["b" /* min */])(value, max));
}
function withinMaxClamp(min, value, max) {
  var v = within(min, value, max);
  return v > max ? max : v;
}

/***/ }),
/* 120 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Creates a `Ref` whose value is updated in an effect, ensuring the most recent
 * value is the one rendered with. Generally only required for Concurrent mode usage
 * where previous work in `render()` may be discarded befor being used.
 *
 * This is safe to access in an event handler.
 *
 * @param value The `Ref` value
 */

function useCommittedRef(value) {
  var ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(value);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    ref.current = value;
  }, [value]);
  return ref;
}

/* harmony default export */ __webpack_exports__["a"] = (useCommittedRef);

/***/ }),
/* 121 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useForceUpdate;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Returns a function that triggers a component update. the hook equivalent to
 * `this.forceUpdate()` in a class component. In most cases using a state value directly
 * is preferable but may be required in some advanced usages of refs for interop or
 * when direct DOM manipulation is required.
 *
 * ```ts
 * const forceUpdate = useForceUpdate();
 *
 * const updateOnClick = useCallback(() => {
 *  forceUpdate()
 * }, [forceUpdate])
 *
 * return <button type="button" onClick={updateOnClick}>Hi there</button>
 * ```
 */

function useForceUpdate() {
  // The toggling state value is designed to defeat React optimizations for skipping
  // updates when they are stricting equal to the last state value
  var _useReducer = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useReducer"])(function (state) {
    return !state;
  }, false),
      dispatch = _useReducer[1];

  return dispatch;
}

/***/ }),
/* 122 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = usePrevious;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Store the last of some value. Tracked via a `Ref` only updating it
 * after the component renders.
 *
 * Helpful if you need to compare a prop value to it's previous value during render.
 *
 * ```ts
 * function Component(props) {
 *   const lastProps = usePrevious(props)
 *
 *   if (lastProps.foo !== props.foo)
 *     resetValueFromProps(props.foo)
 * }
 * ```
 *
 * @param value the value to track
 */

function usePrevious(value) {
  var ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    ref.current = value;
  });
  return ref.current;
}

/***/ }),
/* 123 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hasClass;
/**
 * Checks if a given element has a CSS class.
 * 
 * @param element the element
 * @param className the CSS class name
 */
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);
  return (" " + (element.className.baseVal || element.className) + " ").indexOf(" " + className + " ") !== -1;
}

/***/ }),
/* 124 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * A `removeEventListener` ponyfill
 * 
 * @param node the element
 * @param eventName the event name
 * @param handle the handler
 * @param options event options
 */
function removeEventListener(node, eventName, handler, options) {
  var capture = options && typeof options !== 'boolean' ? options.capture : options;
  node.removeEventListener(eventName, handler, capture);

  if (handler.__once) {
    node.removeEventListener(eventName, handler.__once, capture);
  }
}

/* harmony default export */ __webpack_exports__["a"] = (removeEventListener);

/***/ }),
/* 125 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = transitionEnd;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__listen__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__triggerEvent__ = __webpack_require__(219);




function parseDuration(node) {
  var str = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__css__["a" /* default */])(node, 'transitionDuration') || '';
  var mult = str.indexOf('ms') === -1 ? 1000 : 1;
  return parseFloat(str) * mult;
}

function emulateTransitionEnd(element, duration, padding) {
  if (padding === void 0) {
    padding = 5;
  }

  var called = false;
  var handle = setTimeout(function () {
    if (!called) __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__triggerEvent__["a" /* default */])(element, 'transitionend', true);
  }, duration + padding);
  var remove = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__listen__["a" /* default */])(element, 'transitionend', function () {
    called = true;
  }, {
    once: true
  });
  return function () {
    clearTimeout(handle);
    remove();
  };
}

function transitionEnd(element, handler, duration, padding) {
  if (duration == null) duration = parseDuration(element) || 0;
  var removeEmulate = emulateTransitionEnd(element, duration, padding);
  var remove = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__listen__["a" /* default */])(element, 'transitionend', handler);
  return function () {
    removeEmulate();
    remove();
  };
}

/***/ }),
/* 126 */
/***/ (function(module, exports) {

module.exports = Function.call.bind(Object.prototype.hasOwnProperty);


/***/ }),
/* 127 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dom_helpers_querySelectorAll__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restart_hooks_useForceUpdate__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restart_hooks_useMergedRefs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NavContext__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SelectableContext__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TabContext__ = __webpack_require__(100);


var _excluded = ["as", "onSelect", "activeKey", "role", "onKeyDown"];








// eslint-disable-next-line @typescript-eslint/no-empty-function
var noop = function noop() {};

var AbstractNav = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'ul' : _ref$as,
      onSelect = _ref.onSelect,
      activeKey = _ref.activeKey,
      role = _ref.role,
      onKeyDown = _ref.onKeyDown,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  // A ref and forceUpdate for refocus, b/c we only want to trigger when needed
  // and don't want to reset the set in the effect
  var forceUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__restart_hooks_useForceUpdate__["a" /* default */])();
  var needsRefocusRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
  var parentOnSelect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_7__SelectableContext__["b" /* default */]);
  var tabContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_8__TabContext__["a" /* default */]);
  var getControlledId, getControllerId;

  if (tabContext) {
    role = role || 'tablist';
    activeKey = tabContext.activeKey;
    getControlledId = tabContext.getControlledId;
    getControllerId = tabContext.getControllerId;
  }

  var listNode = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(null);

  var getNextActiveChild = function getNextActiveChild(offset) {
    var currentListNode = listNode.current;
    if (!currentListNode) return null;
    var items = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_querySelectorAll__["a" /* default */])(currentListNode, '[data-rb-event-key]:not(.disabled)');
    var activeChild = currentListNode.querySelector('.active');
    if (!activeChild) return null;
    var index = items.indexOf(activeChild);
    if (index === -1) return null;
    var nextIndex = index + offset;
    if (nextIndex >= items.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = items.length - 1;
    return items[nextIndex];
  };

  var handleSelect = function handleSelect(key, event) {
    if (key == null) return;
    if (onSelect) onSelect(key, event);
    if (parentOnSelect) parentOnSelect(key, event);
  };

  var handleKeyDown = function handleKeyDown(event) {
    if (onKeyDown) onKeyDown(event);
    var nextActiveChild;

    switch (event.key) {
      case 'ArrowLeft':
      case 'ArrowUp':
        nextActiveChild = getNextActiveChild(-1);
        break;

      case 'ArrowRight':
      case 'ArrowDown':
        nextActiveChild = getNextActiveChild(1);
        break;

      default:
        return;
    }

    if (!nextActiveChild) return;
    event.preventDefault();
    handleSelect(nextActiveChild.dataset.rbEventKey, event);
    needsRefocusRef.current = true;
    forceUpdate();
  };

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(function () {
    if (listNode.current && needsRefocusRef.current) {
      var activeChild = listNode.current.querySelector('[data-rb-event-key].active');
      if (activeChild) activeChild.focus();
    }

    needsRefocusRef.current = false;
  });
  var mergedRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__restart_hooks_useMergedRefs__["a" /* default */])(ref, listNode);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SelectableContext__["b" /* default */].Provider, {
    value: handleSelect
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__NavContext__["a" /* default */].Provider, {
    value: {
      role: role,
      // used by NavLink to determine it's role
      activeKey: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__SelectableContext__["a" /* makeEventKey */])(activeKey),
      getControlledId: getControlledId || noop,
      getControllerId: getControllerId || noop
    }
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    onKeyDown: handleKeyDown,
    ref: mergedRef,
    role: role
  }))));
});
/* harmony default export */ __webpack_exports__["a"] = (AbstractNav);

/***/ }),
/* 128 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_warning__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NavContext__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SelectableContext__ = __webpack_require__(13);


var _excluded = ["active", "className", "eventKey", "onSelect", "onClick", "as"];






var defaultProps = {
  disabled: false
};
var AbstractNavItem = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      className = _ref.className,
      eventKey = _ref.eventKey,
      onSelect = _ref.onSelect,
      onClick = _ref.onClick,
      Component = _ref.as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var navKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__SelectableContext__["a" /* makeEventKey */])(eventKey, props.href);
  var parentOnSelect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_7__SelectableContext__["b" /* default */]);
  var navContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_6__NavContext__["a" /* default */]);
  var isActive = active;

  if (navContext) {
    if (!props.role && navContext.role === 'tablist') props.role = 'tab';
    var contextControllerId = navContext.getControllerId(navKey);
    var contextControlledId = navContext.getControlledId(navKey);
    process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_5_warning___default()(!contextControllerId || !props.id, "[react-bootstrap] The provided id '" + props.id + "' was overwritten by the current navContext with '" + contextControllerId + "'.") : void 0;
    process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_5_warning___default()(!contextControlledId || !props['aria-controls'], "[react-bootstrap] The provided aria-controls value '" + props['aria-controls'] + "' was overwritten by the current navContext with '" + contextControlledId + "'.") : void 0;
    props['data-rb-event-key'] = navKey;
    props.id = contextControllerId || props.id;
    props['aria-controls'] = contextControlledId || props['aria-controls'];
    isActive = active == null && navKey != null ? navContext.activeKey === navKey : active;
  }

  if (props.role === 'tab') {
    if (props.disabled) {
      props.tabIndex = -1;
      props['aria-disabled'] = true;
    }

    props['aria-selected'] = isActive;
  }

  var handleOnclick = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__["a" /* default */])(function (e) {
    if (onClick) onClick(e);
    if (navKey == null) return;
    if (onSelect) onSelect(navKey, e);
    if (parentOnSelect) parentOnSelect(navKey, e);
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    onClick: handleOnclick,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, isActive && 'active')
  }));
});
AbstractNavItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (AbstractNavItem);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 129 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collapse__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AccordionContext__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SelectableContext__ = __webpack_require__(13);


var _excluded = ["children", "eventKey"];




var AccordionCollapse = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      eventKey = _ref.eventKey,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var contextEventKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_4__AccordionContext__["a" /* default */]); // Empty SelectableContext is to prevent elements in the collapse
  // from collapsing the accordion when clicked.

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__SelectableContext__["b" /* default */].Provider, {
    value: null
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Collapse__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    in: contextEventKey === eventKey
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", null, __WEBPACK_IMPORTED_MODULE_2_react___default.a.Children.only(children))));
});
AccordionCollapse.displayName = 'AccordionCollapse';
/* harmony default export */ __webpack_exports__["a"] = (AccordionCollapse);

/***/ }),
/* 130 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["b"] = useAccordionToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__SelectableContext__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AccordionContext__ = __webpack_require__(48);


var _excluded = ["as", "children", "eventKey", "onClick"];



function useAccordionToggle(eventKey, onClick) {
  var contextEventKey = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_4__AccordionContext__["a" /* default */]);
  var onSelect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_3__SelectableContext__["b" /* default */]);
  return function (e) {
    /*
      Compare the event key in context with the given event key.
      If they are the same, then collapse the component.
    */
    var eventKeyPassed = eventKey === contextEventKey ? null : eventKey;
    if (onSelect) onSelect(eventKeyPassed, e);
    if (onClick) onClick(e);
  };
}
var AccordionToggle = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      children = _ref.children,
      eventKey = _ref.eventKey,
      onClick = _ref.onClick,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var accordionOnClick = useAccordionToggle(eventKey, onClick);

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    onClick: accordionOnClick
  }, props), children);
});
/* harmony default export */ __webpack_exports__["a"] = (AccordionToggle);

/***/ }),
/* 131 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SafeAnchor__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "active", "children", "className", "as", "linkAs", "linkProps", "href", "title", "target"];




var defaultProps = {
  active: false,
  linkProps: {}
};
var BreadcrumbItem = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      children = _ref.children,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'li' : _ref$as,
      _ref$linkAs = _ref.linkAs,
      LinkComponent = _ref$linkAs === void 0 ? __WEBPACK_IMPORTED_MODULE_4__SafeAnchor__["a" /* default */] : _ref$linkAs,
      linkProps = _ref.linkProps,
      href = _ref.href,
      title = _ref.title,
      target = _ref.target,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'breadcrumb-item');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(prefix, className, {
      active: active
    }),
    "aria-current": active ? 'page' : undefined
  }), active ? children : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(LinkComponent, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, linkProps, {
    href: href,
    title: title,
    target: target
  }), children));
});
BreadcrumbItem.displayName = 'BreadcrumbItem';
BreadcrumbItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (BreadcrumbItem);

/***/ }),
/* 132 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var context = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null);
context.displayName = 'CardContext';
/* harmony default export */ __webpack_exports__["a"] = (context);

/***/ }),
/* 133 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "variant", "as"];



var defaultProps = {
  variant: null
};
var CardImg = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      variant = _ref.variant,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'img' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'card-img');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(variant ? prefix + "-" + variant : prefix, className)
  }, props));
});
CardImg.displayName = 'CardImg';
CardImg.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (CardImg);

/***/ }),
/* 134 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["as", "bsPrefix", "children", "className"];



var CarouselItem = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      children = _ref.children,
      className = _ref.className,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var finalClassName = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'carousel-item'));
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: finalClassName
  }), children);
});
CarouselItem.displayName = 'CarouselItem';
/* harmony default export */ __webpack_exports__["a"] = (CarouselItem);

/***/ }),
/* 135 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "as"];



var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var Col = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'col');
  var spans = [];
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var span;
    var offset;
    var order;

    if (typeof propValue === 'object' && propValue != null) {
      var _propValue$span = propValue.span;
      span = _propValue$span === void 0 ? true : _propValue$span;
      offset = propValue.offset;
      order = propValue.order;
    } else {
      span = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (span) spans.push(span === true ? "" + prefix + infix : "" + prefix + infix + "-" + span);
    if (order != null) classes.push("order" + infix + "-" + order);
    if (offset != null) classes.push("offset" + infix + "-" + offset);
  });

  if (!spans.length) {
    spans.push(prefix); // plain 'col'
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a.apply(void 0, [className].concat(spans, classes))
  }));
});
Col.displayName = 'Col';
/* harmony default export */ __webpack_exports__["a"] = (Col);

/***/ }),
/* 136 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_isRequiredForA11y__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_isRequiredForA11y___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_isRequiredForA11y__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_overlays_DropdownToggle__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restart_hooks_useMergedRefs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Button__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__useWrappedRefWithWarning__ = __webpack_require__(160);


var _excluded = ["bsPrefix", "split", "className", "childBsPrefix", "as"];








var DropdownToggle = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      split = _ref.split,
      className = _ref.className,
      childBsPrefix = _ref.childBsPrefix,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? __WEBPACK_IMPORTED_MODULE_7__Button__["a" /* default */] : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'dropdown-toggle');

  if (childBsPrefix !== undefined) {
    props.bsPrefix = childBsPrefix;
  }

  var _useDropdownToggle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_overlays_DropdownToggle__["a" /* useDropdownToggle */])(),
      toggleProps = _useDropdownToggle[0];

  toggleProps.ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__restart_hooks_useMergedRefs__["a" /* default */])(toggleProps.ref, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__useWrappedRefWithWarning__["a" /* default */])(ref, 'DropdownToggle')); // This intentionally forwards size and variant (if set) to the
  // underlying component, to allow it to render size and style variants.

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefix, split && prefix + "-split")
  }, toggleProps, props));
});
DropdownToggle.displayName = 'DropdownToggle';
/* harmony default export */ __webpack_exports__["a"] = (DropdownToggle);

/***/ }),
/* 137 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_all__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_all__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_warning__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Feedback__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FormContext__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "bsCustomPrefix", "type", "size", "htmlSize", "id", "className", "isValid", "isInvalid", "plaintext", "readOnly", "custom", "as"];







var FormControl = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      type = _ref.type,
      size = _ref.size,
      htmlSize = _ref.htmlSize,
      id = _ref.id,
      className = _ref.className,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      plaintext = _ref.plaintext,
      readOnly = _ref.readOnly,
      custom = _ref.custom,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var _useContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_7__FormContext__["a" /* default */]),
      controlId = _useContext.controlId;

  var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-control'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ThemeProvider__["b" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  var classes;

  if (plaintext) {
    var _classes;

    classes = (_classes = {}, _classes[bsPrefix + "-plaintext"] = true, _classes);
  } else if (type === 'file') {
    var _classes2;

    classes = (_classes2 = {}, _classes2[bsPrefix + "-file"] = true, _classes2);
  } else if (type === 'range') {
    var _classes3;

    classes = (_classes3 = {}, _classes3[bsPrefix + "-range"] = true, _classes3);
  } else if (Component === 'select' && custom) {
    var _classes4;

    classes = (_classes4 = {}, _classes4[bsPrefix + "-select"] = true, _classes4[bsPrefix + "-select-" + size] = size, _classes4);
  } else {
    var _classes5;

    classes = (_classes5 = {}, _classes5[bsPrefix] = true, _classes5[bsPrefix + "-" + size] = size, _classes5);
  }

  process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_5_warning___default()(controlId == null || !id, '`controlId` is ignored on `<FormControl>` when `id` is specified.') : void 0;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    type: type,
    size: htmlSize,
    ref: ref,
    readOnly: readOnly,
    id: id || controlId,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, classes, isValid && "is-valid", isInvalid && "is-invalid")
  }));
});
FormControl.displayName = 'FormControl';
/* harmony default export */ __webpack_exports__["a"] = (Object.assign(FormControl, {
  Feedback: __WEBPACK_IMPORTED_MODULE_6__Feedback__["a" /* default */]
}));
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 138 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types_extra_lib_all__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types_extra_lib_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types_extra_lib_all__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Feedback__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FormFileInput__ = __webpack_require__(246);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FormFileLabel__ = __webpack_require__(247);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FormContext__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["id", "bsPrefix", "bsCustomPrefix", "disabled", "isValid", "isInvalid", "feedbackTooltip", "feedback", "className", "style", "label", "children", "custom", "lang", "data-browse", "as", "inputAs"];








var FormFile = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      _ref$disabled = _ref.disabled,
      disabled = _ref$disabled === void 0 ? false : _ref$disabled,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      _ref$feedbackTooltip = _ref.feedbackTooltip,
      feedbackTooltip = _ref$feedbackTooltip === void 0 ? false : _ref$feedbackTooltip,
      feedback = _ref.feedback,
      className = _ref.className,
      style = _ref.style,
      label = _ref.label,
      children = _ref.children,
      custom = _ref.custom,
      lang = _ref.lang,
      dataBrowse = _ref['data-browse'],
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      _ref$inputAs = _ref.inputAs,
      inputAs = _ref$inputAs === void 0 ? 'input' : _ref$inputAs,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var _ref2 = custom ? [bsCustomPrefix, 'custom'] : [bsPrefix, 'form-file'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ThemeProvider__["b" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  var type = 'file';

  var _useContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_8__FormContext__["a" /* default */]),
      controlId = _useContext.controlId;

  var innerFormContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
    return {
      controlId: id || controlId,
      custom: custom
    };
  }, [controlId, custom, id]);
  var hasLabel = label != null && label !== false && !children;
  var input = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__FormFileInput__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    isValid: isValid,
    isInvalid: isInvalid,
    disabled: disabled,
    as: inputAs,
    lang: lang
  }));
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__FormContext__["a" /* default */].Provider, {
    value: innerFormContext
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, {
    style: style,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, custom && "custom-" + type)
  }, children || /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Fragment, null, custom ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Fragment, null, input, hasLabel && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__FormFileLabel__["a" /* default */], {
    "data-browse": dataBrowse
  }, label)) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Fragment, null, hasLabel && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__FormFileLabel__["a" /* default */], null, label), input), (isValid || isInvalid) && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Feedback__["a" /* default */], {
    type: isValid ? 'valid' : 'invalid',
    tooltip: feedbackTooltip
  }, feedback))));
});
FormFile.displayName = 'FormFile';
FormFile.Input = __WEBPACK_IMPORTED_MODULE_6__FormFileInput__["a" /* default */];
FormFile.Label = __WEBPACK_IMPORTED_MODULE_7__FormFileLabel__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (FormFile);

/***/ }),
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormContext__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "children", "controlId", "as"];




var FormGroup = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      controlId = _ref.controlId,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'form-group');
  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
    return {
      controlId: controlId
    };
  }, [controlId]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__FormContext__["a" /* default */].Provider, {
    value: context
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix)
  }), children));
});
FormGroup.displayName = 'FormGroup';
/* harmony default export */ __webpack_exports__["a"] = (FormGroup);

/***/ }),
/* 140 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_warning__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Col__ = __webpack_require__(135);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FormContext__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["as", "bsPrefix", "column", "srOnly", "className", "htmlFor"];






var defaultProps = {
  column: false,
  srOnly: false
};
var FormLabel = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'label' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      column = _ref.column,
      srOnly = _ref.srOnly,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var _useContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_6__FormContext__["a" /* default */]),
      controlId = _useContext.controlId;

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'form-label');
  var columnClass = 'col-form-label';
  if (typeof column === 'string') columnClass = columnClass + " " + columnClass + "-" + column;
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, srOnly && 'sr-only', column && columnClass);
  process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_4_warning___default()(controlId == null || !htmlFor, '`controlId` is ignored on `<FormLabel>` when `htmlFor` is specified.') : void 0;
  htmlFor = htmlFor || controlId;
  if (column) return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Col__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    as: "label",
    className: classes,
    htmlFor: htmlFor
  }, props));
  return (
    /*#__PURE__*/
    // eslint-disable-next-line jsx-a11y/label-has-for, jsx-a11y/label-has-associated-control
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
      ref: ref,
      className: classes,
      htmlFor: htmlFor
    }, props))
  );
});
FormLabel.displayName = 'FormLabel';
FormLabel.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (FormLabel);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 141 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "as", "muted"];



var FormText = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'small' : _ref$as,
      muted = _ref.muted,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'form-text');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, muted && 'text-muted')
  }));
});
FormText.displayName = 'FormText';
/* harmony default export */ __webpack_exports__["a"] = (FormText);

/***/ }),
/* 142 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return propTypes; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "fluid", "rounded", "roundedCircle", "thumbnail"];




var propTypes = {
  /**
   * @default 'img'
   */
  bsPrefix: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /**
   * Sets image as fluid image.
   */
  fluid: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * Sets image shape as rounded.
   */
  rounded: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * Sets image shape as circle.
   */
  roundedCircle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * Sets image shape as thumbnail.
   */
  thumbnail: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool
};
var defaultProps = {
  fluid: false,
  rounded: false,
  roundedCircle: false,
  thumbnail: false
};
var Image = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      fluid = _ref.fluid,
      rounded = _ref.rounded,
      roundedCircle = _ref.roundedCircle,
      thumbnail = _ref.thumbnail,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'img');
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(fluid && bsPrefix + "-fluid", rounded && "rounded", roundedCircle && "rounded-circle", thumbnail && bsPrefix + "-thumbnail");
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("img", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    // eslint-disable-line jsx-a11y/alt-text
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, classes)
  }));
});
Image.displayName = 'Image';
Image.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Image);

/***/ }),
/* 143 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__AbstractNavItem__ = __webpack_require__(128);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "active", "disabled", "className", "variant", "action", "as", "onClick"];




var defaultProps = {
  variant: undefined,
  active: false,
  disabled: false
};
var ListGroupItem = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      variant = _ref.variant,
      action = _ref.action,
      as = _ref.as,
      onClick = _ref.onClick,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'list-group-item');
  var handleClick = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(function (event) {
    if (disabled) {
      event.preventDefault();
      event.stopPropagation();
      return;
    }

    if (onClick) onClick(event);
  }, [disabled, onClick]);

  if (disabled && props.tabIndex === undefined) {
    props.tabIndex = -1;
    props['aria-disabled'] = true;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__AbstractNavItem__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    // eslint-disable-next-line no-nested-ternary
    as: as || (action ? props.href ? 'a' : 'button' : 'div'),
    onClick: handleClick,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, active && 'active', disabled && 'disabled', variant && bsPrefix + "-" + variant, action && bsPrefix + "-action")
  }));
});
ListGroupItem.defaultProps = defaultProps;
ListGroupItem.displayName = 'ListGroupItem';
/* harmony default export */ __webpack_exports__["a"] = (ListGroupItem);

/***/ }),
/* 144 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('modal-body'));

/***/ }),
/* 145 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

var ModalContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onHide: function onHide() {}
});
/* harmony default export */ __webpack_exports__["a"] = (ModalContext);

/***/ }),
/* 146 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "contentClassName", "centered", "size", "children", "scrollable"];



var ModalDialog = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      contentClassName = _ref.contentClassName,
      centered = _ref.centered,
      size = _ref.size,
      children = _ref.children,
      scrollable = _ref.scrollable,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'modal');
  var dialogClass = bsPrefix + "-dialog";
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(dialogClass, className, size && bsPrefix + "-" + size, centered && dialogClass + "-centered", scrollable && dialogClass + "-scrollable")
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(bsPrefix + "-content", contentClassName)
  }, children));
});
ModalDialog.displayName = 'ModalDialog';
/* harmony default export */ __webpack_exports__["a"] = (ModalDialog);

/***/ }),
/* 147 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('modal-footer'));

/***/ }),
/* 148 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__divWithClassName__ = __webpack_require__(103);


var DivStyledAsH4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__divWithClassName__["a" /* default */])('h4');
/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('modal-title', {
  Component: DivStyledAsH4
}));

/***/ }),
/* 149 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_all__ = __webpack_require__(46);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_all___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_all__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NavbarContext__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CardContext__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AbstractNav__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__NavItem__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__NavLink__ = __webpack_require__(53);


var _excluded = ["as", "bsPrefix", "variant", "fill", "justify", "navbar", "navbarScroll", "className", "children", "activeKey"];










var defaultProps = {
  justify: false,
  fill: false
};
var Nav = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.forwardRef(function (uncontrolledProps, ref) {
  var _classNames;

  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_uncontrollable__["a" /* useUncontrolled */])(uncontrolledProps, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      initialBsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      fill = _useUncontrolled.fill,
      justify = _useUncontrolled.justify,
      navbar = _useUncontrolled.navbar,
      navbarScroll = _useUncontrolled.navbarScroll,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      activeKey = _useUncontrolled.activeKey,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useUncontrolled, _excluded);

  var bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ThemeProvider__["b" /* useBootstrapPrefix */])(initialBsPrefix, 'nav');
  var navbarBsPrefix;
  var cardHeaderBsPrefix;
  var isNavbar = false;
  var navbarContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_7__NavbarContext__["a" /* default */]);
  var cardContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_8__CardContext__["a" /* default */]);

  if (navbarContext) {
    navbarBsPrefix = navbarContext.bsPrefix;
    isNavbar = navbar == null ? true : navbar;
  } else if (cardContext) {
    cardHeaderBsPrefix = cardContext.cardHeaderBsPrefix;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__AbstractNav__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    as: as,
    ref: ref,
    activeKey: activeKey,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, (_classNames = {}, _classNames[bsPrefix] = !isNavbar, _classNames[navbarBsPrefix + "-nav"] = isNavbar, _classNames[navbarBsPrefix + "-nav-scroll"] = isNavbar && navbarScroll, _classNames[cardHeaderBsPrefix + "-" + variant] = !!cardHeaderBsPrefix, _classNames[bsPrefix + "-" + variant] = !!variant, _classNames[bsPrefix + "-fill"] = fill, _classNames[bsPrefix + "-justified"] = justify, _classNames))
  }, props), children);
});
Nav.displayName = 'Nav';
Nav.defaultProps = defaultProps;
Nav.Item = __WEBPACK_IMPORTED_MODULE_10__NavItem__["a" /* default */];
Nav.Link = __WEBPACK_IMPORTED_MODULE_11__NavLink__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Nav);

/***/ }),
/* 150 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "as"];



var NavbarBrand = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      as = _ref.as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'navbar-brand');
  var Component = as || (props.href ? 'a' : 'span');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix)
  }));
});
NavbarBrand.displayName = 'NavbarBrand';
/* harmony default export */ __webpack_exports__["a"] = (NavbarBrand);

/***/ }),
/* 151 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_overlays_Overlay__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_react_overlays_safeFindDOMNode__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usePopperMarginModifiers__ = __webpack_require__(159);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Fade__ = __webpack_require__(26);


var _excluded = ["children", "transition", "popperConfig"],
    _excluded2 = ["props", "arrowProps", "show", "update", "forceUpdate", "placement", "state"];






var defaultProps = {
  transition: __WEBPACK_IMPORTED_MODULE_7__Fade__["a" /* default */],
  rootClose: false,
  show: false,
  placement: 'top'
};

function wrapRefs(props, arrowProps) {
  var ref = props.ref;
  var aRef = arrowProps.ref;

  props.ref = ref.__wrapped || (ref.__wrapped = function (r) {
    return ref(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_overlays_safeFindDOMNode__["a" /* default */])(r));
  });

  arrowProps.ref = aRef.__wrapped || (aRef.__wrapped = function (r) {
    return aRef(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_react_overlays_safeFindDOMNode__["a" /* default */])(r));
  });
}

function Overlay(_ref) {
  var overlay = _ref.children,
      transition = _ref.transition,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
      outerProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var popperRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useRef"])({});

  var _usePopperMarginModif = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__usePopperMarginModifiers__["a" /* default */])(),
      ref = _usePopperMarginModif[0],
      marginModifiers = _usePopperMarginModif[1];

  var actualTransition = transition === true ? __WEBPACK_IMPORTED_MODULE_7__Fade__["a" /* default */] : transition || null;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react_overlays_Overlay__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, outerProps, {
    ref: ref,
    popperConfig: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, popperConfig, {
      modifiers: marginModifiers.concat(popperConfig.modifiers || [])
    }),
    transition: actualTransition
  }), function (_ref2) {
    var _state$modifiersData$;

    var overlayProps = _ref2.props,
        arrowProps = _ref2.arrowProps,
        show = _ref2.show,
        update = _ref2.update,
        _ = _ref2.forceUpdate,
        placement = _ref2.placement,
        state = _ref2.state,
        props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref2, _excluded2);

    wrapRefs(overlayProps, arrowProps);
    var popper = Object.assign(popperRef.current, {
      state: state,
      scheduleUpdate: update,
      placement: placement,
      outOfBoundaries: (state == null ? void 0 : (_state$modifiersData$ = state.modifiersData.hide) == null ? void 0 : _state$modifiersData$.isReferenceHidden) || false
    });
    if (typeof overlay === 'function') return overlay(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, overlayProps, {
      placement: placement,
      show: show
    }, !transition && show && {
      className: 'show'
    }, {
      popper: popper,
      arrowProps: arrowProps
    }));
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(overlay, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, overlayProps, {
      placement: placement,
      arrowProps: arrowProps,
      popper: popper,
      className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(overlay.props.className, !transition && show && 'show'),
      style: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, overlay.props.style, overlayProps.style)
    }));
  });
}

Overlay.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Overlay);

/***/ }),
/* 152 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return First; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return Prev; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return Ellipsis; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "e", function() { return Next; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "f", function() { return Last; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__SafeAnchor__ = __webpack_require__(19);


var _excluded = ["active", "disabled", "className", "style", "activeLabel", "children"],
    _excluded2 = ["children"];

/* eslint-disable react/no-multi-comp */



var defaultProps = {
  active: false,
  disabled: false,
  activeLabel: '(current)'
};
var PageItem = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var active = _ref.active,
      disabled = _ref.disabled,
      className = _ref.className,
      style = _ref.style,
      activeLabel = _ref.activeLabel,
      children = _ref.children,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var Component = active || disabled ? 'span' : __WEBPACK_IMPORTED_MODULE_4__SafeAnchor__["a" /* default */];
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("li", {
    ref: ref,
    style: style,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'page-item', {
      active: active,
      disabled: disabled
    })
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    className: "page-link",
    disabled: disabled
  }, props), children, active && activeLabel && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
    className: "sr-only"
  }, activeLabel)));
});
PageItem.defaultProps = defaultProps;
PageItem.displayName = 'PageItem';
/* harmony default export */ __webpack_exports__["a"] = (PageItem);

function createButton(name, defaultValue, label) {
  if (label === void 0) {
    label = name;
  }

  function Button(_ref2) {
    var children = _ref2.children,
        props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref2, _excluded2);

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(PageItem, props, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
      "aria-hidden": "true"
    }, children || defaultValue), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
      className: "sr-only"
    }, label));
  }

  Button.displayName = name;
  return Button;
}

var First = createButton('First', '«');
var Prev = createButton('Prev', '‹', 'Previous');
var Ellipsis = createButton('Ellipsis', '…', 'More');
var Next = createButton('Next', '›');
var Last = createButton('Last', '»');

/***/ }),
/* 153 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["as", "bsPrefix", "className", "children"];



var PopoverContent = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'popover-body');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix)
  }), children);
});
/* harmony default export */ __webpack_exports__["a"] = (PopoverContent);

/***/ }),
/* 154 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["as", "bsPrefix", "className", "children"];



var PopoverTitle = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'popover-header');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(bsPrefix, className)
  }), children);
});
/* harmony default export */ __webpack_exports__["a"] = (PopoverTitle);

/***/ }),
/* 155 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('toast-body'));

/***/ }),
/* 156 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
 // TODO: check

var ToastContext = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  onClose: function onClose() {}
});
/* harmony default export */ __webpack_exports__["a"] = (ToastContext);

/***/ }),
/* 157 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CloseButton__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ToastContext__ = __webpack_require__(156);


var _excluded = ["bsPrefix", "closeLabel", "closeButton", "className", "children"];






var defaultProps = {
  closeLabel: 'Close',
  closeButton: true
};
var ToastHeader = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      className = _ref.className,
      children = _ref.children,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'toast-header');
  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_7__ToastContext__["a" /* default */]);
  var handleClick = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__["a" /* default */])(function (e) {
    if (context && context.onClose) {
      context.onClose(e);
    }
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(bsPrefix, className)
  }), children, closeButton && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__CloseButton__["a" /* default */], {
    label: closeLabel,
    onClick: handleClick,
    className: "ml-2 mb-1",
    "data-dismiss": "toast"
  }));
});
ToastHeader.displayName = 'ToastHeader';
ToastHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ToastHeader);

/***/ }),
/* 158 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button__ = __webpack_require__(49);


var _excluded = ["children", "name", "className", "checked", "type", "onChange", "value", "disabled", "inputRef"];




var noop = function noop() {
  return undefined;
};

var ToggleButton = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      name = _ref.name,
      className = _ref.className,
      checked = _ref.checked,
      type = _ref.type,
      onChange = _ref.onChange,
      value = _ref.value,
      disabled = _ref.disabled,
      inputRef = _ref.inputRef,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useState"])(false),
      focused = _useState[0],
      setFocused = _useState[1];

  var handleFocus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(true);
  }, []);
  var handleBlur = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(function (e) {
    if (e.target.tagName === 'INPUT') setFocused(false);
  }, []);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Button__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, focused && 'focus', disabled && 'disabled'),
    type: undefined,
    active: !!checked,
    as: "label"
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("input", {
    name: name,
    type: type,
    value: value,
    ref: inputRef,
    autoComplete: "off",
    checked: !!checked,
    disabled: !!disabled,
    onFocus: handleFocus,
    onBlur: handleBlur,
    onChange: onChange || noop
  }), children);
});
ToggleButton.displayName = 'ToggleButton';
/* harmony default export */ __webpack_exports__["a"] = (ToggleButton);

/***/ }),
/* 159 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = usePopperMarginModifiers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_helpers_hasClass__ = __webpack_require__(123);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ThemeProvider__ = __webpack_require__(4);




function getMargins(element) {
  var styles = window.getComputedStyle(element);
  var top = parseFloat(styles.marginTop) || 0;
  var right = parseFloat(styles.marginRight) || 0;
  var bottom = parseFloat(styles.marginBottom) || 0;
  var left = parseFloat(styles.marginLeft) || 0;
  return {
    top: top,
    right: right,
    bottom: bottom,
    left: left
  };
}

function usePopperMarginModifiers() {
  var overlayRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  var margins = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  var arrowMargins = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(null);
  var popoverClass = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ThemeProvider__["b" /* useBootstrapPrefix */])(undefined, 'popover');
  var dropdownMenuClass = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__ThemeProvider__["b" /* useBootstrapPrefix */])(undefined, 'dropdown-menu');
  var callback = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useCallback"])(function (overlay) {
    if (!overlay || !(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_hasClass__["a" /* default */])(overlay, popoverClass) || __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_hasClass__["a" /* default */])(overlay, dropdownMenuClass))) return;
    margins.current = getMargins(overlay);
    overlay.style.margin = '0';
    overlayRef.current = overlay;
  }, [popoverClass, dropdownMenuClass]);
  var offset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useMemo"])(function () {
    return {
      name: 'offset',
      options: {
        offset: function offset(_ref) {
          var placement = _ref.placement;
          if (!margins.current) return [0, 0];
          var _margins$current = margins.current,
              top = _margins$current.top,
              left = _margins$current.left,
              bottom = _margins$current.bottom,
              right = _margins$current.right;

          switch (placement.split('-')[0]) {
            case 'top':
              return [0, bottom];

            case 'left':
              return [0, right];

            case 'bottom':
              return [0, top];

            case 'right':
              return [0, left];

            default:
              return [0, 0];
          }
        }
      }
    };
  }, [margins]);
  var arrow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useMemo"])(function () {
    return {
      name: 'arrow',
      options: {
        padding: function padding() {
          // The options here are used for Popper 2.8.4 and up.
          // For earlier version, padding is handled in popoverArrowMargins below.
          if (!arrowMargins.current) {
            return 0;
          }

          var _arrowMargins$current = arrowMargins.current,
              top = _arrowMargins$current.top,
              right = _arrowMargins$current.right;
          var padding = top || right;
          return {
            top: padding,
            left: padding,
            right: padding,
            bottom: padding
          };
        }
      }
    };
  }, [arrowMargins]); // Converts popover arrow margin to arrow modifier padding

  var popoverArrowMargins = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useMemo"])(function () {
    return {
      name: 'popoverArrowMargins',
      enabled: true,
      phase: 'main',
      fn: function fn() {
        return undefined;
      },
      requiresIfExists: ['arrow'],
      effect: function effect(_ref2) {
        var state = _ref2.state;

        if (!overlayRef.current || !state.elements.arrow || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_hasClass__["a" /* default */])(overlayRef.current, popoverClass)) {
          return undefined;
        }

        if (state.modifiersData['arrow#persistent']) {
          // @popperjs/core <= 2.8.3 uses arrow#persistent to pass padding to arrow modifier.
          var _getMargins = getMargins(state.elements.arrow),
              top = _getMargins.top,
              right = _getMargins.right;

          var padding = top || right;
          state.modifiersData['arrow#persistent'].padding = {
            top: padding,
            left: padding,
            right: padding,
            bottom: padding
          };
        } else {
          // @popperjs/core >= 2.8.4 gets the padding from the arrow modifier options,
          // so we'll get the margins here, and let the arrow modifier above pass
          // it to popper.
          arrowMargins.current = getMargins(state.elements.arrow);
        }

        state.elements.arrow.style.margin = '0';
        return function () {
          if (state.elements.arrow) state.elements.arrow.style.margin = '';
        };
      }
    };
  }, [popoverClass]);
  return [callback, [offset, arrow, popoverArrowMargins]];
}

/***/ }),
/* 160 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = useWrappedRefWithWarning;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restart_hooks_useMergedRefs__ = __webpack_require__(32);



function useWrappedRefWithWarning(ref, componentName) {
  // @ts-ignore
  if (!(process.env.NODE_ENV !== "production")) return ref; // eslint-disable-next-line react-hooks/rules-of-hooks

  var warningRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useCallback"])(function (refValue) {
    !(refValue == null || !refValue.isReactComponent) ? process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, componentName + " injected a ref to a provided `as` component that resolved to a component instance instead of a DOM element. " + 'Use `React.forwardRef` to provide the injected ref to the class component as a prop in order to pass it directly to a DOM element') : __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false) : void 0;
  }, [componentName]); // eslint-disable-next-line react-hooks/rules-of-hooks

  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__restart_hooks_useMergedRefs__["a" /* default */])(warningRef, ref);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {

if (process.env.NODE_ENV === 'production') {
  module.exports = __webpack_require__(275);
} else {
  module.exports = __webpack_require__(274);
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 162 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useDropdownMenu;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restart_hooks_useCallbackRef__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DropdownContext__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__usePopper__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__useRootClose__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__mergeOptionsWithPopperConfig__ = __webpack_require__(165);










var noop = function noop() {};
/**
 * @memberOf Dropdown
 * @param {object}  options
 * @param {boolean} options.flip Automatically adjust the menu `drop` position based on viewport edge detection
 * @param {[number, number]} options.offset Define an offset distance between the Menu and the Toggle
 * @param {boolean} options.show Display the menu manually, ignored in the context of a `Dropdown`
 * @param {boolean} options.usePopper opt in/out of using PopperJS to position menus. When disabled you must position it yourself.
 * @param {string}  options.rootCloseEvent The pointer event to listen for when determining "clicks outside" the menu for triggering a close.
 * @param {object}  options.popperConfig Options passed to the [`usePopper`](/api/usePopper) hook.
 */


function useDropdownMenu(options) {
  if (options === void 0) {
    options = {};
  }

  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_5__DropdownContext__["a" /* default */]);

  var _useCallbackRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__restart_hooks_useCallbackRef__["a" /* default */])(),
      arrowElement = _useCallbackRef[0],
      attachArrowRef = _useCallbackRef[1];

  var hasShownRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
  var _options = options,
      flip = _options.flip,
      offset = _options.offset,
      rootCloseEvent = _options.rootCloseEvent,
      _options$fixed = _options.fixed,
      fixed = _options$fixed === void 0 ? false : _options$fixed,
      _options$popperConfig = _options.popperConfig,
      popperConfig = _options$popperConfig === void 0 ? {} : _options$popperConfig,
      _options$usePopper = _options.usePopper,
      shouldUsePopper = _options$usePopper === void 0 ? !!context : _options$usePopper;
  var show = (context == null ? void 0 : context.show) == null ? !!options.show : context.show;
  var alignEnd = (context == null ? void 0 : context.alignEnd) == null ? options.alignEnd : context.alignEnd;

  if (show && !hasShownRef.current) {
    hasShownRef.current = true;
  }

  var handleClose = function handleClose(e) {
    context == null ? void 0 : context.toggle(false, e);
  };

  var _ref = context || {},
      drop = _ref.drop,
      setMenu = _ref.setMenu,
      menuElement = _ref.menuElement,
      toggleElement = _ref.toggleElement;

  var placement = alignEnd ? 'bottom-end' : 'bottom-start';
  if (drop === 'up') placement = alignEnd ? 'top-end' : 'top-start';else if (drop === 'right') placement = alignEnd ? 'right-end' : 'right-start';else if (drop === 'left') placement = alignEnd ? 'left-end' : 'left-start';
  var popper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__usePopper__["a" /* default */])(toggleElement, menuElement, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__mergeOptionsWithPopperConfig__["a" /* default */])({
    placement: placement,
    enabled: !!(shouldUsePopper && show),
    enableEvents: show,
    offset: offset,
    flip: flip,
    fixed: fixed,
    arrowElement: arrowElement,
    popperConfig: popperConfig
  }));

  var menuProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: setMenu || noop,
    'aria-labelledby': toggleElement == null ? void 0 : toggleElement.id
  }, popper.attributes.popper, {
    style: popper.styles.popper
  });

  var metadata = {
    show: show,
    alignEnd: alignEnd,
    hasShown: hasShownRef.current,
    toggle: context == null ? void 0 : context.toggle,
    popper: shouldUsePopper ? popper : null,
    arrowProps: shouldUsePopper ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({
      ref: attachArrowRef
    }, popper.attributes.arrow, {
      style: popper.styles.arrow
    }) : {}
  };
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__useRootClose__["a" /* default */])(menuElement, handleClose, {
    clickTrigger: rootCloseEvent,
    disabled: !show
  });
  return [menuProps, metadata];
}
var propTypes = {
  /**
   * A render prop that returns a Menu element. The `props`
   * argument should spread through to **a component that can accept a ref**.
   *
   * @type {Function ({
   *   show: boolean,
   *   alignEnd: boolean,
   *   close: (?SyntheticEvent) => void,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *   },
   * }) => React.Element}
   */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,

  /**
   * Controls the visible state of the menu, generally this is
   * provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  show: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * Aligns the dropdown menu to the 'end' of it's placement position.
   * Generally this is provided by the parent `Dropdown` component,
   * but may also be specified as a prop directly.
   */
  alignEnd: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Dropdown to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,
  usePopper: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf([true, false]),

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,

  /**
   * Override the default event used by RootCloseWrapper.
   */
  rootCloseEvent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.string
};
var defaultProps = {
  usePopper: true
};

/**
 * Also exported as `<Dropdown.Menu>` from `Dropdown`.
 *
 * @displayName DropdownMenu
 * @memberOf Dropdown
 */
function DropdownMenu(_ref2) {
  var children = _ref2.children,
      options = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref2, ["children"]);

  var _useDropdownMenu = useDropdownMenu(options),
      props = _useDropdownMenu[0],
      meta = _useDropdownMenu[1];

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Fragment, null, meta.hasShown ? children(props, meta) : null);
}

DropdownMenu.displayName = 'ReactOverlaysDropdownMenu';
DropdownMenu.propTypes = propTypes;
DropdownMenu.defaultProps = defaultProps;
/** @component */

/* harmony default export */ __webpack_exports__["b"] = (DropdownMenu);

/***/ }),
/* 163 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useDropdownToggle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__DropdownContext__ = __webpack_require__(106);




var noop = function noop() {};
/**
 * Wires up Dropdown toggle functionality, returning a set a props to attach
 * to the element that functions as the dropdown toggle (generally a button).
 *
 * @memberOf Dropdown
 */


function useDropdownToggle() {
  var _ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_2__DropdownContext__["a" /* default */]) || {},
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$toggle = _ref.toggle,
      toggle = _ref$toggle === void 0 ? noop : _ref$toggle,
      setToggle = _ref.setToggle;

  var handleClick = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useCallback"])(function (e) {
    toggle(!show, e);
  }, [show, toggle]);
  return [{
    ref: setToggle || noop,
    onClick: handleClick,
    'aria-haspopup': true,
    'aria-expanded': !!show
  }, {
    show: show,
    toggle: toggle
  }];
}
var propTypes = {
  /**
   * A render prop that returns a Toggle element. The `props`
   * argument should spread through to **a component that can accept a ref**. Use
   * the `onToggle` argument to toggle the menu open or closed
   *
   * @type {Function ({
   *   show: boolean,
   *   toggle: (show: boolean) => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     aria-haspopup: true
   *     aria-expanded: boolean
   *   },
   * }) => React.Element}
   */
  children: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.func.isRequired
};

/**
 * Also exported as `<Dropdown.Toggle>` from `Dropdown`.
 *
 * @displayName DropdownToggle
 * @memberOf Dropdown
 */
function DropdownToggle(_ref2) {
  var children = _ref2.children;

  var _useDropdownToggle = useDropdownToggle(),
      props = _useDropdownToggle[0],
      meta = _useDropdownToggle[1];

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Fragment, null, children(props, meta));
}

DropdownToggle.displayName = 'ReactOverlaysDropdownToggle';
DropdownToggle.propTypes = propTypes;
/** @component */

/* harmony default export */ __webpack_exports__["b"] = (DropdownToggle);

/***/ }),
/* 164 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_helpers_addClass__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_helpers_removeClass__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dom_helpers_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dom_helpers_scrollbarSize__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__isOverflowing__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__manageAriaHidden__ = __webpack_require__(281);







function findIndexOf(arr, cb) {
  var idx = -1;
  arr.some(function (d, i) {
    if (cb(d, i)) {
      idx = i;
      return true;
    }

    return false;
  });
  return idx;
}

/**
 * Proper state management for containers and the modals in those containers.
 *
 * @internal Used by the Modal to ensure proper styling of containers.
 */
var ModalManager = /*#__PURE__*/function () {
  function ModalManager(_temp) {
    var _ref = _temp === void 0 ? {} : _temp,
        _ref$hideSiblingNodes = _ref.hideSiblingNodes,
        hideSiblingNodes = _ref$hideSiblingNodes === void 0 ? true : _ref$hideSiblingNodes,
        _ref$handleContainerO = _ref.handleContainerOverflow,
        handleContainerOverflow = _ref$handleContainerO === void 0 ? true : _ref$handleContainerO;

    this.hideSiblingNodes = void 0;
    this.handleContainerOverflow = void 0;
    this.modals = void 0;
    this.containers = void 0;
    this.data = void 0;
    this.scrollbarSize = void 0;
    this.hideSiblingNodes = hideSiblingNodes;
    this.handleContainerOverflow = handleContainerOverflow;
    this.modals = [];
    this.containers = [];
    this.data = [];
    this.scrollbarSize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_dom_helpers_scrollbarSize__["a" /* default */])();
  }

  var _proto = ModalManager.prototype;

  _proto.isContainerOverflowing = function isContainerOverflowing(modal) {
    var data = this.data[this.containerIndexFromModal(modal)];
    return data && data.overflowing;
  };

  _proto.containerIndexFromModal = function containerIndexFromModal(modal) {
    return findIndexOf(this.data, function (d) {
      return d.modals.indexOf(modal) !== -1;
    });
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var style = {
      overflow: 'hidden'
    }; // we are only interested in the actual `style` here
    // because we will override it

    containerState.style = {
      overflow: container.style.overflow,
      paddingRight: container.style.paddingRight
    };

    if (containerState.overflowing) {
      // use computed style, here to get the real padding
      // to add our scrollbar width
      style.paddingRight = parseInt(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_css__["a" /* default */])(container, 'paddingRight') || '0', 10) + this.scrollbarSize + "px";
    }

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_css__["a" /* default */])(container, style);
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    Object.assign(container.style, containerState.style);
  };

  _proto.add = function add(modal, container, className) {
    var modalIdx = this.modals.indexOf(modal);
    var containerIdx = this.containers.indexOf(container);

    if (modalIdx !== -1) {
      return modalIdx;
    }

    modalIdx = this.modals.length;
    this.modals.push(modal);

    if (this.hideSiblingNodes) {
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manageAriaHidden__["a" /* hideSiblings */])(container, modal);
    }

    if (containerIdx !== -1) {
      this.data[containerIdx].modals.push(modal);
      return modalIdx;
    }

    var data = {
      modals: [modal],
      // right now only the first modal of a container will have its classes applied
      classes: className ? className.split(/\s+/) : [],
      overflowing: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__isOverflowing__["a" /* default */])(container)
    };

    if (this.handleContainerOverflow) {
      this.setContainerStyle(data, container);
    }

    data.classes.forEach(__WEBPACK_IMPORTED_MODULE_0_dom_helpers_addClass__["a" /* default */].bind(null, container));
    this.containers.push(container);
    this.data.push(data);
    return modalIdx;
  };

  _proto.remove = function remove(modal) {
    var modalIdx = this.modals.indexOf(modal);

    if (modalIdx === -1) {
      return;
    }

    var containerIdx = this.containerIndexFromModal(modal);
    var data = this.data[containerIdx];
    var container = this.containers[containerIdx];
    data.modals.splice(data.modals.indexOf(modal), 1);
    this.modals.splice(modalIdx, 1); // if that was the last modal in a container,
    // clean up the container

    if (data.modals.length === 0) {
      data.classes.forEach(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_removeClass__["a" /* default */].bind(null, container));

      if (this.handleContainerOverflow) {
        this.removeContainerStyle(data, container);
      }

      if (this.hideSiblingNodes) {
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manageAriaHidden__["b" /* showSiblings */])(container, modal);
      }

      this.containers.splice(containerIdx, 1);
      this.data.splice(containerIdx, 1);
    } else if (this.hideSiblingNodes) {
      // otherwise make sure the next top modal is visible to a SR
      var _data$modals = data.modals[data.modals.length - 1],
          backdrop = _data$modals.backdrop,
          dialog = _data$modals.dialog;
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manageAriaHidden__["c" /* ariaHidden */])(false, dialog);
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__manageAriaHidden__["c" /* ariaHidden */])(false, backdrop);
    }
  };

  _proto.isTopModal = function isTopModal(modal) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === modal;
  };

  return ModalManager;
}();

/* harmony default export */ __webpack_exports__["a"] = (ModalManager);

/***/ }),
/* 165 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export toModifierMap */
/* unused harmony export toModifierArray */
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeOptionsWithPopperConfig;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);

function toModifierMap(modifiers) {
  var result = {};

  if (!Array.isArray(modifiers)) {
    return modifiers || result;
  } // eslint-disable-next-line no-unused-expressions


  modifiers == null ? void 0 : modifiers.forEach(function (m) {
    result[m.name] = m;
  });
  return result;
}
function toModifierArray(map) {
  if (map === void 0) {
    map = {};
  }

  if (Array.isArray(map)) return map;
  return Object.keys(map).map(function (k) {
    map[k].name = k;
    return map[k];
  });
}
function mergeOptionsWithPopperConfig(_ref) {
  var _modifiers$preventOve, _modifiers$preventOve2, _modifiers$offset, _modifiers$arrow;

  var enabled = _ref.enabled,
      enableEvents = _ref.enableEvents,
      placement = _ref.placement,
      flip = _ref.flip,
      offset = _ref.offset,
      fixed = _ref.fixed,
      containerPadding = _ref.containerPadding,
      arrowElement = _ref.arrowElement,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig;
  var modifiers = toModifierMap(popperConfig.modifiers);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, popperConfig, {
    placement: placement,
    enabled: enabled,
    strategy: fixed ? 'fixed' : popperConfig.strategy,
    modifiers: toModifierArray(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, modifiers, {
      eventListeners: {
        enabled: enableEvents
      },
      preventOverflow: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, modifiers.preventOverflow, {
        options: containerPadding ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
          padding: containerPadding
        }, (_modifiers$preventOve = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve.options) : (_modifiers$preventOve2 = modifiers.preventOverflow) == null ? void 0 : _modifiers$preventOve2.options
      }),
      offset: {
        options: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
          offset: offset
        }, (_modifiers$offset = modifiers.offset) == null ? void 0 : _modifiers$offset.options)
      },
      arrow: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, modifiers.arrow, {
        enabled: !!arrowElement,
        options: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, (_modifiers$arrow = modifiers.arrow) == null ? void 0 : _modifiers$arrow.options, {
          element: arrowElement
        })
      }),
      flip: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
        enabled: !!flip
      }, modifiers.flip)
    }))
  });
}

/***/ }),
/* 166 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return createPopper; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__popperjs_core_lib_modifiers_arrow__ = __webpack_require__(183);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__popperjs_core_lib_modifiers_computeStyles__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__popperjs_core_lib_modifiers_eventListeners__ = __webpack_require__(185);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__popperjs_core_lib_modifiers_flip__ = __webpack_require__(186);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popperjs_core_lib_modifiers_hide__ = __webpack_require__(187);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__popperjs_core_lib_modifiers_offset__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__popperjs_core_lib_modifiers_popperOffsets__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popperjs_core_lib_modifiers_preventOverflow__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__popperjs_core_lib_enums__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__popperjs_core_lib_popper_base__ = __webpack_require__(191);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_8__popperjs_core_lib_enums__["m"]; });









 // For the common JS build we will turn this file into a bundle with no imports.
// This is b/c the Popper lib is all esm files, and would break in a common js only environment

var createPopper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__popperjs_core_lib_popper_base__["a" /* popperGenerator */])({
  defaultModifiers: [__WEBPACK_IMPORTED_MODULE_4__popperjs_core_lib_modifiers_hide__["a" /* default */], __WEBPACK_IMPORTED_MODULE_6__popperjs_core_lib_modifiers_popperOffsets__["a" /* default */], __WEBPACK_IMPORTED_MODULE_1__popperjs_core_lib_modifiers_computeStyles__["a" /* default */], __WEBPACK_IMPORTED_MODULE_2__popperjs_core_lib_modifiers_eventListeners__["a" /* default */], __WEBPACK_IMPORTED_MODULE_5__popperjs_core_lib_modifiers_offset__["a" /* default */], __WEBPACK_IMPORTED_MODULE_3__popperjs_core_lib_modifiers_flip__["a" /* default */], __WEBPACK_IMPORTED_MODULE_7__popperjs_core_lib_modifiers_preventOverflow__["a" /* default */], __WEBPACK_IMPORTED_MODULE_0__popperjs_core_lib_modifiers_arrow__["a" /* default */]]
});


/***/ }),
/* 167 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restart_hooks_useSafeState__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__popper__ = __webpack_require__(166);






var initialPopperStyles = function initialPopperStyles(position) {
  return {
    position: position,
    top: '0',
    left: '0',
    opacity: '0',
    pointerEvents: 'none'
  };
};

var disabledApplyStylesModifier = {
  name: 'applyStyles',
  enabled: false
}; // until docjs supports type exports...

var ariaDescribedByModifier = {
  name: 'ariaDescribedBy',
  enabled: true,
  phase: 'afterWrite',
  effect: function effect(_ref) {
    var state = _ref.state;
    return function () {
      var _state$elements = state.elements,
          reference = _state$elements.reference,
          popper = _state$elements.popper;

      if ('removeAttribute' in reference) {
        var ids = (reference.getAttribute('aria-describedby') || '').split(',').filter(function (id) {
          return id.trim() !== popper.id;
        });
        if (!ids.length) reference.removeAttribute('aria-describedby');else reference.setAttribute('aria-describedby', ids.join(','));
      }
    };
  },
  fn: function fn(_ref2) {
    var _popper$getAttribute;

    var state = _ref2.state;
    var _state$elements2 = state.elements,
        popper = _state$elements2.popper,
        reference = _state$elements2.reference;
    var role = (_popper$getAttribute = popper.getAttribute('role')) == null ? void 0 : _popper$getAttribute.toLowerCase();

    if (popper.id && role === 'tooltip' && 'setAttribute' in reference) {
      var ids = reference.getAttribute('aria-describedby');

      if (ids && ids.split(',').indexOf(popper.id) !== -1) {
        return;
      }

      reference.setAttribute('aria-describedby', ids ? ids + "," + popper.id : popper.id);
    }
  }
};
var EMPTY_MODIFIERS = [];
/**
 * Position an element relative some reference element using Popper.js
 *
 * @param referenceElement
 * @param popperElement
 * @param {object}      options
 * @param {object=}     options.modifiers Popper.js modifiers
 * @param {boolean=}    options.enabled toggle the popper functionality on/off
 * @param {string=}     options.placement The popper element placement relative to the reference element
 * @param {string=}     options.strategy the positioning strategy
 * @param {boolean=}    options.eventsEnabled have Popper listen on window resize events to reposition the element
 * @param {function=}   options.onCreate called when the popper is created
 * @param {function=}   options.onUpdate called when the popper is updated
 *
 * @returns {UsePopperState} The popper state
 */

function usePopper(referenceElement, popperElement, _temp) {
  var _ref3 = _temp === void 0 ? {} : _temp,
      _ref3$enabled = _ref3.enabled,
      enabled = _ref3$enabled === void 0 ? true : _ref3$enabled,
      _ref3$placement = _ref3.placement,
      placement = _ref3$placement === void 0 ? 'bottom' : _ref3$placement,
      _ref3$strategy = _ref3.strategy,
      strategy = _ref3$strategy === void 0 ? 'absolute' : _ref3$strategy,
      _ref3$modifiers = _ref3.modifiers,
      modifiers = _ref3$modifiers === void 0 ? EMPTY_MODIFIERS : _ref3$modifiers,
      config = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref3, ["enabled", "placement", "strategy", "modifiers"]);

  var popperInstanceRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useRef"])();
  var update = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useCallback"])(function () {
    var _popperInstanceRef$cu;

    (_popperInstanceRef$cu = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu.update();
  }, []);
  var forceUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useCallback"])(function () {
    var _popperInstanceRef$cu2;

    (_popperInstanceRef$cu2 = popperInstanceRef.current) == null ? void 0 : _popperInstanceRef$cu2.forceUpdate();
  }, []);

  var _useSafeState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__restart_hooks_useSafeState__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useState"])({
    placement: placement,
    update: update,
    forceUpdate: forceUpdate,
    attributes: {},
    styles: {
      popper: initialPopperStyles(strategy),
      arrow: {}
    }
  })),
      popperState = _useSafeState[0],
      setState = _useSafeState[1];

  var updateModifier = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useMemo"])(function () {
    return {
      name: 'updateStateModifier',
      enabled: true,
      phase: 'write',
      requires: ['computeStyles'],
      fn: function fn(_ref4) {
        var state = _ref4.state;
        var styles = {};
        var attributes = {};
        Object.keys(state.elements).forEach(function (element) {
          styles[element] = state.styles[element];
          attributes[element] = state.attributes[element];
        });
        setState({
          state: state,
          styles: styles,
          attributes: attributes,
          update: update,
          forceUpdate: forceUpdate,
          placement: state.placement
        });
      }
    };
  }, [update, forceUpdate, setState]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useEffect"])(function () {
    if (!popperInstanceRef.current || !enabled) return;
    popperInstanceRef.current.setOptions({
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [updateModifier, disabledApplyStylesModifier])
    }); // intentionally NOT re-running on new modifiers
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [strategy, placement, updateModifier, enabled]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useEffect"])(function () {
    if (!enabled || referenceElement == null || popperElement == null) {
      return undefined;
    }

    popperInstanceRef.current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__popper__["a" /* createPopper */])(referenceElement, popperElement, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, config, {
      placement: placement,
      strategy: strategy,
      modifiers: [].concat(modifiers, [ariaDescribedByModifier, updateModifier])
    }));
    return function () {
      if (popperInstanceRef.current != null) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = undefined;
        setState(function (s) {
          return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, s, {
            attributes: {},
            styles: {
              popper: initialPopperStyles(strategy)
            }
          });
        });
      }
    }; // This is only run once to _create_ the popper
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [enabled, referenceElement, popperElement]);
  return popperState;
}

/* harmony default export */ __webpack_exports__["a"] = (usePopper);

/***/ }),
/* 168 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_helpers_contains__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_helpers_listen__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_warning__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ownerDocument__ = __webpack_require__(282);






var escapeKeyCode = 27;

var noop = function noop() {};

function isLeftClickEvent(event) {
  return event.button === 0;
}

function isModifiedEvent(event) {
  return !!(event.metaKey || event.altKey || event.ctrlKey || event.shiftKey);
}

var getRefTarget = function getRefTarget(ref) {
  return ref && ('current' in ref ? ref.current : ref);
};

/**
 * The `useRootClose` hook registers your callback on the document
 * when rendered. Powers the `<Overlay/>` component. This is used achieve modal
 * style behavior where your callback is triggered when the user tries to
 * interact with the rest of the document or hits the `esc` key.
 *
 * @param {Ref<HTMLElement>| HTMLElement} ref  The element boundary
 * @param {function} onRootClose
 * @param {object=}  options
 * @param {boolean=} options.disabled
 * @param {string=}  options.clickTrigger The DOM event name (click, mousedown, etc) to attach listeners on
 */
function useRootClose(ref, onRootClose, _temp) {
  var _ref = _temp === void 0 ? {} : _temp,
      disabled = _ref.disabled,
      _ref$clickTrigger = _ref.clickTrigger,
      clickTrigger = _ref$clickTrigger === void 0 ? 'click' : _ref$clickTrigger;

  var preventMouseRootCloseRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useRef"])(false);
  var onClose = onRootClose || noop;
  var handleMouseCapture = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useCallback"])(function (e) {
    var currentTarget = getRefTarget(ref);
    __WEBPACK_IMPORTED_MODULE_4_warning___default()(!!currentTarget, 'RootClose captured a close event but does not have a ref to compare it to. ' + 'useRootClose(), should be passed a ref that resolves to a DOM node');
    preventMouseRootCloseRef.current = !currentTarget || isModifiedEvent(e) || !isLeftClickEvent(e) || !!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_dom_helpers_contains__["a" /* default */])(currentTarget, e.target);
  }, [ref]);
  var handleMouse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__restart_hooks_useEventCallback__["a" /* default */])(function (e) {
    if (!preventMouseRootCloseRef.current) {
      onClose(e);
    }
  });
  var handleKeyUp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__restart_hooks_useEventCallback__["a" /* default */])(function (e) {
    if (e.keyCode === escapeKeyCode) {
      onClose(e);
    }
  });
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useEffect"])(function () {
    if (disabled || ref == null) return undefined; // Store the current event to avoid triggering handlers immediately
    // https://github.com/facebook/react/issues/20074

    var currentEvent = window.event;
    var doc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ownerDocument__["a" /* default */])(getRefTarget(ref)); // Use capture for this listener so it fires before React's listener, to
    // avoid false positives in the contains() check below if the target DOM
    // element is removed in the React mouse callback.

    var removeMouseCaptureListener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_listen__["a" /* default */])(doc, clickTrigger, handleMouseCapture, true);
    var removeMouseListener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_listen__["a" /* default */])(doc, clickTrigger, function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleMouse(e);
    });
    var removeKeyupListener = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_listen__["a" /* default */])(doc, 'keyup', function (e) {
      // skip if this event is the same as the one running when we added the handlers
      if (e === currentEvent) {
        currentEvent = undefined;
        return;
      }

      handleKeyUp(e);
    });
    var mobileSafariHackListeners = [];

    if ('ontouchstart' in doc.documentElement) {
      mobileSafariHackListeners = [].slice.call(doc.body.children).map(function (el) {
        return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_listen__["a" /* default */])(el, 'mousemove', noop);
      });
    }

    return function () {
      removeMouseCaptureListener();
      removeMouseListener();
      removeKeyupListener();
      mobileSafariHackListeners.forEach(function (remove) {
        return remove();
      });
    };
  }, [ref, disabled, clickTrigger, handleMouseCapture, handleMouse, handleKeyUp]);
}

/* harmony default export */ __webpack_exports__["a"] = (useRootClose);

/***/ }),
/* 169 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export resolveContainerRef */
/* harmony export (immutable) */ __webpack_exports__["a"] = useWaitForDOMRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_helpers_ownerDocument__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);


var resolveContainerRef = function resolveContainerRef(ref) {
  var _ref;

  if (typeof document === 'undefined') return null;
  if (ref == null) return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_dom_helpers_ownerDocument__["a" /* default */])().body;
  if (typeof ref === 'function') ref = ref();
  if (ref && 'current' in ref) ref = ref.current;
  if ((_ref = ref) != null && _ref.nodeType) return ref || null;
  return null;
};
function useWaitForDOMRef(ref, onResolved) {
  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useState"])(function () {
    return resolveContainerRef(ref);
  }),
      resolvedRef = _useState[0],
      setRef = _useState[1];

  if (!resolvedRef) {
    var earlyRef = resolveContainerRef(ref);
    if (earlyRef) setRef(earlyRef);
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useEffect"])(function () {
    if (onResolved && resolvedRef) {
      onResolved(resolvedRef);
    }
  }, [onResolved, resolvedRef]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useEffect"])(function () {
    var nextRef = resolveContainerRef(ref);

    if (nextRef !== resolvedRef) {
      setRef(nextRef);
    }
  }, [ref, resolvedRef]);
  return resolvedRef;
}

/***/ }),
/* 170 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["d"] = uncontrolledPropTypes;
/* harmony export (immutable) */ __webpack_exports__["c"] = isProp;
/* harmony export (immutable) */ __webpack_exports__["b"] = defaultKey;
/* harmony export (immutable) */ __webpack_exports__["a"] = canAcceptRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_invariant__);


var noop = function noop() {};

function readOnlyPropType(handler, name) {
  return function (props, propName) {
    if (props[propName] !== undefined) {
      if (!props[handler]) {
        return new Error("You have provided a `" + propName + "` prop to `" + name + "` " + ("without an `" + handler + "` handler prop. This will render a read-only field. ") + ("If the field should be mutable use `" + defaultKey(propName) + "`. ") + ("Otherwise, set `" + handler + "`."));
      }
    }
  };
}

function uncontrolledPropTypes(controlledValues, displayName) {
  var propTypes = {};
  Object.keys(controlledValues).forEach(function (prop) {
    // add default propTypes for folks that use runtime checks
    propTypes[defaultKey(prop)] = noop;

    if (process.env.NODE_ENV !== 'production') {
      var handler = controlledValues[prop];
      !(typeof handler === 'string' && handler.trim().length) ? process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false, 'Uncontrollable - [%s]: the prop `%s` needs a valid handler key name in order to make it uncontrollable', displayName, prop) : __WEBPACK_IMPORTED_MODULE_0_invariant___default()(false) : void 0;
      propTypes[prop] = readOnlyPropType(handler, displayName);
    }
  });
  return propTypes;
}
function isProp(props, prop) {
  return props[prop] !== undefined;
}
function defaultKey(key) {
  return 'default' + key.charAt(0).toUpperCase() + key.substr(1);
}
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

function canAcceptRef(component) {
  return !!component && (typeof component !== 'function' || component.prototype && component.prototype.isReactComponent);
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SessionizeService_1 = __webpack_require__(111);
var query_string_1 = __webpack_require__(90);
var react_bootstrap_1 = __webpack_require__(273);
var SponsorSlider_1 = __webpack_require__(286);
var UpcomingSessions_1 = __webpack_require__(287);
;
var SessionIntro = /** @class */ (function (_super) {
    __extends(SessionIntro, _super);
    function SessionIntro(props) {
        var _this = _super.call(this, props) || this;
        _this.state = { Session: null, Sessions: [], RemainingTime: { Minutes: 0, Seconds: 0 } };
        return _this;
    }
    SessionIntro.prototype.countdown = function () {
        if (this.state.Session == null) {
            return;
        }
        else {
            var now = new Date();
            var start = new Date(Date.parse(this.state.Session.startsAt));
            var left = start.valueOf() - now.valueOf();
            var remain = { Hours: "0", Minutes: "0", Seconds: "00" };
            if (left >= 0) {
                var tmp = new Date(left);
                remain.Hours = tmp.getHours() + "";
                remain.Minutes = ("00" + tmp.getMinutes()).slice(-2);
                remain.Seconds = ("00" + tmp.getSeconds()).slice(-2);
            }
            else {
                clearInterval(this.countdownInterval);
            }
            this.setState({ RemainingTime: remain });
        }
    };
    SessionIntro.prototype.loadSponsors = function () {
        return __awaiter(this, void 0, void 0, function () {
            var sponsors;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Loading sponsors");
                        return [4 /*yield*/, SessionizeService_1.default.getSponsors()];
                    case 1:
                        sponsors = _a.sent();
                        console.log("Sponsors Loaded");
                        this.setState({ Sponsors: sponsors });
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionIntro.prototype.loadSession = function () {
        return __awaiter(this, void 0, void 0, function () {
            var parsed, sessions, session;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        console.log("Loading Session");
                        parsed = query_string_1.parse(location.search);
                        return [4 /*yield*/, SessionizeService_1.default.GetSessions()];
                    case 1:
                        sessions = _a.sent();
                        console.log("Session Loaded");
                        session = sessions.filter(function (s) { return s.id == parsed.id; })[0];
                        this.setState({ Session: session, Sessions: sessions });
                        this.countdown();
                        this.countdownInterval = setInterval(this.countdown.bind(this), 1000);
                        return [2 /*return*/];
                }
            });
        });
    };
    SessionIntro.prototype.componentDidMount = function () {
        this.loadSession();
        this.loadSponsors();
    };
    SessionIntro.prototype.componentWillUnmount = function () {
        clearInterval(this.countdownInterval);
    };
    SessionIntro.prototype.render = function () {
        if (this.state.Session == null) {
            return "Loading";
        }
        var sponsor = null;
        var sp = "";
        var sptemp = this.state.Session.questionAnswers.filter(function (x) { return x.question == "Sponsor"; });
        if (sptemp.length > 0) {
            sp = this.state.Session.questionAnswers.filter(function (x) { return x.question == "Sponsor"; })[0].answer;
            sponsor = this.state.Sponsors.filter(function (x) { return x.Sponsor == sp; })[0];
        }
        if (sponsor == null) {
            sp = "all";
        }
        sponsor = this.state.Sponsors.filter(function (x) { return x.Sponsor == sp; })[0];
        var hours = null;
        if (this.state.RemainingTime.Hours != "0") {
            hours = this.state.RemainingTime.Hours + ":";
        }
        return React.createElement("div", null,
            React.createElement("div", { className: "sessionTitle" }, this.state.Session.title),
            React.createElement("div", { className: "sessionSpeakers" }, this.state.Session.speakers.map(function (s) { return s.name; }).join(", ")),
            React.createElement("div", { className: "sessionCountdown" },
                "Session Starts in ",
                React.createElement("span", null,
                    hours,
                    this.state.RemainingTime.Minutes,
                    ":",
                    this.state.RemainingTime.Seconds)),
            React.createElement("div", { className: "contentSlider" },
                React.createElement(react_bootstrap_1.Carousel, { controls: false },
                    React.createElement(react_bootstrap_1.Carousel.Item, { interval: 10000 },
                        React.createElement(SponsorSlider_1.default, { Session: this.state.Session, Sponsor: sponsor })),
                    React.createElement(react_bootstrap_1.Carousel.Item, { interval: 10000 },
                        React.createElement(UpcomingSessions_1.default, { Session: this.state.Session, Sessions: this.state.Sessions })))));
    };
    return SessionIntro;
}(React.Component));
exports.default = SessionIntro;


/***/ }),
/* 172 */,
/* 173 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = _setPrototypeOf;
function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

/***/ }),
/* 174 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = popperGenerator;
/* unused harmony export createPopper */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getCompositeRect_js__ = __webpack_require__(176);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_orderModifiers_js__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_debounce_js__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_validateModifiers_js__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_uniqueBy_js__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_getBasePlacement_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_mergeByName_js__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__utils_detectOverflow_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dom_utils_instanceOf_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__enums_js__ = __webpack_require__(8);
/* unused harmony reexport detectOverflow */














var INVALID_ELEMENT_ERROR = 'Popper: Invalid reference or popper argument provided. They must be either a DOM element or virtual element.';
var INFINITE_LOOP_ERROR = 'Popper: An infinite loop in the modifiers cycle has been detected! The cycle has been interrupted to prevent a browser crash.';
var DEFAULT_OPTIONS = {
  placement: 'bottom',
  modifiers: [],
  strategy: 'absolute'
};

function areValidElements() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return !args.some(function (element) {
    return !(element && typeof element.getBoundingClientRect === 'function');
  });
}

function popperGenerator(generatorOptions) {
  if (generatorOptions === void 0) {
    generatorOptions = {};
  }

  var _generatorOptions = generatorOptions,
      _generatorOptions$def = _generatorOptions.defaultModifiers,
      defaultModifiers = _generatorOptions$def === void 0 ? [] : _generatorOptions$def,
      _generatorOptions$def2 = _generatorOptions.defaultOptions,
      defaultOptions = _generatorOptions$def2 === void 0 ? DEFAULT_OPTIONS : _generatorOptions$def2;
  return function createPopper(reference, popper, options) {
    if (options === void 0) {
      options = defaultOptions;
    }

    var state = {
      placement: 'bottom',
      orderedModifiers: [],
      options: Object.assign({}, DEFAULT_OPTIONS, defaultOptions),
      modifiersData: {},
      elements: {
        reference: reference,
        popper: popper
      },
      attributes: {},
      styles: {}
    };
    var effectCleanupFns = [];
    var isDestroyed = false;
    var instance = {
      state: state,
      setOptions: function setOptions(setOptionsAction) {
        var options = typeof setOptionsAction === 'function' ? setOptionsAction(state.options) : setOptionsAction;
        cleanupModifierEffects();
        state.options = Object.assign({}, defaultOptions, state.options, options);
        state.scrollParents = {
          reference: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__dom_utils_instanceOf_js__["c" /* isElement */])(reference) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__["a" /* default */])(reference) : reference.contextElement ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__["a" /* default */])(reference.contextElement) : [],
          popper: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_utils_listScrollParents_js__["a" /* default */])(popper)
        }; // Orders the modifiers based on their dependencies and `phase`
        // properties

        var orderedModifiers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_orderModifiers_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_mergeByName_js__["a" /* default */])([].concat(defaultModifiers, state.options.modifiers))); // Strip out disabled modifiers

        state.orderedModifiers = orderedModifiers.filter(function (m) {
          return m.enabled;
        }); // Validate the provided modifiers so that the consumer will get warned
        // if one of the modifiers is invalid for any reason

        if (process.env.NODE_ENV !== "production") {
          var modifiers = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_uniqueBy_js__["a" /* default */])([].concat(orderedModifiers, state.options.modifiers), function (_ref) {
            var name = _ref.name;
            return name;
          });
          __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_validateModifiers_js__["a" /* default */])(modifiers);

          if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_getBasePlacement_js__["a" /* default */])(state.options.placement) === __WEBPACK_IMPORTED_MODULE_13__enums_js__["l" /* auto */]) {
            var flipModifier = state.orderedModifiers.find(function (_ref2) {
              var name = _ref2.name;
              return name === 'flip';
            });

            if (!flipModifier) {
              console.error(['Popper: "auto" placements require the "flip" modifier be', 'present and enabled to work.'].join(' '));
            }
          }

          var _getComputedStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__["a" /* default */])(popper),
              marginTop = _getComputedStyle.marginTop,
              marginRight = _getComputedStyle.marginRight,
              marginBottom = _getComputedStyle.marginBottom,
              marginLeft = _getComputedStyle.marginLeft; // We no longer take into account `margins` on the popper, and it can
          // cause bugs with positioning, so we'll warn the consumer


          if ([marginTop, marginRight, marginBottom, marginLeft].some(function (margin) {
            return parseFloat(margin);
          })) {
            console.warn(['Popper: CSS "margin" styles cannot be used to apply padding', 'between the popper and its reference element or boundary.', 'To replicate margin, use the `offset` modifier, as well as', 'the `padding` option in the `preventOverflow` and `flip`', 'modifiers.'].join(' '));
          }
        }

        runModifierEffects();
        return instance.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function forceUpdate() {
        if (isDestroyed) {
          return;
        }

        var _state$elements = state.elements,
            reference = _state$elements.reference,
            popper = _state$elements.popper; // Don't proceed if `reference` or `popper` are not valid elements
        // anymore

        if (!areValidElements(reference, popper)) {
          if (process.env.NODE_ENV !== "production") {
            console.error(INVALID_ELEMENT_ERROR);
          }

          return;
        } // Store the reference and popper rects to be read by modifiers


        state.rects = {
          reference: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getCompositeRect_js__["a" /* default */])(reference, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__["a" /* default */])(popper), state.options.strategy === 'fixed'),
          popper: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__["a" /* default */])(popper)
        }; // Modifiers have the ability to reset the current update cycle. The
        // most common use case for this is the `flip` modifier changing the
        // placement, which then needs to re-run all the modifiers, because the
        // logic was previously ran for the previous placement and is therefore
        // stale/incorrect

        state.reset = false;
        state.placement = state.options.placement; // On each update cycle, the `modifiersData` property for each modifier
        // is filled with the initial data specified by the modifier. This means
        // it doesn't persist and is fresh on each update.
        // To ensure persistent data, use `${name}#persistent`

        state.orderedModifiers.forEach(function (modifier) {
          return state.modifiersData[modifier.name] = Object.assign({}, modifier.data);
        });
        var __debug_loops__ = 0;

        for (var index = 0; index < state.orderedModifiers.length; index++) {
          if (process.env.NODE_ENV !== "production") {
            __debug_loops__ += 1;

            if (__debug_loops__ > 100) {
              console.error(INFINITE_LOOP_ERROR);
              break;
            }
          }

          if (state.reset === true) {
            state.reset = false;
            index = -1;
            continue;
          }

          var _state$orderedModifie = state.orderedModifiers[index],
              fn = _state$orderedModifie.fn,
              _state$orderedModifie2 = _state$orderedModifie.options,
              _options = _state$orderedModifie2 === void 0 ? {} : _state$orderedModifie2,
              name = _state$orderedModifie.name;

          if (typeof fn === 'function') {
            state = fn({
              state: state,
              options: _options,
              name: name,
              instance: instance
            }) || state;
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_debounce_js__["a" /* default */])(function () {
        return new Promise(function (resolve) {
          instance.forceUpdate();
          resolve(state);
        });
      }),
      destroy: function destroy() {
        cleanupModifierEffects();
        isDestroyed = true;
      }
    };

    if (!areValidElements(reference, popper)) {
      if (process.env.NODE_ENV !== "production") {
        console.error(INVALID_ELEMENT_ERROR);
      }

      return instance;
    }

    instance.setOptions(options).then(function (state) {
      if (!isDestroyed && options.onFirstUpdate) {
        options.onFirstUpdate(state);
      }
    }); // Modifiers have the ability to execute arbitrary code before the first
    // update cycle runs. They will be executed in the same order as the update
    // cycle. This is useful when a modifier adds some persistent data that
    // other modifiers need to use, but the modifier is run after the dependent
    // one.

    function runModifierEffects() {
      state.orderedModifiers.forEach(function (_ref3) {
        var name = _ref3.name,
            _ref3$options = _ref3.options,
            options = _ref3$options === void 0 ? {} : _ref3$options,
            effect = _ref3.effect;

        if (typeof effect === 'function') {
          var cleanupFn = effect({
            state: state,
            name: name,
            instance: instance,
            options: options
          });

          var noopFn = function noopFn() {};

          effectCleanupFns.push(cleanupFn || noopFn);
        }
      });
    }

    function cleanupModifierEffects() {
      effectCleanupFns.forEach(function (fn) {
        return fn();
      });
      effectCleanupFns = [];
    }

    return instance;
  };
}
var createPopper = /*#__PURE__*/popperGenerator(); // eslint-disable-next-line import/no-unused-modules


/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 175 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getClippingRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getViewportRect_js__ = __webpack_require__(181);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getDocumentRect_js__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__listScrollParents_js__ = __webpack_require__(113);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getOffsetParent_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__getComputedStyle_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__instanceOf_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__getBoundingClientRect_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__getParentNode_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__contains_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__getNodeName_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__utils_rectToClientRect_js__ = __webpack_require__(118);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__utils_math_js__ = __webpack_require__(21);















function getInnerBoundingClientRect(element) {
  var rect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__getBoundingClientRect_js__["a" /* default */])(element);
  rect.top = rect.top + element.clientTop;
  rect.left = rect.left + element.clientLeft;
  rect.bottom = rect.top + element.clientHeight;
  rect.right = rect.left + element.clientWidth;
  rect.width = element.clientWidth;
  rect.height = element.clientHeight;
  rect.x = rect.left;
  rect.y = rect.top;
  return rect;
}

function getClientRectFromMixedType(element, clippingParent) {
  return clippingParent === __WEBPACK_IMPORTED_MODULE_0__enums_js__["h" /* viewport */] ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_rectToClientRect_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getViewportRect_js__["a" /* default */])(element)) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["c" /* isElement */])(clippingParent) ? getInnerBoundingClientRect(clippingParent) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__utils_rectToClientRect_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getDocumentRect_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__["a" /* default */])(element)));
} // A "clipping parent" is an overflowable container with the characteristic of
// clipping (or hiding) overflowing elements with a position different from
// `initial`


function getClippingParents(element) {
  var clippingParents = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__listScrollParents_js__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__getParentNode_js__["a" /* default */])(element));
  var canEscapeClipping = ['absolute', 'fixed'].indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__getComputedStyle_js__["a" /* default */])(element).position) >= 0;
  var clipperElement = canEscapeClipping && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["a" /* isHTMLElement */])(element) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__getOffsetParent_js__["a" /* default */])(element) : element;

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["c" /* isElement */])(clipperElement)) {
    return [];
  } // $FlowFixMe[incompatible-return]: https://github.com/facebook/flow/issues/1414


  return clippingParents.filter(function (clippingParent) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__instanceOf_js__["c" /* isElement */])(clippingParent) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__contains_js__["a" /* default */])(clippingParent, clipperElement) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__getNodeName_js__["a" /* default */])(clippingParent) !== 'body';
  });
} // Gets the maximum area that the element is visible in due to any number of
// clipping parents


function getClippingRect(element, boundary, rootBoundary) {
  var mainClippingParents = boundary === 'clippingParents' ? getClippingParents(element) : [].concat(boundary);
  var clippingParents = [].concat(mainClippingParents, [rootBoundary]);
  var firstClippingParent = clippingParents[0];
  var clippingRect = clippingParents.reduce(function (accRect, clippingParent) {
    var rect = getClientRectFromMixedType(element, clippingParent);
    accRect.top = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["a" /* max */])(rect.top, accRect.top);
    accRect.right = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["b" /* min */])(rect.right, accRect.right);
    accRect.bottom = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["b" /* min */])(rect.bottom, accRect.bottom);
    accRect.left = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__utils_math_js__["a" /* max */])(rect.left, accRect.left);
    return accRect;
  }, getClientRectFromMixedType(element, firstClippingParent));
  clippingRect.width = clippingRect.right - clippingRect.left;
  clippingRect.height = clippingRect.bottom - clippingRect.top;
  clippingRect.x = clippingRect.left;
  clippingRect.y = clippingRect.top;
  return clippingRect;
}

/***/ }),
/* 176 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getCompositeRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getNodeScroll_js__ = __webpack_require__(179);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getNodeName_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceOf_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__getWindowScrollBarX_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__isScrollParent_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_math_js__ = __webpack_require__(21);









function isElementScaled(element) {
  var rect = element.getBoundingClientRect();
  var scaleX = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_math_js__["c" /* round */])(rect.width) / element.offsetWidth || 1;
  var scaleY = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_math_js__["c" /* round */])(rect.height) / element.offsetHeight || 1;
  return scaleX !== 1 || scaleY !== 1;
} // Returns the composite rect of an element relative to its offsetParent.
// Composite means it takes into account transforms as well as layout.


function getCompositeRect(elementOrVirtualElement, offsetParent, isFixed) {
  if (isFixed === void 0) {
    isFixed = false;
  }

  var isOffsetParentAnElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["a" /* isHTMLElement */])(offsetParent);
  var offsetParentIsScaled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["a" /* isHTMLElement */])(offsetParent) && isElementScaled(offsetParent);
  var documentElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__getDocumentElement_js__["a" /* default */])(offsetParent);
  var rect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(elementOrVirtualElement, offsetParentIsScaled);
  var scroll = {
    scrollLeft: 0,
    scrollTop: 0
  };
  var offsets = {
    x: 0,
    y: 0
  };

  if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getNodeName_js__["a" /* default */])(offsetParent) !== 'body' || // https://github.com/popperjs/popper-core/issues/1078
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__isScrollParent_js__["a" /* default */])(documentElement)) {
      scroll = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getNodeScroll_js__["a" /* default */])(offsetParent);
    }

    if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["a" /* isHTMLElement */])(offsetParent)) {
      offsets = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getBoundingClientRect_js__["a" /* default */])(offsetParent, true);
      offsets.x += offsetParent.clientLeft;
      offsets.y += offsetParent.clientTop;
    } else if (documentElement) {
      offsets.x = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__getWindowScrollBarX_js__["a" /* default */])(documentElement);
    }
  }

  return {
    x: rect.left + scroll.scrollLeft - offsets.x,
    y: rect.top + scroll.scrollTop - offsets.y,
    width: rect.width,
    height: rect.height
  };
}

/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getDocumentRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getDocumentElement_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getComputedStyle_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getWindowScroll_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_math_js__ = __webpack_require__(21);




 // Gets the entire size of the scrollable document area, even extending outside
// of the `<html>` and `<body>` rect bounds if horizontally scrollable

function getDocumentRect(element) {
  var _element$ownerDocumen;

  var html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getDocumentElement_js__["a" /* default */])(element);
  var winScroll = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__getWindowScroll_js__["a" /* default */])(element);
  var body = (_element$ownerDocumen = element.ownerDocument) == null ? void 0 : _element$ownerDocumen.body;
  var width = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_math_js__["a" /* max */])(html.scrollWidth, html.clientWidth, body ? body.scrollWidth : 0, body ? body.clientWidth : 0);
  var height = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_math_js__["a" /* max */])(html.scrollHeight, html.clientHeight, body ? body.scrollHeight : 0, body ? body.clientHeight : 0);
  var x = -winScroll.scrollLeft + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__["a" /* default */])(element);
  var y = -winScroll.scrollTop;

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getComputedStyle_js__["a" /* default */])(body || html).direction === 'rtl') {
    x += __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_math_js__["a" /* max */])(html.clientWidth, body ? body.clientWidth : 0) - width;
  }

  return {
    width: width,
    height: height,
    x: x,
    y: y
  };
}

/***/ }),
/* 178 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getHTMLElementScroll;
function getHTMLElementScroll(element) {
  return {
    scrollLeft: element.scrollLeft,
    scrollTop: element.scrollTop
  };
}

/***/ }),
/* 179 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getNodeScroll;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindowScroll_js__ = __webpack_require__(55);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getWindow_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__instanceOf_js__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getHTMLElementScroll_js__ = __webpack_require__(178);




function getNodeScroll(node) {
  if (node === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getWindow_js__["a" /* default */])(node) || !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__instanceOf_js__["a" /* isHTMLElement */])(node)) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWindowScroll_js__["a" /* default */])(node);
  } else {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__getHTMLElementScroll_js__["a" /* default */])(node);
  }
}

/***/ }),
/* 180 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getScrollParent;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getParentNode_js__ = __webpack_require__(43);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__isScrollParent_js__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getNodeName_js__ = __webpack_require__(24);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__instanceOf_js__ = __webpack_require__(11);




function getScrollParent(node) {
  if (['html', 'body', '#document'].indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getNodeName_js__["a" /* default */])(node)) >= 0) {
    // $FlowFixMe[incompatible-return]: assume body is always available
    return node.ownerDocument.body;
  }

  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__instanceOf_js__["a" /* isHTMLElement */])(node) && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__isScrollParent_js__["a" /* default */])(node)) {
    return node;
  }

  return getScrollParent(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getParentNode_js__["a" /* default */])(node));
}

/***/ }),
/* 181 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getViewportRect;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getWindow_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__ = __webpack_require__(56);



function getViewportRect(element) {
  var win = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getWindow_js__["a" /* default */])(element);
  var html = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__getDocumentElement_js__["a" /* default */])(element);
  var visualViewport = win.visualViewport;
  var width = html.clientWidth;
  var height = html.clientHeight;
  var x = 0;
  var y = 0; // NB: This isn't supported on iOS <= 12. If the keyboard is open, the popper
  // can be obscured underneath it.
  // Also, `html.clientHeight` adds the bottom bar height in Safari iOS, even
  // if it isn't open, so if this isn't available, the popper will be detected
  // to overflow the bottom of the screen too early.

  if (visualViewport) {
    width = visualViewport.width;
    height = visualViewport.height; // Uses Layout Viewport (like Chrome; Safari does not currently)
    // In Chrome, it returns a value very close to 0 (+/-) but contains rounding
    // errors due to floating point numbers, so we need to check precision.
    // Safari returns a number <= 0, usually < -1 when pinch-zoomed
    // Feature detection fails in mobile emulation mode in Chrome.
    // Math.abs(win.innerWidth / visualViewport.scale - visualViewport.width) <
    // 0.001
    // Fallback here: "Not Safari" userAgent

    if (!/^((?!chrome|android).)*safari/i.test(navigator.userAgent)) {
      x = visualViewport.offsetLeft;
      y = visualViewport.offsetTop;
    }
  }

  return {
    width: width,
    height: height,
    x: x + __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__getWindowScrollBarX_js__["a" /* default */])(element),
    y: y
  };
}

/***/ }),
/* 182 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isTableElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getNodeName_js__ = __webpack_require__(24);

function isTableElement(element) {
  return ['table', 'td', 'th'].indexOf(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getNodeName_js__["a" /* default */])(element)) >= 0;
}

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_contains_js__ = __webpack_require__(112);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_getMainAxisFromPlacement_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_within_js__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_mergePaddingObject_js__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_expandToHashMap_js__ = __webpack_require__(115);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__enums_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__dom_utils_instanceOf_js__ = __webpack_require__(11);









 // eslint-disable-next-line import/no-unused-modules

var toPaddingObject = function toPaddingObject(padding, state) {
  padding = typeof padding === 'function' ? padding(Object.assign({}, state.rects, {
    placement: state.placement
  })) : padding;
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_mergePaddingObject_js__["a" /* default */])(typeof padding !== 'number' ? padding : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_expandToHashMap_js__["a" /* default */])(padding, __WEBPACK_IMPORTED_MODULE_8__enums_js__["a" /* basePlacements */]));
};

function arrow(_ref) {
  var _state$modifiersData$;

  var state = _ref.state,
      name = _ref.name,
      options = _ref.options;
  var arrowElement = state.elements.arrow;
  var popperOffsets = state.modifiersData.popperOffsets;
  var basePlacement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__["a" /* default */])(state.placement);
  var axis = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_getMainAxisFromPlacement_js__["a" /* default */])(basePlacement);
  var isVertical = [__WEBPACK_IMPORTED_MODULE_8__enums_js__["b" /* left */], __WEBPACK_IMPORTED_MODULE_8__enums_js__["c" /* right */]].indexOf(basePlacement) >= 0;
  var len = isVertical ? 'height' : 'width';

  if (!arrowElement || !popperOffsets) {
    return;
  }

  var paddingObject = toPaddingObject(options.padding, state);
  var arrowRect = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getLayoutRect_js__["a" /* default */])(arrowElement);
  var minProp = axis === 'y' ? __WEBPACK_IMPORTED_MODULE_8__enums_js__["d" /* top */] : __WEBPACK_IMPORTED_MODULE_8__enums_js__["b" /* left */];
  var maxProp = axis === 'y' ? __WEBPACK_IMPORTED_MODULE_8__enums_js__["e" /* bottom */] : __WEBPACK_IMPORTED_MODULE_8__enums_js__["c" /* right */];
  var endDiff = state.rects.reference[len] + state.rects.reference[axis] - popperOffsets[axis] - state.rects.popper[len];
  var startDiff = popperOffsets[axis] - state.rects.reference[axis];
  var arrowOffsetParent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dom_utils_getOffsetParent_js__["a" /* default */])(arrowElement);
  var clientSize = arrowOffsetParent ? axis === 'y' ? arrowOffsetParent.clientHeight || 0 : arrowOffsetParent.clientWidth || 0 : 0;
  var centerToReference = endDiff / 2 - startDiff / 2; // Make sure the arrow doesn't overflow the popper if the center point is
  // outside of the popper bounds

  var min = paddingObject[minProp];
  var max = clientSize - arrowRect[len] - paddingObject[maxProp];
  var center = clientSize / 2 - arrowRect[len] / 2 + centerToReference;
  var offset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_within_js__["a" /* within */])(min, center, max); // Prevents breaking syntax highlighting...

  var axisProp = axis;
  state.modifiersData[name] = (_state$modifiersData$ = {}, _state$modifiersData$[axisProp] = offset, _state$modifiersData$.centerOffset = offset - center, _state$modifiersData$);
}

function effect(_ref2) {
  var state = _ref2.state,
      options = _ref2.options;
  var _options$element = options.element,
      arrowElement = _options$element === void 0 ? '[data-popper-arrow]' : _options$element;

  if (arrowElement == null) {
    return;
  } // CSS selector


  if (typeof arrowElement === 'string') {
    arrowElement = state.elements.popper.querySelector(arrowElement);

    if (!arrowElement) {
      return;
    }
  }

  if (process.env.NODE_ENV !== "production") {
    if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__dom_utils_instanceOf_js__["a" /* isHTMLElement */])(arrowElement)) {
      console.error(['Popper: "arrow" element must be an HTMLElement (not an SVGElement).', 'To use an SVG arrow, wrap it in an HTMLElement that will be used as', 'the arrow.'].join(' '));
    }
  }

  if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_utils_contains_js__["a" /* default */])(state.elements.popper, arrowElement)) {
    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: "arrow" modifier\'s `element` must be a child of the popper', 'element.'].join(' '));
    }

    return;
  }

  state.elements.arrow = arrowElement;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'arrow',
  enabled: true,
  phase: 'main',
  fn: arrow,
  effect: effect,
  requires: ['popperOffsets'],
  requiresIfExists: ['preventOverflow']
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export mapToStyles */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dom_utils_getOffsetParent_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__dom_utils_getWindow_js__ = __webpack_require__(14);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dom_utils_getDocumentElement_js__ = __webpack_require__(17);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__utils_getBasePlacement_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_math_js__ = __webpack_require__(21);







 // eslint-disable-next-line import/no-unused-modules

var unsetSides = {
  top: 'auto',
  right: 'auto',
  bottom: 'auto',
  left: 'auto'
}; // Round the offsets to the nearest suitable subpixel based on the DPR.
// Zooming can change the DPR, but it seems to report a value that will
// cleanly divide the values into the appropriate subpixels.

function roundOffsetsByDPR(_ref) {
  var x = _ref.x,
      y = _ref.y;
  var win = window;
  var dpr = win.devicePixelRatio || 1;
  return {
    x: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_math_js__["c" /* round */])(x * dpr) / dpr || 0,
    y: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_math_js__["c" /* round */])(y * dpr) / dpr || 0
  };
}

function mapToStyles(_ref2) {
  var _Object$assign2;

  var popper = _ref2.popper,
      popperRect = _ref2.popperRect,
      placement = _ref2.placement,
      variation = _ref2.variation,
      offsets = _ref2.offsets,
      position = _ref2.position,
      gpuAcceleration = _ref2.gpuAcceleration,
      adaptive = _ref2.adaptive,
      roundOffsets = _ref2.roundOffsets,
      isFixed = _ref2.isFixed;
  var _offsets$x = offsets.x,
      x = _offsets$x === void 0 ? 0 : _offsets$x,
      _offsets$y = offsets.y,
      y = _offsets$y === void 0 ? 0 : _offsets$y;

  var _ref3 = typeof roundOffsets === 'function' ? roundOffsets({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref3.x;
  y = _ref3.y;
  var hasX = offsets.hasOwnProperty('x');
  var hasY = offsets.hasOwnProperty('y');
  var sideX = __WEBPACK_IMPORTED_MODULE_0__enums_js__["b" /* left */];
  var sideY = __WEBPACK_IMPORTED_MODULE_0__enums_js__["d" /* top */];
  var win = window;

  if (adaptive) {
    var offsetParent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__dom_utils_getOffsetParent_js__["a" /* default */])(popper);
    var heightProp = 'clientHeight';
    var widthProp = 'clientWidth';

    if (offsetParent === __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__dom_utils_getWindow_js__["a" /* default */])(popper)) {
      offsetParent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__dom_utils_getDocumentElement_js__["a" /* default */])(popper);

      if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__["a" /* default */])(offsetParent).position !== 'static' && position === 'absolute') {
        heightProp = 'scrollHeight';
        widthProp = 'scrollWidth';
      }
    } // $FlowFixMe[incompatible-cast]: force type refinement, we compare offsetParent with window above, but Flow doesn't detect it


    offsetParent = offsetParent;

    if (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["d" /* top */] || (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["b" /* left */] || placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["c" /* right */]) && variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["k" /* end */]) {
      sideY = __WEBPACK_IMPORTED_MODULE_0__enums_js__["e" /* bottom */];
      var offsetY = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.height : // $FlowFixMe[prop-missing]
      offsetParent[heightProp];
      y -= offsetY - popperRect.height;
      y *= gpuAcceleration ? 1 : -1;
    }

    if (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["b" /* left */] || (placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["d" /* top */] || placement === __WEBPACK_IMPORTED_MODULE_0__enums_js__["e" /* bottom */]) && variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["k" /* end */]) {
      sideX = __WEBPACK_IMPORTED_MODULE_0__enums_js__["c" /* right */];
      var offsetX = isFixed && offsetParent === win && win.visualViewport ? win.visualViewport.width : // $FlowFixMe[prop-missing]
      offsetParent[widthProp];
      x -= offsetX - popperRect.width;
      x *= gpuAcceleration ? 1 : -1;
    }
  }

  var commonStyles = Object.assign({
    position: position
  }, adaptive && unsetSides);

  var _ref4 = roundOffsets === true ? roundOffsetsByDPR({
    x: x,
    y: y
  }) : {
    x: x,
    y: y
  };

  x = _ref4.x;
  y = _ref4.y;

  if (gpuAcceleration) {
    var _Object$assign;

    return Object.assign({}, commonStyles, (_Object$assign = {}, _Object$assign[sideY] = hasY ? '0' : '', _Object$assign[sideX] = hasX ? '0' : '', _Object$assign.transform = (win.devicePixelRatio || 1) <= 1 ? "translate(" + x + "px, " + y + "px)" : "translate3d(" + x + "px, " + y + "px, 0)", _Object$assign));
  }

  return Object.assign({}, commonStyles, (_Object$assign2 = {}, _Object$assign2[sideY] = hasY ? y + "px" : '', _Object$assign2[sideX] = hasX ? x + "px" : '', _Object$assign2.transform = '', _Object$assign2));
}

function computeStyles(_ref5) {
  var state = _ref5.state,
      options = _ref5.options;
  var _options$gpuAccelerat = options.gpuAcceleration,
      gpuAcceleration = _options$gpuAccelerat === void 0 ? true : _options$gpuAccelerat,
      _options$adaptive = options.adaptive,
      adaptive = _options$adaptive === void 0 ? true : _options$adaptive,
      _options$roundOffsets = options.roundOffsets,
      roundOffsets = _options$roundOffsets === void 0 ? true : _options$roundOffsets;

  if (process.env.NODE_ENV !== "production") {
    var transitionProperty = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__dom_utils_getComputedStyle_js__["a" /* default */])(state.elements.popper).transitionProperty || '';

    if (adaptive && ['transform', 'top', 'right', 'bottom', 'left'].some(function (property) {
      return transitionProperty.indexOf(property) >= 0;
    })) {
      console.warn(['Popper: Detected CSS transitions on at least one of the following', 'CSS properties: "transform", "top", "right", "bottom", "left".', '\n\n', 'Disable the "computeStyles" modifier\'s `adaptive` option to allow', 'for smooth transitions, or remove these properties from the CSS', 'transition declaration on the popper element if only transitioning', 'opacity or background-color for example.', '\n\n', 'We recommend using the popper element as a wrapper around an inner', 'element that can have any CSS property transitioned for animations.'].join(' '));
    }
  }

  var commonStyles = {
    placement: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__utils_getBasePlacement_js__["a" /* default */])(state.placement),
    variation: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__["a" /* default */])(state.placement),
    popper: state.elements.popper,
    popperRect: state.rects.popper,
    gpuAcceleration: gpuAcceleration,
    isFixed: state.options.strategy === 'fixed'
  };

  if (state.modifiersData.popperOffsets != null) {
    state.styles.popper = Object.assign({}, state.styles.popper, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.popperOffsets,
      position: state.options.strategy,
      adaptive: adaptive,
      roundOffsets: roundOffsets
    })));
  }

  if (state.modifiersData.arrow != null) {
    state.styles.arrow = Object.assign({}, state.styles.arrow, mapToStyles(Object.assign({}, commonStyles, {
      offsets: state.modifiersData.arrow,
      position: 'absolute',
      adaptive: false,
      roundOffsets: roundOffsets
    })));
  }

  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-placement': state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'computeStyles',
  enabled: true,
  phase: 'beforeWrite',
  fn: computeStyles,
  data: {}
});
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__dom_utils_getWindow_js__ = __webpack_require__(14);
 // eslint-disable-next-line import/no-unused-modules

var passive = {
  passive: true
};

function effect(_ref) {
  var state = _ref.state,
      instance = _ref.instance,
      options = _ref.options;
  var _options$scroll = options.scroll,
      scroll = _options$scroll === void 0 ? true : _options$scroll,
      _options$resize = options.resize,
      resize = _options$resize === void 0 ? true : _options$resize;
  var window = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__dom_utils_getWindow_js__["a" /* default */])(state.elements.popper);
  var scrollParents = [].concat(state.scrollParents.reference, state.scrollParents.popper);

  if (scroll) {
    scrollParents.forEach(function (scrollParent) {
      scrollParent.addEventListener('scroll', instance.update, passive);
    });
  }

  if (resize) {
    window.addEventListener('resize', instance.update, passive);
  }

  return function () {
    if (scroll) {
      scrollParents.forEach(function (scrollParent) {
        scrollParent.removeEventListener('scroll', instance.update, passive);
      });
    }

    if (resize) {
      window.removeEventListener('resize', instance.update, passive);
    }
  };
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'eventListeners',
  enabled: true,
  phase: 'write',
  fn: function fn() {},
  effect: effect,
  data: {}
});

/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_getOppositeVariationPlacement_js__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_detectOverflow_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_computeAutoPlacement_js__ = __webpack_require__(192);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__enums_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__ = __webpack_require__(31);






 // eslint-disable-next-line import/no-unused-modules

function getExpandedFallbackPlacements(placement) {
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(placement) === __WEBPACK_IMPORTED_MODULE_5__enums_js__["l" /* auto */]) {
    return [];
  }

  var oppositePlacement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(placement);
  return [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_getOppositeVariationPlacement_js__["a" /* default */])(placement), oppositePlacement, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_getOppositeVariationPlacement_js__["a" /* default */])(oppositePlacement)];
}

function flip(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;

  if (state.modifiersData[name]._skip) {
    return;
  }

  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? true : _options$altAxis,
      specifiedFallbackPlacements = options.fallbackPlacements,
      padding = options.padding,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      _options$flipVariatio = options.flipVariations,
      flipVariations = _options$flipVariatio === void 0 ? true : _options$flipVariatio,
      allowedAutoPlacements = options.allowedAutoPlacements;
  var preferredPlacement = state.options.placement;
  var basePlacement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(preferredPlacement);
  var isBasePlacement = basePlacement === preferredPlacement;
  var fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipVariations ? [__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(preferredPlacement)] : getExpandedFallbackPlacements(preferredPlacement));
  var placements = [preferredPlacement].concat(fallbackPlacements).reduce(function (acc, placement) {
    return acc.concat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(placement) === __WEBPACK_IMPORTED_MODULE_5__enums_js__["l" /* auto */] ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_computeAutoPlacement_js__["a" /* default */])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding,
      flipVariations: flipVariations,
      allowedAutoPlacements: allowedAutoPlacements
    }) : placement);
  }, []);
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var checksMap = new Map();
  var makeFallbackChecks = true;
  var firstFittingPlacement = placements[0];

  for (var i = 0; i < placements.length; i++) {
    var placement = placements[i];

    var _basePlacement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(placement);

    var isStartVariation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__utils_getVariation_js__["a" /* default */])(placement) === __WEBPACK_IMPORTED_MODULE_5__enums_js__["f" /* start */];
    var isVertical = [__WEBPACK_IMPORTED_MODULE_5__enums_js__["d" /* top */], __WEBPACK_IMPORTED_MODULE_5__enums_js__["e" /* bottom */]].indexOf(_basePlacement) >= 0;
    var len = isVertical ? 'width' : 'height';
    var overflow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_detectOverflow_js__["a" /* default */])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      altBoundary: altBoundary,
      padding: padding
    });
    var mainVariationSide = isVertical ? isStartVariation ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["c" /* right */] : __WEBPACK_IMPORTED_MODULE_5__enums_js__["b" /* left */] : isStartVariation ? __WEBPACK_IMPORTED_MODULE_5__enums_js__["e" /* bottom */] : __WEBPACK_IMPORTED_MODULE_5__enums_js__["d" /* top */];

    if (referenceRect[len] > popperRect[len]) {
      mainVariationSide = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(mainVariationSide);
    }

    var altVariationSide = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_getOppositePlacement_js__["a" /* default */])(mainVariationSide);
    var checks = [];

    if (checkMainAxis) {
      checks.push(overflow[_basePlacement] <= 0);
    }

    if (checkAltAxis) {
      checks.push(overflow[mainVariationSide] <= 0, overflow[altVariationSide] <= 0);
    }

    if (checks.every(function (check) {
      return check;
    })) {
      firstFittingPlacement = placement;
      makeFallbackChecks = false;
      break;
    }

    checksMap.set(placement, checks);
  }

  if (makeFallbackChecks) {
    // `2` may be desired in some cases – research later
    var numberOfChecks = flipVariations ? 3 : 1;

    var _loop = function _loop(_i) {
      var fittingPlacement = placements.find(function (placement) {
        var checks = checksMap.get(placement);

        if (checks) {
          return checks.slice(0, _i).every(function (check) {
            return check;
          });
        }
      });

      if (fittingPlacement) {
        firstFittingPlacement = fittingPlacement;
        return "break";
      }
    };

    for (var _i = numberOfChecks; _i > 0; _i--) {
      var _ret = _loop(_i);

      if (_ret === "break") break;
    }
  }

  if (state.placement !== firstFittingPlacement) {
    state.modifiersData[name]._skip = true;
    state.placement = firstFittingPlacement;
    state.reset = true;
  }
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'flip',
  enabled: true,
  phase: 'main',
  fn: flip,
  requiresIfExists: ['offset'],
  data: {
    _skip: false
  }
});

/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_detectOverflow_js__ = __webpack_require__(30);



function getSideOffsets(overflow, rect, preventedOffsets) {
  if (preventedOffsets === void 0) {
    preventedOffsets = {
      x: 0,
      y: 0
    };
  }

  return {
    top: overflow.top - rect.height - preventedOffsets.y,
    right: overflow.right - rect.width + preventedOffsets.x,
    bottom: overflow.bottom - rect.height + preventedOffsets.y,
    left: overflow.left - rect.width - preventedOffsets.x
  };
}

function isAnySideFullyClipped(overflow) {
  return [__WEBPACK_IMPORTED_MODULE_0__enums_js__["d" /* top */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["c" /* right */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["e" /* bottom */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["b" /* left */]].some(function (side) {
    return overflow[side] >= 0;
  });
}

function hide(_ref) {
  var state = _ref.state,
      name = _ref.name;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var preventedOffsets = state.modifiersData.preventOverflow;
  var referenceOverflow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_detectOverflow_js__["a" /* default */])(state, {
    elementContext: 'reference'
  });
  var popperAltOverflow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_detectOverflow_js__["a" /* default */])(state, {
    altBoundary: true
  });
  var referenceClippingOffsets = getSideOffsets(referenceOverflow, referenceRect);
  var popperEscapeOffsets = getSideOffsets(popperAltOverflow, popperRect, preventedOffsets);
  var isReferenceHidden = isAnySideFullyClipped(referenceClippingOffsets);
  var hasPopperEscaped = isAnySideFullyClipped(popperEscapeOffsets);
  state.modifiersData[name] = {
    referenceClippingOffsets: referenceClippingOffsets,
    popperEscapeOffsets: popperEscapeOffsets,
    isReferenceHidden: isReferenceHidden,
    hasPopperEscaped: hasPopperEscaped
  };
  state.attributes.popper = Object.assign({}, state.attributes.popper, {
    'data-popper-reference-hidden': isReferenceHidden,
    'data-popper-escaped': hasPopperEscaped
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'hide',
  enabled: true,
  phase: 'main',
  requiresIfExists: ['preventOverflow'],
  fn: hide
});

/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export distanceAndSkiddingToXY */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_js__ = __webpack_require__(8);

 // eslint-disable-next-line import/no-unused-modules

function distanceAndSkiddingToXY(placement, rects, offset) {
  var basePlacement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_getBasePlacement_js__["a" /* default */])(placement);
  var invertDistance = [__WEBPACK_IMPORTED_MODULE_1__enums_js__["b" /* left */], __WEBPACK_IMPORTED_MODULE_1__enums_js__["d" /* top */]].indexOf(basePlacement) >= 0 ? -1 : 1;

  var _ref = typeof offset === 'function' ? offset(Object.assign({}, rects, {
    placement: placement
  })) : offset,
      skidding = _ref[0],
      distance = _ref[1];

  skidding = skidding || 0;
  distance = (distance || 0) * invertDistance;
  return [__WEBPACK_IMPORTED_MODULE_1__enums_js__["b" /* left */], __WEBPACK_IMPORTED_MODULE_1__enums_js__["c" /* right */]].indexOf(basePlacement) >= 0 ? {
    x: distance,
    y: skidding
  } : {
    x: skidding,
    y: distance
  };
}

function offset(_ref2) {
  var state = _ref2.state,
      options = _ref2.options,
      name = _ref2.name;
  var _options$offset = options.offset,
      offset = _options$offset === void 0 ? [0, 0] : _options$offset;
  var data = __WEBPACK_IMPORTED_MODULE_1__enums_js__["m" /* placements */].reduce(function (acc, placement) {
    acc[placement] = distanceAndSkiddingToXY(placement, state.rects, offset);
    return acc;
  }, {});
  var _data$state$placement = data[state.placement],
      x = _data$state$placement.x,
      y = _data$state$placement.y;

  if (state.modifiersData.popperOffsets != null) {
    state.modifiersData.popperOffsets.x += x;
    state.modifiersData.popperOffsets.y += y;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'offset',
  enabled: true,
  phase: 'main',
  requires: ['popperOffsets'],
  fn: offset
});

/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__utils_computeOffsets_js__ = __webpack_require__(114);


function popperOffsets(_ref) {
  var state = _ref.state,
      name = _ref.name;
  // Offsets are the actual position the popper needs to have to be
  // properly positioned near its reference element
  // This is the most basic placement, and will be adjusted by
  // the modifiers in the next step
  state.modifiersData[name] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__utils_computeOffsets_js__["a" /* default */])({
    reference: state.rects.reference,
    element: state.rects.popper,
    strategy: 'absolute',
    placement: state.placement
  });
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'popperOffsets',
  enabled: true,
  phase: 'read',
  fn: popperOffsets,
  data: {}
});

/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__utils_getMainAxisFromPlacement_js__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils_getAltAxis_js__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__utils_within_js__ = __webpack_require__(119);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__dom_utils_getLayoutRect_js__ = __webpack_require__(54);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__dom_utils_getOffsetParent_js__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__utils_detectOverflow_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__utils_getVariation_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__utils_getFreshSideObject_js__ = __webpack_require__(116);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__utils_math_js__ = __webpack_require__(21);












function preventOverflow(_ref) {
  var state = _ref.state,
      options = _ref.options,
      name = _ref.name;
  var _options$mainAxis = options.mainAxis,
      checkMainAxis = _options$mainAxis === void 0 ? true : _options$mainAxis,
      _options$altAxis = options.altAxis,
      checkAltAxis = _options$altAxis === void 0 ? false : _options$altAxis,
      boundary = options.boundary,
      rootBoundary = options.rootBoundary,
      altBoundary = options.altBoundary,
      padding = options.padding,
      _options$tether = options.tether,
      tether = _options$tether === void 0 ? true : _options$tether,
      _options$tetherOffset = options.tetherOffset,
      tetherOffset = _options$tetherOffset === void 0 ? 0 : _options$tetherOffset;
  var overflow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__utils_detectOverflow_js__["a" /* default */])(state, {
    boundary: boundary,
    rootBoundary: rootBoundary,
    padding: padding,
    altBoundary: altBoundary
  });
  var basePlacement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__utils_getBasePlacement_js__["a" /* default */])(state.placement);
  var variation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__utils_getVariation_js__["a" /* default */])(state.placement);
  var isBasePlacement = !variation;
  var mainAxis = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__utils_getMainAxisFromPlacement_js__["a" /* default */])(basePlacement);
  var altAxis = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__utils_getAltAxis_js__["a" /* default */])(mainAxis);
  var popperOffsets = state.modifiersData.popperOffsets;
  var referenceRect = state.rects.reference;
  var popperRect = state.rects.popper;
  var tetherOffsetValue = typeof tetherOffset === 'function' ? tetherOffset(Object.assign({}, state.rects, {
    placement: state.placement
  })) : tetherOffset;
  var normalizedTetherOffsetValue = typeof tetherOffsetValue === 'number' ? {
    mainAxis: tetherOffsetValue,
    altAxis: tetherOffsetValue
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, tetherOffsetValue);
  var offsetModifierState = state.modifiersData.offset ? state.modifiersData.offset[state.placement] : null;
  var data = {
    x: 0,
    y: 0
  };

  if (!popperOffsets) {
    return;
  }

  if (checkMainAxis) {
    var _offsetModifierState$;

    var mainSide = mainAxis === 'y' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["d" /* top */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["b" /* left */];
    var altSide = mainAxis === 'y' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["e" /* bottom */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["c" /* right */];
    var len = mainAxis === 'y' ? 'height' : 'width';
    var offset = popperOffsets[mainAxis];
    var min = offset + overflow[mainSide];
    var max = offset - overflow[altSide];
    var additive = tether ? -popperRect[len] / 2 : 0;
    var minLen = variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["f" /* start */] ? referenceRect[len] : popperRect[len];
    var maxLen = variation === __WEBPACK_IMPORTED_MODULE_0__enums_js__["f" /* start */] ? -popperRect[len] : -referenceRect[len]; // We need to include the arrow in the calculation so the arrow doesn't go
    // outside the reference bounds

    var arrowElement = state.elements.arrow;
    var arrowRect = tether && arrowElement ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__dom_utils_getLayoutRect_js__["a" /* default */])(arrowElement) : {
      width: 0,
      height: 0
    };
    var arrowPaddingObject = state.modifiersData['arrow#persistent'] ? state.modifiersData['arrow#persistent'].padding : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__utils_getFreshSideObject_js__["a" /* default */])();
    var arrowPaddingMin = arrowPaddingObject[mainSide];
    var arrowPaddingMax = arrowPaddingObject[altSide]; // If the reference length is smaller than the arrow length, we don't want
    // to include its full size in the calculation. If the reference is small
    // and near the edge of a boundary, the popper can overflow even if the
    // reference is not overflowing as well (e.g. virtual elements with no
    // width or height)

    var arrowLen = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["a" /* within */])(0, referenceRect[len], arrowRect[len]);
    var minOffset = isBasePlacement ? referenceRect[len] / 2 - additive - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis : minLen - arrowLen - arrowPaddingMin - normalizedTetherOffsetValue.mainAxis;
    var maxOffset = isBasePlacement ? -referenceRect[len] / 2 + additive + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis : maxLen + arrowLen + arrowPaddingMax + normalizedTetherOffsetValue.mainAxis;
    var arrowOffsetParent = state.elements.arrow && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__dom_utils_getOffsetParent_js__["a" /* default */])(state.elements.arrow);
    var clientOffset = arrowOffsetParent ? mainAxis === 'y' ? arrowOffsetParent.clientTop || 0 : arrowOffsetParent.clientLeft || 0 : 0;
    var offsetModifierValue = (_offsetModifierState$ = offsetModifierState == null ? void 0 : offsetModifierState[mainAxis]) != null ? _offsetModifierState$ : 0;
    var tetherMin = offset + minOffset - offsetModifierValue - clientOffset;
    var tetherMax = offset + maxOffset - offsetModifierValue;
    var preventedOffset = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["a" /* within */])(tether ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_math_js__["b" /* min */])(min, tetherMin) : min, offset, tether ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__utils_math_js__["a" /* max */])(max, tetherMax) : max);
    popperOffsets[mainAxis] = preventedOffset;
    data[mainAxis] = preventedOffset - offset;
  }

  if (checkAltAxis) {
    var _offsetModifierState$2;

    var _mainSide = mainAxis === 'x' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["d" /* top */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["b" /* left */];

    var _altSide = mainAxis === 'x' ? __WEBPACK_IMPORTED_MODULE_0__enums_js__["e" /* bottom */] : __WEBPACK_IMPORTED_MODULE_0__enums_js__["c" /* right */];

    var _offset = popperOffsets[altAxis];

    var _len = altAxis === 'y' ? 'height' : 'width';

    var _min = _offset + overflow[_mainSide];

    var _max = _offset - overflow[_altSide];

    var isOriginSide = [__WEBPACK_IMPORTED_MODULE_0__enums_js__["d" /* top */], __WEBPACK_IMPORTED_MODULE_0__enums_js__["b" /* left */]].indexOf(basePlacement) !== -1;

    var _offsetModifierValue = (_offsetModifierState$2 = offsetModifierState == null ? void 0 : offsetModifierState[altAxis]) != null ? _offsetModifierState$2 : 0;

    var _tetherMin = isOriginSide ? _min : _offset - referenceRect[_len] - popperRect[_len] - _offsetModifierValue + normalizedTetherOffsetValue.altAxis;

    var _tetherMax = isOriginSide ? _offset + referenceRect[_len] + popperRect[_len] - _offsetModifierValue - normalizedTetherOffsetValue.altAxis : _max;

    var _preventedOffset = tether && isOriginSide ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["b" /* withinMaxClamp */])(_tetherMin, _offset, _tetherMax) : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__utils_within_js__["a" /* within */])(tether ? _tetherMin : _min, _offset, tether ? _tetherMax : _max);

    popperOffsets[altAxis] = _preventedOffset;
    data[altAxis] = _preventedOffset - _offset;
  }

  state.modifiersData[name] = data;
} // eslint-disable-next-line import/no-unused-modules


/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'preventOverflow',
  enabled: true,
  phase: 'main',
  fn: preventOverflow,
  requiresIfExists: ['offset']
});

/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createPopper_js__ = __webpack_require__(174);
/* unused harmony reexport createPopper */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_0__createPopper_js__["a"]; });
/* unused harmony reexport detectOverflow */

// eslint-disable-next-line import/no-unused-modules


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (immutable) */ __webpack_exports__["a"] = computeAutoPlacement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__getVariation_js__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_js__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__detectOverflow_js__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__getBasePlacement_js__ = __webpack_require__(18);




function computeAutoPlacement(state, options) {
  if (options === void 0) {
    options = {};
  }

  var _options = options,
      placement = _options.placement,
      boundary = _options.boundary,
      rootBoundary = _options.rootBoundary,
      padding = _options.padding,
      flipVariations = _options.flipVariations,
      _options$allowedAutoP = _options.allowedAutoPlacements,
      allowedAutoPlacements = _options$allowedAutoP === void 0 ? __WEBPACK_IMPORTED_MODULE_1__enums_js__["m" /* placements */] : _options$allowedAutoP;
  var variation = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getVariation_js__["a" /* default */])(placement);
  var placements = variation ? flipVariations ? __WEBPACK_IMPORTED_MODULE_1__enums_js__["n" /* variationPlacements */] : __WEBPACK_IMPORTED_MODULE_1__enums_js__["n" /* variationPlacements */].filter(function (placement) {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__getVariation_js__["a" /* default */])(placement) === variation;
  }) : __WEBPACK_IMPORTED_MODULE_1__enums_js__["a" /* basePlacements */];
  var allowedPlacements = placements.filter(function (placement) {
    return allowedAutoPlacements.indexOf(placement) >= 0;
  });

  if (allowedPlacements.length === 0) {
    allowedPlacements = placements;

    if (process.env.NODE_ENV !== "production") {
      console.error(['Popper: The `allowedAutoPlacements` option did not allow any', 'placements. Ensure the `placement` option matches the variation', 'of the allowed placements.', 'For example, "auto" cannot be used to allow "bottom-start".', 'Use "auto-start" instead.'].join(' '));
    }
  } // $FlowFixMe[incompatible-type]: Flow seems to have problems with two array unions...


  var overflows = allowedPlacements.reduce(function (acc, placement) {
    acc[placement] = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__detectOverflow_js__["a" /* default */])(state, {
      placement: placement,
      boundary: boundary,
      rootBoundary: rootBoundary,
      padding: padding
    })[__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__getBasePlacement_js__["a" /* default */])(placement)];
    return acc;
  }, {});
  return Object.keys(overflows).sort(function (a, b) {
    return overflows[a] - overflows[b];
  });
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = debounce;
function debounce(fn) {
  var pending;
  return function () {
    if (!pending) {
      pending = new Promise(function (resolve) {
        Promise.resolve().then(function () {
          pending = undefined;
          resolve(fn());
        });
      });
    }

    return pending;
  };
}

/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = format;
function format(str) {
  for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    args[_key - 1] = arguments[_key];
  }

  return [].concat(args).reduce(function (p, c) {
    return p.replace(/%s/, c);
  }, str);
}

/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getAltAxis;
function getAltAxis(axis) {
  return axis === 'x' ? 'y' : 'x';
}

/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOppositePlacement;
var hash = {
  left: 'right',
  right: 'left',
  bottom: 'top',
  top: 'bottom'
};
function getOppositePlacement(placement) {
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getOppositeVariationPlacement;
var hash = {
  start: 'end',
  end: 'start'
};
function getOppositeVariationPlacement(placement) {
  return placement.replace(/start|end/g, function (matched) {
    return hash[matched];
  });
}

/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = mergeByName;
function mergeByName(modifiers) {
  var merged = modifiers.reduce(function (merged, current) {
    var existing = merged[current.name];
    merged[current.name] = existing ? Object.assign({}, existing, current, {
      options: Object.assign({}, existing.options, current.options),
      data: Object.assign({}, existing.data, current.data)
    }) : current;
    return merged;
  }, {}); // IE11 does not support Object.values

  return Object.keys(merged).map(function (key) {
    return merged[key];
  });
}

/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = orderModifiers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__enums_js__ = __webpack_require__(8);
 // source: https://stackoverflow.com/questions/49875255

function order(modifiers) {
  var map = new Map();
  var visited = new Set();
  var result = [];
  modifiers.forEach(function (modifier) {
    map.set(modifier.name, modifier);
  }); // On visiting object, check for its dependencies and visit them recursively

  function sort(modifier) {
    visited.add(modifier.name);
    var requires = [].concat(modifier.requires || [], modifier.requiresIfExists || []);
    requires.forEach(function (dep) {
      if (!visited.has(dep)) {
        var depModifier = map.get(dep);

        if (depModifier) {
          sort(depModifier);
        }
      }
    });
    result.push(modifier);
  }

  modifiers.forEach(function (modifier) {
    if (!visited.has(modifier.name)) {
      // check for visited object
      sort(modifier);
    }
  });
  return result;
}

function orderModifiers(modifiers) {
  // order based on dependencies
  var orderedModifiers = order(modifiers); // order based on phase

  return __WEBPACK_IMPORTED_MODULE_0__enums_js__["o" /* modifierPhases */].reduce(function (acc, phase) {
    return acc.concat(orderedModifiers.filter(function (modifier) {
      return modifier.phase === phase;
    }));
  }, []);
}

/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = uniqueBy;
function uniqueBy(arr, fn) {
  var identifiers = new Set();
  return arr.filter(function (item) {
    var identifier = fn(item);

    if (!identifiers.has(identifier)) {
      identifiers.add(identifier);
      return true;
    }
  });
}

/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = validateModifiers;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__format_js__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enums_js__ = __webpack_require__(8);


var INVALID_MODIFIER_ERROR = 'Popper: modifier "%s" provided an invalid %s property, expected %s but got %s';
var MISSING_DEPENDENCY_ERROR = 'Popper: modifier "%s" requires "%s", but "%s" modifier is not available';
var VALID_PROPERTIES = ['name', 'enabled', 'phase', 'fn', 'effect', 'requires', 'options'];
function validateModifiers(modifiers) {
  modifiers.forEach(function (modifier) {
    [].concat(Object.keys(modifier), VALID_PROPERTIES) // IE11-compatible replacement for `new Set(iterable)`
    .filter(function (value, index, self) {
      return self.indexOf(value) === index;
    }).forEach(function (key) {
      switch (key) {
        case 'name':
          if (typeof modifier.name !== 'string') {
            console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, String(modifier.name), '"name"', '"string"', "\"" + String(modifier.name) + "\""));
          }

          break;

        case 'enabled':
          if (typeof modifier.enabled !== 'boolean') {
            console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"enabled"', '"boolean"', "\"" + String(modifier.enabled) + "\""));
          }

          break;

        case 'phase':
          if (__WEBPACK_IMPORTED_MODULE_1__enums_js__["o" /* modifierPhases */].indexOf(modifier.phase) < 0) {
            console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"phase"', "either " + __WEBPACK_IMPORTED_MODULE_1__enums_js__["o" /* modifierPhases */].join(', '), "\"" + String(modifier.phase) + "\""));
          }

          break;

        case 'fn':
          if (typeof modifier.fn !== 'function') {
            console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"fn"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'effect':
          if (modifier.effect != null && typeof modifier.effect !== 'function') {
            console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"effect"', '"function"', "\"" + String(modifier.fn) + "\""));
          }

          break;

        case 'requires':
          if (modifier.requires != null && !Array.isArray(modifier.requires)) {
            console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"requires"', '"array"', "\"" + String(modifier.requires) + "\""));
          }

          break;

        case 'requiresIfExists':
          if (!Array.isArray(modifier.requiresIfExists)) {
            console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(INVALID_MODIFIER_ERROR, modifier.name, '"requiresIfExists"', '"array"', "\"" + String(modifier.requiresIfExists) + "\""));
          }

          break;

        case 'options':
        case 'data':
          break;

        default:
          console.error("PopperJS: an invalid property has been provided to the \"" + modifier.name + "\" modifier, valid properties are " + VALID_PROPERTIES.map(function (s) {
            return "\"" + s + "\"";
          }).join(', ') + "; but \"" + key + "\" was provided.");
      }

      modifier.requires && modifier.requires.forEach(function (requirement) {
        if (modifiers.find(function (mod) {
          return mod.name === requirement;
        }) == null) {
          console.error(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__format_js__["a" /* default */])(MISSING_DEPENDENCY_ERROR, String(modifier.name), requirement, requirement));
        }
      });
    });
  });
}

/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useEventListener;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__useEventCallback__ = __webpack_require__(10);



/**
 * Attaches an event handler outside directly to specified DOM element
 * bypassing the react synthetic event system.
 *
 * @param element The target to listen for events on
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useEventListener(eventTarget, event, listener, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var handler = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__useEventCallback__["a" /* default */])(listener);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    var target = typeof eventTarget === 'function' ? eventTarget() : eventTarget;
    target.addEventListener(event, handler, capture);
    return function () {
      return target.removeEventListener(event, handler, capture);
    };
  }, [eventTarget]);
}

/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useGlobalListener;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__useEventListener__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);



/**
 * Attaches an event handler outside directly to the `document`,
 * bypassing the react synthetic event system.
 *
 * ```ts
 * useGlobalListener('keydown', (event) => {
 *  console.log(event.key)
 * })
 * ```
 *
 * @param event The DOM event name
 * @param handler An event handler
 * @param capture Whether or not to listen during the capture event phase
 */
function useGlobalListener(event, handler, capture) {
  if (capture === void 0) {
    capture = false;
  }

  var documentTarget = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_react__["useCallback"])(function () {
    return document;
  }, []);
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__useEventListener__["a" /* default */])(documentTarget, event, handler, capture);
}

/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__useMounted__ = __webpack_require__(60);



function useSafeState(state) {
  var isMounted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__useMounted__["a" /* default */])();
  return [state[0], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useCallback"])(function (nextState) {
    if (!isMounted()) return;
    return state[1](nextState);
  }, [isMounted, state[1]])];
}

/* harmony default export */ __webpack_exports__["a"] = (useSafeState);

/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Runs an effect only when the dependencies have changed, skipping the
 * initial "on mount" run. Caution, if the dependency list never changes,
 * the effect is **never run**
 *
 * ```ts
 *  const ref = useRef<HTMLInput>(null);
 *
 *  // focuses an element only if the focus changes, and not on mount
 *  useUpdateEffect(() => {
 *    const element = ref.current?.children[focusedIdx] as HTMLElement
 *
 *    element?.focus()
 *
 *  }, [focusedIndex])
 * ```
 * @param effect An effect to run on mount
 *
 * @category effects
 */

function useUpdateEffect(fn, deps) {
  var isFirst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(true);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useEffect"])(function () {
    if (isFirst.current) {
      isFirst.current = false;
      return;
    }

    return fn();
  }, deps);
}

/* harmony default export */ __webpack_exports__["a"] = (useUpdateEffect);

/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = useUpdatedRef;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/**
 * Returns a ref that is immediately updated with the new value
 *
 * @param value The Ref value
 * @category refs
 */

function useUpdatedRef(value) {
  var valueRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_react__["useRef"])(value);
  valueRef.current = value;
  return valueRef;
}

/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = activeElement;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ownerDocument__ = __webpack_require__(25);

/**
 * Returns the actively focused element safely.
 *
 * @param doc the document to check
 */

function activeElement(doc) {
  if (doc === void 0) {
    doc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ownerDocument__["a" /* default */])();
  }

  // Support: IE 9 only
  // IE9 throws an "Unspecified error" accessing document.activeElement from an <iframe>
  try {
    var active = doc.activeElement; // IE11 returns a seemingly empty object in some cases when accessing
    // document.activeElement from an <iframe>

    if (!active || !active.nodeName) return null;
    return active;
  } catch (e) {
    /* ie throws if no active element */
    return doc.body;
  }
}

/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = addClass;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hasClass__ = __webpack_require__(123);

/**
 * Adds a CSS class to a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__hasClass__["a" /* default */])(element, className)) if (typeof element.className === 'string') element.className = element.className + " " + className;else element.setAttribute('class', (element.className && element.className.baseVal || '') + " " + className);
}

/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = camelize;
var rHyphen = /-(.)/g;
function camelize(string) {
  return string.replace(rHyphen, function (_, chr) {
    return chr.toUpperCase();
  });
}

/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = getComputedStyle;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ownerWindow__ = __webpack_require__(217);

/**
 * Returns one or all computed style properties of an element.
 * 
 * @param node the element
 * @param psuedoElement the style property
 */

function getComputedStyle(node, psuedoElement) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ownerWindow__["a" /* default */])(node).getComputedStyle(node, psuedoElement);
}

/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hyphenate;
var rUpper = /([A-Z])/g;
function hyphenate(string) {
  return string.replace(rUpper, '-$1').toLowerCase();
}

/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = hyphenateStyleName;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__hyphenate__ = __webpack_require__(211);
/**
 * Copyright 2013-2014, Facebook, Inc.
 * All rights reserved.
 * https://github.com/facebook/react/blob/2aeb8a2a6beb00617a4217f7f8284924fa2ad819/src/vendor/core/hyphenateStyleName.js
 */

var msPattern = /^ms-/;
function hyphenateStyleName(string) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__hyphenate__["a" /* default */])(string).replace(msPattern, '-ms-');
}

/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isDocument;
function isDocument(element) {
  return 'nodeType' in element && element.nodeType === document.DOCUMENT_NODE;
}

/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isTransform;
var supportedTransforms = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function isTransform(value) {
  return !!(value && supportedTransforms.test(value));
}

/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isWindow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__isDocument__ = __webpack_require__(213);

function isWindow(node) {
  if ('window' in node && node.window === node) return node;
  if (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__isDocument__["a" /* default */])(node)) return node.defaultView || false;
  return false;
}

/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = matches;
var matchesImpl;
/**
 * Checks if a given element matches a selector.
 * 
 * @param node the element
 * @param selector the selector
 */

function matches(node, selector) {
  if (!matchesImpl) {
    var body = document.body;
    var nativeMatch = body.matches || body.matchesSelector || body.webkitMatchesSelector || body.mozMatchesSelector || body.msMatchesSelector;

    matchesImpl = function matchesImpl(n, s) {
      return nativeMatch.call(n, s);
    };
  }

  return matchesImpl(node, selector);
}

/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = ownerWindow;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__ownerDocument__ = __webpack_require__(25);

/**
 * Returns the owner window of a given element.
 * 
 * @param node the element
 */

function ownerWindow(node) {
  var doc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__ownerDocument__["a" /* default */])(node);
  return doc && doc.defaultView || window;
}

/***/ }),
/* 218 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = removeClass;
function replaceClassName(origClass, classToRemove) {
  return origClass.replace(new RegExp("(^|\\s)" + classToRemove + "(?:\\s|$)", 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
}
/**
 * Removes a CSS class from a given element.
 * 
 * @param element the element
 * @param className the CSS class name
 */


function removeClass(element, className) {
  if (element.classList) {
    element.classList.remove(className);
  } else if (typeof element.className === 'string') {
    element.className = replaceClassName(element.className, className);
  } else {
    element.setAttribute('class', replaceClassName(element.className && element.className.baseVal || '', className));
  }
}

/***/ }),
/* 219 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = triggerEvent;
/**
 * Triggers an event on a given element.
 * 
 * @param node the element
 * @param eventName the event name to trigger
 * @param bubbles whether the event should bubble up
 * @param cancelable whether the event should be cancelable
 */
function triggerEvent(node, eventName, bubbles, cancelable) {
  if (bubbles === void 0) {
    bubbles = false;
  }

  if (cancelable === void 0) {
    cancelable = true;
  }

  if (node) {
    var event = document.createEvent('HTMLEvents');
    event.initEvent(eventName, bubbles, cancelable);
    node.dispatchEvent(event);
  }
}

/***/ }),
/* 220 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/


/* eslint-disable no-unused-vars */
var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
	if (val === null || val === undefined) {
		throw new TypeError('Object.assign cannot be called with null or undefined');
	}

	return Object(val);
}

function shouldUseNative() {
	try {
		if (!Object.assign) {
			return false;
		}

		// Detect buggy property enumeration order in older V8 versions.

		// https://bugs.chromium.org/p/v8/issues/detail?id=4118
		var test1 = new String('abc');  // eslint-disable-line no-new-wrappers
		test1[5] = 'de';
		if (Object.getOwnPropertyNames(test1)[0] === '5') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test2 = {};
		for (var i = 0; i < 10; i++) {
			test2['_' + String.fromCharCode(i)] = i;
		}
		var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
			return test2[n];
		});
		if (order2.join('') !== '0123456789') {
			return false;
		}

		// https://bugs.chromium.org/p/v8/issues/detail?id=3056
		var test3 = {};
		'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
			test3[letter] = letter;
		});
		if (Object.keys(Object.assign({}, test3)).join('') !==
				'abcdefghijklmnopqrst') {
			return false;
		}

		return true;
	} catch (err) {
		// We don't expect any of the above to throw, but better to be safe.
		return false;
	}
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
	var from;
	var to = toObject(target);
	var symbols;

	for (var s = 1; s < arguments.length; s++) {
		from = Object(arguments[s]);

		for (var key in from) {
			if (hasOwnProperty.call(from, key)) {
				to[key] = from[key];
			}
		}

		if (getOwnPropertySymbols) {
			symbols = getOwnPropertySymbols(from);
			for (var i = 0; i < symbols.length; i++) {
				if (propIsEnumerable.call(from, symbols[i])) {
					to[symbols[i]] = from[symbols[i]];
				}
			}
		}
	}

	return to;
};


/***/ }),
/* 221 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = createChainableTypeChecker;
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

// Mostly taken from ReactPropTypes.

function createChainableTypeChecker(validate) {
  function checkType(isRequired, props, propName, componentName, location, propFullName) {
    var componentNameSafe = componentName || '<<anonymous>>';
    var propFullNameSafe = propFullName || propName;

    if (props[propName] == null) {
      if (isRequired) {
        return new Error('Required ' + location + ' `' + propFullNameSafe + '` was not specified ' + ('in `' + componentNameSafe + '`.'));
      }

      return null;
    }

    for (var _len = arguments.length, args = Array(_len > 6 ? _len - 6 : 0), _key = 6; _key < _len; _key++) {
      args[_key - 6] = arguments[_key];
    }

    return validate.apply(undefined, [props, propName, componentNameSafe, location, propFullNameSafe].concat(args));
  }

  var chainedCheckType = checkType.bind(null, false);
  chainedCheckType.isRequired = checkType.bind(null, true);

  return chainedCheckType;
}
module.exports = exports['default'];

/***/ }),
/* 222 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  var ReactPropTypesSecret = __webpack_require__(89);
  var loggedTypeFailures = {};
  var has = __webpack_require__(126);

  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) { /**/ }
  };
}

/**
 * Assert that the values match with the type specs.
 * Error messages are memorized and will only be shown once.
 *
 * @param {object} typeSpecs Map of name to a ReactPropType
 * @param {object} values Runtime values that need to be type-checked
 * @param {string} location e.g. "prop", "context", "child context"
 * @param {string} componentName Name of the component for error messages.
 * @param {?Function} getStack Returns the component stack.
 * @private
 */
function checkPropTypes(typeSpecs, values, location, componentName, getStack) {
  if (process.env.NODE_ENV !== 'production') {
    for (var typeSpecName in typeSpecs) {
      if (has(typeSpecs, typeSpecName)) {
        var error;
        // Prop type validation may throw. In case they do, we don't want to
        // fail the render phase where it didn't fail before. So we log it.
        // After these have been cleaned up, we'll let them throw.
        try {
          // This is intentionally an invariant that gets caught. It's the same
          // behavior as without this statement except with a better message.
          if (typeof typeSpecs[typeSpecName] !== 'function') {
            var err = Error(
              (componentName || 'React class') + ': ' + location + ' type `' + typeSpecName + '` is invalid; ' +
              'it must be a function, usually from the `prop-types` package, but received `' + typeof typeSpecs[typeSpecName] + '`.' +
              'This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.'
            );
            err.name = 'Invariant Violation';
            throw err;
          }
          error = typeSpecs[typeSpecName](values, typeSpecName, componentName, location, null, ReactPropTypesSecret);
        } catch (ex) {
          error = ex;
        }
        if (error && !(error instanceof Error)) {
          printWarning(
            (componentName || 'React class') + ': type specification of ' +
            location + ' `' + typeSpecName + '` is invalid; the type checker ' +
            'function must return `null` or an `Error` but returned a ' + typeof error + '. ' +
            'You may have forgotten to pass an argument to the type checker ' +
            'creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and ' +
            'shape all require an argument).'
          );
        }
        if (error instanceof Error && !(error.message in loggedTypeFailures)) {
          // Only monitor this failure once because there tends to be a lot of the
          // same error.
          loggedTypeFailures[error.message] = true;

          var stack = getStack ? getStack() : '';

          printWarning(
            'Failed ' + location + ' type: ' + error.message + (stack != null ? stack : '')
          );
        }
      }
    }
  }
}

/**
 * Resets warning cache when testing.
 *
 * @private
 */
checkPropTypes.resetWarningCache = function() {
  if (process.env.NODE_ENV !== 'production') {
    loggedTypeFailures = {};
  }
}

module.exports = checkPropTypes;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 223 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(89);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),
/* 224 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactIs = __webpack_require__(161);
var assign = __webpack_require__(220);

var ReactPropTypesSecret = __webpack_require__(89);
var has = __webpack_require__(126);
var checkPropTypes = __webpack_require__(222);

var printWarning = function() {};

if (process.env.NODE_ENV !== 'production') {
  printWarning = function(text) {
    var message = 'Warning: ' + text;
    if (typeof console !== 'undefined') {
      console.error(message);
    }
    try {
      // --- Welcome to debugging React ---
      // This error was thrown as a convenience so that you can use this stack
      // to find the callsite that caused this warning to fire.
      throw new Error(message);
    } catch (x) {}
  };
}

function emptyFunctionThatReturnsNull() {
  return null;
}

module.exports = function(isValidElement, throwOnDirectAccess) {
  /* global Symbol */
  var ITERATOR_SYMBOL = typeof Symbol === 'function' && Symbol.iterator;
  var FAUX_ITERATOR_SYMBOL = '@@iterator'; // Before Symbol spec.

  /**
   * Returns the iterator method function contained on the iterable object.
   *
   * Be sure to invoke the function with the iterable as context:
   *
   *     var iteratorFn = getIteratorFn(myIterable);
   *     if (iteratorFn) {
   *       var iterator = iteratorFn.call(myIterable);
   *       ...
   *     }
   *
   * @param {?object} maybeIterable
   * @return {?function}
   */
  function getIteratorFn(maybeIterable) {
    var iteratorFn = maybeIterable && (ITERATOR_SYMBOL && maybeIterable[ITERATOR_SYMBOL] || maybeIterable[FAUX_ITERATOR_SYMBOL]);
    if (typeof iteratorFn === 'function') {
      return iteratorFn;
    }
  }

  /**
   * Collection of methods that allow declaration and validation of props that are
   * supplied to React components. Example usage:
   *
   *   var Props = require('ReactPropTypes');
   *   var MyArticle = React.createClass({
   *     propTypes: {
   *       // An optional string prop named "description".
   *       description: Props.string,
   *
   *       // A required enum prop named "category".
   *       category: Props.oneOf(['News','Photos']).isRequired,
   *
   *       // A prop named "dialog" that requires an instance of Dialog.
   *       dialog: Props.instanceOf(Dialog).isRequired
   *     },
   *     render: function() { ... }
   *   });
   *
   * A more formal specification of how these methods are used:
   *
   *   type := array|bool|func|object|number|string|oneOf([...])|instanceOf(...)
   *   decl := ReactPropTypes.{type}(.isRequired)?
   *
   * Each and every declaration produces a function with the same signature. This
   * allows the creation of custom validation functions. For example:
   *
   *  var MyLink = React.createClass({
   *    propTypes: {
   *      // An optional string or URI prop named "href".
   *      href: function(props, propName, componentName) {
   *        var propValue = props[propName];
   *        if (propValue != null && typeof propValue !== 'string' &&
   *            !(propValue instanceof URI)) {
   *          return new Error(
   *            'Expected a string or an URI for ' + propName + ' in ' +
   *            componentName
   *          );
   *        }
   *      }
   *    },
   *    render: function() {...}
   *  });
   *
   * @internal
   */

  var ANONYMOUS = '<<anonymous>>';

  // Important!
  // Keep this list in sync with production version in `./factoryWithThrowingShims.js`.
  var ReactPropTypes = {
    array: createPrimitiveTypeChecker('array'),
    bigint: createPrimitiveTypeChecker('bigint'),
    bool: createPrimitiveTypeChecker('boolean'),
    func: createPrimitiveTypeChecker('function'),
    number: createPrimitiveTypeChecker('number'),
    object: createPrimitiveTypeChecker('object'),
    string: createPrimitiveTypeChecker('string'),
    symbol: createPrimitiveTypeChecker('symbol'),

    any: createAnyTypeChecker(),
    arrayOf: createArrayOfTypeChecker,
    element: createElementTypeChecker(),
    elementType: createElementTypeTypeChecker(),
    instanceOf: createInstanceTypeChecker,
    node: createNodeChecker(),
    objectOf: createObjectOfTypeChecker,
    oneOf: createEnumTypeChecker,
    oneOfType: createUnionTypeChecker,
    shape: createShapeTypeChecker,
    exact: createStrictShapeTypeChecker,
  };

  /**
   * inlined Object.is polyfill to avoid requiring consumers ship their own
   * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
   */
  /*eslint-disable no-self-compare*/
  function is(x, y) {
    // SameValue algorithm
    if (x === y) {
      // Steps 1-5, 7-10
      // Steps 6.b-6.e: +0 != -0
      return x !== 0 || 1 / x === 1 / y;
    } else {
      // Step 6.a: NaN == NaN
      return x !== x && y !== y;
    }
  }
  /*eslint-enable no-self-compare*/

  /**
   * We use an Error-like object for backward compatibility as people may call
   * PropTypes directly and inspect their output. However, we don't use real
   * Errors anymore. We don't inspect their stack anyway, and creating them
   * is prohibitively expensive if they are created too often, such as what
   * happens in oneOfType() for any type before the one that matched.
   */
  function PropTypeError(message, data) {
    this.message = message;
    this.data = data && typeof data === 'object' ? data: {};
    this.stack = '';
  }
  // Make `instanceof Error` still work for returned errors.
  PropTypeError.prototype = Error.prototype;

  function createChainableTypeChecker(validate) {
    if (process.env.NODE_ENV !== 'production') {
      var manualPropTypeCallCache = {};
      var manualPropTypeWarningCount = 0;
    }
    function checkType(isRequired, props, propName, componentName, location, propFullName, secret) {
      componentName = componentName || ANONYMOUS;
      propFullName = propFullName || propName;

      if (secret !== ReactPropTypesSecret) {
        if (throwOnDirectAccess) {
          // New behavior only for users of `prop-types` package
          var err = new Error(
            'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
            'Use `PropTypes.checkPropTypes()` to call them. ' +
            'Read more at http://fb.me/use-check-prop-types'
          );
          err.name = 'Invariant Violation';
          throw err;
        } else if (process.env.NODE_ENV !== 'production' && typeof console !== 'undefined') {
          // Old behavior for people using React.PropTypes
          var cacheKey = componentName + ':' + propName;
          if (
            !manualPropTypeCallCache[cacheKey] &&
            // Avoid spamming the console because they are often not actionable except for lib authors
            manualPropTypeWarningCount < 3
          ) {
            printWarning(
              'You are manually calling a React.PropTypes validation ' +
              'function for the `' + propFullName + '` prop on `' + componentName + '`. This is deprecated ' +
              'and will throw in the standalone `prop-types` package. ' +
              'You may be seeing this warning due to a third-party PropTypes ' +
              'library. See https://fb.me/react-warning-dont-call-proptypes ' + 'for details.'
            );
            manualPropTypeCallCache[cacheKey] = true;
            manualPropTypeWarningCount++;
          }
        }
      }
      if (props[propName] == null) {
        if (isRequired) {
          if (props[propName] === null) {
            return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required ' + ('in `' + componentName + '`, but its value is `null`.'));
          }
          return new PropTypeError('The ' + location + ' `' + propFullName + '` is marked as required in ' + ('`' + componentName + '`, but its value is `undefined`.'));
        }
        return null;
      } else {
        return validate(props, propName, componentName, location, propFullName);
      }
    }

    var chainedCheckType = checkType.bind(null, false);
    chainedCheckType.isRequired = checkType.bind(null, true);

    return chainedCheckType;
  }

  function createPrimitiveTypeChecker(expectedType) {
    function validate(props, propName, componentName, location, propFullName, secret) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== expectedType) {
        // `propValue` being instance of, say, date/regexp, pass the 'object'
        // check, but we can offer a more precise error message here rather than
        // 'of type `object`'.
        var preciseType = getPreciseType(propValue);

        return new PropTypeError(
          'Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + preciseType + '` supplied to `' + componentName + '`, expected ') + ('`' + expectedType + '`.'),
          {expectedType: expectedType}
        );
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createAnyTypeChecker() {
    return createChainableTypeChecker(emptyFunctionThatReturnsNull);
  }

  function createArrayOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside arrayOf.');
      }
      var propValue = props[propName];
      if (!Array.isArray(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an array.'));
      }
      for (var i = 0; i < propValue.length; i++) {
        var error = typeChecker(propValue, i, componentName, location, propFullName + '[' + i + ']', ReactPropTypesSecret);
        if (error instanceof Error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!isValidElement(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createElementTypeTypeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      if (!ReactIs.isValidElementType(propValue)) {
        var propType = getPropType(propValue);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected a single ReactElement type.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createInstanceTypeChecker(expectedClass) {
    function validate(props, propName, componentName, location, propFullName) {
      if (!(props[propName] instanceof expectedClass)) {
        var expectedClassName = expectedClass.name || ANONYMOUS;
        var actualClassName = getClassName(props[propName]);
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + actualClassName + '` supplied to `' + componentName + '`, expected ') + ('instance of `' + expectedClassName + '`.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createEnumTypeChecker(expectedValues) {
    if (!Array.isArray(expectedValues)) {
      if (process.env.NODE_ENV !== 'production') {
        if (arguments.length > 1) {
          printWarning(
            'Invalid arguments supplied to oneOf, expected an array, got ' + arguments.length + ' arguments. ' +
            'A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z]).'
          );
        } else {
          printWarning('Invalid argument supplied to oneOf, expected an array.');
        }
      }
      return emptyFunctionThatReturnsNull;
    }

    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      for (var i = 0; i < expectedValues.length; i++) {
        if (is(propValue, expectedValues[i])) {
          return null;
        }
      }

      var valuesString = JSON.stringify(expectedValues, function replacer(key, value) {
        var type = getPreciseType(value);
        if (type === 'symbol') {
          return String(value);
        }
        return value;
      });
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of value `' + String(propValue) + '` ' + ('supplied to `' + componentName + '`, expected one of ' + valuesString + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createObjectOfTypeChecker(typeChecker) {
    function validate(props, propName, componentName, location, propFullName) {
      if (typeof typeChecker !== 'function') {
        return new PropTypeError('Property `' + propFullName + '` of component `' + componentName + '` has invalid PropType notation inside objectOf.');
      }
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type ' + ('`' + propType + '` supplied to `' + componentName + '`, expected an object.'));
      }
      for (var key in propValue) {
        if (has(propValue, key)) {
          var error = typeChecker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
          if (error instanceof Error) {
            return error;
          }
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createUnionTypeChecker(arrayOfTypeCheckers) {
    if (!Array.isArray(arrayOfTypeCheckers)) {
      process.env.NODE_ENV !== 'production' ? printWarning('Invalid argument supplied to oneOfType, expected an instance of array.') : void 0;
      return emptyFunctionThatReturnsNull;
    }

    for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
      var checker = arrayOfTypeCheckers[i];
      if (typeof checker !== 'function') {
        printWarning(
          'Invalid argument supplied to oneOfType. Expected an array of check functions, but ' +
          'received ' + getPostfixForTypeWarning(checker) + ' at index ' + i + '.'
        );
        return emptyFunctionThatReturnsNull;
      }
    }

    function validate(props, propName, componentName, location, propFullName) {
      var expectedTypes = [];
      for (var i = 0; i < arrayOfTypeCheckers.length; i++) {
        var checker = arrayOfTypeCheckers[i];
        var checkerResult = checker(props, propName, componentName, location, propFullName, ReactPropTypesSecret);
        if (checkerResult == null) {
          return null;
        }
        if (checkerResult.data && has(checkerResult.data, 'expectedType')) {
          expectedTypes.push(checkerResult.data.expectedType);
        }
      }
      var expectedTypesMessage = (expectedTypes.length > 0) ? ', expected one of type [' + expectedTypes.join(', ') + ']': '';
      return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`' + expectedTypesMessage + '.'));
    }
    return createChainableTypeChecker(validate);
  }

  function createNodeChecker() {
    function validate(props, propName, componentName, location, propFullName) {
      if (!isNode(props[propName])) {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` supplied to ' + ('`' + componentName + '`, expected a ReactNode.'));
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function invalidValidatorError(componentName, location, propFullName, key, type) {
    return new PropTypeError(
      (componentName || 'React class') + ': ' + location + ' type `' + propFullName + '.' + key + '` is invalid; ' +
      'it must be a function, usually from the `prop-types` package, but received `' + type + '`.'
    );
  }

  function createShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      for (var key in shapeTypes) {
        var checker = shapeTypes[key];
        if (typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }
    return createChainableTypeChecker(validate);
  }

  function createStrictShapeTypeChecker(shapeTypes) {
    function validate(props, propName, componentName, location, propFullName) {
      var propValue = props[propName];
      var propType = getPropType(propValue);
      if (propType !== 'object') {
        return new PropTypeError('Invalid ' + location + ' `' + propFullName + '` of type `' + propType + '` ' + ('supplied to `' + componentName + '`, expected `object`.'));
      }
      // We need to check all keys in case some are required but missing from props.
      var allKeys = assign({}, props[propName], shapeTypes);
      for (var key in allKeys) {
        var checker = shapeTypes[key];
        if (has(shapeTypes, key) && typeof checker !== 'function') {
          return invalidValidatorError(componentName, location, propFullName, key, getPreciseType(checker));
        }
        if (!checker) {
          return new PropTypeError(
            'Invalid ' + location + ' `' + propFullName + '` key `' + key + '` supplied to `' + componentName + '`.' +
            '\nBad object: ' + JSON.stringify(props[propName], null, '  ') +
            '\nValid keys: ' + JSON.stringify(Object.keys(shapeTypes), null, '  ')
          );
        }
        var error = checker(propValue, key, componentName, location, propFullName + '.' + key, ReactPropTypesSecret);
        if (error) {
          return error;
        }
      }
      return null;
    }

    return createChainableTypeChecker(validate);
  }

  function isNode(propValue) {
    switch (typeof propValue) {
      case 'number':
      case 'string':
      case 'undefined':
        return true;
      case 'boolean':
        return !propValue;
      case 'object':
        if (Array.isArray(propValue)) {
          return propValue.every(isNode);
        }
        if (propValue === null || isValidElement(propValue)) {
          return true;
        }

        var iteratorFn = getIteratorFn(propValue);
        if (iteratorFn) {
          var iterator = iteratorFn.call(propValue);
          var step;
          if (iteratorFn !== propValue.entries) {
            while (!(step = iterator.next()).done) {
              if (!isNode(step.value)) {
                return false;
              }
            }
          } else {
            // Iterator will provide entry [k,v] tuples rather than values.
            while (!(step = iterator.next()).done) {
              var entry = step.value;
              if (entry) {
                if (!isNode(entry[1])) {
                  return false;
                }
              }
            }
          }
        } else {
          return false;
        }

        return true;
      default:
        return false;
    }
  }

  function isSymbol(propType, propValue) {
    // Native Symbol.
    if (propType === 'symbol') {
      return true;
    }

    // falsy value can't be a Symbol
    if (!propValue) {
      return false;
    }

    // 19.4.3.5 Symbol.prototype[@@toStringTag] === 'Symbol'
    if (propValue['@@toStringTag'] === 'Symbol') {
      return true;
    }

    // Fallback for non-spec compliant Symbols which are polyfilled.
    if (typeof Symbol === 'function' && propValue instanceof Symbol) {
      return true;
    }

    return false;
  }

  // Equivalent of `typeof` but with special handling for array and regexp.
  function getPropType(propValue) {
    var propType = typeof propValue;
    if (Array.isArray(propValue)) {
      return 'array';
    }
    if (propValue instanceof RegExp) {
      // Old webkits (at least until Android 4.0) return 'function' rather than
      // 'object' for typeof a RegExp. We'll normalize this here so that /bla/
      // passes PropTypes.object.
      return 'object';
    }
    if (isSymbol(propType, propValue)) {
      return 'symbol';
    }
    return propType;
  }

  // This handles more types than `getPropType`. Only used for error messages.
  // See `createPrimitiveTypeChecker`.
  function getPreciseType(propValue) {
    if (typeof propValue === 'undefined' || propValue === null) {
      return '' + propValue;
    }
    var propType = getPropType(propValue);
    if (propType === 'object') {
      if (propValue instanceof Date) {
        return 'date';
      } else if (propValue instanceof RegExp) {
        return 'regexp';
      }
    }
    return propType;
  }

  // Returns a string that is postfixed to a warning about an invalid type.
  // For example, "undefined" or "of type array"
  function getPostfixForTypeWarning(value) {
    var type = getPreciseType(value);
    switch (type) {
      case 'array':
      case 'object':
        return 'an ' + type;
      case 'boolean':
      case 'date':
      case 'regexp':
        return 'a ' + type;
      default:
        return type;
    }
  }

  // Returns class name of the object, if any.
  function getClassName(propValue) {
    if (!propValue.constructor || !propValue.constructor.name) {
      return ANONYMOUS;
    }
    return propValue.constructor.name;
  }

  ReactPropTypes.checkPropTypes = checkPropTypes;
  ReactPropTypes.resetWarningCache = checkPropTypes.resetWarningCache;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 225 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__AccordionToggle__ = __webpack_require__(130);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__SelectableContext__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__AccordionCollapse__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__AccordionContext__ = __webpack_require__(48);


var _excluded = ["as", "activeKey", "bsPrefix", "children", "className", "onSelect"];








var Accordion = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_uncontrollable__["a" /* useUncontrolled */])(props, {
    activeKey: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      activeKey = _useUncontrolled.activeKey,
      bsPrefix = _useUncontrolled.bsPrefix,
      children = _useUncontrolled.children,
      className = _useUncontrolled.className,
      onSelect = _useUncontrolled.onSelect,
      controlledProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useUncontrolled, _excluded);

  var finalClassName = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'accordion'));
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__AccordionContext__["a" /* default */].Provider, {
    value: activeKey || null
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__SelectableContext__["b" /* default */].Provider, {
    value: onSelect || null
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, controlledProps, {
    className: finalClassName
  }), children)));
});
Accordion.displayName = 'Accordion';
Accordion.Toggle = __WEBPACK_IMPORTED_MODULE_6__AccordionToggle__["a" /* default */];
Accordion.Collapse = __WEBPACK_IMPORTED_MODULE_8__AccordionCollapse__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Accordion);

/***/ }),
/* 226 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__Fade__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CloseButton__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__divWithClassName__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__createWithBsPrefix__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SafeAnchor__ = __webpack_require__(19);


var _excluded = ["bsPrefix", "show", "closeLabel", "className", "children", "variant", "onClose", "dismissible", "transition"];










var DivStyledAsH4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__divWithClassName__["a" /* default */])('h4');
DivStyledAsH4.displayName = 'DivStyledAsH4';
var AlertHeading = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__createWithBsPrefix__["a" /* default */])('alert-heading', {
  Component: DivStyledAsH4
});
var AlertLink = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__createWithBsPrefix__["a" /* default */])('alert-link', {
  Component: __WEBPACK_IMPORTED_MODULE_11__SafeAnchor__["a" /* default */]
});
var defaultProps = {
  show: true,
  transition: __WEBPACK_IMPORTED_MODULE_7__Fade__["a" /* default */],
  closeLabel: 'Close alert'
};
var Alert = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (uncontrolledProps, ref) {
  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_uncontrollable__["a" /* useUncontrolled */])(uncontrolledProps, {
    show: 'onClose'
  }),
      bsPrefix = _useUncontrolled.bsPrefix,
      show = _useUncontrolled.show,
      closeLabel = _useUncontrolled.closeLabel,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      variant = _useUncontrolled.variant,
      onClose = _useUncontrolled.onClose,
      dismissible = _useUncontrolled.dismissible,
      transition = _useUncontrolled.transition,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useUncontrolled, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'alert');
  var handleClose = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__restart_hooks_useEventCallback__["a" /* default */])(function (e) {
    if (onClose) {
      onClose(false, e);
    }
  });
  var Transition = transition === true ? __WEBPACK_IMPORTED_MODULE_7__Fade__["a" /* default */] : transition;
  var alert = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    role: "alert"
  }, !Transition ? props : undefined, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefix, variant && prefix + "-" + variant, dismissible && prefix + "-dismissible")
  }), dismissible && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__CloseButton__["a" /* default */], {
    onClick: handleClose,
    label: closeLabel
  }), children);
  if (!Transition) return show ? alert : null;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Transition, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    unmountOnExit: true
  }, props, {
    ref: undefined,
    in: show
  }), alert);
});
Alert.displayName = 'Alert';
Alert.defaultProps = defaultProps;
Alert.Link = AlertLink;
Alert.Heading = AlertHeading;
/* harmony default export */ __webpack_exports__["a"] = (Alert);

/***/ }),
/* 227 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "variant", "pill", "className", "as"];



var defaultProps = {
  pill: false
};
var Badge = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      pill = _ref.pill,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'span' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'badge');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefix, pill && prefix + "-pill", variant && prefix + "-" + variant)
  }));
});
Badge.displayName = 'Badge';
Badge.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Badge);

/***/ }),
/* 228 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BootstrapModalManager; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_helpers_css__ = __webpack_require__(41);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dom_helpers_querySelectorAll__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dom_helpers_scrollbarSize__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_overlays_ModalManager__ = __webpack_require__(164);





var Selector = {
  FIXED_CONTENT: '.fixed-top, .fixed-bottom, .is-fixed, .sticky-top',
  STICKY_CONTENT: '.sticky-top',
  NAVBAR_TOGGLER: '.navbar-toggler'
};

var BootstrapModalManager = /*#__PURE__*/function (_ModalManager) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(BootstrapModalManager, _ModalManager);

  function BootstrapModalManager() {
    return _ModalManager.apply(this, arguments) || this;
  }

  var _proto = BootstrapModalManager.prototype;

  _proto.adjustAndStore = function adjustAndStore(prop, element, adjust) {
    var _css;

    var actual = element.style[prop]; // TODO: DOMStringMap and CSSStyleDeclaration aren't strictly compatible
    // @ts-ignore

    element.dataset[prop] = actual;
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_css__["a" /* default */])(element, (_css = {}, _css[prop] = parseFloat(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_css__["a" /* default */])(element, prop)) + adjust + "px", _css));
  };

  _proto.restore = function restore(prop, element) {
    var value = element.dataset[prop];

    if (value !== undefined) {
      var _css2;

      delete element.dataset[prop];
      __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_css__["a" /* default */])(element, (_css2 = {}, _css2[prop] = value, _css2));
    }
  };

  _proto.setContainerStyle = function setContainerStyle(containerState, container) {
    var _this = this;

    _ModalManager.prototype.setContainerStyle.call(this, containerState, container);

    if (!containerState.overflowing) return;
    var size = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_dom_helpers_scrollbarSize__["a" /* default */])();
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_querySelectorAll__["a" /* default */])(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this.adjustAndStore('paddingRight', el, size);
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_querySelectorAll__["a" /* default */])(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this.adjustAndStore('marginRight', el, -size);
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_querySelectorAll__["a" /* default */])(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this.adjustAndStore('marginRight', el, size);
    });
  };

  _proto.removeContainerStyle = function removeContainerStyle(containerState, container) {
    var _this2 = this;

    _ModalManager.prototype.removeContainerStyle.call(this, containerState, container);

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_querySelectorAll__["a" /* default */])(container, Selector.FIXED_CONTENT).forEach(function (el) {
      return _this2.restore('paddingRight', el);
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_querySelectorAll__["a" /* default */])(container, Selector.STICKY_CONTENT).forEach(function (el) {
      return _this2.restore('marginRight', el);
    });
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_querySelectorAll__["a" /* default */])(container, Selector.NAVBAR_TOGGLER).forEach(function (el) {
      return _this2.restore('marginRight', el);
    });
  };

  return BootstrapModalManager;
}(__WEBPACK_IMPORTED_MODULE_4_react_overlays_ModalManager__["a" /* default */]);



/***/ }),
/* 229 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__BreadcrumbItem__ = __webpack_require__(131);


var _excluded = ["bsPrefix", "className", "listProps", "children", "label", "as"];




var defaultProps = {
  label: 'breadcrumb',
  listProps: {}
};
var Breadcrumb = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      listProps = _ref.listProps,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'nav' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'breadcrumb');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    "aria-label": label,
    className: className,
    ref: ref
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ol", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, listProps, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(prefix, listProps == null ? void 0 : listProps.className)
  }), children));
});
Breadcrumb.displayName = 'Breadcrumb';
Breadcrumb.defaultProps = defaultProps;
Breadcrumb.Item = __WEBPACK_IMPORTED_MODULE_5__BreadcrumbItem__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Breadcrumb);

/***/ }),
/* 230 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className"];



var defaultProps = {
  role: 'toolbar'
};
var ButtonToolbar = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'btn-toolbar');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefix)
  }));
});
ButtonToolbar.displayName = 'ButtonToolbar';
ButtonToolbar.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ButtonToolbar);

/***/ }),
/* 231 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__divWithClassName__ = __webpack_require__(103);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__CardContext__ = __webpack_require__(132);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__CardImg__ = __webpack_require__(133);


var _excluded = ["bsPrefix", "className", "bg", "text", "border", "body", "children", "as"];







var DivStyledAsH5 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__divWithClassName__["a" /* default */])('h5');
var DivStyledAsH6 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__divWithClassName__["a" /* default */])('h6');
var CardBody = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__["a" /* default */])('card-body');
var CardTitle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__["a" /* default */])('card-title', {
  Component: DivStyledAsH5
});
var CardSubtitle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__["a" /* default */])('card-subtitle', {
  Component: DivStyledAsH6
});
var CardLink = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__["a" /* default */])('card-link', {
  Component: 'a'
});
var CardText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__["a" /* default */])('card-text', {
  Component: 'p'
});
var CardHeader = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__["a" /* default */])('card-header');
var CardFooter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__["a" /* default */])('card-footer');
var CardImgOverlay = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__["a" /* default */])('card-img-overlay');
var defaultProps = {
  body: false
};
var Card = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      bg = _ref.bg,
      text = _ref.text,
      border = _ref.border,
      body = _ref.body,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'card');
  var cardContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
    return {
      cardHeaderBsPrefix: prefix + "-header"
    };
  }, [prefix]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__CardContext__["a" /* default */].Provider, {
    value: cardContext
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefix, bg && "bg-" + bg, text && "text-" + text, border && "border-" + border)
  }), body ?
  /*#__PURE__*/
  // @ts-ignore
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(CardBody, null, children) : children));
});
Card.displayName = 'Card';
Card.defaultProps = defaultProps;
Card.Img = __WEBPACK_IMPORTED_MODULE_8__CardImg__["a" /* default */];
Card.Title = CardTitle;
Card.Subtitle = CardSubtitle;
Card.Body = CardBody;
Card.Link = CardLink;
Card.Text = CardText;
Card.Header = CardHeader;
Card.Footer = CardFooter;
Card.ImgOverlay = CardImgOverlay;
/* harmony default export */ __webpack_exports__["a"] = (Card);

/***/ }),
/* 232 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('card-columns'));

/***/ }),
/* 233 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('card-deck'));

/***/ }),
/* 234 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('card-group'));

/***/ }),
/* 235 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__restart_hooks_useUpdateEffect__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restart_hooks_useCommittedRef__ = __webpack_require__(120);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restart_hooks_useTimeout__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react_transition_group_Transition__ = __webpack_require__(108);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__CarouselCaption__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CarouselItem__ = __webpack_require__(134);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ElementChildren__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__SafeAnchor__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__transitionEndListener__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__triggerBrowserReflow__ = __webpack_require__(105);


var _excluded = ["as", "bsPrefix", "slide", "fade", "controls", "indicators", "activeIndex", "onSelect", "onSlide", "onSlid", "interval", "keyboard", "onKeyDown", "pause", "onMouseOver", "onMouseOut", "wrap", "touch", "onTouchStart", "onTouchMove", "onTouchEnd", "prevIcon", "prevLabel", "nextIcon", "nextLabel", "className", "children"];
















var SWIPE_THRESHOLD = 40;
var propTypes = {
  /**
   * @default 'carousel'
   */
  bsPrefix: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,
  as: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.elementType,

  /**
   * Enables animation on the Carousel as it transitions between slides.
   */
  slide: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Animates slides with a crossfade animation instead of the default slide animation */
  fade: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * Show the Carousel previous and next arrows for changing the current slide
   */
  controls: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * Show a set of slide position indicators
   */
  indicators: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * Controls the current visible slide
   *
   * @controllable onSelect
   */
  activeIndex: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number,

  /**
   * Callback fired when the active item changes.
   *
   * ```js
   * (eventKey: number, event: Object | null) => void
   * ```
   *
   * @controllable activeIndex
   */
  onSelect: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Callback fired when a slide transition starts.
   *
   * ```js
   * (eventKey: number, direction: 'left' | 'right') => void
   */
  onSlide: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * Callback fired when a slide transition ends.
   *
   * ```js
   * (eventKey: number, direction: 'left' | 'right') => void
   */
  onSlid: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.func,

  /**
   * The amount of time to delay between automatically cycling an item. If `null`, carousel will not automatically cycle.
   */
  interval: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.number,

  /** Whether the carousel should react to keyboard events. */
  keyboard: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * If set to `"hover"`, pauses the cycling of the carousel on `mouseenter` and resumes the cycling of the carousel on `mouseleave`. If set to `false`, hovering over the carousel won't pause it.
   *
   * On touch-enabled devices, when set to `"hover"`, cycling will pause on `touchend` (once the user finished interacting with the carousel) for two intervals, before automatically resuming. Note that this is in addition to the above mouse behavior.
   */
  pause: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.oneOf(['hover', false]),

  /** Whether the carousel should cycle continuously or have hard stops. */
  wrap: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /**
   * Whether the carousel should support left/right swipe interactions on touchscreen devices.
   */
  touch: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.bool,

  /** Override the default button icon for the "previous" control */
  prevIcon: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the previous element
   * in the carousel.
   * Set to null to deactivate.
   */
  prevLabel: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string,

  /** Override the default button icon for the "next" control */
  nextIcon: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.node,

  /**
   * Label shown to screen readers only, can be used to show the next element
   * in the carousel.
   * Set to null to deactivate.
   */
  nextLabel: __WEBPACK_IMPORTED_MODULE_8_prop_types___default.a.string
};
var defaultProps = {
  slide: true,
  fade: false,
  controls: true,
  indicators: true,
  defaultActiveIndex: 0,
  interval: 5000,
  keyboard: true,
  pause: 'hover',
  wrap: true,
  touch: true,
  prevIcon: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-prev-icon"
  }),
  prevLabel: 'Previous',
  nextIcon: /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", {
    "aria-hidden": "true",
    className: "carousel-control-next-icon"
  }),
  nextLabel: 'Next'
};

function isVisible(element) {
  if (!element || !element.style || !element.parentNode || !element.parentNode.style) {
    return false;
  }

  var elementStyle = getComputedStyle(element);
  return elementStyle.display !== 'none' && elementStyle.visibility !== 'hidden' && getComputedStyle(element.parentNode).display !== 'none';
}

function CarouselFunc(uncontrolledProps, ref) {
  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10_uncontrollable__["a" /* useUncontrolled */])(uncontrolledProps, {
    activeIndex: 'onSelect'
  }),
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      bsPrefix = _useUncontrolled.bsPrefix,
      slide = _useUncontrolled.slide,
      fade = _useUncontrolled.fade,
      controls = _useUncontrolled.controls,
      indicators = _useUncontrolled.indicators,
      activeIndex = _useUncontrolled.activeIndex,
      onSelect = _useUncontrolled.onSelect,
      onSlide = _useUncontrolled.onSlide,
      onSlid = _useUncontrolled.onSlid,
      interval = _useUncontrolled.interval,
      keyboard = _useUncontrolled.keyboard,
      onKeyDown = _useUncontrolled.onKeyDown,
      pause = _useUncontrolled.pause,
      onMouseOver = _useUncontrolled.onMouseOver,
      onMouseOut = _useUncontrolled.onMouseOut,
      wrap = _useUncontrolled.wrap,
      touch = _useUncontrolled.touch,
      onTouchStart = _useUncontrolled.onTouchStart,
      onTouchMove = _useUncontrolled.onTouchMove,
      onTouchEnd = _useUncontrolled.onTouchEnd,
      prevIcon = _useUncontrolled.prevIcon,
      prevLabel = _useUncontrolled.prevLabel,
      nextIcon = _useUncontrolled.nextIcon,
      nextLabel = _useUncontrolled.nextLabel,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useUncontrolled, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_15__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'carousel');
  var nextDirectionRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useRef"])(null);

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useState"])('next'),
      direction = _useState[0],
      setDirection = _useState[1];

  var _useState2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useState"])(false),
      paused = _useState2[0],
      setPaused = _useState2[1];

  var _useState3 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useState"])(false),
      isSliding = _useState3[0],
      setIsSliding = _useState3[1];

  var _useState4 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useState"])(activeIndex || 0),
      renderedActiveIndex = _useState4[0],
      setRenderedActiveIndex = _useState4[1];

  if (!isSliding && activeIndex !== renderedActiveIndex) {
    if (nextDirectionRef.current) {
      setDirection(nextDirectionRef.current);
    } else {
      setDirection((activeIndex || 0) > renderedActiveIndex ? 'next' : 'prev');
    }

    if (slide) {
      setIsSliding(true);
    }

    setRenderedActiveIndex(activeIndex || 0);
  }

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useEffect"])(function () {
    if (nextDirectionRef.current) {
      nextDirectionRef.current = null;
    }
  });
  var numChildren = 0;
  var activeChildInterval; // Iterate to grab all of the children's interval values
  // (and count them, too)

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__ElementChildren__["b" /* forEach */])(children, function (child, index) {
    ++numChildren;

    if (index === activeIndex) {
      activeChildInterval = child.props.interval;
    }
  });
  var activeChildIntervalRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__restart_hooks_useCommittedRef__["a" /* default */])(activeChildInterval);
  var prev = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useCallback"])(function (event) {
    if (isSliding) {
      return;
    }

    var nextActiveIndex = renderedActiveIndex - 1;

    if (nextActiveIndex < 0) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = numChildren - 1;
    }

    nextDirectionRef.current = 'prev';

    if (onSelect) {
      onSelect(nextActiveIndex, event);
    }
  }, [isSliding, renderedActiveIndex, onSelect, wrap, numChildren]); // This is used in the setInterval, so it should not invalidate.

  var next = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__restart_hooks_useEventCallback__["a" /* default */])(function (event) {
    if (isSliding) {
      return;
    }

    var nextActiveIndex = renderedActiveIndex + 1;

    if (nextActiveIndex >= numChildren) {
      if (!wrap) {
        return;
      }

      nextActiveIndex = 0;
    }

    nextDirectionRef.current = 'next';

    if (onSelect) {
      onSelect(nextActiveIndex, event);
    }
  });
  var elementRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useRef"])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useImperativeHandle"])(ref, function () {
    return {
      element: elementRef.current,
      prev: prev,
      next: next
    };
  }); // This is used in the setInterval, so it should not invalidate.

  var nextWhenVisible = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__restart_hooks_useEventCallback__["a" /* default */])(function () {
    if (!document.hidden && isVisible(elementRef.current)) {
      next();
    }
  });
  var slideDirection = direction === 'next' ? 'left' : 'right';
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3__restart_hooks_useUpdateEffect__["a" /* default */])(function () {
    if (slide) {
      // These callbacks will be handled by the <Transition> callbacks.
      return;
    }

    if (onSlide) {
      onSlide(renderedActiveIndex, slideDirection);
    }

    if (onSlid) {
      onSlid(renderedActiveIndex, slideDirection);
    }
  }, [renderedActiveIndex]);
  var orderClassName = prefix + "-item-" + direction;
  var directionalClassName = prefix + "-item-" + slideDirection;
  var handleEnter = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useCallback"])(function (node) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_17__triggerBrowserReflow__["a" /* default */])(node);

    if (onSlide) {
      onSlide(renderedActiveIndex, slideDirection);
    }
  }, [onSlide, renderedActiveIndex, slideDirection]);
  var handleEntered = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useCallback"])(function () {
    setIsSliding(false);

    if (onSlid) {
      onSlid(renderedActiveIndex, slideDirection);
    }
  }, [onSlid, renderedActiveIndex, slideDirection]);
  var handleKeyDown = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useCallback"])(function (event) {
    if (keyboard && !/input|textarea/i.test(event.target.tagName)) {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prev(event);
          return;

        case 'ArrowRight':
          event.preventDefault();
          next(event);
          return;

        default:
      }
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  }, [keyboard, onKeyDown, prev, next]);
  var handleMouseOver = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useCallback"])(function (event) {
    if (pause === 'hover') {
      setPaused(true);
    }

    if (onMouseOver) {
      onMouseOver(event);
    }
  }, [pause, onMouseOver]);
  var handleMouseOut = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useCallback"])(function (event) {
    setPaused(false);

    if (onMouseOut) {
      onMouseOut(event);
    }
  }, [onMouseOut]);
  var touchStartXRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useRef"])(0);
  var touchDeltaXRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useRef"])(0);
  var touchUnpauseTimeout = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__restart_hooks_useTimeout__["a" /* default */])();
  var handleTouchStart = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useCallback"])(function (event) {
    touchStartXRef.current = event.touches[0].clientX;
    touchDeltaXRef.current = 0;

    if (pause === 'hover') {
      setPaused(true);
    }

    if (onTouchStart) {
      onTouchStart(event);
    }
  }, [pause, onTouchStart]);
  var handleTouchMove = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useCallback"])(function (event) {
    if (event.touches && event.touches.length > 1) {
      touchDeltaXRef.current = 0;
    } else {
      touchDeltaXRef.current = event.touches[0].clientX - touchStartXRef.current;
    }

    if (onTouchMove) {
      onTouchMove(event);
    }
  }, [onTouchMove]);
  var handleTouchEnd = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useCallback"])(function (event) {
    if (touch) {
      var touchDeltaX = touchDeltaXRef.current;

      if (Math.abs(touchDeltaX) > SWIPE_THRESHOLD) {
        if (touchDeltaX > 0) {
          prev(event);
        } else {
          next(event);
        }
      }
    }

    if (pause === 'hover') {
      touchUnpauseTimeout.set(function () {
        setPaused(false);
      }, interval || undefined);
    }

    if (onTouchEnd) {
      onTouchEnd(event);
    }
  }, [touch, pause, prev, next, touchUnpauseTimeout, interval, onTouchEnd]);
  var shouldPlay = interval != null && !paused && !isSliding;
  var intervalHandleRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useRef"])();
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useEffect"])(function () {
    var _ref, _activeChildIntervalR;

    if (!shouldPlay) {
      return undefined;
    }

    intervalHandleRef.current = window.setInterval(document.visibilityState ? nextWhenVisible : next, (_ref = (_activeChildIntervalR = activeChildIntervalRef.current) != null ? _activeChildIntervalR : interval) != null ? _ref : undefined);
    return function () {
      if (intervalHandleRef.current !== null) {
        clearInterval(intervalHandleRef.current);
      }
    };
  }, [shouldPlay, next, activeChildIntervalRef, interval, nextWhenVisible]);
  var indicatorOnClicks = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9_react__["useMemo"])(function () {
    return indicators && Array.from({
      length: numChildren
    }, function (_, index) {
      return function (event) {
        if (onSelect) {
          onSelect(index, event);
        }
      };
    });
  }, [indicators, numChildren, onSelect]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: elementRef
  }, props, {
    onKeyDown: handleKeyDown,
    onMouseOver: handleMouseOver,
    onMouseOut: handleMouseOut,
    onTouchStart: handleTouchStart,
    onTouchMove: handleTouchMove,
    onTouchEnd: handleTouchEnd,
    className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(className, prefix, slide && 'slide', fade && prefix + "-fade")
  }), indicators && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("ol", {
    className: prefix + "-indicators"
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__ElementChildren__["a" /* map */])(children, function (_child, index) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("li", {
      key: index,
      className: index === renderedActiveIndex ? 'active' : undefined,
      onClick: indicatorOnClicks ? indicatorOnClicks[index] : undefined
    });
  })), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("div", {
    className: prefix + "-inner"
  }, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_13__ElementChildren__["a" /* map */])(children, function (child, index) {
    var isActive = index === renderedActiveIndex;
    return slide ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react_transition_group_Transition__["c" /* default */], {
      in: isActive,
      onEnter: isActive ? handleEnter : undefined,
      onEntered: isActive ? handleEntered : undefined,
      addEndListener: __WEBPACK_IMPORTED_MODULE_16__transitionEndListener__["a" /* default */]
    }, function (status) {
      return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.cloneElement(child, {
        className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(child.props.className, isActive && status !== 'entered' && orderClassName, (status === 'entered' || status === 'exiting') && 'active', (status === 'entering' || status === 'exiting') && directionalClassName)
      });
    }) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.cloneElement(child, {
      className: __WEBPACK_IMPORTED_MODULE_6_classnames___default()(child.props.className, isActive && 'active')
    });
  })), controls && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9_react___default.a.Fragment, null, (wrap || activeIndex !== 0) && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__SafeAnchor__["a" /* default */], {
    className: prefix + "-control-prev",
    onClick: prev
  }, prevIcon, prevLabel && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", {
    className: "sr-only"
  }, prevLabel)), (wrap || activeIndex !== numChildren - 1) && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_14__SafeAnchor__["a" /* default */], {
    className: prefix + "-control-next",
    onClick: next
  }, nextIcon, nextLabel && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.createElement("span", {
    className: "sr-only"
  }, nextLabel))));
}

var Carousel = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_9_react___default.a.forwardRef(CarouselFunc);
Carousel.displayName = 'Carousel';
Carousel.propTypes = propTypes;
Carousel.defaultProps = defaultProps;
Carousel.Caption = __WEBPACK_IMPORTED_MODULE_11__CarouselCaption__["a" /* default */];
Carousel.Item = __WEBPACK_IMPORTED_MODULE_12__CarouselItem__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Carousel);

/***/ }),
/* 236 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);

/* harmony default export */ __webpack_exports__["a"] = (__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('carousel-caption'));

/***/ }),
/* 237 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "fluid", "as", "className"];



var defaultProps = {
  fluid: false
};
var Container = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      fluid = _ref.fluid,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'container');
  var suffix = typeof fluid === 'string' ? "-" + fluid : '-fluid';
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, fluid ? "" + prefix + suffix : prefix)
  }));
});
Container.displayName = 'Container';
Container.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),
/* 238 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Dropdown__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__DropdownToggle__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__DropdownMenu__ = __webpack_require__(93);


var _excluded = ["title", "children", "bsPrefix", "rootCloseEvent", "variant", "size", "menuAlign", "menuRole", "renderMenuOnMount", "disabled", "href", "id"];





var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,

  /** An `href` passed to the Toggle component */
  href: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** An `onClick` handler passed to the Toggle component */
  onClick: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,

  /** The content of the non-toggle Button.  */
  title: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node.isRequired,

  /** Disables both Buttons  */
  disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /**
   * Aligns the dropdown menu responsively.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"left"|"right"|{ sm: "left"|"right" }|{ md: "left"|"right" }|{ lg: "left"|"right" }|{ xl: "left"|"right"} }
   */
  menuAlign: __WEBPACK_IMPORTED_MODULE_6__DropdownMenu__["a" /* alignPropType */],

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** @ignore */
  bsPrefix: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** @ignore */
  variant: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** @ignore */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
};
/**
 * A convenience component for simple or general use dropdowns. Renders a `Button` toggle and all `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of
 * [`Dropdown`'s props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._ Only
 * the Button `variant`, `size` and `bsPrefix` props are passed to the toggle,
 * along with menu-related props are passed to the `Dropdown.Menu`
 */

var DropdownButton = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.forwardRef(function (_ref, ref) {
  var title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      rootCloseEvent = _ref.rootCloseEvent,
      variant = _ref.variant,
      size = _ref.size,
      menuAlign = _ref.menuAlign,
      menuRole = _ref.menuRole,
      renderMenuOnMount = _ref.renderMenuOnMount,
      disabled = _ref.disabled,
      href = _ref.href,
      id = _ref.id,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Dropdown__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__DropdownToggle__["a" /* default */], {
    id: id,
    href: href,
    size: size,
    variant: variant,
    disabled: disabled,
    childBsPrefix: bsPrefix
  }, title), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__DropdownMenu__["b" /* default */], {
    align: menuAlign,
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});
DropdownButton.displayName = 'DropdownButton';
DropdownButton.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (DropdownButton);

/***/ }),
/* 239 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__SelectableContext__ = __webpack_require__(13);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NavContext__ = __webpack_require__(96);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__SafeAnchor__ = __webpack_require__(19);


var _excluded = ["bsPrefix", "className", "children", "eventKey", "disabled", "href", "onClick", "onSelect", "active", "as"];







var defaultProps = {
  as: __WEBPACK_IMPORTED_MODULE_8__SafeAnchor__["a" /* default */],
  disabled: false
};
var DropdownItem = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      eventKey = _ref.eventKey,
      disabled = _ref.disabled,
      href = _ref.href,
      onClick = _ref.onClick,
      onSelect = _ref.onSelect,
      propActive = _ref.active,
      Component = _ref.as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'dropdown-item');
  var onSelectCtx = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_5__SelectableContext__["b" /* default */]);
  var navContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_7__NavContext__["a" /* default */]);

  var _ref2 = navContext || {},
      activeKey = _ref2.activeKey;

  var key = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__SelectableContext__["a" /* makeEventKey */])(eventKey, href);
  var active = propActive == null && key != null ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__SelectableContext__["a" /* makeEventKey */])(activeKey) === key : propActive;
  var handleClick = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__["a" /* default */])(function (event) {
    // SafeAnchor handles the disabled case, but we handle it here
    // for other components
    if (disabled) return;
    if (onClick) onClick(event);
    if (onSelectCtx) onSelectCtx(key, event);
    if (onSelect) onSelect(key, event);
  });
  return (
    /*#__PURE__*/
    // "TS2604: JSX element type 'Component' does not have any construct or call signatures."
    // @ts-ignore
    __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
      ref: ref,
      href: href,
      disabled: disabled,
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefix, active && 'active', disabled && 'disabled'),
      onClick: handleClick
    }), children)
  );
});
DropdownItem.displayName = 'DropdownItem';
DropdownItem.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (DropdownItem);

/***/ }),
/* 240 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__FigureImage__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FigureCaption__ = __webpack_require__(241);



var Figure = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('figure', {
  Component: 'figure'
});
Figure.Image = __WEBPACK_IMPORTED_MODULE_1__FigureImage__["a" /* default */];
Figure.Caption = __WEBPACK_IMPORTED_MODULE_2__FigureCaption__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Figure);

/***/ }),
/* 241 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__ = __webpack_require__(7);

var FigureCaption = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__createWithBsPrefix__["a" /* default */])('figure-caption', {
  Component: 'figcaption'
});
/* harmony default export */ __webpack_exports__["a"] = (FigureCaption);

/***/ }),
/* 242 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Image__ = __webpack_require__(142);


var _excluded = ["className"];



var defaultProps = {
  fluid: true
};
var FigureImage = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var className = _ref.className,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Image__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, 'figure-img')
  }));
});
FigureImage.displayName = 'FigureImage';
FigureImage.propTypes = __WEBPACK_IMPORTED_MODULE_4__Image__["b" /* propTypes */];
FigureImage.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (FigureImage);

/***/ }),
/* 243 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormCheck__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__FormFile__ = __webpack_require__(138);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__FormControl__ = __webpack_require__(137);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__FormGroup__ = __webpack_require__(139);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__FormLabel__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__FormText__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__Switch__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__createWithBsPrefix__ = __webpack_require__(7);


var _excluded = ["bsPrefix", "inline", "className", "validated", "as"];











var FormRow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__createWithBsPrefix__["a" /* default */])('form-row');
var defaultProps = {
  inline: false
};
var FormImpl = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      inline = _ref.inline,
      className = _ref.className,
      validated = _ref.validated,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'form' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'form');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, validated && 'was-validated', inline && bsPrefix + "-inline")
  }));
});
FormImpl.displayName = 'Form';
FormImpl.defaultProps = defaultProps;
FormImpl.Row = FormRow;
FormImpl.Group = __WEBPACK_IMPORTED_MODULE_7__FormGroup__["a" /* default */];
FormImpl.Control = __WEBPACK_IMPORTED_MODULE_6__FormControl__["a" /* default */];
FormImpl.Check = __WEBPACK_IMPORTED_MODULE_4__FormCheck__["a" /* default */];
FormImpl.File = __WEBPACK_IMPORTED_MODULE_5__FormFile__["a" /* default */];
FormImpl.Switch = __WEBPACK_IMPORTED_MODULE_10__Switch__["a" /* default */];
FormImpl.Label = __WEBPACK_IMPORTED_MODULE_8__FormLabel__["a" /* default */];
FormImpl.Text = __WEBPACK_IMPORTED_MODULE_9__FormText__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (FormImpl);

/***/ }),
/* 244 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormContext__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["id", "bsPrefix", "bsCustomPrefix", "className", "type", "isValid", "isInvalid", "isStatic", "as"];




var FormCheckInput = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      _ref$type = _ref.type,
      type = _ref$type === void 0 ? 'checkbox' : _ref$type,
      _ref$isValid = _ref.isValid,
      isValid = _ref$isValid === void 0 ? false : _ref$isValid,
      _ref$isInvalid = _ref.isInvalid,
      isInvalid = _ref$isInvalid === void 0 ? false : _ref$isInvalid,
      isStatic = _ref.isStatic,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var _useContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_4__FormContext__["a" /* default */]),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control-input'] : [bsPrefix, 'form-check-input'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    type: type,
    id: id || controlId,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid', isStatic && 'position-static')
  }));
});
FormCheckInput.displayName = 'FormCheckInput';
/* harmony default export */ __webpack_exports__["a"] = (FormCheckInput);

/***/ }),
/* 245 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormContext__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"];




var FormCheckLabel = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var _useContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_4__FormContext__["a" /* default */]),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-control-label'] : [bsPrefix, 'form-check-label'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix)
  }));
});
FormCheckLabel.displayName = 'FormCheckLabel';
/* harmony default export */ __webpack_exports__["a"] = (FormCheckLabel);

/***/ }),
/* 246 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormContext__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["id", "bsPrefix", "bsCustomPrefix", "className", "isValid", "isInvalid", "lang", "as"];




var FormFileInput = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      isValid = _ref.isValid,
      isInvalid = _ref.isInvalid,
      lang = _ref.lang,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'input' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var _useContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_4__FormContext__["a" /* default */]),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var type = 'file';

  var _ref2 = custom ? [bsCustomPrefix, 'custom-file-input'] : [bsPrefix, 'form-control-file'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    id: id || controlId,
    type: type,
    lang: lang,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, isValid && 'is-valid', isInvalid && 'is-invalid')
  }));
});
FormFileInput.displayName = 'FormFileInput';
/* harmony default export */ __webpack_exports__["a"] = (FormFileInput);

/***/ }),
/* 247 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__FormContext__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "bsCustomPrefix", "className", "htmlFor"];




var FormFileLabel = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      bsCustomPrefix = _ref.bsCustomPrefix,
      className = _ref.className,
      htmlFor = _ref.htmlFor,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var _useContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_4__FormContext__["a" /* default */]),
      controlId = _useContext.controlId,
      custom = _useContext.custom;

  var _ref2 = custom ? [bsCustomPrefix, 'custom-file-label'] : [bsPrefix, 'form-file-label'],
      prefix = _ref2[0],
      defaultPrefix = _ref2[1];

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(prefix, defaultPrefix);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("label", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    htmlFor: htmlFor || controlId,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix),
    "data-browse": props['data-browse']
  }));
});
FormFileLabel.displayName = 'FormFileLabel';
/* harmony default export */ __webpack_exports__["a"] = (FormFileLabel);

/***/ }),
/* 248 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createWithBsPrefix__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "size", "hasValidation", "className", "as"];




var InputGroupAppend = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__createWithBsPrefix__["a" /* default */])('input-group-append');
var InputGroupPrepend = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__createWithBsPrefix__["a" /* default */])('input-group-prepend');
var InputGroupText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__createWithBsPrefix__["a" /* default */])('input-group-text', {
  Component: 'span'
});

var InputGroupCheckbox = function InputGroupCheckbox(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(InputGroupText, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("input", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({
    type: "checkbox"
  }, props)));
};

var InputGroupRadio = function InputGroupRadio(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(InputGroupText, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("input", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({
    type: "radio"
  }, props)));
};

/**
 *
 * @property {InputGroupAppend} Append
 * @property {InputGroupPrepend} Prepend
 * @property {InputGroupText} Text
 * @property {InputGroupRadio} Radio
 * @property {InputGroupCheckbox} Checkbox
 */
var InputGroup = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      hasValidation = _ref.hasValidation,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'input-group');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, size && bsPrefix + "-" + size, hasValidation && 'has-validation')
  }));
});
InputGroup.displayName = 'InputGroup';
InputGroup.Text = InputGroupText;
InputGroup.Radio = InputGroupRadio;
InputGroup.Checkbox = InputGroupCheckbox;
InputGroup.Append = InputGroupAppend;
InputGroup.Prepend = InputGroupPrepend;
/* harmony default export */ __webpack_exports__["a"] = (InputGroup);

/***/ }),
/* 249 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["as", "className", "fluid", "bsPrefix"];



var defaultProps = {
  fluid: false
};
var Jumbotron = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.forwardRef(function (_ref, ref) {
  var _classes;

  var _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      fluid = _ref.fluid,
      bsPrefix = _ref.bsPrefix,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'jumbotron');
  var classes = (_classes = {}, _classes[bsPrefix] = true, _classes[bsPrefix + "-fluid"] = fluid, _classes);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(className, classes)
  }));
});
Jumbotron.defaultProps = defaultProps;
Jumbotron.displayName = 'Jumbotron';
/* harmony default export */ __webpack_exports__["a"] = (Jumbotron);

/***/ }),
/* 250 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_warning__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__AbstractNav__ = __webpack_require__(127);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ListGroupItem__ = __webpack_require__(143);


var _excluded = ["className", "bsPrefix", "variant", "horizontal", "as"];







var defaultProps = {
  variant: undefined,
  horizontal: undefined
};
var ListGroup = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_uncontrollable__["a" /* useUncontrolled */])(props, {
    activeKey: 'onSelect'
  }),
      className = _useUncontrolled.className,
      initialBsPrefix = _useUncontrolled.bsPrefix,
      variant = _useUncontrolled.variant,
      horizontal = _useUncontrolled.horizontal,
      _useUncontrolled$as = _useUncontrolled.as,
      as = _useUncontrolled$as === void 0 ? 'div' : _useUncontrolled$as,
      controlledProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useUncontrolled, _excluded);

  var bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ThemeProvider__["b" /* useBootstrapPrefix */])(initialBsPrefix, 'list-group');
  var horizontalVariant;

  if (horizontal) {
    horizontalVariant = horizontal === true ? 'horizontal' : "horizontal-" + horizontal;
  } else {
    horizontalVariant = null;
  }

  process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_4_warning___default()(!(horizontal && variant === 'flush'), '`variant="flush"` and `horizontal` should not be used together.') : void 0;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__AbstractNav__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, controlledProps, {
    as: as,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, variant && bsPrefix + "-" + variant, horizontalVariant && bsPrefix + "-" + horizontalVariant)
  }));
});
ListGroup.defaultProps = defaultProps;
ListGroup.displayName = 'ListGroup';
ListGroup.Item = __WEBPACK_IMPORTED_MODULE_8__ListGroupItem__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (ListGroup);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 251 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__createWithBsPrefix__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "as"];




var MediaBody = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__createWithBsPrefix__["a" /* default */])('media-body');
var Media = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef( // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var prefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'media');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, prefix)
  }));
});
Media.displayName = 'Media';
Media.Body = MediaBody;
/* harmony default export */ __webpack_exports__["a"] = (Media);

/***/ }),
/* 252 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dom_helpers_addEventListener__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dom_helpers_canUseDOM__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_ownerDocument__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_dom_helpers_removeEventListener__ = __webpack_require__(124);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_dom_helpers_scrollbarSize__ = __webpack_require__(87);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__restart_hooks_useCallbackRef__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__restart_hooks_useWillUnmount__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_dom_helpers_transitionEnd__ = __webpack_require__(125);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_react_overlays_Modal__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_warning__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__BootstrapModalManager__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Fade__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ModalBody__ = __webpack_require__(144);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__ModalContext__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ModalDialog__ = __webpack_require__(146);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ModalFooter__ = __webpack_require__(147);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ModalHeader__ = __webpack_require__(253);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ModalTitle__ = __webpack_require__(148);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "style", "dialogClassName", "contentClassName", "children", "dialogAs", "aria-labelledby", "show", "animation", "backdrop", "keyboard", "onEscapeKeyDown", "onShow", "onHide", "container", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "onEntered", "onExit", "onExiting", "onEnter", "onEntering", "onExited", "backdropClassName", "manager"];






















var manager;
var defaultProps = {
  show: false,
  backdrop: true,
  keyboard: true,
  autoFocus: true,
  enforceFocus: true,
  restoreFocus: true,
  animation: true,
  dialogAs: __WEBPACK_IMPORTED_MODULE_19__ModalDialog__["a" /* default */]
};
/* eslint-disable no-use-before-define, react/no-multi-comp */

function DialogTransition(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__Fade__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    timeout: null
  }));
}

function BackdropTransition(props) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_16__Fade__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    timeout: null
  }));
}
/* eslint-enable no-use-before-define */


var Modal = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_12_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      style = _ref.style,
      dialogClassName = _ref.dialogClassName,
      contentClassName = _ref.contentClassName,
      children = _ref.children,
      Dialog = _ref.dialogAs,
      ariaLabelledby = _ref['aria-labelledby'],
      show = _ref.show,
      animation = _ref.animation,
      backdrop = _ref.backdrop,
      keyboard = _ref.keyboard,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      onShow = _ref.onShow,
      onHide = _ref.onHide,
      container = _ref.container,
      autoFocus = _ref.autoFocus,
      enforceFocus = _ref.enforceFocus,
      restoreFocus = _ref.restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      onEntered = _ref.onEntered,
      onExit = _ref.onExit,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onExited = _ref.onExited,
      backdropClassName = _ref.backdropClassName,
      propsManager = _ref.manager,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react__["useState"])({}),
      modalStyle = _useState[0],
      setStyle = _useState[1];

  var _useState2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react__["useState"])(false),
      animateStaticModal = _useState2[0],
      setAnimateStaticModal = _useState2[1];

  var waitingForMouseUpRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react__["useRef"])(false);
  var ignoreBackdropClickRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react__["useRef"])(false);
  var removeStaticModalAnimationRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react__["useRef"])(null); // TODO: what's this type

  var _useCallbackRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__restart_hooks_useCallbackRef__["a" /* default */])(),
      modal = _useCallbackRef[0],
      setModalRef = _useCallbackRef[1];

  var handleHide = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__restart_hooks_useEventCallback__["a" /* default */])(onHide);
  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_23__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'modal');
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react__["useImperativeHandle"])(ref, function () {
    return {
      get _modal() {
        process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_14_warning___default()(false, 'Accessing `_modal` is not supported and will be removed in a future release') : void 0;
        return modal;
      }

    };
  }, [modal]);
  var modalContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react__["useMemo"])(function () {
    return {
      onHide: handleHide
    };
  }, [handleHide]);

  function getModalManager() {
    if (propsManager) return propsManager;
    if (!manager) manager = new __WEBPACK_IMPORTED_MODULE_15__BootstrapModalManager__["a" /* default */]();
    return manager;
  }

  function updateDialogStyle(node) {
    if (!__WEBPACK_IMPORTED_MODULE_4_dom_helpers_canUseDOM__["a" /* default */]) return;
    var containerIsOverflowing = getModalManager().isContainerOverflowing(modal);
    var modalIsOverflowing = node.scrollHeight > __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_ownerDocument__["a" /* default */])(node).documentElement.clientHeight;
    setStyle({
      paddingRight: containerIsOverflowing && !modalIsOverflowing ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_dom_helpers_scrollbarSize__["a" /* default */])() : undefined,
      paddingLeft: !containerIsOverflowing && modalIsOverflowing ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_dom_helpers_scrollbarSize__["a" /* default */])() : undefined
    });
  }

  var handleWindowResize = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__restart_hooks_useEventCallback__["a" /* default */])(function () {
    if (modal) {
      updateDialogStyle(modal.dialog);
    }
  });
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__restart_hooks_useWillUnmount__["a" /* default */])(function () {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_dom_helpers_removeEventListener__["a" /* default */])(window, 'resize', handleWindowResize);

    if (removeStaticModalAnimationRef.current) {
      removeStaticModalAnimationRef.current();
    }
  }); // We prevent the modal from closing during a drag by detecting where the
  // the click originates from. If it starts in the modal and then ends outside
  // don't close.

  var handleDialogMouseDown = function handleDialogMouseDown() {
    waitingForMouseUpRef.current = true;
  };

  var handleMouseUp = function handleMouseUp(e) {
    if (waitingForMouseUpRef.current && modal && e.target === modal.dialog) {
      ignoreBackdropClickRef.current = true;
    }

    waitingForMouseUpRef.current = false;
  };

  var handleStaticModalAnimation = function handleStaticModalAnimation() {
    setAnimateStaticModal(true);
    removeStaticModalAnimationRef.current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11_dom_helpers_transitionEnd__["a" /* default */])(modal.dialog, function () {
      setAnimateStaticModal(false);
    });
  };

  var handleStaticBackdropClick = function handleStaticBackdropClick(e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    handleStaticModalAnimation();
  };

  var handleClick = function handleClick(e) {
    if (backdrop === 'static') {
      handleStaticBackdropClick(e);
      return;
    }

    if (ignoreBackdropClickRef.current || e.target !== e.currentTarget) {
      ignoreBackdropClickRef.current = false;
      return;
    }

    onHide == null ? void 0 : onHide();
  };

  var handleEscapeKeyDown = function handleEscapeKeyDown(e) {
    if (!keyboard && backdrop === 'static') {
      // Call preventDefault to stop modal from closing in react-overlays,
      // then play our animation.
      e.preventDefault();
      handleStaticModalAnimation();
    } else if (keyboard && onEscapeKeyDown) {
      onEscapeKeyDown(e);
    }
  };

  var handleEnter = function handleEnter(node, isAppearing) {
    if (node) {
      node.style.display = 'block';
      updateDialogStyle(node);
    }

    onEnter == null ? void 0 : onEnter(node, isAppearing);
  };

  var handleExit = function handleExit(node) {
    removeStaticModalAnimationRef.current == null ? void 0 : removeStaticModalAnimationRef.current();
    onExit == null ? void 0 : onExit(node);
  };

  var handleEntering = function handleEntering(node, isAppearing) {
    onEntering == null ? void 0 : onEntering(node, isAppearing); // FIXME: This should work even when animation is disabled.

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_dom_helpers_addEventListener__["a" /* default */])(window, 'resize', handleWindowResize);
  };

  var handleExited = function handleExited(node) {
    if (node) node.style.display = ''; // RHL removes it sometimes

    onExited == null ? void 0 : onExited(node); // FIXME: This should work even when animation is disabled.

    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_dom_helpers_removeEventListener__["a" /* default */])(window, 'resize', handleWindowResize);
  };

  var renderBackdrop = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12_react__["useCallback"])(function (backdropProps) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, backdropProps, {
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(bsPrefix + "-backdrop", backdropClassName, !animation && 'show')
    }));
  }, [animation, backdropClassName, bsPrefix]);

  var baseModalStyle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, style, modalStyle); // Sets `display` always block when `animation` is false


  if (!animation) {
    baseModalStyle.display = 'block';
  }

  var renderDialog = function renderDialog(dialogProps) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({
      role: "dialog"
    }, dialogProps, {
      style: baseModalStyle,
      className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, animateStaticModal && bsPrefix + "-static"),
      onClick: backdrop ? handleClick : undefined,
      onMouseUp: handleMouseUp,
      "aria-labelledby": ariaLabelledby
    }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(Dialog, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
      onMouseDown: handleDialogMouseDown,
      className: dialogClassName,
      contentClassName: contentClassName
    }), children));
  };

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_18__ModalContext__["a" /* default */].Provider, {
    value: modalContext
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_12_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_13_react_overlays_Modal__["a" /* default */], {
    show: show,
    ref: setModalRef,
    backdrop: backdrop,
    container: container,
    keyboard: true // Always set true - see handleEscapeKeyDown
    ,
    autoFocus: autoFocus,
    enforceFocus: enforceFocus,
    restoreFocus: restoreFocus,
    restoreFocusOptions: restoreFocusOptions,
    onEscapeKeyDown: handleEscapeKeyDown,
    onShow: onShow,
    onHide: onHide,
    onEnter: handleEnter,
    onEntering: handleEntering,
    onEntered: onEntered,
    onExit: handleExit,
    onExiting: onExiting,
    onExited: handleExited,
    manager: getModalManager(),
    containerClassName: bsPrefix + "-open",
    transition: animation ? DialogTransition : undefined,
    backdropTransition: animation ? BackdropTransition : undefined,
    renderBackdrop: renderBackdrop,
    renderDialog: renderDialog
  }));
});
Modal.displayName = 'Modal';
Modal.defaultProps = defaultProps;
Modal.Body = __WEBPACK_IMPORTED_MODULE_17__ModalBody__["a" /* default */];
Modal.Header = __WEBPACK_IMPORTED_MODULE_21__ModalHeader__["a" /* default */];
Modal.Title = __WEBPACK_IMPORTED_MODULE_22__ModalTitle__["a" /* default */];
Modal.Footer = __WEBPACK_IMPORTED_MODULE_20__ModalFooter__["a" /* default */];
Modal.Dialog = __WEBPACK_IMPORTED_MODULE_19__ModalDialog__["a" /* default */];
Modal.TRANSITION_DURATION = 300;
Modal.BACKDROP_TRANSITION_DURATION = 150;
/* harmony default export */ __webpack_exports__["a"] = (Modal);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 253 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__CloseButton__ = __webpack_require__(50);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ModalContext__ = __webpack_require__(145);


var _excluded = ["bsPrefix", "closeLabel", "closeButton", "onHide", "className", "children"];






var defaultProps = {
  closeLabel: 'Close',
  closeButton: false
};
var ModalHeader = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      closeLabel = _ref.closeLabel,
      closeButton = _ref.closeButton,
      onHide = _ref.onHide,
      className = _ref.className,
      children = _ref.children,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'modal-header');
  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_7__ModalContext__["a" /* default */]);
  var handleClick = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__["a" /* default */])(function () {
    if (context) context.onHide();
    if (onHide) onHide();
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix)
  }), children, closeButton && /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__CloseButton__["a" /* default */], {
    label: closeLabel,
    onClick: handleClick
  }));
});
ModalHeader.displayName = 'ModalHeader';
ModalHeader.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ModalHeader);

/***/ }),
/* 254 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Dropdown__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NavLink__ = __webpack_require__(53);


var _excluded = ["id", "title", "children", "bsPrefix", "className", "rootCloseEvent", "menuRole", "disabled", "active", "renderMenuOnMount"];





var NavDropdown = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      title = _ref.title,
      children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      rootCloseEvent = _ref.rootCloseEvent,
      menuRole = _ref.menuRole,
      disabled = _ref.disabled,
      active = _ref.active,
      renderMenuOnMount = _ref.renderMenuOnMount,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  /* NavItem has no additional logic, it's purely presentational. Can set nav item class here to support "as" */
  var navItemPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(undefined, 'nav-item');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, navItemPrefix)
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].Toggle, {
    id: id,
    eventKey: null,
    active: active,
    disabled: disabled,
    childBsPrefix: bsPrefix,
    as: __WEBPACK_IMPORTED_MODULE_6__NavLink__["a" /* default */]
  }, title), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].Menu, {
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});
NavDropdown.displayName = 'NavDropdown';
NavDropdown.Item = __WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].Item;
NavDropdown.ItemText = __WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].ItemText;
NavDropdown.Divider = __WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].Divider;
NavDropdown.Header = __WEBPACK_IMPORTED_MODULE_5__Dropdown__["a" /* default */].Header;
/* harmony default export */ __webpack_exports__["a"] = (NavDropdown);

/***/ }),
/* 255 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NavbarBrand__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NavbarCollapse__ = __webpack_require__(256);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__NavbarToggle__ = __webpack_require__(257);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__NavbarContext__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__SelectableContext__ = __webpack_require__(13);


var _excluded = ["bsPrefix", "expand", "variant", "bg", "fixed", "sticky", "className", "children", "as", "expanded", "onToggle", "onSelect", "collapseOnSelect"];










var NavbarText = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createWithBsPrefix__["a" /* default */])('navbar-text', {
  Component: 'span'
});
var defaultProps = {
  expand: true,
  variant: 'light',
  collapseOnSelect: false
};
var Navbar = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_uncontrollable__["a" /* useUncontrolled */])(props, {
    expanded: 'onToggle'
  }),
      initialBsPrefix = _useUncontrolled.bsPrefix,
      expand = _useUncontrolled.expand,
      variant = _useUncontrolled.variant,
      bg = _useUncontrolled.bg,
      fixed = _useUncontrolled.fixed,
      sticky = _useUncontrolled.sticky,
      className = _useUncontrolled.className,
      children = _useUncontrolled.children,
      _useUncontrolled$as = _useUncontrolled.as,
      Component = _useUncontrolled$as === void 0 ? 'nav' : _useUncontrolled$as,
      expanded = _useUncontrolled.expanded,
      _onToggle = _useUncontrolled.onToggle,
      onSelect = _useUncontrolled.onSelect,
      collapseOnSelect = _useUncontrolled.collapseOnSelect,
      controlledProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useUncontrolled, _excluded);

  var bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__ThemeProvider__["b" /* useBootstrapPrefix */])(initialBsPrefix, 'navbar');
  var handleCollapse = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(function () {
    if (onSelect) onSelect.apply(void 0, arguments);

    if (collapseOnSelect && expanded) {
      if (_onToggle) {
        _onToggle(false);
      }
    }
  }, [onSelect, collapseOnSelect, expanded, _onToggle]); // will result in some false positives but that seems better
  // than false negatives. strict `undefined` check allows explicit
  // "nulling" of the role if the user really doesn't want one

  if (controlledProps.role === undefined && Component !== 'nav') {
    controlledProps.role = 'navigation';
  }

  var expandClass = bsPrefix + "-expand";
  if (typeof expand === 'string') expandClass = expandClass + "-" + expand;
  var navbarContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
    return {
      onToggle: function onToggle() {
        return _onToggle && _onToggle(!expanded);
      },
      bsPrefix: bsPrefix,
      expanded: !!expanded
    };
  }, [bsPrefix, expanded, _onToggle]);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__NavbarContext__["a" /* default */].Provider, {
    value: navbarContext
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_11__SelectableContext__["b" /* default */].Provider, {
    value: handleCollapse
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, controlledProps, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, expand && expandClass, variant && bsPrefix + "-" + variant, bg && "bg-" + bg, sticky && "sticky-" + sticky, fixed && "fixed-" + fixed)
  }), children)));
});
Navbar.defaultProps = defaultProps;
Navbar.displayName = 'Navbar';
Navbar.Brand = __WEBPACK_IMPORTED_MODULE_6__NavbarBrand__["a" /* default */];
Navbar.Toggle = __WEBPACK_IMPORTED_MODULE_8__NavbarToggle__["a" /* default */];
Navbar.Collapse = __WEBPACK_IMPORTED_MODULE_7__NavbarCollapse__["a" /* default */];
Navbar.Text = NavbarText;
/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),
/* 256 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__Collapse__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__NavbarContext__ = __webpack_require__(42);


var _excluded = ["children", "bsPrefix"];




var NavbarCollapse = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.forwardRef(function (_ref, ref) {
  var children = _ref.children,
      bsPrefix = _ref.bsPrefix,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'navbar-collapse');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__NavbarContext__["a" /* default */].Consumer, null, function (context) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_3__Collapse__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
      in: !!(context && context.expanded)
    }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", {
      ref: ref,
      className: bsPrefix
    }, children));
  });
});
NavbarCollapse.displayName = 'NavbarCollapse';
/* harmony default export */ __webpack_exports__["a"] = (NavbarCollapse);

/***/ }),
/* 257 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NavbarContext__ = __webpack_require__(42);


var _excluded = ["bsPrefix", "className", "children", "label", "as", "onClick"];





var defaultProps = {
  label: 'Toggle navigation'
};
var NavbarToggle = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'button' : _ref$as,
      onClick = _ref.onClick,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'navbar-toggler');

  var _ref2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useContext"])(__WEBPACK_IMPORTED_MODULE_6__NavbarContext__["a" /* default */]) || {},
      onToggle = _ref2.onToggle,
      expanded = _ref2.expanded;

  var handleClick = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__restart_hooks_useEventCallback__["a" /* default */])(function (e) {
    if (onClick) onClick(e);
    if (onToggle) onToggle();
  });

  if (Component === 'button') {
    props.type = 'button';
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    onClick: handleClick,
    "aria-label": label,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, !expanded && 'collapsed')
  }), children || /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
    className: bsPrefix + "-icon"
  }));
});
NavbarToggle.displayName = 'NavbarToggle';
NavbarToggle.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (NavbarToggle);

/***/ }),
/* 258 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dom_helpers_contains__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restart_hooks_useTimeout__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_react_overlays_safeFindDOMNode__ = __webpack_require__(107);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_warning__ = __webpack_require__(20);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_warning___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_warning__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__Overlay__ = __webpack_require__(151);



var _excluded = ["trigger", "overlay", "children", "popperConfig", "show", "defaultShow", "onToggle", "delay", "placement", "flip"];








var RefHolder = /*#__PURE__*/function (_React$Component) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(RefHolder, _React$Component);

  function RefHolder() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = RefHolder.prototype;

  _proto.render = function render() {
    return this.props.children;
  };

  return RefHolder;
}(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Component);

function normalizeDelay(delay) {
  return delay && typeof delay === 'object' ? delay : {
    show: delay,
    hide: delay
  };
} // Simple implementation of mouseEnter and mouseLeave.
// React's built version is broken: https://github.com/facebook/react/issues/4251
// for cases when the trigger is disabled and mouseOut/Over can cause flicker
// moving from one child element to another.


function handleMouseOverOut( // eslint-disable-next-line @typescript-eslint/no-shadow
handler, args, relatedNative) {
  var e = args[0];
  var target = e.currentTarget;
  var related = e.relatedTarget || e.nativeEvent[relatedNative];

  if ((!related || related !== target) && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_dom_helpers_contains__["a" /* default */])(target, related)) {
    handler.apply(void 0, args);
  }
}

var defaultProps = {
  defaultShow: false,
  trigger: ['hover', 'focus']
};

function OverlayTrigger(_ref) {
  var trigger = _ref.trigger,
      overlay = _ref.overlay,
      children = _ref.children,
      _ref$popperConfig = _ref.popperConfig,
      popperConfig = _ref$popperConfig === void 0 ? {} : _ref$popperConfig,
      propsShow = _ref.show,
      _ref$defaultShow = _ref.defaultShow,
      defaultShow = _ref$defaultShow === void 0 ? false : _ref$defaultShow,
      onToggle = _ref.onToggle,
      propsDelay = _ref.delay,
      placement = _ref.placement,
      _ref$flip = _ref.flip,
      flip = _ref$flip === void 0 ? placement && placement.indexOf('auto') !== -1 : _ref$flip,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var triggerNodeRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useRef"])(null);
  var timeout = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__restart_hooks_useTimeout__["a" /* default */])();
  var hoverStateRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useRef"])('');

  var _useUncontrolledProp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8_uncontrollable__["b" /* useUncontrolledProp */])(propsShow, defaultShow, onToggle),
      show = _useUncontrolledProp[0],
      setShow = _useUncontrolledProp[1];

  var delay = normalizeDelay(propsDelay);

  var _ref2 = typeof children !== 'function' ? __WEBPACK_IMPORTED_MODULE_4_react___default.a.Children.only(children).props : {},
      onFocus = _ref2.onFocus,
      onBlur = _ref2.onBlur,
      onClick = _ref2.onClick;

  var getTarget = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useCallback"])(function () {
    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6_react_overlays_safeFindDOMNode__["a" /* default */])(triggerNodeRef.current);
  }, []);
  var handleShow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useCallback"])(function () {
    timeout.clear();
    hoverStateRef.current = 'show';

    if (!delay.show) {
      setShow(true);
      return;
    }

    timeout.set(function () {
      if (hoverStateRef.current === 'show') setShow(true);
    }, delay.show);
  }, [delay.show, setShow, timeout]);
  var handleHide = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useCallback"])(function () {
    timeout.clear();
    hoverStateRef.current = 'hide';

    if (!delay.hide) {
      setShow(false);
      return;
    }

    timeout.set(function () {
      if (hoverStateRef.current === 'hide') setShow(false);
    }, delay.hide);
  }, [delay.hide, setShow, timeout]);
  var handleFocus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useCallback"])(function () {
    handleShow();

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    onFocus == null ? void 0 : onFocus.apply(void 0, args);
  }, [handleShow, onFocus]);
  var handleBlur = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useCallback"])(function () {
    handleHide();

    for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
      args[_key2] = arguments[_key2];
    }

    onBlur == null ? void 0 : onBlur.apply(void 0, args);
  }, [handleHide, onBlur]);
  var handleClick = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useCallback"])(function () {
    setShow(!show);
    if (onClick) onClick.apply(void 0, arguments);
  }, [onClick, setShow, show]);
  var handleMouseOver = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useCallback"])(function () {
    for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
      args[_key3] = arguments[_key3];
    }

    handleMouseOverOut(handleShow, args, 'fromElement');
  }, [handleShow]);
  var handleMouseOut = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["useCallback"])(function () {
    for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
      args[_key4] = arguments[_key4];
    }

    handleMouseOverOut(handleHide, args, 'toElement');
  }, [handleHide]);
  var triggers = trigger == null ? [] : [].concat(trigger);
  var triggerProps = {};

  if (triggers.indexOf('click') !== -1) {
    triggerProps.onClick = handleClick;
  }

  if (triggers.indexOf('focus') !== -1) {
    triggerProps.onFocus = handleFocus;
    triggerProps.onBlur = handleBlur;
  }

  if (triggers.indexOf('hover') !== -1) {
    process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_7_warning___default()(triggers.length > 1, '[react-bootstrap] Specifying only the `"hover"` trigger limits the visibility of the overlay to just mouse users. Consider also including the `"focus"` trigger so that touch and keyboard only users can see the overlay as well.') : void 0;
    triggerProps.onMouseOver = handleMouseOver;
    triggerProps.onMouseOut = handleMouseOut;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4_react___default.a.Fragment, null, typeof children === 'function' ? children(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, triggerProps, {
    ref: triggerNodeRef
  })) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(RefHolder, {
    ref: triggerNodeRef
  }, /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react__["cloneElement"])(children, triggerProps)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__Overlay__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    show: show,
    onHide: handleHide,
    flip: flip,
    placement: placement,
    popperConfig: popperConfig,
    target: getTarget
  }), overlay));
}

OverlayTrigger.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (OverlayTrigger);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 259 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__PageItem__ = __webpack_require__(152);


var _excluded = ["bsPrefix", "className", "children", "size"];





/**
 * @property {PageItem} Item
 * @property {PageItem} First
 * @property {PageItem} Prev
 * @property {PageItem} Ellipsis
 * @property {PageItem} Next
 * @property {PageItem} Last
 */
var Pagination = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      size = _ref.size,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var decoratedBsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'pagination');
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("ul", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, decoratedBsPrefix, size && decoratedBsPrefix + "-" + size)
  }), children);
});
Pagination.First = __WEBPACK_IMPORTED_MODULE_5__PageItem__["b" /* First */];
Pagination.Prev = __WEBPACK_IMPORTED_MODULE_5__PageItem__["c" /* Prev */];
Pagination.Ellipsis = __WEBPACK_IMPORTED_MODULE_5__PageItem__["d" /* Ellipsis */];
Pagination.Item = __WEBPACK_IMPORTED_MODULE_5__PageItem__["a" /* default */];
Pagination.Next = __WEBPACK_IMPORTED_MODULE_5__PageItem__["e" /* Next */];
Pagination.Last = __WEBPACK_IMPORTED_MODULE_5__PageItem__["f" /* Last */];
/* harmony default export */ __webpack_exports__["a"] = (Pagination);

/***/ }),
/* 260 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types_extra_lib_isRequiredForA11y__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types_extra_lib_isRequiredForA11y___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types_extra_lib_isRequiredForA11y__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__PopoverTitle__ = __webpack_require__(154);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__PopoverContent__ = __webpack_require__(153);


var _excluded = ["bsPrefix", "placement", "className", "style", "children", "content", "arrowProps", "popper", "show"];






var defaultProps = {
  placement: 'right'
};
var Popover = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      content = _ref.content,
      arrowProps = _ref.arrowProps,
      _ = _ref.popper,
      _1 = _ref.show,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var decoratedBsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'popover');

  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],
      primaryPlacement = _ref2[0];

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    role: "tooltip",
    style: style,
    "x-placement": primaryPlacement,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, decoratedBsPrefix, primaryPlacement && "bs-popover-" + primaryPlacement)
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    className: "arrow"
  }, arrowProps)), content ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__PopoverContent__["a" /* default */], null, children) : children);
});
Popover.defaultProps = defaultProps;
Popover.Title = __WEBPACK_IMPORTED_MODULE_6__PopoverTitle__["a" /* default */];
Popover.Content = __WEBPACK_IMPORTED_MODULE_7__PopoverContent__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Popover);

/***/ }),
/* 261 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ElementChildren__ = __webpack_require__(52);


var _excluded = ["min", "now", "max", "label", "srOnly", "striped", "animated", "className", "style", "variant", "bsPrefix"],
    _excluded2 = ["isChild"],
    _excluded3 = ["min", "now", "max", "label", "srOnly", "striped", "animated", "bsPrefix", "variant", "className", "children"];




var ROUND_PRECISION = 1000;
/**
 * Validate that children, if any, are instances of `<ProgressBar>`.
 */

function onlyProgressBar(props, propName, componentName) {
  var children = props[propName];

  if (!children) {
    return null;
  }

  var error = null;
  __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.forEach(children, function (child) {
    if (error) {
      return;
    }
    /**
     * Compare types in a way that works with libraries that patch and proxy
     * components like react-hot-loader.
     *
     * see https://github.com/gaearon/react-hot-loader#checking-element-types
     */
    // eslint-disable-next-line @typescript-eslint/no-use-before-define


    var element = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(ProgressBar, null);
    if (child.type === element.type) return;
    var childType = child.type;
    var childIdentifier = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.isValidElement(child) ? childType.displayName || childType.name || childType : child;
    error = new Error("Children of " + componentName + " can contain only ProgressBar " + ("components. Found " + childIdentifier + "."));
  });
  return error;
}

var defaultProps = {
  min: 0,
  max: 100,
  animated: false,
  isChild: false,
  srOnly: false,
  striped: false
};

function getPercentage(now, min, max) {
  var percentage = (now - min) / (max - min) * 100;
  return Math.round(percentage * ROUND_PRECISION) / ROUND_PRECISION;
}

function renderProgressBar(_ref, ref) {
  var _classNames;

  var min = _ref.min,
      now = _ref.now,
      max = _ref.max,
      label = _ref.label,
      srOnly = _ref.srOnly,
      striped = _ref.striped,
      animated = _ref.animated,
      className = _ref.className,
      style = _ref.style,
      variant = _ref.variant,
      bsPrefix = _ref.bsPrefix,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    role: "progressbar",
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix + "-bar", (_classNames = {}, _classNames["bg-" + variant] = variant, _classNames[bsPrefix + "-bar-animated"] = animated, _classNames[bsPrefix + "-bar-striped"] = animated || striped, _classNames)),
    style: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
      width: getPercentage(now, min, max) + "%"
    }, style),
    "aria-valuenow": now,
    "aria-valuemin": min,
    "aria-valuemax": max
  }), srOnly ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("span", {
    className: "sr-only"
  }, label) : label);
}

var ProgressBar = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref2, ref) {
  var isChild = _ref2.isChild,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref2, _excluded2);

  props.bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(props.bsPrefix, 'progress');

  if (isChild) {
    return renderProgressBar(props, ref);
  }

  var min = props.min,
      now = props.now,
      max = props.max,
      label = props.label,
      srOnly = props.srOnly,
      striped = props.striped,
      animated = props.animated,
      bsPrefix = props.bsPrefix,
      variant = props.variant,
      className = props.className,
      children = props.children,
      wrapperProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(props, _excluded3);

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, wrapperProps, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix)
  }), children ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ElementChildren__["a" /* map */])(children, function (child) {
    return /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["cloneElement"])(child, {
      isChild: true
    });
  }) : renderProgressBar({
    min: min,
    now: now,
    max: max,
    label: label,
    srOnly: srOnly,
    striped: striped,
    animated: animated,
    bsPrefix: bsPrefix,
    variant: variant
  }, ref));
});
ProgressBar.displayName = 'ProgressBar';
ProgressBar.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ProgressBar);

/***/ }),
/* 262 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "children", "aspectRatio"];



var defaultProps = {
  aspectRatio: '1by1'
};
var ResponsiveEmbed = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      aspectRatio = _ref.aspectRatio,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var decoratedBsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'embed-responsive');
  var child = __WEBPACK_IMPORTED_MODULE_3_react___default.a.Children.only(children);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(decoratedBsPrefix, className, aspectRatio && decoratedBsPrefix + "-" + aspectRatio)
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.cloneElement(child, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(child.props.className, decoratedBsPrefix + "-item")
  }));
});
ResponsiveEmbed.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (ResponsiveEmbed);

/***/ }),
/* 263 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "noGutters", "as"];



var DEVICE_SIZES = ['xl', 'lg', 'md', 'sm', 'xs'];
var defaultProps = {
  noGutters: false
};
var Row = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      noGutters = _ref.noGutters,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var decoratedBsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'row');
  var sizePrefix = decoratedBsPrefix + "-cols";
  var classes = [];
  DEVICE_SIZES.forEach(function (brkPoint) {
    var propValue = props[brkPoint];
    delete props[brkPoint];
    var cols;

    if (propValue != null && typeof propValue === 'object') {
      cols = propValue.cols;
    } else {
      cols = propValue;
    }

    var infix = brkPoint !== 'xs' ? "-" + brkPoint : '';
    if (cols != null) classes.push("" + sizePrefix + infix + "-" + cols);
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default.a.apply(void 0, [className, decoratedBsPrefix, noGutters && 'no-gutters'].concat(classes))
  }));
});
Row.displayName = 'Row';
Row.defaultProps = defaultProps;
/* harmony default export */ __webpack_exports__["a"] = (Row);

/***/ }),
/* 264 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "variant", "animation", "size", "children", "as", "className"];



var Spinner = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      variant = _ref.variant,
      animation = _ref.animation,
      size = _ref.size,
      children = _ref.children,
      _ref$as = _ref.as,
      Component = _ref$as === void 0 ? 'div' : _ref$as,
      className = _ref.className,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'spinner');
  var bsSpinnerPrefix = bsPrefix + "-" + animation;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsSpinnerPrefix, size && bsSpinnerPrefix + "-" + size, variant && "text-" + variant)
  }), children);
});
Spinner.displayName = 'Spinner';
/* harmony default export */ __webpack_exports__["a"] = (Spinner);

/***/ }),
/* 265 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Button__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ButtonGroup__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Dropdown__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__DropdownMenu__ = __webpack_require__(93);


var _excluded = ["id", "bsPrefix", "size", "variant", "title", "type", "toggleLabel", "children", "onClick", "href", "target", "menuAlign", "menuRole", "renderMenuOnMount", "rootCloseEvent"];






var propTypes = {
  /**
   * An html id attribute for the Toggle button, necessary for assistive technologies, such as screen readers.
   * @type {string|number}
   * @required
   */
  id: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.any,

  /**
   * Accessible label for the toggle; the value of `title` if not specified.
   */
  toggleLabel: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** An `href` passed to the non-toggle Button */
  href: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** An anchor `target` passed to the non-toggle Button */
  target: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** An `onClick` handler passed to the non-toggle Button */
  onClick: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.func,

  /** The content of the non-toggle Button.  */
  title: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.node.isRequired,

  /** A `type` passed to the non-toggle Button */
  type: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Disables both Buttons  */
  disabled: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /**
   * Aligns the dropdown menu responsively.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   *
   * @type {"left"|"right"|{ sm: "left"|"right" }|{ md: "left"|"right" }|{ lg: "left"|"right" }|{ xl: "left"|"right"} }
   */
  menuAlign: __WEBPACK_IMPORTED_MODULE_7__DropdownMenu__["a" /* alignPropType */],

  /** An ARIA accessible role applied to the Menu component. When set to 'menu', The dropdown */
  menuRole: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** Whether to render the dropdown menu in the DOM before the first time it is shown */
  renderMenuOnMount: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.bool,

  /**
   *  Which event when fired outside the component will cause it to be closed.
   *
   * _see [DropdownMenu](#dropdown-menu-props) for more details_
   */
  rootCloseEvent: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** @ignore */
  bsPrefix: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** @ignore */
  variant: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string,

  /** @ignore */
  size: __WEBPACK_IMPORTED_MODULE_3_prop_types___default.a.string
};
var defaultProps = {
  toggleLabel: 'Toggle dropdown',
  type: 'button'
};
/**
 * A convenience component for simple or general use split button dropdowns. Renders a
 * `ButtonGroup` containing a `Button` and a `Button` toggle for the `Dropdown`. All `children`
 * are passed directly to the default `Dropdown.Menu`. This component accepts all of [`Dropdown`'s
 * props](#dropdown-props).
 *
 * _All unknown props are passed through to the `Dropdown` component._
 * The Button `variant`, `size` and `bsPrefix` props are passed to the button and toggle,
 * and menu-related props are passed to the `Dropdown.Menu`
 */

var SplitButton = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.forwardRef(function (_ref, ref) {
  var id = _ref.id,
      bsPrefix = _ref.bsPrefix,
      size = _ref.size,
      variant = _ref.variant,
      title = _ref.title,
      type = _ref.type,
      toggleLabel = _ref.toggleLabel,
      children = _ref.children,
      onClick = _ref.onClick,
      href = _ref.href,
      target = _ref.target,
      menuAlign = _ref.menuAlign,
      menuRole = _ref.menuRole,
      renderMenuOnMount = _ref.renderMenuOnMount,
      rootCloseEvent = _ref.rootCloseEvent,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref
  }, props, {
    as: __WEBPACK_IMPORTED_MODULE_5__ButtonGroup__["a" /* default */]
  }), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_4__Button__["a" /* default */], {
    size: size,
    variant: variant,
    disabled: props.disabled,
    bsPrefix: bsPrefix,
    href: href,
    target: target,
    onClick: onClick,
    type: type
  }, title), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */].Toggle, {
    split: true,
    id: id ? id.toString() : undefined,
    size: size,
    variant: variant,
    disabled: props.disabled,
    childBsPrefix: bsPrefix
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("span", {
    className: "sr-only"
  }, toggleLabel)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_6__Dropdown__["a" /* default */].Menu, {
    align: menuAlign,
    role: menuRole,
    renderOnMount: renderMenuOnMount,
    rootCloseEvent: rootCloseEvent
  }, children));
});
SplitButton.propTypes = propTypes;
SplitButton.defaultProps = defaultProps;
SplitButton.displayName = 'SplitButton';
/* harmony default export */ __webpack_exports__["a"] = (SplitButton);

/***/ }),
/* 266 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__FormCheck__ = __webpack_require__(95);



var Switch = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.forwardRef(function (props, ref) {
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_1_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__FormCheck__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    type: "switch"
  }));
});
Switch.displayName = 'Switch';
Switch.Input = __WEBPACK_IMPORTED_MODULE_2__FormCheck__["a" /* default */].Input;
Switch.Label = __WEBPACK_IMPORTED_MODULE_2__FormCheck__["a" /* default */].Label;
/* harmony default export */ __webpack_exports__["a"] = (Switch);

/***/ }),
/* 267 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__TabContainer__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__TabContent__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__TabPane__ = __webpack_require__(101);






/* eslint-disable react/require-render-return, react/no-unused-prop-types */
var Tab = /*#__PURE__*/function (_React$Component) {
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(Tab, _React$Component);

  function Tab() {
    return _React$Component.apply(this, arguments) || this;
  }

  var _proto = Tab.prototype;

  _proto.render = function render() {
    throw new Error('ReactBootstrap: The `Tab` component is not meant to be rendered! ' + "It's an abstract component that is only valid as a direct Child of the `Tabs` Component. " + 'For custom tabs components use TabPane and TabsContainer directly');
    return null;
  };

  return Tab;
}(__WEBPACK_IMPORTED_MODULE_1_react___default.a.Component);

Tab.Container = __WEBPACK_IMPORTED_MODULE_2__TabContainer__["a" /* default */];
Tab.Content = __WEBPACK_IMPORTED_MODULE_3__TabContent__["a" /* default */];
Tab.Pane = __WEBPACK_IMPORTED_MODULE_4__TabPane__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Tab);

/***/ }),
/* 268 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "className", "striped", "bordered", "borderless", "hover", "size", "variant", "responsive"];



var Table = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      striped = _ref.striped,
      bordered = _ref.bordered,
      borderless = _ref.borderless,
      hover = _ref.hover,
      size = _ref.size,
      variant = _ref.variant,
      responsive = _ref.responsive,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  var decoratedBsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'table');
  var classes = __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, decoratedBsPrefix, variant && decoratedBsPrefix + "-" + variant, size && decoratedBsPrefix + "-" + size, striped && decoratedBsPrefix + "-striped", bordered && decoratedBsPrefix + "-bordered", borderless && decoratedBsPrefix + "-borderless", hover && decoratedBsPrefix + "-hover");
  var table = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("table", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    className: classes,
    ref: ref
  }));

  if (responsive) {
    var responsiveClass = decoratedBsPrefix + "-responsive";

    if (typeof responsive === 'string') {
      responsiveClass = responsiveClass + "-" + responsive;
    }

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
      className: responsiveClass
    }, table);
  }

  return table;
});
/* harmony default export */ __webpack_exports__["a"] = (Table);

/***/ }),
/* 269 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_isRequiredForA11y__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_isRequiredForA11y___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_prop_types_extra_lib_isRequiredForA11y__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Nav__ = __webpack_require__(149);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__NavLink__ = __webpack_require__(53);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__NavItem__ = __webpack_require__(97);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__TabContainer__ = __webpack_require__(98);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__TabContent__ = __webpack_require__(99);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__TabPane__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ElementChildren__ = __webpack_require__(52);


var _excluded = ["id", "onSelect", "transition", "mountOnEnter", "unmountOnExit", "children", "activeKey"];










var defaultProps = {
  variant: 'tabs',
  mountOnEnter: false,
  unmountOnExit: false
};

function getDefaultActiveKey(children) {
  var defaultActiveKey;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__ElementChildren__["b" /* forEach */])(children, function (child) {
    if (defaultActiveKey == null) {
      defaultActiveKey = child.props.eventKey;
    }
  });
  return defaultActiveKey;
}

function renderTab(child) {
  var _child$props = child.props,
      title = _child$props.title,
      eventKey = _child$props.eventKey,
      disabled = _child$props.disabled,
      tabClassName = _child$props.tabClassName,
      id = _child$props.id;

  if (title == null) {
    return null;
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__NavItem__["a" /* default */], {
    as: __WEBPACK_IMPORTED_MODULE_6__NavLink__["a" /* default */],
    eventKey: eventKey,
    disabled: disabled,
    id: id,
    className: tabClassName
  }, title);
}

var Tabs = function Tabs(props) {
  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_uncontrollable__["a" /* useUncontrolled */])(props, {
    activeKey: 'onSelect'
  }),
      id = _useUncontrolled.id,
      onSelect = _useUncontrolled.onSelect,
      transition = _useUncontrolled.transition,
      mountOnEnter = _useUncontrolled.mountOnEnter,
      unmountOnExit = _useUncontrolled.unmountOnExit,
      children = _useUncontrolled.children,
      _useUncontrolled$acti = _useUncontrolled.activeKey,
      activeKey = _useUncontrolled$acti === void 0 ? getDefaultActiveKey(children) : _useUncontrolled$acti,
      controlledProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useUncontrolled, _excluded);

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_8__TabContainer__["a" /* default */], {
    id: id,
    activeKey: activeKey,
    onSelect: onSelect,
    transition: transition,
    mountOnEnter: mountOnEnter,
    unmountOnExit: unmountOnExit
  }, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_5__Nav__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, controlledProps, {
    role: "tablist",
    as: "nav"
  }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__ElementChildren__["a" /* map */])(children, renderTab)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__TabContent__["a" /* default */], null, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__ElementChildren__["a" /* map */])(children, function (child) {
    var childProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, child.props);

    delete childProps.title;
    delete childProps.disabled;
    delete childProps.tabClassName;
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__TabPane__["a" /* default */], childProps);
  })));
};

Tabs.defaultProps = defaultProps;
Tabs.displayName = 'Tabs';
/* harmony default export */ __webpack_exports__["a"] = (Tabs);

/***/ }),
/* 270 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__restart_hooks_useTimeout__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Fade__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ToastHeader__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ToastBody__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ThemeProvider__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ToastContext__ = __webpack_require__(156);


var _excluded = ["bsPrefix", "className", "children", "transition", "show", "animation", "delay", "autohide", "onClose"];








var Toast = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      className = _ref.className,
      children = _ref.children,
      _ref$transition = _ref.transition,
      Transition = _ref$transition === void 0 ? __WEBPACK_IMPORTED_MODULE_5__Fade__["a" /* default */] : _ref$transition,
      _ref$show = _ref.show,
      show = _ref$show === void 0 ? true : _ref$show,
      _ref$animation = _ref.animation,
      animation = _ref$animation === void 0 ? true : _ref$animation,
      _ref$delay = _ref.delay,
      delay = _ref$delay === void 0 ? 3000 : _ref$delay,
      _ref$autohide = _ref.autohide,
      autohide = _ref$autohide === void 0 ? false : _ref$autohide,
      onClose = _ref.onClose,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'toast'); // We use refs for these, because we don't want to restart the autohide
  // timer in case these values change.

  var delayRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useRef"])(delay);
  var onCloseRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useRef"])(onClose);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useEffect"])(function () {
    delayRef.current = delay;
    onCloseRef.current = onClose;
  }, [delay, onClose]);
  var autohideTimeout = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4__restart_hooks_useTimeout__["a" /* default */])();
  var autohideToast = !!(autohide && show);
  var autohideFunc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useCallback"])(function () {
    if (autohideToast) {
      onCloseRef.current == null ? void 0 : onCloseRef.current();
    }
  }, [autohideToast]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useEffect"])(function () {
    // Only reset timer if show or autohide changes.
    autohideTimeout.set(autohideFunc, delayRef.current);
  }, [autohideTimeout, autohideFunc]);
  var toastContext = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useMemo"])(function () {
    return {
      onClose: onClose
    };
  }, [onClose]);
  var hasAnimation = !!(Transition && animation);
  var toast = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
    ref: ref,
    className: __WEBPACK_IMPORTED_MODULE_3_classnames___default()(bsPrefix, className, !hasAnimation && (show ? 'show' : 'hide')),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  }), children);
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_9__ToastContext__["a" /* default */].Provider, {
    value: toastContext
  }, hasAnimation && Transition ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(Transition, {
    in: show,
    unmountOnExit: true
  }, toast) : toast);
});
Toast.displayName = 'Toast';
/* harmony default export */ __webpack_exports__["a"] = (Object.assign(Toast, {
  Body: __WEBPACK_IMPORTED_MODULE_7__ToastBody__["a" /* default */],
  Header: __WEBPACK_IMPORTED_MODULE_6__ToastHeader__["a" /* default */]
}));

/***/ }),
/* 271 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__createChainedFunction__ = __webpack_require__(102);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ElementChildren__ = __webpack_require__(52);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ButtonGroup__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ToggleButton__ = __webpack_require__(158);


var _excluded = ["children", "type", "name", "value", "onChange"];







var defaultProps = {
  type: 'radio',
  vertical: false
};
var ToggleButtonGroup = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.forwardRef(function (props, ref) {
  var _useUncontrolled = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_uncontrollable__["a" /* useUncontrolled */])(props, {
    value: 'onChange'
  }),
      children = _useUncontrolled.children,
      type = _useUncontrolled.type,
      name = _useUncontrolled.name,
      value = _useUncontrolled.value,
      onChange = _useUncontrolled.onChange,
      controlledProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_useUncontrolled, _excluded);

  var getValues = function getValues() {
    return value == null ? [] : [].concat(value);
  };

  var handleToggle = function handleToggle(inputVal, event) {
    if (!onChange) {
      return;
    }

    var values = getValues();
    var isActive = values.indexOf(inputVal) !== -1;

    if (type === 'radio') {
      if (!isActive && onChange) onChange(inputVal, event);
      return;
    }

    if (isActive) {
      onChange(values.filter(function (n) {
        return n !== inputVal;
      }), event);
    } else {
      onChange([].concat(values, [inputVal]), event);
    }
  };

  !(type !== 'radio' || !!name) ? process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_3_invariant___default()(false, 'A `name` is required to group the toggle buttons when the `type` ' + 'is set to "radio"') : __WEBPACK_IMPORTED_MODULE_3_invariant___default()(false) : void 0;
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7__ButtonGroup__["a" /* default */], __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, controlledProps, {
    ref: ref,
    toggle: true
  }), __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__ElementChildren__["a" /* map */])(children, function (child) {
    var values = getValues();
    var _child$props = child.props,
        childVal = _child$props.value,
        childOnChange = _child$props.onChange;

    var handler = function handler(e) {
      return handleToggle(childVal, e);
    };

    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_2_react___default.a.cloneElement(child, {
      type: type,
      name: child.name || name,
      checked: values.indexOf(childVal) !== -1,
      onChange: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__createChainedFunction__["a" /* default */])(childOnChange, handler)
    });
  }));
});
ToggleButtonGroup.defaultProps = defaultProps;
ToggleButtonGroup.Button = __WEBPACK_IMPORTED_MODULE_8__ToggleButton__["a" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (ToggleButtonGroup);
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 272 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames__ = __webpack_require__(3);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_classnames___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_classnames__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types_extra_lib_isRequiredForA11y__ = __webpack_require__(47);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types_extra_lib_isRequiredForA11y___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types_extra_lib_isRequiredForA11y__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ThemeProvider__ = __webpack_require__(4);


var _excluded = ["bsPrefix", "placement", "className", "style", "children", "arrowProps", "popper", "show"];




var defaultProps = {
  placement: 'right'
};
var Tooltip = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (_ref, ref) {
  var bsPrefix = _ref.bsPrefix,
      placement = _ref.placement,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      arrowProps = _ref.arrowProps,
      _ = _ref.popper,
      _2 = _ref.show,
      props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, _excluded);

  bsPrefix = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__ThemeProvider__["b" /* useBootstrapPrefix */])(bsPrefix, 'tooltip');

  var _ref2 = (placement == null ? void 0 : placement.split('-')) || [],
      primaryPlacement = _ref2[0];

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    ref: ref,
    style: style,
    role: "tooltip",
    "x-placement": primaryPlacement,
    className: __WEBPACK_IMPORTED_MODULE_2_classnames___default()(className, bsPrefix, "bs-tooltip-" + primaryPlacement)
  }, props), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    className: "arrow"
  }, arrowProps)), /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement("div", {
    className: bsPrefix + "-inner"
  }, children));
});
Tooltip.defaultProps = defaultProps;
Tooltip.displayName = 'Tooltip';
/* harmony default export */ __webpack_exports__["a"] = (Tooltip);

/***/ }),
/* 273 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__Accordion__ = __webpack_require__(225);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return __WEBPACK_IMPORTED_MODULE_0__Accordion__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__AccordionContext__ = __webpack_require__(48);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionContext", function() { return __WEBPACK_IMPORTED_MODULE_1__AccordionContext__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__AccordionCollapse__ = __webpack_require__(129);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionCollapse", function() { return __WEBPACK_IMPORTED_MODULE_2__AccordionCollapse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__AccordionToggle__ = __webpack_require__(130);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionToggle", function() { return __WEBPACK_IMPORTED_MODULE_3__AccordionToggle__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "useAccordionToggle", function() { return __WEBPACK_IMPORTED_MODULE_3__AccordionToggle__["b"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__Alert__ = __webpack_require__(226);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Alert", function() { return __WEBPACK_IMPORTED_MODULE_4__Alert__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__Badge__ = __webpack_require__(227);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Badge", function() { return __WEBPACK_IMPORTED_MODULE_5__Badge__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__Breadcrumb__ = __webpack_require__(229);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Breadcrumb", function() { return __WEBPACK_IMPORTED_MODULE_6__Breadcrumb__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__BreadcrumbItem__ = __webpack_require__(131);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "BreadcrumbItem", function() { return __WEBPACK_IMPORTED_MODULE_7__BreadcrumbItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__Button__ = __webpack_require__(49);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Button", function() { return __WEBPACK_IMPORTED_MODULE_8__Button__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ButtonGroup__ = __webpack_require__(91);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonGroup", function() { return __WEBPACK_IMPORTED_MODULE_9__ButtonGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ButtonToolbar__ = __webpack_require__(230);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ButtonToolbar", function() { return __WEBPACK_IMPORTED_MODULE_10__ButtonToolbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__Card__ = __webpack_require__(231);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Card", function() { return __WEBPACK_IMPORTED_MODULE_11__Card__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__CardColumns__ = __webpack_require__(232);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardColumns", function() { return __WEBPACK_IMPORTED_MODULE_12__CardColumns__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__CardDeck__ = __webpack_require__(233);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardDeck", function() { return __WEBPACK_IMPORTED_MODULE_13__CardDeck__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__CardImg__ = __webpack_require__(133);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardImg", function() { return __WEBPACK_IMPORTED_MODULE_14__CardImg__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__CardGroup__ = __webpack_require__(234);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CardGroup", function() { return __WEBPACK_IMPORTED_MODULE_15__CardGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__Carousel__ = __webpack_require__(235);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Carousel", function() { return __WEBPACK_IMPORTED_MODULE_16__Carousel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__CarouselItem__ = __webpack_require__(134);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CarouselItem", function() { return __WEBPACK_IMPORTED_MODULE_17__CarouselItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__CloseButton__ = __webpack_require__(50);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "CloseButton", function() { return __WEBPACK_IMPORTED_MODULE_18__CloseButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__Col__ = __webpack_require__(135);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Col", function() { return __WEBPACK_IMPORTED_MODULE_19__Col__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__Collapse__ = __webpack_require__(92);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Collapse", function() { return __WEBPACK_IMPORTED_MODULE_20__Collapse__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__Dropdown__ = __webpack_require__(51);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Dropdown", function() { return __WEBPACK_IMPORTED_MODULE_21__Dropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__DropdownButton__ = __webpack_require__(238);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "DropdownButton", function() { return __WEBPACK_IMPORTED_MODULE_22__DropdownButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__Fade__ = __webpack_require__(26);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Fade", function() { return __WEBPACK_IMPORTED_MODULE_23__Fade__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__Form__ = __webpack_require__(243);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Form", function() { return __WEBPACK_IMPORTED_MODULE_24__Form__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__FormControl__ = __webpack_require__(137);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormControl", function() { return __WEBPACK_IMPORTED_MODULE_25__FormControl__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__FormCheck__ = __webpack_require__(95);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormCheck", function() { return __WEBPACK_IMPORTED_MODULE_26__FormCheck__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__FormFile__ = __webpack_require__(138);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormFile", function() { return __WEBPACK_IMPORTED_MODULE_27__FormFile__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__FormGroup__ = __webpack_require__(139);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormGroup", function() { return __WEBPACK_IMPORTED_MODULE_28__FormGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__FormLabel__ = __webpack_require__(140);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormLabel", function() { return __WEBPACK_IMPORTED_MODULE_29__FormLabel__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__FormText__ = __webpack_require__(141);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "FormText", function() { return __WEBPACK_IMPORTED_MODULE_30__FormText__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__Container__ = __webpack_require__(237);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return __WEBPACK_IMPORTED_MODULE_31__Container__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__Image__ = __webpack_require__(142);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Image", function() { return __WEBPACK_IMPORTED_MODULE_32__Image__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__Figure__ = __webpack_require__(240);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Figure", function() { return __WEBPACK_IMPORTED_MODULE_33__Figure__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__InputGroup__ = __webpack_require__(248);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "InputGroup", function() { return __WEBPACK_IMPORTED_MODULE_34__InputGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__Jumbotron__ = __webpack_require__(249);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Jumbotron", function() { return __WEBPACK_IMPORTED_MODULE_35__Jumbotron__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__ListGroup__ = __webpack_require__(250);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroup", function() { return __WEBPACK_IMPORTED_MODULE_36__ListGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_37__ListGroupItem__ = __webpack_require__(143);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ListGroupItem", function() { return __WEBPACK_IMPORTED_MODULE_37__ListGroupItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_38__Media__ = __webpack_require__(251);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Media", function() { return __WEBPACK_IMPORTED_MODULE_38__Media__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_39__Modal__ = __webpack_require__(252);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Modal", function() { return __WEBPACK_IMPORTED_MODULE_39__Modal__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_40__ModalBody__ = __webpack_require__(144);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModalBody", function() { return __WEBPACK_IMPORTED_MODULE_40__ModalBody__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_41__ModalDialog__ = __webpack_require__(146);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModalDialog", function() { return __WEBPACK_IMPORTED_MODULE_41__ModalDialog__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_42__ModalFooter__ = __webpack_require__(147);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModalFooter", function() { return __WEBPACK_IMPORTED_MODULE_42__ModalFooter__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_43__ModalTitle__ = __webpack_require__(148);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ModalTitle", function() { return __WEBPACK_IMPORTED_MODULE_43__ModalTitle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_44__Nav__ = __webpack_require__(149);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Nav", function() { return __WEBPACK_IMPORTED_MODULE_44__Nav__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_45__Navbar__ = __webpack_require__(255);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Navbar", function() { return __WEBPACK_IMPORTED_MODULE_45__Navbar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_46__NavbarBrand__ = __webpack_require__(150);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarBrand", function() { return __WEBPACK_IMPORTED_MODULE_46__NavbarBrand__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_47__NavDropdown__ = __webpack_require__(254);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavDropdown", function() { return __WEBPACK_IMPORTED_MODULE_47__NavDropdown__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_48__NavItem__ = __webpack_require__(97);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavItem", function() { return __WEBPACK_IMPORTED_MODULE_48__NavItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_49__NavLink__ = __webpack_require__(53);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "NavLink", function() { return __WEBPACK_IMPORTED_MODULE_49__NavLink__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_50__Overlay__ = __webpack_require__(151);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Overlay", function() { return __WEBPACK_IMPORTED_MODULE_50__Overlay__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_51__OverlayTrigger__ = __webpack_require__(258);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayTrigger", function() { return __WEBPACK_IMPORTED_MODULE_51__OverlayTrigger__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_52__PageItem__ = __webpack_require__(152);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PageItem", function() { return __WEBPACK_IMPORTED_MODULE_52__PageItem__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_53__Pagination__ = __webpack_require__(259);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Pagination", function() { return __WEBPACK_IMPORTED_MODULE_53__Pagination__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_54__Popover__ = __webpack_require__(260);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Popover", function() { return __WEBPACK_IMPORTED_MODULE_54__Popover__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_55__PopoverTitle__ = __webpack_require__(154);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverTitle", function() { return __WEBPACK_IMPORTED_MODULE_55__PopoverTitle__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_56__PopoverContent__ = __webpack_require__(153);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "PopoverContent", function() { return __WEBPACK_IMPORTED_MODULE_56__PopoverContent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_57__ProgressBar__ = __webpack_require__(261);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ProgressBar", function() { return __WEBPACK_IMPORTED_MODULE_57__ProgressBar__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_58__ResponsiveEmbed__ = __webpack_require__(262);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ResponsiveEmbed", function() { return __WEBPACK_IMPORTED_MODULE_58__ResponsiveEmbed__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_59__Row__ = __webpack_require__(263);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Row", function() { return __WEBPACK_IMPORTED_MODULE_59__Row__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_60__SafeAnchor__ = __webpack_require__(19);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SafeAnchor", function() { return __WEBPACK_IMPORTED_MODULE_60__SafeAnchor__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_61__Spinner__ = __webpack_require__(264);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Spinner", function() { return __WEBPACK_IMPORTED_MODULE_61__Spinner__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_62__SplitButton__ = __webpack_require__(265);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "SplitButton", function() { return __WEBPACK_IMPORTED_MODULE_62__SplitButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_63__Tab__ = __webpack_require__(267);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tab", function() { return __WEBPACK_IMPORTED_MODULE_63__Tab__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_64__TabContainer__ = __webpack_require__(98);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabContainer", function() { return __WEBPACK_IMPORTED_MODULE_64__TabContainer__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_65__TabContent__ = __webpack_require__(99);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabContent", function() { return __WEBPACK_IMPORTED_MODULE_65__TabContent__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_66__Table__ = __webpack_require__(268);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Table", function() { return __WEBPACK_IMPORTED_MODULE_66__Table__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_67__TabPane__ = __webpack_require__(101);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "TabPane", function() { return __WEBPACK_IMPORTED_MODULE_67__TabPane__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_68__Tabs__ = __webpack_require__(269);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tabs", function() { return __WEBPACK_IMPORTED_MODULE_68__Tabs__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_69__ThemeProvider__ = __webpack_require__(4);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ThemeProvider", function() { return __WEBPACK_IMPORTED_MODULE_69__ThemeProvider__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_70__Toast__ = __webpack_require__(270);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Toast", function() { return __WEBPACK_IMPORTED_MODULE_70__Toast__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_71__ToastBody__ = __webpack_require__(155);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastBody", function() { return __WEBPACK_IMPORTED_MODULE_71__ToastBody__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_72__ToastHeader__ = __webpack_require__(157);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToastHeader", function() { return __WEBPACK_IMPORTED_MODULE_72__ToastHeader__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_73__ToggleButton__ = __webpack_require__(158);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButton", function() { return __WEBPACK_IMPORTED_MODULE_73__ToggleButton__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_74__ToggleButtonGroup__ = __webpack_require__(271);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "ToggleButtonGroup", function() { return __WEBPACK_IMPORTED_MODULE_74__ToggleButtonGroup__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_75__Tooltip__ = __webpack_require__(272);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "Tooltip", function() { return __WEBPACK_IMPORTED_MODULE_75__Tooltip__["a"]; });













































































/***/ }),
/* 274 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */





if (process.env.NODE_ENV !== "production") {
  (function() {
'use strict';

// The Symbol used to tag the ReactElement-like types. If there is no native Symbol
// nor polyfill, then a plain number is used for performance.
var hasSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = hasSymbol ? Symbol.for('react.element') : 0xeac7;
var REACT_PORTAL_TYPE = hasSymbol ? Symbol.for('react.portal') : 0xeaca;
var REACT_FRAGMENT_TYPE = hasSymbol ? Symbol.for('react.fragment') : 0xeacb;
var REACT_STRICT_MODE_TYPE = hasSymbol ? Symbol.for('react.strict_mode') : 0xeacc;
var REACT_PROFILER_TYPE = hasSymbol ? Symbol.for('react.profiler') : 0xead2;
var REACT_PROVIDER_TYPE = hasSymbol ? Symbol.for('react.provider') : 0xeacd;
var REACT_CONTEXT_TYPE = hasSymbol ? Symbol.for('react.context') : 0xeace; // TODO: We don't use AsyncMode or ConcurrentMode anymore. They were temporary
// (unstable) APIs that have been removed. Can we remove the symbols?

var REACT_ASYNC_MODE_TYPE = hasSymbol ? Symbol.for('react.async_mode') : 0xeacf;
var REACT_CONCURRENT_MODE_TYPE = hasSymbol ? Symbol.for('react.concurrent_mode') : 0xeacf;
var REACT_FORWARD_REF_TYPE = hasSymbol ? Symbol.for('react.forward_ref') : 0xead0;
var REACT_SUSPENSE_TYPE = hasSymbol ? Symbol.for('react.suspense') : 0xead1;
var REACT_SUSPENSE_LIST_TYPE = hasSymbol ? Symbol.for('react.suspense_list') : 0xead8;
var REACT_MEMO_TYPE = hasSymbol ? Symbol.for('react.memo') : 0xead3;
var REACT_LAZY_TYPE = hasSymbol ? Symbol.for('react.lazy') : 0xead4;
var REACT_BLOCK_TYPE = hasSymbol ? Symbol.for('react.block') : 0xead9;
var REACT_FUNDAMENTAL_TYPE = hasSymbol ? Symbol.for('react.fundamental') : 0xead5;
var REACT_RESPONDER_TYPE = hasSymbol ? Symbol.for('react.responder') : 0xead6;
var REACT_SCOPE_TYPE = hasSymbol ? Symbol.for('react.scope') : 0xead7;

function isValidElementType(type) {
  return typeof type === 'string' || typeof type === 'function' || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
  type === REACT_FRAGMENT_TYPE || type === REACT_CONCURRENT_MODE_TYPE || type === REACT_PROFILER_TYPE || type === REACT_STRICT_MODE_TYPE || type === REACT_SUSPENSE_TYPE || type === REACT_SUSPENSE_LIST_TYPE || typeof type === 'object' && type !== null && (type.$$typeof === REACT_LAZY_TYPE || type.$$typeof === REACT_MEMO_TYPE || type.$$typeof === REACT_PROVIDER_TYPE || type.$$typeof === REACT_CONTEXT_TYPE || type.$$typeof === REACT_FORWARD_REF_TYPE || type.$$typeof === REACT_FUNDAMENTAL_TYPE || type.$$typeof === REACT_RESPONDER_TYPE || type.$$typeof === REACT_SCOPE_TYPE || type.$$typeof === REACT_BLOCK_TYPE);
}

function typeOf(object) {
  if (typeof object === 'object' && object !== null) {
    var $$typeof = object.$$typeof;

    switch ($$typeof) {
      case REACT_ELEMENT_TYPE:
        var type = object.type;

        switch (type) {
          case REACT_ASYNC_MODE_TYPE:
          case REACT_CONCURRENT_MODE_TYPE:
          case REACT_FRAGMENT_TYPE:
          case REACT_PROFILER_TYPE:
          case REACT_STRICT_MODE_TYPE:
          case REACT_SUSPENSE_TYPE:
            return type;

          default:
            var $$typeofType = type && type.$$typeof;

            switch ($$typeofType) {
              case REACT_CONTEXT_TYPE:
              case REACT_FORWARD_REF_TYPE:
              case REACT_LAZY_TYPE:
              case REACT_MEMO_TYPE:
              case REACT_PROVIDER_TYPE:
                return $$typeofType;

              default:
                return $$typeof;
            }

        }

      case REACT_PORTAL_TYPE:
        return $$typeof;
    }
  }

  return undefined;
} // AsyncMode is deprecated along with isAsyncMode

var AsyncMode = REACT_ASYNC_MODE_TYPE;
var ConcurrentMode = REACT_CONCURRENT_MODE_TYPE;
var ContextConsumer = REACT_CONTEXT_TYPE;
var ContextProvider = REACT_PROVIDER_TYPE;
var Element = REACT_ELEMENT_TYPE;
var ForwardRef = REACT_FORWARD_REF_TYPE;
var Fragment = REACT_FRAGMENT_TYPE;
var Lazy = REACT_LAZY_TYPE;
var Memo = REACT_MEMO_TYPE;
var Portal = REACT_PORTAL_TYPE;
var Profiler = REACT_PROFILER_TYPE;
var StrictMode = REACT_STRICT_MODE_TYPE;
var Suspense = REACT_SUSPENSE_TYPE;
var hasWarnedAboutDeprecatedIsAsyncMode = false; // AsyncMode should be deprecated

function isAsyncMode(object) {
  {
    if (!hasWarnedAboutDeprecatedIsAsyncMode) {
      hasWarnedAboutDeprecatedIsAsyncMode = true; // Using console['warn'] to evade Babel and ESLint

      console['warn']('The ReactIs.isAsyncMode() alias has been deprecated, ' + 'and will be removed in React 17+. Update your code to use ' + 'ReactIs.isConcurrentMode() instead. It has the exact same API.');
    }
  }

  return isConcurrentMode(object) || typeOf(object) === REACT_ASYNC_MODE_TYPE;
}
function isConcurrentMode(object) {
  return typeOf(object) === REACT_CONCURRENT_MODE_TYPE;
}
function isContextConsumer(object) {
  return typeOf(object) === REACT_CONTEXT_TYPE;
}
function isContextProvider(object) {
  return typeOf(object) === REACT_PROVIDER_TYPE;
}
function isElement(object) {
  return typeof object === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
}
function isForwardRef(object) {
  return typeOf(object) === REACT_FORWARD_REF_TYPE;
}
function isFragment(object) {
  return typeOf(object) === REACT_FRAGMENT_TYPE;
}
function isLazy(object) {
  return typeOf(object) === REACT_LAZY_TYPE;
}
function isMemo(object) {
  return typeOf(object) === REACT_MEMO_TYPE;
}
function isPortal(object) {
  return typeOf(object) === REACT_PORTAL_TYPE;
}
function isProfiler(object) {
  return typeOf(object) === REACT_PROFILER_TYPE;
}
function isStrictMode(object) {
  return typeOf(object) === REACT_STRICT_MODE_TYPE;
}
function isSuspense(object) {
  return typeOf(object) === REACT_SUSPENSE_TYPE;
}

exports.AsyncMode = AsyncMode;
exports.ConcurrentMode = ConcurrentMode;
exports.ContextConsumer = ContextConsumer;
exports.ContextProvider = ContextProvider;
exports.Element = Element;
exports.ForwardRef = ForwardRef;
exports.Fragment = Fragment;
exports.Lazy = Lazy;
exports.Memo = Memo;
exports.Portal = Portal;
exports.Profiler = Profiler;
exports.StrictMode = StrictMode;
exports.Suspense = Suspense;
exports.isAsyncMode = isAsyncMode;
exports.isConcurrentMode = isConcurrentMode;
exports.isContextConsumer = isContextConsumer;
exports.isContextProvider = isContextProvider;
exports.isElement = isElement;
exports.isForwardRef = isForwardRef;
exports.isFragment = isFragment;
exports.isLazy = isLazy;
exports.isMemo = isMemo;
exports.isPortal = isPortal;
exports.isProfiler = isProfiler;
exports.isStrictMode = isStrictMode;
exports.isSuspense = isSuspense;
exports.isValidElementType = isValidElementType;
exports.typeOf = typeOf;
  })();
}

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(6)))

/***/ }),
/* 275 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var b="function"===typeof Symbol&&Symbol.for,c=b?Symbol.for("react.element"):60103,d=b?Symbol.for("react.portal"):60106,e=b?Symbol.for("react.fragment"):60107,f=b?Symbol.for("react.strict_mode"):60108,g=b?Symbol.for("react.profiler"):60114,h=b?Symbol.for("react.provider"):60109,k=b?Symbol.for("react.context"):60110,l=b?Symbol.for("react.async_mode"):60111,m=b?Symbol.for("react.concurrent_mode"):60111,n=b?Symbol.for("react.forward_ref"):60112,p=b?Symbol.for("react.suspense"):60113,q=b?
Symbol.for("react.suspense_list"):60120,r=b?Symbol.for("react.memo"):60115,t=b?Symbol.for("react.lazy"):60116,v=b?Symbol.for("react.block"):60121,w=b?Symbol.for("react.fundamental"):60117,x=b?Symbol.for("react.responder"):60118,y=b?Symbol.for("react.scope"):60119;
function z(a){if("object"===typeof a&&null!==a){var u=a.$$typeof;switch(u){case c:switch(a=a.type,a){case l:case m:case e:case g:case f:case p:return a;default:switch(a=a&&a.$$typeof,a){case k:case n:case t:case r:case h:return a;default:return u}}case d:return u}}}function A(a){return z(a)===m}exports.AsyncMode=l;exports.ConcurrentMode=m;exports.ContextConsumer=k;exports.ContextProvider=h;exports.Element=c;exports.ForwardRef=n;exports.Fragment=e;exports.Lazy=t;exports.Memo=r;exports.Portal=d;
exports.Profiler=g;exports.StrictMode=f;exports.Suspense=p;exports.isAsyncMode=function(a){return A(a)||z(a)===l};exports.isConcurrentMode=A;exports.isContextConsumer=function(a){return z(a)===k};exports.isContextProvider=function(a){return z(a)===h};exports.isElement=function(a){return"object"===typeof a&&null!==a&&a.$$typeof===c};exports.isForwardRef=function(a){return z(a)===n};exports.isFragment=function(a){return z(a)===e};exports.isLazy=function(a){return z(a)===t};
exports.isMemo=function(a){return z(a)===r};exports.isPortal=function(a){return z(a)===d};exports.isProfiler=function(a){return z(a)===g};exports.isStrictMode=function(a){return z(a)===f};exports.isSuspense=function(a){return z(a)===p};
exports.isValidElementType=function(a){return"string"===typeof a||"function"===typeof a||a===e||a===m||a===g||a===f||a===p||a===q||"object"===typeof a&&null!==a&&(a.$$typeof===t||a.$$typeof===r||a.$$typeof===h||a.$$typeof===k||a.$$typeof===n||a.$$typeof===w||a.$$typeof===x||a.$$typeof===y||a.$$typeof===v)};exports.typeOf=z;


/***/ }),
/* 276 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return polyfill; });
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

function componentWillMount() {
  // Call this.constructor.gDSFP to support sub-classes.
  var state = this.constructor.getDerivedStateFromProps(this.props, this.state);
  if (state !== null && state !== undefined) {
    this.setState(state);
  }
}

function componentWillReceiveProps(nextProps) {
  // Call this.constructor.gDSFP to support sub-classes.
  // Use the setState() updater to ensure state isn't stale in certain edge cases.
  function updater(prevState) {
    var state = this.constructor.getDerivedStateFromProps(nextProps, prevState);
    return state !== null && state !== undefined ? state : null;
  }
  // Binding "this" is important for shallow renderer support.
  this.setState(updater.bind(this));
}

function componentWillUpdate(nextProps, nextState) {
  try {
    var prevProps = this.props;
    var prevState = this.state;
    this.props = nextProps;
    this.state = nextState;
    this.__reactInternalSnapshotFlag = true;
    this.__reactInternalSnapshot = this.getSnapshotBeforeUpdate(
      prevProps,
      prevState
    );
  } finally {
    this.props = prevProps;
    this.state = prevState;
  }
}

// React may warn about cWM/cWRP/cWU methods being deprecated.
// Add a flag to suppress these warnings for this special case.
componentWillMount.__suppressDeprecationWarning = true;
componentWillReceiveProps.__suppressDeprecationWarning = true;
componentWillUpdate.__suppressDeprecationWarning = true;

function polyfill(Component) {
  var prototype = Component.prototype;

  if (!prototype || !prototype.isReactComponent) {
    throw new Error('Can only polyfill class components');
  }

  if (
    typeof Component.getDerivedStateFromProps !== 'function' &&
    typeof prototype.getSnapshotBeforeUpdate !== 'function'
  ) {
    return Component;
  }

  // If new component APIs are defined, "unsafe" lifecycles won't be called.
  // Error if any of these lifecycles are present,
  // Because they would work differently between older and newer (16.3+) versions of React.
  var foundWillMountName = null;
  var foundWillReceivePropsName = null;
  var foundWillUpdateName = null;
  if (typeof prototype.componentWillMount === 'function') {
    foundWillMountName = 'componentWillMount';
  } else if (typeof prototype.UNSAFE_componentWillMount === 'function') {
    foundWillMountName = 'UNSAFE_componentWillMount';
  }
  if (typeof prototype.componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'componentWillReceiveProps';
  } else if (typeof prototype.UNSAFE_componentWillReceiveProps === 'function') {
    foundWillReceivePropsName = 'UNSAFE_componentWillReceiveProps';
  }
  if (typeof prototype.componentWillUpdate === 'function') {
    foundWillUpdateName = 'componentWillUpdate';
  } else if (typeof prototype.UNSAFE_componentWillUpdate === 'function') {
    foundWillUpdateName = 'UNSAFE_componentWillUpdate';
  }
  if (
    foundWillMountName !== null ||
    foundWillReceivePropsName !== null ||
    foundWillUpdateName !== null
  ) {
    var componentName = Component.displayName || Component.name;
    var newApiName =
      typeof Component.getDerivedStateFromProps === 'function'
        ? 'getDerivedStateFromProps()'
        : 'getSnapshotBeforeUpdate()';

    throw Error(
      'Unsafe legacy lifecycles will not be called for components using new component APIs.\n\n' +
        componentName +
        ' uses ' +
        newApiName +
        ' but also contains the following legacy lifecycles:' +
        (foundWillMountName !== null ? '\n  ' + foundWillMountName : '') +
        (foundWillReceivePropsName !== null
          ? '\n  ' + foundWillReceivePropsName
          : '') +
        (foundWillUpdateName !== null ? '\n  ' + foundWillUpdateName : '') +
        '\n\nThe above lifecycles should be removed. Learn more about this warning here:\n' +
        'https://fb.me/react-async-component-lifecycle-hooks'
    );
  }

  // React <= 16.2 does not support static getDerivedStateFromProps.
  // As a workaround, use cWM and cWRP to invoke the new static lifecycle.
  // Newer versions of React will ignore these lifecycles if gDSFP exists.
  if (typeof Component.getDerivedStateFromProps === 'function') {
    prototype.componentWillMount = componentWillMount;
    prototype.componentWillReceiveProps = componentWillReceiveProps;
  }

  // React <= 16.2 does not support getSnapshotBeforeUpdate.
  // As a workaround, use cWU to invoke the new lifecycle.
  // Newer versions of React will ignore that lifecycle if gSBU exists.
  if (typeof prototype.getSnapshotBeforeUpdate === 'function') {
    if (typeof prototype.componentDidUpdate !== 'function') {
      throw new Error(
        'Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype'
      );
    }

    prototype.componentWillUpdate = componentWillUpdate;

    var componentDidUpdate = prototype.componentDidUpdate;

    prototype.componentDidUpdate = function componentDidUpdatePolyfill(
      prevProps,
      prevState,
      maybeSnapshot
    ) {
      // 16.3+ will not execute our will-update method;
      // It will pass a snapshot value to did-update though.
      // Older versions will require our polyfilled will-update value.
      // We need to handle both cases, but can't just check for the presence of "maybeSnapshot",
      // Because for <= 15.x versions this might be a "prevContext" object.
      // We also can't just check "__reactInternalSnapshot",
      // Because get-snapshot might return a falsy value.
      // So check for the explicit __reactInternalSnapshotFlag flag to determine behavior.
      var snapshot = this.__reactInternalSnapshotFlag
        ? this.__reactInternalSnapshot
        : maybeSnapshot;

      componentDidUpdate.call(this, prevProps, prevState, snapshot);
    };
  }

  return Component;
}




/***/ }),
/* 277 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_helpers_matches__ = __webpack_require__(216);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_helpers_querySelectorAll__ = __webpack_require__(86);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dom_helpers_addEventListener__ = __webpack_require__(83);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_uncontrollable__ = __webpack_require__(12);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restart_hooks_usePrevious__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__restart_hooks_useForceUpdate__ = __webpack_require__(121);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__restart_hooks_useGlobalListener__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__DropdownContext__ = __webpack_require__(106);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__DropdownMenu__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__DropdownToggle__ = __webpack_require__(163);













var propTypes = {
  /**
   * A render prop that returns the root dropdown element. The `props`
   * argument should spread through to an element containing _both_ the
   * menu and toggle in order to handle keyboard events for focus management.
   *
   * @type {Function ({
   *   props: {
   *     onKeyDown: (SyntheticEvent) => void,
   *   },
   * }) => React.Element}
   */
  children: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.node,

  /**
   * Determines the direction and location of the Menu in relation to it's Toggle.
   */
  drop: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf(['up', 'left', 'right', 'down']),

  /**
   * Controls the focus behavior for when the Dropdown is opened. Set to
   * `true` to always focus the first menu item, `keyboard` to focus only when
   * navigating via the keyboard, or `false` to disable completely
   *
   * The Default behavior is `false` **unless** the Menu has a `role="menu"`
   * where it will default to `keyboard` to match the recommended [ARIA Authoring practices](https://www.w3.org/TR/wai-aria-practices-1.1/#menubutton).
   */
  focusFirstItemOnShow: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.oneOf([false, true, 'keyboard']),

  /**
   * A css slector string that will return __focusable__ menu items.
   * Selectors should be relative to the menu component:
   * e.g. ` > li:not('.disabled')`
   */
  itemSelector: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.string,

  /**
   * Align the menu to the 'end' side of the placement side of the Dropdown toggle. The default placement is `top-start` or `bottom-start`.
   */
  alignEnd: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * Whether or not the Dropdown is visible.
   *
   * @controllable onToggle
   */
  show: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * Sets the initial show position of the Dropdown.
   */
  defaultShow: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.bool,

  /**
   * A callback fired when the Dropdown wishes to change visibility. Called with the requested
   * `show` value, the DOM event, and the source that fired it: `'click'`,`'keydown'`,`'rootClose'`, or `'select'`.
   *
   * ```ts static
   * function(
   *   isOpen: boolean,
   *   event: SyntheticEvent,
   * ): void
   * ```
   *
   * @controllable show
   */
  onToggle: __WEBPACK_IMPORTED_MODULE_4_prop_types___default.a.func
};

function useRefWithUpdate() {
  var forceUpdate = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7__restart_hooks_useForceUpdate__["a" /* default */])();
  var ref = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(null);
  var attachRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(function (element) {
    ref.current = element; // ensure that a menu set triggers an update for consumers

    forceUpdate();
  }, [forceUpdate]);
  return [ref, attachRef];
}
/**
 * @displayName Dropdown
 * @public
 */


function Dropdown(_ref) {
  var drop = _ref.drop,
      alignEnd = _ref.alignEnd,
      defaultShow = _ref.defaultShow,
      rawShow = _ref.show,
      rawOnToggle = _ref.onToggle,
      _ref$itemSelector = _ref.itemSelector,
      itemSelector = _ref$itemSelector === void 0 ? '* > *' : _ref$itemSelector,
      focusFirstItemOnShow = _ref.focusFirstItemOnShow,
      children = _ref.children;

  var _useUncontrolledProp = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_uncontrollable__["b" /* useUncontrolledProp */])(rawShow, defaultShow, rawOnToggle),
      show = _useUncontrolledProp[0],
      onToggle = _useUncontrolledProp[1]; // We use normal refs instead of useCallbackRef in order to populate the
  // the value as quickly as possible, otherwise the effect to focus the element
  // may run before the state value is set


  var _useRefWithUpdate = useRefWithUpdate(),
      menuRef = _useRefWithUpdate[0],
      setMenu = _useRefWithUpdate[1];

  var menuElement = menuRef.current;

  var _useRefWithUpdate2 = useRefWithUpdate(),
      toggleRef = _useRefWithUpdate2[0],
      setToggle = _useRefWithUpdate2[1];

  var toggleElement = toggleRef.current;
  var lastShow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__restart_hooks_usePrevious__["a" /* default */])(show);
  var lastSourceEvent = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(null);
  var focusInDropdown = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useRef"])(false);
  var toggle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useCallback"])(function (nextShow, event) {
    onToggle(nextShow, event);
  }, [onToggle]);
  var context = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useMemo"])(function () {
    return {
      toggle: toggle,
      drop: drop,
      show: show,
      alignEnd: alignEnd,
      menuElement: menuElement,
      toggleElement: toggleElement,
      setMenu: setMenu,
      setToggle: setToggle
    };
  }, [toggle, drop, show, alignEnd, menuElement, toggleElement, setMenu, setToggle]);

  if (menuElement && lastShow && !show) {
    focusInDropdown.current = menuElement.contains(document.activeElement);
  }

  var focusToggle = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__restart_hooks_useEventCallback__["a" /* default */])(function () {
    if (toggleElement && toggleElement.focus) {
      toggleElement.focus();
    }
  });
  var maybeFocusFirst = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__restart_hooks_useEventCallback__["a" /* default */])(function () {
    var type = lastSourceEvent.current;
    var focusType = focusFirstItemOnShow;

    if (focusType == null) {
      focusType = menuRef.current && __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_dom_helpers_matches__["a" /* default */])(menuRef.current, '[role=menu]') ? 'keyboard' : false;
    }

    if (focusType === false || focusType === 'keyboard' && !/^key.+$/.test(type)) {
      return;
    }

    var first = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_querySelectorAll__["a" /* default */])(menuRef.current, itemSelector)[0];
    if (first && first.focus) first.focus();
  });
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(function () {
    if (show) maybeFocusFirst();else if (focusInDropdown.current) {
      focusInDropdown.current = false;
      focusToggle();
    } // only `show` should be changing
  }, [show, focusInDropdown, focusToggle, maybeFocusFirst]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useEffect"])(function () {
    lastSourceEvent.current = null;
  });

  var getNextFocusedChild = function getNextFocusedChild(current, offset) {
    if (!menuRef.current) return null;
    var items = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_querySelectorAll__["a" /* default */])(menuRef.current, itemSelector);
    var index = items.indexOf(current) + offset;
    index = Math.max(0, Math.min(index, items.length));
    return items[index];
  };

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__restart_hooks_useGlobalListener__["a" /* default */])('keydown', function (event) {
    var _menuRef$current, _toggleRef$current;

    var key = event.key;
    var target = event.target;
    var fromMenu = (_menuRef$current = menuRef.current) == null ? void 0 : _menuRef$current.contains(target);
    var fromToggle = (_toggleRef$current = toggleRef.current) == null ? void 0 : _toggleRef$current.contains(target); // Second only to https://github.com/twbs/bootstrap/blob/8cfbf6933b8a0146ac3fbc369f19e520bd1ebdac/js/src/dropdown.js#L400
    // in inscrutability

    var isInput = /input|textarea/i.test(target.tagName);

    if (isInput && (key === ' ' || key !== 'Escape' && fromMenu)) {
      return;
    }

    if (!fromMenu && !fromToggle) {
      return;
    }

    if (!menuRef.current && key === 'Tab') {
      return;
    }

    lastSourceEvent.current = event.type;

    switch (key) {
      case 'ArrowUp':
        {
          var next = getNextFocusedChild(target, -1);
          if (next && next.focus) next.focus();
          event.preventDefault();
          return;
        }

      case 'ArrowDown':
        event.preventDefault();

        if (!show) {
          onToggle(true, event);
        } else {
          var _next = getNextFocusedChild(target, 1);

          if (_next && _next.focus) _next.focus();
        }

        return;

      case 'Tab':
        // on keydown the target is the element being tabbed FROM, we need that
        // to know if this event is relevant to this dropdown (e.g. in this menu).
        // On `keyup` the target is the element being tagged TO which we use to check
        // if focus has left the menu
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_addEventListener__["a" /* default */])(document, 'keyup', function (e) {
          var _menuRef$current2;

          if (e.key === 'Tab' && !e.target || !((_menuRef$current2 = menuRef.current) != null && _menuRef$current2.contains(e.target))) {
            onToggle(false, event);
          }
        }, {
          once: true
        });
        break;

      case 'Escape':
        event.preventDefault();
        event.stopPropagation();
        onToggle(false, event);
        break;

      default:
    }
  });
  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_10__DropdownContext__["a" /* default */].Provider, {
    value: context
  }, children);
}

Dropdown.displayName = 'ReactOverlaysDropdown';
Dropdown.propTypes = propTypes;
Dropdown.Menu = __WEBPACK_IMPORTED_MODULE_11__DropdownMenu__["b" /* default */];
Dropdown.Toggle = __WEBPACK_IMPORTED_MODULE_12__DropdownToggle__["b" /* default */];
/* harmony default export */ __webpack_exports__["a"] = (Dropdown);

/***/ }),
/* 278 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_dom_helpers_activeElement__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_dom_helpers_contains__ = __webpack_require__(84);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_dom_helpers_canUseDOM__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_dom_helpers_listen__ = __webpack_require__(85);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__restart_hooks_useMounted__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__restart_hooks_useWillUnmount__ = __webpack_require__(62);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__restart_hooks_usePrevious__ = __webpack_require__(122);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__restart_hooks_useEventCallback__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ModalManager__ = __webpack_require__(164);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__useWaitForDOMRef__ = __webpack_require__(169);



/* eslint-disable @typescript-eslint/no-use-before-define, react/prop-types */













var manager;

function getManager() {
  if (!manager) manager = new __WEBPACK_IMPORTED_MODULE_13__ModalManager__["a" /* default */]();
  return manager;
}

function useModalManager(provided) {
  var modalManager = provided || getManager();
  var modal = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useRef"])({
    dialog: null,
    backdrop: null
  });
  return Object.assign(modal.current, {
    add: function add(container, className) {
      return modalManager.add(modal.current, container, className);
    },
    remove: function remove() {
      return modalManager.remove(modal.current);
    },
    isTopModal: function isTopModal() {
      return modalManager.isTopModal(modal.current);
    },
    setDialogRef: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useCallback"])(function (ref) {
      modal.current.dialog = ref;
    }, []),
    setBackdropRef: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useCallback"])(function (ref) {
      modal.current.backdrop = ref;
    }, [])
  });
}

var Modal = /*#__PURE__*/__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["forwardRef"])(function (_ref, ref) {
  var _ref$show = _ref.show,
      show = _ref$show === void 0 ? false : _ref$show,
      _ref$role = _ref.role,
      role = _ref$role === void 0 ? 'dialog' : _ref$role,
      className = _ref.className,
      style = _ref.style,
      children = _ref.children,
      _ref$backdrop = _ref.backdrop,
      backdrop = _ref$backdrop === void 0 ? true : _ref$backdrop,
      _ref$keyboard = _ref.keyboard,
      keyboard = _ref$keyboard === void 0 ? true : _ref$keyboard,
      onBackdropClick = _ref.onBackdropClick,
      onEscapeKeyDown = _ref.onEscapeKeyDown,
      transition = _ref.transition,
      backdropTransition = _ref.backdropTransition,
      _ref$autoFocus = _ref.autoFocus,
      autoFocus = _ref$autoFocus === void 0 ? true : _ref$autoFocus,
      _ref$enforceFocus = _ref.enforceFocus,
      enforceFocus = _ref$enforceFocus === void 0 ? true : _ref$enforceFocus,
      _ref$restoreFocus = _ref.restoreFocus,
      restoreFocus = _ref$restoreFocus === void 0 ? true : _ref$restoreFocus,
      restoreFocusOptions = _ref.restoreFocusOptions,
      renderDialog = _ref.renderDialog,
      _ref$renderBackdrop = _ref.renderBackdrop,
      renderBackdrop = _ref$renderBackdrop === void 0 ? function (props) {
    return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", props);
  } : _ref$renderBackdrop,
      providedManager = _ref.manager,
      containerRef = _ref.container,
      containerClassName = _ref.containerClassName,
      onShow = _ref.onShow,
      _ref$onHide = _ref.onHide,
      onHide = _ref$onHide === void 0 ? function () {} : _ref$onHide,
      onExit = _ref.onExit,
      onExited = _ref.onExited,
      onExiting = _ref.onExiting,
      onEnter = _ref.onEnter,
      onEntering = _ref.onEntering,
      onEntered = _ref.onEntered,
      rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "backdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "containerClassName", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"]);

  var container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_14__useWaitForDOMRef__["a" /* default */])(containerRef);
  var modal = useModalManager(providedManager);
  var isMounted = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__restart_hooks_useMounted__["a" /* default */])();
  var prevShow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__restart_hooks_usePrevious__["a" /* default */])(show);

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useState"])(!show),
      exited = _useState[0],
      setExited = _useState[1];

  var lastFocusRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useRef"])(null);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useImperativeHandle"])(ref, function () {
    return modal;
  }, [modal]);

  if (__WEBPACK_IMPORTED_MODULE_4_dom_helpers_canUseDOM__["a" /* default */] && !prevShow && show) {
    lastFocusRef.current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_activeElement__["a" /* default */])();
  }

  if (!transition && !show && !exited) {
    setExited(true);
  } else if (show && exited) {
    setExited(false);
  }

  var handleShow = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__restart_hooks_useEventCallback__["a" /* default */])(function () {
    modal.add(container, containerClassName);
    removeKeydownListenerRef.current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_listen__["a" /* default */])(document, 'keydown', handleDocumentKeyDown);
    removeFocusListenerRef.current = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5_dom_helpers_listen__["a" /* default */])(document, 'focus', // the timeout is necessary b/c this will run before the new modal is mounted
    // and so steals focus from it
    function () {
      return setTimeout(handleEnforceFocus);
    }, true);

    if (onShow) {
      onShow();
    } // autofocus after onShow to not trigger a focus event for previous
    // modals before this one is shown.


    if (autoFocus) {
      var currentActiveElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_activeElement__["a" /* default */])(document);

      if (modal.dialog && currentActiveElement && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_dom_helpers_contains__["a" /* default */])(modal.dialog, currentActiveElement)) {
        lastFocusRef.current = currentActiveElement;
        modal.dialog.focus();
      }
    }
  });
  var handleHide = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__restart_hooks_useEventCallback__["a" /* default */])(function () {
    modal.remove();
    removeKeydownListenerRef.current == null ? void 0 : removeKeydownListenerRef.current();
    removeFocusListenerRef.current == null ? void 0 : removeFocusListenerRef.current();

    if (restoreFocus) {
      var _lastFocusRef$current;

      // Support: <=IE11 doesn't support `focus()` on svg elements (RB: #917)
      (_lastFocusRef$current = lastFocusRef.current) == null ? void 0 : _lastFocusRef$current.focus == null ? void 0 : _lastFocusRef$current.focus(restoreFocusOptions);
      lastFocusRef.current = null;
    }
  }); // TODO: try and combine these effects: https://github.com/react-bootstrap/react-overlays/pull/794#discussion_r409954120
  // Show logic when:
  //  - show is `true` _and_ `container` has resolved

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useEffect"])(function () {
    if (!show || !container) return;
    handleShow();
  }, [show, container,
  /* should never change: */
  handleShow]); // Hide cleanup logic when:
  //  - `exited` switches to true
  //  - component unmounts;

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useEffect"])(function () {
    if (!exited) return;
    handleHide();
  }, [exited, handleHide]);
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__restart_hooks_useWillUnmount__["a" /* default */])(function () {
    handleHide();
  }); // --------------------------------

  var handleEnforceFocus = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__restart_hooks_useEventCallback__["a" /* default */])(function () {
    if (!enforceFocus || !isMounted() || !modal.isTopModal()) {
      return;
    }

    var currentActiveElement = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_dom_helpers_activeElement__["a" /* default */])();

    if (modal.dialog && currentActiveElement && !__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_dom_helpers_contains__["a" /* default */])(modal.dialog, currentActiveElement)) {
      modal.dialog.focus();
    }
  });
  var handleBackdropClick = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__restart_hooks_useEventCallback__["a" /* default */])(function (e) {
    if (e.target !== e.currentTarget) {
      return;
    }

    onBackdropClick == null ? void 0 : onBackdropClick(e);

    if (backdrop === true) {
      onHide();
    }
  });
  var handleDocumentKeyDown = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_12__restart_hooks_useEventCallback__["a" /* default */])(function (e) {
    if (keyboard && e.keyCode === 27 && modal.isTopModal()) {
      onEscapeKeyDown == null ? void 0 : onEscapeKeyDown(e);

      if (!e.defaultPrevented) {
        onHide();
      }
    }
  });
  var removeFocusListenerRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useRef"])();
  var removeKeydownListenerRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_7_react__["useRef"])();

  var handleHidden = function handleHidden() {
    setExited(true);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    onExited == null ? void 0 : onExited.apply(void 0, args);
  };

  var Transition = transition;

  if (!container || !(show || Transition && !exited)) {
    return null;
  }

  var dialogProps = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({
    role: role,
    ref: modal.setDialogRef,
    // apparently only works on the dialog role element
    'aria-modal': role === 'dialog' ? true : undefined
  }, rest, {
    style: style,
    className: className,
    tabIndex: -1
  });

  var dialog = renderDialog ? renderDialog(dialogProps) : /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement("div", dialogProps, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.a.cloneElement(children, {
    role: 'document'
  }));

  if (Transition) {
    dialog = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(Transition, {
      appear: true,
      unmountOnExit: true,
      "in": !!show,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, dialog);
  }

  var backdropElement = null;

  if (backdrop) {
    var BackdropTransition = backdropTransition;
    backdropElement = renderBackdrop({
      ref: modal.setBackdropRef,
      onClick: handleBackdropClick
    });

    if (BackdropTransition) {
      backdropElement = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(BackdropTransition, {
        appear: true,
        "in": !!show
      }, backdropElement);
    }
  }

  return /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Fragment, null, /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_8_react_dom___default.a.createPortal( /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_7_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_7_react___default.a.Fragment, null, backdropElement, dialog), container));
});
var propTypes = {
  /**
   * Set the visibility of the Modal
   */
  show: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * A DOM element, a `ref` to an element, or function that returns either. The Modal is appended to it's `container` element.
   *
   * For the sake of assistive technologies, the container should usually be the document body, so that the rest of the
   * page content can be placed behind a virtual backdrop as well as a visual one.
   */
  container: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.any,

  /**
   * A callback fired when the Modal is opening.
   */
  onShow: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * A callback fired when either the backdrop is clicked, or the escape key is pressed.
   *
   * The `onHide` callback only signals intent from the Modal,
   * you must actually set the `show` prop to `false` for the Modal to close.
   */
  onHide: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Include a backdrop component.
   */
  backdrop: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool, __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.oneOf(['static'])]),

  /**
   * A function that returns the dialog component. Useful for custom
   * rendering. **Note:** the component should make sure to apply the provided ref.
   *
   * ```js static
   * renderDialog={props => <MyDialog {...props} />}
   * ```
   */
  renderDialog: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * A function that returns a backdrop component. Useful for custom
   * backdrop rendering.
   *
   * ```js
   *  renderBackdrop={props => <MyBackdrop {...props} />}
   * ```
   */
  renderBackdrop: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * A callback fired when the escape key, if specified in `keyboard`, is pressed.
   *
   * If preventDefault() is called on the keyboard event, closing the modal will be cancelled.
   */
  onEscapeKeyDown: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * A callback fired when the backdrop, if specified, is clicked.
   */
  onBackdropClick: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * A css class or set of classes applied to the modal container when the modal is open,
   * and removed when it is closed.
   */
  containerClassName: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.string,

  /**
   * Close the modal when escape key is pressed
   */
  keyboard: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the dialog component.
   */
  transition: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.elementType,

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component used
   * to control animations for the backdrop components.
   */
  backdropTransition: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.elementType,

  /**
   * When `true` The modal will automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes. This also
   * works correctly with any Modal children that have the `autoFocus` prop.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  autoFocus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * When `true` The modal will prevent focus from leaving the Modal while open.
   *
   * Generally this should never be set to `false` as it makes the Modal less
   * accessible to assistive technologies, like screen readers.
   */
  enforceFocus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * When `true` The modal will restore focus to previously focused element once
   * modal is hidden
   */
  restoreFocus: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool,

  /**
   * Options passed to focus function when `restoreFocus` is set to `true`
   *
   * @link  https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/focus#Parameters
   */
  restoreFocusOptions: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.shape({
    preventScroll: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.bool
  }),

  /**
   * Callback fired before the Modal transitions in
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Callback fired as the Modal begins to transition in
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning in
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Callback fired right before the Modal transitions out
   */
  onExit: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Callback fired as the Modal begins to transition out
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * Callback fired after the Modal finishes transitioning out
   */
  onExited: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.func,

  /**
   * A ModalManager instance used to track and manage the state of open
   * Modals. Useful when customizing how modals interact within a container
   */
  manager: __WEBPACK_IMPORTED_MODULE_6_prop_types___default.a.instanceOf(__WEBPACK_IMPORTED_MODULE_13__ModalManager__["a" /* default */])
};
Modal.displayName = 'Modal';
Modal.propTypes = propTypes;
/* harmony default export */ __webpack_exports__["a"] = (Object.assign(Modal, {
  Manager: __WEBPACK_IMPORTED_MODULE_13__ModalManager__["a" /* default */]
}));

/***/ }),
/* 279 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_prop_types__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom__ = __webpack_require__(16);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_react_dom__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__restart_hooks_useCallbackRef__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__restart_hooks_useMergedRefs__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__popper__ = __webpack_require__(166);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__usePopper__ = __webpack_require__(167);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__useRootClose__ = __webpack_require__(168);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__useWaitForDOMRef__ = __webpack_require__(169);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__mergeOptionsWithPopperConfig__ = __webpack_require__(165);













/**
 * Built on top of `Popper.js`, the overlay component is
 * great for custom tooltip overlays.
 */
var Overlay = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (props, outerRef) {
  var flip = props.flip,
      offset = props.offset,
      placement = props.placement,
      _props$containerPaddi = props.containerPadding,
      containerPadding = _props$containerPaddi === void 0 ? 5 : _props$containerPaddi,
      _props$popperConfig = props.popperConfig,
      popperConfig = _props$popperConfig === void 0 ? {} : _props$popperConfig,
      Transition = props.transition;

  var _useCallbackRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__restart_hooks_useCallbackRef__["a" /* default */])(),
      rootElement = _useCallbackRef[0],
      attachRef = _useCallbackRef[1];

  var _useCallbackRef2 = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__restart_hooks_useCallbackRef__["a" /* default */])(),
      arrowElement = _useCallbackRef2[0],
      attachArrowRef = _useCallbackRef2[1];

  var mergedRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_6__restart_hooks_useMergedRefs__["a" /* default */])(attachRef, outerRef);
  var container = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__useWaitForDOMRef__["a" /* default */])(props.container);
  var target = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_10__useWaitForDOMRef__["a" /* default */])(props.target);

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_3_react__["useState"])(!props.show),
      exited = _useState[0],
      setExited = _useState[1];

  var _usePopper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_8__usePopper__["a" /* default */])(target, rootElement, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_11__mergeOptionsWithPopperConfig__["a" /* default */])({
    placement: placement,
    enableEvents: !!props.show,
    containerPadding: containerPadding || 5,
    flip: flip,
    offset: offset,
    arrowElement: arrowElement,
    popperConfig: popperConfig
  })),
      styles = _usePopper.styles,
      attributes = _usePopper.attributes,
      popper = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_usePopper, ["styles", "attributes"]);

  if (props.show) {
    if (exited) setExited(false);
  } else if (!props.transition && !exited) {
    setExited(true);
  }

  var handleHidden = function handleHidden() {
    setExited(true);

    if (props.onExited) {
      props.onExited.apply(props, arguments);
    }
  }; // Don't un-render the overlay while it's transitioning out.


  var mountOverlay = props.show || Transition && !exited;
  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_9__useRootClose__["a" /* default */])(rootElement, props.onHide, {
    disabled: !props.rootClose || props.rootCloseDisabled,
    clickTrigger: props.rootCloseEvent
  });

  if (!mountOverlay) {
    // Don't bother showing anything if we don't have to.
    return null;
  }

  var child = props.children(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, popper, {
    show: !!props.show,
    props: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, attributes.popper, {
      style: styles.popper,
      ref: mergedRef
    }),
    arrowProps: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, attributes.arrow, {
      style: styles.arrow,
      ref: attachArrowRef
    })
  }));

  if (Transition) {
    var onExit = props.onExit,
        onExiting = props.onExiting,
        onEnter = props.onEnter,
        onEntering = props.onEntering,
        onEntered = props.onEntered;
    child = /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Transition, {
      "in": props.show,
      appear: true,
      onExit: onExit,
      onExiting: onExiting,
      onExited: handleHidden,
      onEnter: onEnter,
      onEntering: onEntering,
      onEntered: onEntered
    }, child);
  }

  return container ? /*#__PURE__*/__WEBPACK_IMPORTED_MODULE_4_react_dom___default.a.createPortal(child, container) : null;
});
Overlay.displayName = 'Overlay';
Overlay.propTypes = {
  /**
   * Set the visibility of the Overlay
   */
  show: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /** Specify where the overlay element is positioned in relation to the target element */
  placement: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(__WEBPACK_IMPORTED_MODULE_7__popper__["b" /* placements */]),

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `target` element is where
   * the overlay is positioned relative to.
   */
  target: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,

  /**
   * A DOM Element, Ref to an element, or function that returns either. The `container` will have the Portal children
   * appended to it.
   */
  container: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.any,

  /**
   * Enables the Popper.js `flip` modifier, allowing the Overlay to
   * automatically adjust it's placement in case of overlap with the viewport or toggle.
   * Refer to the [flip docs](https://popper.js.org/popper-documentation.html#modifiers..flip.enabled) for more info
   */
  flip: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * A render prop that returns an element to overlay and position. See
   * the [react-popper documentation](https://github.com/FezVrasta/react-popper#children) for more info.
   *
   * @type {Function ({
   *   show: boolean,
   *   placement: Placement,
   *   update: () => void,
   *   forceUpdate: () => void,
   *   props: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     aria-labelledby: ?string
   *     [string]: string | number,
   *   },
   *   arrowProps: {
   *     ref: (?HTMLElement) => void,
   *     style: { [string]: string | number },
   *     [string]: string | number,
   *   },
   * }) => React.Element}
   */
  children: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.isRequired,

  /**
   * Control how much space there is between the edge of the boundary element and overlay.
   * A convenience shortcut to setting `popperConfig.modfiers.preventOverflow.padding`
   */
  containerPadding: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.number,

  /**
   * A set of popper options and props passed directly to react-popper's Popper component.
   */
  popperConfig: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.object,

  /**
   * Specify whether the overlay should trigger `onHide` when the user clicks outside the overlay
   */
  rootClose: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * Specify event for toggling overlay
   */
  rootCloseEvent: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.oneOf(['click', 'mousedown']),

  /**
   * Specify disabled for disable RootCloseWrapper
   */
  rootCloseDisabled: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.bool,

  /**
   * A Callback fired by the Overlay when it wishes to be hidden.
   *
   * __required__ when `rootClose` is `true`.
   *
   * @type func
   */
  onHide: function onHide(props) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (props.rootClose) {
      var _PropTypes$func;

      return (_PropTypes$func = __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func).isRequired.apply(_PropTypes$func, [props].concat(args));
    }

    return __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func.apply(__WEBPACK_IMPORTED_MODULE_2_prop_types___default.a, [props].concat(args));
  },

  /**
   * A `react-transition-group@2.0.0` `<Transition/>` component
   * used to animate the overlay as it changes visibility.
   */
  // @ts-ignore
  transition: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.elementType,

  /**
   * Callback fired before the Overlay transitions in
   */
  onEnter: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition in
   */
  onEntering: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning in
   */
  onEntered: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired right before the Overlay transitions out
   */
  onExit: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired as the Overlay begins to transition out
   */
  onExiting: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func,

  /**
   * Callback fired after the Overlay finishes transitioning out
   */
  onExited: __WEBPACK_IMPORTED_MODULE_2_prop_types___default.a.func
};
/* harmony default export */ __webpack_exports__["a"] = (Overlay);

/***/ }),
/* 280 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = isOverflowing;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_helpers_isWindow__ = __webpack_require__(215);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_dom_helpers_ownerDocument__ = __webpack_require__(25);



function isBody(node) {
  return node && node.tagName.toLowerCase() === 'body';
}

function bodyIsOverflowing(node) {
  var doc = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_dom_helpers_isWindow__["a" /* default */])(node) ? __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_ownerDocument__["a" /* default */])() : __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1_dom_helpers_ownerDocument__["a" /* default */])(node);
  var win = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_dom_helpers_isWindow__["a" /* default */])(node) || doc.defaultView;
  return doc.body.clientWidth < win.innerWidth;
}

function isOverflowing(container) {
  var win = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_dom_helpers_isWindow__["a" /* default */])(container);
  return win || isBody(container) ? bodyIsOverflowing(container) : container.scrollHeight > container.clientHeight;
}

/***/ }),
/* 281 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["c"] = ariaHidden;
/* harmony export (immutable) */ __webpack_exports__["a"] = hideSiblings;
/* harmony export (immutable) */ __webpack_exports__["b"] = showSiblings;
var BLACKLIST = ['template', 'script', 'style'];

var isHidable = function isHidable(_ref) {
  var nodeType = _ref.nodeType,
      tagName = _ref.tagName;
  return nodeType === 1 && BLACKLIST.indexOf(tagName.toLowerCase()) === -1;
};

var siblings = function siblings(container, exclude, cb) {
  [].forEach.call(container.children, function (node) {
    if (exclude.indexOf(node) === -1 && isHidable(node)) {
      cb(node);
    }
  });
};

function ariaHidden(hide, node) {
  if (!node) return;

  if (hide) {
    node.setAttribute('aria-hidden', 'true');
  } else {
    node.removeAttribute('aria-hidden');
  }
}
function hideSiblings(container, _ref2) {
  var dialog = _ref2.dialog,
      backdrop = _ref2.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(true, node);
  });
}
function showSiblings(container, _ref3) {
  var dialog = _ref3.dialog,
      backdrop = _ref3.backdrop;
  siblings(container, [dialog, backdrop], function (node) {
    return ariaHidden(false, node);
  });
}

/***/ }),
/* 282 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_dom_helpers_ownerDocument__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__safeFindDOMNode__ = __webpack_require__(107);


/* harmony default export */ __webpack_exports__["a"] = (function (componentOrElement) {
  return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0_dom_helpers_ownerDocument__["a" /* default */])(__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__safeFindDOMNode__["a" /* default */])(componentOrElement));
});

/***/ }),
/* 283 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);

/* harmony default export */ __webpack_exports__["a"] = (__WEBPACK_IMPORTED_MODULE_0_react___default.a.createContext(null));

/***/ }),
/* 284 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = ({
  disabled: false
});

/***/ }),
/* 285 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return timeoutsShape; });
/* unused harmony export classNamesShape */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_prop_types___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_prop_types__);

var timeoutsShape = process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  enter: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  exit: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number,
  appear: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.number
}).isRequired]) : null;
var classNamesShape = process.env.NODE_ENV !== 'production' ? __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.oneOfType([__WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string, __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  enter: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  exit: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  active: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
}), __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.shape({
  enter: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  enterDone: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  enterActive: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  exit: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  exitDone: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string,
  exitActive: __WEBPACK_IMPORTED_MODULE_0_prop_types___default.a.string
})]) : null;
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ }),
/* 286 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var SponsorSlider = /** @class */ (function (_super) {
    __extends(SponsorSlider, _super);
    function SponsorSlider() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SponsorSlider.prototype.shouldComponentUpdate = function (nextProps) {
        return nextProps.Sponsor !== this.props.Sponsor;
    };
    SponsorSlider.prototype.render = function () {
        return React.createElement("div", null,
            React.createElement("div", { className: "sponsorIntro" }, "This session is sponsored by:"),
            React.createElement("div", { className: "sponsorContent", dangerouslySetInnerHTML: { __html: this.props.Sponsor.Content } }));
    };
    return SponsorSlider;
}(React.PureComponent));
exports.default = SponsorSlider;


/***/ }),
/* 287 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var UpcomingSessions = /** @class */ (function (_super) {
    __extends(UpcomingSessions, _super);
    function UpcomingSessions() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    UpcomingSessions.prototype.shouldComponentUpdate = function (nextProps) {
        return nextProps.Session.title !== this.props.Session.title;
    };
    UpcomingSessions.prototype.render = function () {
        var _this = this;
        var sessions = this.props.Sessions.filter(function (x) { return x.id !== _this.props.Session.id && x.roomId == _this.props.Session.roomId && new Date(x.startsAt).toLocaleDateString() === new Date(_this.props.Session.startsAt).toLocaleDateString() && new Date(x.startsAt) > new Date(_this.props.Session.startsAt); });
        sessions = sessions.sort(function (a, b) { return new Date(a.startsAt).valueOf() - new Date(b.startsAt).valueOf(); });
        return React.createElement("div", null,
            React.createElement("div", { className: "upcomingIntro" }, "Upcoming sessions in this room:"),
            React.createElement("div", { className: "upcomingContent" },
                sessions.map(function (x) { return React.createElement("div", { className: "upcoming" },
                    React.createElement("span", { className: "upcomingTime" }, new Date(x.startsAt).toLocaleTimeString()),
                    " -",
                    React.createElement("span", { className: "upcomingTitle" }, x.title),
                    ":",
                    React.createElement("span", { className: "upcomingSpeaker" }, x.speakers.map(function (s) { return s.name; }).join(", "))); }),
                (sessions.length == 0) ? "No more content for today" : null));
    };
    return UpcomingSessions;
}(React.PureComponent));
exports.default = UpcomingSessions;


/***/ }),
/* 288 */,
/* 289 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(16);
var SessionIntro_1 = __webpack_require__(171);
ReactDOM.render(React.createElement(SessionIntro_1.default, null), document.getElementById("main"));


/***/ }),
/* 290 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return useUncontrolledProp; });
/* harmony export (immutable) */ __webpack_exports__["a"] = useUncontrolled;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__utils__ = __webpack_require__(170);



function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }




function useUncontrolledProp(propValue, defaultValue, handler) {
  var wasPropRef = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useRef"])(propValue !== undefined);

  var _useState = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useState"])(defaultValue),
      stateValue = _useState[0],
      setState = _useState[1];

  var isProp = propValue !== undefined;
  var wasProp = wasPropRef.current;
  wasPropRef.current = isProp;
  /**
   * If a prop switches from controlled to Uncontrolled
   * reset its value to the defaultValue
   */

  if (!isProp && wasProp && stateValue !== defaultValue) {
    setState(defaultValue);
  }

  return [isProp ? propValue : stateValue, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2_react__["useCallback"])(function (value) {
    for (var _len = arguments.length, args = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
      args[_key - 1] = arguments[_key];
    }

    if (handler) handler.apply(void 0, [value].concat(args));
    setState(value);
  }, [handler])];
}


function useUncontrolled(props, config) {
  return Object.keys(config).reduce(function (result, fieldName) {
    var _extends2;

    var _ref = result,
        defaultValue = _ref[__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* defaultKey */](fieldName)],
        propsValue = _ref[fieldName],
        rest = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_ref, [__WEBPACK_IMPORTED_MODULE_3__utils__["b" /* defaultKey */](fieldName), fieldName].map(_toPropertyKey));

    var handlerName = config[fieldName];

    var _useUncontrolledProp = useUncontrolledProp(propsValue, defaultValue, props[handlerName]),
        value = _useUncontrolledProp[0],
        handler = _useUncontrolledProp[1];

    return __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_extends__["a" /* default */])({}, rest, (_extends2 = {}, _extends2[fieldName] = value, _extends2[handlerName] = handler, _extends2));
  }, props);
}

/***/ }),
/* 291 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(process) {/* unused harmony export default */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_react_lifecycles_compat__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_invariant___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_invariant__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__utils__ = __webpack_require__(170);



var _jsxFileName = "/Users/jquense/src/uncontrollable/src/uncontrollable.js";




function uncontrollable(Component, controlledValues, methods) {
  if (methods === void 0) {
    methods = [];
  }

  var displayName = Component.displayName || Component.name || 'Component';
  var canAcceptRef = __WEBPACK_IMPORTED_MODULE_6__utils__["a" /* canAcceptRef */](Component);
  var controlledProps = Object.keys(controlledValues);
  var PROPS_TO_OMIT = controlledProps.map(__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* defaultKey */]);
  !(canAcceptRef || !methods.length) ? process.env.NODE_ENV !== "production" ? __WEBPACK_IMPORTED_MODULE_5_invariant___default()(false, '[uncontrollable] stateless function components cannot pass through methods ' + 'because they have no associated instances. Check component: ' + displayName + ', ' + 'attempting to pass through methods: ' + methods.join(', ')) : __WEBPACK_IMPORTED_MODULE_5_invariant___default()(false) : void 0;

  var UncontrolledComponent =
  /*#__PURE__*/
  function (_React$Component) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__babel_runtime_helpers_esm_inheritsLoose__["a" /* default */])(UncontrolledComponent, _React$Component);

    function UncontrolledComponent() {
      var _this;

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _React$Component.call.apply(_React$Component, [this].concat(args)) || this;
      _this.handlers = Object.create(null);
      controlledProps.forEach(function (propName) {
        var handlerName = controlledValues[propName];

        var handleChange = function handleChange(value) {
          if (_this.props[handlerName]) {
            var _this$props;

            _this._notifying = true;

            for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              args[_key2 - 1] = arguments[_key2];
            }

            (_this$props = _this.props)[handlerName].apply(_this$props, [value].concat(args));

            _this._notifying = false;
          }

          if (!_this.unmounted) _this.setState(function (_ref) {
            var _extends2;

            var values = _ref.values;
            return {
              values: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])(Object.create(null), values, (_extends2 = {}, _extends2[propName] = value, _extends2))
            };
          });
        };

        _this.handlers[handlerName] = handleChange;
      });
      if (methods.length) _this.attachRef = function (ref) {
        _this.inner = ref;
      };
      var values = Object.create(null);
      controlledProps.forEach(function (key) {
        values[key] = _this.props[__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* defaultKey */](key)];
      });
      _this.state = {
        values: values,
        prevProps: {}
      };
      return _this;
    }

    var _proto = UncontrolledComponent.prototype;

    _proto.shouldComponentUpdate = function shouldComponentUpdate() {
      //let setState trigger the update
      return !this._notifying;
    };

    UncontrolledComponent.getDerivedStateFromProps = function getDerivedStateFromProps(props, _ref2) {
      var values = _ref2.values,
          prevProps = _ref2.prevProps;
      var nextState = {
        values: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])(Object.create(null), values),
        prevProps: {}
      };
      controlledProps.forEach(function (key) {
        /**
         * If a prop switches from controlled to Uncontrolled
         * reset its value to the defaultValue
         */
        nextState.prevProps[key] = props[key];

        if (!__WEBPACK_IMPORTED_MODULE_6__utils__["c" /* isProp */](props, key) && __WEBPACK_IMPORTED_MODULE_6__utils__["c" /* isProp */](prevProps, key)) {
          nextState.values[key] = props[__WEBPACK_IMPORTED_MODULE_6__utils__["b" /* defaultKey */](key)];
        }
      });
      return nextState;
    };

    _proto.componentWillUnmount = function componentWillUnmount() {
      this.unmounted = true;
    };

    _proto.render = function render() {
      var _this2 = this;

      var _this$props2 = this.props,
          innerRef = _this$props2.innerRef,
          props = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__babel_runtime_helpers_esm_objectWithoutPropertiesLoose__["a" /* default */])(_this$props2, ["innerRef"]);

      PROPS_TO_OMIT.forEach(function (prop) {
        delete props[prop];
      });
      var newProps = {};
      controlledProps.forEach(function (propName) {
        var propValue = _this2.props[propName];
        newProps[propName] = propValue !== undefined ? propValue : _this2.state.values[propName];
      });
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(Component, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, newProps, this.handlers, {
        ref: innerRef || this.attachRef
      }));
    };

    return UncontrolledComponent;
  }(__WEBPACK_IMPORTED_MODULE_3_react___default.a.Component);

  __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_4_react_lifecycles_compat__["a" /* polyfill */])(UncontrolledComponent);
  UncontrolledComponent.displayName = "Uncontrolled(" + displayName + ")";
  UncontrolledComponent.propTypes = __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({
    innerRef: function innerRef() {}
  }, __WEBPACK_IMPORTED_MODULE_6__utils__["d" /* uncontrolledPropTypes */](controlledValues, displayName));
  methods.forEach(function (method) {
    UncontrolledComponent.prototype[method] = function $proxiedMethod() {
      var _this$inner;

      return (_this$inner = this.inner)[method].apply(_this$inner, arguments);
    };
  });
  var WrappedComponent = UncontrolledComponent;

  if (__WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef) {
    WrappedComponent = __WEBPACK_IMPORTED_MODULE_3_react___default.a.forwardRef(function (props, ref) {
      return __WEBPACK_IMPORTED_MODULE_3_react___default.a.createElement(UncontrolledComponent, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, props, {
        innerRef: ref,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 128
        },
        __self: this
      }));
    });
    WrappedComponent.propTypes = UncontrolledComponent.propTypes;
  }

  WrappedComponent.ControlledComponent = Component;
  /**
   * useful when wrapping a Component and you want to control
   * everything
   */

  WrappedComponent.deferControlTo = function (newComponent, additions, nextMethods) {
    if (additions === void 0) {
      additions = {};
    }

    return uncontrollable(newComponent, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__babel_runtime_helpers_esm_extends__["a" /* default */])({}, controlledValues, additions), nextMethods);
  };

  return WrappedComponent;
}
/* WEBPACK VAR INJECTION */}.call(__webpack_exports__, __webpack_require__(6)))

/***/ })
/******/ ]);