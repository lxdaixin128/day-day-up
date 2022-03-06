# vue 组件通信方式总结

## 父对子

- props
- $attrs
- 通过$refs 直接访问
- provide inject

## 子对父

- 作用域插槽 `slot-scope`(vue2) `v-slot:default`(vue3)（父组件可以访问到子组件的内容，但不可修改）
- $emit
- v-model 语法糖（v-model 属于子组件修改父组件变量）

## 兄弟

- event-bus 事件监听
- VueX (实际也是使用了 `provide` `inject`)
