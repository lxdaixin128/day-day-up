# 块格式化上下文(BFC)
- Block Formatting Context

[MDN文档](https://developer.mozilla.org/zh-CN/docs/Web/Guide/CSS/Block_formatting_context)


> MDN文档写得很详细, 但还是要再凝练一下, 方便记忆

## 触发BFC
- `display: flow-root` 可以创建一个`无副作用的BFC`
- body 根元素
- 浮动元素：float 除 none 以外的值
- 绝对定位元素：position (absolute、fixed)
- display 为 inline-block、table-cells、flex
- overflow 除了 visible 以外的值 (hidden、auto、scroll)



## BFC 特性及应用

- 同一个 BFC 下元素的外边距(`margin`)会发生折叠(`垂直方向`)

- BFC 可以包含浮动的元素（清除浮动）
