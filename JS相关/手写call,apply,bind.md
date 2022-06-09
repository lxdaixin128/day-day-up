#### bind 的原理 / 手写 bind

- 原理或者手写类题目，解题思路
- 1. 说明原理，写下注释
- 2. 根据注释，补齐代码

```js
// 1. 需求：手写bind => bind位置（挂在那里） => Function.prototype
Function.prototype.newBind = function () {
  // 2. bind是什么?
  const _this = this;
  const args = Array.prototype.slice.call(arguments);
  // args特点，第一项是新的this，第二项~最后一项函数传参
  const newThis = args.shift();

  // a. 返回一个函数
  return function () {
    // b. 返回原函数执行结果 c. 传参不变
    return _this.apply(newThis, args);
  };
};

Function.prototype.newApply = function (context) {
  // 边缘检测
  // 函数检测
  if (typeof this !== 'function') {
    throw new TypeError('Error');
  }
  // 参数检测
  context = context || window;

  // 挂载执行函数
  context.fn = this;

  // 执行执行函数
  let result = arguments[1] ? context.fn(...arguments[1]) : context.fn();

  // 销毁临时挂载
  delete context.fn;
  return result;
};
```
