/* Map */
const myMap = new Map();

// 1. 通过set和get方法设置和获取键值
myMap.set('a_key', 'a_value')
const a_key = myMap.get('a_key')

// 2. Map的键值可以是 任意值
// key是数字
myMap.set(1, '1_value')

// key是对象
const obj = { a: 'a', b: 'b' }
myMap.set(obj, 'obj_value')
myMap.get(obj) // obj_value

// key是函数
const fn = () => {}
myMap.set(fn, 'fn_value')
myMap.get(fn) // fn_value

// 3. 通过size获取大小
myMap.size // 3

// 4. 迭代
const keys = myMap.keys()

const entries = myMap.entries()

const values = myMap.values()
// 以上三种方法都返回一个迭代器

for (var key of myMap.keys()) {
  // console.log(key);
}

for (var [key, value] of myMap.entries()) {
  // console.log(key + " = " + value);
}

for (var value of myMap.values()) {
  // console.log(value);
}

// for...of迭代
for (var [key, value] of myMap) {
  // console.log(key + " = " + value);
}

// forEach迭代
myMap.forEach(function(value, key) {
  // console.log(key + " = " + value);
}, myMap)


/* WeakMap */

