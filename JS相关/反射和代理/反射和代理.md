# 反射(Reflect)和代理(Proxy)

[你可能忽视的ES6语法——反射和代理](https://github.com/xingbofeng/xingbofeng.github.io/issues/17)



## 代理(Proxy)

- proxy的本质是为一个`对象`的`属性`或`方法调用`提供拦截器(监听器)
- 所有代理陷阱中，只有`apply`和`construct`的代理目标是一个函数(方法调用)

[Proxy-MDN](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Proxy)

#### 面试题: `Object.defineProperty()`和`Proxy`的区别?

- `Object.defineProperty()`只能监听到属性的`读写`(get(), set())

- `Proxy`除读写外还可以监听属性的`删除`, `方法的调用`等等...

```js
const target = {
  id: 1,
  name: '张三',
  age: 18,
  sex: '男'
}

const handler = {
  // in 操作符的捕捉器
  hasPrototypeOf: function() {},

  // 属性读取操作的捕捉器
  get: function(target, prop, receiver) {},

  // 属性设置操作的捕捉器
  set: function() {},

  getPrototypeOf: function() {},

  setPrototypeOf: function() {},

  isExtensible: function() {},

  preventExtensions: function() {},

  getOwnPropertyDescriptor: function() {},


  // 函数调用劫持
  apply: function() {},

  // new操作符劫持
  construct: function() {}

  // ...
}

const proxy = new Proxy(target, handler)
```
#### 创建一个可撤销的代理

```js
let target = {
  name: 'target',
};

// 创建一个可被撤销的代理
let { proxy, revoke } = Proxy.revocable(target, {});

console.log(proxy.name); // 'target'
revoke();
// 抛出错误
console.log(proxy.name);
```


## 反射(Reflect)

- 只能通过静态方法的方式调用
- Reflect内部封装了一系列对`对象`的`底层操作`
- Reflect成员方法就是Proxy处理对象的默认实现

```js
const proxy = new Proxy(obj, {
  get(target, property) {
    return Reflect.get(target, property);
  }
})
```


- Reflect提供了一套统一操作Object的API

```js
/* 伪代码 */
// 判断对象是否存在某一个属性
name in obj => Reflect.has(obj, name)

// 删除一个属性
delete obj.name => Reflect.deleteProperty(obj, name);

// 获取所有属性名
Object.keys(obj) => Reflect.ownKeys(obj)

// 用Reflect操作对象 他才是未来
```

