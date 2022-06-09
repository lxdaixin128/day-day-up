

### 你了解JS中的内存管理吗？什么情况会导致内存泄漏呢？


1. **内存生命周期**

- 内存分配：生命变量、对象、函数的时候

- 内存使用：读写内存，使用变量、函数等

- 内存回收：使用完毕，由垃圾回收机制自动回收不再使用的内存

2. **JS中的内存分配**

  ```js
  const n = 123
  const s = 'sssfdasdfsafdsasssfdasdfsafdsasssfdasdfsafdsasssfdasdfsafdsasssfdasdfsafdsasssfdasdfsafdsasssfdasdfsafdsasssfdasdfsafdsa'
  ```

3. **JS中的内存使用**

  ```js
  const a = 10;
  console.log(a)
  ```


4. **JS中的垃圾回收机制**

  垃圾回收算法主要依赖于引用的概念

- **引用计数法**

  看一个对象是否有指向它的引用，如果没有对象指向它了，说明这个对象不再被需要了

  致命问题： 循环引用！！！

  如果两个对象相互引用，尽管他们已不再被使用，但是引用计数法也无法识别，垃圾回收也不会再去回收他们

- **标记清除法**

  将“不再使用的对象”定义为“无法到达的对象” 

  从根部JS全局对象触发，定时扫描内存中的对象，凡是无法到达的对象，就会被标记为不再使用，稍后进行回收

  1. 垃圾回收机制在运行的时候会给在内存中存储的所有变量都加上标记
  2. 将从根部可以触及到的变量的标记清除
  3. 剩下的还有标记的变量被视为将要删除的变量
  4. 垃圾回收机制销毁带有标记的变量 回收内存空间 


5. **常见的内存泄漏**
- 全局变量
  ```js
  function foo() {
    bar1 = 'aaa'
    this.bar2 = 'aaaa'
  }
  foo();

  ```
- 未被清理的定时器和回调函数
  ```js
  setInterval
  setTimeout

  clearInterval
  clearTimeout
  ```
- 闭包
  ```js 
  // 一个内部函数有权访问包含其的外部函数的变量
  var theThing = null;
  var replaceThing = function () {
    var originalThing = theThing;
    var unused = function () {
      if (originalThing) {
        console.log(111)
      }
    }
    theThing = {
      longStr: '111111',
      method: function () {
        console.log(123)
      }
    }
  }
  setInterval(replaceThing, 1000)
  ```


