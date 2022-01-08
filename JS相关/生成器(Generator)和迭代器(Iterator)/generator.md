# Generator 和 Async 简介

在讲Generator之前, 咱们要来先了解另外一个概念, 迭代器.

## 迭代器(Iterator)

迭代器Iterator 是 ES6 引入的一种新的遍历机制，同时也是一种特殊对象，它具有一些专门为迭代过程设计的专有接口。

每个迭代器对象都有一个next()方法，每次调用都返回一个当前结果对象。当前结果对象中有两个属性：

1. value：当前属性的值

2. done：用于判断是否遍历结束，当没有更多可返回的数据时，返回true

每调用一次next()方法，都会返回下一个可用的值，直到遍历结束。


## 生成器(Generator)
generator 是ES6新增语法

[教程1](https://www.runoob.com/w3cnote/es6-generator.html)


生成器是一种返回迭代器的函数，通过function关键字后的星号(*)来表示，函数中会用到新的关键字yield。星号可以紧挨着function关键字，也可以在中间添加一个空格.

```js
function* generator() {
    const list = [1, 2, 3];
    for (let i of list) {
        yield i;
    }
}


let g = generator();

console.log(g.next()); // {value: 1, done: false}
console.log(g.next()); // {value: 2, done: false}
console.log(g.next()); // {value: 3, done: false}
console.log(g.next()); // {value: undefined, done: true}
```

### 特性

1. 每当执行完一条yield语句后函数就会自动停止执行, 直到再次调用next();
2. yield关键字只可在生成器内部使用，在其他地方使用会导致程序抛出错误;
3. 可以通过函数表达式来创建生成器, 但是不能使用箭头函数
    `let generator = function *(){}`



### 定义

#### next 方法

一般情况下，next 方法不传入参数的时候，yield 表达式的返回值是 undefined 。当 next 传入参数的时候，该参数会作为上一步yield的返回值。

#### return 方法

return 方法返回给定值，并结束遍历 Generator 函数。

#### throw 方法

throw 方法可以再 Generator 函数体外面抛出异常，再函数体内部捕获。

#### yield* 表达式

yield* 表达式表示 yield 返回一个遍历器对象，用于在 Generator 函数内部，调用另一个 Generator 函数。



## Async 和 Await

这个就比较简单了, 非常常用, 就不多赘述了.

但是同学们想不想知道怎么封装一个函数, 能够让generator自动执行到完毕? 

```js
function longTimeFn(time) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(time);
        }, time);
    })
};

function asyncFunc(generator) {
    const iterator = generator(); // 接下来要执行next
    // data为第一次执行之后的返回结果，用于传给第二次执行
    const next = (data) => {
        const { value, done } = iterator.next(data); // 第二次执行，并接收第一次的请求结果 value 和 done

        if (done) return; // 执行完毕, 直接返回
        // 第一次执行next时，yield返回的 promise实例 赋值给了 value
        value.then(data => next(data)); // 当第一次value 执行完毕且成功时，执行下一步(并把第一次的结果传递下一步));
    }
    next();
};

asyncFunc(function* () {
    let data = yield longTimeFn(1000);
    console.log(data);
    data = yield longTimeFn(2000);
    console.log(data);
    return data;
})
```