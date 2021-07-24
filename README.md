## babel6x 使用demo

### 阶段一：

```sh
{
  "presets": [
    ["env", {
      "targets": {
        "chrome": 40
      }
    }]
  ]
}
```
源码：
```js
const num1 = 100;

export const func1 = () => {};

const arr = [1, 2, 3, 4];

const isOk = arr.includes(2);

export class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return this.name;
  }
}

const person = new Person('zjj');
person.sayName();

console.log('[DEBUG]: ', isOk, num1);

```
输出 Out:

```js
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var num1 = 100;

var func1 = exports.func1 = function func1() {};

var arr = [1, 2, 3, 4];

var isOk = arr.includes(2);

var Person = exports.Person = function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: 'sayName',
    value: function sayName() {
      return this.name;
    }
  }]);

  return Person;
}();

var person = new Person('zjj');
person.sayName();

console.log('[DEBUG]: ', isOk, num1);


```

> 总结：

- 输出模块为 commonjs
- includes 未被转换

### 阶段二：

`npm i babel-polyfill --save`

```sh
{
  "presets": [
    ["env", {
      "targets": {
        "chrome": 40
      },
      "useBuiltIns": true
    }]
  ]
}
```
入口文件中引入：
```js
// index.js
import "babel-polyfill";
// ...
```
输出 Out:
```js
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Person = exports.func1 = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

require('core-js/modules/es6.typed.array-buffer');

require('core-js/modules/es6.typed.int8-array');

require('core-js/modules/es6.typed.uint8-array');

require('core-js/modules/es6.typed.uint8-clamped-array');

require('core-js/modules/es6.typed.int16-array');

require('core-js/modules/es6.typed.uint16-array');

require('core-js/modules/es6.typed.int32-array');

require('core-js/modules/es6.typed.uint32-array');

require('core-js/modules/es6.typed.float32-array');

require('core-js/modules/es6.typed.float64-array');

require('core-js/modules/es6.map');

require('core-js/modules/es6.set');

require('core-js/modules/es6.weak-map');

require('core-js/modules/es6.weak-set');

require('core-js/modules/es6.reflect.apply');

require('core-js/modules/es6.reflect.construct');

require('core-js/modules/es6.reflect.define-property');

require('core-js/modules/es6.reflect.delete-property');

require('core-js/modules/es6.reflect.get');

require('core-js/modules/es6.reflect.get-own-property-descriptor');

require('core-js/modules/es6.reflect.get-prototype-of');

require('core-js/modules/es6.reflect.has');

require('core-js/modules/es6.reflect.is-extensible');

require('core-js/modules/es6.reflect.own-keys');

require('core-js/modules/es6.reflect.prevent-extensions');

require('core-js/modules/es6.reflect.set');

require('core-js/modules/es6.reflect.set-prototype-of');

require('core-js/modules/es6.promise');

require('core-js/modules/es6.symbol');

require('core-js/modules/es6.object.freeze');

require('core-js/modules/es6.object.seal');

require('core-js/modules/es6.object.prevent-extensions');

require('core-js/modules/es6.object.is-frozen');

require('core-js/modules/es6.object.is-sealed');

require('core-js/modules/es6.object.is-extensible');

require('core-js/modules/es6.object.get-own-property-descriptor');

require('core-js/modules/es6.object.get-prototype-of');

require('core-js/modules/es6.object.keys');

require('core-js/modules/es6.object.get-own-property-names');

require('core-js/modules/es6.object.assign');

require('core-js/modules/es6.object.is');

require('core-js/modules/es6.object.set-prototype-of');

require('core-js/modules/es6.function.name');

require('core-js/modules/es6.string.raw');

require('core-js/modules/es6.string.from-code-point');

require('core-js/modules/es6.string.code-point-at');

require('core-js/modules/es6.string.repeat');

require('core-js/modules/es6.string.starts-with');

require('core-js/modules/es6.string.ends-with');

require('core-js/modules/es6.string.includes');

require('core-js/modules/es6.regexp.flags');

require('core-js/modules/es6.regexp.match');

require('core-js/modules/es6.regexp.replace');

require('core-js/modules/es6.regexp.split');

require('core-js/modules/es6.regexp.search');

require('core-js/modules/es6.array.from');

require('core-js/modules/es6.array.of');

require('core-js/modules/es6.array.copy-within');

require('core-js/modules/es6.array.find');

require('core-js/modules/es6.array.find-index');

require('core-js/modules/es6.array.fill');

require('core-js/modules/es6.array.iterator');

require('core-js/modules/es6.number.is-finite');

require('core-js/modules/es6.number.is-integer');

require('core-js/modules/es6.number.is-safe-integer');

require('core-js/modules/es6.number.is-nan');

require('core-js/modules/es6.number.epsilon');

require('core-js/modules/es6.number.min-safe-integer');

require('core-js/modules/es6.number.max-safe-integer');

require('core-js/modules/es6.math.acosh');

require('core-js/modules/es6.math.asinh');

require('core-js/modules/es6.math.atanh');

require('core-js/modules/es6.math.cbrt');

require('core-js/modules/es6.math.clz32');

require('core-js/modules/es6.math.cosh');

require('core-js/modules/es6.math.expm1');

require('core-js/modules/es6.math.fround');

require('core-js/modules/es6.math.hypot');

require('core-js/modules/es6.math.imul');

require('core-js/modules/es6.math.log1p');

require('core-js/modules/es6.math.log10');

require('core-js/modules/es6.math.log2');

require('core-js/modules/es6.math.sign');

require('core-js/modules/es6.math.sinh');

require('core-js/modules/es6.math.tanh');

require('core-js/modules/es6.math.trunc');

require('core-js/modules/es7.array.includes');

require('core-js/modules/es7.object.values');

require('core-js/modules/es7.object.entries');

require('core-js/modules/es7.object.get-own-property-descriptors');

require('core-js/modules/es7.string.pad-start');

require('core-js/modules/es7.string.pad-end');

require('core-js/modules/web.timers');

require('core-js/modules/web.immediate');

require('core-js/modules/web.dom.iterable');

require('regenerator-runtime/runtime');

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var num1 = 100;

var func1 = exports.func1 = function func1() {};

var arr = [1, 2, 3, 4];

var isOk = arr.includes(2);

var Person = exports.Person = function () {
  function Person(name) {
    _classCallCheck(this, Person);

    this.name = name;
  }

  _createClass(Person, [{
    key: 'sayName',
    value: function sayName() {
      return this.name;
    }
  }]);

  return Person;
}();

var person = new Person('zjj');
person.sayName();

console.log('[DEBUG]: ', isOk, num1);

```

> 结论：

- 引入了 polyfill
- preset-env 配置了 useBuiltIns 对 polyfill 自动处理
- 最终将所有的 polyfill 均引入了
- polyfill 未做按需引入处理，但是好在还是根据 targets 的配置做了一层过滤的

### 阶段三：

```sh
npm install --save babel-runtime
npm install --save-dev babel-plugin-transform-runtime
```

```js
{
  "presets": [
    ["env", {
      "targets": {
        "chrome": 40,
        "safari": 6,
        "ie": 10
      },
      "debug": true,
      "useBuiltIns": false // 必须禁用
    }]
  ],
  "plugins": ["transform-runtime"]
}
```

源码

```js
const num1 = 100;

export const func1 = () => {};

const arr = [1, 2, 3, 4];

const isOk = arr.includes(2);

export class Person {
  constructor(name) {
    this.name = name;
  }

  sayName() {
    return this.name;
  }
}

const p = Promise.resolve();

p.then(() => {
  console.log('Promise')
})

const person = new Person('zjj');
person.sayName();

console.log('[DEBUG]: ', isOk, num1);

```
输出 Out:
```js
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

var isOk = arr.includes(2);

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
```

> 结论：
- 最终我们实现了按需引入。
- 而且未污染全局环境。

### 阶段四：

阶段三的案例中，includes 未被转换，这是 babel-runtime 的缺点，它不模拟实例方法。

```js
{
  "presets": [
    ["env", {
      "targets": {
        "chrome": 40,
        "safari": 6,
        "ie": 10
      },
      "debug": true,
      "useBuiltIns": false
    }]
  ],
  "plugins": ["transform-runtime", "babel-plugin-array-includes"]
}
```

输出 Out

```js
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

```

> 结论：
- 内置对象原型上的方法需要自己手动去引入对应插件。
