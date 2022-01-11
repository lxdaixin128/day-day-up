# Map&WeakMap

## Map和Object的区别

- Object 的键只能是 `String` 或者 `Symbols`, 但一个 Map 的键可以是`任意值`
- Map 中的键值是有序的(FIFO 原则), 而添加到对象中的键则不是
- Map 的键值对个数可以从 `size` 属性获取, 而 Object 的键值对个数只能手动计算
- Object 都有自己的原型, 原型链上的键名有可能和你自己在对象上的设置的键名产生冲突

## WeakMap和Map的区别

- Map 对象的键可以是任何类型, 但 WeakMap 对象中的键只能是对象引用;
- WeakMap 不能包含无引用的对象, 否则会被自动清除出集合(垃圾回收机制);
- WeakMap 对象是不可枚举的, 无法获取集合的大小.


举个例子说明WeakMap使用原理
```js
let obj = { a: 'a', b: 'b' } // obj强引用

const weakMap = new WeakMap()

weakMap.set(obj, 'obj_value') // obj弱引用

obj = null  // weakMap, 只包含obj的弱引用, 当obj置位null时, 根据引用计数法, weakMap中的obj内存将被释放
```

## WeakMap应用

### 用于制作缓存


