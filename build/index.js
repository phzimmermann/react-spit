module.exports =
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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Store = function Store() {
  var _this = this;

  _classCallCheck(this, Store);

  this.addListener = function (listener) {
    return _this.listeners.push(listener);
  };

  this.addEvent = function (event) {
    _this.events.push(event);
    _this.listeners.forEach(function (listener) {
      listener.onAddEvent(event);
    });
  };

  this.getEvents = function () {
    return _this.events;
  };

  this.toObject = function () {
    return _this.events.reduce(function (curr, event) {
      return _extends({}, curr, _defineProperty({}, event.getIdentifier(), event.get()));
    }, {});
  };

  this.fromObject = function (dataStructure) {
    return Object.keys(dataStructure).forEach(function (key) {
      _this.events.forEach(function (event) {
        if (event.getIdentifier() === key) {
          event.set(dataStructure[key]);
        }
      });
    });
  };

  this.listeners = [];
  this.events = [];
};

var defaultStore = new Store();

exports.default = defaultStore;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Store = __webpack_require__(0);

var _Store2 = _interopRequireDefault(_Store);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Event = function Event(data, identifier) {
  var _this = this;

  _classCallCheck(this, Event);

  this.addListener = function (cls) {
    _this.listeners.push(cls);
  };

  this.set = function (val) {
    _this.listeners.forEach(function (cls) {
      return cls.set(val, _this);
    });
    _this.data = val;
  };

  this.setInitial = function (val) {
    return _this.set(val);
  };

  this.get = function () {
    return _this.data;
  };

  this.getIdentifier = function () {
    return _this.identifier;
  };

  this.removeListener = function (cls) {
    return _this.listeners.filter(function (_cls) {
      return _cls !== cls;
    });
  };

  this.data = data;
  this.listeners = [];
  this.identifier = identifier;
  _Store2.default.addEvent(this);
};

exports.default = Event;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(4);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

exports.default = function (event) {
  return function (_React$Component) {
    _inherits(Spit, _React$Component);

    function Spit(props) {
      _classCallCheck(this, Spit);

      var _this = _possibleConstructorReturn(this, (Spit.__proto__ || Object.getPrototypeOf(Spit)).call(this, props));

      _this.set = function (data) {
        return _this.setState({
          data: data
        });
      };

      event.addListener(_this);
      _this.state = {
        data: event.get()
      };
      return _this;
    }

    _createClass(Spit, [{
      key: 'render',
      value: function render() {
        var children = this.props.children;

        return children({ data: this.state.data, set: event.set });
      }
    }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
        event.removeListener(this);
      }
    }]);

    return Spit;
  }(_react2.default.Component);
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Spit = __webpack_require__(2);

Object.defineProperty(exports, 'Spit', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Spit).default;
  }
});

var _Store = __webpack_require__(0);

Object.defineProperty(exports, 'Store', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Store).default;
  }
});

var _Event = __webpack_require__(1);

Object.defineProperty(exports, 'Event', {
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Event).default;
  }
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })
/******/ ]);