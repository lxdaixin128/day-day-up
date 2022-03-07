# CJS, AMD, UMD 和 ESM是什么

## CJS 
- cjs是commonJS的缩写
- cjs是同步的
- 不能在浏览器中工作，必须经过打包
```js
// import
const react = require('react')

// export
module.exports = {
  // something
}
```


## AMD: 异步模块定义
- 顾名思义异步加载
- AMD 是为前端而做的(而 CJS 是后端)
```js
// 引用模块
require(["依赖的模块名"], callback);

// 定义模块 
define("模块名", ["依赖的模块名"], callback）
```

## UMD: 通用模块定义
- 在前端和后端都适用
- 当使用 Rollup/Webpack 之类的打包器时，UMD 通常用作备用模块
```js
// 引用模块
(function (root, factory) {
  if (typeof define === "function" && define.amd) {
    define(["jquery", "underscore"], factory);
  } else if (typeof exports === "object") {
    module.exports = factory(require("jquery"), require("underscore"));
  } else {
    root.Requester = factory(root.$, root._);
  }
}(this, function ($, _) {
  // this is where I defined my module implementation

  var Requester = {  };

  return Requester;
}));
```


## ESM 
- 现代浏览器可以使用
- 兼具 CJS 的简单语法和 AMD 的异步
- TreeShaking

```js
// import 
import react from 'react'

// export
export react from 'react'

// .....
// 不做过多演示
```




