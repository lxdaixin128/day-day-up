# Vue3 新特性

### Teleport 标签 [链接](https://v3.cn.vuejs.org/guide/teleport.html)

### 非 Prop 的 Attribute 继承 [链接](https://v3.cn.vuejs.org/guide/component-attrs.html)

父组件 attribute 绑定至子组件

```html
<!-- 父组件 -->
<div id="date-picker" class="demo">
  <date-picker @change="showChange"></date-picker>
</div>
```

```js
// 子组件
app.component('date-picker', {
  inheritAttrs: false, // 禁用默认根结点绑定
  template: `
    <div class="date-picker">
      <input type="datetime-local" v-bind="$attrs" />
    </div>
  `,
});
```

### `<template>` 标签可以包含多个根结点 [链接](https://v3.cn.vuejs.org/guide/migration/fragments.html#%E6%A6%82%E8%A7%88)

### scoped 穿透

[链接](https://v3.cn.vuejs.org/api/sfc-style.html#style-scoped) [github](https://github.com/vuejs/rfcs/blob/master/active-rfcs/0023-scoped-styles-changes.md#basic-example)

```html
<style scoped>
  /* 深度选择器 */
  .a :deep(.b) {
    /* ... */
  }

  /* 插槽选择器 */
  :slotted(div) {
    color: red;
  }

  /* 全局选择器 */
  :global(.red) {
    color: red;
  }
</style>
```

### `<style module>` [链接](https://v3.cn.vuejs.org/api/sfc-style.html#style-module)

- 对生成的类做 hash 计算以避免冲突，实现了和 scope CSS 一样将 CSS 仅作用于当前组件的效果
- 自定义注入名称
- useCssModule() 打印出来是 hash

### 状态驱动的动态 CSS [链接](https://v3.cn.vuejs.org/api/sfc-style.html#%E7%8A%B6%E6%80%81%E9%A9%B1%E5%8A%A8%E7%9A%84%E5%8A%A8%E6%80%81-css)

- `<style>` 标签内使用 v-bind 访问 `<script>` 中的变量(this)

- 修改第三方组件库组件`内部样式`很方便: 先用 `:deep` 穿透, 然后 `v-bind` 动态绑定样式

```html
<script setup>
  const theme = {
    color: 'red',
  };
</script>

<template>
  <p>hello</p>
</template>

<style scoped>
  p {
    color: v-bind('theme.color');
  }
</style>
```

### `<suspense>` 标签(实验性) [链接](https://v3.cn.vuejs.org/guide/migration/suspense.html#suspense)

### v-model:title 自定义参数 [链接](https://v3.cn.vuejs.org/guide/migration/v-model.html#v-model)

### v-model.capitalize 自定义修饰符 [链接](https://v3.cn.vuejs.org/guide/component-custom-events.html#处理-v-model-修饰符)
