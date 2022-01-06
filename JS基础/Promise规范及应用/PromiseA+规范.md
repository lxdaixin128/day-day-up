# PromiseA+ 规范


## 术语
1. promise, 是一个有then方法的对象或者函数, 行为遵循本规范
2. thenable, 是一个有then方法的函数或者对象
3. value, promise 状态成功时的值 **resolve** 的参数, number, boolean, undefined, promise
4. reason, promise 状态失败时的值 **reject** 的参数, 表示各种拒绝的原因
5. exception 异常值

## 规范

### Promise states

有三种状态, 

1. pending

  1.1 初始状态, 可改变
  1.2 一个Promise 在`resolve/reject`之前都处于这个状态
  1.3 resolve: pending -> fulfilled 状态
  1.4 reject: pending -> rejected 状态

2. fulfilled

  2.1 最终态, 不可变
  2.2 一个promise被`resolve`后会变成这个状态
  2.3 必须拥有一个value值

3. rejected

  2.1 最终态, 不可变
  2.2 一个promise被`reject`后会变成这个状态
  2.3 必须拥有一个reason值

pending -> resolve(value) -> fulfilled
pending -> reject(reason) -> rejected

### then

promise 应该提供一个then方法, 用来访问最终的结果

```js
promise.then(onFulfilled, onRejected)
```

1. 参数要求

  1.1 onFulfilled 必须是一个函数类型, 如果不是函数, 应该被**忽略**(生成一个默认的函数)

  1.2 onRejected 必须是一个函数类型, 如果不是函数, 应该被**忽略**(生成一个默认的函数)

2. onFulfilled 特性

  2.1 promise变成fulfilled时, 应该调用 onFulfilled, 参数是 value
  2.2 promise在变成fulfilled之前, 不应该被调用
  2.3 只能被调用一次

3. onRejected

  3.1 promise变成 rejected 时, 应该调用 onRejected, 参数是 reason
  3.2 promise在变成 rejected 之前, 不应该被调用
  3.3 只能被调用一次

4. onFulfilled 和 onRejected 执行环境应该是微任务里

queueMicrotask()


5. then方法可以被调用多次(或链式调用)

```js
const promise  = new Promise();


promise.then(cb1, cb2);
promise.then(cb1, cb2);
promise.then(cb1, cb2);
promise.then(cb1, cb2);
promise.then(cb1, cb2);

[onFulfilled1, onFulFilled2, onFulFilled3]
[onRejected1, onRejected2, onRejected3]
```



5.1 promise状态变成`fulfilled`后, 所有的 onFulfilled 回调都需要按照then的顺序执行
5.2 promise状态变成`rejected`后, 所有的 onRejected 回调都需要按照then的顺序执行



6. then的返回值

  then返回值应该是一个promise, 并且是一个新的promise

```js
const promise1 = new Promise();

const promise2 = promise1.then(onFulfilled, onRejected);
```

6.1 onFulfilled 或者 onRejected 执行结果为x, 调用resolvePromise()
6.2 onFulfilled 或者 onRejected 执行时候报错了, promise2就需要被reject, 且后续全部的then都会被reject
6.3 onFulfilled 不是一个函数, 使用一个默认的函数做代替(做一个透传)
6.4 onRejected 不是一个函数, 使用一个默认的函数做代替(做一个透传)

7. resolvePromise

```js
resolvePromise(promise2, x, resolve, reject)
```
x是`promise1` `resolve或reject`的内容, 即`resolve(x)或reject(x)`

7.1 如果 promise2 和 x 相等，那么 reject TypeError

7.2 如果 x 是一个 promsie
        如果x是pending态，那么promise必须要在pending,直到 x 变成 fulfilled or rejected.
        如果 x 被 fulfilled, fulfill promise with the same value.
        如果 x 被 rejected, reject promise with the same reason.
        
7.3 如果 x 是一个 object 或者 是一个 function
    let then = x.then.
    如果 x.then 这步出错，那么 reject promise with e as the reason.
    如果 then 是一个函数，then.call(x, resolvePromiseFn, rejectPromise)
        resolvePromiseFn 的 入参是 y, 执行 resolvePromise(promise2, y, resolve, reject);
        rejectPromise 的 入参是 r, reject promise with r.
        如果 resolvePromise 和 rejectPromise 都调用了，那么第一个调用优先，后面的调用忽略。
        如果调用then抛出异常e 
            如果 resolvePromise 或 rejectPromise 已经被调用，那么忽略
            则，reject promise with e as the reason
    如果 then 不是一个function. fulfill promise with x.


这段描述看起来非常的空洞乏味, 最重要的是看不懂！ 所以待会实现代码的时候, 同学们注意一下resolvePromise函数具体的实现, 结合代码来看会好很多.