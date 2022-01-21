# 上下文和this指向

## 默认绑定

### 严格模式下this指向undefined

- ES6 `type=module` 自动使用严格模式
- 非严格模式下 `this 指向 window`

```html
<script type="module">
  console.log(this); // undefined
</script>
```

```html
<script>
  console.log(this); // window
</script>
```

### `<script>` 标签下的 `var变量` 会自动挂载到window上

- `let` 和 `const` 变量不会
- 注意function内部定义的变量

```html
<script> 
  let a = 1;
  const b = 2;
  var c = 3;
  function print() {
    var d = 4;
    e = 5; // e是imply global，会挂载到window上
    console.log(this.a); // undefined
    console.log(this.b); // undefined
    console.log(this.c); // 3
    console.log(this.d); // undefined
    console.log(this.e); // 5  // ！！！！注意d和e的区别
  }
  print();
  console.log(this.a); // undefined
</script>
```


### Object内定义函数会自动bind this指向

```html
<script>
  a = 1; // 非严格模式下使用未定义的变量不报错
  function foo() {
    console.log(this.a);
  }
  const obj = {
    a: 10,
    bar() {
      console.log(this.a); // 10 -----   this指向obj
      foo(); // 1
    }
  }
  obj.bar();
</script>
```

## 隐式绑定

> 1. 规则: this永远指向最后调用它的那个对象
> 2. 函数的调用是在某个对象上触发的，即调用位置存在上下文对象，通俗点说就是 `xxx.func()` 这种调用模式。
> 3. 执行嵌套函数(一个函数内执行另一个函数)并不会改变this指向

### 隐式绑定


```html
<script>
  var a = 1;
  function foo() {
    console.log(this.a);
  }
  var obj = { a: 2, foo }
  foo(); // 1 ----- 嵌套函数, this指向没有改变, 此时是默认绑定
  obj.foo(); // 2
</script>

```

### 隐式绑定丢失

```html
<script>
  a = 1;
  var obj = {
    a: 2,
    foo() {
      console.log(this.a);
    }
  }
  var foo = obj.foo;
  var obj2 = { a: 3, foo: obj.foo }


  obj.foo(); // 2
  foo(); // 1
  obj2.foo() // 3
</script>
```

### 函数作为参数传递

```html
<script>
  function foo() {
    console.log(this.a)
  }
  function doFoo(fn) {
    console.log(this)
    fn()
  }
  var obj = { a: 1, foo }
  var a = 2
  var obj2 = { a: 3, doFoo }

  doFoo(obj.foo) // Window, 2 ----- obj.foo作为实参赋值给了形参fn, 改变了this指向
  obj2.doFoo(obj.foo) // {a: 3, doFoo: ƒ}, 2 ----- foo()是嵌套函数, 实际是默认绑定

</script>
```


## 显示绑定

> 显式绑定比较好理解，就是通过`call()`、`apply()`、`bind()`等方法，强行改变this指向。


## 显示绑定拓展


## new绑定












