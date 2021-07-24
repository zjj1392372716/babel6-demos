'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.func1 = undefined;

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var num1 = 100;

var func1 = exports.func1 = function func1() {};

var arr = [1, 2, 3, 4];

var isOk = arr.indexOf(2) !== -1;

var Person = exports.Person = function () {
  function Person(name) {
    (0, _classCallCheck3.default)(this, Person);

    this.name = name;
  }

  (0, _createClass3.default)(Person, [{
    key: 'sayName',
    value: function sayName() {
      return this.name;
    }
  }]);
  return Person;
}();

var p = _promise2.default.resolve();

p.then(function () {
  console.log('Promise');
});

var person = new Person('zjj');
person.sayName();

console.log('[DEBUG]: ', isOk, num1);
