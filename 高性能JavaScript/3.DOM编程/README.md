# DOM编程
用脚本进行DOM操作的代价很昂贵，它是富Web应用中最常见的性能瓶颈。


## 浏览器中的DOM
* 文档对象模型Document Object Model （DOM）是一个独立于语言的，用于操作XML和HTML文档的程序接口（API）

* 尽管DOM是一个与语言无关的API，它在浏览器中的**接口**却是用JavaScript实现的

* 浏览器中通常会把DOM和JavaScript独立实现

* 天生就慢，两个相互独立的功能只要通过接口彼此连接，就会产生消耗（过桥费），访问DOM的次数越多，费用也就越高

## DOM访问与修改

* 访问DOM元素是有代价的，修改则更为昂贵，它会导致浏览器重新计算页面的几何变化（尤其是循环访问或修改元素）

* 通用的做法是： 减少DOM的访问次数，把运算留在ECMAScript这一端处理

## innerHTML方法和DOM方法document.createElement()性能对比

* 在最新版的WebKit内核中，DOM方法略胜一筹。

* 在旧版浏览器中，innerHTML的优势更加明显。

* 如果在一个对性能有着苛刻要求的操作中更新一大段HTML，<u>**推荐使用innerHTML**</u>，因为他在绝大多数浏览器中运行得更快。


## 节点克隆
* 使用element.cloneNode() 比 使用document.createElement() 速度更快些


## HTML集合

HTML集合是包含了DOM节点引用的数组对象。以下方法的返回值就是一个集合：
* document.getElementsByName()
* document.getElementsByClassName()
* document.getElementsByTagName()

集合类似是一个类似数组的列表，具有length属性，但并不是真正的数组。它没有数组的方法。
### 关于集合遍历的性能优化：

* 当遍历一个集合时第一优化原则是将集合存储在局部变量中。
* 读取集合的length属性会引发集合进行更新，会引发明显的性能问题。通常做法是在循环体外使用变量缓存length属性。
* 在循环体内部，使用局部变量缓存需要多次读取的元素。
* 遍历数组比遍历集合更快，在特定条件下应考虑是否将集合拷贝至数组中。


## 遍历DOM

### childNodes 和 nextSibling

老版本的IE中更推荐使用nextSibling方法查找DOM节点。其他情况取决于个人或团队偏好。


### 元素节点

DOM元素属性诸如childNodes、firstChild、nextSibling并不区分元素节点和其他类型节点（如注释和文本节点），大多数情况下我们只需要访问元素节点。

使用浏览器提供的API只会返回元素节点，且效率较高：
属性名 | 被替代的属性
---- | ----
children | childNodes
childElementCount | childNodes.length
firstElementChild | firstChild
lastElementChild | lastChild
nextElementSibling | nextSibling
previousElementSibling | previousSibling


### 选择器API
考虑以下两种方法：

1. var elements = document.getElementById('menu').getElementsByTagName('a');
2. var elements = document.querySelectorAll('#menu a');


#### 说明：
* 第一种方法代码显然要冗长一些，且性能不如原生的document.querySelectorAll()方法。
* 第一种方法返回的是一个HTML集合，第二种方法返回的是一个数组。这避免了之前讨论的HTML集合引起的性能和潜在逻辑问题。
* 使用querySelectorAll()会更有效率，比如：document.querySelectorAll('div.warning, div.notice') 可同时查询class为warning的div元素和class为notice的元素。
* 同样还可以使用querySelector()来获取第一个匹配的节点。


## 重绘和重排




























