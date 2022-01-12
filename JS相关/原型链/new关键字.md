# new关键字做了什么


```js
class Base {
  constructor() {
    // ...
  }
}


let obj = new Base()


// new关键字做了什么? ===>

let obj = {};
obj.__proto__ = Base.prototype; 
Base.call(obj); // Base是构造函数

```


