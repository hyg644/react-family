webpackJsonp([1],{yOQi:function(module,exports,__webpack_require__){"use strict";(function(module){function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function _inherits(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}Object.defineProperty(exports,"__esModule",{value:!0});var _createClass=function(){function e(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,r,n){return r&&e(t.prototype,r),n&&e(t,n),t}}(),_react=__webpack_require__("GiK3"),_react2=_interopRequireDefault(_react);!function(){var e=__webpack_require__("rGbO").enterModule;e&&e(module)}();var Home=function(_Component){function Home(e){_classCallCheck(this,Home);var t=_possibleConstructorReturn(this,(Home.__proto__||Object.getPrototypeOf(Home)).call(this,e));return t.state={count:0},t}return _inherits(Home,_Component),_createClass(Home,[{key:"_handleClick",value:function(){this.setState({count:++this.state.count})}},{key:"render",value:function(){var e=this;return _react2.default.createElement("div",null,"this is home~",_react2.default.createElement("br",null),"当前计数：",this.state.count,_react2.default.createElement("br",null),_react2.default.createElement("button",{onClick:function(){return e._handleClick()}},"自增"))}},{key:"__reactstandin__regenerateByEval",value:function __reactstandin__regenerateByEval(key,code){this[key]=eval(code)}}]),Home}(_react.Component),_default=Home;exports.default=_default,function(){var e=__webpack_require__("rGbO").default,t=__webpack_require__("rGbO").leaveModule;e&&(e.register(Home,"Home","F:/react-family/src/pages/home.js"),e.register(_default,"default","F:/react-family/src/pages/home.js"),t(module))}()}).call(exports,__webpack_require__("3IRH")(module))}});