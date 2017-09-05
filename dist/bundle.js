var delivery =
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 59);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return root; });
/* harmony export (immutable) */ __webpack_exports__["a"] = Selection;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__select__ = __webpack_require__(188);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectAll__ = __webpack_require__(189);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filter__ = __webpack_require__(190);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__data__ = __webpack_require__(191);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__enter__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__exit__ = __webpack_require__(193);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__merge__ = __webpack_require__(194);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__order__ = __webpack_require__(195);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__sort__ = __webpack_require__(196);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__call__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__nodes__ = __webpack_require__(198);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__node__ = __webpack_require__(199);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__size__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__empty__ = __webpack_require__(201);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__each__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__attr__ = __webpack_require__(203);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__style__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__property__ = __webpack_require__(204);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__classed__ = __webpack_require__(205);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__text__ = __webpack_require__(206);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__html__ = __webpack_require__(207);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__raise__ = __webpack_require__(208);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__lower__ = __webpack_require__(209);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__append__ = __webpack_require__(210);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__insert__ = __webpack_require__(211);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__remove__ = __webpack_require__(212);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__datum__ = __webpack_require__(213);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__on__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__dispatch__ = __webpack_require__(214);






























var root = [null];

function Selection(groups, parents) {
  this._groups = groups;
  this._parents = parents;
}

function selection() {
  return new Selection([[document.documentElement]], root);
}

Selection.prototype = selection.prototype = {
  constructor: Selection,
  select: __WEBPACK_IMPORTED_MODULE_0__select__["a" /* default */],
  selectAll: __WEBPACK_IMPORTED_MODULE_1__selectAll__["a" /* default */],
  filter: __WEBPACK_IMPORTED_MODULE_2__filter__["a" /* default */],
  data: __WEBPACK_IMPORTED_MODULE_3__data__["a" /* default */],
  enter: __WEBPACK_IMPORTED_MODULE_4__enter__["b" /* default */],
  exit: __WEBPACK_IMPORTED_MODULE_5__exit__["a" /* default */],
  merge: __WEBPACK_IMPORTED_MODULE_6__merge__["a" /* default */],
  order: __WEBPACK_IMPORTED_MODULE_7__order__["a" /* default */],
  sort: __WEBPACK_IMPORTED_MODULE_8__sort__["a" /* default */],
  call: __WEBPACK_IMPORTED_MODULE_9__call__["a" /* default */],
  nodes: __WEBPACK_IMPORTED_MODULE_10__nodes__["a" /* default */],
  node: __WEBPACK_IMPORTED_MODULE_11__node__["a" /* default */],
  size: __WEBPACK_IMPORTED_MODULE_12__size__["a" /* default */],
  empty: __WEBPACK_IMPORTED_MODULE_13__empty__["a" /* default */],
  each: __WEBPACK_IMPORTED_MODULE_14__each__["a" /* default */],
  attr: __WEBPACK_IMPORTED_MODULE_15__attr__["a" /* default */],
  style: __WEBPACK_IMPORTED_MODULE_16__style__["a" /* default */],
  property: __WEBPACK_IMPORTED_MODULE_17__property__["a" /* default */],
  classed: __WEBPACK_IMPORTED_MODULE_18__classed__["a" /* default */],
  text: __WEBPACK_IMPORTED_MODULE_19__text__["a" /* default */],
  html: __WEBPACK_IMPORTED_MODULE_20__html__["a" /* default */],
  raise: __WEBPACK_IMPORTED_MODULE_21__raise__["a" /* default */],
  lower: __WEBPACK_IMPORTED_MODULE_22__lower__["a" /* default */],
  append: __WEBPACK_IMPORTED_MODULE_23__append__["a" /* default */],
  insert: __WEBPACK_IMPORTED_MODULE_24__insert__["a" /* default */],
  remove: __WEBPACK_IMPORTED_MODULE_25__remove__["a" /* default */],
  datum: __WEBPACK_IMPORTED_MODULE_26__datum__["a" /* default */],
  on: __WEBPACK_IMPORTED_MODULE_27__on__["a" /* default */],
  dispatch: __WEBPACK_IMPORTED_MODULE_28__dispatch__["a" /* default */]
};

/* unused harmony default export */ var _unused_webpack_default_export = (selection);


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var freeGlobal = __webpack_require__(35);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsNative = __webpack_require__(109),
    getValue = __webpack_require__(112);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var baseToString = __webpack_require__(66);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    getRawTag = __webpack_require__(69),
    objectToString = __webpack_require__(70);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),
/* 6 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var hasClass = function hasClass(elem, className) {
  return new RegExp(' ' + className + ' ').test(' ' + elem.className + ' ');
};

var addClass = function addClass(elem, className) {
  if (!hasClass(elem, className)) {
    elem.className += ' ' + className;
  }
};

var removeClass = function removeClass(elem, className) {
  var newClass = ' ' + elem.className.replace(/[\t\r\n]/g, ' ') + ' ';
  if (hasClass(elem, className)) {
    while (newClass.indexOf(' ' + className + ' ') >= 0) {
      newClass = newClass.replace(' ' + className + ' ', ' ');
    }
    elem.className = newClass.replace(/^\s+|\s+$/g, '');
  }
};

var escapeHtml = function escapeHtml(str) {
  var div = document.createElement('div');
  div.appendChild(document.createTextNode(str));
  return div.innerHTML;
};

var _show = function _show(elem) {
  elem.style.opacity = '';
  elem.style.display = 'block';
};

var show = function show(elems) {
  if (elems && !elems.length) {
    return _show(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _show(elems[i]);
  }
};

var _hide = function _hide(elem) {
  elem.style.opacity = '';
  elem.style.display = 'none';
};

var hide = function hide(elems) {
  if (elems && !elems.length) {
    return _hide(elems);
  }
  for (var i = 0; i < elems.length; ++i) {
    _hide(elems[i]);
  }
};

var isDescendant = function isDescendant(parent, child) {
  var node = child.parentNode;
  while (node !== null) {
    if (node === parent) {
      return true;
    }
    node = node.parentNode;
  }
  return false;
};

var getTopMargin = function getTopMargin(elem) {
  elem.style.left = '-9999px';
  elem.style.display = 'block';

  var height = elem.clientHeight,
      padding;
  if (typeof getComputedStyle !== 'undefined') {
    // IE 8
    padding = parseInt(getComputedStyle(elem).getPropertyValue('padding-top'), 10);
  } else {
    padding = parseInt(elem.currentStyle.padding);
  }

  elem.style.left = '';
  elem.style.display = 'none';
  return '-' + parseInt((height + padding) / 2) + 'px';
};

var fadeIn = function fadeIn(elem, interval) {
  if (+elem.style.opacity < 1) {
    interval = interval || 16;
    elem.style.opacity = 0;
    elem.style.display = 'block';
    var last = +new Date();
    var tick = (function (_tick) {
      function tick() {
        return _tick.apply(this, arguments);
      }

      tick.toString = function () {
        return _tick.toString();
      };

      return tick;
    })(function () {
      elem.style.opacity = +elem.style.opacity + (new Date() - last) / 100;
      last = +new Date();

      if (+elem.style.opacity < 1) {
        setTimeout(tick, interval);
      }
    });
    tick();
  }
  elem.style.display = 'block'; //fallback IE8
};

var fadeOut = function fadeOut(elem, interval) {
  interval = interval || 16;
  elem.style.opacity = 1;
  var last = +new Date();
  var tick = (function (_tick2) {
    function tick() {
      return _tick2.apply(this, arguments);
    }

    tick.toString = function () {
      return _tick2.toString();
    };

    return tick;
  })(function () {
    elem.style.opacity = +elem.style.opacity - (new Date() - last) / 100;
    last = +new Date();

    if (+elem.style.opacity > 0) {
      setTimeout(tick, interval);
    } else {
      elem.style.display = 'none';
    }
  });
  tick();
};

var fireClick = function fireClick(node) {
  // Taken from http://www.nonobtrusive.com/2011/11/29/programatically-fire-crossbrowser-click-event-with-javascript/
  // Then fixed for today's Chrome browser.
  if (typeof MouseEvent === 'function') {
    // Up-to-date approach
    var mevt = new MouseEvent('click', {
      view: window,
      bubbles: false,
      cancelable: true
    });
    node.dispatchEvent(mevt);
  } else if (document.createEvent) {
    // Fallback
    var evt = document.createEvent('MouseEvents');
    evt.initEvent('click', false, false);
    node.dispatchEvent(evt);
  } else if (document.createEventObject) {
    node.fireEvent('onclick');
  } else if (typeof node.onclick === 'function') {
    node.onclick();
  }
};

var stopEventPropagation = function stopEventPropagation(e) {
  // In particular, make sure the space bar doesn't scroll the main window.
  if (typeof e.stopPropagation === 'function') {
    e.stopPropagation();
    e.preventDefault();
  } else if (window.event && window.event.hasOwnProperty('cancelBubble')) {
    window.event.cancelBubble = true;
  }
};

exports.hasClass = hasClass;
exports.addClass = addClass;
exports.removeClass = removeClass;
exports.escapeHtml = escapeHtml;
exports._show = _show;
exports.show = show;
exports._hide = _hide;
exports.hide = hide;
exports.isDescendant = isDescendant;
exports.getTopMargin = getTopMargin;
exports.fadeIn = fadeIn;
exports.fadeOut = fadeOut;
exports.fireClick = fireClick;
exports.stopEventPropagation = stopEventPropagation;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var listCacheClear = __webpack_require__(99),
    listCacheDelete = __webpack_require__(100),
    listCacheGet = __webpack_require__(101),
    listCacheHas = __webpack_require__(102),
    listCacheSet = __webpack_require__(103);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(18);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),
/* 11 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var isKeyable = __webpack_require__(121);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
/*
 * Allow user to pass their own params
 */
var extend = function extend(a, b) {
  for (var key in b) {
    if (b.hasOwnProperty(key)) {
      a[key] = b[key];
    }
  }
  return a;
};

/*
 * Convert HEX codes to RGB values (#000000 -> rgb(0,0,0))
 */
var hexToRgb = function hexToRgb(hex) {
  var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? parseInt(result[1], 16) + ', ' + parseInt(result[2], 16) + ', ' + parseInt(result[3], 16) : null;
};

/*
 * Check if the user is using Internet Explorer 8 (for fallbacks)
 */
var isIE8 = function isIE8() {
  return window.attachEvent && !window.addEventListener;
};

/*
 * IE compatible logging for developers
 */
var logStr = function logStr(string) {
  if (window.console) {
    // IE...
    window.console.log('SweetAlert: ' + string);
  }
};

/*
 * Set hover, active and focus-states for buttons 
 * (source: http://www.sitepoint.com/javascript-generate-lighter-darker-color)
 */
var colorLuminance = function colorLuminance(hex, lum) {
  // Validate hex string
  hex = String(hex).replace(/[^0-9a-f]/gi, '');
  if (hex.length < 6) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  lum = lum || 0;

  // Convert to decimal and change luminosity
  var rgb = '#';
  var c;
  var i;

  for (i = 0; i < 3; i++) {
    c = parseInt(hex.substr(i * 2, 2), 16);
    c = Math.round(Math.min(Math.max(0, c + c * lum), 255)).toString(16);
    rgb += ('00' + c).substr(c.length);
  }

  return rgb;
};

exports.extend = extend;
exports.hexToRgb = hexToRgb;
exports.isIE8 = isIE8;
exports.logStr = logStr;
exports.colorLuminance = colorLuminance;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _hexToRgb = __webpack_require__(15);

var _removeClass$getTopMargin$fadeIn$show$addClass = __webpack_require__(7);

var _defaultParams = __webpack_require__(53);

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

/*
 * Add modal + overlay to DOM
 */

var _injectedHTML = __webpack_require__(179);

var _injectedHTML2 = _interopRequireWildcard(_injectedHTML);

var modalClass = '.sweet-alert';
var overlayClass = '.sweet-overlay';

var sweetAlertInitialize = function sweetAlertInitialize() {
  var sweetWrap = document.createElement('div');
  sweetWrap.innerHTML = _injectedHTML2['default'];

  // Append elements to body
  while (sweetWrap.firstChild) {
    document.body.appendChild(sweetWrap.firstChild);
  }
};

/*
 * Get DOM element of modal
 */
var getModal = (function (_getModal) {
  function getModal() {
    return _getModal.apply(this, arguments);
  }

  getModal.toString = function () {
    return _getModal.toString();
  };

  return getModal;
})(function () {
  var $modal = document.querySelector(modalClass);

  if (!$modal) {
    sweetAlertInitialize();
    $modal = getModal();
  }

  return $modal;
});

/*
 * Get DOM element of input (in modal)
 */
var getInput = function getInput() {
  var $modal = getModal();
  if ($modal) {
    return $modal.querySelector('input');
  }
};

/*
 * Get DOM element of overlay
 */
var getOverlay = function getOverlay() {
  return document.querySelector(overlayClass);
};

/*
 * Add box-shadow style to button (depending on its chosen bg-color)
 */
var setFocusStyle = function setFocusStyle($button, bgColor) {
  var rgbColor = _hexToRgb.hexToRgb(bgColor);
  $button.style.boxShadow = '0 0 2px rgba(' + rgbColor + ', 0.8), inset 0 0 0 1px rgba(0, 0, 0, 0.05)';
};

/*
 * Animation when opening modal
 */
var openModal = function openModal(callback) {
  var $modal = getModal();
  _removeClass$getTopMargin$fadeIn$show$addClass.fadeIn(getOverlay(), 10);
  _removeClass$getTopMargin$fadeIn$show$addClass.show($modal);
  _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'showSweetAlert');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'hideSweetAlert');

  window.previousActiveElement = document.activeElement;
  var $okButton = $modal.querySelector('button.confirm');
  $okButton.focus();

  setTimeout(function () {
    _removeClass$getTopMargin$fadeIn$show$addClass.addClass($modal, 'visible');
  }, 500);

  var timer = $modal.getAttribute('data-timer');

  if (timer !== 'null' && timer !== '') {
    var timerCallback = callback;
    $modal.timeout = setTimeout(function () {
      var doneFunctionExists = (timerCallback || null) && $modal.getAttribute('data-has-done-function') === 'true';
      if (doneFunctionExists) {
        timerCallback(null);
      } else {
        sweetAlert.close();
      }
    }, timer);
  }
};

/*
 * Reset the styling of the input
 * (for example if errors have been shown)
 */
var resetInput = function resetInput() {
  var $modal = getModal();
  var $input = getInput();

  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($modal, 'show-input');
  $input.value = _defaultParams2['default'].inputValue;
  $input.setAttribute('type', _defaultParams2['default'].inputType);
  $input.setAttribute('placeholder', _defaultParams2['default'].inputPlaceholder);

  resetInputError();
};

var resetInputError = function resetInputError(event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _removeClass$getTopMargin$fadeIn$show$addClass.removeClass($errorContainer, 'show');
};

/*
 * Set "margin-top"-property on modal based on its computed height
 */
var fixVerticalPosition = function fixVerticalPosition() {
  var $modal = getModal();
  $modal.style.marginTop = _removeClass$getTopMargin$fadeIn$show$addClass.getTopMargin(getModal());
};

exports.sweetAlertInitialize = sweetAlertInitialize;
exports.getModal = getModal;
exports.getOverlay = getOverlay;
exports.getInput = getInput;
exports.setFocusStyle = setFocusStyle;
exports.openModal = openModal;
exports.resetInput = resetInput;
exports.resetInputError = resetInputError;
exports.fixVerticalPosition = fixVerticalPosition;

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),
/* 18 */
/***/ (function(module, exports) {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var mapCacheClear = __webpack_require__(113),
    mapCacheDelete = __webpack_require__(120),
    mapCacheGet = __webpack_require__(122),
    mapCacheHas = __webpack_require__(123),
    mapCacheSet = __webpack_require__(124);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var arrayLikeKeys = __webpack_require__(141),
    baseKeys = __webpack_require__(148),
    isArrayLike = __webpack_require__(24);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),
/* 22 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  length = length == null ? MAX_SAFE_INTEGER : length;
  return !!length &&
    (typeof value == 'number' || reIsUint.test(value)) &&
    (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),
/* 23 */
/***/ (function(module, exports) {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(41),
    isLength = __webpack_require__(23);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(17);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),
/* 26 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(27);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__namespaces__ = __webpack_require__(28);



function creatorInherit(name) {
  return function() {
    var document = this.ownerDocument,
        uri = this.namespaceURI;
    return uri === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */] && document.documentElement.namespaceURI === __WEBPACK_IMPORTED_MODULE_1__namespaces__["b" /* xhtml */]
        ? document.createElement(name)
        : document.createElementNS(uri, name);
  };
}

function creatorFixed(fullname) {
  return function() {
    return this.ownerDocument.createElementNS(fullname.space, fullname.local);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);
  return (fullname.local
      ? creatorFixed
      : creatorInherit)(fullname);
});


/***/ }),
/* 27 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespaces__ = __webpack_require__(28);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var prefix = name += "", i = prefix.indexOf(":");
  if (i >= 0 && (prefix = name.slice(0, i)) !== "xmlns") name = name.slice(i + 1);
  return __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */].hasOwnProperty(prefix) ? {space: __WEBPACK_IMPORTED_MODULE_0__namespaces__["a" /* default */][prefix], local: name} : name;
});


/***/ }),
/* 28 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return xhtml; });
var xhtml = "http://www.w3.org/1999/xhtml";

/* harmony default export */ __webpack_exports__["a"] = ({
  svg: "http://www.w3.org/2000/svg",
  xhtml: xhtml,
  xlink: "http://www.w3.org/1999/xlink",
  xml: "http://www.w3.org/XML/1998/namespace",
  xmlns: "http://www.w3.org/2000/xmlns/"
});


/***/ }),
/* 29 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_on__ = __webpack_require__(30);


/* harmony default export */ __webpack_exports__["a"] = (function() {
  var current = __WEBPACK_IMPORTED_MODULE_0__selection_on__["b" /* event */], source;
  while (source = current.sourceEvent) current = source;
  return current;
});


/***/ }),
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return event; });
/* unused harmony export customEvent */
var filterEvents = {};

var event = null;

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!("onmouseenter" in element)) {
    filterEvents = {mouseenter: "mouseover", mouseleave: "mouseout"};
  }
}

function filterContextListener(listener, index, group) {
  listener = contextListener(listener, index, group);
  return function(event) {
    var related = event.relatedTarget;
    if (!related || (related !== this && !(related.compareDocumentPosition(this) & 8))) {
      listener.call(this, event);
    }
  };
}

function contextListener(listener, index, group) {
  return function(event1) {
    var event0 = event; // Events can be reentrant (e.g., focus).
    event = event1;
    try {
      listener.call(this, this.__data__, index, group);
    } finally {
      event = event0;
    }
  };
}

function parseTypenames(typenames) {
  return typenames.trim().split(/^|\s+/).map(function(t) {
    var name = "", i = t.indexOf(".");
    if (i >= 0) name = t.slice(i + 1), t = t.slice(0, i);
    return {type: t, name: name};
  });
}

function onRemove(typename) {
  return function() {
    var on = this.__on;
    if (!on) return;
    for (var j = 0, i = -1, m = on.length, o; j < m; ++j) {
      if (o = on[j], (!typename.type || o.type === typename.type) && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
      } else {
        on[++i] = o;
      }
    }
    if (++i) on.length = i;
    else delete this.__on;
  };
}

function onAdd(typename, value, capture) {
  var wrap = filterEvents.hasOwnProperty(typename.type) ? filterContextListener : contextListener;
  return function(d, i, group) {
    var on = this.__on, o, listener = wrap(value, i, group);
    if (on) for (var j = 0, m = on.length; j < m; ++j) {
      if ((o = on[j]).type === typename.type && o.name === typename.name) {
        this.removeEventListener(o.type, o.listener, o.capture);
        this.addEventListener(o.type, o.listener = listener, o.capture = capture);
        o.value = value;
        return;
      }
    }
    this.addEventListener(typename.type, listener, capture);
    o = {type: typename.type, name: typename.name, value: value, listener: listener, capture: capture};
    if (!on) this.__on = [o];
    else on.push(o);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(typename, value, capture) {
  var typenames = parseTypenames(typename + ""), i, n = typenames.length, t;

  if (arguments.length < 2) {
    var on = this.node().__on;
    if (on) for (var j = 0, m = on.length, o; j < m; ++j) {
      for (i = 0, o = on[j]; i < n; ++i) {
        if ((t = typenames[i]).type === o.type && t.name === o.name) {
          return o.value;
        }
      }
    }
    return;
  }

  on = value ? onAdd : onRemove;
  if (capture == null) capture = false;
  for (i = 0; i < n; ++i) this.each(on(typenames[i], value, capture));
  return this;
});

function customEvent(event1, listener, that, args) {
  var event0 = event;
  event1.sourceEvent = event;
  event = event1;
  try {
    return listener.apply(that, args);
  } finally {
    event = event0;
  }
}


/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node, event) {
  var svg = node.ownerSVGElement || node;

  if (svg.createSVGPoint) {
    var point = svg.createSVGPoint();
    point.x = event.clientX, point.y = event.clientY;
    point = point.matrixTransform(node.getScreenCTM().inverse());
    return [point.x, point.y];
  }

  var rect = node.getBoundingClientRect();
  return [event.clientX - rect.left - node.clientLeft, event.clientY - rect.top - node.clientTop];
});


/***/ }),
/* 32 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function none() {}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? none : function() {
    return this.querySelector(selector);
  };
});


/***/ }),
/* 33 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(node) {
  return (node.ownerDocument && node.ownerDocument.defaultView) // node is a Node
      || (node.document && node) // node is a Window
      || node.defaultView; // node is a Document
});


/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var isDate = __webpack_require__(62)

var MILLISECONDS_IN_HOUR = 3600000
var MILLISECONDS_IN_MINUTE = 60000
var DEFAULT_ADDITIONAL_DIGITS = 2

var parseTokenDateTimeDelimeter = /[T ]/
var parseTokenPlainTime = /:/

// year tokens
var parseTokenYY = /^(\d{2})$/
var parseTokensYYY = [
  /^([+-]\d{2})$/, // 0 additional digits
  /^([+-]\d{3})$/, // 1 additional digit
  /^([+-]\d{4})$/ // 2 additional digits
]

var parseTokenYYYY = /^(\d{4})/
var parseTokensYYYYY = [
  /^([+-]\d{4})/, // 0 additional digits
  /^([+-]\d{5})/, // 1 additional digit
  /^([+-]\d{6})/ // 2 additional digits
]

// date tokens
var parseTokenMM = /^-(\d{2})$/
var parseTokenDDD = /^-?(\d{3})$/
var parseTokenMMDD = /^-?(\d{2})-?(\d{2})$/
var parseTokenWww = /^-?W(\d{2})$/
var parseTokenWwwD = /^-?W(\d{2})-?(\d{1})$/

// time tokens
var parseTokenHH = /^(\d{2}([.,]\d*)?)$/
var parseTokenHHMM = /^(\d{2}):?(\d{2}([.,]\d*)?)$/
var parseTokenHHMMSS = /^(\d{2}):?(\d{2}):?(\d{2}([.,]\d*)?)$/

// timezone tokens
var parseTokenTimezone = /([Z+-].*)$/
var parseTokenTimezoneZ = /^(Z)$/
var parseTokenTimezoneHH = /^([+-])(\d{2})$/
var parseTokenTimezoneHHMM = /^([+-])(\d{2}):?(\d{2})$/

/**
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If an argument is a string, the function tries to parse it.
 * Function accepts complete ISO 8601 formats as well as partial implementations.
 * ISO 8601: http://en.wikipedia.org/wiki/ISO_8601
 *
 * If all above fails, the function passes the given argument to Date constructor.
 *
 * @param {Date|String|Number} argument - the value to convert
 * @param {Object} [options] - the object with options
 * @param {0 | 1 | 2} [options.additionalDigits=2] - the additional number of digits in the extended year format
 * @returns {Date} the parsed date in the local time zone
 *
 * @example
 * // Convert string '2014-02-11T11:30:30' to date:
 * var result = parse('2014-02-11T11:30:30')
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Parse string '+02014101',
 * // if the additional number of digits in the extended year format is 1:
 * var result = parse('+02014101', {additionalDigits: 1})
 * //=> Fri Apr 11 2014 00:00:00
 */
function parse (argument, dirtyOptions) {
  if (isDate(argument)) {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime())
  } else if (typeof argument !== 'string') {
    return new Date(argument)
  }

  var options = dirtyOptions || {}
  var additionalDigits = options.additionalDigits
  if (additionalDigits == null) {
    additionalDigits = DEFAULT_ADDITIONAL_DIGITS
  } else {
    additionalDigits = Number(additionalDigits)
  }

  var dateStrings = splitDateString(argument)

  var parseYearResult = parseYear(dateStrings.date, additionalDigits)
  var year = parseYearResult.year
  var restDateString = parseYearResult.restDateString

  var date = parseDate(restDateString, year)

  if (date) {
    var timestamp = date.getTime()
    var time = 0
    var offset

    if (dateStrings.time) {
      time = parseTime(dateStrings.time)
    }

    if (dateStrings.timezone) {
      offset = parseTimezone(dateStrings.timezone)
    } else {
      // get offset accurate to hour in timezones that change offset
      offset = new Date(timestamp + time).getTimezoneOffset()
      offset = new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE).getTimezoneOffset()
    }

    return new Date(timestamp + time + offset * MILLISECONDS_IN_MINUTE)
  } else {
    return new Date(argument)
  }
}

function splitDateString (dateString) {
  var dateStrings = {}
  var array = dateString.split(parseTokenDateTimeDelimeter)
  var timeString

  if (parseTokenPlainTime.test(array[0])) {
    dateStrings.date = null
    timeString = array[0]
  } else {
    dateStrings.date = array[0]
    timeString = array[1]
  }

  if (timeString) {
    var token = parseTokenTimezone.exec(timeString)
    if (token) {
      dateStrings.time = timeString.replace(token[1], '')
      dateStrings.timezone = token[1]
    } else {
      dateStrings.time = timeString
    }
  }

  return dateStrings
}

function parseYear (dateString, additionalDigits) {
  var parseTokenYYY = parseTokensYYY[additionalDigits]
  var parseTokenYYYYY = parseTokensYYYYY[additionalDigits]

  var token

  // YYYY or ±YYYYY
  token = parseTokenYYYY.exec(dateString) || parseTokenYYYYY.exec(dateString)
  if (token) {
    var yearString = token[1]
    return {
      year: parseInt(yearString, 10),
      restDateString: dateString.slice(yearString.length)
    }
  }

  // YY or ±YYY
  token = parseTokenYY.exec(dateString) || parseTokenYYY.exec(dateString)
  if (token) {
    var centuryString = token[1]
    return {
      year: parseInt(centuryString, 10) * 100,
      restDateString: dateString.slice(centuryString.length)
    }
  }

  // Invalid ISO-formatted year
  return {
    year: null
  }
}

function parseDate (dateString, year) {
  // Invalid ISO-formatted year
  if (year === null) {
    return null
  }

  var token
  var date
  var month
  var week

  // YYYY
  if (dateString.length === 0) {
    date = new Date(0)
    date.setUTCFullYear(year)
    return date
  }

  // YYYY-MM
  token = parseTokenMM.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    date.setUTCFullYear(year, month)
    return date
  }

  // YYYY-DDD or YYYYDDD
  token = parseTokenDDD.exec(dateString)
  if (token) {
    date = new Date(0)
    var dayOfYear = parseInt(token[1], 10)
    date.setUTCFullYear(year, 0, dayOfYear)
    return date
  }

  // YYYY-MM-DD or YYYYMMDD
  token = parseTokenMMDD.exec(dateString)
  if (token) {
    date = new Date(0)
    month = parseInt(token[1], 10) - 1
    var day = parseInt(token[2], 10)
    date.setUTCFullYear(year, month, day)
    return date
  }

  // YYYY-Www or YYYYWww
  token = parseTokenWww.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    return dayOfISOYear(year, week)
  }

  // YYYY-Www-D or YYYYWwwD
  token = parseTokenWwwD.exec(dateString)
  if (token) {
    week = parseInt(token[1], 10) - 1
    var dayOfWeek = parseInt(token[2], 10) - 1
    return dayOfISOYear(year, week, dayOfWeek)
  }

  // Invalid ISO-formatted date
  return null
}

function parseTime (timeString) {
  var token
  var hours
  var minutes

  // hh
  token = parseTokenHH.exec(timeString)
  if (token) {
    hours = parseFloat(token[1].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR
  }

  // hh:mm or hhmm
  token = parseTokenHHMM.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseFloat(token[2].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE
  }

  // hh:mm:ss or hhmmss
  token = parseTokenHHMMSS.exec(timeString)
  if (token) {
    hours = parseInt(token[1], 10)
    minutes = parseInt(token[2], 10)
    var seconds = parseFloat(token[3].replace(',', '.'))
    return (hours % 24) * MILLISECONDS_IN_HOUR +
      minutes * MILLISECONDS_IN_MINUTE +
      seconds * 1000
  }

  // Invalid ISO-formatted time
  return null
}

function parseTimezone (timezoneString) {
  var token
  var absoluteOffset

  // Z
  token = parseTokenTimezoneZ.exec(timezoneString)
  if (token) {
    return 0
  }

  // ±hh
  token = parseTokenTimezoneHH.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  // ±hh:mm or ±hhmm
  token = parseTokenTimezoneHHMM.exec(timezoneString)
  if (token) {
    absoluteOffset = parseInt(token[2], 10) * 60 + parseInt(token[3], 10)
    return (token[1] === '+') ? -absoluteOffset : absoluteOffset
  }

  return 0
}

function dayOfISOYear (isoYear, week, day) {
  week = week || 0
  day = day || 0
  var date = new Date(0)
  date.setUTCFullYear(isoYear, 0, 4)
  var fourthOfJanuaryDay = date.getUTCDay() || 7
  var diff = week * 7 + day + 1 - fourthOfJanuaryDay
  date.setUTCDate(date.getUTCDate() + diff)
  return date
}

module.exports = parse


/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(67)))

/***/ }),
/* 36 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsZWJ = '\\u200d';

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboRange + rsVarRange + ']');

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

module.exports = hasUnicode;


/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isNil;
/**
 * Checks if `value` is `null` or `undefined`
 *
 * @ignore
 * @function isNil
 * @param {*} value The object to check
 * @return {boolean} Returns `true` is `value` is `undefined` or `null`, `false` otherwise
 */
function isNil(value) {
  return value === undefined || value === null;
}
module.exports = exports["default"];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = coerceToString;

var _is_nil = __webpack_require__(37);

var _is_nil2 = _interopRequireDefault(_is_nil);

var _is_string = __webpack_require__(93);

var _is_string2 = _interopRequireDefault(_is_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Get the string representation of the `value`.
 * Converts the `value` to string.
 * If `value` is `null` or `undefined`, return `defaultValue`.
 *
 * @ignore
 * @function toString
 * @param {*} value             The value to convert.
 * @param {*} [defaultValue=''] The default value to return.
 * @return {string|null}        Returns the string representation of `value`. Returns `defaultValue` if `value` is
 *                              `null` or `undefined`.
 */
function coerceToString(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';

  if ((0, _is_nil2.default)(value)) {
    return defaultValue;
  }
  if ((0, _is_string2.default)(value)) {
    return value;
  }
  return String(value);
}
module.exports = exports['default'];

/***/ }),
/* 39 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(9),
    stackClear = __webpack_require__(104),
    stackDelete = __webpack_require__(105),
    stackGet = __webpack_require__(106),
    stackHas = __webpack_require__(107),
    stackSet = __webpack_require__(108);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObject = __webpack_require__(11);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),
/* 42 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqualDeep = __webpack_require__(125),
    isObjectLike = __webpack_require__(6);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var SetCache = __webpack_require__(126),
    arraySome = __webpack_require__(39),
    cacheHas = __webpack_require__(129);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(array);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsArguments = __webpack_require__(143),
    isObjectLike = __webpack_require__(6);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var root = __webpack_require__(1),
    stubFalse = __webpack_require__(144);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports) {

module.exports = function(module) {
	if(!module.webpackPolyfill) {
		module.deprecate = function() {};
		module.paths = [];
		// module.parent = undefined by default
		if(!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};


/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsTypedArray = __webpack_require__(145),
    baseUnary = __webpack_require__(146),
    nodeUtil = __webpack_require__(147);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(11);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),
/* 50 */
/***/ (function(module, exports) {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(52),
    toKey = __webpack_require__(14);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

var isArray = __webpack_require__(2),
    isKey = __webpack_require__(25),
    stringToPath = __webpack_require__(160),
    toString = __webpack_require__(4);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});
var defaultParams = {
  title: '',
  text: '',
  type: null,
  allowOutsideClick: false,
  showConfirmButton: true,
  showCancelButton: false,
  closeOnConfirm: true,
  closeOnCancel: true,
  confirmButtonText: 'OK',
  confirmButtonColor: '#8CD4F5',
  cancelButtonText: 'Cancel',
  imageUrl: null,
  imageSize: null,
  timer: null,
  customClass: '',
  html: false,
  animation: true,
  allowEscapeKey: true,
  inputType: 'text',
  inputPlaceholder: '',
  inputValue: '',
  showLoaderOnConfirm: false
};

exports['default'] = defaultParams;
module.exports = exports['default'];

/***/ }),
/* 54 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var matcher = function(selector) {
  return function() {
    return this.matches(selector);
  };
};

if (typeof document !== "undefined") {
  var element = document.documentElement;
  if (!element.matches) {
    var vendorMatches = element.webkitMatchesSelector
        || element.msMatchesSelector
        || element.mozMatchesSelector
        || element.oMatchesSelector;
    matcher = function(selector) {
      return function() {
        return vendorMatches.call(this, selector);
      };
    };
  }
}

/* harmony default export */ __webpack_exports__["a"] = (matcher);


/***/ }),
/* 55 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function empty() {
  return [];
}

/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return selector == null ? empty : function() {
    return this.querySelectorAll(selector);
  };
});


/***/ }),
/* 56 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = EnterNode;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["b"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._enter || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});

function EnterNode(parent, datum) {
  this.ownerDocument = parent.ownerDocument;
  this.namespaceURI = parent.namespaceURI;
  this._next = null;
  this._parent = parent;
  this.__data__ = datum;
}

EnterNode.prototype = {
  constructor: EnterNode,
  appendChild: function(child) { return this._parent.insertBefore(child, this._next); },
  insertBefore: function(child, next) { return this._parent.insertBefore(child, next); },
  querySelector: function(selector) { return this._parent.querySelector(selector); },
  querySelectorAll: function(selector) { return this._parent.querySelectorAll(selector); }
};


/***/ }),
/* 57 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(update) {
  return new Array(update.length);
});


/***/ }),
/* 58 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export styleValue */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(33);


function styleRemove(name) {
  return function() {
    this.style.removeProperty(name);
  };
}

function styleConstant(name, value, priority) {
  return function() {
    this.style.setProperty(name, value, priority);
  };
}

function styleFunction(name, value, priority) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.style.removeProperty(name);
    else this.style.setProperty(name, v, priority);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value, priority) {
  return arguments.length > 1
      ? this.each((value == null
            ? styleRemove : typeof value === "function"
            ? styleFunction
            : styleConstant)(name, value, priority == null ? "" : priority))
      : styleValue(this.node(), name);
});

function styleValue(node, name) {
  return node.style.getPropertyValue(name)
      || Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node).getComputedStyle(node, null).getPropertyValue(name);
}


/***/ }),
/* 59 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__mod_date__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__mod_string__ = __webpack_require__(64);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mod_array__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__mod_alert__ = __webpack_require__(177);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__mod_chart__ = __webpack_require__(183);
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "date", function() { return __WEBPACK_IMPORTED_MODULE_0__mod_date__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "string", function() { return __WEBPACK_IMPORTED_MODULE_1__mod_string__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "array", function() { return __WEBPACK_IMPORTED_MODULE_2__mod_array__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "alert", function() { return __WEBPACK_IMPORTED_MODULE_3__mod_alert__; });
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "chart", function() { return __WEBPACK_IMPORTED_MODULE_4__mod_chart__; });








__WEBPACK_IMPORTED_MODULE_3__mod_alert__["show"]('hello World!', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris hendrerit libero vel sagittis tempor.', 'error')

console.log('### isFuture (date)')
console.log('31/11/2014 --> ' + __WEBPACK_IMPORTED_MODULE_0__mod_date__["isFuture"](new Date(2014, 11, 31)))
console.log('31/11/2019 --> ' + __WEBPACK_IMPORTED_MODULE_0__mod_date__["isFuture"](new Date(2019, 11, 31)))
console.log('Today --> ' + __WEBPACK_IMPORTED_MODULE_0__mod_date__["isFuture"](Date.now()))
console.log(' ')

console.log('### isAfter (date, dateToCompare)')
console.log('31/11/2014 - 31/11/2019 --> ' + __WEBPACK_IMPORTED_MODULE_0__mod_date__["isAfter"](new Date(2014, 11, 31), new Date(2019, 11, 31)))
console.log('31/11/2019 - 31/11/2014 --> ' + __WEBPACK_IMPORTED_MODULE_0__mod_date__["isAfter"](new Date(2019, 11, 31), new Date(2014, 11, 31)))
console.log('31/11/2014 - 31/11/2014 --> ' + __WEBPACK_IMPORTED_MODULE_0__mod_date__["isAfter"](new Date(2014, 11, 31), new Date(2014, 11, 31)))
console.log(' ')

var testString = 'Welcome to RegExr v2.1 by gskinner.com, proudly hosted by Media Temple!'

console.log('### properCase (string)')
console.log('String : ' + testString)
// console.log('stringToProperCase (OLD) --> ' + string.stringToProperCase(testString))
console.log('properCase (NEW) --> ' + __WEBPACK_IMPORTED_MODULE_1__mod_string__["properCase"](testString))
console.log(' ')

// titleCase function directly imported from Voca
console.log('### titleCase (string)')
console.log('String : ' + testString)
console.log('titleCase --> ' + __WEBPACK_IMPORTED_MODULE_1__mod_string__["titleCase"](testString))
console.log(' ')

var testArray = [{'a': 'toto'}, {'b': 'tata'}, {'c': 'tutu'}]
console.log('### inArray (collection, predicate)')
// console.log('Array : ' + _.toString(testArray))
console.log('{"a":"toto"} --> ' + __WEBPACK_IMPORTED_MODULE_2__mod_array__["inArray"](testArray, {'a': 'toto'}))
console.log('{"a":"tata"} --> ' + __WEBPACK_IMPORTED_MODULE_2__mod_array__["inArray"](testArray, {'b': 'toto'}))
console.log('{"b":"toto"} --> ' + __WEBPACK_IMPORTED_MODULE_2__mod_array__["inArray"](testArray, {'a': 'tata'}))
console.log(' ')

// -----------------------------------------------------------------
// -----------------------------------------------------------------
// -----------------------------------------------------------------
/*
function component () {
  var element = document.createElement('div')

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack!!!'], ' ')

  return element
}

document.body.appendChild(component())
*/


/***/ }),
/* 60 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_is_future__ = __webpack_require__(61);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_date_fns_is_future___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_date_fns_is_future__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_after__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_date_fns_is_after___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_date_fns_is_after__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "isFuture", function() { return __WEBPACK_IMPORTED_MODULE_0_date_fns_is_future___default.a; });
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "isAfter", function() { return __WEBPACK_IMPORTED_MODULE_1_date_fns_is_after___default.a; });



/**
 * Check if a given date is in the future.
 * @param {timestamp} date - The date to check.
 * @returns {boolean} - The date is in the future.
 */


/**
 * Check if the first date is after the second one.
 * @param {timestamp} date - The date that should be after the other one to return true.
 * @param {timestamp} dateToCompare - The date to compare with.
 * @returns {boolean} - The first date is after the second date.
 */



/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(34)

/**
 * @category Common Helpers
 * @summary Is the given date in the future?
 *
 * @description
 * Is the given date in the future?
 *
 * @param {Date|String|Number} date - the date to check
 * @returns {Boolean} the date is in the future
 *
 * @example
 * // If today is 6 October 2014, is 31 December 2014 in the future?
 * var result = isFuture(new Date(2014, 11, 31))
 * //=> true
 */
function isFuture (dirtyDate) {
  return parse(dirtyDate).getTime() > new Date().getTime()
}

module.exports = isFuture


/***/ }),
/* 62 */
/***/ (function(module, exports) {

/**
 * @category Common Helpers
 * @summary Is the given argument an instance of Date?
 *
 * @description
 * Is the given argument an instance of Date?
 *
 * @param {*} argument - the argument to check
 * @returns {Boolean} the given argument is an instance of Date
 *
 * @example
 * // Is 'mayonnaise' a Date?
 * var result = isDate('mayonnaise')
 * //=> false
 */
function isDate (argument) {
  return argument instanceof Date
}

module.exports = isDate


/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var parse = __webpack_require__(34)

/**
 * @category Common Helpers
 * @summary Is the first date after the second one?
 *
 * @description
 * Is the first date after the second one?
 *
 * @param {Date|String|Number} date - the date that should be after the other one to return true
 * @param {Date|String|Number} dateToCompare - the date to compare with
 * @returns {Boolean} the first date is after the second date
 *
 * @example
 * // Is 10 July 1989 after 11 February 1987?
 * var result = isAfter(new Date(1989, 6, 10), new Date(1987, 1, 11))
 * //=> true
 */
function isAfter (dirtyDate, dirtyDateToCompare) {
  var date = parse(dirtyDate)
  var dateToCompare = parse(dirtyDateToCompare)
  return date.getTime() > dateToCompare.getTime()
}

module.exports = isAfter


/***/ }),
/* 64 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["isEmpty"] = isEmpty;
/* harmony export (immutable) */ __webpack_exports__["properCase"] = properCase;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_toLower__ = __webpack_require__(65);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_toLower___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_toLower__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase__ = __webpack_require__(71);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_lodash_startCase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_voca_title_case__ = __webpack_require__(88);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_voca_title_case___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_voca_title_case__);
/* harmony reexport (default from non-hamory) */ __webpack_require__.d(__webpack_exports__, "titleCase", function() { return __WEBPACK_IMPORTED_MODULE_2_voca_title_case___default.a; });




/**
 * Check if a given string is empty.
 * @param {string} string - The string to check.
 * @returns {boolean} - Will evaluate to true if value is: null, undefined, NaN, empty string (""), 0 or false.
 */
function isEmpty (string) {
  // https://stackoverflow.com/questions/5515310/is-there-a-standard-function-to-check-for-null-undefined-or-blank-variables-in
  // https://codereview.stackexchange.com/questions/5572/string-isnullorempty-in-javascript
  return !string
}

/**
 * Convert a given string to title case.
 * @param {string} string - The string to convert to title case.
 * @returns {string} - Returns the title case string.
 */


/*
export function stringToProperCase (fp_sInput) {
  return fp_sInput.toLowerCase().replace(/(^|\s|[\-\,\.])\w/g, function (L) { return L.toUpperCase() }).replace(/ /g, ' ').replace(/\s+/g, ' ').trim()
}
*/

/**
 * Convert a string to the proper case.
 * @param  {string} string - The string to convert to title case.
 * @returns {string} - Returns the title case string.
 */
function properCase (string) {
  return __WEBPACK_IMPORTED_MODULE_1_lodash_startCase___default()(__WEBPACK_IMPORTED_MODULE_0_lodash_toLower___default()(string))
}

/*
export function capitalize (string) {
  var output = _
    .chain(string)
    .capitalize()
    .trim()
    .value()
  return output
}
*/


/***/ }),
/* 65 */
/***/ (function(module, exports, __webpack_require__) {

var toString = __webpack_require__(4);

/**
 * Converts `string`, as a whole, to lower case just like
 * [String#toLowerCase](https://mdn.io/toLowerCase).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the lower cased string.
 * @example
 *
 * _.toLower('--Foo-Bar--');
 * // => '--foo-bar--'
 *
 * _.toLower('fooBar');
 * // => 'foobar'
 *
 * _.toLower('__FOO_BAR__');
 * // => '__foo_bar__'
 */
function toLower(value) {
  return toString(value).toLowerCase();
}

module.exports = toLower;


/***/ }),
/* 66 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    arrayMap = __webpack_require__(68),
    isArray = __webpack_require__(2),
    isSymbol = __webpack_require__(17);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),
/* 67 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ }),
/* 68 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),
/* 70 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var createCompounder = __webpack_require__(72),
    upperFirst = __webpack_require__(81);

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

module.exports = startCase;


/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

var arrayReduce = __webpack_require__(73),
    deburr = __webpack_require__(74),
    words = __webpack_require__(77);

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]";

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

module.exports = createCompounder;


/***/ }),
/* 73 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array == null ? 0 : array.length;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

module.exports = arrayReduce;


/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

var deburrLetter = __webpack_require__(75),
    toString = __webpack_require__(4);

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange;

/** Used to compose unicode capture groups. */
var rsCombo = '[' + rsComboRange + ']';

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

module.exports = deburr;


/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

var basePropertyOf = __webpack_require__(76);

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 's'
};

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

module.exports = deburrLetter;


/***/ }),
/* 76 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

module.exports = basePropertyOf;


/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

var asciiWords = __webpack_require__(78),
    hasUnicodeWord = __webpack_require__(79),
    toString = __webpack_require__(4),
    unicodeWords = __webpack_require__(80);

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = words;


/***/ }),
/* 78 */
/***/ (function(module, exports) {

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

module.exports = asciiWords;


/***/ }),
/* 79 */
/***/ (function(module, exports) {

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

module.exports = hasUnicodeWord;


/***/ }),
/* 80 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsMiscLower = '(?:' + rsLower + '|' + rsMisc + ')',
    rsMiscUpper = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptContrLower = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptContrUpper = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsOrdLower = '\\d*(?:(?:1st|2nd|3rd|(?![123])\\dth)\\b)',
    rsOrdUpper = '\\d*(?:(?:1ST|2ND|3RD|(?![123])\\dTH)\\b)',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq;

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptContrLower + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsMiscUpper + '+' + rsOptContrUpper + '(?=' + [rsBreak, rsUpper + rsMiscLower, '$'].join('|') + ')',
  rsUpper + '?' + rsMiscLower + '+' + rsOptContrLower,
  rsUpper + '+' + rsOptContrUpper,
  rsOrdUpper,
  rsOrdLower,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

module.exports = unicodeWords;


/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

var createCaseFirst = __webpack_require__(82);

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

module.exports = upperFirst;


/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

var castSlice = __webpack_require__(83),
    hasUnicode = __webpack_require__(36),
    stringToArray = __webpack_require__(85),
    toString = __webpack_require__(4);

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

module.exports = createCaseFirst;


/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

var baseSlice = __webpack_require__(84);

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

module.exports = castSlice;


/***/ }),
/* 84 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

module.exports = baseSlice;


/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

var asciiToArray = __webpack_require__(86),
    hasUnicode = __webpack_require__(36),
    unicodeToArray = __webpack_require__(87);

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

module.exports = stringToArray;


/***/ }),
/* 86 */
/***/ (function(module, exports) {

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

module.exports = asciiToArray;


/***/ }),
/* 87 */
/***/ (function(module, exports) {

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f',
    reComboHalfMarksRange = '\\ufe20-\\ufe2f',
    rsComboSymbolsRange = '\\u20d0-\\u20ff',
    rsComboRange = rsComboMarksRange + reComboHalfMarksRange + rsComboSymbolsRange,
    rsVarRange = '\\ufe0e\\ufe0f';

/** Used to compose unicode capture groups. */
var rsAstral = '[' + rsAstralRange + ']',
    rsCombo = '[' + rsComboRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

module.exports = unicodeToArray;


/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = titleCase;

var _const_extended = __webpack_require__(89);

var _capitalize = __webpack_require__(91);

var _capitalize2 = _interopRequireDefault(_capitalize);

var _coerce_to_string = __webpack_require__(38);

var _coerce_to_string2 = _interopRequireDefault(_coerce_to_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts the subject to title case.
 *
 * @function titleCase
 * @static
 * @since 1.2.0
 * @memberOf Case
 * @param  {string} [subject=''] The string to convert to title case.
 * @param  {Array} [ignoreWords] The words that should not be capitalized.
 * @return {string}              Returns the title case string.
 * @example
 * v.titleCase('learning to fly');
 * // => 'Learning To Fly'
 *
 * v.titleCase('another brick in the wall', ['in', 'the']);
 * // => 'Another Brick in the Wall'
 */
function titleCase(subject, ignoreWords) {
  var subjectString = (0, _coerce_to_string2.default)(subject);
  var ignoreWordsArray = Array.isArray(ignoreWords) ? ignoreWords : [];
  var wordsRegExp = _const_extended.REGEXP_EXTENDED_ASCII.test(subjectString) ? _const_extended.REGEXP_LATIN_WORD : _const_extended.REGEXP_WORD;
  return subjectString.replace(wordsRegExp, function (word) {
    var lowerCaseWord = word.toLowerCase();
    return ignoreWordsArray.indexOf(lowerCaseWord) !== -1 ? lowerCaseWord : (0, _capitalize2.default)(lowerCaseWord, true);
  });
}
module.exports = exports['default'];

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.REGEXP_EXTENDED_ASCII = exports.REGEXP_ALPHA_DIGIT = exports.REGEXP_ALPHA = exports.REGEXP_LATIN_WORD = exports.REGEXP_WORD = undefined;

var _const = __webpack_require__(90);

/**
 * A regular expression to match the General Punctuation Unicode block
 *
 * @type {string}
 * @ignore
 */
var generalPunctuationBlock = '\\u2000-\\u206F';

/**
 * A regular expression to match non characters from from Basic Latin and Latin-1 Supplement Unicode blocks
 *
 * @type {string}
 * @ignore
 */
var nonCharacter = '\\x00-\\x2F\\x3A-\\x40\\x5B-\\x60\\x7b-\\xBF\\xD7\\xF7';

/**
 * A regular expression to match the dingbat Unicode block
 *
 * @type {string}
 * @ignore
 */
var dingbatBlock = '\\u2700-\\u27BF';

/**
 * A regular expression string that matches lower case letters: LATIN
 *
 * @type {string}
 * @ignore
 */
var lowerCaseLetter = 'a-z\\xB5\\xDF-\\xF6\\xF8-\\xFF\\u0101\\u0103\\u0105\\u0107\\u0109\\u010B\\u010D\\u010F\\u0111\\u0113\\u0115\\u0117\\u0119\\u011B\\u011D\\u011F\\u0121\\u0123\\u0125\\u0127\\u0129\\u012B\\u012D\\u012F\\u0131\\u0133\\u0135\\u0137\\u0138\\u013A\\u013C\\u013E\\u0140\\u0142\\u0144\\u0146\\u0148\\u0149\\u014B\\u014D\\u014F\\u0151\\u0153\\u0155\\u0157\\u0159\\u015B\\u015D\\u015F\\u0161\\u0163\\u0165\\u0167\\u0169\\u016B\\u016D\\u016F\\u0171\\u0173\\u0175\\u0177\\u017A\\u017C\\u017E-\\u0180\\u0183\\u0185\\u0188\\u018C\\u018D\\u0192\\u0195\\u0199-\\u019B\\u019E\\u01A1\\u01A3\\u01A5\\u01A8\\u01AA\\u01AB\\u01AD\\u01B0\\u01B4\\u01B6\\u01B9\\u01BA\\u01BD-\\u01BF\\u01C6\\u01C9\\u01CC\\u01CE\\u01D0\\u01D2\\u01D4\\u01D6\\u01D8\\u01DA\\u01DC\\u01DD\\u01DF\\u01E1\\u01E3\\u01E5\\u01E7\\u01E9\\u01EB\\u01ED\\u01EF\\u01F0\\u01F3\\u01F5\\u01F9\\u01FB\\u01FD\\u01FF\\u0201\\u0203\\u0205\\u0207\\u0209\\u020B\\u020D\\u020F\\u0211\\u0213\\u0215\\u0217\\u0219\\u021B\\u021D\\u021F\\u0221\\u0223\\u0225\\u0227\\u0229\\u022B\\u022D\\u022F\\u0231\\u0233-\\u0239\\u023C\\u023F\\u0240\\u0242\\u0247\\u0249\\u024B\\u024D\\u024F';

/**
 * A regular expression string that matches upper case letters: LATIN
 *
 * @type {string}
 * @ignore
 */
var upperCaseLetter = '\\x41-\\x5a\\xc0-\\xd6\\xd8-\\xde\\u0100\\u0102\\u0104\\u0106\\u0108\\u010a\\u010c\\u010e\\u0110\\u0112\\u0114\\u0116\\u0118\\u011a\\u011c\\u011e\\u0120\\u0122\\u0124\\u0126\\u0128\\u012a\\u012c\\u012e\\u0130\\u0132\\u0134\\u0136\\u0139\\u013b\\u013d\\u013f\\u0141\\u0143\\u0145\\u0147\\u014a\\u014c\\u014e\\u0150\\u0152\\u0154\\u0156\\u0158\\u015a\\u015c\\u015e\\u0160\\u0162\\u0164\\u0166\\u0168\\u016a\\u016c\\u016e\\u0170\\u0172\\u0174\\u0176\\u0178\\u0179\\u017b\\u017d\\u0181\\u0182\\u0184\\u0186\\u0187\\u0189-\\u018b\\u018e-\\u0191\\u0193\\u0194\\u0196-\\u0198\\u019c\\u019d\\u019f\\u01a0\\u01a2\\u01a4\\u01a6\\u01a7\\u01a9\\u01ac\\u01ae\\u01af\\u01b1-\\u01b3\\u01b5\\u01b7\\u01b8\\u01bc\\u01c4\\u01c5\\u01c7\\u01c8\\u01ca\\u01cb\\u01cd\\u01cf\\u01d1\\u01d3\\u01d5\\u01d7\\u01d9\\u01db\\u01de\\u01e0\\u01e2\\u01e4\\u01e6\\u01e8\\u01ea\\u01ec\\u01ee\\u01f1\\u01f2\\u01f4\\u01f6-\\u01f8\\u01fa\\u01fc\\u01fe\\u0200\\u0202\\u0204\\u0206\\u0208\\u020a\\u020c\\u020e\\u0210\\u0212\\u0214\\u0216\\u0218\\u021a\\u021c\\u021e\\u0220\\u0222\\u0224\\u0226\\u0228\\u022a\\u022c\\u022e\\u0230\\u0232\\u023a\\u023b\\u023d\\u023e\\u0241\\u0243-\\u0246\\u0248\\u024a\\u024c\\u024e';

/**
 * Regular expression to match Unicode words
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_WORD = exports.REGEXP_WORD = new RegExp('(?:[' + upperCaseLetter + '][' + _const.diacriticalMark + ']*)?(?:[' + lowerCaseLetter + '][' + _const.diacriticalMark + ']*)+|\
(?:[' + upperCaseLetter + '][' + _const.diacriticalMark + ']*)+(?![' + lowerCaseLetter + '])|\
[' + _const.digit + ']+|\
[' + dingbatBlock + ']|\
[^' + nonCharacter + generalPunctuationBlock + _const.whitespace + ']+', 'g');

/**
 * Regular expression to match words from Basic Latin and Latin-1 Supplement blocks
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_LATIN_WORD = exports.REGEXP_LATIN_WORD = /[A-Z\xC0-\xD6\xD8-\xDE]?[a-z\xDF-\xF6\xF8-\xFF]+|[A-Z\xC0-\xD6\xD8-\xDE]+(?![a-z\xDF-\xF6\xF8-\xFF])|\d+/g;

/**
 * Regular expression to match alpha characters
 *
 * @see http://stackoverflow.com/a/22075070/1894471
 * @type {RegExp}
 * @ignore
 */
var REGEXP_ALPHA = exports.REGEXP_ALPHA = new RegExp('^(?:[' + lowerCaseLetter + upperCaseLetter + '][' + _const.diacriticalMark + ']*)+$');

/**
 * Regular expression to match alpha and digit characters
 *
 * @see http://stackoverflow.com/a/22075070/1894471
 * @type {RegExp}
 * @ignore
 */
var REGEXP_ALPHA_DIGIT = exports.REGEXP_ALPHA_DIGIT = new RegExp('^((?:[' + lowerCaseLetter + upperCaseLetter + '][' + _const.diacriticalMark + ']*)|[' + _const.digit + '])+$');

/**
 * Regular expression to match Extended ASCII characters, i.e. the first 255
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_EXTENDED_ASCII = exports.REGEXP_EXTENDED_ASCII = /^[\x00-\xFF]*$/;

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * A regular expression string matching digits
 *
 * @type {string}
 * @ignore
 */
var digit = exports.digit = '\\d';

/**
 * A regular expression string matching whitespace
 *
 * @type {string}
 * @ignore
 */
var whitespace = exports.whitespace = '\\s\\uFEFF\\xA0';

/**
 * A regular expression string matching high surrogate
 *
 * @type {string}
 * @ignore
 */
var highSurrogate = exports.highSurrogate = '\\uD800-\\uDBFF';

/**
 * A regular expression string matching low surrogate
 *
 * @type {string}
 * @ignore
 */
var lowSurrogate = exports.lowSurrogate = '\\uDC00-\\uDFFF';

/**
 * A regular expression string matching diacritical mark
 *
 * @type {string}
 * @ignore
 */
var diacriticalMark = exports.diacriticalMark = '\\u0300-\\u036F\\u1AB0-\\u1AFF\\u1DC0-\\u1DFF\\u20D0-\\u20FF\\uFE20-\\uFE2F';

/**
 * A regular expression to match the base character for a combining mark
 *
 * @type {string}
 * @ignore
 */
var base = exports.base = '\\0-\\u02FF\\u0370-\\u1AAF\\u1B00-\\u1DBF\\u1E00-\\u20CF\\u2100-\\uD7FF\\uE000-\\uFE1F\\uFE30-\\uFFFF';

/**
 * Regular expression to match combining marks
 *
 * @see http://unicode.org/faq/char_combmark.html
 * @type {RegExp}
 * @ignore
 */
var REGEXP_COMBINING_MARKS = exports.REGEXP_COMBINING_MARKS = new RegExp('([' + base + ']|[' + highSurrogate + '][' + lowSurrogate + ']|[' + highSurrogate + '](?![' + lowSurrogate + '])|(?:[^' + highSurrogate + ']|^)[' + lowSurrogate + '])([' + diacriticalMark + ']+)', 'g');

/**
 * Regular expression to match surrogate pairs
 *
 * @see http://www.unicode.org/faq/utf_bom.html#utf16-2
 * @type {RegExp}
 * @ignore
 */
var REGEXP_SURROGATE_PAIRS = exports.REGEXP_SURROGATE_PAIRS = new RegExp('([' + highSurrogate + '])([' + lowSurrogate + '])', 'g');

/**
 * Regular expression to match an unicode character
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_UNICODE_CHARACTER = exports.REGEXP_UNICODE_CHARACTER = new RegExp('((?:[' + base + ']|[' + highSurrogate + '][' + lowSurrogate + ']|[' + highSurrogate + '](?![' + lowSurrogate + '])|(?:[^' + highSurrogate + ']|^)[' + lowSurrogate + '])(?:[' + diacriticalMark + ']+))|\
([' + highSurrogate + '][' + lowSurrogate + '])|\
([\\n\\r\\u2028\\u2029])|\
(.)', 'g');

/**
 * Regular expression to match whitespaces
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_WHITESPACE = exports.REGEXP_WHITESPACE = new RegExp('[' + whitespace + ']');

/**
 * Regular expression to match whitespaces from the left side
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_TRIM_LEFT = exports.REGEXP_TRIM_LEFT = new RegExp('^[' + whitespace + ']+');

/**
 * Regular expression to match whitespaces from the right side
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_TRIM_RIGHT = exports.REGEXP_TRIM_RIGHT = new RegExp('[' + whitespace + ']+$');

/**
 * Regular expression to match digit characters
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_DIGIT = exports.REGEXP_DIGIT = new RegExp('^' + digit + '+$');

/**
 * Regular expression to match regular expression special characters
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_SPECIAL_CHARACTERS = exports.REGEXP_SPECIAL_CHARACTERS = /[-[\]{}()*+!<=:?.\/\\^$|#,]/g;

/**
 * Regular expression to match not latin characters
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_NON_LATIN = exports.REGEXP_NON_LATIN = /[^A-Za-z0-9]/g;

/**
 * Regular expression to match HTML special characters.
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_HTML_SPECIAL_CHARACTERS = exports.REGEXP_HTML_SPECIAL_CHARACTERS = /[<>&"'`]/g;

/**
 * Regular expression to match sprintf format string
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_CONVERSION_SPECIFICATION = exports.REGEXP_CONVERSION_SPECIFICATION = /(%{1,2})(?:(\d+)\$)?(\+)?([ 0]|'.{1})?(-)?(\d+)?(?:\.(\d+))?([bcdiouxXeEfgGs])?/g;

/**
 * Regular expression to match trailing zeros in a number
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_TRAILING_ZEROS = exports.REGEXP_TRAILING_ZEROS = /\.?0+$/g;

/**
 * Regular expression to match flags from a regular expression.
 *
 * @type {RegExp}
 * @ignore
 */
var REGEXP_FLAGS = exports.REGEXP_FLAGS = /[gimuy]*$/;

/**
 * Regular expression to match a list of tags.
 *
 * @see https://html.spec.whatwg.org/multipage/syntax.html#syntax-tag-name
 * @type {RegExp}
 * @ignore
 */

var REGEXP_TAG_LIST = exports.REGEXP_TAG_LIST = /<([A-Za-z0-9]+)>/g;

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = capitalize;

var _coerce_to_boolean = __webpack_require__(92);

var _coerce_to_boolean2 = _interopRequireDefault(_coerce_to_boolean);

var _coerce_to_string = __webpack_require__(38);

var _coerce_to_string2 = _interopRequireDefault(_coerce_to_string);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts the first character of `subject` to upper case. If `restToLower` is `true`, convert the rest of
 * `subject` to lower case.
 *
 * @function capitalize
 * @static
 * @since 1.0.0
 * @memberOf Case
 * @param  {string}  [subject='']        The string to capitalize.
 * @param  {boolean} [restToLower=false] Convert the rest of `subject` to lower case.
 * @return {string}                      Returns the capitalized string.
 * @example
 * v.capitalize('apple');
 * // => 'Apple'
 *
 * v.capitalize('aPPle', true);
 * // => 'Apple'
 */
function capitalize(subject, restToLower) {
  var subjectString = (0, _coerce_to_string2.default)(subject);
  var restToLowerCaseBoolean = (0, _coerce_to_boolean2.default)(restToLower);
  if (subjectString === '') {
    return '';
  }
  if (restToLowerCaseBoolean) {
    subjectString = subjectString.toLowerCase();
  }
  return subjectString.substr(0, 1).toUpperCase() + subjectString.substr(1);
}
module.exports = exports['default'];

/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = coerceToBoolean;

var _is_nil = __webpack_require__(37);

var _is_nil2 = _interopRequireDefault(_is_nil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Converts the `value` to a boolean. If `value` is `undefined` or `null`, returns `defaultValue`.
 *
 * @ignore
 * @function toBoolean
 * @param {*} value The value to convert.
 * @param {boolean} [defaultValue=false] The default value.
 * @return {boolean} Returns the coercion to boolean.
 */
function coerceToBoolean(value) {
  var defaultValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if ((0, _is_nil2.default)(value)) {
    return defaultValue;
  }
  return Boolean(value);
}
module.exports = exports['default'];

/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = isString;
/**
 * Checks whether `subject` is a string primitive type.
 *
 * @function isString
 * @static
 * @since 1.0.0
 * @memberOf Query
 * @param {string} subject The value to verify.
 * @return {boolean} Returns `true` if `subject` is string primitive type or `false` otherwise.
 * @example
 * v.isString('vacation');
 * // => true
 *
 * v.isString(560);
 * // => false
 */
function isString(subject) {
  return typeof subject === 'string';
}
module.exports = exports['default'];

/***/ }),
/* 94 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["inArray"] = inArray;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_some__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_lodash_some___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_lodash_some__);
// import _ from 'lodash'


/**
 * Checks if predicate returns truthy for any element of collection. Iteration is stopped once predicate returns truthy.
 * @param {Array} collection - The collection to iterate over.
 * @param {Function} predicate - The function invoked per iteration.
 * @returns {boolean} - Returns true if any element passes the predicate check, else false.
 */
function inArray (collection, predicate) {
  return __WEBPACK_IMPORTED_MODULE_0_lodash_some___default()(collection, predicate)
}


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {

var arraySome = __webpack_require__(39),
    baseIteratee = __webpack_require__(96),
    baseSome = __webpack_require__(170),
    isArray = __webpack_require__(2),
    isIterateeCall = __webpack_require__(176);

/**
 * Checks if `predicate` returns truthy for **any** element of `collection`.
 * Iteration is stopped once `predicate` returns truthy. The predicate is
 * invoked with three arguments: (value, index|key, collection).
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [predicate=_.identity] The function invoked per iteration.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 * @example
 *
 * _.some([null, 0, 'yes', false], Boolean);
 * // => true
 *
 * var users = [
 *   { 'user': 'barney', 'active': true },
 *   { 'user': 'fred',   'active': false }
 * ];
 *
 * // The `_.matches` iteratee shorthand.
 * _.some(users, { 'user': 'barney', 'active': false });
 * // => false
 *
 * // The `_.matchesProperty` iteratee shorthand.
 * _.some(users, ['active', false]);
 * // => true
 *
 * // The `_.property` iteratee shorthand.
 * _.some(users, 'active');
 * // => true
 */
function some(collection, predicate, guard) {
  var func = isArray(collection) ? arraySome : baseSome;
  if (guard && isIterateeCall(collection, predicate, guard)) {
    predicate = undefined;
  }
  return func(collection, baseIteratee(predicate, 3));
}

module.exports = some;


/***/ }),
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var baseMatches = __webpack_require__(97),
    baseMatchesProperty = __webpack_require__(158),
    identity = __webpack_require__(166),
    isArray = __webpack_require__(2),
    property = __webpack_require__(167);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsMatch = __webpack_require__(98),
    getMatchData = __webpack_require__(157),
    matchesStrictComparable = __webpack_require__(50);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(40),
    baseIsEqual = __webpack_require__(43);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),
/* 99 */
/***/ (function(module, exports) {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),
/* 101 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),
/* 102 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),
/* 103 */
/***/ (function(module, exports, __webpack_require__) {

var assocIndexOf = __webpack_require__(10);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(9);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),
/* 105 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),
/* 106 */
/***/ (function(module, exports) {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),
/* 107 */
/***/ (function(module, exports) {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var ListCache = __webpack_require__(9),
    Map = __webpack_require__(19),
    MapCache = __webpack_require__(20);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),
/* 109 */
/***/ (function(module, exports, __webpack_require__) {

var isFunction = __webpack_require__(41),
    isMasked = __webpack_require__(110),
    isObject = __webpack_require__(11),
    toSource = __webpack_require__(42);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var coreJsData = __webpack_require__(111);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),
/* 112 */
/***/ (function(module, exports) {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

var Hash = __webpack_require__(114),
    ListCache = __webpack_require__(9),
    Map = __webpack_require__(19);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

var hashClear = __webpack_require__(115),
    hashDelete = __webpack_require__(116),
    hashGet = __webpack_require__(117),
    hashHas = __webpack_require__(118),
    hashSet = __webpack_require__(119);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),
/* 115 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),
/* 116 */
/***/ (function(module, exports) {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),
/* 117 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var nativeCreate = __webpack_require__(12);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),
/* 121 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

var getMapData = __webpack_require__(13);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

var Stack = __webpack_require__(40),
    equalArrays = __webpack_require__(44),
    equalByTag = __webpack_require__(130),
    equalObjects = __webpack_require__(134),
    getTag = __webpack_require__(152),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(46),
    isTypedArray = __webpack_require__(48);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(20),
    setCacheAdd = __webpack_require__(127),
    setCacheHas = __webpack_require__(128);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),
/* 127 */
/***/ (function(module, exports) {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),
/* 128 */
/***/ (function(module, exports) {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),
/* 129 */
/***/ (function(module, exports) {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

var Symbol = __webpack_require__(8),
    Uint8Array = __webpack_require__(131),
    eq = __webpack_require__(18),
    equalArrays = __webpack_require__(44),
    mapToArray = __webpack_require__(132),
    setToArray = __webpack_require__(133);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var root = __webpack_require__(1);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),
/* 132 */
/***/ (function(module, exports) {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),
/* 133 */
/***/ (function(module, exports) {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

var getAllKeys = __webpack_require__(135);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Assume cyclic values are equal.
  var stacked = stack.get(object);
  if (stacked && stack.get(other)) {
    return stacked == other;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetAllKeys = __webpack_require__(136),
    getSymbols = __webpack_require__(138),
    keys = __webpack_require__(21);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

var arrayPush = __webpack_require__(137),
    isArray = __webpack_require__(2);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),
/* 137 */
/***/ (function(module, exports) {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),
/* 138 */
/***/ (function(module, exports, __webpack_require__) {

var arrayFilter = __webpack_require__(139),
    stubArray = __webpack_require__(140);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),
/* 139 */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),
/* 140 */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),
/* 141 */
/***/ (function(module, exports, __webpack_require__) {

var baseTimes = __webpack_require__(142),
    isArguments = __webpack_require__(45),
    isArray = __webpack_require__(2),
    isBuffer = __webpack_require__(46),
    isIndex = __webpack_require__(22),
    isTypedArray = __webpack_require__(48);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),
/* 142 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),
/* 143 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),
/* 144 */
/***/ (function(module, exports) {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),
/* 145 */
/***/ (function(module, exports, __webpack_require__) {

var baseGetTag = __webpack_require__(5),
    isLength = __webpack_require__(23),
    isObjectLike = __webpack_require__(6);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),
/* 146 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),
/* 147 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(module) {var freeGlobal = __webpack_require__(35);

/** Detect free variable `exports`. */
var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && typeof module == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;

/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(47)(module)))

/***/ }),
/* 148 */
/***/ (function(module, exports, __webpack_require__) {

var isPrototype = __webpack_require__(149),
    nativeKeys = __webpack_require__(150);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),
/* 149 */
/***/ (function(module, exports) {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),
/* 150 */
/***/ (function(module, exports, __webpack_require__) {

var overArg = __webpack_require__(151);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),
/* 151 */
/***/ (function(module, exports) {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),
/* 152 */
/***/ (function(module, exports, __webpack_require__) {

var DataView = __webpack_require__(153),
    Map = __webpack_require__(19),
    Promise = __webpack_require__(154),
    Set = __webpack_require__(155),
    WeakMap = __webpack_require__(156),
    baseGetTag = __webpack_require__(5),
    toSource = __webpack_require__(42);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),
/* 153 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),
/* 154 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),
/* 155 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),
/* 156 */
/***/ (function(module, exports, __webpack_require__) {

var getNative = __webpack_require__(3),
    root = __webpack_require__(1);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),
/* 157 */
/***/ (function(module, exports, __webpack_require__) {

var isStrictComparable = __webpack_require__(49),
    keys = __webpack_require__(21);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),
/* 158 */
/***/ (function(module, exports, __webpack_require__) {

var baseIsEqual = __webpack_require__(43),
    get = __webpack_require__(159),
    hasIn = __webpack_require__(163),
    isKey = __webpack_require__(25),
    isStrictComparable = __webpack_require__(49),
    matchesStrictComparable = __webpack_require__(50),
    toKey = __webpack_require__(14);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),
/* 159 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(51);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),
/* 160 */
/***/ (function(module, exports, __webpack_require__) {

var memoizeCapped = __webpack_require__(161);

/** Used to match property names within property paths. */
var reLeadingDot = /^\./,
    rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (reLeadingDot.test(string)) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, string) {
    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),
/* 161 */
/***/ (function(module, exports, __webpack_require__) {

var memoize = __webpack_require__(162);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),
/* 162 */
/***/ (function(module, exports, __webpack_require__) {

var MapCache = __webpack_require__(20);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),
/* 163 */
/***/ (function(module, exports, __webpack_require__) {

var baseHasIn = __webpack_require__(164),
    hasPath = __webpack_require__(165);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),
/* 164 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),
/* 165 */
/***/ (function(module, exports, __webpack_require__) {

var castPath = __webpack_require__(52),
    isArguments = __webpack_require__(45),
    isArray = __webpack_require__(2),
    isIndex = __webpack_require__(22),
    isLength = __webpack_require__(23),
    toKey = __webpack_require__(14);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),
/* 166 */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),
/* 167 */
/***/ (function(module, exports, __webpack_require__) {

var baseProperty = __webpack_require__(168),
    basePropertyDeep = __webpack_require__(169),
    isKey = __webpack_require__(25),
    toKey = __webpack_require__(14);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),
/* 168 */
/***/ (function(module, exports) {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),
/* 169 */
/***/ (function(module, exports, __webpack_require__) {

var baseGet = __webpack_require__(51);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),
/* 170 */
/***/ (function(module, exports, __webpack_require__) {

var baseEach = __webpack_require__(171);

/**
 * The base implementation of `_.some` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function baseSome(collection, predicate) {
  var result;

  baseEach(collection, function(value, index, collection) {
    result = predicate(value, index, collection);
    return !result;
  });
  return !!result;
}

module.exports = baseSome;


/***/ }),
/* 171 */
/***/ (function(module, exports, __webpack_require__) {

var baseForOwn = __webpack_require__(172),
    createBaseEach = __webpack_require__(175);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),
/* 172 */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(173),
    keys = __webpack_require__(21);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),
/* 173 */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(174);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),
/* 174 */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),
/* 175 */
/***/ (function(module, exports, __webpack_require__) {

var isArrayLike = __webpack_require__(24);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),
/* 176 */
/***/ (function(module, exports, __webpack_require__) {

var eq = __webpack_require__(18),
    isArrayLike = __webpack_require__(24),
    isIndex = __webpack_require__(22),
    isObject = __webpack_require__(11);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),
/* 177 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (immutable) */ __webpack_exports__["show"] = show;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert__ = __webpack_require__(178);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_sweetalert___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_sweetalert__);


function show (title, text, type) {
  return __WEBPACK_IMPORTED_MODULE_0_sweetalert___default()({
    title: title,
    text: text,
    type: type,
    confirmButtonText: 'Ok'
  })
}


/***/ }),
/* 178 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = function (obj) { return obj && obj.__esModule ? obj : { 'default': obj }; };

Object.defineProperty(exports, '__esModule', {
  value: true
});
// SweetAlert
// 2014-2015 (c) - Tristan Edwards
// github.com/t4t5/sweetalert

/*
 * jQuery-like functions for manipulating the DOM
 */

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation = __webpack_require__(7);

/*
 * Handy utilities
 */

var _extend$hexToRgb$isIE8$logStr$colorLuminance = __webpack_require__(15);

/*
 *  Handle sweetAlert's DOM elements
 */

var _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition = __webpack_require__(16);

// Handle button events and keyboard events

var _handleButton$handleConfirm$handleCancel = __webpack_require__(180);

var _handleKeyDown = __webpack_require__(181);

var _handleKeyDown2 = _interopRequireWildcard(_handleKeyDown);

// Default values

var _defaultParams = __webpack_require__(53);

var _defaultParams2 = _interopRequireWildcard(_defaultParams);

var _setParameters = __webpack_require__(182);

var _setParameters2 = _interopRequireWildcard(_setParameters);

/*
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * (We also use window.previousActiveElement as a global variable)
 */
var previousWindowKeyDown;
var lastFocusedButton;

/*
 * Global sweetAlert function
 * (this is what the user calls)
 */
var sweetAlert, swal;

exports['default'] = sweetAlert = swal = function () {
  var customizations = arguments[0];

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(document.body, 'stop-scrolling');
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.resetInput();

  /*
   * Use argument if defined or default value from params object otherwise.
   * Supports the case where a default value is boolean true and should be
   * overridden by a corresponding explicit argument which is boolean false.
   */
  function argumentOrDefault(key) {
    var args = customizations;
    return args[key] === undefined ? _defaultParams2['default'][key] : args[key];
  }

  if (customizations === undefined) {
    _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert expects at least 1 attribute!');
    return false;
  }

  var params = _extend$hexToRgb$isIE8$logStr$colorLuminance.extend({}, _defaultParams2['default']);

  switch (typeof customizations) {

    // Ex: swal("Hello", "Just testing", "info");
    case 'string':
      params.title = customizations;
      params.text = arguments[1] || '';
      params.type = arguments[2] || '';
      break;

    // Ex: swal({ title:"Hello", text: "Just testing", type: "info" });
    case 'object':
      if (customizations.title === undefined) {
        _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Missing "title" argument!');
        return false;
      }

      params.title = customizations.title;

      for (var customName in _defaultParams2['default']) {
        params[customName] = argumentOrDefault(customName);
      }

      // Show "Confirm" instead of "OK" if cancel button is visible
      params.confirmButtonText = params.showCancelButton ? 'Confirm' : _defaultParams2['default'].confirmButtonText;
      params.confirmButtonText = argumentOrDefault('confirmButtonText');

      // Callback function when clicking on "OK"/"Cancel"
      params.doneFunction = arguments[1] || null;

      break;

    default:
      _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('Unexpected type of argument! Expected "string" or "object", got ' + typeof customizations);
      return false;

  }

  _setParameters2['default'](params);
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.fixVerticalPosition();
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.openModal(arguments[1]);

  // Modal interactions
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  /*
   * Make sure all modal buttons respond to all events
   */
  var $buttons = modal.querySelectorAll('button');
  var buttonEvents = ['onclick', 'onmouseover', 'onmouseout', 'onmousedown', 'onmouseup', 'onfocus'];
  var onButtonEvent = function onButtonEvent(e) {
    return _handleButton$handleConfirm$handleCancel.handleButton(e, params, modal);
  };

  for (var btnIndex = 0; btnIndex < $buttons.length; btnIndex++) {
    for (var evtIndex = 0; evtIndex < buttonEvents.length; evtIndex++) {
      var btnEvt = buttonEvents[evtIndex];
      $buttons[btnIndex][btnEvt] = onButtonEvent;
    }
  }

  // Clicking outside the modal dismisses it (if allowed by user)
  _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay().onclick = onButtonEvent;

  previousWindowKeyDown = window.onkeydown;

  var onKeyEvent = function onKeyEvent(e) {
    return _handleKeyDown2['default'](e, params, modal);
  };
  window.onkeydown = onKeyEvent;

  window.onfocus = function () {
    // When the user has focused away and focused back from the whole window.
    setTimeout(function () {
      // Put in a timeout to jump out of the event sequence.
      // Calling focus() in the event sequence confuses things.
      if (lastFocusedButton !== undefined) {
        lastFocusedButton.focus();
        lastFocusedButton = undefined;
      }
    }, 0);
  };

  // Show alert with enabled buttons always
  swal.enableButtons();
};

/*
 * Set default params for each popup
 * @param {Object} userParams
 */
sweetAlert.setDefaults = swal.setDefaults = function (userParams) {
  if (!userParams) {
    throw new Error('userParams is required');
  }
  if (typeof userParams !== 'object') {
    throw new Error('userParams has to be a object');
  }

  _extend$hexToRgb$isIE8$logStr$colorLuminance.extend(_defaultParams2['default'], userParams);
};

/*
 * Animation when closing modal
 */
sweetAlert.close = swal.close = function () {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(_sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getOverlay(), 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.fadeOut(modal, 5);
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'showSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass(modal, 'hideSweetAlert');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, 'visible');

  /*
   * Reset icon animations
   */
  var $successIcon = modal.querySelector('.sa-icon.sa-success');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon, 'animate');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-tip'), 'animateSuccessTip');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($successIcon.querySelector('.sa-long'), 'animateSuccessLong');

  var $errorIcon = modal.querySelector('.sa-icon.sa-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'animateErrorIcon');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon.querySelector('.sa-x-mark'), 'animateXMark');

  var $warningIcon = modal.querySelector('.sa-icon.sa-warning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon, 'pulseWarning');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-body'), 'pulseWarningIns');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($warningIcon.querySelector('.sa-dot'), 'pulseWarningIns');

  // Reset custom class (delay so that UI changes aren't visible)
  setTimeout(function () {
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(modal, customClass);
  }, 300);

  // Make page scrollable again
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass(document.body, 'stop-scrolling');

  // Reset the page to its previous state
  window.onkeydown = previousWindowKeyDown;
  if (window.previousActiveElement) {
    window.previousActiveElement.focus();
  }
  lastFocusedButton = undefined;
  clearTimeout(modal.timeout);

  return true;
};

/*
 * Validation of the input field is done by user
 * If something is wrong => call showInputError with errorMessage
 */
sweetAlert.showInputError = swal.showInputError = function (errorMessage) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorIcon, 'show');

  var $errorContainer = modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.addClass($errorContainer, 'show');

  $errorContainer.querySelector('p').innerHTML = errorMessage;

  setTimeout(function () {
    sweetAlert.enableButtons();
  }, 1);

  modal.querySelector('input').focus();
};

/*
 * Reset input error DOM elements
 */
sweetAlert.resetInputError = swal.resetInputError = function (event) {
  // If press enter => ignore
  if (event && event.keyCode === 13) {
    return false;
  }

  var $modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();

  var $errorIcon = $modal.querySelector('.sa-input-error');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorIcon, 'show');

  var $errorContainer = $modal.querySelector('.sa-error-container');
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide$isDescendant$getTopMargin$fadeIn$fadeOut$fireClick$stopEventPropagation.removeClass($errorContainer, 'show');
};

/*
 * Disable confirm and cancel buttons
 */
sweetAlert.disableButtons = swal.disableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = true;
  $cancelButton.disabled = true;
};

/*
 * Enable confirm and cancel buttons
 */
sweetAlert.enableButtons = swal.enableButtons = function (event) {
  var modal = _sweetAlertInitialize$getModal$getOverlay$getInput$setFocusStyle$openModal$resetInput$fixVerticalPosition.getModal();
  var $confirmButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  $confirmButton.disabled = false;
  $cancelButton.disabled = false;
};

if (typeof window !== 'undefined') {
  // The 'handle-click' module requires
  // that 'sweetAlert' was set as global.
  window.sweetAlert = window.swal = sweetAlert;
} else {
  _extend$hexToRgb$isIE8$logStr$colorLuminance.logStr('SweetAlert is a frontend module!');
}
module.exports = exports['default'];

/***/ }),
/* 179 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var injectedHTML =

// Dark overlay
"<div class=\"sweet-overlay\" tabIndex=\"-1\"></div>" +

// Modal
"<div class=\"sweet-alert\">" +

// Error icon
"<div class=\"sa-icon sa-error\">\n      <span class=\"sa-x-mark\">\n        <span class=\"sa-line sa-left\"></span>\n        <span class=\"sa-line sa-right\"></span>\n      </span>\n    </div>" +

// Warning icon
"<div class=\"sa-icon sa-warning\">\n      <span class=\"sa-body\"></span>\n      <span class=\"sa-dot\"></span>\n    </div>" +

// Info icon
"<div class=\"sa-icon sa-info\"></div>" +

// Success icon
"<div class=\"sa-icon sa-success\">\n      <span class=\"sa-line sa-tip\"></span>\n      <span class=\"sa-line sa-long\"></span>\n\n      <div class=\"sa-placeholder\"></div>\n      <div class=\"sa-fix\"></div>\n    </div>" + "<div class=\"sa-icon sa-custom\"></div>" +

// Title, text and input
"<h2>Title</h2>\n    <p>Text</p>\n    <fieldset>\n      <input type=\"text\" tabIndex=\"3\" />\n      <div class=\"sa-input-error\"></div>\n    </fieldset>" +

// Input errors
"<div class=\"sa-error-container\">\n      <div class=\"icon\">!</div>\n      <p>Not valid!</p>\n    </div>" +

// Cancel and confirm buttons
"<div class=\"sa-button-container\">\n      <button class=\"cancel\" tabIndex=\"2\">Cancel</button>\n      <div class=\"sa-confirm-button-container\">\n        <button class=\"confirm\" tabIndex=\"1\">OK</button>" +

// Loading animation
"<div class=\"la-ball-fall\">\n          <div></div>\n          <div></div>\n          <div></div>\n        </div>\n      </div>\n    </div>" +

// End of modal
"</div>";

exports["default"] = injectedHTML;
module.exports = exports["default"];

/***/ }),
/* 180 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _colorLuminance = __webpack_require__(15);

var _getModal = __webpack_require__(16);

var _hasClass$isDescendant = __webpack_require__(7);

/*
 * User clicked on "Confirm"/"OK" or "Cancel"
 */
var handleButton = function handleButton(event, params, modal) {
  var e = event || window.event;
  var target = e.target || e.srcElement;

  var targetedConfirm = target.className.indexOf('confirm') !== -1;
  var targetedOverlay = target.className.indexOf('sweet-overlay') !== -1;
  var modalIsVisible = _hasClass$isDescendant.hasClass(modal, 'visible');
  var doneFunctionExists = params.doneFunction && modal.getAttribute('data-has-done-function') === 'true';

  // Since the user can change the background-color of the confirm button programmatically,
  // we must calculate what the color should be on hover/active
  var normalColor, hoverColor, activeColor;
  if (targetedConfirm && params.confirmButtonColor) {
    normalColor = params.confirmButtonColor;
    hoverColor = _colorLuminance.colorLuminance(normalColor, -0.04);
    activeColor = _colorLuminance.colorLuminance(normalColor, -0.14);
  }

  function shouldSetConfirmButtonColor(color) {
    if (targetedConfirm && params.confirmButtonColor) {
      target.style.backgroundColor = color;
    }
  }

  switch (e.type) {
    case 'mouseover':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'mouseout':
      shouldSetConfirmButtonColor(normalColor);
      break;

    case 'mousedown':
      shouldSetConfirmButtonColor(activeColor);
      break;

    case 'mouseup':
      shouldSetConfirmButtonColor(hoverColor);
      break;

    case 'focus':
      var $confirmButton = modal.querySelector('button.confirm');
      var $cancelButton = modal.querySelector('button.cancel');

      if (targetedConfirm) {
        $cancelButton.style.boxShadow = 'none';
      } else {
        $confirmButton.style.boxShadow = 'none';
      }
      break;

    case 'click':
      var clickedOnModal = modal === target;
      var clickedOnModalChild = _hasClass$isDescendant.isDescendant(modal, target);

      // Ignore click outside if allowOutsideClick is false
      if (!clickedOnModal && !clickedOnModalChild && modalIsVisible && !params.allowOutsideClick) {
        break;
      }

      if (targetedConfirm && doneFunctionExists && modalIsVisible) {
        handleConfirm(modal, params);
      } else if (doneFunctionExists && modalIsVisible || targetedOverlay) {
        handleCancel(modal, params);
      } else if (_hasClass$isDescendant.isDescendant(modal, target) && target.tagName === 'BUTTON') {
        sweetAlert.close();
      }
      break;
  }
};

/*
 *  User clicked on "Confirm"/"OK"
 */
var handleConfirm = function handleConfirm(modal, params) {
  var callbackValue = true;

  if (_hasClass$isDescendant.hasClass(modal, 'show-input')) {
    callbackValue = modal.querySelector('input').value;

    if (!callbackValue) {
      callbackValue = '';
    }
  }

  params.doneFunction(callbackValue);

  if (params.closeOnConfirm) {
    sweetAlert.close();
  }
  // Disable cancel and confirm button if the parameter is true
  if (params.showLoaderOnConfirm) {
    sweetAlert.disableButtons();
  }
};

/*
 *  User clicked on "Cancel"
 */
var handleCancel = function handleCancel(modal, params) {
  // Check if callback function expects a parameter (to track cancel actions)
  var functionAsStr = String(params.doneFunction).replace(/\s/g, '');
  var functionHandlesCancel = functionAsStr.substring(0, 9) === 'function(' && functionAsStr.substring(9, 10) !== ')';

  if (functionHandlesCancel) {
    params.doneFunction(false);
  }

  if (params.closeOnCancel) {
    sweetAlert.close();
  }
};

exports['default'] = {
  handleButton: handleButton,
  handleConfirm: handleConfirm,
  handleCancel: handleCancel
};
module.exports = exports['default'];

/***/ }),
/* 181 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _stopEventPropagation$fireClick = __webpack_require__(7);

var _setFocusStyle = __webpack_require__(16);

var handleKeyDown = function handleKeyDown(event, params, modal) {
  var e = event || window.event;
  var keyCode = e.keyCode || e.which;

  var $okButton = modal.querySelector('button.confirm');
  var $cancelButton = modal.querySelector('button.cancel');
  var $modalButtons = modal.querySelectorAll('button[tabindex]');

  if ([9, 13, 32, 27].indexOf(keyCode) === -1) {
    // Don't do work on keys we don't care about.
    return;
  }

  var $targetElement = e.target || e.srcElement;

  var btnIndex = -1; // Find the button - note, this is a nodelist, not an array.
  for (var i = 0; i < $modalButtons.length; i++) {
    if ($targetElement === $modalButtons[i]) {
      btnIndex = i;
      break;
    }
  }

  if (keyCode === 9) {
    // TAB
    if (btnIndex === -1) {
      // No button focused. Jump to the confirm button.
      $targetElement = $okButton;
    } else {
      // Cycle to the next button
      if (btnIndex === $modalButtons.length - 1) {
        $targetElement = $modalButtons[0];
      } else {
        $targetElement = $modalButtons[btnIndex + 1];
      }
    }

    _stopEventPropagation$fireClick.stopEventPropagation(e);
    $targetElement.focus();

    if (params.confirmButtonColor) {
      _setFocusStyle.setFocusStyle($targetElement, params.confirmButtonColor);
    }
  } else {
    if (keyCode === 13) {
      if ($targetElement.tagName === 'INPUT') {
        $targetElement = $okButton;
        $okButton.focus();
      }

      if (btnIndex === -1) {
        // ENTER/SPACE clicked outside of a button.
        $targetElement = $okButton;
      } else {
        // Do nothing - let the browser handle it.
        $targetElement = undefined;
      }
    } else if (keyCode === 27 && params.allowEscapeKey === true) {
      $targetElement = $cancelButton;
      _stopEventPropagation$fireClick.fireClick($targetElement, e);
    } else {
      // Fallback - let the browser handle it.
      $targetElement = undefined;
    }
  }
};

exports['default'] = handleKeyDown;
module.exports = exports['default'];

/***/ }),
/* 182 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, '__esModule', {
  value: true
});

var _isIE8 = __webpack_require__(15);

var _getModal$getInput$setFocusStyle = __webpack_require__(16);

var _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide = __webpack_require__(7);

var alertTypes = ['error', 'warning', 'info', 'success', 'input', 'prompt'];

/*
 * Set type, text and actions on modal
 */
var setParameters = function setParameters(params) {
  var modal = _getModal$getInput$setFocusStyle.getModal();

  var $title = modal.querySelector('h2');
  var $text = modal.querySelector('p');
  var $cancelBtn = modal.querySelector('button.cancel');
  var $confirmBtn = modal.querySelector('button.confirm');

  /*
   * Title
   */
  $title.innerHTML = params.html ? params.title : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.title).split('\n').join('<br>');

  /*
   * Text
   */
  $text.innerHTML = params.html ? params.text : _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.text || '').split('\n').join('<br>');
  if (params.text) _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($text);

  /*
   * Custom class
   */
  if (params.customClass) {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, params.customClass);
    modal.setAttribute('data-custom-class', params.customClass);
  } else {
    // Find previously set classes and remove them
    var customClass = modal.getAttribute('data-custom-class');
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.removeClass(modal, customClass);
    modal.setAttribute('data-custom-class', '');
  }

  /*
   * Icon
   */
  _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide(modal.querySelectorAll('.sa-icon'));

  if (params.type && !_isIE8.isIE8()) {
    var _ret = (function () {

      var validType = false;

      for (var i = 0; i < alertTypes.length; i++) {
        if (params.type === alertTypes[i]) {
          validType = true;
          break;
        }
      }

      if (!validType) {
        logStr('Unknown alert type: ' + params.type);
        return {
          v: false
        };
      }

      var typesWithIcons = ['success', 'error', 'warning', 'info'];
      var $icon = undefined;

      if (typesWithIcons.indexOf(params.type) !== -1) {
        $icon = modal.querySelector('.sa-icon.' + 'sa-' + params.type);
        _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($icon);
      }

      var $input = _getModal$getInput$setFocusStyle.getInput();

      // Animate icon
      switch (params.type) {

        case 'success':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animate');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-tip'), 'animateSuccessTip');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-long'), 'animateSuccessLong');
          break;

        case 'error':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'animateErrorIcon');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-x-mark'), 'animateXMark');
          break;

        case 'warning':
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon, 'pulseWarning');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-body'), 'pulseWarningIns');
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass($icon.querySelector('.sa-dot'), 'pulseWarningIns');
          break;

        case 'input':
        case 'prompt':
          $input.setAttribute('type', params.inputType);
          $input.value = params.inputValue;
          $input.setAttribute('placeholder', params.inputPlaceholder);
          _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.addClass(modal, 'show-input');
          setTimeout(function () {
            $input.focus();
            $input.addEventListener('keyup', swal.resetInputError);
          }, 400);
          break;
      }
    })();

    if (typeof _ret === 'object') {
      return _ret.v;
    }
  }

  /*
   * Custom image
   */
  if (params.imageUrl) {
    var $customIcon = modal.querySelector('.sa-icon.sa-custom');

    $customIcon.style.backgroundImage = 'url(' + params.imageUrl + ')';
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.show($customIcon);

    var _imgWidth = 80;
    var _imgHeight = 80;

    if (params.imageSize) {
      var dimensions = params.imageSize.toString().split('x');
      var imgWidth = dimensions[0];
      var imgHeight = dimensions[1];

      if (!imgWidth || !imgHeight) {
        logStr('Parameter imageSize expects value with format WIDTHxHEIGHT, got ' + params.imageSize);
      } else {
        _imgWidth = imgWidth;
        _imgHeight = imgHeight;
      }
    }

    $customIcon.setAttribute('style', $customIcon.getAttribute('style') + 'width:' + _imgWidth + 'px; height:' + _imgHeight + 'px');
  }

  /*
   * Show cancel button?
   */
  modal.setAttribute('data-has-cancel-button', params.showCancelButton);
  if (params.showCancelButton) {
    $cancelBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($cancelBtn);
  }

  /*
   * Show confirm button?
   */
  modal.setAttribute('data-has-confirm-button', params.showConfirmButton);
  if (params.showConfirmButton) {
    $confirmBtn.style.display = 'inline-block';
  } else {
    _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.hide($confirmBtn);
  }

  /*
   * Custom text on cancel/confirm buttons
   */
  if (params.cancelButtonText) {
    $cancelBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.cancelButtonText);
  }
  if (params.confirmButtonText) {
    $confirmBtn.innerHTML = _hasClass$addClass$removeClass$escapeHtml$_show$show$_hide$hide.escapeHtml(params.confirmButtonText);
  }

  /*
   * Custom color on confirm button
   */
  if (params.confirmButtonColor) {
    // Set confirm button to selected background color
    $confirmBtn.style.backgroundColor = params.confirmButtonColor;

    // Set the confirm button color to the loading ring
    $confirmBtn.style.borderLeftColor = params.confirmLoadingButtonColor;
    $confirmBtn.style.borderRightColor = params.confirmLoadingButtonColor;

    // Set box-shadow to default focused button
    _getModal$getInput$setFocusStyle.setFocusStyle($confirmBtn, params.confirmButtonColor);
  }

  /*
   * Allow outside click
   */
  modal.setAttribute('data-allow-outside-click', params.allowOutsideClick);

  /*
   * Callback function
   */
  var hasDoneFunction = params.doneFunction ? true : false;
  modal.setAttribute('data-has-done-function', hasDoneFunction);

  /*
   * Animation
   */
  if (!params.animation) {
    modal.setAttribute('data-animation', 'none');
  } else if (typeof params.animation === 'string') {
    modal.setAttribute('data-animation', params.animation); // Custom animation
  } else {
    modal.setAttribute('data-animation', 'pop');
  }

  /*
   * Timer
   */
  modal.setAttribute('data-timer', params.timer);
};

exports['default'] = setParameters;
module.exports = exports['default'];

/***/ }),
/* 183 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_d3_selection__ = __webpack_require__(184);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_britecharts_dist_umd_bar_min__ = __webpack_require__(218);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_britecharts_dist_umd_bar_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_britecharts_dist_umd_bar_min__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_britecharts_dist_umd_mini_tooltip_min__ = __webpack_require__(219);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_britecharts_dist_umd_mini_tooltip_min___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_britecharts_dist_umd_mini_tooltip_min__);




// const bar = require('./../src/charts/bar');
// const miniTooltip = require('./../src/charts/mini-tooltip');
// const colors = require('./../src/charts/helpers/colors');
// const dataBuilder = require('./../test/fixtures/barChartDataBuilder');

const data = [
  {
    'name': 'Radiating',
    'value': 0.08167
  },
  {
    'name': 'Opalescent',
    'value': 0.0492
  },
  {
    'name': 'Shining',
    'value': 0.02782
  },
  {
    'name': 'Vibrant',
    'value': 0.04253
  },
  {
    'name': 'Vivid',
    'value': 0.02702
  },
  {
    'name': 'Brilliant',
    'value': 0.02288
  }
]

let barChart = new __WEBPACK_IMPORTED_MODULE_1_britecharts_dist_umd_bar_min___default.a()
let barContainer = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["a" /* select */]('.chart')
let containerWidth = barContainer.node() ? barContainer.node().getBoundingClientRect().width : false

let tooltip = __WEBPACK_IMPORTED_MODULE_2_britecharts_dist_umd_mini_tooltip_min___default()()
// tooltip.nameLabel('Hello')
let tooltipContainer

barChart
  .margin({
    left: 120,
    right: 20,
    top: 20,
    bottom: 20
  })
  .isHorizontal(true)
  .usePercentage(true)
  .percentageAxisToMaxRatio(1.3)
  .width(containerWidth)
  .height(300)
  .isAnimated(true)
  .on('customMouseOver', tooltip.show)
  .on('customMouseMove', tooltip.update)
  .on('customMouseOut', tooltip.hide)

barContainer.datum(data).call(barChart)

tooltipContainer = __WEBPACK_IMPORTED_MODULE_0_d3_selection__["a" /* select */]('.bar-chart .metadata-group')
tooltipContainer.datum([]).call(tooltip)

/*
d3.select('body')
  .append('svg')
  .attr('class', 'chart')
  .attr('width', '960')
  .attr('height', '500')

// https://bost.ocks.org/mike/bar/

var svg = d3.select('svg.chart')

var margin = {top: 20, right: 20, bottom: 30, left: 40}
var width = +svg.attr('width') - margin.left - margin.right
var height = +svg.attr('height') - margin.top - margin.bottom

var x = d3.scaleBand().rangeRound([0, width]).padding(0.1)
var y = d3.scaleLinear().rangeRound([height, 0])

var g = svg.append('g')
  .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')')

d3.tsv('data.tsv', function (d) {
  d.frequency = +d.frequency
  return d
}, function (error, data) {
  if (error) throw error

  x.domain(data.map(function (d) { return d.letter }))
  y.domain([0, d3.max(data, function (d) { return d.frequency })])

  g.append('g')
    .attr('class', 'axis axis--x')
    .attr('transform', 'translate(0,' + height + ')')
    .call(d3.axisBottom(x))

  g.append('g')
    .attr('class', 'axis axis--y')
    .call(d3.axisLeft(y).ticks(10, '%'))
    .append('text')
    .attr('transform', 'rotate(-90)')
    .attr('y', 6)
    .attr('dy', '0.71em')
    .attr('text-anchor', 'end')
    .text('Frequency')

  g.selectAll('.bar')
    .data(data)
    .enter().append('rect')
    .attr('class', 'bar')
    .attr('x', function (d) { return x(d.letter) })
    .attr('y', function (d) { return y(d.frequency) })
    .attr('width', x.bandwidth())
    .attr('height', function (d) { return height - y(d.frequency) })
})
*/


/***/ }),
/* 184 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_creator__ = __webpack_require__(26);
/* unused harmony reexport creator */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_local__ = __webpack_require__(185);
/* unused harmony reexport local */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_matcher__ = __webpack_require__(54);
/* unused harmony reexport matcher */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_mouse__ = __webpack_require__(186);
/* unused harmony reexport mouse */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_namespace__ = __webpack_require__(27);
/* unused harmony reexport namespace */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_namespaces__ = __webpack_require__(28);
/* unused harmony reexport namespaces */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_select__ = __webpack_require__(187);
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__src_select__["a"]; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_selectAll__ = __webpack_require__(215);
/* unused harmony reexport selectAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_selection_index__ = __webpack_require__(0);
/* unused harmony reexport selection */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_selector__ = __webpack_require__(32);
/* unused harmony reexport selector */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_selectorAll__ = __webpack_require__(55);
/* unused harmony reexport selectorAll */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_selection_style__ = __webpack_require__(58);
/* unused harmony reexport style */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_touch__ = __webpack_require__(216);
/* unused harmony reexport touch */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_touches__ = __webpack_require__(217);
/* unused harmony reexport touches */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_window__ = __webpack_require__(33);
/* unused harmony reexport window */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_selection_on__ = __webpack_require__(30);
/* unused harmony reexport event */
/* unused harmony reexport customEvent */


















/***/ }),
/* 185 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export default */
var nextId = 0;

function local() {
  return new Local;
}

function Local() {
  this._ = "@" + (++nextId).toString(36);
}

Local.prototype = local.prototype = {
  constructor: Local,
  get: function(node) {
    var id = this._;
    while (!(id in node)) if (!(node = node.parentNode)) return;
    return node[id];
  },
  set: function(node, value) {
    return node[this._] = value;
  },
  remove: function(node) {
    return this._ in node && delete node[this._];
  },
  toString: function() {
    return this._;
  }
};


/***/ }),
/* 186 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(31);



/* unused harmony default export */ var _unused_webpack_default_export = (function(node) {
  var event = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])();
  if (event.changedTouches) event = event.changedTouches[0];
  return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, event);
});


/***/ }),
/* 187 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[document.querySelector(selector)]], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([[selector]], __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* root */]);
});


/***/ }),
/* 188 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(32);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = new Array(n), node, subnode, i = 0; i < n; ++i) {
      if ((node = group[i]) && (subnode = select.call(node, node.__data__, i, group))) {
        if ("__data__" in node) subnode.__data__ = node.__data__;
        subgroup[i] = subnode;
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 189 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selectorAll__ = __webpack_require__(55);



/* harmony default export */ __webpack_exports__["a"] = (function(select) {
  if (typeof select !== "function") select = Object(__WEBPACK_IMPORTED_MODULE_1__selectorAll__["a" /* default */])(select);

  for (var groups = this._groups, m = groups.length, subgroups = [], parents = [], j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        subgroups.push(select.call(node, node.__data__, i, group));
        parents.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, parents);
});


/***/ }),
/* 190 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__matcher__ = __webpack_require__(54);



/* harmony default export */ __webpack_exports__["a"] = (function(match) {
  if (typeof match !== "function") match = Object(__WEBPACK_IMPORTED_MODULE_1__matcher__["a" /* default */])(match);

  for (var groups = this._groups, m = groups.length, subgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, subgroup = subgroups[j] = [], node, i = 0; i < n; ++i) {
      if ((node = group[i]) && match.call(node, node.__data__, i, group)) {
        subgroup.push(node);
      }
    }
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](subgroups, this._parents);
});


/***/ }),
/* 191 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__enter__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__constant__ = __webpack_require__(192);




var keyPrefix = "$"; // Protect against keys like “__proto__”.

function bindIndex(parent, group, enter, update, exit, data) {
  var i = 0,
      node,
      groupLength = group.length,
      dataLength = data.length;

  // Put any non-null nodes that fit into update.
  // Put any null nodes into enter.
  // Put any remaining data into enter.
  for (; i < dataLength; ++i) {
    if (node = group[i]) {
      node.__data__ = data[i];
      update[i] = node;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Put any non-null nodes that don’t fit into exit.
  for (; i < groupLength; ++i) {
    if (node = group[i]) {
      exit[i] = node;
    }
  }
}

function bindKey(parent, group, enter, update, exit, data, key) {
  var i,
      node,
      nodeByKeyValue = {},
      groupLength = group.length,
      dataLength = data.length,
      keyValues = new Array(groupLength),
      keyValue;

  // Compute the key for each node.
  // If multiple nodes have the same key, the duplicates are added to exit.
  for (i = 0; i < groupLength; ++i) {
    if (node = group[i]) {
      keyValues[i] = keyValue = keyPrefix + key.call(node, node.__data__, i, group);
      if (keyValue in nodeByKeyValue) {
        exit[i] = node;
      } else {
        nodeByKeyValue[keyValue] = node;
      }
    }
  }

  // Compute the key for each datum.
  // If there a node associated with this key, join and add it to update.
  // If there is not (or the key is a duplicate), add it to enter.
  for (i = 0; i < dataLength; ++i) {
    keyValue = keyPrefix + key.call(parent, data[i], i, data);
    if (node = nodeByKeyValue[keyValue]) {
      update[i] = node;
      node.__data__ = data[i];
      nodeByKeyValue[keyValue] = null;
    } else {
      enter[i] = new __WEBPACK_IMPORTED_MODULE_1__enter__["a" /* EnterNode */](parent, data[i]);
    }
  }

  // Add any remaining nodes that were not bound to data to exit.
  for (i = 0; i < groupLength; ++i) {
    if ((node = group[i]) && (nodeByKeyValue[keyValues[i]] === node)) {
      exit[i] = node;
    }
  }
}

/* harmony default export */ __webpack_exports__["a"] = (function(value, key) {
  if (!value) {
    data = new Array(this.size()), j = -1;
    this.each(function(d) { data[++j] = d; });
    return data;
  }

  var bind = key ? bindKey : bindIndex,
      parents = this._parents,
      groups = this._groups;

  if (typeof value !== "function") value = Object(__WEBPACK_IMPORTED_MODULE_2__constant__["a" /* default */])(value);

  for (var m = groups.length, update = new Array(m), enter = new Array(m), exit = new Array(m), j = 0; j < m; ++j) {
    var parent = parents[j],
        group = groups[j],
        groupLength = group.length,
        data = value.call(parent, parent && parent.__data__, j, parents),
        dataLength = data.length,
        enterGroup = enter[j] = new Array(dataLength),
        updateGroup = update[j] = new Array(dataLength),
        exitGroup = exit[j] = new Array(groupLength);

    bind(parent, group, enterGroup, updateGroup, exitGroup, data, key);

    // Now connect the enter nodes to their following update node, such that
    // appendChild can insert the materialized enter node before this node,
    // rather than at the end of the parent node.
    for (var i0 = 0, i1 = 0, previous, next; i0 < dataLength; ++i0) {
      if (previous = enterGroup[i0]) {
        if (i0 >= i1) i1 = i0 + 1;
        while (!(next = updateGroup[i1]) && ++i1 < dataLength);
        previous._next = next || null;
      }
    }
  }

  update = new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](update, parents);
  update._enter = enter;
  update._exit = exit;
  return update;
});


/***/ }),
/* 192 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(x) {
  return function() {
    return x;
  };
});


/***/ }),
/* 193 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sparse__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__index__ = __webpack_require__(0);



/* harmony default export */ __webpack_exports__["a"] = (function() {
  return new __WEBPACK_IMPORTED_MODULE_1__index__["a" /* Selection */](this._exit || this._groups.map(__WEBPACK_IMPORTED_MODULE_0__sparse__["a" /* default */]), this._parents);
});


/***/ }),
/* 194 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(selection) {

  for (var groups0 = this._groups, groups1 = selection._groups, m0 = groups0.length, m1 = groups1.length, m = Math.min(m0, m1), merges = new Array(m0), j = 0; j < m; ++j) {
    for (var group0 = groups0[j], group1 = groups1[j], n = group0.length, merge = merges[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group0[i] || group1[i]) {
        merge[i] = node;
      }
    }
  }

  for (; j < m0; ++j) {
    merges[j] = groups0[j];
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](merges, this._parents);
});


/***/ }),
/* 195 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = -1, m = groups.length; ++j < m;) {
    for (var group = groups[j], i = group.length - 1, next = group[i], node; --i >= 0;) {
      if (node = group[i]) {
        if (next && next !== node.nextSibling) next.parentNode.insertBefore(node, next);
        next = node;
      }
    }
  }

  return this;
});


/***/ }),
/* 196 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__index__ = __webpack_require__(0);


/* harmony default export */ __webpack_exports__["a"] = (function(compare) {
  if (!compare) compare = ascending;

  function compareNode(a, b) {
    return a && b ? compare(a.__data__, b.__data__) : !a - !b;
  }

  for (var groups = this._groups, m = groups.length, sortgroups = new Array(m), j = 0; j < m; ++j) {
    for (var group = groups[j], n = group.length, sortgroup = sortgroups[j] = new Array(n), node, i = 0; i < n; ++i) {
      if (node = group[i]) {
        sortgroup[i] = node;
      }
    }
    sortgroup.sort(compareNode);
  }

  return new __WEBPACK_IMPORTED_MODULE_0__index__["a" /* Selection */](sortgroups, this._parents).order();
});

function ascending(a, b) {
  return a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}


/***/ }),
/* 197 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var callback = arguments[0];
  arguments[0] = this;
  callback.apply(null, arguments);
  return this;
});


/***/ }),
/* 198 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var nodes = new Array(this.size()), i = -1;
  this.each(function() { nodes[++i] = this; });
  return nodes;
});


/***/ }),
/* 199 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length; i < n; ++i) {
      var node = group[i];
      if (node) return node;
    }
  }

  return null;
});


/***/ }),
/* 200 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  var size = 0;
  this.each(function() { ++size; });
  return size;
});


/***/ }),
/* 201 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function() {
  return !this.node();
});


/***/ }),
/* 202 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(callback) {

  for (var groups = this._groups, j = 0, m = groups.length; j < m; ++j) {
    for (var group = groups[j], i = 0, n = group.length, node; i < n; ++i) {
      if (node = group[i]) callback.call(node, node.__data__, i, group);
    }
  }

  return this;
});


/***/ }),
/* 203 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__namespace__ = __webpack_require__(27);


function attrRemove(name) {
  return function() {
    this.removeAttribute(name);
  };
}

function attrRemoveNS(fullname) {
  return function() {
    this.removeAttributeNS(fullname.space, fullname.local);
  };
}

function attrConstant(name, value) {
  return function() {
    this.setAttribute(name, value);
  };
}

function attrConstantNS(fullname, value) {
  return function() {
    this.setAttributeNS(fullname.space, fullname.local, value);
  };
}

function attrFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttribute(name);
    else this.setAttribute(name, v);
  };
}

function attrFunctionNS(fullname, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) this.removeAttributeNS(fullname.space, fullname.local);
    else this.setAttributeNS(fullname.space, fullname.local, v);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var fullname = Object(__WEBPACK_IMPORTED_MODULE_0__namespace__["a" /* default */])(name);

  if (arguments.length < 2) {
    var node = this.node();
    return fullname.local
        ? node.getAttributeNS(fullname.space, fullname.local)
        : node.getAttribute(fullname);
  }

  return this.each((value == null
      ? (fullname.local ? attrRemoveNS : attrRemove) : (typeof value === "function"
      ? (fullname.local ? attrFunctionNS : attrFunction)
      : (fullname.local ? attrConstantNS : attrConstant)))(fullname, value));
});


/***/ }),
/* 204 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function propertyRemove(name) {
  return function() {
    delete this[name];
  };
}

function propertyConstant(name, value) {
  return function() {
    this[name] = value;
  };
}

function propertyFunction(name, value) {
  return function() {
    var v = value.apply(this, arguments);
    if (v == null) delete this[name];
    else this[name] = v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  return arguments.length > 1
      ? this.each((value == null
          ? propertyRemove : typeof value === "function"
          ? propertyFunction
          : propertyConstant)(name, value))
      : this.node()[name];
});


/***/ }),
/* 205 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function classArray(string) {
  return string.trim().split(/^|\s+/);
}

function classList(node) {
  return node.classList || new ClassList(node);
}

function ClassList(node) {
  this._node = node;
  this._names = classArray(node.getAttribute("class") || "");
}

ClassList.prototype = {
  add: function(name) {
    var i = this._names.indexOf(name);
    if (i < 0) {
      this._names.push(name);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  remove: function(name) {
    var i = this._names.indexOf(name);
    if (i >= 0) {
      this._names.splice(i, 1);
      this._node.setAttribute("class", this._names.join(" "));
    }
  },
  contains: function(name) {
    return this._names.indexOf(name) >= 0;
  }
};

function classedAdd(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.add(names[i]);
}

function classedRemove(node, names) {
  var list = classList(node), i = -1, n = names.length;
  while (++i < n) list.remove(names[i]);
}

function classedTrue(names) {
  return function() {
    classedAdd(this, names);
  };
}

function classedFalse(names) {
  return function() {
    classedRemove(this, names);
  };
}

function classedFunction(names, value) {
  return function() {
    (value.apply(this, arguments) ? classedAdd : classedRemove)(this, names);
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, value) {
  var names = classArray(name + "");

  if (arguments.length < 2) {
    var list = classList(this.node()), i = -1, n = names.length;
    while (++i < n) if (!list.contains(names[i])) return false;
    return true;
  }

  return this.each((typeof value === "function"
      ? classedFunction : value
      ? classedTrue
      : classedFalse)(names, value));
});


/***/ }),
/* 206 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function textRemove() {
  this.textContent = "";
}

function textConstant(value) {
  return function() {
    this.textContent = value;
  };
}

function textFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.textContent = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? textRemove : (typeof value === "function"
          ? textFunction
          : textConstant)(value))
      : this.node().textContent;
});


/***/ }),
/* 207 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function htmlRemove() {
  this.innerHTML = "";
}

function htmlConstant(value) {
  return function() {
    this.innerHTML = value;
  };
}

function htmlFunction(value) {
  return function() {
    var v = value.apply(this, arguments);
    this.innerHTML = v == null ? "" : v;
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.each(value == null
          ? htmlRemove : (typeof value === "function"
          ? htmlFunction
          : htmlConstant)(value))
      : this.node().innerHTML;
});


/***/ }),
/* 208 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function raise() {
  if (this.nextSibling) this.parentNode.appendChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(raise);
});


/***/ }),
/* 209 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function lower() {
  if (this.previousSibling) this.parentNode.insertBefore(this, this.parentNode.firstChild);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(lower);
});


/***/ }),
/* 210 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(26);


/* harmony default export */ __webpack_exports__["a"] = (function(name) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name);
  return this.select(function() {
    return this.appendChild(create.apply(this, arguments));
  });
});


/***/ }),
/* 211 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__creator__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__selector__ = __webpack_require__(32);



function constantNull() {
  return null;
}

/* harmony default export */ __webpack_exports__["a"] = (function(name, before) {
  var create = typeof name === "function" ? name : Object(__WEBPACK_IMPORTED_MODULE_0__creator__["a" /* default */])(name),
      select = before == null ? constantNull : typeof before === "function" ? before : Object(__WEBPACK_IMPORTED_MODULE_1__selector__["a" /* default */])(before);
  return this.select(function() {
    return this.insertBefore(create.apply(this, arguments), select.apply(this, arguments) || null);
  });
});


/***/ }),
/* 212 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
function remove() {
  var parent = this.parentNode;
  if (parent) parent.removeChild(this);
}

/* harmony default export */ __webpack_exports__["a"] = (function() {
  return this.each(remove);
});


/***/ }),
/* 213 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony default export */ __webpack_exports__["a"] = (function(value) {
  return arguments.length
      ? this.property("__data__", value)
      : this.node().__data__;
});


/***/ }),
/* 214 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__window__ = __webpack_require__(33);


function dispatchEvent(node, type, params) {
  var window = Object(__WEBPACK_IMPORTED_MODULE_0__window__["a" /* default */])(node),
      event = window.CustomEvent;

  if (typeof event === "function") {
    event = new event(type, params);
  } else {
    event = window.document.createEvent("Event");
    if (params) event.initEvent(type, params.bubbles, params.cancelable), event.detail = params.detail;
    else event.initEvent(type, false, false);
  }

  node.dispatchEvent(event);
}

function dispatchConstant(type, params) {
  return function() {
    return dispatchEvent(this, type, params);
  };
}

function dispatchFunction(type, params) {
  return function() {
    return dispatchEvent(this, type, params.apply(this, arguments));
  };
}

/* harmony default export */ __webpack_exports__["a"] = (function(type, params) {
  return this.each((typeof params === "function"
      ? dispatchFunction
      : dispatchConstant)(type, params));
});


/***/ }),
/* 215 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__selection_index__ = __webpack_require__(0);


/* unused harmony default export */ var _unused_webpack_default_export = (function(selector) {
  return typeof selector === "string"
      ? new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([document.querySelectorAll(selector)], [document.documentElement])
      : new __WEBPACK_IMPORTED_MODULE_0__selection_index__["a" /* Selection */]([selector == null ? [] : selector], __WEBPACK_IMPORTED_MODULE_0__selection_index__["b" /* root */]);
});


/***/ }),
/* 216 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(31);



/* unused harmony default export */ var _unused_webpack_default_export = (function(node, touches, identifier) {
  if (arguments.length < 3) identifier = touches, touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().changedTouches;

  for (var i = 0, n = touches ? touches.length : 0, touch; i < n; ++i) {
    if ((touch = touches[i]).identifier === identifier) {
      return Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touch);
    }
  }

  return null;
});


/***/ }),
/* 217 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__sourceEvent__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__point__ = __webpack_require__(31);



/* unused harmony default export */ var _unused_webpack_default_export = (function(node, touches) {
  if (touches == null) touches = Object(__WEBPACK_IMPORTED_MODULE_0__sourceEvent__["a" /* default */])().touches;

  for (var i = 0, n = touches ? touches.length : 0, points = new Array(n); i < n; ++i) {
    points[i] = Object(__WEBPACK_IMPORTED_MODULE_1__point__["a" /* default */])(node, touches[i]);
  }

  return points;
});


/***/ }),
/* 218 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.bar=n():(t.britecharts=t.britecharts||{},t.britecharts.bar=n())}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){var r;r=function(t){"use strict";var n=e(1),r=e(2),i=e(3),a=e(4),o=e(5),u=e(6),c=e(7),f=e(12),l=(e(13),e(15)),s=e(16),h=s.exportChart,d=e(17),p="%",g=",f";return function(){function t(t){t.each(function(t){B=L-P.left-P.right-1.2*at,Y=U-P.top-P.bottom;var n=b(t);R=n.data,H=n.dataZeroed,m(),e(),v(this),S(),C(),w(),Z&&T()})}function e(){ut?(et=i.axisBottom(j).ticks(V,nt).tickSizeInner([-Y]),rt=i.axisLeft(z)):(et=i.axisBottom(j),rt=i.axisLeft(z).ticks(X,nt))}function s(){var t=ct.append("g").classed("container-group",!0).attr("transform","translate("+(P.left+at)+", "+P.top+")");t.append("g").classed("grid-lines-group",!0),t.append("g").classed("chart-group",!0),t.append("g").classed("x-axis-group axis",!0),t.append("g").attr("transform","translate("+-1*at+", 0)").classed("y-axis-group axis",!0),t.append("g").classed("metadata-group",!0)}function m(){var t=Math.min($*n.max(R,Mt));ut?(j=c.scaleLinear().domain([0,t]).rangeRound([0,B]),z=c.scaleBand().domain(R.map(wt)).rangeRound([Y,0]).padding(.1)):(j=c.scaleBand().domain(R.map(wt)).rangeRound([0,B]).padding(.1),z=c.scaleLinear().domain([0,t]).rangeRound([Y,0])),W=bt?R.map(function(t){return t}).reverse().map(function(t,n){var e=t.name;return{name:e,color:q[n%q.length]}}):R.map(function(t){return t}).map(function(t,n){var e=t.name;return{name:e,color:q[n%q.length]}}),G=function(t){return W.filter(function(n){var e=n.name;return e===t})[0].color}}function v(t){ct||(ct=f.select(t).append("svg").classed("britechart bar-chart",!0),s()),ct.attr("width",L).attr("height",U)}function b(t){var n=t.map(function(t){return{value:+t[pt],name:String(t[gt])}}),e=n.map(function(t){return{value:0,name:String(t[gt])}});return{data:n,dataZeroed:e}}function y(t,n){l.wrapTextWithEllipses(t,n,0,ot)}function w(){ct.select(".x-axis-group.axis").attr("transform","translate(0, "+Y+")").call(et),ct.select(".y-axis-group.axis").call(rt),ct.selectAll(".y-axis-group .tick text").call(y,P.left-at)}function M(t){t.enter().append("rect").classed("bar",!0).attr("y",Y).attr("x",0).attr("height",z.bandwidth()).attr("width",function(t){var n=t.value;return j(n)}).attr("fill",function(t){var n=t.name;return G(n)}).on("mouseover",function(t){D(this,t,B,Y)}).on("mousemove",function(t){F(this,t,B,Y)}).on("mouseout",function(t){I(this,t,B,Y)}).merge(t).attr("x",0).attr("y",function(t){var n=t.name;return z(n)}).attr("height",z.bandwidth()).attr("width",function(t){var n=t.value;return j(n)})}function x(t){t.enter().append("rect").classed("bar",!0).attr("x",0).attr("y",Y).attr("height",z.bandwidth()).attr("width",function(t){var n=t.value;return j(n)}).attr("fill",function(t){var n=t.name;return G(n)}).on("mouseover",function(t){D(this,t,B,Y)}).on("mousemove",function(t){F(this,t,B,Y)}).on("mouseout",function(t){I(this,t,B,Y)}),t.attr("x",0).attr("y",function(t){var n=t.name;return z(n)}).attr("height",z.bandwidth()).transition().duration(st).delay(dt).ease(lt).attr("width",function(t){var n=t.value;return j(n)})}function _(t){t.enter().append("rect").classed("bar",!0).attr("x",B).attr("y",function(t){var n=t.value;return z(n)}).attr("width",j.bandwidth()).attr("height",function(t){var n=t.value;return Y-z(n)}).attr("fill",function(t){var n=t.name;return G(n)}).on("mouseover",function(t){D(this,t,B,Y)}).on("mousemove",function(t){F(this,t,B,Y)}).on("mouseout",function(t){I(this,t,B,Y)}).merge(t).attr("x",function(t){var n=t.name;return j(n)}).attr("width",j.bandwidth()).transition().duration(st).delay(dt).ease(lt).attr("y",function(t){var n=t.value;return z(n)}).attr("height",function(t){var n=t.value;return Y-z(n)})}function A(t){t.enter().append("rect").classed("bar",!0).attr("x",B).attr("y",function(t){var n=t.value;return z(n)}).attr("width",j.bandwidth()).attr("height",function(t){var n=t.value;return Y-z(n)}).attr("fill",function(t){var n=t.name;return G(n)}).on("mouseover",function(t){D(this,t,B,Y)}).on("mousemove",function(t){F(this,t,B,Y)}).on("mouseout",function(t){I(this,t,B,Y)}).merge(t).attr("x",function(t){var n=t.name;return j(n)}).attr("y",function(t){var n=t.value;return z(n)}).attr("width",j.bandwidth()).attr("height",function(t){var n=t.value;return Y-z(n)})}function T(){var t=ut?xt:At,n=ut?_t:Tt,e=ut?Ct:St,r=ct.select(".metadata-group").append("g").classed("percentage-label-group",!0).selectAll("text").data(R.reverse()).enter().append("text");r.classed("percentage-label",!0).attr("x",t).attr("y",n).text(e).attr("font-size",J+"px")}function C(){var t=void 0;ft?(t=ct.select(".chart-group").selectAll(".bar").data(H),ut?M(t):A(t),t=ct.select(".chart-group").selectAll(".bar").data(R),ut?x(t):_(t)):(t=ct.select(".chart-group").selectAll(".bar").data(R),ut?M(t):A(t)),t.exit().transition().style("opacity",0).remove()}function S(){ut?N():E()}function N(){vt=ct.select(".grid-lines-group").selectAll("line.vertical-grid-line").data(j.ticks(4)).enter().append("line").attr("class","vertical-grid-line").attr("y1",it.left).attr("y2",Y).attr("x1",function(t){return j(t)}).attr("x2",function(t){return j(t)}),k()}function k(){mt=ct.select(".grid-lines-group").selectAll("line.extended-y-line").data([0]).enter().append("line").attr("class","extended-y-line").attr("y1",it.bottom).attr("y2",Y).attr("x1",0).attr("x2",0)}function E(){vt=ct.select(".grid-lines-group").selectAll("line.horizontal-grid-line").data(z.ticks(4)).enter().append("line").attr("class","horizontal-grid-line").attr("x1",it.left).attr("x2",B).attr("y1",function(t){return z(t)}).attr("y2",function(t){return z(t)}),O()}function O(){mt=ct.select(".grid-lines-group").selectAll("line.extended-x-line").data([0]).enter().append("line").attr("class","extended-x-line").attr("x1",it.left).attr("x2",B).attr("y1",Y).attr("y2",Y)}function D(t,n,e,r){yt.call("customMouseOver",t,n,f.mouse(t),[e,r]),f.select(t).attr("fill",function(t){var n=t.name;return a.color(G(n)).darker()})}function F(t,n,e,r){yt.call("customMouseMove",t,n,f.mouse(t),[e,r])}function I(t,n,e,r){yt.call("customMouseOut",t,n,f.mouse(t),[e,r]),f.select(t).attr("fill",function(t){var n=t.name;return G(n)})}var P={top:20,right:20,bottom:30,left:40},L=960,U=500,R=void 0,H=void 0,B=void 0,Y=void 0,j=void 0,z=void 0,q=d.singleColors.aloeGreen,W=void 0,G=void 0,X=5,V=5,$=1,Z=!1,Q=7,J=12,K=".0%",tt=".0f",nt=g,et=void 0,rt=void 0,it={top:0,left:0,bottom:0,right:0},at=10,ot=1,ut=!1,ct=void 0,ft=!1,lt=r.easeQuadInOut,st=800,ht=70,dt=function(t,n){return ht*n},pt="value",gt="name",mt=void 0,vt=void 0,bt=!0,yt=o.dispatch("customMouseOver","customMouseOut","customMouseMove"),wt=function(t){var n=t.name;return n},Mt=function(t){var n=t.value;return n},xt=function(t){var n=t.value;return j(n)+Q},_t=function(t){var n=t.name;return z(n)+z.bandwidth()/2+J*(3/8)},At=function(t){var n=t.name;return j(n)},Tt=function(t){var n=t.value;return z(n)-Q},Ct=function(t){var n=t.value;return u.format(K)(n)},St=function(t){var n=t.value;return u.format(tt)(100*parseFloat(n))};return t.colorSchema=function(t){return arguments.length?(q=t,this):q},t.enablePercentageLabels=function(t){return arguments.length?(Z=t,this):Z},t.exportChart=function(n,e){h.call(t,ct,n,e)},t.height=function(t){return arguments.length?(U=t,this):U},t.horizontal=function(t){return arguments.length?(ut=t,console.log("We are deprecating the .horizontal() accessor, use .isHorizontal() instead"),this):ut},t.isAnimated=function(t){return arguments.length?(ft=t,this):ft},t.isHorizontal=function(t){return arguments.length?(ut=t,this):ut},t.margin=function(t){return arguments.length?(P=t,this):P},t.nameLabel=function(t){return arguments.length?(gt=t,this):gt},t.on=function(){var n=yt.on.apply(yt,arguments);return n===yt?t:n},t.percentageAxisToMaxRatio=function(t){return arguments.length?($=t,this):$},t.percentageLabelMargin=function(t){return arguments.length?(Q=t,this):Q},t.shouldReverseColorList=function(t){return arguments.length?(bt=t,this):bt},t.reverseColorList=function(t){return arguments.length?(bt=t,console.log("We are deprecating the .reverseColorList() accessor, use .shouldReverseColorList() instead"),this):bt},t.hasPercentage=function(t){return arguments.length?(nt=t?p:g,this):nt===p},t.usePercentage=function(t){return arguments.length?(nt=t?p:g,this):nt===p},t.valueLabel=function(t){return arguments.length?(pt=t,this):pt},t.width=function(t){return arguments.length?(L=t,this):L},t.xTicks=function(t){return arguments.length?(V=t,this):V},t.yAxisPaddingBetweenChart=function(t){return arguments.length?(at=t,this):at},t.yTicks=function(t){return arguments.length?(X=t,this):X},t}}.call(n,e,n,t),!(void 0!==r&&(t.exports=r))},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return function(n,e){return o(t(n),e)}}function e(t,n){return[t,n]}function r(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),a=r/Math.pow(10,i);return i>=0?(a>=A?10:a>=T?5:a>=C?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(a>=A?10:a>=T?5:a>=C?2:1)}function i(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),a=r/i;return a>=A?i*=10:a>=T?i*=5:a>=C&&(i*=2),n<t?-i:i}function a(t){return t.length}var o=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},u=function(t){return 1===t.length&&(t=n(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var a=r+i>>>1;t(n[a],e)<0?r=a+1:i=a}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var a=r+i>>>1;t(n[a],e)>0?i=a:r=a+1}return r}}},c=u(o),f=c.right,l=c.left,s=function(t,n){null==n&&(n=e);for(var r=0,i=t.length-1,a=t[0],o=new Array(i<0?0:i);r<i;)o[r]=n(a,a=t[++r]);return o},h=function(t,n,r){var i,a,o,u,c=t.length,f=n.length,l=new Array(c*f);for(null==r&&(r=e),i=o=0;i<c;++i)for(u=t[i],a=0;a<f;++a,++o)l[o]=r(u,n[a]);return l},d=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},p=function(t){return null===t?NaN:+t},g=function(t,n){var e,r,i=t.length,a=0,o=-1,u=0,c=0;if(null==n)for(;++o<i;)isNaN(e=p(t[o]))||(r=e-u,u+=r/++a,c+=r*(e-u));else for(;++o<i;)isNaN(e=p(n(t[o],o,t)))||(r=e-u,u+=r/++a,c+=r*(e-u));if(a>1)return c/(a-1)},m=function(t,n){var e=g(t,n);return e?Math.sqrt(e):e},v=function(t,n){var e,r,i,a=t.length,o=-1;if(null==n){for(;++o<a;)if(null!=(e=t[o])&&e>=e)for(r=i=e;++o<a;)null!=(e=t[o])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++o<a;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=i=e;++o<a;)null!=(e=n(t[o],o,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]},b=Array.prototype,y=b.slice,w=b.map,M=function(t){return function(){return t}},x=function(t){return t},_=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),a=new Array(i);++r<i;)a[r]=t+r*e;return a},A=Math.sqrt(50),T=Math.sqrt(10),C=Math.sqrt(2),S=function(t,n,e){var i,a,o,u=n<t,c=-1;if(u&&(i=t,t=n,n=i),0===(o=r(t,n,e))||!isFinite(o))return[];if(o>0)for(t=Math.ceil(t/o),n=Math.floor(n/o),a=new Array(i=Math.ceil(n-t+1));++c<i;)a[c]=(t+c)*o;else for(t=Math.floor(t*o),n=Math.ceil(n*o),a=new Array(i=Math.ceil(t-n+1));++c<i;)a[c]=(t-c)/o;return u&&a.reverse(),a},N=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},k=function(){function t(t){var a,o,u=t.length,c=new Array(u);for(a=0;a<u;++a)c[a]=n(t[a],a,t);var l=e(c),s=l[0],h=l[1],d=r(c,s,h);Array.isArray(d)||(d=i(s,h,d),d=_(Math.ceil(s/d)*d,Math.floor(h/d)*d,d));for(var p=d.length;d[0]<=s;)d.shift(),--p;for(;d[p-1]>h;)d.pop(),--p;var g,m=new Array(p+1);for(a=0;a<=p;++a)g=m[a]=[],g.x0=a>0?d[a-1]:s,g.x1=a<p?d[a]:h;for(a=0;a<u;++a)o=c[a],s<=o&&o<=h&&m[f(d,o,0,p)].push(t[a]);return m}var n=x,e=v,r=N;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:M(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:M([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:M(Array.isArray(n)?y.call(n):n),t):r},t},E=function(t,n,e){if(null==e&&(e=p),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,a=Math.floor(i),o=+e(t[a],a,t),u=+e(t[a+1],a+1,t);return o+(u-o)*(i-a)}},O=function(t,n,e){return t=w.call(t,p).sort(o),Math.ceil((e-n)/(2*(E(t,.75)-E(t,.25))*Math.pow(t.length,-1/3)))},D=function(t,n,e){return Math.ceil((e-n)/(3.5*m(t)*Math.pow(t.length,-1/3)))},F=function(t,n){var e,r,i=t.length,a=-1;if(null==n){for(;++a<i;)if(null!=(e=t[a])&&e>=e)for(r=e;++a<i;)null!=(e=t[a])&&e>r&&(r=e)}else for(;++a<i;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=e;++a<i;)null!=(e=n(t[a],a,t))&&e>r&&(r=e);return r},I=function(t,n){var e,r=t.length,i=r,a=-1,o=0;if(null==n)for(;++a<r;)isNaN(e=p(t[a]))?--i:o+=e;else for(;++a<r;)isNaN(e=p(n(t[a],a,t)))?--i:o+=e;if(i)return o/i},P=function(t,n){var e,r=t.length,i=-1,a=[];if(null==n)for(;++i<r;)isNaN(e=p(t[i]))||a.push(e);else for(;++i<r;)isNaN(e=p(n(t[i],i,t)))||a.push(e);return E(a.sort(o),.5)},L=function(t){for(var n,e,r,i=t.length,a=-1,o=0;++a<i;)o+=t[a].length;for(e=new Array(o);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--o]=r[n];return e},U=function(t,n){var e,r,i=t.length,a=-1;if(null==n){for(;++a<i;)if(null!=(e=t[a])&&e>=e)for(r=e;++a<i;)null!=(e=t[a])&&r>e&&(r=e)}else for(;++a<i;)if(null!=(e=n(t[a],a,t))&&e>=e)for(r=e;++a<i;)null!=(e=n(t[a],a,t))&&r>e&&(r=e);return r},R=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},H=function(t,n){if(e=t.length){var e,r,i=0,a=0,u=t[a];for(null==n&&(n=o);++i<e;)(n(r=t[i],u)<0||0!==n(u,u))&&(u=r,a=i);return 0===n(u,u)?a:void 0}},B=function(t,n,e){for(var r,i,a=(null==e?t.length:e)-(n=null==n?0:+n);a;)i=Math.random()*a--|0,r=t[a+n],t[a+n]=t[i+n],t[i+n]=r;return t},Y=function(t,n){var e,r=t.length,i=-1,a=0;if(null==n)for(;++i<r;)(e=+t[i])&&(a+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(a+=e);return a},j=function(t){if(!(i=t.length))return[];for(var n=-1,e=U(t,a),r=new Array(e);++n<e;)for(var i,o=-1,u=r[n]=new Array(i);++o<i;)u[o]=t[o][n];return r},z=function(){return j(arguments)};t.bisect=f,t.bisectRight=f,t.bisectLeft=l,t.ascending=o,t.bisector=u,t.cross=h,t.descending=d,t.deviation=m,t.extent=v,t.histogram=k,t.thresholdFreedmanDiaconis=O,t.thresholdScott=D,t.thresholdSturges=N,t.max=F,t.mean=I,t.median=P,t.merge=L,t.min=U,t.pairs=s,t.permute=R,t.quantile=E,t.range=_,t.scan=H,t.shuffle=B,t.sum=Y,t.ticks=S,t.tickIncrement=r,t.tickStep=i,t.transpose=j,t.variance=g,t.zip=z,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return+t}function e(t){return t*t}function r(t){return t*(2-t)}function i(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function a(t){return t*t*t}function o(t){return--t*t*t+1}function u(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function c(t){return 1-Math.cos(t*T)}function f(t){return Math.sin(t*T)}function l(t){return(1-Math.cos(A*t))/2}function s(t){return Math.pow(2,10*t-10)}function h(t){return 1-Math.pow(2,-10*t)}function d(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function p(t){return 1-Math.sqrt(1-t*t)}function g(t){return Math.sqrt(1- --t*t)}function m(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function v(t){return 1-b(1-t)}function b(t){return(t=+t)<C?P*t*t:t<N?P*(t-=S)*t+k:t<O?P*(t-=E)*t+D:P*(t-=F)*t+I}function y(t){return((t*=2)<=1?1-b(1-t):b(t-1)+1)/2}var w=3,M=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(w),x=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(w),_=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(w),A=Math.PI,T=A/2,C=4/11,S=6/11,N=8/11,k=.75,E=9/11,O=10/11,D=.9375,F=21/22,I=63/64,P=1/C/C,L=1.70158,U=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(L),R=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(L),H=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(L),B=2*Math.PI,Y=1,j=.3,z=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=B);return r.amplitude=function(n){return t(n,e*B)},r.period=function(e){return t(n,e)},r}(Y,j),q=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=B);return r.amplitude=function(n){return t(n,e*B)},r.period=function(e){return t(n,e)},r}(Y,j),W=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=B);return r.amplitude=function(n){return t(n,e*B)},r.period=function(e){return t(n,e)},r}(Y,j);t.easeLinear=n,t.easeQuad=i,t.easeQuadIn=e,t.easeQuadOut=r,t.easeQuadInOut=i,t.easeCubic=u,t.easeCubicIn=a,t.easeCubicOut=o,t.easeCubicInOut=u,t.easePoly=_,t.easePolyIn=M,t.easePolyOut=x,t.easePolyInOut=_,t.easeSin=l,t.easeSinIn=c,t.easeSinOut=f,t.easeSinInOut=l,t.easeExp=d,t.easeExpIn=s,t.easeExpOut=h,t.easeExpInOut=d,t.easeCircle=m,t.easeCircleIn=p,t.easeCircleOut=g,t.easeCircleInOut=m,t.easeBounce=b,t.easeBounceIn=v,t.easeBounceOut=b,t.easeBounceInOut=y,t.easeBack=H,t.easeBackIn=U,t.easeBackOut=R,t.easeBackInOut=H,t.easeElastic=q,t.easeElasticIn=z,t.easeElasticOut=q,t.easeElasticInOut=W,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return"translate("+(t+.5)+",0)"}function e(t){return"translate(0,"+(t+.5)+")"}function r(t){return function(n){return+t(n)}}function i(t){var n=Math.max(0,t.bandwidth()-1)/2;return t.round()&&(n=Math.round(n)),function(e){return+t(e)+n}}function a(){return!this.__axis}function o(t,o){function u(n){var e=null==f?o.ticks?o.ticks.apply(o,c):o.domain():f,u=null==l?o.tickFormat?o.tickFormat.apply(o,c):h:l,s=Math.max(b,0)+w,A=o.range(),T=+A[0]+.5,C=+A[A.length-1]+.5,S=(o.bandwidth?i:r)(o.copy()),N=n.selection?n.selection():n,k=N.selectAll(".domain").data([null]),E=N.selectAll(".tick").data(e,o).order(),O=E.exit(),D=E.enter().append("g").attr("class","tick"),F=E.select("line"),I=E.select("text");k=k.merge(k.enter().insert("path",".tick").attr("class","domain").attr("stroke","#000")),E=E.merge(D),F=F.merge(D.append("line").attr("stroke","#000").attr(x+"2",M*b)),I=I.merge(D.append("text").attr("fill","#000").attr(x,M*s).attr("dy",t===d?"0em":t===g?"0.71em":"0.32em")),n!==N&&(k=k.transition(n),E=E.transition(n),F=F.transition(n),I=I.transition(n),O=O.transition(n).attr("opacity",v).attr("transform",function(t){return isFinite(t=S(t))?_(t):this.getAttribute("transform")}),D.attr("opacity",v).attr("transform",function(t){var n=this.parentNode.__axis;return _(n&&isFinite(n=n(t))?n:S(t))})),O.remove(),k.attr("d",t===m||t==p?"M"+M*y+","+T+"H0.5V"+C+"H"+M*y:"M"+T+","+M*y+"V0.5H"+C+"V"+M*y),E.attr("opacity",1).attr("transform",function(t){return _(S(t))}),F.attr(x+"2",M*b),I.attr(x,M*s).text(u),N.filter(a).attr("fill","none").attr("font-size",10).attr("font-family","sans-serif").attr("text-anchor",t===p?"start":t===m?"end":"middle"),N.each(function(){this.__axis=S})}var c=[],f=null,l=null,b=6,y=6,w=3,M=t===d||t===m?-1:1,x=t===m||t===p?"x":"y",_=t===d||t===g?n:e;return u.scale=function(t){return arguments.length?(o=t,u):o},u.ticks=function(){return c=s.call(arguments),u},u.tickArguments=function(t){return arguments.length?(c=null==t?[]:s.call(t),u):c.slice()},u.tickValues=function(t){return arguments.length?(f=null==t?null:s.call(t),u):f&&f.slice()},u.tickFormat=function(t){return arguments.length?(l=t,u):l},u.tickSize=function(t){return arguments.length?(b=y=+t,u):b},u.tickSizeInner=function(t){return arguments.length?(b=+t,u):b},u.tickSizeOuter=function(t){return arguments.length?(y=+t,u):y},u.tickPadding=function(t){return arguments.length?(w=+t,u):w},u}function u(t){return o(d,t)}function c(t){return o(p,t)}function f(t){return o(g,t)}function l(t){return o(m,t)}var s=Array.prototype.slice,h=function(t){return t},d=1,p=2,g=3,m=4,v=1e-6;t.axisTop=u,t.axisRight=c,t.axisBottom=f,t.axisLeft=l,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function e(){}function r(t){var n;return t=(t+"").trim().toLowerCase(),(n=F.exec(t))?(n=parseInt(n[1],16),new c(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=I.exec(t))?i(parseInt(n[1],16)):(n=P.exec(t))?new c(n[1],n[2],n[3],1):(n=L.exec(t))?new c(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=U.exec(t))?a(n[1],n[2],n[3],n[4]):(n=R.exec(t))?a(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=H.exec(t))?f(n[1],n[2]/100,n[3]/100,1):(n=B.exec(t))?f(n[1],n[2]/100,n[3]/100,n[4]):Y.hasOwnProperty(t)?i(Y[t]):"transparent"===t?new c(NaN,NaN,NaN,0):null}function i(t){return new c(t>>16&255,t>>8&255,255&t,1)}function a(t,n,e,r){return r<=0&&(t=n=e=NaN),new c(t,n,e,r)}function o(t){return t instanceof e||(t=r(t)),t?(t=t.rgb(),new c(t.r,t.g,t.b,t.opacity)):new c}function u(t,n,e,r){return 1===arguments.length?o(t):new c(t,n,e,null==r?1:r)}function c(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function f(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new h(t,n,e,r)}function l(t){if(t instanceof h)return new h(t.h,t.s,t.l,t.opacity);if(t instanceof e||(t=r(t)),!t)return new h;if(t instanceof h)return t;t=t.rgb();var n=t.r/255,i=t.g/255,a=t.b/255,o=Math.min(n,i,a),u=Math.max(n,i,a),c=NaN,f=u-o,l=(u+o)/2;return f?(c=n===u?(i-a)/f+6*(i<a):i===u?(a-n)/f+2:(n-i)/f+4,f/=l<.5?u+o:2-u-o,c*=60):f=l>0&&l<1?0:c,new h(c,f,l,t.opacity)}function s(t,n,e,r){return 1===arguments.length?l(t):new h(t,n,e,null==r?1:r)}function h(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function d(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function p(t){if(t instanceof m)return new m(t.l,t.a,t.b,t.opacity);if(t instanceof _){var n=t.h*j;return new m(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof c||(t=o(t));var e=w(t.r),r=w(t.g),i=w(t.b),a=v((.4124564*e+.3575761*r+.1804375*i)/W),u=v((.2126729*e+.7151522*r+.072175*i)/G),f=v((.0193339*e+.119192*r+.9503041*i)/X);return new m(116*u-16,500*(a-u),200*(u-f),t.opacity)}function g(t,n,e,r){return 1===arguments.length?p(t):new m(t,n,e,null==r?1:r)}function m(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function v(t){return t>Q?Math.pow(t,1/3):t/Z+V}function b(t){return t>$?t*t*t:Z*(t-V)}function y(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function w(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function M(t){if(t instanceof _)return new _(t.h,t.c,t.l,t.opacity);t instanceof m||(t=p(t));var n=Math.atan2(t.b,t.a)*z;return new _(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function x(t,n,e,r){return 1===arguments.length?M(t):new _(t,n,e,null==r?1:r)}function _(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function A(t){if(t instanceof C)return new C(t.h,t.s,t.l,t.opacity);t instanceof c||(t=o(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(at*r+rt*n-it*e)/(at+rt-it),a=r-i,u=(et*(e-i)-tt*a)/nt,f=Math.sqrt(u*u+a*a)/(et*i*(1-i)),l=f?Math.atan2(u,a)*z-120:NaN;return new C(l<0?l+360:l,f,i,t.opacity)}function T(t,n,e,r){return 1===arguments.length?A(t):new C(t,n,e,null==r?1:r)}function C(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}var S=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t},N=.7,k=1/N,E="\\s*([+-]?\\d+)\\s*",O="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",D="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",F=/^#([0-9a-f]{3})$/,I=/^#([0-9a-f]{6})$/,P=new RegExp("^rgb\\("+[E,E,E]+"\\)$"),L=new RegExp("^rgb\\("+[D,D,D]+"\\)$"),U=new RegExp("^rgba\\("+[E,E,E,O]+"\\)$"),R=new RegExp("^rgba\\("+[D,D,D,O]+"\\)$"),H=new RegExp("^hsl\\("+[O,D,D]+"\\)$"),B=new RegExp("^hsla\\("+[O,D,D,O]+"\\)$"),Y={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};S(e,r,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),S(c,u,n(e,{brighter:function(t){return t=null==t?k:Math.pow(k,t),new c(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?N:Math.pow(N,t),new c(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),S(h,s,n(e,{brighter:function(t){return t=null==t?k:Math.pow(k,t),new h(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?N:Math.pow(N,t),new h(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new c(d(t>=240?t-240:t+120,i,r),d(t,i,r),d(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var j=Math.PI/180,z=180/Math.PI,q=18,W=.95047,G=1,X=1.08883,V=4/29,$=6/29,Z=3*$*$,Q=$*$*$;S(m,g,n(e,{brighter:function(t){return new m(this.l+q*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new m(this.l-q*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=G*b(t),n=W*b(n),e=X*b(e),new c(y(3.2404542*n-1.5371385*t-.4985314*e),y(-.969266*n+1.8760108*t+.041556*e),y(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),S(_,x,n(e,{brighter:function(t){return new _(this.h,this.c,this.l+q*(null==t?1:t),this.opacity)},darker:function(t){return new _(this.h,this.c,this.l-q*(null==t?1:t),this.opacity)},rgb:function(){return p(this).rgb()}}));var J=-.14861,K=1.78277,tt=-.29227,nt=-.90649,et=1.97294,rt=et*nt,it=et*K,at=K*tt-nt*J;S(C,T,n(e,{brighter:function(t){return t=null==t?k:Math.pow(k,t),new C(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?N:Math.pow(N,t),new C(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*j,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new c(255*(n+e*(J*r+K*i)),255*(n+e*(tt*r+nt*i)),255*(n+e*(et*r)),this.opacity)}})),t.color=r,t.rgb=u,t.hsl=s,t.lab=g,t.hcl=x,t.cubehelix=T,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(){for(var t,n=0,r=arguments.length,i={};n<r;++n){if(!(t=arguments[n]+"")||t in i)throw new Error("illegal type: "+t);i[t]=[]}return new e(i)}function e(t){this._=t}function r(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function i(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function a(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=o,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}var o={value:function(){}};e.prototype=n.prototype={constructor:e,on:function(t,n){var e,o=this._,u=r(t+"",o),c=-1,f=u.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++c<f;)if(e=(t=u[c]).type)o[e]=a(o[e],t.name,n);else if(null==n)for(e in o)o[e]=a(o[e],t.name,null);return this}for(;++c<f;)if((e=(t=u[c]).type)&&(e=i(o[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var r in n)t[r]=n[r].slice();return new e(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),a=0;a<e;++a)i[a]=arguments[a+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],a=0,e=r.length;a<e;++a)r[a].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,a=r.length;i<a;++i)r[i].value.apply(n,e)}},t.dispatch=n,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return new e(t)}function e(t){if(!(n=d.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",a=n[4]||"",o=!!n[5],u=n[6]&&+n[6],c=!!n[7],f=n[8]&&+n[8].slice(1),l=n[9]||"";"n"===l?(c=!0,l="g"):h[l]||(l=""),(o||"0"===e&&"="===r)&&(o=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=a,this.zero=o,this.width=u,this.comma=c,this.precision=f,this.type=l}function r(n){return p=v(n),t.format=p.format,t.formatPrefix=p.formatPrefix,p}var i,a=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]},o=function(t){return t=a(Math.abs(t)),t?t[1]:NaN},u=function(t,n){
return function(e,r){for(var i=e.length,a=[],o=0,u=t[0],c=0;i>0&&u>0&&(c+u+1>r&&(u=Math.max(1,r-c)),a.push(e.substring(i-=u,i+u)),!((c+=u+1)>r));)u=t[o=(o+1)%t.length];return a.reverse().join(n)}},c=function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}},f=function(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,a=-1;i<r;++i)switch(t[i]){case".":a=e=i;break;case"0":0===a&&(a=i),e=i;break;case"e":break t;default:a>0&&(a=0)}return a>0?t.slice(0,a)+t.slice(e+1):t},l=function(t,n){var e=a(t,n);if(!e)return t+"";var r=e[0],o=e[1],u=o-(i=3*Math.max(-8,Math.min(8,Math.floor(o/3))))+1,c=r.length;return u===c?r:u>c?r+new Array(u-c+1).join("0"):u>0?r.slice(0,u)+"."+r.slice(u):"0."+new Array(1-u).join("0")+a(t,Math.max(0,n+u-1))[0]},s=function(t,n){var e=a(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},h={"":f,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return s(100*t,n)},r:s,s:l,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},d=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;n.prototype=e.prototype,e.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var p,g=function(t){return t},m=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],v=function(t){function e(t){function e(t){var n,e,c,f=w,h=M;if("c"===y)h=x(t)+h,t="";else{t=+t;var d=t<0;if(t=x(Math.abs(t),b),d&&0===+t&&(d=!1),f=(d?"("===u?u:"-":"-"===u||"("===u?"":u)+f,h=h+("s"===y?m[8+i/3]:"")+(d&&"("===u?")":""),_)for(n=-1,e=t.length;++n<e;)if(c=t.charCodeAt(n),48>c||c>57){h=(46===c?l+t.slice(n+1):t.slice(n))+h,t=t.slice(0,n);break}}v&&!p&&(t=a(t,1/0));var A=f.length+t.length+h.length,T=A<g?new Array(g-A+1).join(r):"";switch(v&&p&&(t=a(T+t,T.length?g-h.length:1/0),T=""),o){case"<":t=f+t+h+T;break;case"=":t=f+T+t+h;break;case"^":t=T.slice(0,A=T.length>>1)+f+t+h+T.slice(A);break;default:t=T+f+t+h}return s(t)}t=n(t);var r=t.fill,o=t.align,u=t.sign,c=t.symbol,p=t.zero,g=t.width,v=t.comma,b=t.precision,y=t.type,w="$"===c?f[0]:"#"===c&&/[boxX]/.test(y)?"0"+y.toLowerCase():"",M="$"===c?f[1]:/[%p]/.test(y)?d:"",x=h[y],_=!y||/[defgprs%]/.test(y);return b=null==b?y?6:12:/[gprs]/.test(y)?Math.max(1,Math.min(21,b)):Math.max(0,Math.min(20,b)),e.toString=function(){return t+""},e}function r(t,r){var i=e((t=n(t),t.type="f",t)),a=3*Math.max(-8,Math.min(8,Math.floor(o(r)/3))),u=Math.pow(10,-a),c=m[8+a/3];return function(t){return i(u*t)+c}}var a=t.grouping&&t.thousands?u(t.grouping,t.thousands):g,f=t.currency,l=t.decimal,s=t.numerals?c(t.numerals):g,d=t.percent||"%";return{format:e,formatPrefix:r}};r({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var b=function(t){return Math.max(0,-o(Math.abs(t)))},y=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(o(n)/3)))-o(Math.abs(t)))},w=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,o(n)-o(t))+1};t.formatDefaultLocale=r,t.formatLocale=v,t.formatSpecifier=n,t.precisionFixed=b,t.precisionPrefix=y,t.precisionRound=w,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,r){r(n,e(1),e(8),e(9),e(6),e(10),e(11),e(4))}(this,function(t,n,e,r,i,a,o,u){"use strict";function c(t){function n(n){var e=n+"",o=r.get(e);if(!o){if(a!==z)return a;r.set(e,o=i.push(n))}return t[(o-1)%t.length]}var r=e.map(),i=[],a=z;return t=null==t?[]:j.call(t),n.domain=function(t){if(!arguments.length)return i.slice();i=[],r=e.map();for(var a,o,u=-1,c=t.length;++u<c;)r.has(o=(a=t[u])+"")||r.set(o,i.push(a));return n},n.range=function(e){return arguments.length?(t=j.call(e),n):t.slice()},n.unknown=function(t){return arguments.length?(a=t,n):a},n.copy=function(){return c().domain(i).range(t).unknown(a)},n}function f(){function t(){var t=a().length,i=u[1]<u[0],c=u[i-0],f=u[1-i];e=(f-c)/Math.max(1,t-s+2*h),l&&(e=Math.floor(e)),c+=(f-c-e*(t-s))*d,r=e*(1-s),l&&(c=Math.round(c),r=Math.round(r));var p=n.range(t).map(function(t){return c+e*t});return o(i?p.reverse():p)}var e,r,i=c().unknown(void 0),a=i.domain,o=i.range,u=[0,1],l=!1,s=0,h=0,d=.5;return delete i.unknown,i.domain=function(n){return arguments.length?(a(n),t()):a()},i.range=function(n){return arguments.length?(u=[+n[0],+n[1]],t()):u.slice()},i.rangeRound=function(n){return u=[+n[0],+n[1]],l=!0,t()},i.bandwidth=function(){return r},i.step=function(){return e},i.round=function(n){return arguments.length?(l=!!n,t()):l},i.padding=function(n){return arguments.length?(s=h=Math.max(0,Math.min(1,n)),t()):s},i.paddingInner=function(n){return arguments.length?(s=Math.max(0,Math.min(1,n)),t()):s},i.paddingOuter=function(n){return arguments.length?(h=Math.max(0,Math.min(1,n)),t()):h},i.align=function(n){return arguments.length?(d=Math.max(0,Math.min(1,n)),t()):d},i.copy=function(){return f().domain(a()).range(u).round(l).paddingInner(s).paddingOuter(h).align(d)},t()}function l(t){var n=t.copy;return t.padding=t.paddingOuter,delete t.paddingInner,delete t.paddingOuter,t.copy=function(){return l(n())},t}function s(){return l(f().paddingInner(1))}function h(t,n){return(n-=t=+t)?function(e){return(e-t)/n}:q(n)}function d(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=n?0:t>=e?1:r(t)}}}function p(t){return function(n,e){var r=t(n=+n,e=+e);return function(t){return t<=0?n:t>=1?e:r(t)}}}function g(t,n,e,r){var i=t[0],a=t[1],o=n[0],u=n[1];return a<i?(i=e(a,i),o=r(u,o)):(i=e(i,a),o=r(o,u)),function(t){return o(i(t))}}function m(t,e,r,i){var a=Math.min(t.length,e.length)-1,o=new Array(a),u=new Array(a),c=-1;for(t[a]<t[0]&&(t=t.slice().reverse(),e=e.slice().reverse());++c<a;)o[c]=r(t[c],t[c+1]),u[c]=i(e[c],e[c+1]);return function(e){var r=n.bisect(t,e,1,a)-1;return u[r](o[r](e))}}function v(t,n){return n.domain(t.domain()).range(t.range()).interpolate(t.interpolate()).clamp(t.clamp())}function b(t,n){function e(){return a=Math.min(c.length,f.length)>2?m:g,o=u=null,i}function i(n){return(o||(o=a(c,f,s?d(t):t,l)))(+n)}var a,o,u,c=G,f=G,l=r.interpolate,s=!1;return i.invert=function(t){return(u||(u=a(f,c,h,s?p(n):n)))(+t)},i.domain=function(t){return arguments.length?(c=Y.call(t,W),e()):c.slice()},i.range=function(t){return arguments.length?(f=j.call(t),e()):f.slice()},i.rangeRound=function(t){return f=j.call(t),l=r.interpolateRound,e()},i.clamp=function(t){return arguments.length?(s=!!t,e()):s},i.interpolate=function(t){return arguments.length?(l=t,e()):l},e()}function y(t){var e=t.domain;return t.ticks=function(t){var r=e();return n.ticks(r[0],r[r.length-1],null==t?10:t)},t.tickFormat=function(t,n){return X(e(),t,n)},t.nice=function(r){null==r&&(r=10);var i,a=e(),o=0,u=a.length-1,c=a[o],f=a[u];return f<c&&(i=c,c=f,f=i,i=o,o=u,u=i),i=n.tickIncrement(c,f,r),i>0?(c=Math.floor(c/i)*i,f=Math.ceil(f/i)*i,i=n.tickIncrement(c,f,r)):i<0&&(c=Math.ceil(c*i)/i,f=Math.floor(f*i)/i,i=n.tickIncrement(c,f,r)),i>0?(a[o]=Math.floor(c/i)*i,a[u]=Math.ceil(f/i)*i,e(a)):i<0&&(a[o]=Math.ceil(c*i)/i,a[u]=Math.floor(f*i)/i,e(a)),t},t}function w(){var t=b(h,r.interpolateNumber);return t.copy=function(){return v(t,w())},y(t)}function M(){function t(t){return+t}var n=[0,1];return t.invert=t,t.domain=t.range=function(e){return arguments.length?(n=Y.call(e,W),t):n.slice()},t.copy=function(){return M().domain(n)},y(t)}function x(t,n){return(n=Math.log(n/t))?function(e){return Math.log(e/t)/n}:q(n)}function _(t,n){return t<0?function(e){return-Math.pow(-n,e)*Math.pow(-t,1-e)}:function(e){return Math.pow(n,e)*Math.pow(t,1-e)}}function A(t){return isFinite(t)?+("1e"+t):t<0?0:t}function T(t){return 10===t?A:t===Math.E?Math.exp:function(n){return Math.pow(t,n)}}function C(t){return t===Math.E?Math.log:10===t&&Math.log10||2===t&&Math.log2||(t=Math.log(t),function(n){return Math.log(n)/t})}function S(t){return function(n){return-t(-n)}}function N(){function t(){return o=C(a),u=T(a),r()[0]<0&&(o=S(o),u=S(u)),e}var e=b(x,_).domain([1,10]),r=e.domain,a=10,o=C(10),u=T(10);return e.base=function(n){return arguments.length?(a=+n,t()):a},e.domain=function(n){return arguments.length?(r(n),t()):r()},e.ticks=function(t){var e,i=r(),c=i[0],f=i[i.length-1];(e=f<c)&&(d=c,c=f,f=d);var l,s,h,d=o(c),p=o(f),g=null==t?10:+t,m=[];if(!(a%1)&&p-d<g){if(d=Math.round(d)-1,p=Math.round(p)+1,c>0){for(;d<p;++d)for(s=1,l=u(d);s<a;++s)if(h=l*s,!(h<c)){if(h>f)break;m.push(h)}}else for(;d<p;++d)for(s=a-1,l=u(d);s>=1;--s)if(h=l*s,!(h<c)){if(h>f)break;m.push(h)}}else m=n.ticks(d,p,Math.min(p-d,g)).map(u);return e?m.reverse():m},e.tickFormat=function(t,n){if(null==n&&(n=10===a?".0e":","),"function"!=typeof n&&(n=i.format(n)),t===1/0)return n;null==t&&(t=10);var r=Math.max(1,a*t/e.ticks().length);return function(t){var e=t/u(Math.round(o(t)));return e*a<a-.5&&(e*=a),e<=r?n(t):""}},e.nice=function(){return r(V(r(),{floor:function(t){return u(Math.floor(o(t)))},ceil:function(t){return u(Math.ceil(o(t)))}}))},e.copy=function(){return v(e,N().base(a))},e}function k(t,n){return t<0?-Math.pow(-t,n):Math.pow(t,n)}function E(){function t(t,n){return(n=k(n,e)-(t=k(t,e)))?function(r){return(k(r,e)-t)/n}:q(n)}function n(t,n){return n=k(n,e)-(t=k(t,e)),function(r){return k(t+n*r,1/e)}}var e=1,r=b(t,n),i=r.domain;return r.exponent=function(t){return arguments.length?(e=+t,i(i())):e},r.copy=function(){return v(r,E().exponent(e))},y(r)}function O(){return E().exponent(.5)}function D(){function t(){var t=0,o=Math.max(1,i.length);for(a=new Array(o-1);++t<o;)a[t-1]=n.quantile(r,t/o);return e}function e(t){if(!isNaN(t=+t))return i[n.bisect(a,t)]}var r=[],i=[],a=[];return e.invertExtent=function(t){var n=i.indexOf(t);return n<0?[NaN,NaN]:[n>0?a[n-1]:r[0],n<a.length?a[n]:r[r.length-1]]},e.domain=function(e){if(!arguments.length)return r.slice();r=[];for(var i,a=0,o=e.length;a<o;++a)i=e[a],null==i||isNaN(i=+i)||r.push(i);return r.sort(n.ascending),t()},e.range=function(n){return arguments.length?(i=j.call(n),t()):i.slice()},e.quantiles=function(){return a.slice()},e.copy=function(){return D().domain(r).range(i)},e}function F(){function t(t){if(t<=t)return u[n.bisect(o,t,0,a)]}function e(){var n=-1;for(o=new Array(a);++n<a;)o[n]=((n+1)*i-(n-a)*r)/(a+1);return t}var r=0,i=1,a=1,o=[.5],u=[0,1];return t.domain=function(t){return arguments.length?(r=+t[0],i=+t[1],e()):[r,i]},t.range=function(t){return arguments.length?(a=(u=j.call(t)).length-1,e()):u.slice()},t.invertExtent=function(t){var n=u.indexOf(t);return n<0?[NaN,NaN]:n<1?[r,o[0]]:n>=a?[o[a-1],i]:[o[n-1],o[n]]},t.copy=function(){return F().domain([r,i]).range(u)},y(t)}function I(){function t(t){if(t<=t)return r[n.bisect(e,t,0,i)]}var e=[.5],r=[0,1],i=1;return t.domain=function(n){return arguments.length?(e=j.call(n),i=Math.min(e.length,r.length-1),t):e.slice()},t.range=function(n){return arguments.length?(r=j.call(n),i=Math.min(e.length,r.length-1),t):r.slice()},t.invertExtent=function(t){var n=r.indexOf(t);return[e[n-1],e[n]]},t.copy=function(){return I().domain(e).range(r)},t}function P(t){return new Date(t)}function L(t){return t instanceof Date?+t:+new Date(+t)}function U(t,e,i,a,o,u,c,f,l){function s(n){return(c(n)<n?y:u(n)<n?w:o(n)<n?M:a(n)<n?x:e(n)<n?i(n)<n?_:A:t(n)<n?T:C)(n)}function d(e,r,i,a){if(null==e&&(e=10),"number"==typeof e){var o=Math.abs(i-r)/e,u=n.bisector(function(t){return t[2]}).right(S,o);u===S.length?(a=n.tickStep(r/nt,i/nt,e),e=t):u?(u=S[o/S[u-1][2]<S[u][2]/o?u-1:u],a=u[1],e=u[0]):(a=n.tickStep(r,i,e),e=f)}return null==a?e:e.every(a)}var p=b(h,r.interpolateNumber),g=p.invert,m=p.domain,y=l(".%L"),w=l(":%S"),M=l("%I:%M"),x=l("%I %p"),_=l("%a %d"),A=l("%b %d"),T=l("%B"),C=l("%Y"),S=[[c,1,$],[c,5,5*$],[c,15,15*$],[c,30,30*$],[u,1,Z],[u,5,5*Z],[u,15,15*Z],[u,30,30*Z],[o,1,Q],[o,3,3*Q],[o,6,6*Q],[o,12,12*Q],[a,1,J],[a,2,2*J],[i,1,K],[e,1,tt],[e,3,3*tt],[t,1,nt]];return p.invert=function(t){return new Date(g(t))},p.domain=function(t){return arguments.length?m(Y.call(t,L)):m().map(P)},p.ticks=function(t,n){var e,r=m(),i=r[0],a=r[r.length-1],o=a<i;return o&&(e=i,i=a,a=e),e=d(t,i,a,n),e=e?e.range(i,a+1):[],o?e.reverse():e},p.tickFormat=function(t,n){return null==n?s:l(n)},p.nice=function(t,n){var e=m();return(t=d(t,e[0],e[e.length-1],n))?m(V(e,t)):p},p.copy=function(){return v(p,U(t,e,i,a,o,u,c,f,l))},p}function R(t){var n=t.length;return function(e){return t[Math.max(0,Math.min(n-1,Math.floor(e*n)))]}}function H(t){function n(n){var a=(n-e)/(r-e);return t(i?Math.max(0,Math.min(1,a)):a)}var e=0,r=1,i=!1;return n.domain=function(t){return arguments.length?(e=+t[0],r=+t[1],n):[e,r]},n.clamp=function(t){return arguments.length?(i=!!t,n):i},n.interpolator=function(e){return arguments.length?(t=e,n):t},n.copy=function(){return H(t).domain([e,r]).clamp(i)},y(n)}var B=Array.prototype,Y=B.map,j=B.slice,z={name:"implicit"},q=function(t){return function(){return t}},W=function(t){return+t},G=[0,1],X=function(t,e,r){var a,o=t[0],u=t[t.length-1],c=n.tickStep(o,u,null==e?10:e);switch(r=i.formatSpecifier(null==r?",f":r),r.type){case"s":var f=Math.max(Math.abs(o),Math.abs(u));return null!=r.precision||isNaN(a=i.precisionPrefix(c,f))||(r.precision=a),i.formatPrefix(r,f);case"":case"e":case"g":case"p":case"r":null!=r.precision||isNaN(a=i.precisionRound(c,Math.max(Math.abs(o),Math.abs(u))))||(r.precision=a-("e"===r.type));break;case"f":case"%":null!=r.precision||isNaN(a=i.precisionFixed(c))||(r.precision=a-2*("%"===r.type))}return i.format(r)},V=function(t,n){t=t.slice();var e,r=0,i=t.length-1,a=t[r],o=t[i];return o<a&&(e=r,r=i,i=e,e=a,a=o,o=e),t[r]=n.floor(a),t[i]=n.ceil(o),t},$=1e3,Z=60*$,Q=60*Z,J=24*Q,K=7*J,tt=30*J,nt=365*J,et=function(){return U(a.timeYear,a.timeMonth,a.timeWeek,a.timeDay,a.timeHour,a.timeMinute,a.timeSecond,a.timeMillisecond,o.timeFormat).domain([new Date(2e3,0,1),new Date(2e3,0,2)])},rt=function(){return U(a.utcYear,a.utcMonth,a.utcWeek,a.utcDay,a.utcHour,a.utcMinute,a.utcSecond,a.utcMillisecond,o.utcFormat).domain([Date.UTC(2e3,0,1),Date.UTC(2e3,0,2)])},it=function(t){return t.match(/.{6}/g).map(function(t){return"#"+t})},at=it("1f77b4ff7f0e2ca02cd627289467bd8c564be377c27f7f7fbcbd2217becf"),ot=it("393b795254a36b6ecf9c9ede6379398ca252b5cf6bcedb9c8c6d31bd9e39e7ba52e7cb94843c39ad494ad6616be7969c7b4173a55194ce6dbdde9ed6"),ut=it("3182bd6baed69ecae1c6dbefe6550dfd8d3cfdae6bfdd0a231a35474c476a1d99bc7e9c0756bb19e9ac8bcbddcdadaeb636363969696bdbdbdd9d9d9"),ct=it("1f77b4aec7e8ff7f0effbb782ca02c98df8ad62728ff98969467bdc5b0d58c564bc49c94e377c2f7b6d27f7f7fc7c7c7bcbd22dbdb8d17becf9edae5"),ft=r.interpolateCubehelixLong(u.cubehelix(300,.5,0),u.cubehelix(-240,.5,1)),lt=r.interpolateCubehelixLong(u.cubehelix(-100,.75,.35),u.cubehelix(80,1.5,.8)),st=r.interpolateCubehelixLong(u.cubehelix(260,.75,.35),u.cubehelix(80,1.5,.8)),ht=u.cubehelix(),dt=function(t){(t<0||t>1)&&(t-=Math.floor(t));var n=Math.abs(t-.5);return ht.h=360*t-100,ht.s=1.5-1.5*n,ht.l=.8-.9*n,ht+""},pt=R(it("44015444025645045745055946075a46085c460a5d460b5e470d60470e6147106347116447136548146748166848176948186a481a6c481b6d481c6e481d6f481f70482071482173482374482475482576482677482878482979472a7a472c7a472d7b472e7c472f7d46307e46327e46337f463480453581453781453882443983443a83443b84433d84433e85423f854240864241864142874144874045884046883f47883f48893e49893e4a893e4c8a3d4d8a3d4e8a3c4f8a3c508b3b518b3b528b3a538b3a548c39558c39568c38588c38598c375a8c375b8d365c8d365d8d355e8d355f8d34608d34618d33628d33638d32648e32658e31668e31678e31688e30698e306a8e2f6b8e2f6c8e2e6d8e2e6e8e2e6f8e2d708e2d718e2c718e2c728e2c738e2b748e2b758e2a768e2a778e2a788e29798e297a8e297b8e287c8e287d8e277e8e277f8e27808e26818e26828e26828e25838e25848e25858e24868e24878e23888e23898e238a8d228b8d228c8d228d8d218e8d218f8d21908d21918c20928c20928c20938c1f948c1f958b1f968b1f978b1f988b1f998a1f9a8a1e9b8a1e9c891e9d891f9e891f9f881fa0881fa1881fa1871fa28720a38620a48621a58521a68522a78522a88423a98324aa8325ab8225ac8226ad8127ad8128ae8029af7f2ab07f2cb17e2db27d2eb37c2fb47c31b57b32b67a34b67935b77937b87838b9773aba763bbb753dbc743fbc7340bd7242be7144bf7046c06f48c16e4ac16d4cc26c4ec36b50c46a52c56954c56856c66758c7655ac8645cc8635ec96260ca6063cb5f65cb5e67cc5c69cd5b6ccd5a6ece5870cf5773d05675d05477d1537ad1517cd2507fd34e81d34d84d44b86d54989d5488bd6468ed64590d74393d74195d84098d83e9bd93c9dd93ba0da39a2da37a5db36a8db34aadc32addc30b0dd2fb2dd2db5de2bb8de29bade28bddf26c0df25c2df23c5e021c8e020cae11fcde11dd0e11cd2e21bd5e21ad8e219dae319dde318dfe318e2e418e5e419e7e419eae51aece51befe51cf1e51df4e61ef6e620f8e621fbe723fde725")),gt=R(it("00000401000501010601010802010902020b02020d03030f03031204041405041606051806051a07061c08071e0907200a08220b09240c09260d0a290e0b2b100b2d110c2f120d31130d34140e36150e38160f3b180f3d19103f1a10421c10441d11471e114920114b21114e22115024125325125527125829115a2a115c2c115f2d11612f116331116533106734106936106b38106c390f6e3b0f703d0f713f0f72400f74420f75440f764510774710784910784a10794c117a4e117b4f127b51127c52137c54137d56147d57157e59157e5a167e5c167f5d177f5f187f601880621980641a80651a80671b80681c816a1c816b1d816d1d816e1e81701f81721f817320817521817621817822817922827b23827c23827e24828025828125818326818426818627818827818928818b29818c29818e2a81902a81912b81932b80942c80962c80982d80992d809b2e7f9c2e7f9e2f7fa02f7fa1307ea3307ea5317ea6317da8327daa337dab337cad347cae347bb0357bb2357bb3367ab5367ab73779b83779ba3878bc3978bd3977bf3a77c03a76c23b75c43c75c53c74c73d73c83e73ca3e72cc3f71cd4071cf4070d0416fd2426fd3436ed5446dd6456cd8456cd9466bdb476adc4869de4968df4a68e04c67e24d66e34e65e44f64e55064e75263e85362e95462ea5661eb5760ec5860ed5a5fee5b5eef5d5ef05f5ef1605df2625df2645cf3655cf4675cf4695cf56b5cf66c5cf66e5cf7705cf7725cf8745cf8765cf9785df9795df97b5dfa7d5efa7f5efa815ffb835ffb8560fb8761fc8961fc8a62fc8c63fc8e64fc9065fd9266fd9467fd9668fd9869fd9a6afd9b6bfe9d6cfe9f6dfea16efea36ffea571fea772fea973feaa74feac76feae77feb078feb27afeb47bfeb67cfeb77efeb97ffebb81febd82febf84fec185fec287fec488fec68afec88cfeca8dfecc8ffecd90fecf92fed194fed395fed597fed799fed89afdda9cfddc9efddea0fde0a1fde2a3fde3a5fde5a7fde7a9fde9aafdebacfcecaefceeb0fcf0b2fcf2b4fcf4b6fcf6b8fcf7b9fcf9bbfcfbbdfcfdbf")),mt=R(it("00000401000501010601010802010a02020c02020e03021004031204031405041706041907051b08051d09061f0a07220b07240c08260d08290e092b10092d110a30120a32140b34150b37160b39180c3c190c3e1b0c411c0c431e0c451f0c48210c4a230c4c240c4f260c51280b53290b552b0b572d0b592f0a5b310a5c320a5e340a5f3609613809623909633b09643d09653e0966400a67420a68440a68450a69470b6a490b6a4a0c6b4c0c6b4d0d6c4f0d6c510e6c520e6d540f6d550f6d57106e59106e5a116e5c126e5d126e5f136e61136e62146e64156e65156e67166e69166e6a176e6c186e6d186e6f196e71196e721a6e741a6e751b6e771c6d781c6d7a1d6d7c1d6d7d1e6d7f1e6c801f6c82206c84206b85216b87216b88226a8a226a8c23698d23698f24699025689225689326679526679727669827669a28659b29649d29649f2a63a02a63a22b62a32c61a52c60a62d60a82e5fa92e5eab2f5ead305dae305cb0315bb1325ab3325ab43359b63458b73557b93556ba3655bc3754bd3853bf3952c03a51c13a50c33b4fc43c4ec63d4dc73e4cc83f4bca404acb4149cc4248ce4347cf4446d04545d24644d34743d44842d54a41d74b3fd84c3ed94d3dda4e3cdb503bdd513ade5238df5337e05536e15635e25734e35933e45a31e55c30e65d2fe75e2ee8602de9612bea632aeb6429eb6628ec6726ed6925ee6a24ef6c23ef6e21f06f20f1711ff1731df2741cf3761bf37819f47918f57b17f57d15f67e14f68013f78212f78410f8850ff8870ef8890cf98b0bf98c0af98e09fa9008fa9207fa9407fb9606fb9706fb9906fb9b06fb9d07fc9f07fca108fca309fca50afca60cfca80dfcaa0ffcac11fcae12fcb014fcb216fcb418fbb61afbb81dfbba1ffbbc21fbbe23fac026fac228fac42afac62df9c72ff9c932f9cb35f8cd37f8cf3af7d13df7d340f6d543f6d746f5d949f5db4cf4dd4ff4df53f4e156f3e35af3e55df2e661f2e865f2ea69f1ec6df1ed71f1ef75f1f179f2f27df2f482f3f586f3f68af4f88ef5f992f6fa96f8fb9af9fc9dfafda1fcffa4")),vt=R(it("0d088710078813078916078a19068c1b068d1d068e20068f2206902406912605912805922a05932c05942e05952f059631059733059735049837049938049a3a049a3c049b3e049c3f049c41049d43039e44039e46039f48039f4903a04b03a14c02a14e02a25002a25102a35302a35502a45601a45801a45901a55b01a55c01a65e01a66001a66100a76300a76400a76600a76700a86900a86a00a86c00a86e00a86f00a87100a87201a87401a87501a87701a87801a87a02a87b02a87d03a87e03a88004a88104a78305a78405a78606a68707a68808a68a09a58b0aa58d0ba58e0ca48f0da4910ea3920fa39410a29511a19613a19814a099159f9a169f9c179e9d189d9e199da01a9ca11b9ba21d9aa31e9aa51f99a62098a72197a82296aa2395ab2494ac2694ad2793ae2892b02991b12a90b22b8fb32c8eb42e8db52f8cb6308bb7318ab83289ba3388bb3488bc3587bd3786be3885bf3984c03a83c13b82c23c81c33d80c43e7fc5407ec6417dc7427cc8437bc9447aca457acb4679cc4778cc4977cd4a76ce4b75cf4c74d04d73d14e72d24f71d35171d45270d5536fd5546ed6556dd7566cd8576bd9586ada5a6ada5b69db5c68dc5d67dd5e66de5f65de6164df6263e06363e16462e26561e26660e3685fe4695ee56a5de56b5de66c5ce76e5be76f5ae87059e97158e97257ea7457eb7556eb7655ec7754ed7953ed7a52ee7b51ef7c51ef7e50f07f4ff0804ef1814df1834cf2844bf3854bf3874af48849f48948f58b47f58c46f68d45f68f44f79044f79143f79342f89441f89540f9973ff9983ef99a3efa9b3dfa9c3cfa9e3bfb9f3afba139fba238fca338fca537fca636fca835fca934fdab33fdac33fdae32fdaf31fdb130fdb22ffdb42ffdb52efeb72dfeb82cfeba2cfebb2bfebd2afebe2afec029fdc229fdc328fdc527fdc627fdc827fdca26fdcb26fccd25fcce25fcd025fcd225fbd324fbd524fbd724fad824fada24f9dc24f9dd25f8df25f8e125f7e225f7e425f6e626f6e826f5e926f5eb27f4ed27f3ee27f3f027f2f227f1f426f1f525f0f724f0f921"));t.scaleBand=f,t.scalePoint=s,t.scaleIdentity=M,t.scaleLinear=w,t.scaleLog=N,t.scaleOrdinal=c,t.scaleImplicit=z,t.scalePow=E,t.scaleSqrt=O,t.scaleQuantile=D,t.scaleQuantize=F,t.scaleThreshold=I,t.scaleTime=et,t.scaleUtc=rt,t.schemeCategory10=at,t.schemeCategory20b=ot,t.schemeCategory20c=ut,t.schemeCategory20=ct,t.interpolateCubehelixDefault=ft,t.interpolateRainbow=dt,t.interpolateWarm=lt,t.interpolateCool=st,t.interpolateViridis=pt,t.interpolateMagma=gt,t.interpolateInferno=mt,t.interpolatePlasma=vt,t.scaleSequential=H,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(){}function e(t,e){var r=new n;if(t instanceof n)t.each(function(t,n){r.set(n,t)});else if(Array.isArray(t)){var i,a=-1,o=t.length;if(null==e)for(;++a<o;)r.set(a,t[a]);else for(;++a<o;)r.set(e(i=t[a],a,t),i)}else if(t)for(var u in t)r.set(u,t[u]);return r}function r(){return{}}function i(t,n,e){t[n]=e}function a(){return e()}function o(t,n,e){t.set(n,e)}function u(){}function c(t,n){var e=new u;if(t instanceof u)t.each(function(t){e.add(t)});else if(t){var r=-1,i=t.length;if(null==n)for(;++r<i;)e.add(t[r]);else for(;++r<i;)e.add(n(t[r],r,t))}return e}var f="$";n.prototype=e.prototype={constructor:n,has:function(t){return f+t in this},get:function(t){return this[f+t]},set:function(t,n){return this[f+t]=n,this},remove:function(t){var n=f+t;return n in this&&delete this[n]},clear:function(){for(var t in this)t[0]===f&&delete this[t]},keys:function(){var t=[];for(var n in this)n[0]===f&&t.push(n.slice(1));return t},values:function(){var t=[];for(var n in this)n[0]===f&&t.push(this[n]);return t},entries:function(){var t=[];for(var n in this)n[0]===f&&t.push({key:n.slice(1),value:this[n]});return t},size:function(){var t=0;for(var n in this)n[0]===f&&++t;return t},empty:function(){for(var t in this)if(t[0]===f)return!1;return!0},each:function(t){for(var n in this)n[0]===f&&t(this[n],n.slice(1),this)}};var l=function(){function t(n,r,i,a){if(r>=l.length)return null!=u&&n.sort(u),null!=c?c(n):n;for(var o,f,s,h=-1,d=n.length,p=l[r++],g=e(),m=i();++h<d;)(s=g.get(o=p(f=n[h])+""))?s.push(f):g.set(o,[f]);return g.each(function(n,e){a(m,e,t(n,r,i,a))}),m}function n(t,e){if(++e>l.length)return t;var r,i=s[e-1];return null!=c&&e>=l.length?r=t.entries():(r=[],t.each(function(t,i){r.push({key:i,values:n(t,e)})})),null!=i?r.sort(function(t,n){return i(t.key,n.key)}):r}var u,c,f,l=[],s=[];return f={object:function(n){return t(n,0,r,i)},map:function(n){return t(n,0,a,o)},entries:function(e){return n(t(e,0,a,o),0)},key:function(t){return l.push(t),f},sortKeys:function(t){return s[l.length-1]=t,f},sortValues:function(t){return u=t,f},rollup:function(t){return c=t,f}}},s=e.prototype;u.prototype=c.prototype={constructor:u,has:s.has,add:function(t){return t+="",this[f+t]=t,this},remove:s.remove,clear:s.clear,values:s.keys,size:s.size,empty:s.empty,each:s.each};var h=function(t){var n=[];for(var e in t)n.push(e);return n},d=function(t){var n=[];for(var e in t)n.push(t[e]);return n},p=function(t){var n=[];for(var e in t)n.push({key:e,value:t[e]});return n};t.nest=l,t.set=c,t.map=e,t.keys=h,t.values=d,t.entries=p,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,r){r(n,e(4))}(this,function(t,n){"use strict";function e(t,n,e,r,i){var a=t*t,o=a*t;return((1-3*t+3*a-o)*n+(4-6*a+3*o)*e+(1+3*t+3*a-3*o)*r+o*i)/6}function r(t,n){return function(e){return t+e*n}}function i(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function a(t,n){var e=n-t;return e?r(t,e>180||e<-180?e-360*Math.round(e/360):e):S(isNaN(t)?n:t)}function o(t){return 1===(t=+t)?u:function(n,e){return e-n?i(n,e,t):S(isNaN(n)?e:n)}}function u(t,n){var e=n-t;return e?r(t,e):S(isNaN(t)?n:t)}function c(t){return function(e){var r,i,a=e.length,o=new Array(a),u=new Array(a),c=new Array(a);for(r=0;r<a;++r)i=n.rgb(e[r]),o[r]=i.r||0,u[r]=i.g||0,c[r]=i.b||0;return o=t(o),u=t(u),c=t(c),i.opacity=1,function(t){return i.r=o(t),i.g=u(t),i.b=c(t),i+""}}}function f(t){return function(){return t}}function l(t){return function(n){return t(n)+""}}function s(t){return"none"===t?Y:(M||(M=document.createElement("DIV"),x=document.documentElement,_=document.defaultView),M.style.transform=t,t=_.getComputedStyle(x.appendChild(M),null).getPropertyValue("transform"),x.removeChild(M),t=t.slice(7,-1).split(","),j(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function h(t){return null==t?Y:(A||(A=document.createElementNS("http://www.w3.org/2000/svg","g")),A.setAttribute("transform",t),(t=A.transform.baseVal.consolidate())?(t=t.matrix,j(t.a,t.b,t.c,t.d,t.e,t.f)):Y)}function d(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}function a(t,r,i,a,o,u){if(t!==i||r!==a){var c=o.push("translate(",null,n,null,e);u.push({i:c-4,x:F(t,i)},{i:c-2,x:F(r,a)})}else(i||a)&&o.push("translate("+i+n+a+e)}function o(t,n,e,a){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),a.push({i:e.push(i(e)+"rotate(",null,r)-2,x:F(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}function u(t,n,e,a){t!==n?a.push({i:e.push(i(e)+"skewX(",null,r)-2,x:F(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}function c(t,n,e,r,a,o){if(t!==e||n!==r){var u=a.push(i(a)+"scale(",null,",",null,")");o.push({i:u-4,x:F(t,e)},{i:u-2,x:F(n,r)})}else 1===e&&1===r||a.push(i(a)+"scale("+e+","+r+")")}return function(n,e){var r=[],i=[];return n=t(n),e=t(e),a(n.translateX,n.translateY,e.translateX,e.translateY,r,i),o(n.rotate,e.rotate,r,i),u(n.skewX,e.skewX,r,i),c(n.scaleX,n.scaleY,e.scaleX,e.scaleY,r,i),n=e=null,function(t){for(var n,e=-1,a=i.length;++e<a;)r[(n=i[e]).i]=n.x(t);return r.join("")}}}function p(t){return((t=Math.exp(t))+1/t)/2}function g(t){return((t=Math.exp(t))-1/t)/2}function m(t){return((t=Math.exp(2*t))-1)/(t+1)}function v(t){return function(e,r){var i=t((e=n.hsl(e)).h,(r=n.hsl(r)).h),a=u(e.s,r.s),o=u(e.l,r.l),c=u(e.opacity,r.opacity);return function(t){return e.h=i(t),e.s=a(t),e.l=o(t),e.opacity=c(t),e+""}}}function b(t,e){var r=u((t=n.lab(t)).l,(e=n.lab(e)).l),i=u(t.a,e.a),a=u(t.b,e.b),o=u(t.opacity,e.opacity);return function(n){return t.l=r(n),t.a=i(n),t.b=a(n),t.opacity=o(n),t+""}}function y(t){return function(e,r){var i=t((e=n.hcl(e)).h,(r=n.hcl(r)).h),a=u(e.c,r.c),o=u(e.l,r.l),c=u(e.opacity,r.opacity);return function(t){return e.h=i(t),e.c=a(t),e.l=o(t),e.opacity=c(t),e+""}}}function w(t){return function e(r){function i(e,i){var a=t((e=n.cubehelix(e)).h,(i=n.cubehelix(i)).h),o=u(e.s,i.s),c=u(e.l,i.l),f=u(e.opacity,i.opacity);return function(t){return e.h=a(t),e.s=o(t),e.l=c(Math.pow(t,r)),e.opacity=f(t),e+""}}return r=+r,i.gamma=e,i}(1)}var M,x,_,A,T=function(t){var n=t.length-1;return function(r){var i=r<=0?r=0:r>=1?(r=1,n-1):Math.floor(r*n),a=t[i],o=t[i+1],u=i>0?t[i-1]:2*a-o,c=i<n-1?t[i+2]:2*o-a;return e((r-i/n)*n,u,a,o,c)}},C=function(t){var n=t.length;return function(r){var i=Math.floor(((r%=1)<0?++r:r)*n),a=t[(i+n-1)%n],o=t[i%n],u=t[(i+1)%n],c=t[(i+2)%n];return e((r-i/n)*n,a,o,u,c)}},S=function(t){return function(){return t}},N=function t(e){function r(t,e){var r=i((t=n.rgb(t)).r,(e=n.rgb(e)).r),a=i(t.g,e.g),o=i(t.b,e.b),c=u(t.opacity,e.opacity);return function(n){return t.r=r(n),t.g=a(n),t.b=o(n),t.opacity=c(n),t+""}}var i=o(e);return r.gamma=t,r}(1),k=c(T),E=c(C),O=function(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,a=new Array(r),o=new Array(r);for(e=0;e<i;++e)a[e]=R(t[e],n[e]);for(;e<r;++e)o[e]=n[e];return function(t){for(e=0;e<i;++e)o[e]=a[e](t);return o}},D=function(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}},F=function(t,n){return t=+t,n-=t,function(e){return t+n*e}},I=function(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=R(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}},P=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,L=new RegExp(P.source,"g"),U=function(t,n){var e,r,i,a=P.lastIndex=L.lastIndex=0,o=-1,u=[],c=[];for(t+="",n+="";(e=P.exec(t))&&(r=L.exec(n));)(i=r.index)>a&&(i=n.slice(a,i),u[o]?u[o]+=i:u[++o]=i),(e=e[0])===(r=r[0])?u[o]?u[o]+=r:u[++o]=r:(u[++o]=null,c.push({i:o,x:F(e,r)})),a=L.lastIndex;return a<n.length&&(i=n.slice(a),u[o]?u[o]+=i:u[++o]=i),u.length<2?c[0]?l(c[0].x):f(n):(n=c.length,function(t){for(var e,r=0;r<n;++r)u[(e=c[r]).i]=e.x(t);return u.join("")})},R=function(t,e){var r,i=typeof e;return null==e||"boolean"===i?S(e):("number"===i?F:"string"===i?(r=n.color(e))?(e=r,N):U:e instanceof n.color?N:e instanceof Date?D:Array.isArray(e)?O:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?I:F)(t,e)},H=function(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}},B=180/Math.PI,Y={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},j=function(t,n,e,r,i,a){var o,u,c;return(o=Math.sqrt(t*t+n*n))&&(t/=o,n/=o),(c=t*e+n*r)&&(e-=t*c,r-=n*c),(u=Math.sqrt(e*e+r*r))&&(e/=u,r/=u,c/=u),t*r<n*e&&(t=-t,n=-n,c=-c,o=-o),{translateX:i,translateY:a,rotate:Math.atan2(n,t)*B,skewX:Math.atan(c)*B,scaleX:o,scaleY:u}},z=d(s,"px, ","px)","deg)"),q=d(h,", ",")",")"),W=Math.SQRT2,G=2,X=4,V=1e-12,$=function(t,n){var e,r,i=t[0],a=t[1],o=t[2],u=n[0],c=n[1],f=n[2],l=u-i,s=c-a,h=l*l+s*s;if(h<V)r=Math.log(f/o)/W,e=function(t){return[i+t*l,a+t*s,o*Math.exp(W*t*r)]};else{var d=Math.sqrt(h),v=(f*f-o*o+X*h)/(2*o*G*d),b=(f*f-o*o-X*h)/(2*f*G*d),y=Math.log(Math.sqrt(v*v+1)-v),w=Math.log(Math.sqrt(b*b+1)-b);r=(w-y)/W,e=function(t){var n=t*r,e=p(y),u=o/(G*d)*(e*m(W*n+y)-g(y));return[i+u*l,a+u*s,o*e/p(W*n+y)]}}return e.duration=1e3*r,e},Z=v(a),Q=v(u),J=y(a),K=y(u),tt=w(a),nt=w(u),et=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e};t.interpolate=R,t.interpolateArray=O,t.interpolateBasis=T,t.interpolateBasisClosed=C,t.interpolateDate=D,t.interpolateNumber=F,t.interpolateObject=I,t.interpolateRound=H,t.interpolateString=U,t.interpolateTransformCss=z,t.interpolateTransformSvg=q,t.interpolateZoom=$,t.interpolateRgb=N,t.interpolateRgbBasis=k,t.interpolateRgbBasisClosed=E,t.interpolateHsl=Z,t.interpolateHslLong=Q,t.interpolateLab=b,t.interpolateHcl=J,t.interpolateHclLong=K,t.interpolateCubehelix=tt,t.interpolateCubehelixLong=nt,t.quantize=et,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t,e,r,o){function u(n){return t(n=new Date(+n)),n}return u.floor=u,u.ceil=function(n){return t(n=new Date(n-1)),e(n,1),t(n),n},u.round=function(t){var n=u(t),e=u.ceil(t);return t-n<e-t?n:e},u.offset=function(t,n){
return e(t=new Date(+t),null==n?1:Math.floor(n)),t},u.range=function(n,r,i){var a=[];if(n=u.ceil(n),i=null==i?1:Math.floor(i),!(n<r&&i>0))return a;do a.push(new Date(+n));while(e(n,i),t(n),n<r);return a},u.filter=function(r){return n(function(n){if(n>=n)for(;t(n),!r(n);)n.setTime(n-1)},function(t,n){if(t>=t)if(n<0)for(;++n<=0;)for(;e(t,-1),!r(t););else for(;--n>=0;)for(;e(t,1),!r(t););})},r&&(u.count=function(n,e){return i.setTime(+n),a.setTime(+e),t(i),t(a),Math.floor(r(i,a))},u.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?u.filter(o?function(n){return o(n)%t===0}:function(n){return u.count(0,n)%t===0}):u:null}),u}function e(t){return n(function(n){n.setDate(n.getDate()-(n.getDay()+7-t)%7),n.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+7*n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*f)/h})}function r(t){return n(function(n){n.setUTCDate(n.getUTCDate()-(n.getUTCDay()+7-t)%7),n.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+7*n)},function(t,n){return(n-t)/h})}var i=new Date,a=new Date,o=n(function(){},function(t,n){t.setTime(+t+n)},function(t,n){return n-t});o.every=function(t){return t=Math.floor(t),isFinite(t)&&t>0?t>1?n(function(n){n.setTime(Math.floor(n/t)*t)},function(n,e){n.setTime(+n+e*t)},function(n,e){return(e-n)/t}):o:null};var u=o.range,c=1e3,f=6e4,l=36e5,s=864e5,h=6048e5,d=n(function(t){t.setTime(Math.floor(t/c)*c)},function(t,n){t.setTime(+t+n*c)},function(t,n){return(n-t)/c},function(t){return t.getUTCSeconds()}),p=d.range,g=n(function(t){t.setTime(Math.floor(t/f)*f)},function(t,n){t.setTime(+t+n*f)},function(t,n){return(n-t)/f},function(t){return t.getMinutes()}),m=g.range,v=n(function(t){var n=t.getTimezoneOffset()*f%l;n<0&&(n+=l),t.setTime(Math.floor((+t-n)/l)*l+n)},function(t,n){t.setTime(+t+n*l)},function(t,n){return(n-t)/l},function(t){return t.getHours()}),b=v.range,y=n(function(t){t.setHours(0,0,0,0)},function(t,n){t.setDate(t.getDate()+n)},function(t,n){return(n-t-(n.getTimezoneOffset()-t.getTimezoneOffset())*f)/s},function(t){return t.getDate()-1}),w=y.range,M=e(0),x=e(1),_=e(2),A=e(3),T=e(4),C=e(5),S=e(6),N=M.range,k=x.range,E=_.range,O=A.range,D=T.range,F=C.range,I=S.range,P=n(function(t){t.setDate(1),t.setHours(0,0,0,0)},function(t,n){t.setMonth(t.getMonth()+n)},function(t,n){return n.getMonth()-t.getMonth()+12*(n.getFullYear()-t.getFullYear())},function(t){return t.getMonth()}),L=P.range,U=n(function(t){t.setMonth(0,1),t.setHours(0,0,0,0)},function(t,n){t.setFullYear(t.getFullYear()+n)},function(t,n){return n.getFullYear()-t.getFullYear()},function(t){return t.getFullYear()});U.every=function(t){return isFinite(t=Math.floor(t))&&t>0?n(function(n){n.setFullYear(Math.floor(n.getFullYear()/t)*t),n.setMonth(0,1),n.setHours(0,0,0,0)},function(n,e){n.setFullYear(n.getFullYear()+e*t)}):null};var R=U.range,H=n(function(t){t.setUTCSeconds(0,0)},function(t,n){t.setTime(+t+n*f)},function(t,n){return(n-t)/f},function(t){return t.getUTCMinutes()}),B=H.range,Y=n(function(t){t.setUTCMinutes(0,0,0)},function(t,n){t.setTime(+t+n*l)},function(t,n){return(n-t)/l},function(t){return t.getUTCHours()}),j=Y.range,z=n(function(t){t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCDate(t.getUTCDate()+n)},function(t,n){return(n-t)/s},function(t){return t.getUTCDate()-1}),q=z.range,W=r(0),G=r(1),X=r(2),V=r(3),$=r(4),Z=r(5),Q=r(6),J=W.range,K=G.range,tt=X.range,nt=V.range,et=$.range,rt=Z.range,it=Q.range,at=n(function(t){t.setUTCDate(1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCMonth(t.getUTCMonth()+n)},function(t,n){return n.getUTCMonth()-t.getUTCMonth()+12*(n.getUTCFullYear()-t.getUTCFullYear())},function(t){return t.getUTCMonth()}),ot=at.range,ut=n(function(t){t.setUTCMonth(0,1),t.setUTCHours(0,0,0,0)},function(t,n){t.setUTCFullYear(t.getUTCFullYear()+n)},function(t,n){return n.getUTCFullYear()-t.getUTCFullYear()},function(t){return t.getUTCFullYear()});ut.every=function(t){return isFinite(t=Math.floor(t))&&t>0?n(function(n){n.setUTCFullYear(Math.floor(n.getUTCFullYear()/t)*t),n.setUTCMonth(0,1),n.setUTCHours(0,0,0,0)},function(n,e){n.setUTCFullYear(n.getUTCFullYear()+e*t)}):null};var ct=ut.range;t.timeInterval=n,t.timeMillisecond=o,t.timeMilliseconds=u,t.utcMillisecond=o,t.utcMilliseconds=u,t.timeSecond=d,t.timeSeconds=p,t.utcSecond=d,t.utcSeconds=p,t.timeMinute=g,t.timeMinutes=m,t.timeHour=v,t.timeHours=b,t.timeDay=y,t.timeDays=w,t.timeWeek=M,t.timeWeeks=N,t.timeSunday=M,t.timeSundays=N,t.timeMonday=x,t.timeMondays=k,t.timeTuesday=_,t.timeTuesdays=E,t.timeWednesday=A,t.timeWednesdays=O,t.timeThursday=T,t.timeThursdays=D,t.timeFriday=C,t.timeFridays=F,t.timeSaturday=S,t.timeSaturdays=I,t.timeMonth=P,t.timeMonths=L,t.timeYear=U,t.timeYears=R,t.utcMinute=H,t.utcMinutes=B,t.utcHour=Y,t.utcHours=j,t.utcDay=z,t.utcDays=q,t.utcWeek=W,t.utcWeeks=J,t.utcSunday=W,t.utcSundays=J,t.utcMonday=G,t.utcMondays=K,t.utcTuesday=X,t.utcTuesdays=tt,t.utcWednesday=V,t.utcWednesdays=nt,t.utcThursday=$,t.utcThursdays=et,t.utcFriday=Z,t.utcFridays=rt,t.utcSaturday=Q,t.utcSaturdays=it,t.utcMonth=at,t.utcMonths=ot,t.utcYear=ut,t.utcYears=ct,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,r){r(n,e(10))}(this,function(t,n){"use strict";function e(t){if(0<=t.y&&t.y<100){var n=new Date(-1,t.m,t.d,t.H,t.M,t.S,t.L);return n.setFullYear(t.y),n}return new Date(t.y,t.m,t.d,t.H,t.M,t.S,t.L)}function r(t){if(0<=t.y&&t.y<100){var n=new Date(Date.UTC(-1,t.m,t.d,t.H,t.M,t.S,t.L));return n.setUTCFullYear(t.y),n}return new Date(Date.UTC(t.y,t.m,t.d,t.H,t.M,t.S,t.L))}function i(t){return{y:t,m:0,d:1,H:0,M:0,S:0,L:0}}function a(t){function n(t,n){return function(e){var r,i,a,o=[],u=-1,c=0,f=t.length;for(e instanceof Date||(e=new Date(+e));++u<f;)37===t.charCodeAt(u)&&(o.push(t.slice(c,u)),null!=(i=rt[r=t.charAt(++u)])?r=t.charAt(++u):i="e"===r?" ":"0",(a=n[r])&&(r=a(e,i)),o.push(r),c=u+1);return o.push(t.slice(c,u)),o.join("")}}function a(t,n){return function(e){var a=i(1900),u=o(a,t,e+="",0);if(u!=e.length)return null;if("p"in a&&(a.H=a.H%12+12*a.p),"W"in a||"U"in a){"w"in a||(a.w="W"in a?1:0);var c="Z"in a?r(i(a.y)).getUTCDay():n(i(a.y)).getDay();a.m=0,a.d="W"in a?(a.w+6)%7+7*a.W-(c+5)%7:a.w+7*a.U-(c+6)%7}return"Z"in a?(a.H+=a.Z/100|0,a.M+=a.Z%100,r(a)):n(a)}}function o(t,n,e,r){for(var i,a,o=0,u=n.length,c=e.length;o<u;){if(r>=c)return-1;if(i=n.charCodeAt(o++),37===i){if(i=n.charAt(o++),a=Ut[i in rt?n.charAt(o++):i],!a||(r=a(t,e,r))<0)return-1}else if(i!=e.charCodeAt(r++))return-1}return r}function u(t,n,e){var r=Tt.exec(n.slice(e));return r?(t.p=Ct[r[0].toLowerCase()],e+r[0].length):-1}function K(t,n,e){var r=kt.exec(n.slice(e));return r?(t.w=Et[r[0].toLowerCase()],e+r[0].length):-1}function tt(t,n,e){var r=St.exec(n.slice(e));return r?(t.w=Nt[r[0].toLowerCase()],e+r[0].length):-1}function nt(t,n,e){var r=Ft.exec(n.slice(e));return r?(t.m=It[r[0].toLowerCase()],e+r[0].length):-1}function et(t,n,e){var r=Ot.exec(n.slice(e));return r?(t.m=Dt[r[0].toLowerCase()],e+r[0].length):-1}function it(t,n,e){return o(t,vt,n,e)}function at(t,n,e){return o(t,bt,n,e)}function ot(t,n,e){return o(t,yt,n,e)}function ut(t){return xt[t.getDay()]}function ct(t){return Mt[t.getDay()]}function ft(t){return At[t.getMonth()]}function lt(t){return _t[t.getMonth()]}function st(t){return wt[+(t.getHours()>=12)]}function ht(t){return xt[t.getUTCDay()]}function dt(t){return Mt[t.getUTCDay()]}function pt(t){return At[t.getUTCMonth()]}function gt(t){return _t[t.getUTCMonth()]}function mt(t){return wt[+(t.getUTCHours()>=12)]}var vt=t.dateTime,bt=t.date,yt=t.time,wt=t.periods,Mt=t.days,xt=t.shortDays,_t=t.months,At=t.shortMonths,Tt=c(wt),Ct=f(wt),St=c(Mt),Nt=f(Mt),kt=c(xt),Et=f(xt),Ot=c(_t),Dt=f(_t),Ft=c(At),It=f(At),Pt={a:ut,A:ct,b:ft,B:lt,c:null,d:A,e:A,H:T,I:C,j:S,L:N,m:k,M:E,p:st,S:O,U:D,w:F,W:I,x:null,X:null,y:P,Y:L,Z:U,"%":J},Lt={a:ht,A:dt,b:pt,B:gt,c:null,d:R,e:R,H:H,I:B,j:Y,L:j,m:z,M:q,p:mt,S:W,U:G,w:X,W:V,x:null,X:null,y:$,Y:Z,Z:Q,"%":J},Ut={a:K,A:tt,b:nt,B:et,c:it,d:v,e:v,H:y,I:y,j:b,L:x,m:m,M:w,p:u,S:M,U:s,w:l,W:h,x:at,X:ot,y:p,Y:d,Z:g,"%":_};return Pt.x=n(bt,Pt),Pt.X=n(yt,Pt),Pt.c=n(vt,Pt),Lt.x=n(bt,Lt),Lt.X=n(yt,Lt),Lt.c=n(vt,Lt),{format:function(t){var e=n(t+="",Pt);return e.toString=function(){return t},e},parse:function(t){var n=a(t+="",e);return n.toString=function(){return t},n},utcFormat:function(t){var e=n(t+="",Lt);return e.toString=function(){return t},e},utcParse:function(t){var n=a(t,r);return n.toString=function(){return t},n}}}function o(t,n,e){var r=t<0?"-":"",i=(r?-t:t)+"",a=i.length;return r+(a<e?new Array(e-a+1).join(n)+i:i)}function u(t){return t.replace(ot,"\\$&")}function c(t){return new RegExp("^(?:"+t.map(u).join("|")+")","i")}function f(t){for(var n={},e=-1,r=t.length;++e<r;)n[t[e].toLowerCase()]=e;return n}function l(t,n,e){var r=it.exec(n.slice(e,e+1));return r?(t.w=+r[0],e+r[0].length):-1}function s(t,n,e){var r=it.exec(n.slice(e));return r?(t.U=+r[0],e+r[0].length):-1}function h(t,n,e){var r=it.exec(n.slice(e));return r?(t.W=+r[0],e+r[0].length):-1}function d(t,n,e){var r=it.exec(n.slice(e,e+4));return r?(t.y=+r[0],e+r[0].length):-1}function p(t,n,e){var r=it.exec(n.slice(e,e+2));return r?(t.y=+r[0]+(+r[0]>68?1900:2e3),e+r[0].length):-1}function g(t,n,e){var r=/^(Z)|([+-]\d\d)(?:\:?(\d\d))?/.exec(n.slice(e,e+6));return r?(t.Z=r[1]?0:-(r[2]+(r[3]||"00")),e+r[0].length):-1}function m(t,n,e){var r=it.exec(n.slice(e,e+2));return r?(t.m=r[0]-1,e+r[0].length):-1}function v(t,n,e){var r=it.exec(n.slice(e,e+2));return r?(t.d=+r[0],e+r[0].length):-1}function b(t,n,e){var r=it.exec(n.slice(e,e+3));return r?(t.m=0,t.d=+r[0],e+r[0].length):-1}function y(t,n,e){var r=it.exec(n.slice(e,e+2));return r?(t.H=+r[0],e+r[0].length):-1}function w(t,n,e){var r=it.exec(n.slice(e,e+2));return r?(t.M=+r[0],e+r[0].length):-1}function M(t,n,e){var r=it.exec(n.slice(e,e+2));return r?(t.S=+r[0],e+r[0].length):-1}function x(t,n,e){var r=it.exec(n.slice(e,e+3));return r?(t.L=+r[0],e+r[0].length):-1}function _(t,n,e){var r=at.exec(n.slice(e,e+1));return r?e+r[0].length:-1}function A(t,n){return o(t.getDate(),n,2)}function T(t,n){return o(t.getHours(),n,2)}function C(t,n){return o(t.getHours()%12||12,n,2)}function S(t,e){return o(1+n.timeDay.count(n.timeYear(t),t),e,3)}function N(t,n){return o(t.getMilliseconds(),n,3)}function k(t,n){return o(t.getMonth()+1,n,2)}function E(t,n){return o(t.getMinutes(),n,2)}function O(t,n){return o(t.getSeconds(),n,2)}function D(t,e){return o(n.timeSunday.count(n.timeYear(t),t),e,2)}function F(t){return t.getDay()}function I(t,e){return o(n.timeMonday.count(n.timeYear(t),t),e,2)}function P(t,n){return o(t.getFullYear()%100,n,2)}function L(t,n){return o(t.getFullYear()%1e4,n,4)}function U(t){var n=t.getTimezoneOffset();return(n>0?"-":(n*=-1,"+"))+o(n/60|0,"0",2)+o(n%60,"0",2)}function R(t,n){return o(t.getUTCDate(),n,2)}function H(t,n){return o(t.getUTCHours(),n,2)}function B(t,n){return o(t.getUTCHours()%12||12,n,2)}function Y(t,e){return o(1+n.utcDay.count(n.utcYear(t),t),e,3)}function j(t,n){return o(t.getUTCMilliseconds(),n,3)}function z(t,n){return o(t.getUTCMonth()+1,n,2)}function q(t,n){return o(t.getUTCMinutes(),n,2)}function W(t,n){return o(t.getUTCSeconds(),n,2)}function G(t,e){return o(n.utcSunday.count(n.utcYear(t),t),e,2)}function X(t){return t.getUTCDay()}function V(t,e){return o(n.utcMonday.count(n.utcYear(t),t),e,2)}function $(t,n){return o(t.getUTCFullYear()%100,n,2)}function Z(t,n){return o(t.getUTCFullYear()%1e4,n,4)}function Q(){return"+0000"}function J(){return"%"}function K(n){return et=a(n),t.timeFormat=et.format,t.timeParse=et.parse,t.utcFormat=et.utcFormat,t.utcParse=et.utcParse,et}function tt(t){return t.toISOString()}function nt(t){var n=new Date(t);return isNaN(n)?null:n}var et,rt={"-":"",_:" ",0:"0"},it=/^\s*\d+/,at=/^%/,ot=/[\\\^\$\*\+\?\|\[\]\(\)\.\{\}]/g;K({dateTime:"%x, %X",date:"%-m/%-d/%Y",time:"%-I:%M:%S %p",periods:["AM","PM"],days:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"],shortDays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],months:["January","February","March","April","May","June","July","August","September","October","November","December"],shortMonths:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]});var ut="%Y-%m-%dT%H:%M:%S.%LZ",ct=Date.prototype.toISOString?tt:t.utcFormat(ut),ft=+new Date("2000-01-01T00:00:00.000Z")?nt:t.utcParse(ut);t.timeFormatDefaultLocale=K,t.timeFormatLocale=a,t.isoFormat=ct,t.isoParse=ft,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===K&&n.documentElement.namespaceURI===K?n.createElement(t):n.createElementNS(e,t)}}function e(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function r(){return new i}function i(){this._="@"+(++rt).toString(36)}function a(t,n,e){return t=o(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function o(n,e,r){return function(i){var a=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=a}}}function u(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function c(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,a=n.length;r<a;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function f(t,n,e){var r=ct.hasOwnProperty(t.type)?a:o;return function(i,a,o){var u,c=this.__on,f=r(n,a,o);if(c)for(var l=0,s=c.length;l<s;++l)if((u=c[l]).type===t.type&&u.name===t.name)return this.removeEventListener(u.type,u.listener,u.capture),this.addEventListener(u.type,u.listener=f,u.capture=e),void(u.value=n);this.addEventListener(t.type,f,e),u={type:t.type,name:t.name,value:n,listener:f,capture:e},c?c.push(u):this.__on=[u]}}function l(n,e,r,i){var a=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=a}}function s(){}function h(){return[]}function d(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function p(t,n,e,r,i,a){for(var o,u=0,c=n.length,f=a.length;u<f;++u)(o=n[u])?(o.__data__=a[u],r[u]=o):e[u]=new d(t,a[u]);for(;u<c;++u)(o=n[u])&&(i[u]=o)}function g(t,n,e,r,i,a,o){var u,c,f,l={},s=n.length,h=a.length,p=new Array(s);for(u=0;u<s;++u)(c=n[u])&&(p[u]=f=xt+o.call(c,c.__data__,u,n),f in l?i[u]=c:l[f]=c);for(u=0;u<h;++u)f=xt+o.call(t,a[u],u,a),(c=l[f])?(r[u]=c,c.__data__=a[u],l[f]=null):e[u]=new d(t,a[u]);for(u=0;u<s;++u)(c=n[u])&&l[p[u]]===c&&(i[u]=c)}function m(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function v(t){return function(){this.removeAttribute(t)}}function b(t){return function(){this.removeAttributeNS(t.space,t.local)}}function y(t,n){return function(){this.setAttribute(t,n)}}function w(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function M(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function x(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function _(t){return function(){this.style.removeProperty(t)}}function A(t,n,e){return function(){this.style.setProperty(t,n,e)}}function T(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function C(t,n){return t.style.getPropertyValue(n)||Pt(t).getComputedStyle(t,null).getPropertyValue(n)}function S(t){return function(){delete this[t]}}function N(t,n){return function(){this[t]=n}}function k(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function E(t){return t.trim().split(/^|\s+/)}function O(t){return t.classList||new D(t)}function D(t){this._node=t,this._names=E(t.getAttribute("class")||"")}function F(t,n){for(var e=O(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function I(t,n){for(var e=O(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function P(t){return function(){F(this,t)}}function L(t){return function(){I(this,t)}}function U(t,n){return function(){(n.apply(this,arguments)?F:I)(this,t)}}function R(){this.textContent=""}function H(t){return function(){this.textContent=t}}function B(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function Y(){this.innerHTML=""}function j(t){return function(){this.innerHTML=t}}function z(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function q(){this.nextSibling&&this.parentNode.appendChild(this)}function W(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function G(){return null}function X(){var t=this.parentNode;t&&t.removeChild(this)}function V(t,n,e){var r=Pt(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function $(t,n){return function(){return V(this,t,n)}}function Z(t,n){return function(){return V(this,t,n.apply(this,arguments))}}function Q(t,n){this._groups=t,this._parents=n}function J(){return new Q([[document.documentElement]],Vt)}var K="http://www.w3.org/1999/xhtml",tt={svg:"http://www.w3.org/2000/svg",xhtml:K,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},nt=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),tt.hasOwnProperty(n)?{space:tt[n],local:t}:t},et=function(t){var r=nt(t);return(r.local?e:n)(r)},rt=0;i.prototype=r.prototype={constructor:i,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var it=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var at=document.documentElement;if(!at.matches){var ot=at.webkitMatchesSelector||at.msMatchesSelector||at.mozMatchesSelector||at.oMatchesSelector;it=function(t){return function(){return ot.call(this,t)}}}}var ut=it,ct={};if(t.event=null,"undefined"!=typeof document){var ft=document.documentElement;"onmouseenter"in ft||(ct={mouseenter:"mouseover",mouseleave:"mouseout"})}var lt=function(t,n,e){var r,i,a=u(t+""),o=a.length;{if(!(arguments.length<2)){for(l=n?f:c,null==e&&(e=!1),r=0;r<o;++r)this.each(l(a[r],n,e));return this}var l=this.node().__on;if(l)for(var s,h=0,d=l.length;h<d;++h)for(r=0,s=l[h];r<o;++r)if((i=a[r]).type===s.type&&i.name===s.name)return s.value}},st=function(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e},ht=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},dt=function(t){var n=st();return n.changedTouches&&(n=n.changedTouches[0]),ht(t,n)},pt=function(t){return null==t?s:function(){return this.querySelector(t)}},gt=function(t){"function"!=typeof t&&(t=pt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var a,o,u=n[i],c=u.length,f=r[i]=new Array(c),l=0;l<c;++l)(a=u[l])&&(o=t.call(a,a.__data__,l,u))&&("__data__"in a&&(o.__data__=a.__data__),f[l]=o);return new Q(r,this._parents)},mt=function(t){return null==t?h:function(){return this.querySelectorAll(t)}},vt=function(t){"function"!=typeof t&&(t=mt(t));for(var n=this._groups,e=n.length,r=[],i=[],a=0;a<e;++a)for(var o,u=n[a],c=u.length,f=0;f<c;++f)(o=u[f])&&(r.push(t.call(o,o.__data__,f,u)),i.push(o));return new Q(r,i)},bt=function(t){"function"!=typeof t&&(t=ut(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var a,o=n[i],u=o.length,c=r[i]=[],f=0;f<u;++f)(a=o[f])&&t.call(a,a.__data__,f,o)&&c.push(a);return new Q(r,this._parents)},yt=function(t){return new Array(t.length)},wt=function(){return new Q(this._enter||this._groups.map(yt),this._parents)};d.prototype={constructor:d,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var Mt=function(t){return function(){return t}},xt="$",_t=function(t,n){if(!t)return d=new Array(this.size()),f=-1,this.each(function(t){d[++f]=t}),d;var e=n?g:p,r=this._parents,i=this._groups;"function"!=typeof t&&(t=Mt(t));for(var a=i.length,o=new Array(a),u=new Array(a),c=new Array(a),f=0;f<a;++f){var l=r[f],s=i[f],h=s.length,d=t.call(l,l&&l.__data__,f,r),m=d.length,v=u[f]=new Array(m),b=o[f]=new Array(m),y=c[f]=new Array(h);e(l,s,v,b,y,d,n);for(var w,M,x=0,_=0;x<m;++x)if(w=v[x]){for(x>=_&&(_=x+1);!(M=b[_])&&++_<m;);w._next=M||null}}return o=new Q(o,r),o._enter=u,o._exit=c,o},At=function(){return new Q(this._exit||this._groups.map(yt),this._parents)},Tt=function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,a=Math.min(r,i),o=new Array(r),u=0;u<a;++u)for(var c,f=n[u],l=e[u],s=f.length,h=o[u]=new Array(s),d=0;d<s;++d)(c=f[d]||l[d])&&(h[d]=c);for(;u<r;++u)o[u]=n[u];return new Q(o,this._parents)},Ct=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],a=i.length-1,o=i[a];--a>=0;)(r=i[a])&&(o&&o!==r.nextSibling&&o.parentNode.insertBefore(r,o),o=r);return this},St=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=m);for(var e=this._groups,r=e.length,i=new Array(r),a=0;a<r;++a){for(var o,u=e[a],c=u.length,f=i[a]=new Array(c),l=0;l<c;++l)(o=u[l])&&(f[l]=o);f.sort(n)}return new Q(i,this._parents).order()},Nt=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},kt=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},Et=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,a=r.length;i<a;++i){var o=r[i];if(o)return o}return null},Ot=function(){var t=0;return this.each(function(){++t}),t},Dt=function(){return!this.node()},Ft=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,a=n[e],o=0,u=a.length;o<u;++o)(i=a[o])&&t.call(i,i.__data__,o,a);return this},It=function(t,n){var e=nt(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?b:v:"function"==typeof n?e.local?x:M:e.local?w:y)(e,n))},Pt=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView},Lt=function(t,n,e){return arguments.length>1?this.each((null==n?_:"function"==typeof n?T:A)(t,n,null==e?"":e)):C(this.node(),t)},Ut=function(t,n){return arguments.length>1?this.each((null==n?S:"function"==typeof n?k:N)(t,n)):this.node()[t]};D.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Rt=function(t,n){var e=E(t+"");if(arguments.length<2){for(var r=O(this.node()),i=-1,a=e.length;++i<a;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?U:n?P:L)(e,n))},Ht=function(t){return arguments.length?this.each(null==t?R:("function"==typeof t?B:H)(t)):this.node().textContent},Bt=function(t){return arguments.length?this.each(null==t?Y:("function"==typeof t?z:j)(t)):this.node().innerHTML},Yt=function(){return this.each(q)},jt=function(){return this.each(W)},zt=function(t){var n="function"==typeof t?t:et(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},qt=function(t,n){var e="function"==typeof t?t:et(t),r=null==n?G:"function"==typeof n?n:pt(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},Wt=function(){return this.each(X)},Gt=function(t){return arguments.length?this.property("__data__",t):this.node().__data__},Xt=function(t,n){return this.each(("function"==typeof n?Z:$)(t,n))},Vt=[null];Q.prototype=J.prototype={constructor:Q,select:gt,selectAll:vt,filter:bt,data:_t,enter:wt,exit:At,merge:Tt,order:Ct,sort:St,call:Nt,nodes:kt,node:Et,size:Ot,empty:Dt,each:Ft,attr:It,style:Lt,property:Ut,classed:Rt,text:Ht,html:Bt,raise:Yt,lower:jt,append:zt,insert:qt,remove:Wt,datum:Gt,on:lt,dispatch:Xt};var $t=function(t){return"string"==typeof t?new Q([[document.querySelector(t)]],[document.documentElement]):new Q([[t]],Vt)},Zt=function(t){return"string"==typeof t?new Q([document.querySelectorAll(t)],[document.documentElement]):new Q([null==t?[]:t],Vt)},Qt=function(t,n,e){arguments.length<3&&(e=n,n=st().changedTouches);for(var r,i=0,a=n?n.length:0;i<a;++i)if((r=n[i]).identifier===e)return ht(t,r);return null},Jt=function(t,n){null==n&&(n=st().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=ht(t,n[e]);return i};t.creator=et,t.local=r,t.matcher=ut,t.mouse=dt,t.namespace=nt,t.namespaces=tt,t.select=$t,t.selectAll=Zt,t.selection=J,t.selector=pt,t.selectorAll=mt,t.style=C,t.touch=Qt,t.touches=Jt,t.window=Pt,t.customEvent=l,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,r){r(n,e(12),e(5),e(14),e(9),e(4),e(2))}(this,function(t,n,e,r,i,a,o){"use strict";function u(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>z)throw new Error("too late");return e}function c(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>W)throw new Error("too late");return e}function f(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("too late");return e}function l(t,n,e){function i(t){e.state=q,e.timer.restart(a,e.delay,e.time),e.delay<=t&&a(t-e.delay)}function a(i){var l,s,h,d;if(e.state!==q)return u();for(l in f)if(d=f[l],d.name===e.name){if(d.state===G)return r.timeout(a);d.state===X?(d.state=$,d.timer.stop(),d.on.call("interrupt",t,t.__data__,d.index,d.group),delete f[l]):+l<n&&(d.state=$,d.timer.stop(),delete f[l])}if(r.timeout(function(){e.state===G&&(e.state=X,e.timer.restart(o,e.delay,e.time),o(i))}),e.state=W,e.on.call("start",t,t.__data__,e.index,e.group),e.state===W){for(e.state=G,c=new Array(h=e.tween.length),l=0,s=-1;l<h;++l)(d=e.tween[l].value.call(t,t.__data__,e.index,e.group))&&(c[++s]=d);c.length=s+1}}function o(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(u),e.state=V,1),i=-1,a=c.length;++i<a;)c[i].call(null,r);e.state===V&&(e.on.call("end",t,t.__data__,e.index,e.group),u())}function u(){e.state=$,e.timer.stop(),delete f[n];for(var r in f)return;delete t.__transition}var c,f=t.__transition;f[n]=e,e.timer=r.timer(i,0,e.time)}function s(t,n){var e,r;return function(){var i=c(this,t),a=i.tween;if(a!==e){r=e=a;for(var o=0,u=r.length;o<u;++o)if(r[o].name===n){r=r.slice(),r.splice(o,1);break}}i.tween=r}}function h(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var a=c(this,t),o=a.tween;if(o!==r){i=(r=o).slice();for(var u={name:n,value:e},f=0,l=i.length;f<l;++f)if(i[f].name===n){i[f]=u;break}f===l&&i.push(u)}a.tween=i}}function d(t,n,e){var r=t._id;return t.each(function(){var t=c(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return f(t,r).value[n]}}function p(t){return function(){this.removeAttribute(t)}}function g(t){return function(){this.removeAttributeNS(t.space,t.local)}}function m(t,n,e){var r,i;return function(){var a=this.getAttribute(t);return a===e?null:a===r?i:i=n(r=a,e)}}function v(t,n,e){var r,i;return function(){var a=this.getAttributeNS(t.space,t.local);return a===e?null:a===r?i:i=n(r=a,e)}}function b(t,n,e){var r,i,a;return function(){var o,u=e(this);return null==u?void this.removeAttribute(t):(o=this.getAttribute(t),o===u?null:o===r&&u===i?a:a=n(r=o,i=u))}}function y(t,n,e){var r,i,a;return function(){var o,u=e(this);return null==u?void this.removeAttributeNS(t.space,t.local):(o=this.getAttributeNS(t.space,t.local),o===u?null:o===r&&u===i?a:a=n(r=o,i=u))}}function w(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}function M(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e}function x(t,n){return function(){u(this,t).delay=+n.apply(this,arguments)}}function _(t,n){return n=+n,function(){u(this,t).delay=n}}function A(t,n){return function(){c(this,t).duration=+n.apply(this,arguments)}}function T(t,n){return n=+n,function(){c(this,t).duration=n}}function C(t,n){if("function"!=typeof n)throw new Error;return function(){c(this,t).ease=n}}function S(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}function N(t,n,e){var r,i,a=S(n)?u:c;return function(){var o=a(this,t),u=o.on;u!==r&&(i=(r=u).copy()).on(n,e),o.on=i}}function k(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function E(t,e){var r,i,a;return function(){var o=n.style(this,t),u=(this.style.removeProperty(t),n.style(this,t));return o===u?null:o===r&&u===i?a:a=e(r=o,i=u)}}function O(t){return function(){this.style.removeProperty(t)}}function D(t,e,r){var i,a;return function(){var o=n.style(this,t);return o===r?null:o===i?a:a=e(i=o,r)}}function F(t,e,r){var i,a,o;return function(){var u=n.style(this,t),c=r(this);return null==c&&(this.style.removeProperty(t),c=n.style(this,t)),u===c?null:u===i&&c===a?o:o=e(i=u,a=c)}}function I(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}function P(t){return function(){this.textContent=t}}function L(t){return function(){var n=t(this);this.textContent=null==n?"":n}}function U(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function R(t){return n.selection().transition(t)}function H(){return++bt}function B(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return wt.time=r.now(),wt;return e}var Y=e.dispatch("start","end","interrupt"),j=[],z=0,q=1,W=2,G=3,X=4,V=5,$=6,Z=function(t,n,e,r,i,a){var o=t.__transition;if(o){if(e in o)return}else t.__transition={};l(t,e,{name:n,index:r,group:i,on:Y,tween:j,time:a.time,delay:a.delay,duration:a.duration,ease:a.ease,timer:null,state:z})},Q=function(t,n){var e,r,i,a=t.__transition,o=!0;if(a){n=null==n?null:n+"";for(i in a)(e=a[i]).name===n?(r=e.state>W&&e.state<V,e.state=$,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete a[i]):o=!1;o&&delete t.__transition}},J=function(t){return this.each(function(){Q(this,t)})},K=function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=f(this.node(),e).tween,a=0,o=i.length;a<o;++a)if((r=i[a]).name===t)return r.value;return null}return this.each((null==n?s:h)(e,t,n))},tt=function(t,n){var e;return("number"==typeof n?i.interpolateNumber:n instanceof a.color?i.interpolateRgb:(e=a.color(n))?(n=e,i.interpolateRgb):i.interpolateString)(t,n)},nt=function(t,e){var r=n.namespace(t),a="transform"===r?i.interpolateTransformSvg:tt;return this.attrTween(t,"function"==typeof e?(r.local?y:b)(r,a,d(this,"attr."+t,e)):null==e?(r.local?g:p)(r):(r.local?v:m)(r,a,e+""))},et=function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var i=n.namespace(t);return this.tween(r,(i.local?w:M)(i,e))},rt=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?x:_)(n,t)):f(this.node(),n).delay},it=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?A:T)(n,t)):f(this.node(),n).duration},at=function(t){var n=this._id;return arguments.length?this.each(C(n,t)):f(this.node(),n).ease;
},ot=function(t){"function"!=typeof t&&(t=n.matcher(t));for(var e=this._groups,r=e.length,i=new Array(r),a=0;a<r;++a)for(var o,u=e[a],c=u.length,f=i[a]=[],l=0;l<c;++l)(o=u[l])&&t.call(o,o.__data__,l,u)&&f.push(o);return new U(i,this._parents,this._name,this._id)},ut=function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,a=Math.min(r,i),o=new Array(r),u=0;u<a;++u)for(var c,f=n[u],l=e[u],s=f.length,h=o[u]=new Array(s),d=0;d<s;++d)(c=f[d]||l[d])&&(h[d]=c);for(;u<r;++u)o[u]=n[u];return new U(o,this._parents,this._name,this._id)},ct=function(t,n){var e=this._id;return arguments.length<2?f(this.node(),e).on.on(t):this.each(N(e,t,n))},ft=function(){return this.on("end.remove",k(this._id))},lt=function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=n.selector(t));for(var i=this._groups,a=i.length,o=new Array(a),u=0;u<a;++u)for(var c,l,s=i[u],h=s.length,d=o[u]=new Array(h),p=0;p<h;++p)(c=s[p])&&(l=t.call(c,c.__data__,p,s))&&("__data__"in c&&(l.__data__=c.__data__),d[p]=l,Z(d[p],e,r,p,d,f(c,r)));return new U(o,this._parents,e,r)},st=function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=n.selectorAll(t));for(var i=this._groups,a=i.length,o=[],u=[],c=0;c<a;++c)for(var l,s=i[c],h=s.length,d=0;d<h;++d)if(l=s[d]){for(var p,g=t.call(l,l.__data__,d,s),m=f(l,r),v=0,b=g.length;v<b;++v)(p=g[v])&&Z(p,e,r,v,g,m);o.push(g),u.push(l)}return new U(o,u,e,r)},ht=n.selection.prototype.constructor,dt=function(){return new ht(this._groups,this._parents)},pt=function(t,n,e){var r="transform"==(t+="")?i.interpolateTransformCss:tt;return null==n?this.styleTween(t,E(t,r)).on("end.style."+t,O(t)):this.styleTween(t,"function"==typeof n?F(t,r,d(this,"style."+t,n)):D(t,r,n+""),e)},gt=function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,I(t,n,null==e?"":e))},mt=function(t){return this.tween("text","function"==typeof t?L(d(this,"text",t)):P(null==t?"":t+""))},vt=function(){for(var t=this._name,n=this._id,e=H(),r=this._groups,i=r.length,a=0;a<i;++a)for(var o,u=r[a],c=u.length,l=0;l<c;++l)if(o=u[l]){var s=f(o,n);Z(o,t,e,l,u,{time:s.time+s.delay+s.duration,delay:0,duration:s.duration,ease:s.ease})}return new U(r,this._parents,t,e)},bt=0,yt=n.selection.prototype;U.prototype=R.prototype={constructor:U,select:lt,selectAll:st,filter:ot,merge:ut,selection:dt,transition:vt,call:yt.call,nodes:yt.nodes,node:yt.node,size:yt.size,empty:yt.empty,each:yt.each,on:ct,attr:nt,attrTween:et,style:pt,styleTween:gt,text:mt,remove:ft,tween:K,delay:rt,duration:it,ease:at};var wt={time:null,delay:0,duration:250,ease:o.easeCubicInOut},Mt=function(t){var n,e;t instanceof U?(n=t._id,t=t._name):(n=H(),(e=wt).time=r.now(),t=null==t?null:t+"");for(var i=this._groups,a=i.length,o=0;o<a;++o)for(var u,c=i[o],f=c.length,l=0;l<f;++l)(u=c[l])&&Z(u,t,n,l,c,e||B(u,n));return new U(i,this._parents,t,n)};n.selection.prototype.interrupt=J,n.selection.prototype.transition=Mt;var xt=[null],_t=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>q&&e.name===n)return new U([[t]],xt,n,+r)}return null};t.transition=R,t.active=_t,t.interrupt=Q,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(){return v||(w(e),v=y.now()+b)}function e(){v=0}function r(){this._call=this._time=this._next=null}function i(t,n,e){var i=new r;return i.restart(t,n,e),i}function a(){n(),++h;for(var t,e=l;e;)(t=v-e._time)>=0&&e._call.call(null,t),e=e._next;--h}function o(){v=(m=y.now())+b,h=d=0;try{a()}finally{h=0,c(),v=0}}function u(){var t=y.now(),n=t-m;n>g&&(b-=n,m=t)}function c(){for(var t,n,e=l,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:l=n);s=t,f(r)}function f(t){if(!h){d&&(d=clearTimeout(d));var n=t-v;n>24?(t<1/0&&(d=setTimeout(o,n)),p&&(p=clearInterval(p))):(p||(m=v,p=setInterval(u,g)),h=1,w(o))}}var l,s,h=0,d=0,p=0,g=1e3,m=0,v=0,b=0,y="object"==typeof performance&&performance.now?performance:Date,w="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};r.prototype=i.prototype={constructor:r,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?n():+r)+(null==e?0:+e),this._next||s===this||(s?s._next=this:l=this,s=this),this._call=t,this._time=r,f()},stop:function(){this._call&&(this._call=null,this._time=1/0,f())}};var M=function(t,n,e){var i=new r;return n=null==n?0:+n,i.restart(function(e){i.stop(),t(e+n)},n,e),i},x=function(t,e,i){var a=new r,o=e;return null==e?(a.restart(t,e,i),a):(e=+e,i=null==i?n():+i,a.restart(function n(r){r+=o,a.restart(n,o+=e,i),t(r)},e,i),a)};t.now=n,t.timer=i,t.timerFlush=a,t.timeout=M,t.interval=x,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){var r;r=function(t){var n=e(12),r={lineHeight:1.2,smallTextOffset:10,smallTextLineHeightRatio:.9,smallTextRatio:.6,valueClassName:"value",labelClassName:"label"},i=12,a="Arial",o=function(t,e,i,a){var o=n.select(a),u=o.text().split(/\s+/).reverse(),c=void 0,f=[],l=0,s=r.lineHeight*r.smallTextLineHeightRatio,h=o.attr("y"),d=parseFloat(o.attr("dy")),p=e*r.smallTextRatio,g=o.text(null).append("tspan").attr("x",t).attr("y",h-5).attr("dy",d+"em").classed(r.valueClassName,!0).style("font-size",e+"px");for(g.text(u.pop()),g=o.append("tspan").classed(r.labelClassName,!0).attr("x",t).attr("y",h+r.smallTextOffset).attr("dy",++l*s+d+"em").style("font-size",p+"px");c=u.pop();)f.push(c),g.text(f.join(" ")),g.node().getComputedTextLength()>i-50&&(f.pop(),g.text(f.join(" ")),f=[c],g=o.append("tspan").classed(r.labelClassName,!0).attr("x",t).attr("y",h+r.smallTextOffset).attr("dy",++l*s+d+"em").text(c).style("font-size",p+"px"))},u=function(t,e){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:2;t.each(function(){var a,o,u,c,f,l,s,h;for(t=n.select(this),a=t.text().split(/\s+/).reverse(),u=[],c=0,f=1.2,l=t.attr("y"),s=parseFloat(t.attr("dy")),h=t.text(null).append("tspan").attr("x",r).attr("y",l).attr("dy",s+"em");o=a.pop();)if(u.push(o),h.text(u.join(" ")),h.node().getComputedTextLength()>e){if(u.pop(),h.text(u.join(" ")),!(c<i-1)){u.push("..."),h.text(u.join(" "));break}u=[o],h=t.append("tspan").attr("x",r).attr("y",l).attr("dy",++c*f+s+"em").text(o),t.classed("adjust-upwards",!0)}})},c=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:i,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:a,r=document.createElement("canvas"),o=r.getContext("2d");return o.font=n+"px "+e,o.measureText(t).width};return{getTextWidth:c,wrapText:o,wrapTextWithEllipses:u}}.call(n,e,n,t),!(void 0!==r&&(t.exports=r))},function(t,n,e){var r;r=function(t){"use strict";function n(t,n,e){var r=o(i.call(this,t,e));r.onload=l.bind(r,a(this.width(),this.height()),n)}function r(t){return t.replace(">",">"+b.styleBackgroundString)}function i(t,n){if(t){t.attr("version",1.1).attr("xmlns","http://www.w3.org/2000/svg");var e=g.initializeSerializer(),i=e(t.node());return i=f(i),i=s.call(this,i,n,parseInt(t.attr("width"),10)),i=r(i)}}function a(t,n){var e=document.createElement("canvas");return e.height=n,e.width=t,e}function o(t){var n=new Image;return n.src=""+b.imageSourceBase+v(t),n}function u(t,n){return n.getContext("2d").drawImage(t,0,0),n}function c(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:b.defaultFilename,e=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"image/png",r=t.toDataURL(e),i=document.createElement("a");i.href=r,i.download=n,document.body.appendChild(i),i.click(),document.body.removeChild(i)}function f(t){return navigator.userAgent.search("FireFox")>-1?t.replace(/url.*&quot;\)/,"url(&quot;#"+p.lineGradientId+"&quot;);"):t}function l(t,n,e){e.preventDefault(),c(u(this,t),n)}function s(t,n,e){if(!n||!e)return t;var r=d.grey;return t=t.replace(/<g/,'<text x="'+this.margin().left+'" y="'+b.titleTopOffset+'" font-family="'+b.titleFontFamily+'" font-size="'+b.titleFontSize+'" fill="'+r[6]+'"> '+n+" </text><g ")}var h=e(17),d=h.colorSchemas,p=e(18),g=e(19),m=window.btoa;m||(m=e(20).encode);var v=function(t){return m(encodeURIComponent(t).replace(/%([0-9A-F]{2})/g,function(t,n){return String.fromCharCode("0x"+n)}))},b={styleClass:"britechartStyle",defaultFilename:"britechart.png",chartBackground:"white",imageSourceBase:"data:image/svg+xml;base64,",titleFontSize:"15px",titleFontFamily:"'Benton Sans', sans-serif",titleTopOffset:30,get styleBackgroundString(){return"<style>svg{background:"+this.chartBackground+";}</style>"}};return{exportChart:n,convertSvgToHtml:i,createImage:o,drawImageOnCanvas:u}}.call(n,e,n,t),!(void 0!==r&&(t.exports=r))},function(t,n,e){var r;r=function(){var t={greenBlue:["#39C7EA","#4CDCBA"],orangePink:["#FBC670","#F766B8"],bluePurple:["#3DC3C9","#824a9e"]},n=["#6aedc7","#39c2c9","#ffce00","#ffa71a","#f866b9","#998ce3"],e=["#F8F8FA","#EFF2F5","#D2D6DF","#C3C6CF","#ADB0B6","#666A73","#45494E","#363A43","#282C35"],r=["#fcc870","#ffa71a","#fb8825","#f6682f","#db5a2c","#bf4c28","#a43b1c","#892a10","#f9e9c5"],i=["#ccf7f6","#70e4e0","#00d8d2","#00acaf","#007f8c","#005e66","#003c3f","#002d2f","#0d2223"],a=["#ccfffe","#94f7f4","#00fff8","#1de1e1","#39c2c9","#2e9a9d","#227270","#1a5957","#133f3e"],o=["#edfff7","#d7ffef","#c0ffe7","#95f5d7","#6aedc7","#59c3a3","#479980","#34816a","#206953"],u=["#f9f2b3","#fbe986","#fce05a","#fed72d","#ffce00","#fcc11c","#f9b438","#eda629","#e09819"],c=["#fdd1ea","#fb9cd2","#f866b9","#fc40b6","#ff1ab3","#e3239d","#c62c86","#a62073","#85135f"],f=["#ddd6fc","#bbb1f0","#998ce3","#8e6bc1","#824a9e","#77337f","#6b1c60","#591650","#470f3f"],l=["#ffd8d4","#ffb5b0","#ff938c","#ff766c","#ff584c","#f04b42","#e03d38","#be2e29","#9c1e19"],s=["#7bdcc0"];return{colorSchemas:{britecharts:n,grey:e,orange:r,blueGreen:i,teal:a,green:o,yellow:u,pink:c,purple:f,red:l},colorSchemasHuman:{britecharts:"Britecharts Default",grey:"Britecharts Grey",orange:"Orange",blueGreen:"Blue",teal:"Light Blue",green:"Green",yellow:"Yellow",pink:"Pink",purple:"Purple",red:"Red"},singleColors:{aloeGreen:s},colorGradients:t,colorGradientsHuman:{greenBlue:"Green To Blue",orangePink:"Orange to Pink",bluePurple:"Blue to Purple"}}}.call(n,e,n,t),!(void 0!==r&&(t.exports=r))},function(t,n,e){var r;r=function(){var t={MINUTE_HOUR:"minute-hour",HOUR_DAY:"hour-daymonth",DAY_MONTH:"day-month",MONTH_YEAR:"month-year"},n={ONE_AND_A_HALF_YEARS:47304e6,ONE_YEAR:31536000365,ONE_DAY:86400001};return{axisTimeCombinations:t,timeBenchmarks:n,lineGradientId:"lineGradientId"}}.call(n,e,n,t),!(void 0!==r&&(t.exports=r))},function(t,n){"use strict";t.exports=function(){return{initializeSerializer:function(){function t(t){var n={},e=document.body.appendChild(document.createElement(t)),r=window.getComputedStyle(e);return[].forEach.call(r,function(t){n[t]=r[t]}),document.body.removeChild(e),n}function n(n){return n=n.toUpperCase(),r[n]||(r[n]=t(n)),r[n]}function e(t){var e=[],r=void 0,a=void 0,o=void 0,u=void 0;if(t&&t.nodeType===Node.ELEMENT_NODE)return e=[],r=t.querySelectorAll("*"),[].forEach.call(r,function(t,r){i[t.tagName]||(a=window.getComputedStyle(t),o=n(t.tagName),e[r]=t.style.cssText,[].forEach.call(a,function(n){a[n]!==o[n]&&(t.style[n]=a[n])}))}),u=t.outerHTML,r=[].map.call(r,function(t,n){return t.style.cssText=e[n],t}),u}var r={},i={BASE:!0,HEAD:!0,HTML:!0,META:!0,NOFRAME:!0,NOSCRIPT:!0,PARAM:!0,SCRIPT:!0,STYLE:!0,TITLE:!0},a=["A","ABBR","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BASE","BDI","BDO","BLOCKQUOTE","BODY","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATALIST","DD","DEL","DETAILS","DFN","DIV","DL","DT","EM","EMBED","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEAD","HEADER","HGROUP","HR","HTML","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","LINK","MAP","MARK","MATH","MENU","META","METER","NAV","NOBR","NOSCRIPT","OBJECT","OL","OPTION","OPTGROUP","OUTPUT","P","PARAM","PRE","PROGRESS","Q","RP","RT","RUBY","S","SAMP","SCRIPT","SECTION","SELECT","SMALL","SOURCE","SPAN","STRONG","STYLE","SUB","SUMMARY","SUP","SVG","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TITLE","TR","TRACK","U","UL","VAR","VIDEO","WBR"];return[].forEach.call(a,function(n){i[n]||(r[n]=t(n))}),e}}}()},function(t,n,e){var r;(function(t,i){!function(a){var o="object"==typeof n&&n,u=("object"==typeof t&&t&&t.exports==o&&t,"object"==typeof i&&i);u.global!==u&&u.window!==u||(a=u);var c=function(t){this.message=t};c.prototype=new Error,c.prototype.name="InvalidCharacterError";var f=function(t){throw new c(t)},l="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",s=/[\t\n\f\r ]/g,h=function(t){t=String(t).replace(s,"");var n=t.length;n%4==0&&(t=t.replace(/==?$/,""),n=t.length),(n%4==1||/[^+a-zA-Z0-9\/]/.test(t))&&f("Invalid character: the string to be decoded is not correctly encoded.");for(var e,r,i=0,a="",o=-1;++o<n;)r=l.indexOf(t.charAt(o)),e=i%4?64*e+r:r,i++%4&&(a+=String.fromCharCode(255&e>>(-2*i&6)));return a},d=function(t){t=String(t),/[^\0-\xFF]/.test(t)&&f("The string to be encoded contains characters outside of the Latin1 range.");for(var n,e,r,i,a=t.length%3,o="",u=-1,c=t.length-a;++u<c;)n=t.charCodeAt(u)<<16,e=t.charCodeAt(++u)<<8,r=t.charCodeAt(++u),i=n+e+r,o+=l.charAt(i>>18&63)+l.charAt(i>>12&63)+l.charAt(i>>6&63)+l.charAt(63&i);return 2==a?(n=t.charCodeAt(u)<<8,e=t.charCodeAt(++u),i=n+e,o+=l.charAt(i>>10)+l.charAt(i>>4&63)+l.charAt(i<<2&63)+"="):1==a&&(i=t.charCodeAt(u),o+=l.charAt(i>>2)+l.charAt(i<<4&63)+"=="),o},p={encode:d,decode:h,version:"0.1.0"};r=function(){return p}.call(n,e,n,t),!(void 0!==r&&(t.exports=r))}(this)}).call(n,e(21)(t),function(){return this}())},function(t,n){t.exports=function(t){return t.webpackPolyfill||(t.deprecate=function(){},t.paths=[],t.children=[],t.webpackPolyfill=1),t}}])});
//# sourceMappingURL=bar.min.js.map

/***/ }),
/* 219 */
/***/ (function(module, exports, __webpack_require__) {

!function(t,n){ true?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports["mini-tooltip"]=n():(t.britecharts=t.britecharts||{},t.britecharts["mini-tooltip"]=n())}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var i=e[r]={exports:{},id:r,loaded:!1};return t[r].call(i.exports,i,i.exports,n),i.loaded=!0,i.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){var r,i=function(){function t(t,n){var e=[],r=!0,i=!1,o=void 0;try{for(var u,a=t[Symbol.iterator]();!(r=(u=a.next()).done)&&(e.push(u.value),!n||e.length!==n);r=!0);}catch(t){i=!0,o=t}finally{try{!r&&a.return&&a.return()}finally{if(i)throw o}}return e}return function(n,e){if(Array.isArray(n))return n;if(Symbol.iterator in Object(n))return t(n,e);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}();r=function(t){"use strict";var n=e(1),r=e(2),o=e(6),u=e(12);e(13);return function(){function t(t){t.each(function(t){D=w-m.left-m.right,F=_-m.top-m.bottom,a(this),l()})}function e(){var t=$.append("g").classed("tooltip-container-group",!0).attr("transform","translate( "+m.left+", "+m.top+")");t.append("g").classed("tooltip-group",!0)}function a(n){$||($=u.select(n).append("g").classed("britechart britechart-mini-tooltip",!0),e()),$.transition().attr("width",w).attr("height",_),t.hide()}function l(){S=$.selectAll(".tooltip-group").append("g").classed("tooltip-text",!0),k=S.append("rect").classed("tooltip-background",!0).attr("width",w).attr("height",_).attr("rx",E).attr("ry",E).attr("y",-m.top).attr("x",-m.left).style("fill",j).style("stroke",T).style("stroke-width",1).style("pointer-events","none").style("opacity",.9)}function s(){for(var t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];var i=e.filter(function(t){return!!t}).map(function(t){return t.node().getBBox().width});return n.max(i)}function c(t,n){var e=i(t,2),r=e[0],o=e[1],u=i(n,2),a=u[0],l=u[1],s=void 0,c=void 0;return s=f(a,r)?r+O.x:r-D-O.x-m.right,c=h(l,o)?o+O.y:o-F-O.y-m.bottom,[s,c]}function f(t,n){return t-m.left-m.right-D-n>0}function h(t,n){return t-m.top-m.bottom-F-n>0}function p(){$.style("display","none")}function d(t){v(t),$.style("display","block")}function v(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=t[M]||"",e=t[x]||"",r=P*I,i=C*q,o="1em",u=0,a=void 0,l=void 0,c=void 0;S.selectAll("text").remove(),b&&(c=S.append("text").classed("mini-tooltip-title",!0).attr("dy",o).attr("y",0).style("fill",L).style("font-size",P).text(b),u=r+u),e&&(l=S.append("text").classed("mini-tooltip-name",!0).attr("dy",o).attr("y",u||0).style("fill",B).style("font-size",P).text(e),u=r+u),n&&(a=S.append("text").classed("mini-tooltip-value",!0).attr("dy",o).attr("y",u||0).style("fill",R).style("font-size",C).style("font-weight",X).text(z(n)),u=i+u),D=s(l,c,a),F=u}function g(t,n){var e=c(t,n),r=i(e,2),o=r[0],u=r[1];$.transition().duration(A).ease(N).attr("height",F+m.top+m.bottom).attr("width",D+m.left+m.right).attr("transform","translate("+o+","+u+")"),k.attr("height",F+m.top+m.bottom).attr("width",D+m.left+m.right)}function y(t,n,e){v(t),g(n,e)}var m={top:12,right:12,bottom:12,left:12},w=100,_=100,b="",M="value",x="name",A=100,N=r.easeQuadInOut,k=void 0,E=1,S=void 0,O={y:0,x:20},P=14,I=1.5,C=27,q=1.18,j="#FFFFFF",T="#D2D6DF",L="#666a73",B="#666a73",R="#45494E",X=200,z=o.format(".2f"),D=void 0,F=void 0,$=void 0;return t.hide=function(){return p(),this},t.nameLabel=function(t){return arguments.length?(x=t,this):x},t.show=function(){return d(),this},t.title=function(t){return arguments.length?(b=t,this):b},t.update=function(t,n,e){return y(t,n,e),this},t}}.call(n,e,n,t),!(void 0!==r&&(t.exports=r))},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return function(n,e){return u(t(n),e)}}function e(t,n){return[t,n]}function r(t,n,e){var r=(n-t)/Math.max(0,e),i=Math.floor(Math.log(r)/Math.LN10),o=r/Math.pow(10,i);return i>=0?(o>=A?10:o>=N?5:o>=k?2:1)*Math.pow(10,i):-Math.pow(10,-i)/(o>=A?10:o>=N?5:o>=k?2:1)}function i(t,n,e){var r=Math.abs(n-t)/Math.max(0,e),i=Math.pow(10,Math.floor(Math.log(r)/Math.LN10)),o=r/i;return o>=A?i*=10:o>=N?i*=5:o>=k&&(i*=2),n<t?-i:i}function o(t){return t.length}var u=function(t,n){return t<n?-1:t>n?1:t>=n?0:NaN},a=function(t){return 1===t.length&&(t=n(t)),{left:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)<0?r=o+1:i=o}return r},right:function(n,e,r,i){for(null==r&&(r=0),null==i&&(i=n.length);r<i;){var o=r+i>>>1;t(n[o],e)>0?i=o:r=o+1}return r}}},l=a(u),s=l.right,c=l.left,f=function(t,n){null==n&&(n=e);for(var r=0,i=t.length-1,o=t[0],u=new Array(i<0?0:i);r<i;)u[r]=n(o,o=t[++r]);return u},h=function(t,n,r){var i,o,u,a,l=t.length,s=n.length,c=new Array(l*s);for(null==r&&(r=e),i=u=0;i<l;++i)for(a=t[i],o=0;o<s;++o,++u)c[u]=r(a,n[o]);return c},p=function(t,n){return n<t?-1:n>t?1:n>=t?0:NaN},d=function(t){return null===t?NaN:+t},v=function(t,n){var e,r,i=t.length,o=0,u=-1,a=0,l=0;if(null==n)for(;++u<i;)isNaN(e=d(t[u]))||(r=e-a,a+=r/++o,l+=r*(e-a));else for(;++u<i;)isNaN(e=d(n(t[u],u,t)))||(r=e-a,a+=r/++o,l+=r*(e-a));if(o>1)return l/(o-1)},g=function(t,n){var e=v(t,n);return e?Math.sqrt(e):e},y=function(t,n){var e,r,i,o=t.length,u=-1;if(null==n){for(;++u<o;)if(null!=(e=t[u])&&e>=e)for(r=i=e;++u<o;)null!=(e=t[u])&&(r>e&&(r=e),i<e&&(i=e))}else for(;++u<o;)if(null!=(e=n(t[u],u,t))&&e>=e)for(r=i=e;++u<o;)null!=(e=n(t[u],u,t))&&(r>e&&(r=e),i<e&&(i=e));return[r,i]},m=Array.prototype,w=m.slice,_=m.map,b=function(t){return function(){return t}},M=function(t){return t},x=function(t,n,e){t=+t,n=+n,e=(i=arguments.length)<2?(n=t,t=0,1):i<3?1:+e;for(var r=-1,i=0|Math.max(0,Math.ceil((n-t)/e)),o=new Array(i);++r<i;)o[r]=t+r*e;return o},A=Math.sqrt(50),N=Math.sqrt(10),k=Math.sqrt(2),E=function(t,n,e){var i,o,u,a=n<t,l=-1;if(a&&(i=t,t=n,n=i),0===(u=r(t,n,e))||!isFinite(u))return[];if(u>0)for(t=Math.ceil(t/u),n=Math.floor(n/u),o=new Array(i=Math.ceil(n-t+1));++l<i;)o[l]=(t+l)*u;else for(t=Math.floor(t*u),n=Math.ceil(n*u),o=new Array(i=Math.ceil(t-n+1));++l<i;)o[l]=(t-l)/u;return a&&o.reverse(),o},S=function(t){return Math.ceil(Math.log(t.length)/Math.LN2)+1},O=function(){function t(t){var o,u,a=t.length,l=new Array(a);for(o=0;o<a;++o)l[o]=n(t[o],o,t);var c=e(l),f=c[0],h=c[1],p=r(l,f,h);Array.isArray(p)||(p=i(f,h,p),p=x(Math.ceil(f/p)*p,Math.floor(h/p)*p,p));for(var d=p.length;p[0]<=f;)p.shift(),--d;for(;p[d-1]>h;)p.pop(),--d;var v,g=new Array(d+1);for(o=0;o<=d;++o)v=g[o]=[],v.x0=o>0?p[o-1]:f,v.x1=o<d?p[o]:h;for(o=0;o<a;++o)u=l[o],f<=u&&u<=h&&g[s(p,u,0,d)].push(t[o]);return g}var n=M,e=y,r=S;return t.value=function(e){return arguments.length?(n="function"==typeof e?e:b(e),t):n},t.domain=function(n){return arguments.length?(e="function"==typeof n?n:b([n[0],n[1]]),t):e},t.thresholds=function(n){return arguments.length?(r="function"==typeof n?n:b(Array.isArray(n)?w.call(n):n),t):r},t},P=function(t,n,e){if(null==e&&(e=d),r=t.length){if((n=+n)<=0||r<2)return+e(t[0],0,t);if(n>=1)return+e(t[r-1],r-1,t);var r,i=(r-1)*n,o=Math.floor(i),u=+e(t[o],o,t),a=+e(t[o+1],o+1,t);return u+(a-u)*(i-o)}},I=function(t,n,e){return t=_.call(t,d).sort(u),Math.ceil((e-n)/(2*(P(t,.75)-P(t,.25))*Math.pow(t.length,-1/3)))},C=function(t,n,e){return Math.ceil((e-n)/(3.5*g(t)*Math.pow(t.length,-1/3)))},q=function(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&e>r&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&e>r&&(r=e);return r},j=function(t,n){var e,r=t.length,i=r,o=-1,u=0;if(null==n)for(;++o<r;)isNaN(e=d(t[o]))?--i:u+=e;else for(;++o<r;)isNaN(e=d(n(t[o],o,t)))?--i:u+=e;if(i)return u/i},T=function(t,n){var e,r=t.length,i=-1,o=[];if(null==n)for(;++i<r;)isNaN(e=d(t[i]))||o.push(e);else for(;++i<r;)isNaN(e=d(n(t[i],i,t)))||o.push(e);return P(o.sort(u),.5)},L=function(t){for(var n,e,r,i=t.length,o=-1,u=0;++o<i;)u+=t[o].length;for(e=new Array(u);--i>=0;)for(r=t[i],n=r.length;--n>=0;)e[--u]=r[n];return e},B=function(t,n){var e,r,i=t.length,o=-1;if(null==n){for(;++o<i;)if(null!=(e=t[o])&&e>=e)for(r=e;++o<i;)null!=(e=t[o])&&r>e&&(r=e)}else for(;++o<i;)if(null!=(e=n(t[o],o,t))&&e>=e)for(r=e;++o<i;)null!=(e=n(t[o],o,t))&&r>e&&(r=e);return r},R=function(t,n){for(var e=n.length,r=new Array(e);e--;)r[e]=t[n[e]];return r},X=function(t,n){if(e=t.length){var e,r,i=0,o=0,a=t[o];for(null==n&&(n=u);++i<e;)(n(r=t[i],a)<0||0!==n(a,a))&&(a=r,o=i);return 0===n(a,a)?o:void 0}},z=function(t,n,e){for(var r,i,o=(null==e?t.length:e)-(n=null==n?0:+n);o;)i=Math.random()*o--|0,r=t[o+n],t[o+n]=t[i+n],t[i+n]=r;return t},D=function(t,n){var e,r=t.length,i=-1,o=0;if(null==n)for(;++i<r;)(e=+t[i])&&(o+=e);else for(;++i<r;)(e=+n(t[i],i,t))&&(o+=e);return o},F=function(t){if(!(i=t.length))return[];for(var n=-1,e=B(t,o),r=new Array(e);++n<e;)for(var i,u=-1,a=r[n]=new Array(i);++u<i;)a[u]=t[u][n];return r},$=function(){return F(arguments)};t.bisect=s,t.bisectRight=s,t.bisectLeft=c,t.ascending=u,t.bisector=a,t.cross=h,t.descending=p,t.deviation=g,t.extent=y,t.histogram=O,t.thresholdFreedmanDiaconis=I,t.thresholdScott=C,t.thresholdSturges=S,t.max=q,t.mean=j,t.median=T,t.merge=L,t.min=B,t.pairs=f,t.permute=R,t.quantile=P,t.range=x,t.scan=X,t.shuffle=z,t.sum=D,t.ticks=E,t.tickIncrement=r,t.tickStep=i,t.transpose=F,t.variance=v,t.zip=$,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return+t}function e(t){return t*t}function r(t){return t*(2-t)}function i(t){return((t*=2)<=1?t*t:--t*(2-t)+1)/2}function o(t){return t*t*t}function u(t){return--t*t*t+1}function a(t){return((t*=2)<=1?t*t*t:(t-=2)*t*t+2)/2}function l(t){return 1-Math.cos(t*N)}function s(t){return Math.sin(t*N)}function c(t){return(1-Math.cos(A*t))/2}function f(t){return Math.pow(2,10*t-10)}function h(t){return 1-Math.pow(2,-10*t)}function p(t){return((t*=2)<=1?Math.pow(2,10*t-10):2-Math.pow(2,10-10*t))/2}function d(t){return 1-Math.sqrt(1-t*t)}function v(t){return Math.sqrt(1- --t*t)}function g(t){return((t*=2)<=1?1-Math.sqrt(1-t*t):Math.sqrt(1-(t-=2)*t)+1)/2}function y(t){return 1-m(1-t)}function m(t){return(t=+t)<k?T*t*t:t<S?T*(t-=E)*t+O:t<I?T*(t-=P)*t+C:T*(t-=q)*t+j}function w(t){return((t*=2)<=1?1-m(1-t):m(t-1)+1)/2}var _=3,b=function t(n){function e(t){return Math.pow(t,n)}return n=+n,e.exponent=t,e}(_),M=function t(n){function e(t){return 1-Math.pow(1-t,n)}return n=+n,e.exponent=t,e}(_),x=function t(n){function e(t){return((t*=2)<=1?Math.pow(t,n):2-Math.pow(2-t,n))/2}return n=+n,e.exponent=t,e}(_),A=Math.PI,N=A/2,k=4/11,E=6/11,S=8/11,O=.75,P=9/11,I=10/11,C=.9375,q=21/22,j=63/64,T=1/k/k,L=1.70158,B=function t(n){function e(t){return t*t*((n+1)*t-n)}return n=+n,e.overshoot=t,e}(L),R=function t(n){function e(t){return--t*t*((n+1)*t+n)+1}return n=+n,e.overshoot=t,e}(L),X=function t(n){function e(t){return((t*=2)<1?t*t*((n+1)*t-n):(t-=2)*t*((n+1)*t+n)+2)/2}return n=+n,e.overshoot=t,e}(L),z=2*Math.PI,D=1,F=.3,$=function t(n,e){function r(t){return n*Math.pow(2,10*--t)*Math.sin((i-t)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=z);return r.amplitude=function(n){return t(n,e*z)},r.period=function(e){return t(n,e)},r}(D,F),V=function t(n,e){function r(t){return 1-n*Math.pow(2,-10*(t=+t))*Math.sin((t+i)/e)}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=z);return r.amplitude=function(n){return t(n,e*z)},r.period=function(e){return t(n,e)},r}(D,F),Y=function t(n,e){function r(t){return((t=2*t-1)<0?n*Math.pow(2,10*t)*Math.sin((i-t)/e):2-n*Math.pow(2,-10*t)*Math.sin((i+t)/e))/2}var i=Math.asin(1/(n=Math.max(1,n)))*(e/=z);return r.amplitude=function(n){return t(n,e*z)},r.period=function(e){return t(n,e)},r}(D,F);t.easeLinear=n,t.easeQuad=i,t.easeQuadIn=e,t.easeQuadOut=r,t.easeQuadInOut=i,t.easeCubic=a,t.easeCubicIn=o,t.easeCubicOut=u,t.easeCubicInOut=a,t.easePoly=x,t.easePolyIn=b,t.easePolyOut=M,t.easePolyInOut=x,t.easeSin=c,t.easeSinIn=l,t.easeSinOut=s,t.easeSinInOut=c,t.easeExp=p,t.easeExpIn=f,t.easeExpOut=h,t.easeExpInOut=p,t.easeCircle=g,t.easeCircleIn=d,t.easeCircleOut=v,t.easeCircleInOut=g,t.easeBounce=m,t.easeBounceIn=y,t.easeBounceOut=m,t.easeBounceInOut=w,t.easeBack=X,t.easeBackIn=B,t.easeBackOut=R,t.easeBackInOut=X,t.easeElastic=V,t.easeElasticIn=$,t.easeElasticOut=V,t.easeElasticInOut=Y,Object.defineProperty(t,"__esModule",{value:!0})})},,function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t,n){var e=Object.create(t.prototype);for(var r in n)e[r]=n[r];return e}function e(){}function r(t){var n;return t=(t+"").trim().toLowerCase(),(n=q.exec(t))?(n=parseInt(n[1],16),new l(n>>8&15|n>>4&240,n>>4&15|240&n,(15&n)<<4|15&n,1)):(n=j.exec(t))?i(parseInt(n[1],16)):(n=T.exec(t))?new l(n[1],n[2],n[3],1):(n=L.exec(t))?new l(255*n[1]/100,255*n[2]/100,255*n[3]/100,1):(n=B.exec(t))?o(n[1],n[2],n[3],n[4]):(n=R.exec(t))?o(255*n[1]/100,255*n[2]/100,255*n[3]/100,n[4]):(n=X.exec(t))?s(n[1],n[2]/100,n[3]/100,1):(n=z.exec(t))?s(n[1],n[2]/100,n[3]/100,n[4]):D.hasOwnProperty(t)?i(D[t]):"transparent"===t?new l(NaN,NaN,NaN,0):null}function i(t){return new l(t>>16&255,t>>8&255,255&t,1)}function o(t,n,e,r){return r<=0&&(t=n=e=NaN),new l(t,n,e,r)}function u(t){return t instanceof e||(t=r(t)),t?(t=t.rgb(),new l(t.r,t.g,t.b,t.opacity)):new l}function a(t,n,e,r){return 1===arguments.length?u(t):new l(t,n,e,null==r?1:r)}function l(t,n,e,r){this.r=+t,this.g=+n,this.b=+e,this.opacity=+r}function s(t,n,e,r){return r<=0?t=n=e=NaN:e<=0||e>=1?t=n=NaN:n<=0&&(t=NaN),new h(t,n,e,r)}function c(t){if(t instanceof h)return new h(t.h,t.s,t.l,t.opacity);if(t instanceof e||(t=r(t)),!t)return new h;if(t instanceof h)return t;t=t.rgb();var n=t.r/255,i=t.g/255,o=t.b/255,u=Math.min(n,i,o),a=Math.max(n,i,o),l=NaN,s=a-u,c=(a+u)/2;return s?(l=n===a?(i-o)/s+6*(i<o):i===a?(o-n)/s+2:(n-i)/s+4,s/=c<.5?a+u:2-a-u,l*=60):s=c>0&&c<1?0:l,new h(l,s,c,t.opacity)}function f(t,n,e,r){return 1===arguments.length?c(t):new h(t,n,e,null==r?1:r)}function h(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}function p(t,n,e){return 255*(t<60?n+(e-n)*t/60:t<180?e:t<240?n+(e-n)*(240-t)/60:n)}function d(t){if(t instanceof g)return new g(t.l,t.a,t.b,t.opacity);if(t instanceof x){var n=t.h*F;return new g(t.l,Math.cos(n)*t.c,Math.sin(n)*t.c,t.opacity)}t instanceof l||(t=u(t));var e=_(t.r),r=_(t.g),i=_(t.b),o=y((.4124564*e+.3575761*r+.1804375*i)/Y),a=y((.2126729*e+.7151522*r+.072175*i)/H),s=y((.0193339*e+.119192*r+.9503041*i)/Q);return new g(116*a-16,500*(o-a),200*(a-s),t.opacity)}function v(t,n,e,r){return 1===arguments.length?d(t):new g(t,n,e,null==r?1:r)}function g(t,n,e,r){this.l=+t,this.a=+n,this.b=+e,this.opacity=+r}function y(t){return t>J?Math.pow(t,1/3):t/Z+U}function m(t){return t>G?t*t*t:Z*(t-U)}function w(t){return 255*(t<=.0031308?12.92*t:1.055*Math.pow(t,1/2.4)-.055)}function _(t){return(t/=255)<=.04045?t/12.92:Math.pow((t+.055)/1.055,2.4)}function b(t){if(t instanceof x)return new x(t.h,t.c,t.l,t.opacity);t instanceof g||(t=d(t));var n=Math.atan2(t.b,t.a)*$;return new x(n<0?n+360:n,Math.sqrt(t.a*t.a+t.b*t.b),t.l,t.opacity)}function M(t,n,e,r){return 1===arguments.length?b(t):new x(t,n,e,null==r?1:r)}function x(t,n,e,r){this.h=+t,this.c=+n,this.l=+e,this.opacity=+r}function A(t){if(t instanceof k)return new k(t.h,t.s,t.l,t.opacity);t instanceof l||(t=u(t));var n=t.r/255,e=t.g/255,r=t.b/255,i=(ot*r+rt*n-it*e)/(ot+rt-it),o=r-i,a=(et*(e-i)-tt*o)/nt,s=Math.sqrt(a*a+o*o)/(et*i*(1-i)),c=s?Math.atan2(a,o)*$-120:NaN;return new k(c<0?c+360:c,s,i,t.opacity)}function N(t,n,e,r){return 1===arguments.length?A(t):new k(t,n,e,null==r?1:r)}function k(t,n,e,r){this.h=+t,this.s=+n,this.l=+e,this.opacity=+r}var E=function(t,n,e){t.prototype=n.prototype=e,e.constructor=t},S=.7,O=1/S,P="\\s*([+-]?\\d+)\\s*",I="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*",C="\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*",q=/^#([0-9a-f]{3})$/,j=/^#([0-9a-f]{6})$/,T=new RegExp("^rgb\\("+[P,P,P]+"\\)$"),L=new RegExp("^rgb\\("+[C,C,C]+"\\)$"),B=new RegExp("^rgba\\("+[P,P,P,I]+"\\)$"),R=new RegExp("^rgba\\("+[C,C,C,I]+"\\)$"),X=new RegExp("^hsl\\("+[I,C,C]+"\\)$"),z=new RegExp("^hsla\\("+[I,C,C,I]+"\\)$"),D={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074};E(e,r,{displayable:function(){return this.rgb().displayable()},toString:function(){return this.rgb()+""}}),E(l,a,n(e,{brighter:function(t){return t=null==t?O:Math.pow(O,t),new l(this.r*t,this.g*t,this.b*t,this.opacity)},darker:function(t){return t=null==t?S:Math.pow(S,t),new l(this.r*t,this.g*t,this.b*t,this.opacity)},rgb:function(){return this},displayable:function(){return 0<=this.r&&this.r<=255&&0<=this.g&&this.g<=255&&0<=this.b&&this.b<=255&&0<=this.opacity&&this.opacity<=1},toString:function(){var t=this.opacity;return t=isNaN(t)?1:Math.max(0,Math.min(1,t)),(1===t?"rgb(":"rgba(")+Math.max(0,Math.min(255,Math.round(this.r)||0))+", "+Math.max(0,Math.min(255,Math.round(this.g)||0))+", "+Math.max(0,Math.min(255,Math.round(this.b)||0))+(1===t?")":", "+t+")")}})),E(h,f,n(e,{brighter:function(t){return t=null==t?O:Math.pow(O,t),new h(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?S:Math.pow(S,t),new h(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=this.h%360+360*(this.h<0),n=isNaN(t)||isNaN(this.s)?0:this.s,e=this.l,r=e+(e<.5?e:1-e)*n,i=2*e-r;return new l(p(t>=240?t-240:t+120,i,r),p(t,i,r),p(t<120?t+240:t-120,i,r),this.opacity)},displayable:function(){return(0<=this.s&&this.s<=1||isNaN(this.s))&&0<=this.l&&this.l<=1&&0<=this.opacity&&this.opacity<=1}}));var F=Math.PI/180,$=180/Math.PI,V=18,Y=.95047,H=1,Q=1.08883,U=4/29,G=6/29,Z=3*G*G,J=G*G*G;E(g,v,n(e,{brighter:function(t){return new g(this.l+V*(null==t?1:t),this.a,this.b,this.opacity)},darker:function(t){return new g(this.l-V*(null==t?1:t),this.a,this.b,this.opacity)},rgb:function(){var t=(this.l+16)/116,n=isNaN(this.a)?t:t+this.a/500,e=isNaN(this.b)?t:t-this.b/200;return t=H*m(t),n=Y*m(n),e=Q*m(e),new l(w(3.2404542*n-1.5371385*t-.4985314*e),w(-.969266*n+1.8760108*t+.041556*e),w(.0556434*n-.2040259*t+1.0572252*e),this.opacity)}})),E(x,M,n(e,{brighter:function(t){return new x(this.h,this.c,this.l+V*(null==t?1:t),this.opacity)},darker:function(t){return new x(this.h,this.c,this.l-V*(null==t?1:t),this.opacity)},rgb:function(){return d(this).rgb()}}));var K=-.14861,W=1.78277,tt=-.29227,nt=-.90649,et=1.97294,rt=et*nt,it=et*W,ot=W*tt-nt*K;E(k,N,n(e,{brighter:function(t){return t=null==t?O:Math.pow(O,t),new k(this.h,this.s,this.l*t,this.opacity)},darker:function(t){return t=null==t?S:Math.pow(S,t),new k(this.h,this.s,this.l*t,this.opacity)},rgb:function(){var t=isNaN(this.h)?0:(this.h+120)*F,n=+this.l,e=isNaN(this.s)?0:this.s*n*(1-n),r=Math.cos(t),i=Math.sin(t);return new l(255*(n+e*(K*r+W*i)),255*(n+e*(tt*r+nt*i)),255*(n+e*(et*r)),this.opacity)}})),t.color=r,t.rgb=a,t.hsl=f,t.lab=v,t.hcl=M,t.cubehelix=N,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(){for(var t,n=0,r=arguments.length,i={};n<r;++n){if(!(t=arguments[n]+"")||t in i)throw new Error("illegal type: "+t);i[t]=[]}return new e(i)}function e(t){this._=t}function r(t,n){return t.trim().split(/^|\s+/).map(function(t){var e="",r=t.indexOf(".");if(r>=0&&(e=t.slice(r+1),t=t.slice(0,r)),t&&!n.hasOwnProperty(t))throw new Error("unknown type: "+t);return{type:t,name:e}})}function i(t,n){for(var e,r=0,i=t.length;r<i;++r)if((e=t[r]).name===n)return e.value}function o(t,n,e){for(var r=0,i=t.length;r<i;++r)if(t[r].name===n){t[r]=u,t=t.slice(0,r).concat(t.slice(r+1));break}return null!=e&&t.push({name:n,value:e}),t}var u={value:function(){}};e.prototype=n.prototype={constructor:e,on:function(t,n){var e,u=this._,a=r(t+"",u),l=-1,s=a.length;{if(!(arguments.length<2)){if(null!=n&&"function"!=typeof n)throw new Error("invalid callback: "+n);for(;++l<s;)if(e=(t=a[l]).type)u[e]=o(u[e],t.name,n);else if(null==n)for(e in u)u[e]=o(u[e],t.name,null);return this}for(;++l<s;)if((e=(t=a[l]).type)&&(e=i(u[e],t.name)))return e}},copy:function(){var t={},n=this._;for(var r in n)t[r]=n[r].slice();return new e(t)},call:function(t,n){if((e=arguments.length-2)>0)for(var e,r,i=new Array(e),o=0;o<e;++o)i[o]=arguments[o+2];if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(r=this._[t],o=0,e=r.length;o<e;++o)r[o].value.apply(n,i)},apply:function(t,n,e){if(!this._.hasOwnProperty(t))throw new Error("unknown type: "+t);for(var r=this._[t],i=0,o=r.length;i<o;++i)r[i].value.apply(n,e)}},t.dispatch=n,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return new e(t)}function e(t){if(!(n=p.exec(t)))throw new Error("invalid format: "+t);var n,e=n[1]||" ",r=n[2]||">",i=n[3]||"-",o=n[4]||"",u=!!n[5],a=n[6]&&+n[6],l=!!n[7],s=n[8]&&+n[8].slice(1),c=n[9]||"";"n"===c?(l=!0,c="g"):h[c]||(c=""),(u||"0"===e&&"="===r)&&(u=!0,e="0",r="="),this.fill=e,this.align=r,this.sign=i,this.symbol=o,this.zero=u,this.width=a,this.comma=l,this.precision=s,this.type=c}function r(n){return d=y(n),t.format=d.format,t.formatPrefix=d.formatPrefix,d}var i,o=function(t,n){if((e=(t=n?t.toExponential(n-1):t.toExponential()).indexOf("e"))<0)return null;var e,r=t.slice(0,e);return[r.length>1?r[0]+r.slice(2):r,+t.slice(e+1)]},u=function(t){return t=o(Math.abs(t)),t?t[1]:NaN},a=function(t,n){return function(e,r){for(var i=e.length,o=[],u=0,a=t[0],l=0;i>0&&a>0&&(l+a+1>r&&(a=Math.max(1,r-l)),o.push(e.substring(i-=a,i+a)),!((l+=a+1)>r));)a=t[u=(u+1)%t.length];return o.reverse().join(n)}},l=function(t){return function(n){return n.replace(/[0-9]/g,function(n){return t[+n]})}},s=function(t,n){t=t.toPrecision(n);t:for(var e,r=t.length,i=1,o=-1;i<r;++i)switch(t[i]){case".":o=e=i;break;case"0":0===o&&(o=i),e=i;break;case"e":break t;default:o>0&&(o=0)}return o>0?t.slice(0,o)+t.slice(e+1):t},c=function(t,n){var e=o(t,n);if(!e)return t+"";var r=e[0],u=e[1],a=u-(i=3*Math.max(-8,Math.min(8,Math.floor(u/3))))+1,l=r.length;return a===l?r:a>l?r+new Array(a-l+1).join("0"):a>0?r.slice(0,a)+"."+r.slice(a):"0."+new Array(1-a).join("0")+o(t,Math.max(0,n+a-1))[0]},f=function(t,n){var e=o(t,n);if(!e)return t+"";var r=e[0],i=e[1];return i<0?"0."+new Array(-i).join("0")+r:r.length>i+1?r.slice(0,i+1)+"."+r.slice(i+1):r+new Array(i-r.length+2).join("0")},h={"":s,"%":function(t,n){return(100*t).toFixed(n)},b:function(t){return Math.round(t).toString(2)},c:function(t){return t+""},d:function(t){return Math.round(t).toString(10)},e:function(t,n){return t.toExponential(n)},f:function(t,n){return t.toFixed(n)},g:function(t,n){return t.toPrecision(n)},o:function(t){return Math.round(t).toString(8)},p:function(t,n){return f(100*t,n)},r:f,s:c,X:function(t){return Math.round(t).toString(16).toUpperCase()},x:function(t){return Math.round(t).toString(16)}},p=/^(?:(.)?([<>=^]))?([+\-\( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?([a-z%])?$/i;n.prototype=e.prototype,e.prototype.toString=function(){return this.fill+this.align+this.sign+this.symbol+(this.zero?"0":"")+(null==this.width?"":Math.max(1,0|this.width))+(this.comma?",":"")+(null==this.precision?"":"."+Math.max(0,0|this.precision))+this.type};var d,v=function(t){return t},g=["y","z","a","f","p","n","µ","m","","k","M","G","T","P","E","Z","Y"],y=function(t){function e(t){function e(t){var n,e,l,s=_,h=b;if("c"===w)h=M(t)+h,t="";else{t=+t;var p=t<0;if(t=M(Math.abs(t),m),p&&0===+t&&(p=!1),s=(p?"("===a?a:"-":"-"===a||"("===a?"":a)+s,h=h+("s"===w?g[8+i/3]:"")+(p&&"("===a?")":""),x)for(n=-1,e=t.length;++n<e;)if(l=t.charCodeAt(n),48>l||l>57){h=(46===l?c+t.slice(n+1):t.slice(n))+h,t=t.slice(0,n);break}}y&&!d&&(t=o(t,1/0));var A=s.length+t.length+h.length,N=A<v?new Array(v-A+1).join(r):"";switch(y&&d&&(t=o(N+t,N.length?v-h.length:1/0),N=""),u){case"<":t=s+t+h+N;break;case"=":t=s+N+t+h;break;case"^":t=N.slice(0,A=N.length>>1)+s+t+h+N.slice(A);break;default:t=N+s+t+h}return f(t)}t=n(t);var r=t.fill,u=t.align,a=t.sign,l=t.symbol,d=t.zero,v=t.width,y=t.comma,m=t.precision,w=t.type,_="$"===l?s[0]:"#"===l&&/[boxX]/.test(w)?"0"+w.toLowerCase():"",b="$"===l?s[1]:/[%p]/.test(w)?p:"",M=h[w],x=!w||/[defgprs%]/.test(w);return m=null==m?w?6:12:/[gprs]/.test(w)?Math.max(1,Math.min(21,m)):Math.max(0,Math.min(20,m)),e.toString=function(){return t+""},e}function r(t,r){var i=e((t=n(t),t.type="f",t)),o=3*Math.max(-8,Math.min(8,Math.floor(u(r)/3))),a=Math.pow(10,-o),l=g[8+o/3];return function(t){return i(a*t)+l}}var o=t.grouping&&t.thousands?a(t.grouping,t.thousands):v,s=t.currency,c=t.decimal,f=t.numerals?l(t.numerals):v,p=t.percent||"%";return{format:e,formatPrefix:r}};r({decimal:".",thousands:",",grouping:[3],currency:["$",""]});var m=function(t){return Math.max(0,-u(Math.abs(t)))},w=function(t,n){return Math.max(0,3*Math.max(-8,Math.min(8,Math.floor(u(n)/3)))-u(Math.abs(t)))},_=function(t,n){return t=Math.abs(t),n=Math.abs(n)-t,Math.max(0,u(n)-u(t))+1};t.formatDefaultLocale=r,t.formatLocale=y,t.formatSpecifier=n,t.precisionFixed=m,t.precisionPrefix=w,t.precisionRound=_,Object.defineProperty(t,"__esModule",{value:!0})})},,,function(t,n,e){!function(t,r){r(n,e(4))}(this,function(t,n){"use strict";function e(t,n,e,r,i){var o=t*t,u=o*t;return((1-3*t+3*o-u)*n+(4-6*o+3*u)*e+(1+3*t+3*o-3*u)*r+u*i)/6}function r(t,n){return function(e){return t+e*n}}function i(t,n,e){return t=Math.pow(t,e),n=Math.pow(n,e)-t,e=1/e,function(r){return Math.pow(t+r*n,e)}}function o(t,n){var e=n-t;return e?r(t,e>180||e<-180?e-360*Math.round(e/360):e):E(isNaN(t)?n:t)}function u(t){return 1===(t=+t)?a:function(n,e){return e-n?i(n,e,t):E(isNaN(n)?e:n)}}function a(t,n){var e=n-t;return e?r(t,e):E(isNaN(t)?n:t)}function l(t){return function(e){var r,i,o=e.length,u=new Array(o),a=new Array(o),l=new Array(o);for(r=0;r<o;++r)i=n.rgb(e[r]),u[r]=i.r||0,a[r]=i.g||0,l[r]=i.b||0;return u=t(u),a=t(a),l=t(l),i.opacity=1,function(t){return i.r=u(t),i.g=a(t),i.b=l(t),i+""}}}function s(t){return function(){return t}}function c(t){return function(n){return t(n)+""}}function f(t){return"none"===t?D:(b||(b=document.createElement("DIV"),M=document.documentElement,x=document.defaultView),b.style.transform=t,t=x.getComputedStyle(M.appendChild(b),null).getPropertyValue("transform"),M.removeChild(b),t=t.slice(7,-1).split(","),F(+t[0],+t[1],+t[2],+t[3],+t[4],+t[5]))}function h(t){return null==t?D:(A||(A=document.createElementNS("http://www.w3.org/2000/svg","g")),A.setAttribute("transform",t),(t=A.transform.baseVal.consolidate())?(t=t.matrix,F(t.a,t.b,t.c,t.d,t.e,t.f)):D)}function p(t,n,e,r){function i(t){return t.length?t.pop()+" ":""}function o(t,r,i,o,u,a){if(t!==i||r!==o){var l=u.push("translate(",null,n,null,e);a.push({i:l-4,x:q(t,i)},{i:l-2,x:q(r,o)})}else(i||o)&&u.push("translate("+i+n+o+e)}function u(t,n,e,o){t!==n?(t-n>180?n+=360:n-t>180&&(t+=360),o.push({i:e.push(i(e)+"rotate(",null,r)-2,x:q(t,n)})):n&&e.push(i(e)+"rotate("+n+r)}function a(t,n,e,o){t!==n?o.push({i:e.push(i(e)+"skewX(",null,r)-2,x:q(t,n)}):n&&e.push(i(e)+"skewX("+n+r)}function l(t,n,e,r,o,u){if(t!==e||n!==r){var a=o.push(i(o)+"scale(",null,",",null,")");u.push({i:a-4,x:q(t,e)},{i:a-2,x:q(n,r)})}else 1===e&&1===r||o.push(i(o)+"scale("+e+","+r+")")}return function(n,e){var r=[],i=[];return n=t(n),e=t(e),o(n.translateX,n.translateY,e.translateX,e.translateY,r,i),u(n.rotate,e.rotate,r,i),a(n.skewX,e.skewX,r,i),l(n.scaleX,n.scaleY,e.scaleX,e.scaleY,r,i),n=e=null,function(t){for(var n,e=-1,o=i.length;++e<o;)r[(n=i[e]).i]=n.x(t);return r.join("")}}}function d(t){return((t=Math.exp(t))+1/t)/2}function v(t){return((t=Math.exp(t))-1/t)/2}function g(t){return((t=Math.exp(2*t))-1)/(t+1)}function y(t){return function(e,r){var i=t((e=n.hsl(e)).h,(r=n.hsl(r)).h),o=a(e.s,r.s),u=a(e.l,r.l),l=a(e.opacity,r.opacity);return function(t){return e.h=i(t),e.s=o(t),e.l=u(t),e.opacity=l(t),e+""}}}function m(t,e){var r=a((t=n.lab(t)).l,(e=n.lab(e)).l),i=a(t.a,e.a),o=a(t.b,e.b),u=a(t.opacity,e.opacity);return function(n){return t.l=r(n),t.a=i(n),t.b=o(n),t.opacity=u(n),t+""}}function w(t){return function(e,r){var i=t((e=n.hcl(e)).h,(r=n.hcl(r)).h),o=a(e.c,r.c),u=a(e.l,r.l),l=a(e.opacity,r.opacity);return function(t){return e.h=i(t),e.c=o(t),e.l=u(t),e.opacity=l(t),e+""}}}function _(t){return function e(r){function i(e,i){var o=t((e=n.cubehelix(e)).h,(i=n.cubehelix(i)).h),u=a(e.s,i.s),l=a(e.l,i.l),s=a(e.opacity,i.opacity);return function(t){return e.h=o(t),e.s=u(t),e.l=l(Math.pow(t,r)),e.opacity=s(t),e+""}}return r=+r,i.gamma=e,i}(1)}var b,M,x,A,N=function(t){var n=t.length-1;return function(r){var i=r<=0?r=0:r>=1?(r=1,n-1):Math.floor(r*n),o=t[i],u=t[i+1],a=i>0?t[i-1]:2*o-u,l=i<n-1?t[i+2]:2*u-o;return e((r-i/n)*n,a,o,u,l)}},k=function(t){var n=t.length;return function(r){var i=Math.floor(((r%=1)<0?++r:r)*n),o=t[(i+n-1)%n],u=t[i%n],a=t[(i+1)%n],l=t[(i+2)%n];return e((r-i/n)*n,o,u,a,l)}},E=function(t){return function(){return t}},S=function t(e){function r(t,e){var r=i((t=n.rgb(t)).r,(e=n.rgb(e)).r),o=i(t.g,e.g),u=i(t.b,e.b),l=a(t.opacity,e.opacity);return function(n){return t.r=r(n),t.g=o(n),t.b=u(n),t.opacity=l(n),t+""}}var i=u(e);return r.gamma=t,r}(1),O=l(N),P=l(k),I=function(t,n){var e,r=n?n.length:0,i=t?Math.min(r,t.length):0,o=new Array(r),u=new Array(r);for(e=0;e<i;++e)o[e]=R(t[e],n[e]);for(;e<r;++e)u[e]=n[e];return function(t){for(e=0;e<i;++e)u[e]=o[e](t);return u}},C=function(t,n){var e=new Date;return t=+t,n-=t,function(r){return e.setTime(t+n*r),e}},q=function(t,n){return t=+t,
n-=t,function(e){return t+n*e}},j=function(t,n){var e,r={},i={};null!==t&&"object"==typeof t||(t={}),null!==n&&"object"==typeof n||(n={});for(e in n)e in t?r[e]=R(t[e],n[e]):i[e]=n[e];return function(t){for(e in r)i[e]=r[e](t);return i}},T=/[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g,L=new RegExp(T.source,"g"),B=function(t,n){var e,r,i,o=T.lastIndex=L.lastIndex=0,u=-1,a=[],l=[];for(t+="",n+="";(e=T.exec(t))&&(r=L.exec(n));)(i=r.index)>o&&(i=n.slice(o,i),a[u]?a[u]+=i:a[++u]=i),(e=e[0])===(r=r[0])?a[u]?a[u]+=r:a[++u]=r:(a[++u]=null,l.push({i:u,x:q(e,r)})),o=L.lastIndex;return o<n.length&&(i=n.slice(o),a[u]?a[u]+=i:a[++u]=i),a.length<2?l[0]?c(l[0].x):s(n):(n=l.length,function(t){for(var e,r=0;r<n;++r)a[(e=l[r]).i]=e.x(t);return a.join("")})},R=function(t,e){var r,i=typeof e;return null==e||"boolean"===i?E(e):("number"===i?q:"string"===i?(r=n.color(e))?(e=r,S):B:e instanceof n.color?S:e instanceof Date?C:Array.isArray(e)?I:"function"!=typeof e.valueOf&&"function"!=typeof e.toString||isNaN(e)?j:q)(t,e)},X=function(t,n){return t=+t,n-=t,function(e){return Math.round(t+n*e)}},z=180/Math.PI,D={translateX:0,translateY:0,rotate:0,skewX:0,scaleX:1,scaleY:1},F=function(t,n,e,r,i,o){var u,a,l;return(u=Math.sqrt(t*t+n*n))&&(t/=u,n/=u),(l=t*e+n*r)&&(e-=t*l,r-=n*l),(a=Math.sqrt(e*e+r*r))&&(e/=a,r/=a,l/=a),t*r<n*e&&(t=-t,n=-n,l=-l,u=-u),{translateX:i,translateY:o,rotate:Math.atan2(n,t)*z,skewX:Math.atan(l)*z,scaleX:u,scaleY:a}},$=p(f,"px, ","px)","deg)"),V=p(h,", ",")",")"),Y=Math.SQRT2,H=2,Q=4,U=1e-12,G=function(t,n){var e,r,i=t[0],o=t[1],u=t[2],a=n[0],l=n[1],s=n[2],c=a-i,f=l-o,h=c*c+f*f;if(h<U)r=Math.log(s/u)/Y,e=function(t){return[i+t*c,o+t*f,u*Math.exp(Y*t*r)]};else{var p=Math.sqrt(h),y=(s*s-u*u+Q*h)/(2*u*H*p),m=(s*s-u*u-Q*h)/(2*s*H*p),w=Math.log(Math.sqrt(y*y+1)-y),_=Math.log(Math.sqrt(m*m+1)-m);r=(_-w)/Y,e=function(t){var n=t*r,e=d(w),a=u/(H*p)*(e*g(Y*n+w)-v(w));return[i+a*c,o+a*f,u*e/d(Y*n+w)]}}return e.duration=1e3*r,e},Z=y(o),J=y(a),K=w(o),W=w(a),tt=_(o),nt=_(a),et=function(t,n){for(var e=new Array(n),r=0;r<n;++r)e[r]=t(r/(n-1));return e};t.interpolate=R,t.interpolateArray=I,t.interpolateBasis=N,t.interpolateBasisClosed=k,t.interpolateDate=C,t.interpolateNumber=q,t.interpolateObject=j,t.interpolateRound=X,t.interpolateString=B,t.interpolateTransformCss=$,t.interpolateTransformSvg=V,t.interpolateZoom=G,t.interpolateRgb=S,t.interpolateRgbBasis=O,t.interpolateRgbBasisClosed=P,t.interpolateHsl=Z,t.interpolateHslLong=J,t.interpolateLab=m,t.interpolateHcl=K,t.interpolateHclLong=W,t.interpolateCubehelix=tt,t.interpolateCubehelixLong=nt,t.quantize=et,Object.defineProperty(t,"__esModule",{value:!0})})},,,function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(t){return function(){var n=this.ownerDocument,e=this.namespaceURI;return e===W&&n.documentElement.namespaceURI===W?n.createElement(t):n.createElementNS(e,t)}}function e(t){return function(){return this.ownerDocument.createElementNS(t.space,t.local)}}function r(){return new i}function i(){this._="@"+(++rt).toString(36)}function o(t,n,e){return t=u(t,n,e),function(n){var e=n.relatedTarget;e&&(e===this||8&e.compareDocumentPosition(this))||t.call(this,n)}}function u(n,e,r){return function(i){var o=t.event;t.event=i;try{n.call(this,this.__data__,e,r)}finally{t.event=o}}}function a(t){return t.trim().split(/^|\s+/).map(function(t){var n="",e=t.indexOf(".");return e>=0&&(n=t.slice(e+1),t=t.slice(0,e)),{type:t,name:n}})}function l(t){return function(){var n=this.__on;if(n){for(var e,r=0,i=-1,o=n.length;r<o;++r)e=n[r],t.type&&e.type!==t.type||e.name!==t.name?n[++i]=e:this.removeEventListener(e.type,e.listener,e.capture);++i?n.length=i:delete this.__on}}}function s(t,n,e){var r=lt.hasOwnProperty(t.type)?o:u;return function(i,o,u){var a,l=this.__on,s=r(n,o,u);if(l)for(var c=0,f=l.length;c<f;++c)if((a=l[c]).type===t.type&&a.name===t.name)return this.removeEventListener(a.type,a.listener,a.capture),this.addEventListener(a.type,a.listener=s,a.capture=e),void(a.value=n);this.addEventListener(t.type,s,e),a={type:t.type,name:t.name,value:n,listener:s,capture:e},l?l.push(a):this.__on=[a]}}function c(n,e,r,i){var o=t.event;n.sourceEvent=t.event,t.event=n;try{return e.apply(r,i)}finally{t.event=o}}function f(){}function h(){return[]}function p(t,n){this.ownerDocument=t.ownerDocument,this.namespaceURI=t.namespaceURI,this._next=null,this._parent=t,this.__data__=n}function d(t,n,e,r,i,o){for(var u,a=0,l=n.length,s=o.length;a<s;++a)(u=n[a])?(u.__data__=o[a],r[a]=u):e[a]=new p(t,o[a]);for(;a<l;++a)(u=n[a])&&(i[a]=u)}function v(t,n,e,r,i,o,u){var a,l,s,c={},f=n.length,h=o.length,d=new Array(f);for(a=0;a<f;++a)(l=n[a])&&(d[a]=s=Mt+u.call(l,l.__data__,a,n),s in c?i[a]=l:c[s]=l);for(a=0;a<h;++a)s=Mt+u.call(t,o[a],a,o),(l=c[s])?(r[a]=l,l.__data__=o[a],c[s]=null):e[a]=new p(t,o[a]);for(a=0;a<f;++a)(l=n[a])&&c[d[a]]===l&&(i[a]=l)}function g(t,n){return t<n?-1:t>n?1:t>=n?0:NaN}function y(t){return function(){this.removeAttribute(t)}}function m(t){return function(){this.removeAttributeNS(t.space,t.local)}}function w(t,n){return function(){this.setAttribute(t,n)}}function _(t,n){return function(){this.setAttributeNS(t.space,t.local,n)}}function b(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttribute(t):this.setAttribute(t,e)}}function M(t,n){return function(){var e=n.apply(this,arguments);null==e?this.removeAttributeNS(t.space,t.local):this.setAttributeNS(t.space,t.local,e)}}function x(t){return function(){this.style.removeProperty(t)}}function A(t,n,e){return function(){this.style.setProperty(t,n,e)}}function N(t,n,e){return function(){var r=n.apply(this,arguments);null==r?this.style.removeProperty(t):this.style.setProperty(t,r,e)}}function k(t,n){return t.style.getPropertyValue(n)||Tt(t).getComputedStyle(t,null).getPropertyValue(n)}function E(t){return function(){delete this[t]}}function S(t,n){return function(){this[t]=n}}function O(t,n){return function(){var e=n.apply(this,arguments);null==e?delete this[t]:this[t]=e}}function P(t){return t.trim().split(/^|\s+/)}function I(t){return t.classList||new C(t)}function C(t){this._node=t,this._names=P(t.getAttribute("class")||"")}function q(t,n){for(var e=I(t),r=-1,i=n.length;++r<i;)e.add(n[r])}function j(t,n){for(var e=I(t),r=-1,i=n.length;++r<i;)e.remove(n[r])}function T(t){return function(){q(this,t)}}function L(t){return function(){j(this,t)}}function B(t,n){return function(){(n.apply(this,arguments)?q:j)(this,t)}}function R(){this.textContent=""}function X(t){return function(){this.textContent=t}}function z(t){return function(){var n=t.apply(this,arguments);this.textContent=null==n?"":n}}function D(){this.innerHTML=""}function F(t){return function(){this.innerHTML=t}}function $(t){return function(){var n=t.apply(this,arguments);this.innerHTML=null==n?"":n}}function V(){this.nextSibling&&this.parentNode.appendChild(this)}function Y(){this.previousSibling&&this.parentNode.insertBefore(this,this.parentNode.firstChild)}function H(){return null}function Q(){var t=this.parentNode;t&&t.removeChild(this)}function U(t,n,e){var r=Tt(t),i=r.CustomEvent;"function"==typeof i?i=new i(n,e):(i=r.document.createEvent("Event"),e?(i.initEvent(n,e.bubbles,e.cancelable),i.detail=e.detail):i.initEvent(n,!1,!1)),t.dispatchEvent(i)}function G(t,n){return function(){return U(this,t,n)}}function Z(t,n){return function(){return U(this,t,n.apply(this,arguments))}}function J(t,n){this._groups=t,this._parents=n}function K(){return new J([[document.documentElement]],Ut)}var W="http://www.w3.org/1999/xhtml",tt={svg:"http://www.w3.org/2000/svg",xhtml:W,xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace",xmlns:"http://www.w3.org/2000/xmlns/"},nt=function(t){var n=t+="",e=n.indexOf(":");return e>=0&&"xmlns"!==(n=t.slice(0,e))&&(t=t.slice(e+1)),tt.hasOwnProperty(n)?{space:tt[n],local:t}:t},et=function(t){var r=nt(t);return(r.local?e:n)(r)},rt=0;i.prototype=r.prototype={constructor:i,get:function(t){for(var n=this._;!(n in t);)if(!(t=t.parentNode))return;return t[n]},set:function(t,n){return t[this._]=n},remove:function(t){return this._ in t&&delete t[this._]},toString:function(){return this._}};var it=function(t){return function(){return this.matches(t)}};if("undefined"!=typeof document){var ot=document.documentElement;if(!ot.matches){var ut=ot.webkitMatchesSelector||ot.msMatchesSelector||ot.mozMatchesSelector||ot.oMatchesSelector;it=function(t){return function(){return ut.call(this,t)}}}}var at=it,lt={};if(t.event=null,"undefined"!=typeof document){var st=document.documentElement;"onmouseenter"in st||(lt={mouseenter:"mouseover",mouseleave:"mouseout"})}var ct=function(t,n,e){var r,i,o=a(t+""),u=o.length;{if(!(arguments.length<2)){for(c=n?s:l,null==e&&(e=!1),r=0;r<u;++r)this.each(c(o[r],n,e));return this}var c=this.node().__on;if(c)for(var f,h=0,p=c.length;h<p;++h)for(r=0,f=c[h];r<u;++r)if((i=o[r]).type===f.type&&i.name===f.name)return f.value}},ft=function(){for(var n,e=t.event;n=e.sourceEvent;)e=n;return e},ht=function(t,n){var e=t.ownerSVGElement||t;if(e.createSVGPoint){var r=e.createSVGPoint();return r.x=n.clientX,r.y=n.clientY,r=r.matrixTransform(t.getScreenCTM().inverse()),[r.x,r.y]}var i=t.getBoundingClientRect();return[n.clientX-i.left-t.clientLeft,n.clientY-i.top-t.clientTop]},pt=function(t){var n=ft();return n.changedTouches&&(n=n.changedTouches[0]),ht(t,n)},dt=function(t){return null==t?f:function(){return this.querySelector(t)}},vt=function(t){"function"!=typeof t&&(t=dt(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u,a=n[i],l=a.length,s=r[i]=new Array(l),c=0;c<l;++c)(o=a[c])&&(u=t.call(o,o.__data__,c,a))&&("__data__"in o&&(u.__data__=o.__data__),s[c]=u);return new J(r,this._parents)},gt=function(t){return null==t?h:function(){return this.querySelectorAll(t)}},yt=function(t){"function"!=typeof t&&(t=gt(t));for(var n=this._groups,e=n.length,r=[],i=[],o=0;o<e;++o)for(var u,a=n[o],l=a.length,s=0;s<l;++s)(u=a[s])&&(r.push(t.call(u,u.__data__,s,a)),i.push(u));return new J(r,i)},mt=function(t){"function"!=typeof t&&(t=at(t));for(var n=this._groups,e=n.length,r=new Array(e),i=0;i<e;++i)for(var o,u=n[i],a=u.length,l=r[i]=[],s=0;s<a;++s)(o=u[s])&&t.call(o,o.__data__,s,u)&&l.push(o);return new J(r,this._parents)},wt=function(t){return new Array(t.length)},_t=function(){return new J(this._enter||this._groups.map(wt),this._parents)};p.prototype={constructor:p,appendChild:function(t){return this._parent.insertBefore(t,this._next)},insertBefore:function(t,n){return this._parent.insertBefore(t,n)},querySelector:function(t){return this._parent.querySelector(t)},querySelectorAll:function(t){return this._parent.querySelectorAll(t)}};var bt=function(t){return function(){return t}},Mt="$",xt=function(t,n){if(!t)return p=new Array(this.size()),s=-1,this.each(function(t){p[++s]=t}),p;var e=n?v:d,r=this._parents,i=this._groups;"function"!=typeof t&&(t=bt(t));for(var o=i.length,u=new Array(o),a=new Array(o),l=new Array(o),s=0;s<o;++s){var c=r[s],f=i[s],h=f.length,p=t.call(c,c&&c.__data__,s,r),g=p.length,y=a[s]=new Array(g),m=u[s]=new Array(g),w=l[s]=new Array(h);e(c,f,y,m,w,p,n);for(var _,b,M=0,x=0;M<g;++M)if(_=y[M]){for(M>=x&&(x=M+1);!(b=m[x])&&++x<g;);_._next=b||null}}return u=new J(u,r),u._enter=a,u._exit=l,u},At=function(){return new J(this._exit||this._groups.map(wt),this._parents)},Nt=function(t){for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var l,s=n[a],c=e[a],f=s.length,h=u[a]=new Array(f),p=0;p<f;++p)(l=s[p]||c[p])&&(h[p]=l);for(;a<r;++a)u[a]=n[a];return new J(u,this._parents)},kt=function(){for(var t=this._groups,n=-1,e=t.length;++n<e;)for(var r,i=t[n],o=i.length-1,u=i[o];--o>=0;)(r=i[o])&&(u&&u!==r.nextSibling&&u.parentNode.insertBefore(r,u),u=r);return this},Et=function(t){function n(n,e){return n&&e?t(n.__data__,e.__data__):!n-!e}t||(t=g);for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o){for(var u,a=e[o],l=a.length,s=i[o]=new Array(l),c=0;c<l;++c)(u=a[c])&&(s[c]=u);s.sort(n)}return new J(i,this._parents).order()},St=function(){var t=arguments[0];return arguments[0]=this,t.apply(null,arguments),this},Ot=function(){var t=new Array(this.size()),n=-1;return this.each(function(){t[++n]=this}),t},Pt=function(){for(var t=this._groups,n=0,e=t.length;n<e;++n)for(var r=t[n],i=0,o=r.length;i<o;++i){var u=r[i];if(u)return u}return null},It=function(){var t=0;return this.each(function(){++t}),t},Ct=function(){return!this.node()},qt=function(t){for(var n=this._groups,e=0,r=n.length;e<r;++e)for(var i,o=n[e],u=0,a=o.length;u<a;++u)(i=o[u])&&t.call(i,i.__data__,u,o);return this},jt=function(t,n){var e=nt(t);if(arguments.length<2){var r=this.node();return e.local?r.getAttributeNS(e.space,e.local):r.getAttribute(e)}return this.each((null==n?e.local?m:y:"function"==typeof n?e.local?M:b:e.local?_:w)(e,n))},Tt=function(t){return t.ownerDocument&&t.ownerDocument.defaultView||t.document&&t||t.defaultView},Lt=function(t,n,e){return arguments.length>1?this.each((null==n?x:"function"==typeof n?N:A)(t,n,null==e?"":e)):k(this.node(),t)},Bt=function(t,n){return arguments.length>1?this.each((null==n?E:"function"==typeof n?O:S)(t,n)):this.node()[t]};C.prototype={add:function(t){var n=this._names.indexOf(t);n<0&&(this._names.push(t),this._node.setAttribute("class",this._names.join(" ")))},remove:function(t){var n=this._names.indexOf(t);n>=0&&(this._names.splice(n,1),this._node.setAttribute("class",this._names.join(" ")))},contains:function(t){return this._names.indexOf(t)>=0}};var Rt=function(t,n){var e=P(t+"");if(arguments.length<2){for(var r=I(this.node()),i=-1,o=e.length;++i<o;)if(!r.contains(e[i]))return!1;return!0}return this.each(("function"==typeof n?B:n?T:L)(e,n))},Xt=function(t){return arguments.length?this.each(null==t?R:("function"==typeof t?z:X)(t)):this.node().textContent},zt=function(t){return arguments.length?this.each(null==t?D:("function"==typeof t?$:F)(t)):this.node().innerHTML},Dt=function(){return this.each(V)},Ft=function(){return this.each(Y)},$t=function(t){var n="function"==typeof t?t:et(t);return this.select(function(){return this.appendChild(n.apply(this,arguments))})},Vt=function(t,n){var e="function"==typeof t?t:et(t),r=null==n?H:"function"==typeof n?n:dt(n);return this.select(function(){return this.insertBefore(e.apply(this,arguments),r.apply(this,arguments)||null)})},Yt=function(){return this.each(Q)},Ht=function(t){return arguments.length?this.property("__data__",t):this.node().__data__},Qt=function(t,n){return this.each(("function"==typeof n?Z:G)(t,n))},Ut=[null];J.prototype=K.prototype={constructor:J,select:vt,selectAll:yt,filter:mt,data:xt,enter:_t,exit:At,merge:Nt,order:kt,sort:Et,call:St,nodes:Ot,node:Pt,size:It,empty:Ct,each:qt,attr:jt,style:Lt,property:Bt,classed:Rt,text:Xt,html:zt,raise:Dt,lower:Ft,append:$t,insert:Vt,remove:Yt,datum:Ht,on:ct,dispatch:Qt};var Gt=function(t){return"string"==typeof t?new J([[document.querySelector(t)]],[document.documentElement]):new J([[t]],Ut)},Zt=function(t){return"string"==typeof t?new J([document.querySelectorAll(t)],[document.documentElement]):new J([null==t?[]:t],Ut)},Jt=function(t,n,e){arguments.length<3&&(e=n,n=ft().changedTouches);for(var r,i=0,o=n?n.length:0;i<o;++i)if((r=n[i]).identifier===e)return ht(t,r);return null},Kt=function(t,n){null==n&&(n=ft().touches);for(var e=0,r=n?n.length:0,i=new Array(r);e<r;++e)i[e]=ht(t,n[e]);return i};t.creator=et,t.local=r,t.matcher=at,t.mouse=pt,t.namespace=nt,t.namespaces=tt,t.select=Gt,t.selectAll=Zt,t.selection=K,t.selector=dt,t.selectorAll=gt,t.style=k,t.touch=Jt,t.touches=Kt,t.window=Tt,t.customEvent=c,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,r){r(n,e(12),e(5),e(14),e(9),e(4),e(2))}(this,function(t,n,e,r,i,o,u){"use strict";function a(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>$)throw new Error("too late");return e}function l(t,n){var e=t.__transition;if(!e||!(e=e[n])||e.state>Y)throw new Error("too late");return e}function s(t,n){var e=t.__transition;if(!e||!(e=e[n]))throw new Error("too late");return e}function c(t,n,e){function i(t){e.state=V,e.timer.restart(o,e.delay,e.time),e.delay<=t&&o(t-e.delay)}function o(i){var c,f,h,p;if(e.state!==V)return a();for(c in s)if(p=s[c],p.name===e.name){if(p.state===H)return r.timeout(o);p.state===Q?(p.state=G,p.timer.stop(),p.on.call("interrupt",t,t.__data__,p.index,p.group),delete s[c]):+c<n&&(p.state=G,p.timer.stop(),delete s[c])}if(r.timeout(function(){e.state===H&&(e.state=Q,e.timer.restart(u,e.delay,e.time),u(i))}),e.state=Y,e.on.call("start",t,t.__data__,e.index,e.group),e.state===Y){for(e.state=H,l=new Array(h=e.tween.length),c=0,f=-1;c<h;++c)(p=e.tween[c].value.call(t,t.__data__,e.index,e.group))&&(l[++f]=p);l.length=f+1}}function u(n){for(var r=n<e.duration?e.ease.call(null,n/e.duration):(e.timer.restart(a),e.state=U,1),i=-1,o=l.length;++i<o;)l[i].call(null,r);e.state===U&&(e.on.call("end",t,t.__data__,e.index,e.group),a())}function a(){e.state=G,e.timer.stop(),delete s[n];for(var r in s)return;delete t.__transition}var l,s=t.__transition;s[n]=e,e.timer=r.timer(i,0,e.time)}function f(t,n){var e,r;return function(){var i=l(this,t),o=i.tween;if(o!==e){r=e=o;for(var u=0,a=r.length;u<a;++u)if(r[u].name===n){r=r.slice(),r.splice(u,1);break}}i.tween=r}}function h(t,n,e){var r,i;if("function"!=typeof e)throw new Error;return function(){var o=l(this,t),u=o.tween;if(u!==r){i=(r=u).slice();for(var a={name:n,value:e},s=0,c=i.length;s<c;++s)if(i[s].name===n){i[s]=a;break}s===c&&i.push(a)}o.tween=i}}function p(t,n,e){var r=t._id;return t.each(function(){var t=l(this,r);(t.value||(t.value={}))[n]=e.apply(this,arguments)}),function(t){return s(t,r).value[n]}}function d(t){return function(){this.removeAttribute(t)}}function v(t){return function(){this.removeAttributeNS(t.space,t.local)}}function g(t,n,e){var r,i;return function(){var o=this.getAttribute(t);return o===e?null:o===r?i:i=n(r=o,e)}}function y(t,n,e){var r,i;return function(){var o=this.getAttributeNS(t.space,t.local);return o===e?null:o===r?i:i=n(r=o,e)}}function m(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttribute(t):(u=this.getAttribute(t),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function w(t,n,e){var r,i,o;return function(){var u,a=e(this);return null==a?void this.removeAttributeNS(t.space,t.local):(u=this.getAttributeNS(t.space,t.local),u===a?null:u===r&&a===i?o:o=n(r=u,i=a))}}function _(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttributeNS(t.space,t.local,r(n))}}return e._value=n,e}function b(t,n){function e(){var e=this,r=n.apply(e,arguments);return r&&function(n){e.setAttribute(t,r(n))}}return e._value=n,e}function M(t,n){return function(){a(this,t).delay=+n.apply(this,arguments)}}function x(t,n){return n=+n,function(){a(this,t).delay=n}}function A(t,n){return function(){l(this,t).duration=+n.apply(this,arguments)}}function N(t,n){return n=+n,function(){l(this,t).duration=n}}function k(t,n){if("function"!=typeof n)throw new Error;return function(){l(this,t).ease=n}}function E(t){return(t+"").trim().split(/^|\s+/).every(function(t){var n=t.indexOf(".");return n>=0&&(t=t.slice(0,n)),!t||"start"===t})}function S(t,n,e){var r,i,o=E(n)?a:l;return function(){var u=o(this,t),a=u.on;a!==r&&(i=(r=a).copy()).on(n,e),u.on=i}}function O(t){return function(){var n=this.parentNode;for(var e in this.__transition)if(+e!==t)return;n&&n.removeChild(this)}}function P(t,e){var r,i,o;return function(){var u=n.style(this,t),a=(this.style.removeProperty(t),n.style(this,t));return u===a?null:u===r&&a===i?o:o=e(r=u,i=a)}}function I(t){return function(){this.style.removeProperty(t)}}function C(t,e,r){var i,o;return function(){var u=n.style(this,t);return u===r?null:u===i?o:o=e(i=u,r)}}function q(t,e,r){var i,o,u;return function(){var a=n.style(this,t),l=r(this);return null==l&&(this.style.removeProperty(t),l=n.style(this,t)),a===l?null:a===i&&l===o?u:u=e(i=a,o=l)}}function j(t,n,e){function r(){var r=this,i=n.apply(r,arguments);return i&&function(n){r.style.setProperty(t,i(n),e)}}return r._value=n,r}function T(t){return function(){this.textContent=t}}function L(t){return function(){var n=t(this);this.textContent=null==n?"":n}}function B(t,n,e,r){this._groups=t,this._parents=n,this._name=e,this._id=r}function R(t){return n.selection().transition(t)}function X(){return++mt}function z(t,n){for(var e;!(e=t.__transition)||!(e=e[n]);)if(!(t=t.parentNode))return _t.time=r.now(),_t;return e}var D=e.dispatch("start","end","interrupt"),F=[],$=0,V=1,Y=2,H=3,Q=4,U=5,G=6,Z=function(t,n,e,r,i,o){var u=t.__transition;if(u){if(e in u)return}else t.__transition={};c(t,e,{name:n,index:r,group:i,on:D,tween:F,time:o.time,delay:o.delay,duration:o.duration,ease:o.ease,timer:null,state:$})},J=function(t,n){var e,r,i,o=t.__transition,u=!0;if(o){n=null==n?null:n+"";for(i in o)(e=o[i]).name===n?(r=e.state>Y&&e.state<U,e.state=G,e.timer.stop(),r&&e.on.call("interrupt",t,t.__data__,e.index,e.group),delete o[i]):u=!1;u&&delete t.__transition}},K=function(t){return this.each(function(){J(this,t)})},W=function(t,n){var e=this._id;if(t+="",arguments.length<2){for(var r,i=s(this.node(),e).tween,o=0,u=i.length;o<u;++o)if((r=i[o]).name===t)return r.value;return null}return this.each((null==n?f:h)(e,t,n))},tt=function(t,n){var e;return("number"==typeof n?i.interpolateNumber:n instanceof o.color?i.interpolateRgb:(e=o.color(n))?(n=e,i.interpolateRgb):i.interpolateString)(t,n)},nt=function(t,e){var r=n.namespace(t),o="transform"===r?i.interpolateTransformSvg:tt;return this.attrTween(t,"function"==typeof e?(r.local?w:m)(r,o,p(this,"attr."+t,e)):null==e?(r.local?v:d)(r):(r.local?y:g)(r,o,e+""))},et=function(t,e){var r="attr."+t;if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==e)return this.tween(r,null);if("function"!=typeof e)throw new Error;var i=n.namespace(t);return this.tween(r,(i.local?_:b)(i,e))},rt=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?M:x)(n,t)):s(this.node(),n).delay},it=function(t){var n=this._id;return arguments.length?this.each(("function"==typeof t?A:N)(n,t)):s(this.node(),n).duration},ot=function(t){var n=this._id;return arguments.length?this.each(k(n,t)):s(this.node(),n).ease},ut=function(t){"function"!=typeof t&&(t=n.matcher(t));for(var e=this._groups,r=e.length,i=new Array(r),o=0;o<r;++o)for(var u,a=e[o],l=a.length,s=i[o]=[],c=0;c<l;++c)(u=a[c])&&t.call(u,u.__data__,c,a)&&s.push(u);return new B(i,this._parents,this._name,this._id)},at=function(t){if(t._id!==this._id)throw new Error;for(var n=this._groups,e=t._groups,r=n.length,i=e.length,o=Math.min(r,i),u=new Array(r),a=0;a<o;++a)for(var l,s=n[a],c=e[a],f=s.length,h=u[a]=new Array(f),p=0;p<f;++p)(l=s[p]||c[p])&&(h[p]=l);for(;a<r;++a)u[a]=n[a];return new B(u,this._parents,this._name,this._id)},lt=function(t,n){var e=this._id;return arguments.length<2?s(this.node(),e).on.on(t):this.each(S(e,t,n))},st=function(){return this.on("end.remove",O(this._id))},ct=function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=n.selector(t));for(var i=this._groups,o=i.length,u=new Array(o),a=0;a<o;++a)for(var l,c,f=i[a],h=f.length,p=u[a]=new Array(h),d=0;d<h;++d)(l=f[d])&&(c=t.call(l,l.__data__,d,f))&&("__data__"in l&&(c.__data__=l.__data__),p[d]=c,Z(p[d],e,r,d,p,s(l,r)));return new B(u,this._parents,e,r)},ft=function(t){var e=this._name,r=this._id;"function"!=typeof t&&(t=n.selectorAll(t));for(var i=this._groups,o=i.length,u=[],a=[],l=0;l<o;++l)for(var c,f=i[l],h=f.length,p=0;p<h;++p)if(c=f[p]){for(var d,v=t.call(c,c.__data__,p,f),g=s(c,r),y=0,m=v.length;y<m;++y)(d=v[y])&&Z(d,e,r,y,v,g);u.push(v),a.push(c)}return new B(u,a,e,r)},ht=n.selection.prototype.constructor,pt=function(){return new ht(this._groups,this._parents)},dt=function(t,n,e){var r="transform"==(t+="")?i.interpolateTransformCss:tt;return null==n?this.styleTween(t,P(t,r)).on("end.style."+t,I(t)):this.styleTween(t,"function"==typeof n?q(t,r,p(this,"style."+t,n)):C(t,r,n+""),e)},vt=function(t,n,e){var r="style."+(t+="");if(arguments.length<2)return(r=this.tween(r))&&r._value;if(null==n)return this.tween(r,null);if("function"!=typeof n)throw new Error;return this.tween(r,j(t,n,null==e?"":e))},gt=function(t){return this.tween("text","function"==typeof t?L(p(this,"text",t)):T(null==t?"":t+""))},yt=function(){for(var t=this._name,n=this._id,e=X(),r=this._groups,i=r.length,o=0;o<i;++o)for(var u,a=r[o],l=a.length,c=0;c<l;++c)if(u=a[c]){var f=s(u,n);Z(u,t,e,c,a,{time:f.time+f.delay+f.duration,delay:0,duration:f.duration,ease:f.ease})}return new B(r,this._parents,t,e)},mt=0,wt=n.selection.prototype;B.prototype=R.prototype={constructor:B,select:ct,selectAll:ft,filter:ut,merge:at,selection:pt,transition:yt,call:wt.call,nodes:wt.nodes,node:wt.node,size:wt.size,empty:wt.empty,each:wt.each,on:lt,attr:nt,attrTween:et,style:dt,styleTween:vt,text:gt,remove:st,tween:W,delay:rt,duration:it,ease:ot};var _t={time:null,delay:0,duration:250,ease:u.easeCubicInOut},bt=function(t){var n,e;t instanceof B?(n=t._id,t=t._name):(n=X(),(e=_t).time=r.now(),t=null==t?null:t+"");for(var i=this._groups,o=i.length,u=0;u<o;++u)for(var a,l=i[u],s=l.length,c=0;c<s;++c)(a=l[c])&&Z(a,t,n,c,l,e||z(a,n));return new B(i,this._parents,t,n)};n.selection.prototype.interrupt=K,n.selection.prototype.transition=bt;var Mt=[null],xt=function(t,n){var e,r,i=t.__transition;if(i){n=null==n?null:n+"";for(r in i)if((e=i[r]).state>V&&e.name===n)return new B([[t]],Mt,n,+r)}return null};t.transition=R,t.active=xt,t.interrupt=J,Object.defineProperty(t,"__esModule",{value:!0})})},function(t,n,e){!function(t,e){e(n)}(this,function(t){"use strict";function n(){return y||(_(e),y=w.now()+m)}function e(){y=0}function r(){this._call=this._time=this._next=null}function i(t,n,e){var i=new r;return i.restart(t,n,e),i}function o(){n(),++h;for(var t,e=c;e;)(t=y-e._time)>=0&&e._call.call(null,t),e=e._next;--h}function u(){y=(g=w.now())+m,h=p=0;try{o()}finally{h=0,l(),y=0}}function a(){var t=w.now(),n=t-g;n>v&&(m-=n,g=t)}function l(){for(var t,n,e=c,r=1/0;e;)e._call?(r>e._time&&(r=e._time),t=e,e=e._next):(n=e._next,e._next=null,e=t?t._next=n:c=n);f=t,s(r)}function s(t){if(!h){p&&(p=clearTimeout(p));var n=t-y;n>24?(t<1/0&&(p=setTimeout(u,n)),d&&(d=clearInterval(d))):(d||(g=y,d=setInterval(a,v)),h=1,_(u))}}var c,f,h=0,p=0,d=0,v=1e3,g=0,y=0,m=0,w="object"==typeof performance&&performance.now?performance:Date,_="object"==typeof window&&window.requestAnimationFrame?window.requestAnimationFrame.bind(window):function(t){setTimeout(t,17)};r.prototype=i.prototype={constructor:r,restart:function(t,e,r){if("function"!=typeof t)throw new TypeError("callback is not a function");r=(null==r?n():+r)+(null==e?0:+e),this._next||f===this||(f?f._next=this:c=this,f=this),this._call=t,this._time=r,s()},stop:function(){this._call&&(this._call=null,this._time=1/0,s())}};var b=function(t,n,e){var i=new r;return n=null==n?0:+n,i.restart(function(e){i.stop(),t(e+n)},n,e),i},M=function(t,e,i){var o=new r,u=e;return null==e?(o.restart(t,e,i),o):(e=+e,i=null==i?n():+i,o.restart(function n(r){r+=u,o.restart(n,u+=e,i),t(r)},e,i),o)};t.now=n,t.timer=i,t.timerFlush=o,t.timeout=b,t.interval=M,Object.defineProperty(t,"__esModule",{value:!0})})}])});
//# sourceMappingURL=mini-tooltip.min.js.map

/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map