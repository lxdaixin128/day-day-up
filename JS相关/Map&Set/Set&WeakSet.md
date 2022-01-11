# Set&WeakSet

## Set
- 值不重复
```js
/* 值不重复 */
mySet.add(1);
mySet.add(1); // {1}

mySet.add(undefined);
mySet.add(undefined); // {1, undefined}

mySet.add(NaN);
mySet.add(NaN); // {1, undefined, NaN}

var o = {a: 1, b: 2};
mySet.add(o);
mySet.add({a: 1, b: 2}); // {1, undefined, NaN, {a: 1, b: 2}, {a: 1, b: 2}}
// 这里体现了对象之间引用不同不恒等，即使值相同，Set 也能存储
```


## WeakSet
```js
const myWeakSet = new WeakSet();
try {
  myWeakSet.add(1) // Error
} catch (e) {
  console.log(e)
}
// 只能添加引用类型
const obj = {}
myWeakSet.add(obj) 
console.log(myWeakSet)
```