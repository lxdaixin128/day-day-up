const mySet = new Set();


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



/* 类型转换 */
// Array 转 Set
let arrSet = new Set([1, 2, 3, 4])

// Set 转 Array
let arr = [...arrSet]

// String 转 Set
let strSet = new Set('hello')

// Set 转 String
// let str = strSet.toString() // 注意: Set 中 toString 方法是不能将 Set 转换成 String
let str = [...strSet].join('') // helo  (少一个l)


/* Set对象作用 */

// 1. 数组去重
let mySet = new Set([1, 2, 3, 4, 4]);
[...mySet]; // [1, 2, 3, 4]

// 2. 并集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let union = new Set([...a, ...b]); // {1, 2, 3, 4}

// 3. 交集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let intersect = new Set([...a].filter(x => b.has(x))); // {2, 3}

// 4. 差集
let a = new Set([1, 2, 3]);
let b = new Set([4, 3, 2]);
let difference = new Set([...a].filter(x => !b.has(x))); // {1}